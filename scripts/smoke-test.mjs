// Production smoke test: registers a throwaway member, exercises the rules, then removes it.
import { createHash, webcrypto } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

const config = {
  apiKey: 'AIzaSyCEaVNk-ccwOZ3mzDiITAztK0l4Qq6Cu2Y',
  authDomain: 'legajosonline-959f6.firebaseapp.com',
  projectId: 'legajosonline-959f6',
  appId: '1:753392336661:web:b2d23e3cc6aae7a0c4331c',
};

// Browser derivation (same as src/lib/credentials.ts) vs Node derivation (functions + migration).
const browserEmail = async (u) => {
  const digest = await webcrypto.subtle.digest('SHA-256', new TextEncoder().encode(u.trim().normalize('NFC').toLowerCase()));
  return `u${Buffer.from(digest).toString('hex').slice(0, 40)}@bacarpass.local`;
};
const nodeEmail = (u) => `u${createHash('sha256').update(u.trim().normalize('NFC').toLowerCase(), 'utf8').digest('hex').slice(0, 40)}@bacarpass.local`;

let failed = 0;
const check = async (name, fn, expectFail = false) => {
  try {
    await fn();
    if (expectFail) throw new Error('debía fallar y funcionó');
    console.log(`  ok   ${name}`);
  } catch (err) {
    if (expectFail && err.code === 'permission-denied') return console.log(`  ok   ${name}`);
    failed++;
    console.log(`  FAIL ${name}: ${err.code || ''} ${err.message}`);
  }
};

for (const u of ['admin', 'josé.peña', 'Nombre Apellido', 'usuario.largo@empresa-ejemplo.com.ar']) {
  await check(`derivación idéntica navegador/servidor: ${u}`, async () => {
    if ((await browserEmail(u)) !== nodeEmail(u)) throw new Error('distinta');
  });
}

const app = initializeApp(config, 'smoke');
const auth = getAuth(app);
const db = getFirestore(app);
const username = `zz-prueba-${Date.now()}`;
const pin = '4321';
let uid;

await check('registro vía Cloud Function', async () => {
  uid = (await httpsCallable(getFunctions(app, 'southamerica-east1'), 'bacarpassRegister')({ username, pin, fullName: 'Prueba Automática', area: 'QA' })).data.uid;
});
await check('registro duplicado rechazado', async () => {
  try {
    await httpsCallable(getFunctions(app, 'southamerica-east1'), 'bacarpassRegister')({ username: username.toUpperCase(), pin, fullName: 'Duplicado' });
    throw new Error('aceptó duplicado');
  } catch (err) {
    if (err.code !== 'functions/already-exists') throw err;
  }
});
await check('login con PIN (derivación del navegador)', () => signInWithEmailAndPassword(auth, nodeEmail(username), `bacarpass:${pin}`).then(async () => {
  if (auth.currentUser.email !== (await browserEmail(username))) throw new Error('email distinto');
}));
await check('PIN incorrecto rechazado', async () => {
  const other = getAuth(initializeApp(config, 'smoke-wrong'));
  try {
    await signInWithEmailAndPassword(other, nodeEmail(username), 'bacarpass:0000');
    throw new Error('aceptó PIN incorrecto');
  } catch (err) {
    if (err.code !== 'auth/invalid-credential') throw err;
  }
});

await check('lee su perfil de miembro', async () => {
  const snap = await getDoc(doc(db, 'bacarpass_members', uid));
  if (snap.data()?.role !== 'user') throw new Error('rol inesperado');
});
await check('lista miembros (para compartir)', async () => {
  const snap = await getDocs(collection(db, 'bacarpass_members'));
  if (snap.size < 23) throw new Error(`solo ${snap.size} miembros`);
});
let itemId;
await check('crea credencial propia', async () => {
  itemId = (await addDoc(collection(db, 'bacarpass_items'), { title: 'Prueba', ownerUid: uid, createdBy: username, sharedWithUids: [], sharedAccess: [] })).id;
});
await check('edita credencial propia', () => updateDoc(doc(db, 'bacarpass_items', itemId), { title: 'Prueba 2' }));
await check('consulta sus credenciales', () => getDocs(query(collection(db, 'bacarpass_items'), where('ownerUid', '==', uid))));
await check('consulta compartidas', () => getDocs(query(collection(db, 'bacarpass_items'), where('sharedWithUids', 'array-contains', uid))));
await check('NO lista todas las credenciales', () => getDocs(collection(db, 'bacarpass_items')), true);
await check('NO lee datos legacy', () => getDocs(collection(db, 'artifacts/bacarpass-v1/public/data/passwords')), true);
await check('NO se asciende a admin', () => updateDoc(doc(db, 'bacarpass_members', uid), { role: 'admin' }), true);
await check('NO usa funciones de admin', async () => {
  try {
    await httpsCallable(getFunctions(app, 'southamerica-east1'), 'bacarpassAdmin')({ action: 'setRole', uid, role: 'admin' });
    throw new Error('aceptó');
  } catch (err) {
    if (err.code !== 'functions/permission-denied') throw err;
  }
});
await check('borra credencial propia', () => deleteDoc(doc(db, 'bacarpass_items', itemId)));

const anonApp = initializeApp(config, 'smoke-anon');
const anonDb = getFirestore(anonApp);
await signInAnonymously(getAuth(anonApp));
await check('anónimo NO lee credenciales', () => getDocs(collection(anonDb, 'bacarpass_items')), true);
await check('anónimo NO lee miembros', () => getDocs(collection(anonDb, 'bacarpass_members')), true);
await check('anónimo NO lee legacy', () => getDocs(collection(anonDb, 'artifacts/bacarpass-v1/public/data/app_users')), true);

// Cleanup with the owner token of the local `firebase login` session.
const cfg = JSON.parse(readFileSync(join(homedir(), '.config', 'configstore', 'firebase-tools.json'), 'utf8'));
const headers = { Authorization: `Bearer ${cfg.tokens.access_token}`, 'x-goog-user-project': config.projectId, 'Content-Type': 'application/json' };
for (const id of [uid, getAuth(anonApp).currentUser?.uid].filter(Boolean)) {
  await fetch(`https://identitytoolkit.googleapis.com/v1/projects/${config.projectId}/accounts:delete`, { method: 'POST', headers, body: JSON.stringify({ localId: id }) });
}
if (uid) await fetch(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/bacarpass_members/${uid}`, { method: 'DELETE', headers });
console.log('  (usuario y sesión anónima de prueba eliminados)');

console.log(failed ? `\n${failed} verificaciones fallaron` : '\nTodas las verificaciones pasaron');
process.exit(failed ? 1 : 0);
