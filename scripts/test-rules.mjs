// Run with: npm run test:rules  (starts the Firestore emulator)
import { readFileSync } from 'node:fs';
import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';

const env = await initializeTestEnvironment({
  projectId: 'demo-bacarpass',
  firestore: { rules: readFileSync('firestore.rules', 'utf8') },
});

await env.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  await setDoc(doc(db, 'bacarpass_members/admin1'), { username: 'admin', role: 'admin' });
  await setDoc(doc(db, 'bacarpass_members/ana'), { username: 'ana', role: 'user' });
  await setDoc(doc(db, 'bacarpass_members/beto'), { username: 'beto', role: 'user' });
  await setDoc(doc(db, 'bacarpass_items/anaItem'), { title: 'A', ownerUid: 'ana', sharedWithUids: ['beto'] });
  await setDoc(doc(db, 'bacarpass_items/betoItem'), { title: 'B', ownerUid: 'beto', sharedWithUids: [] });
  await setDoc(doc(db, 'artifacts/bacarpass-v1/public/data/passwords/old'), { title: 'legacy' });
  await setDoc(doc(db, 'artifacts/salas-app/public/data/rooms/r1'), { name: 'Sala 1' });
});

const as = (uid) => (uid ? env.authenticatedContext(uid).firestore() : env.unauthenticatedContext().firestore());
const anon = as('someAnonymousUid');
const ana = as('ana');
const beto = as('beto');
const admin = as('admin1');
const items = (db) => collection(db, 'bacarpass_items');

const cases = [
  ['anónimo no lee credenciales', () => assertFails(getDocs(items(anon)))],
  ['anónimo no lee miembros', () => assertFails(getDocs(collection(anon, 'bacarpass_members')))],
  ['anónimo no lee legacy', () => assertFails(getDocs(collection(anon, 'artifacts/bacarpass-v1/public/data/passwords')))],
  ['admin no lee legacy', () => assertFails(getDoc(doc(admin, 'artifacts/bacarpass-v1/public/data/passwords/old')))],
  ['sin sesión no lee nada', () => assertFails(getDoc(doc(as(null), 'bacarpass_items/anaItem')))],

  ['usuario lista lo propio', () => assertSucceeds(getDocs(query(items(ana), where('ownerUid', '==', 'ana'))))],
  ['usuario lista lo compartido', () => assertSucceeds(getDocs(query(items(beto), where('sharedWithUids', 'array-contains', 'beto'))))],
  ['usuario no lista todo', () => assertFails(getDocs(items(ana)))],
  ['usuario no lee ajenas', () => assertFails(getDoc(doc(ana, 'bacarpass_items/betoItem')))],
  ['usuario lee compartida', () => assertSucceeds(getDoc(doc(beto, 'bacarpass_items/anaItem')))],
  ['usuario no edita compartida', () => assertFails(updateDoc(doc(beto, 'bacarpass_items/anaItem'), { title: 'x' }))],
  ['usuario no borra compartida', () => assertFails(deleteDoc(doc(beto, 'bacarpass_items/anaItem')))],
  ['usuario crea propia', () => assertSucceeds(setDoc(doc(ana, 'bacarpass_items/n1'), { title: 'N', ownerUid: 'ana', sharedWithUids: [] }))],
  ['usuario no crea a nombre de otro', () => assertFails(setDoc(doc(ana, 'bacarpass_items/n2'), { title: 'N', ownerUid: 'beto' }))],
  ['usuario no cambia el dueño', () => assertFails(updateDoc(doc(ana, 'bacarpass_items/anaItem'), { ownerUid: 'beto' }))],
  ['usuario edita propia', () => assertSucceeds(updateDoc(doc(ana, 'bacarpass_items/anaItem'), { title: 'A2' }))],
  ['usuario no se hace admin', () => assertFails(updateDoc(doc(ana, 'bacarpass_members/ana'), { role: 'admin' }))],
  ['usuario no crea miembros', () => assertFails(setDoc(doc(anon, 'bacarpass_members/someAnonymousUid'), { role: 'user' }))],

  ['admin lista todo', () => assertSucceeds(getDocs(items(admin)))],
  ['admin edita ajena', () => assertSucceeds(updateDoc(doc(admin, 'bacarpass_items/betoItem'), { title: 'B2' }))],
  ['admin borra y restaura ajena', async () => {
    await assertSucceeds(deleteDoc(doc(admin, 'bacarpass_items/betoItem')));
    await assertSucceeds(setDoc(doc(admin, 'bacarpass_items/betoItem'), { title: 'B', ownerUid: 'beto', sharedWithUids: [] }));
  }],
  ['admin no escribe miembros directo', () => assertFails(updateDoc(doc(admin, 'bacarpass_members/ana'), { role: 'admin' }))],

  ['otras apps (salas) siguen funcionando', () => assertSucceeds(getDoc(doc(anon, 'artifacts/salas-app/public/data/rooms/r1')))],
  ['otras apps escriben', () => assertSucceeds(setDoc(doc(anon, 'artifacts/salas-app/public/data/rooms/r2'), { name: 'Sala 2' }))],
];

let failed = 0;
for (const [name, run] of cases) {
  try {
    await run();
    console.log(`  ok   ${name}`);
  } catch (err) {
    failed++;
    console.log(`  FAIL ${name}: ${err.message.split('\n')[0]}`);
  }
}
await env.cleanup();
console.log(failed ? `\n${failed} pruebas fallaron` : `\nTodas las pruebas pasaron (${cases.length})`);
process.exit(failed ? 1 : 0);
