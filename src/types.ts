import type { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'user';

export interface Member {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
  area: string;
  createdAt?: Timestamp | null;
}

export interface PasswordHistoryItem {
  value: string;
  changedAt: Timestamp;
  changedBy: string;
}

export interface SharedAccess {
  targetUser: string;
  targetUid: string;
  accessPin: string;
  sharedAt: Timestamp;
}

export interface Credential {
  id: string;
  title: string;
  username: string;
  passwordValue: string;
  url: string;
  tag: string;
  notes?: string;
  createdBy: string;
  ownerUid: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
  history?: PasswordHistoryItem[];
  sharedAccess?: SharedAccess[];
  sharedWithUids?: string[];
}

export type VaultScope =
  | { kind: 'mine' }
  | { kind: 'shared' }
  | { kind: 'weak' }
  | { kind: 'member'; uid: string }
  | { kind: 'all' };

export type SortKey = 'title' | 'recent' | 'folder';
export type ViewMode = 'list' | 'grid';
