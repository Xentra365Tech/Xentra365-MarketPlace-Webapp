import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, 
  Search, LogOut, Menu, X, ChevronLeft, ChevronRight,
  Package, Tag, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NotificationsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const notifications = [
    { id: 1, type: 'security', title: 'New login detected', message: 'We noticed a new login to your account from Chrome on Windows 11 in London, UK.', time: '10 minutes ago', unread: true, icon: <AlertTriangle size={18}/>, color: 'text-orange-500 bg-orange-500/10' },
    { id: 2, type: 'order', title: 'Order Shipped: Cloud Infrastructure B', message: 'Your escrowed order #XN-48201 has been shipped by the vendor. Track your deployment progress.', time: '2 hours ago', unread: true, icon: <Package size={18}/>, color: 'text-blue-500 bg-blue-500/10' },
    { id: 3, type: 'promo', title: 'Flash Sale: 20% off Enterprise Gear', message: 'Special weekend promotion on all enterprise networking gear. Valid for the next 48 hours.', time: 'Yesterday', unread: false, icon: <Tag size={18}/>, color: 'text-[#A67CFF] bg-[#2A1854]' },
    { id: 4, type: 'escrow', title: 'Escrow Released: Order #771-442', message: 'The escrow funds for your recent hardware return have been fully released to your wallet.', time: 'Oct 20, 2023', unread: false, icon: <CheckCircle2 size={18}/>, color: 'text-emerald-500 bg-emerald-500/10' },
    { id: 5, type: 'system', title: 'Terms of Service Update', message: 'We have updated our Escrow Protocol terms to improve buyer protection. Please review.', time: 'Oct 15, 2023', unread: false, icon: <ShieldCheck size={18}/>, color: 'text-gray-400 bg-[#1E1E2C]' },
  ];

  return (
    <div className="h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* --- MOBILE OVERLAY --- */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)} />
      )}

      {/* --- PURPLE SIDEBAR --- */}
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
                type="text" placeholder="Search notifications..." 
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] transition-colors text-white placeholder-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">System Online</span>
            </div>
            <button className="text-white relative"><Bell size={20} /><span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/></div>
          </div>
        </header>

        {/* --- NOTIFICATIONS BODY --- */}
        <main className="flex-1 p-4 lg:p-8 max-w-[1200px] w-full mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">Notifications</h1>
              <p className="text-sm text-gray-400">Stay updated on your account activity and marketplace alerts.</p>
            </div>
            <button className="text-sm font-bold text-[#A67CFF] hover:text-white transition-colors bg-[#1E1E2C] border border-[#2A2A38] px-4 py-2 rounded-lg">
              Mark all as read
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 border-b border-[#2A2A38] pb-4 mb-6 overflow-x-auto whitespace-nowrap no-scrollbar">
            {['All', 'Unread', 'Orders', 'Security', 'Promotions'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === filter ? 'bg-[#6324E2] text-white' : 'text-gray-400 hover:text-white hover:bg-[#1E1E2C]'}`}
              >
                {filter} {filter === 'Unread' && <span className="ml-1 bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px]">2</span>}
              </button>
            ))}
          </div>

          {/* Notification List */}
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl shadow-xl flex flex-col">
            {notifications.map((notif, index) => (
              <div key={notif.id} className={`p-4 sm:p-6 flex gap-4 sm:gap-6 hover:bg-[#1E1E2C] transition-colors cursor-pointer ${index !== notifications.length - 1 ? 'border-b border-[#2A2A38]' : ''} ${notif.unread ? 'bg-[#1E1E2C]/50' : ''}`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shrink-0 flex items-center justify-center ${notif.color}`}>
                  {notif.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className={`text-sm sm:text-base font-bold ${notif.unread ? 'text-white' : 'text-gray-300'}`}>{notif.title}</h3>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{notif.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl">{notif.message}</p>
                </div>
                {notif.unread && (
                  <div className="shrink-0 flex items-center justify-center pl-2">
                    <div className="w-2.5 h-2.5 bg-[#6324E2] rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default NotificationsPage;