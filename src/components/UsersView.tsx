import { useMemo, useState, type FormEvent } from 'react';
import { FolderOpen, KeyRound, Menu, Search, ShieldCheck, ShieldOff, Trash2, UserPlus } from 'lucide-react';
import type { Credential, Member } from '../types';
import { adminCreateUser, adminDeleteUser, adminResetPin, adminSetRole, errorMessage } from '../lib/api';
import { MIN_PIN_LENGTH } from '../lib/credentials';
import { cx } from '../lib/utils';
import { Avatar, Modal, Spinner, useConfirm, useNotify } from './ui';

interface UsersViewProps {
  me: Member;
  members: Member[];
  items: Credential[];
  onOpenVault: (uid: string) => void;
  onMenu: () => void;
}

export function UsersView({ me, members, items, onOpenVault, onMenu }: UsersViewProps) {
  const notify = useNotify();
  const confirm = useConfirm();
  const [filter, setFilter] = useState('');
  const [creating, setCreating] = useState(false);
  const [resetTarget, setResetTarget] = useState<Member | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((i) => map.set(i.ownerUid, (map.get(i.ownerUid) ?? 0) + 1));
    return map;
  }, [items]);

  const visible = members
    .filter((m) => {
      const q = filter.trim().toLowerCase();
      return !q || [m.fullName, m.username, m.area, m.role].some((v) => v?.toLowerCase().includes(q));
    })
    .sort((a, b) => (a.role === b.role ? a.fullName.localeCompare(b.fullName) : a.role === 'admin' ? -1 : 1));

  const run = async (m: Member, action: () => Promise<unknown>, success: string) => {
    setBusyId(m.id);
    try {
      await action();
      notify(success);
    } catch (err) {
      notify(errorMessage(err), 'error');
    } finally {
      setBusyId(null);
    }
  };

  const toggleRole = async (m: Member) => {
    const role = m.role === 'admin' ? 'user' : 'admin';
    const ok = await confirm({
      title: role === 'admin' ? 'Dar permisos de administrador' : 'Quitar permisos de administrador',
      message:
        role === 'admin'
          ? `${m.fullName} podrá ver todas las credenciales y gestionar al personal.`
          : `${m.fullName} solo verá sus credenciales y las compartidas con él/ella.`,
      confirmLabel: role === 'admin' ? 'Hacer admin' : 'Quitar admin',
    });
    if (ok) run(m, () => adminSetRole(m.id, role), `Rol de ${m.fullName} actualizado`);
  };

  const remove = async (m: Member) => {
    const count = counts.get(m.id) ?? 0;
    const ok = await confirm({
      title: 'Eliminar usuario',
      message: (
        <>
          <strong className="text-zinc-200">{m.fullName}</strong> ya no podrá ingresar.
          {count > 0 && ` Sus ${count} credenciales se conservan y siguen visibles para los administradores.`}
        </>
      ),
      confirmLabel: 'Eliminar',
      danger: true,
    });
    if (ok) run(m, () => adminDeleteUser(m.id), `${m.fullName} eliminado`);
  };

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-16 shrink-0 items-center gap-3 border-b border-zinc-800/80 px-4 md:px-8">
        <button onClick={onMenu} className="icon-btn md:hidden" aria-label="Abrir menú">
          <Menu size={20} />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-semibold tracking-tight">Personal</h1>
          <p className="text-xs text-zinc-500">
            {members.length} usuarios · {members.filter((m) => m.role === 'admin').length} administradores
          </p>
        </div>
        <button onClick={() => setCreating(true)} className="btn-primary px-3 sm:px-4">
          <UserPlus size={16} />
          <span className="hidden sm:inline">Nuevo usuario</span>
        </button>
      </header>

      <div className="scrollbar-thin flex-1 overflow-y-auto px-4 py-5 md:px-8">
        <div className="relative mb-4 max-w-md">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input className="input pl-9" placeholder="Filtrar por nombre, usuario, área o rol…" value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40">
          <table className="hidden w-full text-left text-sm md:table">
            <thead className="border-b border-zinc-800 text-xs text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Usuario</th>
                <th className="px-4 py-3 font-medium">Área</th>
                <th className="px-4 py-3 font-medium">Rol</th>
                <th className="px-4 py-3 text-right font-medium">Credenciales</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {visible.map((m) => (
                <tr key={m.id} className="group hover:bg-zinc-800/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={m.fullName} tone={m.role === 'admin' ? 'red' : 'zinc'} />
                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {m.fullName} {m.id === me.id && <span className="text-xs font-normal text-zinc-500">(vos)</span>}
                        </p>
                        <p className="truncate text-xs text-zinc-500">@{m.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-zinc-400">{m.area || '—'}</td>
                  <td className="px-4 py-3">
                    <RoleBadge role={m.role} />
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-zinc-400">{counts.get(m.id) ?? 0}</td>
                  <td className="px-4 py-3">
                    <Actions m={m} me={me} busy={busyId === m.id} onVault={onOpenVault} onReset={setResetTarget} onRole={toggleRole} onDelete={remove} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="divide-y divide-zinc-800/70 md:hidden">
            {visible.map((m) => (
              <li key={m.id} className="space-y-3 p-4">
                <div className="flex items-center gap-3">
                  <Avatar name={m.fullName} tone={m.role === 'admin' ? 'red' : 'zinc'} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{m.fullName}</p>
                    <p className="truncate text-xs text-zinc-500">
                      @{m.username}
                      {m.area ? ` · ${m.area}` : ''}
                    </p>
                  </div>
                  <RoleBadge role={m.role} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{counts.get(m.id) ?? 0} credenciales</span>
                  <Actions m={m} me={me} busy={busyId === m.id} onVault={onOpenVault} onReset={setResetTarget} onRole={toggleRole} onDelete={remove} />
                </div>
              </li>
            ))}
          </ul>

          {visible.length === 0 && <p className="p-8 text-center text-sm text-zinc-500">No hay usuarios con ese filtro.</p>}
        </div>
      </div>

      {creating && <CreateUserDialog onClose={() => setCreating(false)} />}
      {resetTarget && <ResetPinDialog target={resetTarget} onClose={() => setResetTarget(null)} />}
    </div>
  );
}

function RoleBadge({ role }: { role: Member['role'] }) {
  return (
    <span
      className={cx(
        'inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset',
        role === 'admin' ? 'bg-red-950/50 text-red-400 ring-red-900/60' : 'bg-zinc-800/60 text-zinc-400 ring-zinc-700/60',
      )}
    >
      {role === 'admin' ? 'Admin' : 'Usuario'}
    </span>
  );
}

function Actions({
  m,
  me,
  busy,
  onVault,
  onReset,
  onRole,
  onDelete,
}: {
  m: Member;
  me: Member;
  busy: boolean;
  onVault: (uid: string) => void;
  onReset: (m: Member) => void;
  onRole: (m: Member) => void;
  onDelete: (m: Member) => void;
}) {
  if (busy) return <Spinner className="ml-auto text-zinc-500" />;
  return (
    <div className="flex justify-end gap-0.5">
      {m.id !== me.id && (
        <>
          <button onClick={() => onVault(m.id)} className="icon-btn" title="Ver bóveda">
            <FolderOpen size={15} />
          </button>
          <button onClick={() => onReset(m)} className="icon-btn hover:text-amber-400" title="Resetear PIN">
            <KeyRound size={15} />
          </button>
          <button onClick={() => onRole(m)} className="icon-btn" title={m.role === 'admin' ? 'Quitar admin' : 'Hacer admin'}>
            {m.role === 'admin' ? <ShieldOff size={15} /> : <ShieldCheck size={15} />}
          </button>
          <button onClick={() => onDelete(m)} className="icon-btn hover:text-red-400" title="Eliminar">
            <Trash2 size={15} />
          </button>
        </>
      )}
    </div>
  );
}

function CreateUserDialog({ onClose }: { onClose: () => void }) {
  const notify = useNotify();
  const [form, setForm] = useState({ fullName: '', username: '', area: '', pin: '', role: 'user' as Member['role'] });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.pin.length < MIN_PIN_LENGTH) return setError(`El PIN debe tener al menos ${MIN_PIN_LENGTH} caracteres.`);
    setBusy(true);
    setError(null);
    try {
      await adminCreateUser(form);
      notify(`Usuario ${form.username} creado`);
      onClose();
    } catch (err) {
      setError(errorMessage(err));
      setBusy(false);
    }
  };

  return (
    <Modal
      title="Nuevo usuario"
      icon={<UserPlus size={18} />}
      onClose={onClose}
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" form="create-user-form" className="btn-primary" disabled={busy}>
            {busy ? <Spinner /> : 'Crear usuario'}
          </button>
        </>
      }
    >
      <form id="create-user-form" onSubmit={submit} className="space-y-4">
        <div>
          <label className="label">Nombre completo</label>
          <input className="input" value={form.fullName} onChange={set('fullName')} autoFocus required />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Usuario</label>
            <input className="input" value={form.username} onChange={set('username')} required />
          </div>
          <div>
            <label className="label">PIN inicial</label>
            <input className="input font-mono" value={form.pin} onChange={set('pin')} required />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Área</label>
            <input className="input" placeholder="Ej: Logística" value={form.area} onChange={set('area')} />
          </div>
          <div>
            <label className="label">Rol</label>
            <select className="input" value={form.role} onChange={set('role')}>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
        </div>
        {error && <p className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300">{error}</p>}
      </form>
    </Modal>
  );
}

