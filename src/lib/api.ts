import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { httpsCallable } from 'firebase/functions';
import { auth, authReady, db, functions, ITEMS } from './firebase';
import { pinToPassword, usernameToEmail } from './credentials';
import type { Credential, Member, PasswordHistoryItem, SharedAccess } from '../types';

export function errorMessage(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
      case 'auth/invalid-email':
        return 'Usuario o PIN incorrectos.';
      case 'auth/too-many-requests':
        return 'Demasiados intentos. Esperá unos minutos y volvé a intentar.';
      case 'auth/network-request-failed':
        return 'Sin conexión. Revisá tu red.';
      case 'permission-denied':
        return 'No tenés permisos para esta acción.';
    }
    if (err.code.startsWith('functions/')) return err.message;
  }
  return 'Ocurrió un error inesperado.';
}

// ── Sesión ───────────────────────────────────────────────────────────────

export async function login(username: string, pin: string) {
  await authReady;
  await signInWithEmailAndPassword(auth, await usernameToEmail(username), pinToPassword(pin));
}

export const logout = () => signOut(auth);

export async function register(data: { username: string; pin: string; fullName: string; area: string }) {
  await httpsCallable(functions, 'bacarpassRegister')(data);
  await login(data.username, data.pin);
}

export async function changeOwnPin(currentPin: string, newPin: string) {
  const user = auth.currentUser;
  if (!user?.email) throw new Error('Sin sesión');
  await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, pinToPassword(currentPin)));
  await updatePassword(user, pinToPassword(newPin));
}

// ── Administración de miembros (Cloud Function) ──────────────────────────

const adminCall = httpsCallable(functions, 'bacarpassAdmin');

export const adminCreateUser = (data: { username: string; pin: string; fullName: string; area: string; role: Member['role'] }) =>
  adminCall({ action: 'createUser', ...data });
export const adminResetPin = (uid: string, pin: string) => adminCall({ action: 'resetPin', uid, pin });
export const adminSetRole = (uid: string, role: Member['role']) => adminCall({ action: 'setRole', uid, role });
export const adminDeleteUser = (uid: string) => adminCall({ action: 'deleteUser', uid });

// ── Credenciales ─────────────────────────────────────────────────────────

export interface CredentialInput {
  title: string;
  username: string;
  passwordValue: string;
  url: string;
  tag: string;
  notes: string;
}

export async function createCredential(input: CredentialInput, owner: Member) {
  await addDoc(collection(db, ITEMS), {
    ...input,
    createdBy: owner.username,
    ownerUid: owner.id,
    history: [],
    sharedAccess: [],
    sharedWithUids: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateCredential(original: Credential, input: CredentialInput, editor: Member) {
  const payload: Record<string, unknown> = { ...input, updatedAt: serverTimestamp() };
  if (original.passwordValue !== input.passwordValue) {
    const entry: PasswordHistoryItem = { value: original.passwordValue, changedAt: Timestamp.now(), changedBy: editor.username };
    payload.history = [...(original.history ?? []), entry];
  }
  await updateDoc(doc(db, ITEMS, original.id), payload);
}

export const deleteCredential = (item: Credential) => deleteDoc(doc(db, ITEMS, item.id));

export async function restoreCredential(item: Credential) {
  const { id, ...data } = item;
  await setDoc(doc(db, ITEMS, id), data);
}

export async function shareCredential(item: Credential, target: Member, accessPin: string) {
  const share: SharedAccess = { targetUser: target.username, targetUid: target.id, accessPin, sharedAt: Timestamp.now() };
  const shares = [...(item.sharedAccess ?? []), share];
  await updateDoc(doc(db, ITEMS, item.id), {
    sharedAccess: shares,
    sharedWithUids: [...new Set(shares.map((s) => s.targetUid))],
  });
}

export async function revokeShare(item: Credential, targetUid: string) {
  const shares = (item.sharedAccess ?? []).filter((s) => s.targetUid !== targetUid);
  await updateDoc(doc(db, ITEMS, item.id), {
    sharedAccess: shares,
    sharedWithUids: shares.map((s) => s.targetUid),
  });
}
