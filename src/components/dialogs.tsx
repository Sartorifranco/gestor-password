import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Dices, Edit2, FolderTree, Globe, HelpCircle, KeyRound, Lock, RefreshCw, Search, Share2, Shield, Undo2 } from 'lucide-react';
import type { Credential, Member } from '../types';
import { changeOwnPin, createCredential, errorMessage, shareCredential, updateCredential, type CredentialInput } from '../lib/api';
import { MIN_PIN_LENGTH } from '../lib/credentials';
import { calculateStrength, cx, generatePassword, getFavicon, strengthLabel, type GeneratorOptions } from '../lib/utils';
import { Avatar, Modal, Spinner, StrengthBar, useNotify } from './ui';

// ── Nueva / editar credencial ────────────────────────────────────────────

export function CredentialForm({
  me,
  initial,
  defaultFolder,
  folders,
  onClose,
}: {
  me: Member;
  initial: Credential | null;
  defaultFolder: string | null;
  folders: string[];
  onClose: () => void;
}) {
  const notify = useNotify();
  const [form, setForm] = useState<CredentialInput>({
    title: initial?.title ?? '',
    username: initial?.username ?? '',
    passwordValue: initial?.passwordValue ?? '',
    url: initial?.url ?? '',
    tag: initial?.tag ?? defaultFolder ?? '',
    notes: initial?.notes ?? '',
  });
  const [showGenerator, setShowGenerator] = useState(!initial);
  const [busy, setBusy] = useState(false);
  const set = (k: keyof CredentialInput) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const strength = calculateStrength(form.passwordValue);
  const favicon = getFavicon(form.url);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const clean = { ...form, title: form.title.trim(), tag: form.tag.trim(), url: form.url.trim(), username: form.username.trim() };
    try {
      if (initial) await updateCredential(initial, clean, me);
      else await createCredential(clean, me);
      notify(initial ? 'Credencial actualizada' : 'Credencial creada');
      onClose();
    } catch (err) {
      notify(errorMessage(err), 'error');
      setBusy(false);
    }
  };

  return (
    <Modal
      title={initial ? 'Editar credencial' : 'Nueva credencial'}
      icon={initial ? <Edit2 size={18} /> : <Lock size={18} />}
      onClose={onClose}
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" form="credential-form" className="btn-primary" disabled={busy}>
            {busy ? <Spinner /> : 'Guardar'}
          </button>
        </>
      }
    >
      <form id="credential-form" onSubmit={submit} className="space-y-4">
        <div>
          <label className="label">Nombre</label>
          <input className="input" placeholder="Ej: Gmail Marketing" value={form.title} onChange={set('title')} autoFocus required />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Usuario / email</label>
            <input className="input" value={form.username} onChange={set('username')} required />
          </div>
          <div>
            <label className="label">Carpeta</label>
            <input className="input" list="folder-options" placeholder="Ej: NVR, Cámaras" value={form.tag} onChange={set('tag')} required />
            <datalist id="folder-options">
              {folders.map((f) => (
                <option key={f} value={f} />
              ))}
            </datalist>
          </div>
        </div>

        <div>
          <label className="label">Sitio web</label>
          <div className="flex gap-2">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950">
              {favicon ? <img src={favicon} alt="" className="h-5 w-5" /> : <Globe size={16} className="text-zinc-600" />}
            </div>
            <input className="input" placeholder="https://…" value={form.url} onChange={set('url')} />
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="label mb-0">Contraseña</label>
            <button type="button" onClick={() => setShowGenerator(!showGenerator)} className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300">
              <Dices size={13} /> {showGenerator ? 'Ocultar generador' : 'Generar'}
            </button>
          </div>
          <input className="input font-mono text-red-300" value={form.passwordValue} onChange={set('passwordValue')} required />
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1">
              <StrengthBar value={strength} />
            </div>
            <span className="w-16 text-right text-[11px] text-zinc-500">{form.passwordValue ? strengthLabel(strength) : ''}</span>
          </div>
          {showGenerator && <Generator onGenerate={(p) => setForm((f) => ({ ...f, passwordValue: p }))} />}
          {initial && initial.passwordValue !== form.passwordValue && (
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, passwordValue: initial.passwordValue }))}
              className="mt-2 flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300"
            >
              <Undo2 size={12} /> Restaurar la anterior (la actual quedará en el historial)
            </button>
          )}
        </div>

        <div>
          <label className="label">Notas</label>
          <textarea
            className="input min-h-[80px] resize-y"
            placeholder="Información adicional: IP, puerto, instrucciones de acceso…"
            value={form.notes}
            onChange={set('notes')}
          />
        </div>
      </form>
    </Modal>
  );
}

