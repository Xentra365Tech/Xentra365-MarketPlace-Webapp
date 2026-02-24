import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, 
  Search, Key, Smartphone, Mail, Monitor, 
  LogOut, Menu, X, ChevronLeft, ChevronRight, Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SecurityPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  
  // Sidebar states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Form states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [escrowUpdatesEnabled, setEscrowUpdatesEnabled] = useState(true);
  const [messagesEnabled, setMessagesEnabled] = useState(false);
  const [promosEnabled, setPromosEnabled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/profile' }, // Pointing to your overview
    { name: 'Escrow Wallet', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Security & Privacy', icon: <ShieldCheck size={20} />, path: '/security' },
    { name: 'Profile Settings', icon: <Settings size={20} />, path: '/settings' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
  ];

  // Reusable Toggle Switch Component
  const ToggleSwitch = ({ active, onToggle }: { active: boolean, onToggle: () => void }) => (
    <div 
      onClick={onToggle}
      className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ease-in-out ${active ? 'bg-[#4812B5]' : 'bg-[#2A2A38]'}`}
    >
      <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform duration-300 shadow-sm ${active ? 'left-6' : 'left-1'}`}></div>
    </div>
  );

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* --- MOBILE OVERLAY --- */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsMobileSidebarOpen(false)} 
        />
      )}

      {/* --- PURPLE SIDEBAR --- */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-screen bg-[#3A0CA3] text-white transition-all duration-300 z-50 flex flex-col shadow-2xl shrink-0
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        ${isSidebarCollapsed ? 'lg:w-20' : 'w-64'}`}
      >
        {/* Header / Logo */}
        <div className={`h-20 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-6'} border-b border-white/10 shrink-0`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#3A0CA3] rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">X</div>
            {!isSidebarCollapsed && <span className="text-xl font-bold tracking-tight">Xentra365</span>}
          </Link>
          {/* Mobile close button */}
          <button className="lg:hidden ml-auto text-white/70 hover:text-white" onClick={() => setIsMobileSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.name === 'Security & Privacy' && location.pathname === '/security');
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

        {/* User Profile Snippet (Bottom) */}
        <div className={`p-4 border-t border-white/10 ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover rounded-full"/>
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate">Alex Thompson</div>
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

        {/* Desktop Collapse Toggle */}
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 w-6 h-6 bg-[#3A0CA3] border-2 border-[#0A0A11] rounded-full items-center justify-center text-white hover:bg-[#501bb8] transition-colors z-50 shadow-lg"
        >
          {isSidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-20 bg-[#0A0A11] border-b border-[#2A2A38] px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" placeholder="Search settings, transactions, or help..." 
                className="w-full bg-[#12121D] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] transition-colors text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">System Online</span>
            </div>
            <button className="text-gray-400 hover:text-white relative">
               <Bell size={20} />
            </button>
            <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-[#4812B5] text-[#A67CFF] text-xs font-bold px-4 py-2 rounded-lg transition-colors">
              Support Hub
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 lg:p-8 max-w-[1400px] w-full mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Account Security Settings</h1>
            <p className="text-sm text-gray-400">Manage your password, authentication methods, and security preferences.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6 lg:space-y-8">
              
              {/* Password Security */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-6">
                  <Key size={18} className="text-[#A67CFF]" /> Password Security
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CURRENT PASSWORD</label>
                    <input type="password" placeholder="••••••••••••" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">NEW PASSWORD</label>
                    <input type="password" placeholder="••••••••••••" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CONFIRM NEW PASSWORD</label>
                  <input type="password" placeholder="••••••••••••" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                </div>
                <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg">
                  Update Password
                </button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck size={18} className="text-blue-500" /> Two-Factor Authentication (2FA)
                  </h3>
                  <ToggleSwitch active={twoFactorEnabled} onToggle={() => setTwoFactorEnabled(!twoFactorEnabled)} />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Secure your account with an additional layer of security. Every time you log in, we'll ask for a unique code generated by your mobile app.
                </p>
                
                <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#12121D] rounded-lg flex items-center justify-center text-gray-400">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Authenticator App</div>
                      <div className="text-[10px] font-medium text-emerald-500">Google Authenticator Active</div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Manage</button>
                </div>
              </div>

              {/* Social Account Linking */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-6">
                  <Globe size={18} className="text-gray-400" /> Social Account Linking
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-bold">G</div>
                      <span className="text-sm font-medium text-white">Google Account</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">CONNECTED</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">f</div>
                      <span className="text-sm font-medium text-white">Facebook</span>
                    </div>
                    <button className="text-[10px] font-bold text-[#A67CFF] hover:text-white uppercase tracking-wider transition-colors">LINK ACCOUNT</button>
                  </div>

                  <div className="flex items-center justify-between bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white"><Mail size={16} /></div>
                      <span className="text-sm font-medium text-white">Outlook / Office 365</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">CONNECTED</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 lg:space-y-8">
              
              {/* Notification Preferences */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-6">
                  <Bell size={18} className="text-[#A67CFF]" /> Notification Preferences
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">Security Alerts</div>
                      <div className="text-[10px] text-gray-500">Critical account safety updates</div>
                    </div>
                    <ToggleSwitch active={alertsEnabled} onToggle={() => setAlertsEnabled(!alertsEnabled)} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">Escrow Updates</div>
                      <div className="text-[10px] text-gray-500">Status changes on your funds</div>
                    </div>
                    <ToggleSwitch active={escrowUpdatesEnabled} onToggle={() => setEscrowUpdatesEnabled(!escrowUpdatesEnabled)} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">New Messages</div>
                      <div className="text-[10px] text-gray-500">Buyer/Seller direct chat alerts</div>
                    </div>
                    <ToggleSwitch active={messagesEnabled} onToggle={() => setMessagesEnabled(!messagesEnabled)} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">Promotional Offers</div>
                      <div className="text-[10px] text-gray-500">Discounts and marketing info</div>
                    </div>
                    <ToggleSwitch active={promosEnabled} onToggle={() => setPromosEnabled(!promosEnabled)} />
                  </div>
                </div>
              </div>

              {/* Active Sessions */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-6">
                  <Monitor size={18} className="text-blue-500" /> Active Sessions
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1E1E2C] rounded-lg flex items-center justify-center text-blue-400">
                        <Monitor size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          Windows PC • Chrome 
                          <span className="bg-[#4812B5] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">CURRENT</span>
                        </div>
                        <div className="text-[10px] text-gray-500">London, UK • 192.168.1.45</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1E1E2C] rounded-lg flex items-center justify-center text-gray-400">
                        <Smartphone size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-300">
                          iPhone 14 Pro • Safari 
                        </div>
                        <div className="text-[10px] text-gray-500">London, UK • 2 days ago</div>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-white p-2 transition-colors">
                      <LogOut size={16} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-[#1E1E2C] border border-[#2A2A38] hover:border-gray-500 text-gray-300 text-xs font-bold py-3 rounded-lg transition-colors uppercase tracking-wider">
                  LOG OUT ALL OTHER SESSIONS
                </button>
              </div>

            </div>
          </div>
        </main>

        {/* Profile Footer */}
        <div className="mt-auto px-4 lg:px-8 py-6 border-t border-[#2A2A38] bg-[#0A0A11] flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 bg-[#12121D] border border-[#2A2A38] px-4 py-1.5 rounded-full">
            <ShieldCheck size={14} className="text-[#4812B5]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ESCROW PROTECTED INFRASTRUCTURE</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">GDPR Compliance</a>
          </div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-2">
            © 2024 XENTRA365 DIGITAL MARKETPLACE. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityPage;