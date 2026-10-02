// One-off migration of legacy BacarPass data (artifacts/bacarpass-v1/public/data/*)
// to Firebase Auth accounts + bacarpass_members / bacarpass_items.
// Uses the access token of the local `firebase login` session (project owner).
// Idempotent: existing Auth accounts, members and items are left untouched.
//
//   node scripts/migrate.mjs --dry   # only report
//   node scripts/migrate.mjs         # migrate
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const PROJECT = 'legajosonline-959f6';
const DRY = process.argv.includes('--dry');

// Must stay in sync with src/lib/credentials.ts and functions/credentials.js.
const normalizeUsername = (u) => u.trim().normalize('NFC').toLowerCase();
const usernameToEmail = (u) =>
  `u${createHash('sha256').update(normalizeUsername(u), 'utf8').digest('hex').slice(0, 40)}@bacarpass.local`;
const pinToPassword = (pin) => `bacarpass:${pin}`;

const cfg = JSON.parse(readFileSync(join(homedir(), '.config', 'configstore', 'firebase-tools.json'), 'utf8'));
if (!cfg.tokens?.access_token || cfg.tokens.expires_at < Date.now() + 5 * 60_000) {
  console.error('Token vencido: ejecutá cualquier comando de firebase (ej. "firebase projects:list") y reintentá.');
  process.exit(1);
}
const headers = {
  Authorization: `Bearer ${cfg.tokens.access_token}`,
  'x-goog-user-project': PROJECT,
  'Content-Type': 'application/json',
};

async function api(url, options = {}) {
  const res = await fetch(url, { headers, ...options });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(`${res.status} ${url}: ${body.error?.message || JSON.stringify(body)}`);
    err.apiMessage = body.error?.message;
    throw err;
  }
  return body;
}

const FS = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const IDT = `https://identitytoolkit.googleapis.com/v1/projects/${PROJECT}`;

async function listAll(path) {
  const docs = [];
  let pageToken = '';
  do {
    const r = await api(`${FS}/${path}?pageSize=300${pageToken ? `&pageToken=${pageToken}` : ''}`);
    docs.push(...(r.documents || []));
    pageToken = r.nextPageToken || '';
  } while (pageToken);
  return docs;
}

const docId = (doc) => doc.name.split('/').pop();
const str = (v) => v?.stringValue ?? '';

async function ensureAuthUser(email, password, displayName) {
  if (DRY) {
    const r = await api(`${IDT}/accounts:lookup`, { method: 'POST', body: JSON.stringify({ email: [email] }) });
    return { uid: r.users?.[0]?.localId || `(nuevo:${email.slice(0, 9)})`, created: !r.users?.length };
  }
  try {
    const r = await api(`${IDT}/accounts`, { method: 'POST', body: JSON.stringify({ email, password, displayName }) });
    return { uid: r.localId, created: true };
  } catch (err) {
    if (err.apiMessage !== 'EMAIL_EXISTS') throw err;
    const r = await api(`${IDT}/accounts:lookup`, { method: 'POST', body: JSON.stringify({ email: [email] }) });
    return { uid: r.users[0].localId, created: false };
  }
}

async function commit(writes) {
  if (DRY || writes.length === 0) return;
  for (let i = 0; i < writes.length; i += 400) {
    await api(`${FS}:commit`, { method: 'POST', body: JSON.stringify({ writes: writes.slice(i, i + 400) }) });
  }
}

const legacyUsers = await listAll('artifacts/bacarpass-v1/public/data/app_users');
const legacyItems = await listAll('artifacts/bacarpass-v1/public/data/passwords');
const existingMembers = new Set((await listAll('bacarpass_members')).map(docId));
const existingItems = new Set((await listAll('bacarpass_items')).map(docId));
console.log(`Legacy: ${legacyUsers.length} usuarios, ${legacyItems.length} credenciales${DRY ? '  [DRY RUN]' : ''}`);

const seen = new Map();
for (const u of legacyUsers) {
  const key = normalizeUsername(str(u.fields.username));
  if (seen.has(key)) throw new Error(`Usuario duplicado tras normalizar: "${key}" (${seen.get(key)} / ${docId(u)})`);
  seen.set(key, docId(u));
}

const uidByUsername = new Map();
const memberWrites = [];
for (const u of legacyUsers) {
  const f = u.fields;
  const username = str(f.username).trim();
  const { uid, created } = await ensureAuthUser(usernameToEmail(username), pinToPassword(str(f.pin)), str(f.fullName));
  uidByUsername.set(normalizeUsername(username), uid);
  const isNewMember = !existingMembers.has(uid);
  console.log(`  ${created ? '+ auth' : '= auth'} ${isNewMember ? '+ miembro' : '= miembro'}  ${username}`);
  if (isNewMember) {
    memberWrites.push({
      update: {
        name: `projects/${PROJECT}/databases/(default)/documents/bacarpass_members/${uid}`,
        fields: {
          username: { stringValue: username },
          usernameLower: { stringValue: normalizeUsername(username) },
          fullName: { stringValue: str(f.fullName) || username },
          area: { stringValue: str(f.area) },
          role: { stringValue: str(f.role) === 'admin' ? 'admin' : 'user' },
          createdAt: f.createdAt || { timestampValue: new Date().toISOString() },
        },
      },
    });
  }
}
await commit(memberWrites);

const fallbackOwner = uidByUsername.get('admin');
const itemWrites = [];
let skipped = 0;
for (const item of legacyItems) {
  const id = docId(item);
  if (existingItems.has(id)) { skipped++; continue; }
  const f = { ...item.fields };
  let ownerUid = uidByUsername.get(normalizeUsername(str(f.createdBy)));
  if (!ownerUid) {
    console.warn(`  ! "${str(f.title)}" creada por "${str(f.createdBy)}" (sin usuario): se asigna a admin`);
    ownerUid = fallbackOwner;
  }
  const shares = (f.sharedAccess?.arrayValue?.values || []).flatMap((v) => {
    const target = str(v.mapValue.fields.targetUser);
    const targetUid = uidByUsername.get(normalizeUsername(target));
    if (!targetUid) {
      console.warn(`  ! "${str(f.title)}": compartida con "${target}" (sin usuario), se omite`);
      return [];
    }
    return [{ mapValue: { fields: { ...v.mapValue.fields, targetUid: { stringValue: targetUid } } } }];
  });
  const sharedWithUids = [...new Set(shares.map((s) => s.mapValue.fields.targetUid.stringValue))];
  itemWrites.push({
    update: {
      name: `projects/${PROJECT}/databases/(default)/documents/bacarpass_items/${id}`,
      fields: {
        ...f,
        notes: f.notes || { stringValue: '' },
        ownerUid: { stringValue: ownerUid },
        sharedAccess: { arrayValue: { values: shares } },
        sharedWithUids: { arrayValue: { values: sharedWithUids.map((s) => ({ stringValue: s })) } },
        updatedAt: f.createdAt || { timestampValue: new Date().toISOString() },
      },
    },
  });
}
await commit(itemWrites);

console.log(`Miembros nuevos: ${memberWrites.length}. Credenciales nuevas: ${itemWrites.length} (ya existentes: ${skipped}).`);
console.log(DRY ? 'DRY RUN: no se escribió nada.' : 'Migración completa.');
