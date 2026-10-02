import { useMemo, useState, type ReactNode } from 'react';
import { AlertTriangle, Folder, HelpCircle, KeyRound, Layers, LayoutGrid, LogOut, Search, Share2, Shield, Users } from 'lucide-react';
import type { Credential, Member, VaultScope } from '../types';
import { cx } from '../lib/utils';
import { Avatar } from './ui';

export type Section = { view: 'vault'; scope: VaultScope; folder: string | null } | { view: 'users' };

interface SidebarProps {
  me: Member;
  members: Member[];
  items: Credential[];
  weakCount: number;
  section: Section;
  onNavigate: (s: Section) => void;
  onChangePin: () => void;
  onHelp: () => void;
  onLogout: () => void;
}

export function Sidebar({ me, members, items, weakCount, section, onNavigate, onChangePin, onHelp, onLogout }: SidebarProps) {
  const [memberFilter, setMemberFilter] = useState('');
  const isAdmin = me.role === 'admin';

  const mine = items.filter((i) => i.ownerUid === me.id);
  const sharedCount = items.filter((i) => i.sharedWithUids?.includes(me.id)).length;

  const myFolders = useMemo(() => countBy(mine.map((i) => i.tag || 'Sin carpeta')), [mine]);
  const countByOwner = useMemo(() => countBy(items.map((i) => i.ownerUid)), [items]);

  const otherMembers = members
    .filter((m) => m.id !== me.id)
    .filter((m) => {
      const q = memberFilter.trim().toLowerCase();
      return !q || m.fullName.toLowerCase().includes(q) || m.username.toLowerCase().includes(q) || m.area?.toLowerCase().includes(q);
    })
    .sort((a, b) => (countByOwner.get(b.id) ?? 0) - (countByOwner.get(a.id) ?? 0) || a.fullName.localeCompare(b.fullName));

  const isScope = (kind: VaultScope['kind'], folder: string | null = null) =>
    section.view === 'vault' && section.scope.kind === kind && section.folder === folder;

  const go = (scope: VaultScope, folder: string | null = null) => onNavigate({ view: 'vault', scope, folder });

  return (
    <div className="flex h-full flex-col bg-zinc-900/60">
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-zinc-800/80 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 shadow-lg shadow-red-950/50">
          <Shield size={18} className="text-white" />
        </div>
        <span className="font-semibold tracking-tight">BacarPass</span>
      </div>

      <nav className="scrollbar-thin flex-1 space-y-6 overflow-y-auto px-3 py-5">
        <Group label="Bóveda">
          <Item icon={<LayoutGrid size={16} />} label="Mi bóveda" count={mine.length} active={isScope('mine')} onClick={() => go({ kind: 'mine' })} />
          <Item icon={<Share2 size={16} />} label="Compartidas conmigo" count={sharedCount} active={isScope('shared')} onClick={() => go({ kind: 'shared' })} />
          {weakCount > 0 && (
            <Item
              icon={<AlertTriangle size={16} />}
              label="Contraseñas débiles"
              count={weakCount}
              tone="warn"
              active={isScope('weak')}
              onClick={() => go({ kind: 'weak' })}
            />
          )}
        </Group>

        {myFolders.size > 0 && (
          <Group label="Mis carpetas">
            {[...myFolders.entries()]
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([folder, count]) => (
                <Item
                  key={folder}
                  icon={<Folder size={15} />}
                  label={folder}
                  count={count}
                  small
                  active={isScope('mine', folder)}
                  onClick={() => go({ kind: 'mine' }, folder)}
                />
              ))}
          </Group>
        )}

        {isAdmin && (
          <Group label="Administración" tone="admin">
            <Item icon={<Users size={16} />} label="Personal" count={members.length} active={section.view === 'users'} onClick={() => onNavigate({ view: 'users' })} />
            <Item icon={<Layers size={16} />} label="Todas las credenciales" count={items.length} active={isScope('all')} onClick={() => go({ kind: 'all' })} />

            <div className="pt-3">
              <p className="px-3 pb-2 text-[11px] font-medium text-zinc-500">Bóvedas de empleados</p>
              <div className="relative mb-2 px-1">
                <Search size={13} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" />
                <input
                  value={memberFilter}
                  onChange={(e) => setMemberFilter(e.target.value)}
                  placeholder="Buscar empleado…"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 py-1.5 pl-8 pr-2 text-xs text-zinc-300 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none"
                />
              </div>
              {otherMembers.map((m) => {
                const active = section.view === 'vault' && section.scope.kind === 'member' && section.scope.uid === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => go({ kind: 'member', uid: m.id })}
                    className={cx(
                      'flex w-full items-center gap-2.5 rounded-md px-3 py-1.5 text-left text-sm transition-colors',
                      active ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200',
                    )}
                  >
                    <Avatar name={m.fullName} size="sm" />
                    <span className="flex-1 truncate">{m.fullName}</span>
                    <span className="text-xs tabular-nums text-zinc-600">{countByOwner.get(m.id) ?? 0}</span>
                  </button>
                );
              })}
              {otherMembers.length === 0 && <p className="px-3 py-2 text-xs text-zinc-600">Sin resultados.</p>}
            </div>
          </Group>
        )}
      </nav>

      <div className="shrink-0 border-t border-zinc-800/80 p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <Avatar name={me.fullName} tone="red" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{me.fullName}</p>
            <p className="truncate text-xs text-zinc-500">
              @{me.username} · {isAdmin ? 'Administrador' : 'Usuario'}
            </p>
          </div>
        </div>
        <div className="mt-1 grid grid-cols-3 gap-1">
          <FooterButton icon={<KeyRound size={15} />} label="PIN" onClick={onChangePin} />
          <FooterButton icon={<HelpCircle size={15} />} label="Ayuda" onClick={onHelp} />
          <FooterButton icon={<LogOut size={15} />} label="Salir" onClick={onLogout} />
        </div>
      </div>
    </div>
  );
}

function countBy(values: string[]) {
  const map = new Map<string, number>();
  values.forEach((v) => map.set(v, (map.get(v) ?? 0) + 1));
  return map;
}

function Group({ label, tone, children }: { label: string; tone?: 'admin'; children: ReactNode }) {
  return (
    <div>
      <p className={cx('px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider', tone === 'admin' ? 'text-red-500/80' : 'text-zinc-500')}>{label}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function Item({
  icon,
  label,
  count,
  active,
  onClick,
  small,
  tone,
}: {
  icon: ReactNode;
  label: string;
  count?: number;
  active?: boolean;
  onClick: () => void;
  small?: boolean;
  tone?: 'warn';
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        'group flex w-full items-center gap-3 rounded-md px-3 text-left transition-colors',
        small ? 'py-1.5 text-[13px]' : 'py-2 text-sm',
        active ? 'bg-red-950/50 text-red-400 ring-1 ring-inset ring-red-900/50' : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100',
      )}
    >
      <span className={cx('shrink-0', tone === 'warn' && !active && 'text-amber-500')}>{icon}</span>
      <span className="flex-1 truncate font-medium">{label}</span>
      {count !== undefined && (
        <span className={cx('text-xs tabular-nums', active ? 'text-red-400/80' : tone === 'warn' ? 'text-amber-500/80' : 'text-zinc-600')}>{count}</span>
      )}
    </button>
  );
}

function FooterButton({ icon, label, onClick }: { icon: ReactNode; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 rounded-md py-1.5 text-[11px] text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200">
      {icon}
      {label}
    </button>
  );
}
