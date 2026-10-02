import type { Credential, Member } from '../types';

export const isOwner = (item: Credential, me: Member) => item.ownerUid === me.id;

export const canEdit = (item: Credential, me: Member) => me.role === 'admin' || isOwner(item, me);

export const isSharedWithMe = (item: Credential, me: Member) => !!item.sharedWithUids?.includes(me.id);

export const requiresPin = (item: Credential, me: Member) => isSharedWithMe(item, me) && !canEdit(item, me);
