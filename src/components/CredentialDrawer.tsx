import { useEffect, useState, type ReactNode } from 'react';
import { Check, Copy, Edit2, ExternalLink, Eye, EyeOff, Folder, History, Lock, Share2, Trash2, UserMinus, X } from 'lucide-react';
import type { Credential, Member } from '../types';
import { canEdit, isOwner, requiresPin } from '../lib/access';
import { errorMessage, revokeShare } from '../lib/api';
import { calculateStrength, cx, displayUrl, formatDate, getHostname, normalizeUrl, strengthLabel } from '../lib/utils';
import { Avatar, Favicon, StrengthBar, useConfirm, useEscape, useNotify } from './ui';

const AUTO_HIDE_SECONDS = 30;

interface DrawerProps {
  item: Credential;
  me: Member;
  membersById: Map<string, Member>;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
}

export function CredentialDrawer({ item, me, membersById, onClose, onEdit, onDelete, onShare }: DrawerProps) {
  const notify = useNotify();
  const confirm = useConfirm();
  const [revealed, setRevealed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(AUTO_HIDE_SECONDS);
  const [unlocked, setUnlocked] = useState(false);
  const [pinPrompt, setPinPrompt] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEscape(onClose);

  useEffect(() => {
    setRevealed(false);
    setUnlocked(false);
    setPinPrompt(false);
    setShowHistory(false);
  }, [item.id]);

  useEffect(() => {
    if (!revealed) return;
    setSecondsLeft(AUTO_HIDE_SECONDS);
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setRevealed(false);
          return AUTO_HIDE_SECONDS;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [revealed]);

  const locked = requiresPin(item, me) && !unlocked;
  const editable = canEdit(item, me);
  const owner = membersById.get(item.ownerUid);
  const strength = calculateStrength(item.passwordValue);
  const host = getHostname(item.url);

  const copy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    notify(`${label} copiado`);
  };

  const withUnlock = (action: () => void) => {
    if (locked) return setPinPrompt(true);
    action();
  };

  const handleRevoke = async (targetUid: string, name: string) => {
    const ok = await confirm({
      title: 'Revocar acceso',
      message: (
        <>
          <strong className="text-zinc-200">{name}</strong> dejará de ver <strong className="text-zinc-200">{item.title}</strong>.
        </>
      ),
      confirmLabel: 'Revocar',
      danger: true,
    });
    if (!ok) return;
    try {
      await revokeShare(item, targetUid);
      notify(`Acceso de ${name} revocado`);
    } catch (err) {
      notify(errorMessage(err), 'error');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 animate-fade-in lg:hidden" onClick={onClose} />
      <aside className="fixed inset-y-0 right-0 z-40 flex w-full flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl animate-slide-in-right sm:w-[420px]">
        <div className="flex items-start gap-4 border-b border-zinc-800 p-5">
          <Favicon url={item.url} size="lg" />
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-semibold">{item.title}</h2>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 py-0.5">
                <Folder size={10} />
                {item.tag || 'Sin carpeta'}
              </span>
              {!isOwner(item, me) && <span>de @{owner?.username ?? item.createdBy}</span>}
            </div>
          </div>
          <button onClick={onClose} className="icon-btn" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>

        <div className="scrollbar-thin flex-1 space-y-6 overflow-y-auto p-5">
          {locked && (
            <div className="rounded-xl border border-sky-900/60 bg-sky-950/30 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-sky-300">
                <Lock size={15} /> Compartida contigo
              </div>
              <p className="mt-1 text-xs text-sky-200/60">Ingresá el PIN que te pasó @{owner?.username ?? item.createdBy} para ver la contraseña.</p>
              {pinPrompt ? (
                <PinUnlock item={item} me={me} onUnlock={() => { setUnlocked(true); setPinPrompt(false); }} />
              ) : (
                <button onClick={() => setPinPrompt(true)} className="btn mt-3 bg-sky-900/50 text-sky-200 hover:bg-sky-900/80">
                  Desbloquear
                </button>
              )}
            </div>
          )}

          <div className="space-y-3">
            <Field label="Usuario">
              <span className="flex-1 truncate text-sm">{item.username || '—'}</span>
              {item.username && <CopyButton onClick={() => copy(item.username, 'Usuario')} />}
            </Field>

            <Field label="Contraseña">
              <span className={cx('flex-1 truncate text-sm', revealed && !locked ? 'font-mono text-red-300' : 'tracking-widest text-zinc-500')}>
                {revealed && !locked ? item.passwordValue : '••••••••••••'}
              </span>
              <button
                onClick={() => withUnlock(() => setRevealed(!revealed))}
                className="icon-btn"
                title={revealed ? 'Ocultar' : 'Mostrar'}
              >
                {locked ? <Lock size={15} /> : revealed ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
              <CopyButton onClick={() => withUnlock(() => copy(item.passwordValue, 'Contraseña'))} />
            </Field>
            {revealed && !locked && <p className="-mt-1 text-right text-[11px] text-zinc-600">Se oculta en {secondsLeft}s</p>}

            {!locked && (
              <div className="flex items-center gap-3 px-1">
                <div className="flex-1">
                  <StrengthBar value={strength} />
                </div>
                <span className="text-[11px] text-zinc-500">{strengthLabel(strength)}</span>
              </div>
            )}

            <Field label="Sitio web">
              {host ? (
                <a href={normalizeUrl(item.url)} target="_blank" rel="noreferrer" className="flex-1 truncate text-sm text-red-400 hover:text-red-300 hover:underline">
                  {displayUrl(item.url)}
                </a>
              ) : (
                <span className="flex-1 truncate text-sm text-zinc-400">{item.url || '—'}</span>
              )}
              {host && (
                <a href={normalizeUrl(item.url)} target="_blank" rel="noreferrer" className="icon-btn" title="Abrir sitio">
                  <ExternalLink size={15} />
                </a>
              )}
            </Field>
          </div>

          {item.notes && (
            <Section title="Notas">
              <p className="whitespace-pre-wrap rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-300">{item.notes}</p>
            </Section>
          )}

          {editable && (
            <Section
              title="Compartida con"
              action={
                <button onClick={onShare} className="flex items-center gap-1 text-xs font-medium text-red-400 hover:text-red-300">
                  <Share2 size={12} /> Compartir
                </button>
              }
            >
              {item.sharedAccess?.length ? (
                <ul className="divide-y divide-zinc-800 rounded-lg border border-zinc-800">
                  {item.sharedAccess.map((s) => {
                    const target = membersById.get(s.targetUid);
                    const name = target?.fullName ?? s.targetUser;
                    return (
                      <li key={s.targetUid} className="flex items-center gap-3 px-3 py-2">
                        <Avatar name={name} size="sm" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm">{name}</p>
                          <p className="text-[11px] text-zinc-500">
                            PIN <span className="font-mono text-zinc-400">{s.accessPin}</span> · {formatDate(s.sharedAt)}
                          </p>
                        </div>
                        <button onClick={() => handleRevoke(s.targetUid, name)} className="icon-btn hover:text-red-400" title="Revocar acceso">
                          <UserMinus size={15} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-sm text-zinc-600">No está compartida con nadie.</p>
              )}
            </Section>
          )}

          <Section title="Detalles">
            <dl className="grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-zinc-500">Propietario</dt>
              <dd className="truncate text-right text-zinc-300">{owner?.fullName ?? item.createdBy}</dd>
              <dt className="text-zinc-500">Creada</dt>
              <dd className="text-right text-zinc-300">{formatDate(item.createdAt)}</dd>
              <dt className="text-zinc-500">Modificada</dt>
              <dd className="text-right text-zinc-300">{formatDate(item.updatedAt ?? item.createdAt)}</dd>
            </dl>
          </Section>

          {me.role === 'admin' && !!item.history?.length && (
            <Section
              title={`Historial (${item.history.length})`}
              action={
                <button onClick={() => setShowHistory(!showHistory)} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200">
                  <History size={12} /> {showHistory ? 'Ocultar' : 'Ver'}
                </button>
              }
            >
              {showHistory && (
                <ul className="space-y-2">
                  {item.history
                    .slice()
                    .reverse()
                    .map((h, i) => (
                      <li key={i} className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2">
                        <div className="flex justify-between text-[11px] text-zinc-500">
                          <span>{formatDate(h.changedAt)}</span>
                          <span>@{h.changedBy}</span>
                        </div>
                        <p className="mt-1 break-all font-mono text-xs text-zinc-300">{h.value}</p>
                      </li>
                    ))}
                </ul>
              )}
            </Section>
          )}
        </div>

        {editable && (
          <div className="flex gap-2 border-t border-zinc-800 p-4">
            <button onClick={onEdit} className="btn-secondary flex-1">
              <Edit2 size={15} /> Editar
            </button>
            <button onClick={onDelete} className="btn-danger">
              <Trash2 size={15} /> Eliminar
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-1 px-1 text-[11px] font-medium text-zinc-500">{label}</p>
      <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950/60 py-1 pl-3 pr-1">{children}</div>
    </div>
  );
}

function Section({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}

function CopyButton({ onClick }: { onClick: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => {
        onClick();
        setDone(true);
        setTimeout(() => setDone(false), 1200);
      }}
      className="icon-btn"
      title="Copiar"
    >
      {done ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
    </button>
  );
}

function PinUnlock({ item, me, onUnlock }: { item: Credential; me: Member; onUnlock: () => void }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const submit = () => {
    const share = item.sharedAccess?.find((s) => s.targetUid === me.id);
    if (share && share.accessPin === pin) onUnlock();
    else setError(true);
  };
  return (
    <div className="mt-3 flex gap-2">
      <input
        type="password"
        autoFocus
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          setError(false);
        }}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder="PIN de acceso"
        className={cx('input flex-1', error && 'border-red-700 text-red-300')}
      />
      <button onClick={submit} className="btn bg-sky-800 text-white hover:bg-sky-700">
        <Check size={16} />
      </button>
    </div>
  );
}