function Generator({ onGenerate }: { onGenerate: (p: string) => void }) {
  const [opts, setOpts] = useState<GeneratorOptions>({ length: 16, upper: true, digits: true, symbols: true });
  const generate = (o = opts) => onGenerate(generatePassword(o));
  const update = (patch: Partial<GeneratorOptions>) => {
    const next = { ...opts, ...patch };
    setOpts(next);
    generate(next);
  };
  return (
    <div className="mt-3 space-y-3 rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
      <div className="flex items-center gap-3">
        <span className="w-20 text-xs text-zinc-400">Largo: {opts.length}</span>
        <input type="range" min={8} max={40} value={opts.length} onChange={(e) => update({ length: Number(e.target.value) })} className="flex-1 accent-red-600" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ['upper', 'A-Z'],
            ['digits', '0-9'],
            ['symbols', '!@#'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => update({ [key]: !opts[key] })}
            className={cx(
              'rounded-md border px-2.5 py-1 font-mono text-xs transition-colors',
              opts[key] ? 'border-red-800/70 bg-red-950/60 text-red-300' : 'border-zinc-800 text-zinc-500 hover:text-zinc-300',
            )}
          >
            {label}
          </button>
        ))}
        <button type="button" onClick={() => generate()} className="btn-secondary ml-auto px-3 py-1 text-xs">
          <RefreshCw size={12} /> Generar
        </button>
      </div>
    </div>
  );
}

// ── Compartir ────────────────────────────────────────────────────────────

export function ShareDialog({ item, members, onClose }: { item: Credential; members: Member[]; onClose: () => void }) {
  const notify = useNotify();
  const [filter, setFilter] = useState('');
  const [target, setTarget] = useState<Member | null>(null);
  const [pin, setPin] = useState(() => String(Math.floor(1000 + Math.random() * 9000)));
  const [busy, setBusy] = useState(false);

  const candidates = useMemo(() => {
    const q = filter.trim().toLowerCase();
    const alreadyShared = new Set(item.sharedWithUids ?? []);
    return members
      .filter((m) => m.id !== item.ownerUid && !alreadyShared.has(m.id))
      .filter((m) => !q || m.fullName.toLowerCase().includes(q) || m.username.toLowerCase().includes(q) || m.area?.toLowerCase().includes(q))
      .sort((a, b) => a.fullName.localeCompare(b.fullName));
  }, [members, filter, item]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!target) return;
    setBusy(true);
    try {
      await shareCredential(item, target, pin);
      notify(`Compartida con ${target.fullName}. Pasale el PIN ${pin}.`);
      onClose();
    } catch (err) {
      notify(errorMessage(err), 'error');
      setBusy(false);
    }
  };

  return (
    <Modal
      title="Compartir credencial"
      icon={<Share2 size={18} />}
      onClose={onClose}
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" form="share-form" className="btn-primary" disabled={!target || !pin || busy}>
            {busy ? <Spinner /> : 'Compartir'}
          </button>
        </>
      }
    >
      <form id="share-form" onSubmit={submit} className="space-y-4">
        <p className="text-sm text-zinc-400">
          Vas a compartir <strong className="text-zinc-200">{item.title}</strong>. La persona elegida va a necesitar el PIN para ver la contraseña.
        </p>
        <div>
          <label className="label">Persona</label>
          <div className="relative mb-2">
            <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
            <input className="input pl-9" placeholder="Buscar por nombre, usuario o área…" value={filter} onChange={(e) => setFilter(e.target.value)} autoFocus />
          </div>
          <div className="scrollbar-thin max-h-56 overflow-y-auto rounded-lg border border-zinc-800">
            {candidates.map((m) => (
              <button
                type="button"
                key={m.id}
                onClick={() => setTarget(m)}
                className={cx(
                  'flex w-full items-center gap-3 px-3 py-2 text-left transition-colors',
                  target?.id === m.id ? 'bg-red-950/50' : 'hover:bg-zinc-800/60',
                )}
              >
                <Avatar name={m.fullName} size="sm" tone={target?.id === m.id ? 'red' : 'zinc'} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{m.fullName}</p>
                  <p className="truncate text-[11px] text-zinc-500">
                    @{m.username}
                    {m.area ? ` · ${m.area}` : ''}
                  </p>
                </div>
              </button>
            ))}
            {candidates.length === 0 && <p className="px-3 py-4 text-center text-sm text-zinc-600">Sin personas disponibles.</p>}
          </div>
        </div>
        <div>
          <label className="label">PIN de acceso</label>
          <div className="flex gap-2">
            <input className="input font-mono text-red-300" value={pin} onChange={(e) => setPin(e.target.value)} required />
            <button type="button" onClick={() => setPin(String(Math.floor(1000 + Math.random() * 9000)))} className="btn-secondary px-3" title="Generar otro PIN">
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

