import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, Bell, ChevronLeft, ChevronRight, LogOut, ChevronDown, Store, CreditCard
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard Home', icon: <LayoutDashboard size={20} />, path: '/seller/dashboard' },
    { name: 'Listings Management', icon: <ShoppingBag size={20} />, path: '/seller/listings' },
    { name: 'Orders & Fulfillment', icon: <ShoppingCart size={20} />, path: '/seller/orders', badge: '12' },
    { name: 'Escrow & Payouts', icon: <ShieldCheck size={20} />, path: '/seller/escrow' },
  ];

  const opItems = [
    { name: 'Reviews', icon: <Star size={20} />, path: '/seller/reviews' },
    { name: 'Support & Disputes', icon: <HelpCircle size={20} />, path: '/seller/support' },
    { name: 'Messages', icon: <MessageSquare size={20} />, path: '/seller/messages', dot: true },
    { name: 'Analytics', icon: <BarChart2 size={20} />, path: '/seller/analytics' },
  ];

  return (
    <div className="h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* COLLAPSIBLE SIDEBAR */}
      <aside className={`bg-[#12121D] border-r border-[#2A2A38] flex flex-col shrink-0 transition-all duration-300 relative z-40 ${isSidebarCollapsed ? 'w-20' : 'w-[260px]'}`}>
        <div className={`h-20 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-6'} border-b border-[#2A2A38] shrink-0`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#4812B5] rounded-lg flex items-center justify-center font-bold text-lg shrink-0">X</div>
            {!isSidebarCollapsed && <span className="text-xl font-bold tracking-tight truncate">Xentra365</span>}
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8 no-scrollbar">
          <div>
            {!isSidebarCollapsed && <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">MAIN MENU</div>}
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} title={isSidebarCollapsed ? item.name : ''} className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between px-3'} py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-[#4812B5] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-[#1E1E2C]'}`}>
                  <div className="flex items-center gap-3">
                    <span className={`${location.pathname === item.path ? 'text-white' : 'text-gray-400'}`}>{item.icon}</span>
                    {!isSidebarCollapsed && <span>{item.name}</span>}
                  </div>
                  {!isSidebarCollapsed && item.badge && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {!isSidebarCollapsed && <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">OPERATIONS</div>}
            <div className="space-y-1">
              {opItems.map((item) => (
                <Link key={item.name} to={item.path} title={isSidebarCollapsed ? item.name : ''} className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between px-3'} py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-[#4812B5] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-[#1E1E2C]'}`}>
                  <div className="flex items-center gap-3">
                    <span className={`${location.pathname === item.path ? 'text-white' : 'text-gray-400'}`}>{item.icon}</span>
                    {!isSidebarCollapsed && <span>{item.name}</span>}
                  </div>
                  {!isSidebarCollapsed && item.dot && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#2A2A38] shrink-0">
           <Link to="/seller/settings" title="Profile & Settings" className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'px-3'} py-2.5 rounded-xl text-sm font-medium text-white bg-[#4812B5] shadow-lg mb-2`}>
             <Settings size={20} /> {!isSidebarCollapsed && <span>Profile & Settings</span>}
           </Link>
        </div>

        <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="absolute -right-3 top-10 w-6 h-6 bg-[#4812B5] border-2 border-[#0A0A11] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50">
          {isSidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-20 bg-[#12121D] border-b border-[#2A2A38] px-8 flex items-center justify-between shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search settings..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-gray-400 hover:text-white relative"><Bell size={20} /></button>
            <div className="h-8 w-px bg-[#2A2A38] hidden sm:block"></div>
            
            {/* HOVER DROPDOWN FOR LOGOUT */}
            <div className="relative group z-50">
              <div className="flex items-center gap-3 cursor-pointer pl-2 sm:pl-4 py-2">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ELITE SELLER</div>
                  <div className="text-sm font-bold text-white leading-none mt-1 flex items-center gap-1">Vertex Digital <ChevronDown size={12}/></div>
                </div>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-[#2A2A38] group-hover:border-[#6324E2] transition-colors"/>
              </div>
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#1E1E2C] border border-[#2A2A38] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2 transform translate-y-2">
                <Link to="/seller/settings" className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A38] rounded-lg transition-colors flex items-center gap-2 font-medium">
                  <Settings size={16} /> Store Settings
                </Link>
                <div className="h-px bg-[#2A2A38] my-1 w-full"></div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2 font-medium">
                  <LogOut size={16} /> Secure Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1000px] mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Store Settings</h1>
              <p className="text-gray-400 text-sm">Manage your brand, payout configurations, and security protocols.</p>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6 border-b border-[#2A2A38] pb-4">
                <Store size={20} className="text-[#A67CFF]" /> Store Profile
              </h3>
              <div className="flex items-center gap-6 mb-8">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80" alt="Logo" className="w-24 h-24 rounded-2xl object-cover border-2 border-[#2A2A38]"/>
                <div>
                  <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-[#4812B5] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors mb-2">Change Logo</button>
                  <p className="text-[10px] text-gray-500">Recommended size: 500x500px (JPG or PNG)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Store Name</label>
                  <input type="text" defaultValue="Vertex Digital" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Support Email</label>
                  <input type="email" defaultValue="support@vertexdigital.io" className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                </div>
              </div>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6 border-b border-[#2A2A38] pb-4">
                <CreditCard size={20} className="text-emerald-500" /> Payout Methods
              </h3>
              <div className="bg-[#1E1E2C] border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#12121D] rounded-lg flex items-center justify-center text-emerald-500"><ShieldCheck size={20}/></div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Wire Transfer (US Bank)</div>
                    <div className="text-[10px] text-gray-400">Ending in **** 8492</div>
                  </div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Default</span>
              </div>
              <button className="text-sm font-bold text-[#A67CFF] hover:text-white transition-colors">+ Add New Payout Method</button>
            </div>

            <div className="flex justify-end pt-4">
              <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-sm">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerSettings;