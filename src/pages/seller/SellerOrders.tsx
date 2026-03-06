import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, Bell, ChevronLeft, ChevronRight, LogOut, Package, Truck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerOrders = () => {
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
            <input type="text" placeholder="Search Order IDs..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
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
            <h1 className="text-3xl font-bold text-white mb-2">Orders & Fulfillment</h1>
            <p className="text-gray-400 text-sm mb-8">Process pending orders and update shipping statuses to satisfy escrow requirements.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl border-l-4 border-l-blue-500">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">PENDING SHIPMENT</div>
                <div className="text-3xl font-bold text-white">12</div>
              </div>
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl border-l-4 border-l-orange-500">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">IN TRANSIT</div>
                <div className="text-3xl font-bold text-white">8</div>
              </div>
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl border-l-4 border-l-emerald-500">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">DELIVERED (PENDING BUYER)</div>
                <div className="text-3xl font-bold text-white">3</div>
              </div>
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl border-l-4 border-l-[#4812B5]">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">FUNDS RELEASED TODAY</div>
                <div className="text-3xl font-bold text-white">5</div>
              </div>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full text-left text-sm border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider bg-[#1E1E2C]/50">
                    <th className="p-4 font-bold">ORDER ID / DATE</th>
                    <th className="p-4 font-bold">PRODUCT</th>
                    <th className="p-4 font-bold">BUYER</th>
                    <th className="p-4 font-bold">TOTAL</th>
                    <th className="p-4 font-bold">FULFILLMENT</th>
                    <th className="p-4 font-bold text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((item) => (
                    <tr key={item} className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                      <td className="p-4">
                        <div className="font-bold text-[#A67CFF]">#XN-9023{item}</div>
                        <div className="text-[10px] text-gray-500 mt-1">Oct 24, 2026</div>
                      </td>
                      <td className="p-4 text-white font-medium">X-Pro Server Node V2</td>
                      <td className="p-4 text-gray-400">Alex_Quantum</td>
                      <td className="p-4 font-bold text-white">$1,299.00</td>
                      <td className="p-4">
                        {item === 1 ? <span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 w-max"><Package size={10}/> ACTION REQUIRED</span> : 
                         item === 2 ? <span className="bg-orange-500/10 text-orange-400 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 w-max"><Truck size={10}/> SHIPPED</span> :
                         <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 w-max"><ShieldCheck size={10}/> COMPLETED</span>}
                      </td>
                      <td className="p-4 text-center">
                        {item === 1 ? (
                          <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors">ADD TRACKING</button>
                        ) : (
                          <button className="text-gray-400 hover:text-white text-[10px] font-bold border border-[#2A2A38] px-3 py-1.5 rounded transition-colors">VIEW DETAILS</button>
                        )}
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

export default SellerOrders;