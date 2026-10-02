// Must stay in sync with src/lib/credentials.ts and scripts/migrate.mjs.
const crypto = require('crypto');

const AUTH_EMAIL_DOMAIN = 'bacarpass.local';
const MIN_PIN_LENGTH = 4;

const normalizeUsername = (username) => username.trim().normalize('NFC').toLowerCase();

const usernameToEmail = (username) => {
  const hex = crypto.createHash('sha256').update(normalizeUsername(username), 'utf8').digest('hex');
  return `u${hex.slice(0, 40)}@${AUTH_EMAIL_DOMAIN}`;
};

const pinToPassword = (pin) => `bacarpass:${pin}`;

module.exports = { MIN_PIN_LENGTH, normalizeUsername, usernameToEmail, pinToPassword };
