import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, Bell, ChevronLeft, ChevronRight, Plus, Edit2, Trash2, LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerListings = () => {
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
      
      {/* COLLAPSIBLE SIDEBAR WITH LOGOUT */}
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

        {/* LOGOUT BUTTON ADDED HERE */}
        <div className="p-4 border-t border-[#2A2A38] shrink-0 flex flex-col gap-2">
           <Link to="/seller/settings" title="Profile & Settings" className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'px-3'} py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1E1E2C] transition-colors`}>
             <Settings size={20} /> {!isSidebarCollapsed && <span>Profile & Settings</span>}
           </Link>
           <button onClick={handleLogout} title="Logout" className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'px-3'} py-2.5 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors w-full text-left`}>
             <LogOut size={20} /> {!isSidebarCollapsed && <span>Logout</span>}
           </button>
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
            <input type="text" placeholder="Search inventory..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white relative"><Bell size={20} /><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <div className="h-8 w-px bg-[#2A2A38]"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ELITE SELLER</div>
                <div className="text-sm font-bold text-white leading-none mt-1">Vertex Digital</div>
              </div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-[#2A2A38]"/>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Listings Management</h1>
                <p className="text-gray-400 text-sm">Control your inventory, update pricing, and manage stock levels.</p>
              </div>
              <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                <Plus size={18} /> ADD NEW PRODUCT
              </button>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 border-b border-[#2A2A38] flex gap-2">
                <button className="bg-[#4812B5] text-white text-xs font-bold px-4 py-2 rounded-lg">All (142)</button>
                <button className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">Active (130)</button>
                <button className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">Out of Stock (12)</button>
              </div>
              <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider bg-[#1E1E2C]/50">
                    <th className="p-4 font-bold">PRODUCT INFO</th>
                    <th className="p-4 font-bold">SKU</th>
                    <th className="p-4 font-bold">PRICE</th>
                    <th className="p-4 font-bold">STOCK</th>
                    <th className="p-4 font-bold">STATUS</th>
                    <th className="p-4 font-bold text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                      <td className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#0A0A11] border border-[#2A2A38] rounded-lg shrink-0"></div>
                        <div>
                          <div className="font-bold text-white">X-Pro Server Node V2</div>
                          <div className="text-[10px] text-gray-500">Enterprise Hardware</div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">XN-SRV-002</td>
                      <td className="p-4 font-bold text-white">$1,299.00</td>
                      <td className="p-4 text-gray-300">14 Units</td>
                      <td className="p-4"><span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">ACTIVE</span></td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-3 text-gray-500">
                          <button className="hover:text-white transition-colors"><Edit2 size={16} /></button>
                          <button className="hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerListings;