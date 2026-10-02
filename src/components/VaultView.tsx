import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { ArrowDownAZ, ChevronRight, Clock, Copy, Folder, KeyRound, LayoutGrid, List, Lock, Menu, Plus, Search, Share2, X } from 'lucide-react';
import type { Credential, Member, SortKey, ViewMode } from '../types';
import { requiresPin, isOwner } from '../lib/access';
import { calculateStrength, cx, displayUrl, getHostname, WEAK_THRESHOLD } from '../lib/utils';
import { Favicon, useNotify } from './ui';

interface VaultViewProps {
  me: Member;
  membersById: Map<string, Member>;
  title: ReactNode;
  subtitle: string;
  items: Credential[];
  folder: string | null;
  onFolderChange: (folder: string | null) => void;
  onOpen: (item: Credential) => void;
  onNew?: () => void;
  onMenu: () => void;
  emptyHint: ReactNode;
  showOwner: boolean;
}

const VIEW_KEY = 'bacarpass:view';
const SORT_KEY = 'bacarpass:sort';

export function VaultView({ me, membersById, title, subtitle, items, folder, onFolderChange, onOpen, onNew, onMenu, emptyHint, showOwner }: VaultViewProps) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>(() => (localStorage.getItem(SORT_KEY) as SortKey) || 'title');
  const [view, setView] = useState<ViewMode>(() => (localStorage.getItem(VIEW_KEY) as ViewMode) || 'list');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => localStorage.setItem(VIEW_KEY, view), [view]);
  useEffect(() => localStorage.setItem(SORT_KEY, sort), [sort]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName);
      if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const folders = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((i) => map.set(i.tag || 'Sin carpeta', (map.get(i.tag || 'Sin carpeta') ?? 0) + 1));
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [items]);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items
      .filter((i) => !folder || (i.tag || 'Sin carpeta') === folder)
      .filter(
        (i) =>
          !q ||
          [i.title, i.username, i.url, i.tag, i.notes, i.createdBy].some((v) => v?.toLowerCase().includes(q)),
      )
      .sort((a, b) =>
        sort === 'recent'
          ? (b.updatedAt?.toMillis?.() ?? b.createdAt?.toMillis?.() ?? 0) - (a.updatedAt?.toMillis?.() ?? a.createdAt?.toMillis?.() ?? 0)
          : a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }),
      );
  }, [items, folder, search, sort]);

  const grouped = !folder && !search.trim() && sort === 'title';
  const groups = useMemo(() => {
    if (!grouped) return [{ name: null as string | null, items: visible }];
    const map = new Map<string, Credential[]>();
    visible.forEach((i) => {
      const k = i.tag || 'Sin carpeta';
      map.set(k, [...(map.get(k) ?? []), i]);
    });
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, items]) => ({ name, items }));
  }, [visible, grouped]);

  return (
    <div className="flex h-full flex-col">
      <header className="shrink-0 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="flex h-16 items-center gap-3 px-4 md:px-8">
          <button onClick={onMenu} className="icon-btn md:hidden" aria-label="Abrir menú">
            <Menu size={20} />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="flex items-center gap-2 truncate text-lg font-semibold tracking-tight">{title}</h1>
            <p className="truncate text-xs text-zinc-500">{subtitle}</p>
          </div>
          <div className="relative hidden w-72 sm:block">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              ref={searchRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setSearch('')}
              placeholder="Buscar por nombre, usuario, sitio…"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-9 pr-12 text-sm placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-zinc-700 bg-zinc-800 px-1.5 text-[10px] text-zinc-500">
              Ctrl K
            </kbd>
          </div>
          {onNew && (
            <button onClick={onNew} className="btn-primary shrink-0 px-3 sm:px-4">
              <Plus size={16} />
              <span className="hidden sm:inline">Nueva credencial</span>
            </button>
          )}
        </div>
        <div className="px-4 pb-3 sm:hidden">
          <div className="relative">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar…"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-9 pr-3 text-sm placeholder:text-zinc-600 focus:outline-none"
            />
          </div>
        </div>
      </header>

      <div className="flex shrink-0 items-center gap-3 border-b border-zinc-800/50 px-4 py-2.5 md:px-8">
        <div className="scrollbar-thin -mb-1 flex flex-1 gap-1.5 overflow-x-auto pb-1">
          <Chip active={!folder} onClick={() => onFolderChange(null)} label="Todas" count={items.length} />
          {folders.map(([name, count]) => (
            <Chip key={name} active={folder === name} onClick={() => onFolderChange(folder === name ? null : name)} label={name} count={count} icon />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
          <ToggleButton active={sort === 'title'} onClick={() => setSort('title')} title="Ordenar por nombre">
            <ArrowDownAZ size={15} />
          </ToggleButton>
          <ToggleButton active={sort === 'recent'} onClick={() => setSort('recent')} title="Más recientes primero">
            <Clock size={15} />
          </ToggleButton>
        </div>
        <div className="hidden shrink-0 items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 sm:flex">
          <ToggleButton active={view === 'list'} onClick={() => setView('list')} title="Vista de lista">
            <List size={15} />
          </ToggleButton>
          <ToggleButton active={view === 'grid'} onClick={() => setView('grid')} title="Vista de tarjetas">
            <LayoutGrid size={15} />
          </ToggleButton>
        </div>
      </div>

      <div className="scrollbar-thin flex-1 overflow-y-auto px-4 py-5 md:px-8">
        {visible.length === 0 ? (
          <div className="mx-auto mt-16 flex max-w-sm flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-600">
              {search ? <Search size={24} /> : <Folder size={24} />}
            </div>
            {search ? (
              <>
                <p className="font-medium text-zinc-300">Sin resultados para “{search}”</p>
                <button onClick={() => setSearch('')} className="btn-ghost mt-3">
                  <X size={14} /> Limpiar búsqueda
                </button>
              </>
            ) : (
              emptyHint
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {groups.map((g) => (
              <section key={g.name ?? 'all'}>
                {g.name && (
                  <button
                    onClick={() => onFolderChange(g.name)}
                    className="group mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-300"
                  >
                    <Folder size={13} />
                    {g.name}
                    <span className="font-normal normal-case tracking-normal text-zinc-600">{g.items.length}</span>
                    <ChevronRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                )}
                {view === 'list' ? (
                  <div className="divide-y divide-zinc-800/70 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40">
                    {g.items.map((item) => (
                      <Row key={item.id} item={item} me={me} owner={membersById.get(item.ownerUid)} showOwner={showOwner} showFolder={!grouped} onOpen={onOpen} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {g.items.map((item) => (
                      <Card key={item.id} item={item} me={me} owner={membersById.get(item.ownerUid)} showOwner={showOwner} showFolder={!grouped} onOpen={onOpen} />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ label, count, active, onClick, icon }: { label: string; count: number; active: boolean; onClick: () => void; icon?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        'flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        active ? 'border-red-800/70 bg-red-950/60 text-red-300' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200',
      )}
    >
      {icon && <Folder size={11} />}
      {label}
      <span className={cx('tabular-nums', active ? 'text-red-400/70' : 'text-zinc-600')}>{count}</span>
    </button>
  );
}

function ToggleButton({ active, onClick, title, children }: { active: boolean; onClick: () => void; title: string; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={cx('rounded-md p-1.5 transition-colors', active ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300')}
    >
      {children}
    </button>
  );
}

interface ItemProps {
  item: Credential;
  me: Member;
  owner?: Member;
  showOwner: boolean;
  showFolder: boolean;
  onOpen: (item: Credential) => void;
}

function useQuickCopy(item: Credential, me: Member, onOpen: (item: Credential) => void) {
  const notify = useNotify();
  return (e: React.MouseEvent, value: string, label: string) => {
    e.stopPropagation();
    if (label === 'Contraseña' && requiresPin(item, me)) return onOpen(item);
    navigator.clipboard.writeText(value);
    notify(`${label} copiado`);
  };
}

function Badges({ item, me, owner, showOwner, showFolder }: Omit<ItemProps, 'onOpen'>) {
  const weak = isOwner(item, me) && calculateStrength(item.passwordValue) <= WEAK_THRESHOLD;
  const sharedCount = item.sharedAccess?.length ?? 0;
  return (
    <>
      {showFolder && (
        <span className="hidden items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] text-zinc-400 lg:inline-flex">
          <Folder size={10} />
          {item.tag}
        </span>
      )}
      {showOwner && !isOwner(item, me) && (
        <span className="hidden truncate text-xs text-zinc-500 md:inline">@{owner?.username ?? item.createdBy}</span>
      )}
      {requiresPin(item, me) && (
        <span title="Compartida contigo · requiere PIN" className="text-sky-500">
          <Lock size={13} />
        </span>
      )}
      {isOwner(item, me) && sharedCount > 0 && (
        <span title={`Compartida con ${sharedCount}`} className="flex items-center gap-0.5 text-xs text-sky-500">
          <Share2 size={12} />
          {sharedCount}
        </span>
      )}
      {weak && <span title="Contraseña débil" className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
    </>
  );
}

function Row(props: ItemProps) {
  const { item, me, onOpen } = props;
  const copy = useQuickCopy(item, me, onOpen);
  const host = getHostname(item.url);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
      className="group flex cursor-pointer items-center gap-3 px-3 py-2.5 transition-colors hover:bg-zinc-800/40 focus:bg-zinc-800/40 focus:outline-none sm:gap-4 sm:px-4"
    >
      <Favicon url={item.url} size="sm" />
      <div className="min-w-0 flex-1 sm:w-0 sm:flex-[2]">
        <p className="truncate text-sm font-medium text-zinc-100">{item.title}</p>
        <p className="truncate text-xs text-zinc-500">{host ? displayUrl(item.url) : item.username}</p>
      </div>
      <div className="hidden min-w-0 flex-[2] items-center gap-1 sm:flex">
        <span className="truncate text-sm text-zinc-400">{item.username}</span>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Badges {...props} />
      </div>
      <div className="flex shrink-0 items-center gap-0.5 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
        <button onClick={(e) => copy(e, item.username, 'Usuario')} className="icon-btn" title="Copiar usuario">
          <Copy size={14} />
        </button>
        <button onClick={(e) => copy(e, item.passwordValue, 'Contraseña')} className="icon-btn" title="Copiar contraseña">
          {requiresPin(item, me) ? <Lock size={14} /> : <KeyRound size={14} />}
        </button>
      </div>
      <ChevronRight size={16} className="hidden shrink-0 text-zinc-700 sm:block" />
    </div>
  );
}

function Card(props: ItemProps) {
  const { item, me, onOpen } = props;
  const copy = useQuickCopy(item, me, onOpen);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
      className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900 focus:border-zinc-700 focus:outline-none"
    >
      <div className="flex items-start gap-3">
        <Favicon url={item.url} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-zinc-100">{item.title}</p>
          <p className="truncate text-xs text-zinc-500">{displayUrl(item.url) || '—'}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Badges {...props} showFolder={false} />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-zinc-950/60 px-3 py-2">
        <span className="flex-1 truncate text-sm text-zinc-400">{item.username}</span>
        <button onClick={(e) => copy(e, item.username, 'Usuario')} className="text-zinc-600 hover:text-zinc-200" title="Copiar usuario">
          <Copy size={14} />
        </button>
        <button onClick={(e) => copy(e, item.passwordValue, 'Contraseña')} className="text-zinc-600 hover:text-zinc-200" title="Copiar contraseña">
          {requiresPin(item, me) ? <Lock size={14} /> : <KeyRound size={14} />}
        </button>
      </div>
      {props.showFolder && (
        <span className="inline-flex w-fit items-center gap-1 text-[11px] text-zinc-500">
          <Folder size={10} />
          {item.tag}
        </span>
      )}
    </div>
  );
}
