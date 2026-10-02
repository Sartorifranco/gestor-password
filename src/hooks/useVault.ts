import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, type Query } from 'firebase/firestore';
import { db, ITEMS, MEMBERS } from '../lib/firebase';
import type { Credential, Member } from '../types';

export function useVault(member: Member) {
  const [members, setMembers] = useState<Member[]>([]);
  const [items, setItems] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAdmin = member.role === 'admin';

  useEffect(() => {
    return onSnapshot(
      collection(db, MEMBERS),
      (snap) => setMembers(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Member)),
      () => setError('No se pudo cargar la lista de usuarios.'),
    );
  }, []);

  useEffect(() => {
    const itemsRef = collection(db, ITEMS);
    const queries: Query[] = isAdmin
      ? [itemsRef]
      : [query(itemsRef, where('ownerUid', '==', member.id)), query(itemsRef, where('sharedWithUids', 'array-contains', member.id))];

    const results = queries.map(() => new Map<string, Credential>());
    const pending = new Set(queries.map((_, i) => i));
    setLoading(true);

    const unsubs = queries.map((q, i) =>
      onSnapshot(
        q,
        (snap) => {
          results[i] = new Map(snap.docs.map((d) => [d.id, { id: d.id, ...d.data() } as Credential]));
          pending.delete(i);
          const merged = new Map<string, Credential>();
          results.forEach((r) => r.forEach((v, k) => merged.set(k, v)));
          setItems([...merged.values()]);
          if (pending.size === 0) setLoading(false);
        },
        () => {
          setError('No se pudieron cargar las credenciales.');
          setLoading(false);
        },
      ),
    );
    return () => unsubs.forEach((u) => u());
  }, [member.id, isAdmin]);

  return { members, items, loading, error };
}