function ResetPinDialog({ target, onClose }: { target: Member; onClose: () => void }) {
  const notify = useNotify();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (pin.length < MIN_PIN_LENGTH) return setError(`El PIN debe tener al menos ${MIN_PIN_LENGTH} caracteres.`);
    setBusy(true);
    try {
      await adminResetPin(target.id, pin);
      notify(`PIN de ${target.fullName} reseteado`);
      onClose();
    } catch (err) {
      setError(errorMessage(err));
      setBusy(false);
    }
  };

  return (
    <Modal
      size="sm"
      title="Resetear PIN"
      icon={<KeyRound size={18} />}
      onClose={onClose}
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" form="reset-pin-form" className="btn-primary" disabled={busy}>
            {busy ? <Spinner /> : 'Resetear'}
          </button>
        </>
      }
    >
      <form id="reset-pin-form" onSubmit={submit} className="space-y-4">
        <p className="text-sm text-zinc-400">
          Nuevo PIN para <strong className="text-zinc-200">{target.fullName}</strong> (@{target.username}). Comunicáselo por un medio seguro.
        </p>
        <input className="input font-mono" value={pin} onChange={(e) => setPin(e.target.value)} autoFocus required />
        {error && <p className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300">{error}</p>}
      </form>
    </Modal>
  );
}
