import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { AlertTriangle, CheckCircle2, Key, X, XCircle } from 'lucide-react';
import { cx, getFavicon, initials } from '../lib/utils';

// ── Modal ────────────────────────────────────────────────────────────────

export function Modal({
  title,
  icon,
  onClose,
  children,
  footer,
  size = 'md',
}: {
  title: ReactNode;
  icon?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}) {
  useEscape(onClose);
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={cx(
          'flex max-h-[92vh] w-full flex-col rounded-t-2xl border border-zinc-800 bg-zinc-900 shadow-2xl animate-slide-up sm:rounded-2xl',
          size === 'sm' && 'sm:max-w-sm',
          size === 'md' && 'sm:max-w-lg',
          size === 'lg' && 'sm:max-w-2xl',
        )}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-4">
          {icon && <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/60 text-red-500 ring-1 ring-red-900/50">{icon}</div>}
          <h3 className="flex-1 text-base font-semibold text-zinc-100">{title}</h3>
          <button onClick={onClose} className="icon-btn" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>
        <div className="scrollbar-thin flex-1 overflow-y-auto px-5 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-zinc-800 px-5 py-4">{footer}</div>}
      </div>
    </div>
  );
}

export function useEscape(handler: () => void, active = true) {
  const ref = useRef(handler);
  ref.current = handler;
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && ref.current();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);
}

// ── Toasts ───────────────────────────────────────────────────────────────

type ToastType = 'success' | 'error';
interface Toast {
  id: number;
  message: string;
  type: ToastType;
  action?: { label: string; onClick: () => void };
  duration: number;
}
type Notify = (message: string, type?: ToastType, action?: Toast['action']) => void;

const ToastContext = createContext<Notify>(() => {});
export const useNotify = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const dismiss = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const notify = useCallback<Notify>(
    (message, type = 'success', action) => {
      const id = Date.now() + Math.random();
      const duration = action ? 7000 : 3000;
      setToasts((t) => [...t.slice(-3), { id, message, type, action, duration }]);
      setTimeout(() => dismiss(id), duration);
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[100] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-4 sm:items-end">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/95 px-4 py-3 text-sm text-zinc-100 shadow-2xl backdrop-blur animate-slide-up"
          >
            {t.type === 'success' ? (
              <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
            ) : (
              <XCircle size={18} className="shrink-0 text-red-500" />
            )}
            <span className="flex-1">{t.message}</span>
            {t.action && (
              <button
                onClick={() => {
                  t.action!.onClick();
                  dismiss(t.id);
                }}
                className="shrink-0 rounded-md px-2 py-1 text-xs font-semibold text-red-400 hover:bg-red-950/60 hover:text-red-300"
              >
                {t.action.label}
              </button>
            )}
            <button onClick={() => dismiss(t.id)} className="shrink-0 text-zinc-500 hover:text-zinc-200" aria-label="Cerrar">
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── Confirm dialog ───────────────────────────────────────────────────────

interface ConfirmOptions {
  title: string;
  message: ReactNode;
  confirmLabel?: string;
  danger?: boolean;
}
type Confirm = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<Confirm>(async () => false);
export const useConfirm = () => useContext(ConfirmContext);

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(null);

  const confirm = useCallback<Confirm>(
    (options) => new Promise((resolve) => setState({ ...options, resolve })),
    [],
  );
  const close = (value: boolean) => {
    state?.resolve(value);
    setState(null);
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {state && (
        <Modal
          size="sm"
          title={state.title}
          icon={<AlertTriangle size={18} />}
          onClose={() => close(false)}
          footer={
            <>
              <button className="btn-secondary" onClick={() => close(false)}>
                Cancelar
              </button>
              <button className={state.danger ? 'btn-danger' : 'btn-primary'} onClick={() => close(true)} autoFocus>
                {state.confirmLabel ?? 'Confirmar'}
              </button>
            </>
          }
        >
          <div className="text-sm leading-relaxed text-zinc-400">{state.message}</div>
        </Modal>
      )}
    </ConfirmContext.Provider>
  );
}

// ── Small pieces ─────────────────────────────────────────────────────────

export function Favicon({ url, size = 'md' }: { url: string; size?: 'sm' | 'md' | 'lg' }) {
  const src = getFavicon(url);
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const box = size === 'lg' ? 'h-12 w-12 rounded-xl' : size === 'sm' ? 'h-8 w-8 rounded-md' : 'h-10 w-10 rounded-lg';
  const img = size === 'lg' ? 'h-7 w-7' : size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  return (
    <div className={cx('flex shrink-0 items-center justify-center border border-zinc-800 bg-zinc-800/60 text-zinc-500', box)}>
      {src && !failed ? (
        <img src={src} alt="" className={cx('object-contain', img)} onError={() => setFailed(true)} />
      ) : (
        <Key size={size === 'lg' ? 20 : 16} />
      )}
    </div>
  );
}

export function Avatar({ name, size = 'md', tone = 'zinc' }: { name: string; size?: 'sm' | 'md'; tone?: 'zinc' | 'red' }) {
  return (
    <div
      className={cx(
        'flex shrink-0 items-center justify-center rounded-full font-semibold',
        size === 'sm' ? 'h-7 w-7 text-[10px]' : 'h-9 w-9 text-xs',
        tone === 'red' ? 'bg-red-950/70 text-red-400 ring-1 ring-red-900/60' : 'bg-zinc-800 text-zinc-300',
      )}
    >
      {initials(name)}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return <div className={cx('h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent', className)} />;
}

export function StrengthBar({ value }: { value: number }) {
  const color = value > 80 ? 'bg-emerald-500' : value > 40 ? 'bg-amber-500' : 'bg-red-500';
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
      <div className={cx('h-full rounded-full transition-all duration-300', color)} style={{ width: `${Math.max(6, value)}%` }} />
    </div>
  );
}
