import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, ChevronLeft, ChevronRight, LogOut, ChevronDown, Send
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerMessages = () => {
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
           <Link to="/seller/settings" title="Profile & Settings" className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'px-3'} py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1E1E2C] transition-colors mb-2`}>
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
            <input type="text" placeholder="Search messages..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-[#A67CFF] hover:text-white relative"><MessageSquare size={20} /></button>
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

        <main className="flex-1 flex overflow-hidden">
           {/* Chat List */}
           <div className="w-80 border-r border-[#2A2A38] flex flex-col bg-[#12121D] shrink-0">
             <div className="p-4 border-b border-[#2A2A38]">
               <h3 className="font-bold text-white">Buyer Negotiations</h3>
             </div>
             <div className="flex-1 overflow-y-auto no-scrollbar">
               <div className="p-4 border-b border-[#2A2A38] bg-[#1E1E2C] cursor-pointer">
                 <div className="flex justify-between items-center mb-1">
                   <h4 className="font-bold text-sm text-white">AlphaCore Solutions</h4>
                   <span className="text-[10px] text-gray-500">10m ago</span>
                 </div>
                 <p className="text-xs text-blue-400 line-clamp-1">Offer proposed: $1,150.00</p>
               </div>
               <div className="p-4 border-b border-[#2A2A38] hover:bg-[#1E1E2C] cursor-pointer transition-colors">
                 <div className="flex justify-between items-center mb-1">
                   <h4 className="font-bold text-sm text-gray-300">DesignHaus NYC</h4>
                   <span className="text-[10px] text-gray-500">2h ago</span>
                 </div>
                 <p className="text-xs text-gray-500 line-clamp-1">Can you confirm tracking details?</p>
               </div>
             </div>
           </div>

           {/* Active Chat */}
           <div className="flex-1 flex flex-col bg-[#0A0A11] min-w-0">
             <div className="h-16 border-b border-[#2A2A38] flex items-center justify-between px-6 bg-[#12121D] shrink-0">
               <div className="font-bold text-white">AlphaCore Solutions</div>
               <span className="text-xs font-bold text-[#A67CFF] bg-[#2A1854] px-3 py-1 rounded-full">Ref: Server Node</span>
             </div>
             
             <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex flex-col gap-1 items-start">
                  <div className="bg-[#1E1E2C] border border-[#2A2A38] text-sm text-gray-300 p-4 rounded-2xl rounded-tl-sm max-w-md">
                    Hello, we are interested in bulk purchasing the Server Nodes. We can offer $1,150 per unit for 10 units. Let me know.
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium ml-1">10:42 AM</span>
                </div>
             </div>

             <div className="p-4 bg-[#12121D] border-t border-[#2A2A38] shrink-0">
               <div className="relative">
                 <input type="text" placeholder="Type your response or counter-offer..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#4812B5] rounded-lg flex items-center justify-center text-white hover:bg-[#3A0CA3] transition-colors"><Send size={14}/></button>
               </div>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
};

export default SellerMessages;