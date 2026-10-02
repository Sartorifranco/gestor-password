// Must stay in sync with functions/credentials.js and scripts/migrate.mjs.
// Usernames may contain spaces, "@" or accents, so the Auth email is a hash of the
// normalized username. Firebase Auth requires passwords of 6+ chars, hence the prefix.

export const AUTH_EMAIL_DOMAIN = 'bacarpass.local';

export const normalizeUsername = (username: string) =>
  username.trim().normalize('NFC').toLowerCase();

export async function usernameToEmail(username: string): Promise<string> {
  const data = new TextEncoder().encode(normalizeUsername(username));
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hex = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `u${hex.slice(0, 40)}@${AUTH_EMAIL_DOMAIN}`;
}

export const pinToPassword = (pin: string) => `bacarpass:${pin}`;

export const MIN_PIN_LENGTH = 4;
