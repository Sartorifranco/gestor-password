import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { 
  Shield, 
  Lock, 
  Users, 
  Search, 
  Plus, 
  LogOut, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2, 
  Key, 
  CheckCircle2,
  XCircle,
  Settings,
  History,
  Edit2,
  UserPlus,
  ArrowLeft,
  Filter,
  Share2,
  KeyRound,
  Folder,
  LayoutGrid,
  ChevronRight,
  ChevronDown,
  User,
  HelpCircle,
  Globe,
  Menu, // Importado Menu para el botón hamburguesa
  X     // Importado X para cerrar el menú móvil
} from 'lucide-react';

// --- Types (Mismos tipos) ---

type UserRole = 'admin' | 'user';

interface AppUser {
  id: string;
  username: string;
  pin: string;
  fullName: string;
  role: UserRole;
  area: string;
  allowedTags: string[];
  createdAt: any;
}

interface PasswordHistoryItem {
  value: string;
  changedAt: Timestamp;
  changedBy: string;
}

interface SharedAccess {
  targetUser: string;
  accessPin: string;
  sharedAt: any;
}

interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  passwordValue: string;
  url: string;
  tag: string;
  notes?: string;
  createdBy: string;
  createdAt: any;
  history?: PasswordHistoryItem[];
  sharedAccess?: SharedAccess[];
}

// --- Firebase Configuration (Misma configuración) ---
const firebaseConfig = {
  apiKey: "AIzaSyCEaVNk-ccwOZ3mzDiITAztK0l4Qq6Cu2Y",
  authDomain: "legajosonline-959f6.firebaseapp.com",
  projectId: "legajosonline-959f6",
  storageBucket: "legajosonline-959f6.firebasestorage.app",
  messagingSenderId: "753392336661",
  appId: "1:753392336661:web:b2d23e3cc6aae7a0c4331c",
  measurementId: "G-JVM29M5BHC"
};

