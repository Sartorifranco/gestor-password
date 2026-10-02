import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, FolderTree, Lock, Share2, Shield } from 'lucide-react';
import { errorMessage, login, register } from '../lib/api';
import { MIN_PIN_LENGTH } from '../lib/credentials';
import { cx } from '../lib/utils';
import { Spinner } from './ui';

export function LoginScreen({ initialError }: { initialError?: string }) {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <aside className="relative hidden w-[44%] flex-col justify-between overflow-hidden border-r border-zinc-900 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-12 lg:flex">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-900/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-red-950/30 blur-3xl" />
        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 shadow-lg shadow-red-950/50">
            <Shield size={22} className="text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">BacarPass</span>
        </div>
        <div className="relative space-y-8">
          <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-zinc-50">
            Los accesos de la empresa, <span className="text-red-500">en un solo lugar seguro.</span>
          </h1>
          <ul className="space-y-5 text-sm text-zinc-400">
            <Feature icon={<Lock size={16} />} title="Bóveda personal" text="Cada persona ve solo sus credenciales y las que le comparten." />
            <Feature icon={<FolderTree size={16} />} title="Organizado por carpetas" text="Agrupá accesos por sistema, sector o cliente." />
            <Feature icon={<Share2 size={16} />} title="Compartir con PIN" text="Compartí un acceso puntual y revocalo cuando quieras." />
          </ul>
        </div>
        <p className="relative text-xs text-zinc-600">Bacar · Gestión de Accesos Corporativos</p>
      </aside>

      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-sm animate-fade-in">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700">
              <Shield size={22} className="text-white" />
            </div>
            <span className="text-lg font-semibold">BacarPass</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight">{mode === 'login' ? 'Bienvenido de nuevo' : 'Crear una cuenta'}</h2>
          <p className="mt-1 text-sm text-zinc-500">
            {mode === 'login' ? 'Ingresá con tu usuario y PIN.' : 'Completá tus datos para obtener tu bóveda.'}
          </p>

          <div className="mt-6 grid grid-cols-2 rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-sm">
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cx(
                  'rounded-md py-1.5 font-medium transition-colors',
                  mode === m ? 'bg-zinc-800 text-zinc-100 shadow' : 'text-zinc-500 hover:text-zinc-300',
                )}
              >
                {m === 'login' ? 'Ingresar' : 'Crear cuenta'}
              </button>
            ))}
          </div>

          <div className="mt-6">{mode === 'login' ? <LoginForm initialError={initialError} /> : <RegisterForm />}</div>
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-red-500">{icon}</div>
      <div>
        <p className="font-medium text-zinc-200">{title}</p>
        <p className="mt-0.5">{text}</p>
      </div>
    </li>
  );
}

function PinInput({ value, onChange, autoFocus }: { value: string; onChange: (v: string) => void; autoFocus?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        className="input pr-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="current-password"
        autoFocus={autoFocus}
        required
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-500 hover:text-zinc-300"
        aria-label={show ? 'Ocultar PIN' : 'Mostrar PIN'}
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}

function FormError({ message }: { message: string | null | undefined }) {
  if (!message) return null;
  return <div className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300">{message}</div>;
}

function LoginForm({ initialError }: { initialError?: string }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(initialError ?? null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await login(username, pin);
    } catch (err) {
      setError(errorMessage(err));
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="label">Usuario</label>
        <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" autoFocus required />
      </div>
      <div>
        <label className="label">PIN</label>
        <PinInput value={pin} onChange={setPin} />
      </div>
      <FormError message={error} />
      <button type="submit" className="btn-primary w-full py-2.5" disabled={busy}>
        {busy ? <Spinner /> : 'Ingresar'}
      </button>
    </form>
  );
}

function RegisterForm() {
  const [form, setForm] = useState({ fullName: '', username: '', area: '', pin: '', confirm: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.pin.length < MIN_PIN_LENGTH) return setError(`El PIN debe tener al menos ${MIN_PIN_LENGTH} caracteres.`);
    if (form.pin !== form.confirm) return setError('Los PIN no coinciden.');
    setBusy(true);
    setError(null);
    try {
      await register({ fullName: form.fullName, username: form.username, area: form.area, pin: form.pin });
    } catch (err) {
      setError(errorMessage(err));
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="label">Nombre completo</label>
        <input className="input" value={form.fullName} onChange={(e) => set('fullName')(e.target.value)} required />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Usuario</label>
          <input className="input" value={form.username} onChange={(e) => set('username')(e.target.value)} autoComplete="username" required />
        </div>
        <div>
          <label className="label">Área</label>
          <input className="input" placeholder="Ej: Ventas" value={form.area} onChange={(e) => set('area')(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">PIN</label>
          <PinInput value={form.pin} onChange={set('pin')} />
        </div>
        <div>
          <label className="label">Repetir PIN</label>
          <PinInput value={form.confirm} onChange={set('confirm')} />
        </div>
      </div>
      <p className="text-xs text-zinc-600">Mínimo {MIN_PIN_LENGTH} caracteres. Mientras más largo, más seguro.</p>
      <FormError message={error} />
      <button type="submit" className="btn-primary w-full py-2.5" disabled={busy}>
        {busy ? <Spinner /> : 'Crear cuenta'}
      </button>
    </form>
  );
}
