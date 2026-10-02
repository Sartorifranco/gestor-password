import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Layers, LayoutGrid, Plus, Share2, Shield, User } from 'lucide-react';
import type { Credential, Member } from './types';
import { useSession } from './hooks/useSession';
import { useVault } from './hooks/useVault';
import { deleteCredential, errorMessage, logout, restoreCredential } from './lib/api';
import { calculateStrength, cx, WEAK_THRESHOLD } from './lib/utils';
import { LoginScreen } from './components/LoginScreen';
import { Sidebar, type Section } from './components/Sidebar';
import { VaultView } from './components/VaultView';
import { CredentialDrawer } from './components/CredentialDrawer';
import { UsersView } from './components/UsersView';
import { ChangePinDialog, CredentialForm, HelpDialog, ShareDialog } from './components/dialogs';
import { useConfirm, useNotify } from './components/ui';

export default function App() {
  const session = useSession();

  if (session.status === 'loading') return <Splash />;
  if (session.status === 'signedOut') return <LoginScreen initialError={session.error} />;
  return <Workspace key={session.member.id} me={session.member} />;
}

function Splash() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4 text-zinc-500 animate-fade-in">
        <div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-red-700/90 shadow-lg shadow-red-950/50">
          <Shield size={28} className="text-white" />
        </div>
        <span className="text-sm">Cargando BacarPass…</span>
      </div>
    </div>
  );
}

const MINE: Section = { view: 'vault', scope: { kind: 'mine' }, folder: null };

function Workspace({ me }: { me: Member }) {
  const notify = useNotify();
  const confirm = useConfirm();
  const { members, items, loading, error } = useVault(me);
  const isAdmin = me.role === 'admin';

  const [section, setSection] = useState<Section>(MINE);
  const [openId, setOpenId] = useState<string | null>(null);
  const [form, setForm] = useState<{ item: Credential | null } | null>(null);
  const [sharingId, setSharingId] = useState<string | null>(null);
  const [dialog, setDialog] = useState<'pin' | 'help' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const adminOnly = section.view === 'users' || (section.view === 'vault' && ['member', 'all'].includes(section.scope.kind));
    if (!isAdmin && adminOnly) setSection(MINE);
  }, [isAdmin, section]);

  const membersById = useMemo(() => new Map(members.map((m) => [m.id, m])), [members]);
  const mine = useMemo(() => items.filter((i) => i.ownerUid === me.id), [items, me.id]);
  const weak = useMemo(() => mine.filter((i) => calculateStrength(i.passwordValue) <= WEAK_THRESHOLD), [mine]);
  const myFolders = useMemo(() => [...new Set(mine.map((i) => i.tag).filter(Boolean))].sort(), [mine]);

  const openItem = openId ? items.find((i) => i.id === openId) ?? null : null;
  const sharingItem = sharingId ? items.find((i) => i.id === sharingId) ?? null : null;

  const navigate = (s: Section) => {
    setSection(s);
    setOpenId(null);
    setMenuOpen(false);
  };

  const handleDelete = async (item: Credential) => {
    const ok = await confirm({
      title: 'Eliminar credencial',
      message: (
        <>
          Se eliminará <strong className="text-zinc-200">{item.title}</strong>
          {item.sharedAccess?.length ? ` y dejará de estar disponible para las ${item.sharedAccess.length} personas con quienes la compartiste` : ''}.
        </>
      ),
      confirmLabel: 'Eliminar',
      danger: true,
    });
    if (!ok) return;
    try {
      await deleteCredential(item);
      setOpenId(null);
      notify(`"${item.title}" eliminada`, 'success', {
        label: 'Deshacer',
        onClick: () =>
          restoreCredential(item)
            .then(() => notify('Credencial restaurada'))
            .catch((err) => notify(errorMessage(err), 'error')),
      });
    } catch (err) {
      notify(errorMessage(err), 'error');
    }
  };

  const vault = section.view === 'vault' ? describeScope(section, { me, items, mine, weak, membersById }) : null;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <aside className="hidden w-72 shrink-0 border-r border-zinc-800/80 md:block">
        <Sidebar
          me={me}
          members={members}
          items={items}
          weakCount={weak.length}
          section={section}
          onNavigate={navigate}
          onChangePin={() => setDialog('pin')}
          onHelp={() => setDialog('help')}
          onLogout={logout}
        />
      </aside>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/70 animate-fade-in" onClick={() => setMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs border-r border-zinc-800 bg-zinc-950 shadow-2xl animate-slide-up">
            <Sidebar
              me={me}
              members={members}
              items={items}
              weakCount={weak.length}
              section={section}
              onNavigate={navigate}
              onChangePin={() => { setMenuOpen(false); setDialog('pin'); }}
              onHelp={() => { setMenuOpen(false); setDialog('help'); }}
              onLogout={logout}
            />
          </div>
        </div>
      )}

      <main className={cx('min-w-0 flex-1 transition-[margin] duration-200', openItem && 'lg:mr-[420px]')}>
        {error && (
          <div className="flex items-center gap-2 border-b border-red-900/60 bg-red-950/40 px-4 py-2 text-sm text-red-300 md:px-8">
            <AlertTriangle size={15} /> {error}
          </div>
        )}
        {loading ? (
          <Splash />
        ) : section.view === 'users' ? (
          <UsersView me={me} members={members} items={items} onMenu={() => setMenuOpen(true)} onOpenVault={(uid) => navigate({ view: 'vault', scope: { kind: 'member', uid }, folder: null })} />
        ) : (
          vault && (
            <VaultView
              key={JSON.stringify(section.scope)}
              me={me}
              membersById={membersById}
              title={vault.title}
              subtitle={vault.subtitle}
              items={vault.items}
              folder={section.folder}
              onFolderChange={(folder) => setSection({ ...section, folder })}
              onOpen={(item) => setOpenId(item.id)}
              onNew={vault.canCreate ? () => setForm({ item: null }) : undefined}
              onMenu={() => setMenuOpen(true)}
              emptyHint={vault.emptyHint(() => setForm({ item: null }))}
              showOwner={vault.showOwner}
            />
          )
        )}
      </main>

      {openItem && (
        <CredentialDrawer
          item={openItem}
          me={me}
          membersById={membersById}
          onClose={() => setOpenId(null)}
          onEdit={() => setForm({ item: openItem })}
          onDelete={() => handleDelete(openItem)}
          onShare={() => setSharingId(openItem.id)}
        />
      )}

      {form && (
        <CredentialForm
          me={me}
          initial={form.item}
          defaultFolder={section.view === 'vault' && section.scope.kind === 'mine' ? section.folder : null}
          folders={myFolders}
          onClose={() => setForm(null)}
        />
      )}
      {sharingItem && <ShareDialog item={sharingItem} members={members} onClose={() => setSharingId(null)} />}
      {dialog === 'pin' && <ChangePinDialog onClose={() => setDialog(null)} />}
      {dialog === 'help' && <HelpDialog onClose={() => setDialog(null)} />}
    </div>
  );
}

