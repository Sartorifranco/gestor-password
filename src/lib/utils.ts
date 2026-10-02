import type { Timestamp } from 'firebase/firestore';

const isPrivateOrInvalidHost = (hostname: string): boolean => {
  if (!hostname || hostname === '--' || hostname === 'localhost') return true;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) return true;
  if (!hostname.includes('.')) return true;
  return false;
};

export const normalizeUrl = (url: string) =>
  url.includes('://') ? url : `https://${url}`;

export const getHostname = (url: string): string | null => {
  try {
    if (!url || url.trim() === '--') return null;
    return new URL(normalizeUrl(url.trim())).hostname;
  } catch {
    return null;
  }
};

export const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');

export const getFavicon = (url: string): string | null => {
  const host = getHostname(url);
  if (!host || isPrivateOrInvalidHost(host)) return null;
  return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
};

export const calculateStrength = (password: string) => {
  let s = 0;
  if (password.length > 5) s += 20;
  if (password.length > 10) s += 30;
  if (/[A-Z]/.test(password)) s += 15;
  if (/[0-9]/.test(password)) s += 15;
  if (/[^A-Za-z0-9]/.test(password)) s += 20;
  return Math.min(100, s);
};

export const WEAK_THRESHOLD = 40;

export const strengthLabel = (s: number) =>
  s > 80 ? 'Excelente' : s > WEAK_THRESHOLD ? 'Buena' : 'Débil';

export interface GeneratorOptions {
  length: number;
  upper: boolean;
  digits: boolean;
  symbols: boolean;
}

export function generatePassword({ length, upper, digits, symbols }: GeneratorOptions) {
  const lower = 'abcdefghijkmnpqrstuvwxyz';
  const sets = [lower];
  if (upper) sets.push('ABCDEFGHJKLMNPQRSTUVWXYZ');
  if (digits) sets.push('23456789');
  if (symbols) sets.push('!@#$%&*-_=+?');
  const all = sets.join('');
  const random = (max: number) => {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] % max;
  };
  const chars = sets.map((set) => set[random(set.length)]);
  while (chars.length < length) chars.push(all[random(all.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

export const formatDate = (ts?: Timestamp | null) =>
  ts?.toDate ? ts.toDate().toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';

export const initials = (name: string) =>
  name
    .split(/[\s.@_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('') || '?';

export const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');