// ── Cambiar PIN propio ───────────────────────────────────────────────────

export function ChangePinDialog({ onClose }: { onClose: () => void }) {
  const notify = useNotify();
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (next.length < MIN_PIN_LENGTH) return setError(`El PIN debe tener al menos ${MIN_PIN_LENGTH} caracteres.`);
    if (next !== confirm) return setError('Los PIN nuevos no coinciden.');
    setBusy(true);
    setError(null);
    try {
      await changeOwnPin(current, next);
      notify('PIN actualizado');
      onClose();
    } catch (err) {
      setError(errorMessage(err) === 'Usuario o PIN incorrectos.' ? 'El PIN actual es incorrecto.' : errorMessage(err));
      setBusy(false);
    }
  };

  return (
    <Modal
      size="sm"
      title="Cambiar PIN"
      icon={<KeyRound size={18} />}
      onClose={onClose}
      footer={
        <>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" form="pin-form" className="btn-primary" disabled={busy}>
            {busy ? <Spinner /> : 'Actualizar'}
          </button>
        </>
      }
    >
      <form id="pin-form" onSubmit={submit} className="space-y-4">
        <div>
          <label className="label">PIN actual</label>
          <input type="password" className="input" value={current} onChange={(e) => setCurrent(e.target.value)} autoFocus required />
        </div>
        <div>
          <label className="label">Nuevo PIN</label>
          <input type="password" className="input" value={next} onChange={(e) => setNext(e.target.value)} required />
        </div>
        <div>
          <label className="label">Repetir nuevo PIN</label>
          <input type="password" className="input" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
        </div>
        {error && <p className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300">{error}</p>}
      </form>
    </Modal>
  );
}

// ── Ayuda ────────────────────────────────────────────────────────────────

export function HelpDialog({ onClose }: { onClose: () => void }) {
  return (
    <Modal size="lg" title="Guía de uso" icon={<HelpCircle size={18} />} onClose={onClose} footer={<button onClick={onClose} className="btn-primary">Entendido</button>}>
      <div className="space-y-5">
        <HelpItem icon={<FolderTree size={18} />} title="Carpetas">
          No hace falta crearlas: escribí el nombre en el campo <strong>Carpeta</strong> al guardar una credencial. Mientras escribís te sugerimos las que ya usás, así no quedan
          duplicadas.
        </HelpItem>
        <HelpItem icon={<Search size={18} />} title="Búsqueda rápida">
          Presioná <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1 text-xs">Ctrl K</kbd> o <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1 text-xs">/</kbd>{' '}
          desde cualquier lado. Busca por nombre, usuario, sitio, carpeta y notas.
        </HelpItem>
        <HelpItem icon={<Share2 size={18} />} title="Compartir con PIN">
          Abrí una credencial y tocá <strong>Compartir</strong>. Elegí la persona y pasale el PIN por otro medio. Desde el mismo panel podés <strong>revocar</strong> el acceso cuando
          quieras.
        </HelpItem>
        <HelpItem icon={<Dices size={18} />} title="Contraseñas seguras">
          Usá el generador al crear o editar. La sección <strong>Contraseñas débiles</strong> te muestra cuáles conviene cambiar. Las contraseñas reveladas se ocultan solas a los 30
          segundos.
        </HelpItem>
        <HelpItem icon={<Shield size={18} />} title="Privacidad">
          Cada persona ve solo sus credenciales y las que le compartieron. Los administradores pueden ver todas. La sesión se cierra al cerrar la pestaña.
        </HelpItem>
      </div>
    </Modal>
  );
}

function HelpItem({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-red-500">{icon}</div>
      <div>
        <h4 className="font-medium text-zinc-200">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{children}</p>
      </div>
    </div>
  );
}
