import { initializeApp } from 'firebase/app';
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCEaVNk-ccwOZ3mzDiITAztK0l4Qq6Cu2Y',
  authDomain: 'legajosonline-959f6.firebaseapp.com',
  projectId: 'legajosonline-959f6',
  storageBucket: 'legajosonline-959f6.firebasestorage.app',
  messagingSenderId: '753392336661',
  appId: '1:753392336661:web:b2d23e3cc6aae7a0c4331c',
  measurementId: 'G-JVM29M5BHC',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'southamerica-east1');

// Session ends when the tab closes: this is a password vault on shared office PCs.
export const authReady = setPersistence(auth, browserSessionPersistence);

export const MEMBERS = 'bacarpass_members';
export const ITEMS = 'bacarpass_items';