function describeScope(
  section: Extract<Section, { view: 'vault' }>,
  ctx: { me: Member; items: Credential[]; mine: Credential[]; weak: Credential[]; membersById: Map<string, Member> },
) {
  const { me, items, mine, weak, membersById } = ctx;
  const folderCount = (list: Credential[]) => new Set(list.map((i) => i.tag)).size;
  const summary = (list: Credential[]) => `${list.length} credenciales · ${folderCount(list)} carpetas`;
  const createButton = (onNew: () => void) => (
    <button onClick={onNew} className="btn-primary mt-4">
      <Plus size={16} /> Nueva credencial
    </button>
  );

  switch (section.scope.kind) {
    case 'mine':
      return {
        title: <><LayoutGrid size={18} className="text-red-500" /> Mi bóveda</>,
        subtitle: summary(mine),
        items: mine,
        canCreate: true,
        showOwner: false,
        emptyHint: (onNew: () => void) => (
          <>
            <p className="font-medium text-zinc-300">Tu bóveda está vacía</p>
            <p className="mt-1 text-sm text-zinc-500">Guardá tu primer acceso para tenerlo siempre a mano.</p>
            {createButton(onNew)}
          </>
        ),
      };
    case 'shared': {
      const shared = items.filter((i) => i.sharedWithUids?.includes(me.id));
      return {
        title: <><Share2 size={18} className="text-sky-500" /> Compartidas conmigo</>,
        subtitle: `${shared.length} credenciales compartidas por compañeros`,
        items: shared,
        canCreate: false,
        showOwner: true,
        emptyHint: () => (
          <>
            <p className="font-medium text-zinc-300">Nadie te compartió credenciales todavía</p>
            <p className="mt-1 text-sm text-zinc-500">Cuando alguien lo haga, van a aparecer acá.</p>
          </>
        ),
      };
    }
    case 'weak':
      return {
        title: <><AlertTriangle size={18} className="text-amber-500" /> Contraseñas débiles</>,
        subtitle: 'Abrí cada una y usá el generador para reemplazarla',
        items: weak,
        canCreate: false,
        showOwner: false,
        emptyHint: () => (
          <>
            <p className="font-medium text-zinc-300">¡Todo en orden!</p>
            <p className="mt-1 text-sm text-zinc-500">No tenés contraseñas débiles.</p>
          </>
        ),
      };
    case 'member': {
      const uid = section.scope.uid;
      const owner = membersById.get(uid);
      const list = items.filter((i) => i.ownerUid === uid);
      return {
        title: <><User size={18} className="text-zinc-400" /> Bóveda de {owner?.fullName ?? 'usuario eliminado'}</>,
        subtitle: `${owner ? `@${owner.username}${owner.area ? ` · ${owner.area}` : ''} · ` : ''}${summary(list)}`,
        items: list,
        canCreate: false,
        showOwner: false,
        emptyHint: () => <p className="font-medium text-zinc-300">Esta bóveda está vacía</p>,
      };
    }
    case 'all':
      return {
        title: <><Layers size={18} className="text-red-500" /> Todas las credenciales</>,
        subtitle: `${items.length} credenciales de ${new Set(items.map((i) => i.ownerUid)).size} personas`,
        items,
        canCreate: false,
        showOwner: true,
        emptyHint: () => <p className="font-medium text-zinc-300">No hay credenciales cargadas</p>,
      };
  }
}
