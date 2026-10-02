import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, authReady, db, MEMBERS } from '../lib/firebase';
import { AUTH_EMAIL_DOMAIN } from '../lib/credentials';
import type { Member } from '../types';

type SessionState =
  | { status: 'loading' }
  | { status: 'signedOut'; error?: string }
  | { status: 'signedIn'; user: User; member: Member };

export function useSession(): SessionState {
  const [state, setState] = useState<SessionState>({ status: 'loading' });

  useEffect(() => {
    let unsubMember: (() => void) | undefined;
    let unsubAuth: (() => void) | undefined;

    authReady.finally(() => {
      unsubAuth = onAuthStateChanged(auth, (user) => {
        unsubMember?.();
        unsubMember = undefined;

        // Auth is shared with other apps of the project (some sign in anonymously).
        if (!user || !user.email?.endsWith(`@${AUTH_EMAIL_DOMAIN}`)) {
          if (user) signOut(auth);
          setState((s) => (s.status === 'signedOut' ? s : { status: 'signedOut' }));
          return;
        }

        setState({ status: 'loading' });
        unsubMember = onSnapshot(
          doc(db, MEMBERS, user.uid),
          (snap) => {
            if (!snap.exists()) {
              signOut(auth);
              setState({ status: 'signedOut', error: 'Tu cuenta fue deshabilitada. Consultá con un administrador.' });
              return;
            }
            setState({ status: 'signedIn', user, member: { id: snap.id, ...snap.data() } as Member });
          },
          () => {
            signOut(auth);
            setState({ status: 'signedOut', error: 'No se pudo cargar tu perfil.' });
          },
        );
      });
    });

    return () => {
      unsubAuth?.();
      unsubMember?.();
    };
  }, []);

  return state;
}
