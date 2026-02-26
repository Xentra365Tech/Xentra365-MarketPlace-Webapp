import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, 
  Search, LogOut, Menu, X, ChevronLeft, ChevronRight,
  User, Mail, Phone, Globe,  Upload
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SettingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/profile' },
    { name: 'Escrow Wallet', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Security & Privacy', icon: <ShieldCheck size={20} />, path: '/security' },
    { name: 'Profile Settings', icon: <Settings size={20} />, path: '/settings' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
  ];

  return (
    <div className="h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* --- MOBILE OVERLAY --- */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)} />
      )}

      {/* --- SIDEBAR --- */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-full bg-slate-950 text-white transition-all duration-300 z-50 flex flex-col shadow-2xl shrink-0
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        ${isSidebarCollapsed ? 'lg:w-20' : 'w-64'}`}
      >
        <div className={`h-20 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-6'} border-b border-white/10 shrink-0`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#3A0CA3] rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">X</div>
            {!isSidebarCollapsed && <span className="text-xl font-bold tracking-tight">Xentra365</span>}
          </Link>
          <button className="lg:hidden ml-auto text-white/70 hover:text-white" onClick={() => setIsMobileSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
                  ${isActive ? 'bg-white/10 font-bold text-white shadow-inner' : 'text-purple-200 hover:bg-white/5 hover:text-white'}`}
                title={isSidebarCollapsed ? item.name : ''}
              >
                <div className={`${isActive ? 'text-white' : 'text-purple-300 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>

        <div className={`p-4 border-t border-white/10 shrink-0 ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover rounded-full"/>
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate">Alex Sterling</div>
                <div className="text-[10px] text-purple-300 truncate">Buyer Account</div>
              </div>
            )}
            {!isSidebarCollapsed && (
              <button onClick={handleLogout} className="text-purple-300 hover:text-white p-1" title="Logout">
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>

        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 w-6 h-6 bg-[#3A0CA3] border-2 border-[#0A0A11] rounded-full items-center justify-center text-white hover:bg-[#501bb8] transition-colors z-50 shadow-lg"
        >
          {isSidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto relative bg-[#0A0A11]">
        
        {/* Top Header */}
        <header className="h-20 bg-[#12121D] border-b border-[#2A2A38] px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileSidebarOpen(true)}><Menu size={24} /></button>
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" placeholder="Search settings..." 
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] transition-colors text-white placeholder-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">System Online</span>
            </div>
            <button className="text-gray-400 hover:text-white relative"><Bell size={20} /><span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/></div>
          </div>
        </header>

        {/* --- SETTINGS BODY --- */}
        <main className="flex-1 p-4 lg:p-8 max-w-[1000px] w-full mx-auto space-y-6 lg:space-y-8">
          
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">Profile Settings</h1>
            <p className="text-sm text-gray-400">Manage your personal information, addresses, and marketplace preferences.</p>
          </div>

          {/* Personal Information */}
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6 border-b border-[#2A2A38] pb-4">
              <User size={20} className="text-[#A67CFF]" /> Personal Information
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-[#1E1E2C] border-2 border-[#2A2A38] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Avatar" className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-[#6324E2] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Upload size={14} /> Upload New Photo
                </button>
                <p className="text-[10px] text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                <input type="text" defaultValue="Sterling" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                  <input type="email" disabled defaultValue="alex.sterling@xentra365.io" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-lg pl-10 pr-4 py-3 text-sm text-gray-500 cursor-not-allowed" />
                  <ShieldCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                  <input type="text" defaultValue="+1 (555) 019-2831" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Regional & Preferences */}
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6 border-b border-[#2A2A38] pb-4">
              <Globe size={20} className="text-blue-500" /> Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Display Language</label>
                <select className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white appearance-none">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Default Currency</label>
                <select className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white appearance-none">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>USDC (Crypto)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Action */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button className="px-6 py-3 rounded-lg text-sm font-bold text-gray-400 hover:text-white transition-colors">Cancel</button>
            <button className="px-8 py-3 rounded-lg bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold shadow-lg shadow-purple-900/20 transition-colors">Save Changes</button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default SettingsPage;