const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { MIN_PIN_LENGTH, normalizeUsername, usernameToEmail, pinToPassword } = require('./credentials');

initializeApp();

const MEMBERS = 'bacarpass_members';
const REGION = 'southamerica-east1';

const text = (value, field, { min = 1, max = 80, optional = false } = {}) => {
  const v = typeof value === 'string' ? value.trim() : '';
  if (!v && optional) return '';
  if (v.length < min || v.length > max) {
    throw new HttpsError('invalid-argument', `El campo "${field}" debe tener entre ${min} y ${max} caracteres.`);
  }
  return v;
};

const pin = (value) => {
  if (typeof value !== 'string' || value.length < MIN_PIN_LENGTH || value.length > 64) {
    throw new HttpsError('invalid-argument', `El PIN debe tener al menos ${MIN_PIN_LENGTH} caracteres.`);
  }
  return value;
};

async function createMember({ username, pin: rawPin, fullName, area, role }) {
  const email = usernameToEmail(username);
  let user;
  try {
    user = await getAuth().createUser({ email, password: pinToPassword(rawPin), displayName: fullName });
  } catch (err) {
    if (err.code === 'auth/email-already-exists') {
      throw new HttpsError('already-exists', 'Ese nombre de usuario ya está en uso.');
    }
    throw err;
  }
  await getFirestore().collection(MEMBERS).doc(user.uid).set({
    username,
    usernameLower: normalizeUsername(username),
    fullName,
    area,
    role,
    createdAt: FieldValue.serverTimestamp(),
  });
  return user.uid;
}

exports.bacarpassRegister = onCall({ region: REGION }, async (request) => {
  const data = request.data || {};
  const uid = await createMember({
    username: text(data.username, 'Usuario', { min: 2, max: 60 }),
    pin: pin(data.pin),
    fullName: text(data.fullName, 'Nombre completo', { min: 2 }),
    area: text(data.area, 'Área', { optional: true }),
    role: 'user',
  });
  return { uid };
});

exports.bacarpassAdmin = onCall({ region: REGION }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Sesión requerida.');
  const caller = await getFirestore().collection(MEMBERS).doc(request.auth.uid).get();
  if (!caller.exists || caller.data().role !== 'admin') {
    throw new HttpsError('permission-denied', 'Solo un administrador puede hacer esto.');
  }

  const data = request.data || {};
  const targetUid = () => {
    const uid = text(data.uid, 'uid', { max: 128 });
    if (uid === request.auth.uid) {
      throw new HttpsError('failed-precondition', 'No podés aplicar esta acción sobre tu propia cuenta.');
    }
    return uid;
  };

  switch (data.action) {
    case 'createUser': {
      const role = data.role === 'admin' ? 'admin' : 'user';
      const uid = await createMember({
        username: text(data.username, 'Usuario', { min: 2, max: 60 }),
        pin: pin(data.pin),
        fullName: text(data.fullName, 'Nombre completo', { min: 2 }),
        area: text(data.area, 'Área', { optional: true }),
        role,
      });
      return { uid };
    }
    case 'resetPin': {
      await getAuth().updateUser(targetUid(), { password: pinToPassword(pin(data.pin)) });
      return { ok: true };
    }
    case 'setRole': {
      const role = data.role === 'admin' ? 'admin' : 'user';
      await getFirestore().collection(MEMBERS).doc(targetUid()).update({ role });
      return { ok: true };
    }
    case 'deleteUser': {
      const uid = targetUid();
      await getFirestore().collection(MEMBERS).doc(uid).delete();
      await getAuth().deleteUser(uid).catch((err) => {
        if (err.code !== 'auth/user-not-found') throw err;
      });
      return { ok: true };
    }
    default:
      throw new HttpsError('invalid-argument', 'Acción desconocida.');
  }
});