const __app_id = 'bacarpass-v1'; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- Helper Functions (Mismas funciones) ---
const getFavicon = (url: string) => {
  try {
    if (!url) return null;
    const domain = new URL(url.includes('://') ? url : `https://${url}`).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch (e) { return null; }
};

const calculateStrength = (password: string) => {
  let s = 0;
  if (password.length > 5) s += 20;
  if (password.length > 10) s += 30;
  if (/[A-Z]/.test(password)) s += 15;
  if (/[0-9]/.test(password)) s += 15;
  if (/[^A-Za-z0-9]/.test(password)) s += 20;
  return Math.min(100, s);
};

// --- Main Component ---

export default function App() {
  // Auth State
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);
  
  // App Logic State
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [view, setView] = useState<'login' | 'register' | 'passwords' | 'users'>('login');
  
  // Filtering & Navigation State
  const [selectedCreator, setSelectedCreator] = useState<string | null>(null); 
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);   
  const [expandedUser, setExpandedUser] = useState<string | null>(null);       
  const [showSharedWithMe, setShowSharedWithMe] = useState(false);             

  // Data State
  const [users, setUsers] = useState<AppUser[]>([]);
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPassword, setEditingPassword] = useState<PasswordEntry | null>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isChangePinModalOpen, setIsChangePinModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NUEVO ESTADO: Menú móvil

  // Share Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingPassword, setSharingPassword] = useState<PasswordEntry | null>(null);

  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error'} | null>(null);

  // --- Initialization & Auth ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Auth error:", error);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFbUser(user);
    });
    return () => unsubscribe();
  }, []);

  // --- Data Fetching ---
  useEffect(() => {
    if (!fbUser) return;
    const usersRef = collection(db, 'artifacts', __app_id, 'public', 'data', 'app_users');
    const unsubUsers = onSnapshot(usersRef, (snapshot) => {
      const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AppUser));
      setUsers(usersList);
      setLoading(false);
    }, (error) => console.error("Error fetching users:", error));

    const passwordsRef = collection(db, 'artifacts', __app_id, 'public', 'data', 'passwords');
    const unsubPasswords = onSnapshot(passwordsRef, (snapshot) => {
      const pwList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PasswordEntry));
      setPasswords(pwList);
    }, (error) => console.error("Error fetching passwords:", error));

    return () => {
      unsubUsers();
      unsubPasswords();
    };
  }, [fbUser]);

  // --- Helper Functions ---
  const showNotification = (msg: string, type: 'success' | 'error') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (username: string, pin: string) => {
    const foundUser = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.pin === pin);
    if (foundUser) {
      setCurrentUser(foundUser);
      setView('passwords');
      setSelectedFolder(null); 
      setSelectedCreator(foundUser.username); 
      setShowSharedWithMe(false);
      setExpandedUser(null);
      showNotification(`Bienvenido, ${foundUser.fullName}`, 'success');
    } else {
      showNotification('Credenciales inválidas', 'error');
    }
  };

  const handleChangePin = async (newPin: string) => {
    if (!currentUser) return;
    try {
      await updateDoc(doc(db, 'artifacts', __app_id, 'public', 'data', 'app_users', currentUser.id), {
        pin: newPin
      });
      setCurrentUser({ ...currentUser, pin: newPin });
      showNotification('PIN actualizado correctamente', 'success');
      setIsChangePinModalOpen(false);
    } catch (e) {
      console.error(e);
      showNotification('Error al actualizar PIN', 'error');
    }
  };

  const handleRegister = async (fullName: string, username: string, pin: string, area: string) => {
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
      showNotification('El usuario ya existe', 'error');
      return;
    }
    try {
      await addDoc(collection(db, 'artifacts', __app_id, 'public', 'data', 'app_users'), {
        fullName,
        username,
        pin,
        area,
        role: 'user',
        allowedTags: [username, area], 
        createdAt: serverTimestamp()
      });
      showNotification('Cuenta creada con éxito. Inicia sesión.', 'success');
      setView('login');
    } catch (e) {
      console.error(e);
      showNotification('Error al crear cuenta', 'error');
    }
  };

  const handleCreateFirstAdmin = async () => {
    if (users.length > 0) return;
    try {
      await addDoc(collection(db, 'artifacts', __app_id, 'public', 'data', 'app_users'), {
        username: 'admin',
        pin: '1234',
        fullName: 'Super Admin',
        role: 'admin',
        area: 'Sistemas',
        allowedTags: ['ALL'],
        createdAt: serverTimestamp()
      });
      showNotification('Admin creado: Usuario "admin", PIN "1234"', 'success');
    } catch (e) {
      console.error(e);
      showNotification('Error creando admin', 'error');
    }
  };

  // --- Logic Core ---
  const treeData = useMemo(() => {
    const creatorMap: Record<string, Set<string>> = {};
    passwords.forEach(pw => {
      if (!creatorMap[pw.createdBy]) {
        creatorMap[pw.createdBy] = new Set();
      }
      creatorMap[pw.createdBy].add(pw.tag);
    });
    return creatorMap;
  }, [passwords]);

  const filteredPasswords = useMemo(() => {
    if (!currentUser) return [];
    let filtered = passwords;
    if (currentUser.role !== 'admin') {
       filtered = filtered.filter(pw => 
         pw.createdBy === currentUser.username || 
         pw.sharedAccess?.some(access => access.targetUser === currentUser.username) 
       );
    }
    if (showSharedWithMe) {
      filtered = filtered.filter(pw => 
        pw.sharedAccess?.some(access => access.targetUser === currentUser.username)
      );
    } else if (selectedCreator) {
      filtered = filtered.filter(pw => pw.createdBy === selectedCreator);
      if (selectedFolder) {
        filtered = filtered.filter(pw => pw.tag === selectedFolder);
      }
    }
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(pw => 
        pw.title.toLowerCase().includes(lowerTerm) ||
        pw.tag.toLowerCase().includes(lowerTerm) ||
        pw.username.toLowerCase().includes(lowerTerm)
      );
    }
    return filtered;
  }, [passwords, currentUser, selectedCreator, selectedFolder, showSharedWithMe, searchTerm]);

  // --- NUEVO COMPONENTE: Contenido de Navegación Reutilizable ---
  // Este componente contiene los enlaces del sidebar para usarlo tanto en desktop como en móvil.
  const NavigationContent = ({ isMobile = false }) => (
    <nav className={`p-4 space-y-6 ${isMobile ? 'mt-16' : ''}`}>
      {/* 1. SECCIÓN PERSONAL */}
      <div>
          <p className="px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Personal</p>
          <div className="space-y-1">
            <SidebarItem 
              icon={<LayoutGrid size={18} />} 
              label="Mi Bóveda" 
              active={view === 'passwords' && selectedCreator === currentUser?.username && !showSharedWithMe} 
              onClick={() => { 
                setView('passwords'); 
                setSelectedCreator(currentUser?.username || null); 
                setSelectedFolder(null); 
                setShowSharedWithMe(false);
                if(isMobile) setIsMobileMenuOpen(false);
              }} 
            />
            <SidebarItem 
              icon={<Share2 size={18} />} 
              label="Compartidos conmigo" 
              active={view === 'passwords' && showSharedWithMe} 
              onClick={() => { 
                setView('passwords'); 
                setShowSharedWithMe(true);
                setSelectedCreator(null);
                setSelectedFolder(null);
                if(isMobile) setIsMobileMenuOpen(false);
              }} 
            />
            
            {/* Carpetas del usuario actual */}
            {currentUser && treeData[currentUser.username] && Array.from(treeData[currentUser.username]).map(folder => (
              <div key={folder} className="pl-4">
                  <SidebarItem 
                    icon={<Folder size={14} />} 
                    label={folder} 
                    active={view === 'passwords' && selectedCreator === currentUser.username && selectedFolder === folder} 
                    onClick={() => { 
                      setView('passwords'); 
                      setSelectedCreator(currentUser.username);
                      setSelectedFolder(folder);
                      setShowSharedWithMe(false);
                      if(isMobile) setIsMobileMenuOpen(false);
                    }} 
                    small
                  />
              </div>
            ))}
          </div>
      </div>

      {/* SECCIÓN AYUDA */}
      <div>
          <p className="px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 mt-6">Soporte</p>
          <SidebarItem 
            icon={<HelpCircle size={18} />} 
            label="Guía de Uso" 
            onClick={() => {
              setIsHelpModalOpen(true);
              if(isMobile) setIsMobileMenuOpen(false);
            }} 
          />
      </div>

      {/* 2. SECCIÓN ADMINISTRADOR (Solo Admin) */}
      {currentUser?.role === 'admin' && (
        <div>
          <p className="px-4 text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2 mt-6 border-t border-zinc-800 pt-4">Administración</p>
          <div className="space-y-1">
              {/* Gestión de Usuarios */}
              <SidebarItem 
              icon={<Users size={18} />} 
              label="Gestionar Personal" 
              active={view === 'users'} 
              onClick={() => {
                setView('users');
                if(isMobile) setIsMobileMenuOpen(false);
              }} 
            />

            {/* Lista de Bóvedas de Empleados */}
            <div className="mt-4">
                <p className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-2">Bóvedas de Empleados</p>
                {users.filter(u => u.username !== currentUser.username).map(user => (
                  <div key={user.id}>
                    <SidebarItem 
                      icon={<User size={16} />} 
                      label={user.fullName} 
                      active={selectedCreator === user.username}
                      onClick={() => {
                        if (expandedUser === user.username) {
                          setExpandedUser(null);
                        } else {
                          setExpandedUser(user.username);
                          setView('passwords');
                          setSelectedCreator(user.username);
                          setSelectedFolder(null);
                          setShowSharedWithMe(false);
                          if(isMobile) setIsMobileMenuOpen(false);
                        }
                      }}
                      hasSubmenu
                      isOpen={expandedUser === user.username}
                    />
                    
                    {/* Carpetas del empleado */}
                    {expandedUser === user.username && (
                      <div className="ml-4 border-l border-zinc-800 pl-2 mt-1 space-y-1 animate-in slide-in-from-left-2 fade-in duration-200">
                        {treeData[user.username] ? Array.from(treeData[user.username]).map(folder => (
                          <SidebarItem 
                            key={`${user.username}-${folder}`}
                            icon={<Folder size={14} />} 
                            label={folder} 
                            active={selectedCreator === user.username && selectedFolder === folder} 
                            onClick={() => { 
                              setView('passwords');
                              setSelectedCreator(user.username);
                              setSelectedFolder(folder);
                              if(isMobile) setIsMobileMenuOpen(false);
                            }} 
                            small
                          />
                        )) : (
                          <div className="text-[10px] text-zinc-600 px-3 py-1 italic">Sin carpetas</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );


  // --- Render Components ---

  if (loading) return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-700">
      <div className="animate-pulse flex flex-col items-center">
        <Shield size={48} />
        <span className="mt-4 text-zinc-400">Cargando BacarPass...</span>
      </div>
    </div>
  );

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl relative z-10">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-red-900/20 rounded-full border border-red-900/30">
              <Shield className="w-12 h-12 text-red-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-zinc-100 mb-2">BacarPass</h1>
          <p className="text-zinc-500 text-center mb-8">Gestión de Accesos Corporativos</p>

          {users.length === 0 ? (
             <div className="text-center">
               <p className="text-yellow-500 mb-4 text-sm">Sistema nuevo detectado.</p>
               <button onClick={handleCreateFirstAdmin} className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-all">
                 Inicializar Bóveda (Crear Admin)
               </button>
             </div>
          ) : view === 'register' ? (
             <RegisterForm onRegister={handleRegister} onBack={() => setView('login')} />
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <div className="mt-6 text-center pt-6 border-t border-zinc-800">
                <button 
                  onClick={() => setView('register')}
                  className="text-sm text-zinc-500 hover:text-red-400 transition-colors flex items-center justify-center gap-2 w-full"
                >
                  <UserPlus size={16} /> Crear una cuenta nueva
                </button>
              </div>
            </>
          )}
        </div>
        
        {notification && (
          <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${notification.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
            {notification.msg}
          </div>
        )}
      </div>
    );
  }

  // --- Main App Layout ---
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex font-sans relative overflow-x-hidden">
      
      {/* SIDEBAR DESKTOP (Oculto en móvil) */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between hidden md:flex z-10">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="h-20 flex items-center px-6 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
            <Shield className="w-8 h-8 text-red-600 mr-3" />
            <span className="font-bold text-xl tracking-tight">BacarPass</span>
          </div>
          {/* Usamos el componente de navegación reutilizable */}
          <NavigationContent />
        </div>

        {/* User Footer Desktop */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold border border-red-900/50 shrink-0">
              {currentUser.fullName.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{currentUser.fullName}</p>
              <button 
                onClick={() => setIsChangePinModalOpen(true)}
                className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors mt-0.5"
              >
                 <Settings size={10} /> Cambiar PIN
              </button>
            </div>
          </div>
          <button onClick={() => setCurrentUser(null)} className="w-full flex items-center justify-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2 rounded-lg transition-colors">
            <LogOut size={18} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* MOBILE HEADER & MENU (Visible solo en móvil) */}
      <div className="md:hidden fixed top-0 w-full bg-zinc-900 border-b border-zinc-800 z-30 flex justify-between items-center p-4 h-16">
         <div className="flex items-center gap-3">
            {/* Botón Hamburguesa */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-zinc-400 hover:text-white p-1">
              <Menu size={24} />
            </button>
            <Shield className="w-6 h-6 text-red-600" />
            <span className="font-bold text-lg">BacarPass</span>
         </div>
         <button onClick={() => setCurrentUser(null)} className="text-zinc-500 hover:text-red-400 p-1"><LogOut size={22} /></button>
      </div>

      {/* MOBILE SIDEBAR DRAWER (Overlay) */}
      {/* Fondo oscuro (Backdrop) */}
      <div className={`md:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"></div>
      
      {/* Panel lateral deslizante */}
      <aside className={`md:hidden fixed top-0 left-0 w-4/5 max-w-xs h-full bg-zinc-900 border-r border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex-1 overflow-y-auto custom-scrollbar relative">
            {/* Botón cerrar menú */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800/50 p-2 rounded-full z-20">
              <X size={20} />
            </button>
            {/* Usamos el componente de navegación reutilizable en modo móvil */}
            <NavigationContent isMobile={true} />
          </div>
          
          {/* User Footer Mobile */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/95">
             <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold border border-red-900/50 shrink-0 text-lg">
                  {currentUser.fullName.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-base font-medium truncate">{currentUser.fullName}</p>
                  <button 
                    onClick={() => { setIsChangePinModalOpen(true); setIsMobileMenuOpen(false); }}
                    className="text-sm text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors mt-1"
                  >
                     <Settings size={12} /> Cambiar PIN
                  </button>
                </div>
              </div>
          </div>
      </aside>


      {/* Content Area (Ajustado padding y margen superior para móvil) */}
      <main className="flex-1 overflow-y-auto p-4 pt-6 md:p-8 mt-16 md:mt-0">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 truncate">
              {view === 'passwords' ? (
                 <>
                   {showSharedWithMe ? <Share2 className="text-blue-500 shrink-0" size={20} /> : <Lock className="text-red-600 shrink-0" size={20} />}
                   
                   <span className="truncate">
                   {showSharedWithMe ? "Compartidos conmigo" : (
                     selectedCreator === currentUser.username ? "Mi Bóveda" : `Bóveda de ${users.find(u => u.username === selectedCreator)?.fullName || selectedCreator}`
                   )}
                   </span>
                   
                   {selectedFolder && <span className="text-zinc-500 text-lg font-normal flex items-center truncate"> <ChevronRight size={16} className="mx-1 shrink-0"/> {selectedFolder}</span>}
                 </>
              ) : 'Gestión de Personal'}
            </h2>
            <p className="text-zinc-500 text-sm mt-1 truncate">
              {view === 'passwords' 
                ? (selectedFolder ? `Carpeta: ${selectedFolder}` : `Viendo ${filteredPasswords.length} credenciales`)
                : 'Administrar accesos, roles y áreas'}
            </p>
          </div>

          {view === 'passwords' && !showSharedWithMe && (selectedCreator === currentUser.username || currentUser.role === 'admin') && (
            <div className="flex gap-3">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-zinc-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-red-800 w-full md:w-64 transition-colors text-sm"
                />
              </div>
              {/* Solo se permite crear contraseñas en TU propia bóveda */}
              {selectedCreator === currentUser.username && (
                <button 
                  onClick={() => { setEditingPassword(null); setIsAddModalOpen(true); }}
                  className="bg-red-800 hover:bg-red-700 text-white px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20 shrink-0"
                >
                  <Plus size={18} />
                  <span className="hidden md:inline">Nueva</span>
                </button>
              )}
            </div>
          )}

          {view === 'users' && currentUser.role === 'admin' && (
             <button onClick={() => setIsUserModalOpen(true)} className="bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium text-sm md:text-base w-full md:w-auto justify-center">
              <Plus size={18} /><span>Nuevo Usuario</span>
            </button>
          )}
        </header>

        {view === 'passwords' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredPasswords.map(pw => (
              <PasswordCard 
                key={pw.id} 
                data={pw} 
                currentUser={currentUser}
                onNotify={(msg) => showNotification(msg, 'success')}
                onDelete={async () => {
                   if(window.confirm('¿Borrar contraseña?')) {
                     await deleteDoc(doc(db, 'artifacts', __app_id, 'public', 'data', 'passwords', pw.id));
                     showNotification('Eliminado', 'success');
                   }
                }}
                onEdit={() => {
                  setEditingPassword(pw);
                  setIsAddModalOpen(true);
                }}
                onShare={() => {
                  setSharingPassword(pw);
                  setIsShareModalOpen(true);
                }}
              />
            ))}
            {filteredPasswords.length === 0 && (
              <div className="col-span-full py-12 flex flex-col items-center justify-center text-zinc-600 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800 text-center px-4">
                <Folder size={48} className="mb-4 opacity-20" />
                <p>No hay elementos en esta vista.</p>
                {showSharedWithMe && <p className="text-xs mt-2">Nadie te ha compartido contraseñas aún.</p>}
              </div>
            )}
          </div>
        ) : (
          // Componente de gestión de usuarios actualizado para ser responsivo
          <UserManagement users={users} currentUserId={currentUser.id} appId={__app_id} onNotify={showNotification} />
        )}
      </main>

      {/* Modals (Ajustados para móvil: w-[95%], max-h-[90vh], overflow-y-auto) */}
      {isAddModalOpen && (
        <AddPasswordModal 
          onClose={() => { setIsAddModalOpen(false); setEditingPassword(null); }} 
          currentUser={currentUser}
          appId={__app_id}
          initialData={editingPassword}
          currentFolder={selectedFolder}
          onSuccess={(msg) => showNotification(msg, 'success')}
        />
      )}

      {isUserModalOpen && (
        <AddUserModal onClose={() => setIsUserModalOpen(false)} appId={__app_id} onSuccess={(msg) => showNotification(msg, 'success')} />
      )}

      {isShareModalOpen && sharingPassword && (
        <ShareModal 
          onClose={() => { setIsShareModalOpen(false); setSharingPassword(null); }}
          appId={__app_id}
          passwordData={sharingPassword}
          users={users}
          onSuccess={(msg) => showNotification(msg, 'success')}
        />
      )}

      {isChangePinModalOpen && (
        <ChangePinModal 
          onClose={() => setIsChangePinModalOpen(false)}
          onSave={handleChangePin}
          realCurrentPin={currentUser.pin}
        />
      )}

      {isHelpModalOpen && (
        <HelpModal onClose={() => setIsHelpModalOpen(false)} />
      )}

      {notification && (
         <div className={`fixed bottom-4 right-4 left-4 md:left-auto px-6 py-3 rounded-lg shadow-lg text-white font-medium z-[100] animate-fade-in-up ${notification.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'} text-center md:text-left`}>
          <div className="flex items-center justify-center md:justify-start gap-2">
            {notification.type === 'success' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            {notification.msg}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Sub Components ---

function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center">
      <div className="bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-2xl rounded-t-xl md:rounded-xl p-6 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full">
          <XCircle size={24} />
        </button>
        
        <div className="flex items-center gap-3 mb-6 pr-8">
          <div className="p-3 bg-red-900/20 rounded-full border border-red-900/30 shrink-0">
            <HelpCircle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Guía de Uso BacarPass</h2>
            <p className="text-zinc-500 text-sm">Cómo sacar el máximo provecho a tu bóveda.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* ... (Contenido de ayuda igual) ... */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400">
              <Folder size={24} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-200 text-lg">Organización por Carpetas</h3>
              <p className="text-zinc-400 text-sm mt-1">
                No necesitas "crear" carpetas manualmente. Simplemente, cuando agregues una contraseña, escribe el nombre de la carpeta en el campo <strong>Carpeta / Tag</strong> (ej: "NVR", "Marketing"). El sistema agrupará todo automáticamente en el menú lateral.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400">
              <Share2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-200 text-lg">Compartir Seguro con PIN</h3>
              <p className="text-zinc-400 text-sm mt-1">
                ¿Necesitas enviar una contraseña a un compañero? Usa el botón de compartir <span className="inline-block align-middle"><Share2 size={12}/></span> en la tarjeta. Se te pedirá crear un <strong>PIN único</strong>. Tu compañero solo podrá ver la contraseña si ingresa ese PIN.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-200 text-lg">Privacidad y Seguridad</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Cada usuario tiene su propia bóveda privada. Los administradores pueden ver todas las bóvedas, pero los usuarios normales <strong>solo ven lo que ellos crearon</strong> o lo que se les compartió explícitamente. ¡Cambia tu PIN personal regularmente desde el menú inferior!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-800 text-center sticky bottom-0 bg-zinc-900 pb-2">
          <button onClick={onClose} className="bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, small, hasSubmenu, isOpen }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void, small?: boolean, hasSubmenu?: boolean, isOpen?: boolean }) {
  return (
    <button 
      onClick={onClick} 
      className={`w-full flex items-center justify-between px-4 ${small ? 'py-2' : 'py-3'} rounded-lg transition-all duration-200 group ${
        active 
          ? 'bg-red-900/20 text-red-500 border border-red-900/30' 
          : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-transparent'
      }`}
    >
      <div className="flex items-center space-x-3 truncate">
        {icon}
        <span className={`${small ? 'text-sm' : 'text-base'} font-medium truncate`}>{label}</span>
      </div>
      {active && !hasSubmenu && <ChevronRight size={16} className="opacity-50" />}
      {hasSubmenu && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} className="opacity-50" />)}
    </button>
  );
}

function RegisterForm({ onRegister, onBack }: { onRegister: (n:string, u:string, p:string, a:string) => void, onBack: () => void }) {
  // ... (Sin cambios en RegisterForm)
  const [formData, setFormData] = useState({ fullName: '', username: '', pin: '', area: '' });
  return (
    <form onSubmit={(e) => { e.preventDefault(); onRegister(formData.fullName, formData.username, formData.pin, formData.area); }} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Nombre Completo</label>
        <input className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Usuario</label>
          <input className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} required />
        </div>
        <div>
           <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">PIN</label>
           <input type="password" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all" value={formData.pin} onChange={e => setFormData({...formData, pin: e.target.value})} required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Área de Trabajo</label>
        <input placeholder="Ej: Ventas, Logística..." className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} required />
        <p className="text-[10px] text-zinc-600 mt-1">Tu bóveda se organizará por carpetas que tú crees.</p>
      </div>
      
      <div className="flex gap-2 mt-4">
        <button type="button" onClick={onBack} className="w-1/3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 rounded-lg transition-all"><ArrowLeft size={20} className="mx-auto"/></button>
        <button type="submit" className="w-2/3 bg-red-800 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-red-900/20">Registrarme</button>
      </div>
    </form>
  );
}

function LoginForm({ onLogin }: { onLogin: (u: string, p: string) => void }) {
  // ... (Sin cambios en LoginForm)
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); onLogin(u, p); }} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Usuario</label>
        <input className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all" value={u} onChange={(e) => setU(e.target.value)} placeholder="Ej: admin" required />
      </div>
      <div>
        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">PIN / Contraseña</label>
        <input type="password" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all" value={p} onChange={(e) => setP(e.target.value)} placeholder="Ej: 1234" required />
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-red-900/30">Acceder</button>
    </form>
  );
}

function PasswordCard({ data, currentUser, onDelete, onEdit, onShare, onNotify }: { data: PasswordEntry, currentUser: AppUser, onDelete: () => void, onEdit: () => void, onShare: () => void, onNotify: (m: string) => void }) {
  // ... (Sin cambios funcionales en PasswordCard, solo pequeños ajustes visuales si fueran necesarios, pero el layout de grid ya lo maneja bien)
  const [revealed, setRevealed] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  
  // States for shared access
  const [pinPrompt, setPinPrompt] = useState(false);
  const [inputPin, setInputPin] = useState('');
  const [pinError, setPinError] = useState(false);

  // Check Permissions
  const isOwner = currentUser.username === data.createdBy;
  const isAdmin = currentUser.role === 'admin';
  const isSharedWithMe = data.sharedAccess?.some(sa => sa.targetUser === currentUser.username);
  
  const canEdit = isAdmin || isOwner;
  const hasHistory = data.history && data.history.length > 0;

  // Determine if we need PIN to reveal
  const requiresPin = isSharedWithMe && !isAdmin && !isOwner;

  // Icono automático
  const faviconUrl = getFavicon(data.url);

  const handleReveal = () => {
    if (revealed) {
      setRevealed(false);
      return;
    }
    
    if (requiresPin) {
      setPinPrompt(true);
      setPinError(false);
      setInputPin('');
    } else {
      setRevealed(true);
    }
  };

  const handlePinSubmit = () => {
    const myShare = data.sharedAccess?.find(sa => sa.targetUser === currentUser.username);
    if (myShare && myShare.accessPin === inputPin) {
      setRevealed(true);
      setPinPrompt(false);
    } else {
      setPinError(true);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    if (requiresPin && !revealed) {
       handleReveal();
       return;
    }
    navigator.clipboard.writeText(text);
    onNotify(`${label} copiado`); // Feedback de Smart Clipboard
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 hover:border-zinc-700 transition-all group shadow-sm hover:shadow-md relative flex flex-col h-full">
      <div className="flex justify-between items-start mb-4 gap-2">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 relative overflow-hidden border border-zinc-700 shrink-0">
            {faviconUrl ? (
               <img src={faviconUrl} alt="logo" className="w-6 h-6 object-contain" />
            ) : (
               <Key size={20} />
            )}
            {isSharedWithMe && (
               <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-zinc-900" title="Compartido contigo"></div>
            )}
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-zinc-200 truncate">{data.title}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 flex items-center gap-1 w-fit truncate mt-0.5">
               <Folder size={10} className="shrink-0"/> <span className="truncate">{data.tag}</span>
            </span>
          </div>
        </div>
        <div className="flex gap-1 shrink-0">
          {currentUser.role === 'admin' && hasHistory && (
             <button onClick={() => setShowHistory(!showHistory)} className={`p-1.5 rounded-md transition-colors ${showHistory ? 'bg-red-900/30 text-red-400' : 'text-zinc-600 hover:text-zinc-300'}`} title="Ver Historial">
               <History size={16} />
             </button>
          )}
          {canEdit && (
            <>
              <button onClick={onShare} className="text-zinc-600 hover:text-white p-1.5 transition-colors" title="Compartir">
                <Share2 size={16} />
              </button>
              <button onClick={onEdit} className="text-zinc-600 hover:text-white p-1.5 transition-colors" title="Editar">
                <Edit2 size={16} />
              </button>
              <button onClick={onDelete} className="text-zinc-600 hover:text-red-500 p-1.5 transition-colors" title="Eliminar">
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {!showHistory ? (
        <div className="space-y-3 flex-1">
          <div className="bg-zinc-950/50 p-2 rounded-lg flex justify-between items-center border border-zinc-800/50">
             <span className="text-sm text-zinc-400 select-all truncate mr-2">{data.username}</span>
             <button onClick={() => copyToClipboard(data.username, 'Usuario')} className="text-zinc-600 hover:text-zinc-300 shrink-0 p-1"><Copy size={14} /></button>
          </div>

          <div className="bg-zinc-950/50 p-2 rounded-lg flex justify-between items-center border border-zinc-800/50 relative">
             {pinPrompt ? (
               <div className="flex w-full gap-2 animate-in fade-in">
                 <input 
                   type="password" 
                   autoFocus
                   placeholder="PIN" 
                   className={`w-full bg-zinc-900 text-xs px-2 rounded border focus:outline-none ${pinError ? 'border-red-500 text-red-500' : 'border-zinc-700 text-white'}`}
                   value={inputPin}
                   onChange={e => setInputPin(e.target.value)}
                   onKeyDown={e => e.key === 'Enter' && handlePinSubmit()}
                 />
                 <button onClick={handlePinSubmit} className="text-red-500 hover:text-red-400 shrink-0"><CheckCircle2 size={16}/></button>
                 <button onClick={() => setPinPrompt(false)} className="text-zinc-500 shrink-0"><XCircle size={16}/></button>
               </div>
             ) : (
               <>
                <span className={`text-sm ${revealed ? 'text-red-400 font-mono' : 'text-zinc-500'} truncate mr-2 flex-1`}>{revealed ? data.passwordValue : '••••••••••••'}</span>
                <div className="flex gap-1 shrink-0">
                  <button onClick={handleReveal} className={`hover:text-zinc-300 p-1 ${requiresPin && !revealed ? 'text-blue-500' : 'text-zinc-600'}`}>
                    {revealed ? <EyeOff size={14} /> : (requiresPin ? <Lock size={14} /> : <Eye size={14} />)}
                  </button>
                  <button onClick={() => copyToClipboard(data.passwordValue, 'Contraseña')} className="text-zinc-600 hover:text-zinc-300 p-1"><Copy size={14} /></button>
                </div>
               </>
             )}
          </div>
          
          <div className="mt-auto pt-3 border-t border-zinc-800/50 flex justify-between items-center text-xs">
            <a href={data.url.startsWith('http') ? data.url : `https://${data.url}`} target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 hover:underline truncate block flex-1 mr-2">
              {data.url.replace('https://','').replace('http://','').replace('www.','')} &rarr;
            </a>
            <span className="text-zinc-600 truncate shrink-0">@{data.createdBy}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 flex-1">
           <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Historial de Cambios</h4>
           <div className="max-h-32 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
             {data.history?.slice().reverse().map((h, i) => (
               <div key={i} className="text-xs bg-zinc-950/80 p-2 rounded border border-zinc-800">
                 <div className="flex justify-between text-zinc-500 mb-1">
                   <span>{h.changedAt?.toDate().toLocaleDateString()}</span>
                   <span>{h.changedBy}</span>
                 </div>
                 <div className="font-mono text-zinc-300 break-all">{h.value}</div>
               </div>
             ))}
           </div>
           <button onClick={() => setShowHistory(false)} className="w-full text-xs text-center text-zinc-500 hover:text-zinc-300 mt-2">Cerrar Historial</button>
        </div>
      )}
    </div>
  );
}

// --- COMPONENTE USER MANAGEMENT ACTUALIZADO (Responsivo: Tabla en Desktop / Tarjetas en Móvil) ---
function UserManagement({ users, currentUserId, appId, onNotify }: { users: AppUser[], currentUserId: string, appId: string, onNotify: any }) {
  const [userFilter, setUserFilter] = useState('');

  const filteredUsers = users.filter(u => 
    u.fullName.toLowerCase().includes(userFilter.toLowerCase()) || 
    u.username.toLowerCase().includes(userFilter.toLowerCase()) ||
    u.area?.toLowerCase().includes(userFilter.toLowerCase()) ||
    u.role.toLowerCase().includes(userFilter.toLowerCase())
  );

  const toggleRole = async (user: AppUser) => {
    if (user.id === currentUserId) return;
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    await updateDoc(doc(getFirestore(), 'artifacts', appId, 'public', 'data', 'app_users', user.id), { role: newRole });
    onNotify(`Rol de ${user.username} cambiado a ${newRole}`, 'success');
  };

  const deleteUser = async (user: AppUser) => {
    if (user.id === currentUserId) return;
    if(window.confirm(`¿Eliminar usuario ${user.username}?`)) {
      await deleteDoc(doc(getFirestore(), 'artifacts', appId, 'public', 'data', 'app_users', user.id));
      onNotify('Usuario eliminado', 'success');
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
         <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
         <input 
            type="text" 
            placeholder="Filtrar empleados por nombre, área o rol..." 
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-colors text-sm"
         />
      </div>

      {/* VISTA MÓVIL: Tarjetas de Usuario (visible solo en md:hidden) */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">{user.fullName.substring(0,2).toUpperCase()}</div>
                <div>
                  <p className="font-medium text-zinc-200">{user.fullName}</p>
                  <p className="text-sm text-zinc-500">@{user.username}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {user.id !== currentUserId && (
                  <>
                  <button onClick={() => toggleRole(user)} className="text-zinc-500 hover:text-white p-2 bg-zinc-800 rounded-lg" title="Cambiar Rol"><Settings size={18} /></button>
                  <button onClick={() => deleteUser(user)} className="text-zinc-500 hover:text-red-500 p-2 bg-zinc-800 rounded-lg" title="Eliminar"><Trash2 size={18} /></button>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center text-sm pt-2 border-t border-zinc-800">
               <span className={`px-2 py-1 rounded text-xs font-medium border ${user.role === 'admin' ? 'bg-red-900/20 text-red-400 border-red-900/30' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>{user.role.toUpperCase()}</span>
               {user.area && <span className="text-zinc-500">| {user.area}</span>}
            </div>

            {user.allowedTags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {user.allowedTags.map(tag => (<span key={tag} className="text-xs bg-zinc-950 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">{tag}</span>))}
              </div>
            )}
          </div>
        ))}
      </div>


      {/* VISTA ESCRITORIO: Tabla (visible solo en md:block) */}
      <div className="hidden md:block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-950 text-zinc-500 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Usuario</th>
              <th className="px-6 py-4">Rol / Área</th>
              <th className="px-6 py-4">Permisos</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filteredUsers.map(user => (
              <tr key={user.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">{user.fullName.substring(0,2).toUpperCase()}</div>
                    <div><p className="font-medium text-zinc-200">{user.fullName}</p><p className="text-xs text-zinc-500">@{user.username}</p></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className={`px-2 py-0.5 w-fit rounded text-[10px] font-medium border ${user.role === 'admin' ? 'bg-red-900/20 text-red-400 border-red-900/30' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>{user.role.toUpperCase()}</span>
                    {user.area && <span className="text-xs text-zinc-500">{user.area}</span>}
                  </div>
                </td>
                <td className="px-6 py-4"><div className="flex flex-wrap gap-1">{user.allowedTags.map(tag => (<span key={tag} className="text-xs bg-zinc-950 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">{tag}</span>))}</div></td>
                <td className="px-6 py-4 text-right space-x-2">
                   {user.id !== currentUserId && (
                     <>
                      <button onClick={() => toggleRole(user)} className="text-zinc-500 hover:text-white p-1" title="Cambiar Rol"><Settings size={16} /></button>
                      <button onClick={() => deleteUser(user)} className="text-zinc-500 hover:text-red-500 p-1" title="Eliminar"><Trash2 size={16} /></button>
                     </>
                   )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-zinc-500 text-sm bg-zinc-900 border border-zinc-800 rounded-xl">No se encontraron usuarios con ese filtro.</div>
        )}
    </div>
  );
}

function AddPasswordModal({ onClose, currentUser, appId, initialData, onSuccess, currentFolder }: { onClose: () => void, currentUser: AppUser, appId: string, initialData: PasswordEntry | null, onSuccess: (m:string)=>void, currentFolder: string | null }) {
  // ... (Sin cambios en lógica, solo ajuste de contenedor para móvil)
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    username: initialData?.username || '',
    passwordValue: initialData?.passwordValue || '',
    url: initialData?.url || '',
    tag: initialData?.tag || (currentFolder ? currentFolder : '')
  });

  const [strength, setStrength] = useState(0);

  useEffect(() => {
    setStrength(calculateStrength(formData.passwordValue));
  }, [formData.passwordValue]);

  const faviconPreview = getFavicon(formData.url);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.tag) return alert("Debes asignar un Tag/Carpeta");

    try {
      const db = getFirestore();
      
      if (initialData) {
        const updatePayload: any = { ...formData };
        if (initialData.passwordValue !== formData.passwordValue) {
          const historyItem: PasswordHistoryItem = {
            value: initialData.passwordValue,
            changedAt: Timestamp.now(),
            changedBy: currentUser.username
          };
          const currentHistory = initialData.history || [];
          updatePayload.history = [...currentHistory, historyItem];
        }

        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'passwords', initialData.id), updatePayload);
        onSuccess('Contraseña actualizada');
      } else {
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'passwords'), {
          ...formData,
          createdBy: currentUser.username,
          createdAt: serverTimestamp(),
          history: []
        });
        onSuccess('Contraseña creada');
      }
      onClose();
    } catch (e) {
      console.error(e);
      alert('Error al guardar');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center">
      <div className="bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-5 md:p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative">
         {/* Botón cerrar en móvil para fácil acceso */}
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10">
          <XCircle size={24} />
        </button>

        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8">
          {initialData ? <Edit2 size={20} className="text-red-600"/> : <Lock size={20} className="text-red-600"/>} 
          {initialData ? 'Editar Credencial' : 'Nueva Credencial'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input placeholder="Título (ej: Gmail Marketing)" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Usuario/Email" className="bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
             <input placeholder="Carpeta (ej: NVR, Cámaras)" className="bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.tag} onChange={e => setFormData({...formData, tag: e.target.value})} />
          </div>
          
          <div className="space-y-4">
            {/* URL con Icono Automático */}
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                 {faviconPreview ? <img src={faviconPreview} alt="Icon" className="w-6 h-6 object-contain" /> : <Globe size={20} className="text-zinc-600" />}
              </div>
              <input placeholder="URL del Sitio (Automático Icono)" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} />
            </div>

            {/* Password con Medidor de Salud */}
            <div>
               <input type="text" placeholder="Contraseña" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none font-mono text-red-400 text-base" required value={formData.passwordValue} onChange={e => setFormData({...formData, passwordValue: e.target.value})} />
               <div className="mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                 <div 
                   className={`h-full transition-all duration-300 ${strength > 80 ? 'bg-emerald-500' : strength > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                   style={{ width: `${Math.max(5, strength)}%` }}
                 ></div>
               </div>
               <p className="text-[10px] text-zinc-600 mt-1 flex justify-between">
                 <span>Salud de Contraseña</span>
                 <span className={`${strength > 80 ? 'text-emerald-500' : strength > 40 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {strength > 80 ? 'Excelente' : strength > 40 ? 'Buena' : 'Débil'}
                 </span>
               </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base">Cancelar</button>
            <button type="submit" className="flex-1 bg-red-800 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium text-base">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddUserModal({ onClose, appId, onSuccess }: { onClose: () => void, appId: string, onSuccess: (m:string)=>void }) {
  const [formData, setFormData] = useState({ fullName: '', username: '', pin: '', tagsInput: '' });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const tags = formData.tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    try {
      await addDoc(collection(getFirestore(), 'artifacts', appId, 'public', 'data', 'app_users'), {
        fullName: formData.fullName,
        username: formData.username,
        pin: formData.pin,
        role: 'user',
        allowedTags: tags,
        createdAt: serverTimestamp()
      });
      onSuccess('Usuario Creado');
      onClose();
    } catch (e) { console.error(e); alert('Error creando usuario'); }
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center">
      <div className="bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10">
          <XCircle size={24} />
        </button>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8"><Users size={20} className="text-zinc-400"/> Nuevo Empleado</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input placeholder="Nombre Completo" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input placeholder="Usuario" className="bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
             <input placeholder="PIN" className="bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={formData.pin} onChange={e => setFormData({...formData, pin: e.target.value})} />
          </div>
          <div>
            <label className="text-xs text-zinc-500 mb-1 block">Etiquetas / Carpetas Permitidas</label>
            <input placeholder="Ej: NVR, Cámaras, Marketing" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" value={formData.tagsInput} onChange={e => setFormData({...formData, tagsInput: e.target.value})} />
          </div>
          <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base">Cancelar</button>
            <button type="submit" className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ShareModal({ onClose, appId, passwordData, users, onSuccess }: { onClose: () => void, appId: string, passwordData: PasswordEntry, users: AppUser[], onSuccess: (m:string)=>void }) {
  // ... (Sin cambios en lógica)
  const [selectedUser, setSelectedUser] = useState('');
  const [accessPin, setAccessPin] = useState('');

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    
    if (passwordData.sharedAccess?.some(sa => sa.targetUser === selectedUser)) {
      alert("Ya está compartida con este usuario");
      return;
    }

    try {
      const db = getFirestore();
      const currentShares = passwordData.sharedAccess || [];
      const newShare: SharedAccess = {
        targetUser: selectedUser,
        accessPin: accessPin,
        sharedAt: Timestamp.now()
      };

      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'passwords', passwordData.id), {
        sharedAccess: [...currentShares, newShare]
      });
      onSuccess(`Compartido con ${selectedUser}`);
      onClose();
    } catch (e) {
      console.error(e);
      alert('Error al compartir');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center">
      <div className="bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10">
          <XCircle size={24} />
        </button>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pr-8"><Share2 size={20} className="text-red-600"/> Compartir Credencial</h3>
        <p className="text-sm text-zinc-400 mb-4">Vas a compartir <strong>{passwordData.title}</strong> con otro usuario.</p>
        <form onSubmit={handleShare} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Usuario Destino</label>
            <select 
               className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base"
               value={selectedUser}
               onChange={e => setSelectedUser(e.target.value)}
               required
            >
              <option value="">Seleccionar Usuario...</option>
              {users.filter(u => u.username !== passwordData.createdBy).map(u => (
                <option key={u.id} value={u.username}>{u.fullName} (@{u.username})</option>
              ))}
            </select>
          </div>
          <div>
             <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Asignar PIN de Acceso</label>
             <input 
               type="text" 
               placeholder="Ej: 9999" 
               className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none font-mono text-red-400 text-base"
               value={accessPin}
               onChange={e => setAccessPin(e.target.value)}
               required
             />
             <p className="text-[10px] text-zinc-500 mt-1">El usuario deberá ingresar este PIN para ver la contraseña.</p>
          </div>
          <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base">Cancelar</button>
            <button type="submit" className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base">Compartir</button>
          </div>
        </form>
        
        {/* List of existing shares */}
        {passwordData.sharedAccess && passwordData.sharedAccess.length > 0 && (
           <div className="mt-6 pt-4 border-t border-zinc-800">
             <h4 className="text-xs font-bold text-zinc-500 uppercase mb-2">Compartido con:</h4>
             <div className="space-y-2">
               {passwordData.sharedAccess.map((share, idx) => (
                 <div key={idx} className="flex justify-between items-center text-sm bg-zinc-950/50 p-2 rounded border border-zinc-800/50">
                   <span className="text-zinc-300">@{share.targetUser}</span>
                   <span className="text-zinc-600 font-mono text-xs">PIN: {share.accessPin}</span>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>
    </div>
  );
}

function ChangePinModal({ onClose, onSave, realCurrentPin }: { onClose: () => void, onSave: (p:string) => void, realCurrentPin: string }) {
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (oldPin !== realCurrentPin) return alert('El PIN actual es incorrecto');
    if (newPin !== confirmPin) return alert('Los nuevos PINs no coinciden');
    if (newPin.length < 4) return alert('El PIN debe tener al menos 4 caracteres');
    onSave(newPin);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center">
      <div className="bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-sm rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10">
          <XCircle size={24} />
        </button>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8"><KeyRound size={20} className="text-red-600"/> Cambiar PIN de Acceso</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
             <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">PIN Actual</label>
             <input type="password" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={oldPin} onChange={e => setOldPin(e.target.value)} />
          </div>
          <div className="pt-2 border-t border-zinc-800">
             <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Nuevo PIN</label>
             <input type="password" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={newPin} onChange={e => setNewPin(e.target.value)} />
          </div>
          <div>
             <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Confirmar Nuevo PIN</label>
             <input type="password" className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base" required value={confirmPin} onChange={e => setConfirmPin(e.target.value)} />
          </div>
          <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base">Cancelar</button>
            <button type="submit" className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}