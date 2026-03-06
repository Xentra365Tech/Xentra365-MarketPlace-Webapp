import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, Bell, Plus, Building, Zap, AlertCircle, ChevronRight, ChevronDown, ChevronLeft, LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerAnalytics = () => {
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
      
      {/* COLLAPSIBLE SELLER SIDEBAR */}
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

        {/* COLLAPSE TOGGLE BUTTON */}
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -right-3 top-10 w-6 h-6 bg-[#4812B5] border-2 border-[#0A0A11] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50"
        >
          {isSidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* HEADER */}
        <header className="h-20 bg-[#12121D] border-b border-[#2A2A38] px-8 flex items-center justify-between shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search orders, listings, or customers..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white"><MessageSquare size={20} /></button>
              <button className="text-gray-400 hover:text-white relative"><Bell size={20} /><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full"></span></button>
            </div>
            
            <div className="h-8 w-px bg-[#2A2A38] hidden sm:block"></div>
            
            {/* HOVER DROPDOWN FOR PROFILE & LOGOUT */}
            <div className="relative group z-50">
              <div className="flex items-center gap-3 cursor-pointer pl-2 sm:pl-4 py-2">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ELITE SELLER</div>
                  <div className="text-sm font-bold text-white leading-none mt-1 flex items-center gap-1">
                    Vertex Digital <ChevronDown size={12}/>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full object-cover border border-[#2A2A38] group-hover:border-[#6324E2] transition-colors"
                />
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

        {/* DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto p-8">
           
           <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
             <span>Dashboard</span> <ChevronRight size={10}/> <span className="text-[#A67CFF]">Performance Analytics</span>
           </div>
           
           <div className="flex justify-between items-end mb-8">
             <div>
               <h1 className="text-3xl font-bold text-white mb-1">Performance Analytics</h1>
               <p className="text-gray-400 text-sm">Welcome back, Vertex. Your store performance is up 12% this week.</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl px-4 py-2 text-right">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">TOTAL BALANCE</div>
                  <div className="text-lg font-bold text-white leading-none mt-1">$14,290.45</div>
                </div>
                <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-colors uppercase tracking-wider">
                  QUICK WITHDRAW
                </button>
             </div>
           </div>

           <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">QUICK ACCESS SHORTCUTS</div>
           
           <div className="grid grid-cols-4 gap-6 mb-8">
             <div className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-2xl p-6 transition-colors cursor-pointer group relative overflow-hidden">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity"><Plus size={100}/></div>
                <div className="w-10 h-10 rounded-xl bg-[#1E1E2C] text-blue-500 flex items-center justify-center mb-4"><Plus size={20}/></div>
                <h3 className="text-white font-bold text-base mb-1">Create New Listing</h3>
                <p className="text-[10px] text-gray-400">Marketplace & Local trade</p>
             </div>
             <div className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-2xl p-6 transition-colors cursor-pointer group relative overflow-hidden">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity"><Building size={100}/></div>
                <div className="w-10 h-10 rounded-xl bg-[#1E1E2C] text-emerald-500 flex items-center justify-center mb-4"><Building size={20}/></div>
                <h3 className="text-white font-bold text-base mb-1">Withdraw Funds</h3>
                <p className="text-[10px] text-gray-400">Instant escrow payouts</p>
             </div>
             <div className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-2xl p-6 transition-colors cursor-pointer group relative overflow-hidden">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity"><Zap size={100}/></div>
                <div className="w-10 h-10 rounded-xl bg-[#1E1E2C] text-orange-500 flex items-center justify-center mb-4"><Zap size={20}/></div>
                <h3 className="text-white font-bold text-base mb-1">Boost Listing</h3>
                <p className="text-[10px] text-gray-400">Increase local visibility</p>
             </div>
             <div className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-2xl p-6 transition-colors cursor-pointer group relative overflow-hidden">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity"><AlertCircle size={100}/></div>
                <div className="w-10 h-10 rounded-xl bg-[#1E1E2C] text-[#A67CFF] flex items-center justify-center mb-4"><AlertCircle size={20}/></div>
                <h3 className="text-white font-bold text-base mb-1">Open Dispute</h3>
                <p className="text-[10px] text-gray-400">Human resolution center</p>
             </div>
           </div>

           <div className="grid grid-cols-3 gap-6">
              
              <div className="col-span-2 bg-[#12121D] border border-[#2A2A38] rounded-2xl p-8 flex flex-col shadow-xl">
                 <div className="flex justify-between items-center mb-10">
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider">REVENUE PERFORMANCE</h3>
                   <div className="flex bg-[#1E1E2C] rounded-lg p-1">
                     <button className="px-4 py-1 rounded text-xs font-bold text-gray-400 hover:text-white">7D</button>
                     <button className="px-4 py-1 rounded bg-[#4812B5] text-white text-xs font-bold shadow">30D</button>
                   </div>
                 </div>
                 
                 <div className="flex-1 flex items-end justify-between px-4 pb-2 border-b border-[#2A2A38] gap-4 h-64">
                   <div className="w-full bg-[#1E1E2C] rounded-t-lg h-[20%] relative group hover:bg-[#2A2A38] transition-colors cursor-pointer"></div>
                   <div className="w-full bg-[#1E1E2C] rounded-t-lg h-[40%] relative group hover:bg-[#2A2A38] transition-colors cursor-pointer"></div>
                   <div className="w-full bg-gradient-to-t from-[#3A0CA3] to-[#6324E2] rounded-t-lg h-[90%] relative shadow-[0_0_20px_rgba(99,36,226,0.3)] group cursor-pointer">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#A67CFF] text-black text-[10px] font-bold px-2 py-1 rounded">Today</div>
                      <div className="absolute top-1/2 -left-6 w-4 h-[2px] bg-[#A67CFF]"></div>
                   </div>
                   <div className="w-full bg-[#1E1E2C] rounded-t-lg h-[35%] relative group hover:bg-[#2A2A38] transition-colors cursor-pointer"></div>
                   <div className="w-full bg-[#1E1E2C] rounded-t-lg h-[50%] relative group hover:bg-[#2A2A38] transition-colors cursor-pointer"></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-gray-600 uppercase tracking-wider pt-4 px-4">
                   <span>Week 01</span><span>Week 02</span><span>Week 03</span><span>Week 04</span>
                 </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl flex-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">RECENT ORDERS</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#1E1E2C] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#12121D] flex items-center justify-center text-blue-400"><ShoppingBag size={14}/></div>
                        <div>
                          <div className="text-xs font-bold text-white mb-0.5">X-Pro Server Node V2</div>
                          <div className="text-[9px] text-gray-500">2 mins ago • $1,299</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#1E1E2C] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#12121D] flex items-center justify-center text-blue-400"><ShoppingBag size={14}/></div>
                        <div>
                          <div className="text-xs font-bold text-white mb-0.5">Titan Security Key</div>
                          <div className="text-[9px] text-gray-500">1 hour ago • $145</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#1E1E2C] rounded-xl opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#12121D] flex items-center justify-center text-gray-400"><ShoppingBag size={14}/></div>
                        <div>
                          <div className="text-xs font-bold text-white mb-0.5">Sonic Pro X1</div>
                          <div className="text-[9px] text-gray-500">3 hours ago • $299</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <button className="w-full mt-6 border border-[#2A2A38] text-gray-400 hover:text-white text-xs font-bold py-2.5 rounded-lg transition-colors uppercase tracking-wider">VIEW ALL ORDERS</button>
                </div>
                
                <div className="bg-[#4812B5] rounded-2xl p-6 relative overflow-hidden shadow-xl">
                  <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4"><ShieldCheck size={120}/></div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 relative z-10">ESCROW PROTECTED</h3>
                  <p className="text-xs text-purple-200 mb-4 relative z-10">98.4% of your transactions this month were completed without disputes.</p>
                  <div className="w-full h-1.5 bg-black/20 rounded-full relative z-10">
                     <div className="h-full w-[98.4%] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
           </div>

        </main>

      </div>
    </div>
  );
};

export default SellerAnalytics;