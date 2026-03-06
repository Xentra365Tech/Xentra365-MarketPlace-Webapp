import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, Bell, TrendingUp, Calendar, Eye, Edit2, ChevronLeft, ChevronRight, ChevronDown, LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerDashboard = () => {
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
              <button className="text-gray-400 hover:text-white relative"><Bell size={20} /><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span></button>
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

        {/* SCROLLABLE DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-[1400px] mx-auto space-y-6">
            
            {/* TOP STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">TODAY'S SALES</div>
                  <TrendingUp size={16} className="text-[#A67CFF]" />
                </div>
                <div className="text-3xl font-black text-white mb-1">$4,820.50</div>
                <div className="text-[10px] font-bold text-emerald-400">+12.5% from yesterday</div>
              </div>

              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">WEEKLY SALES</div>
                  <Calendar size={16} className="text-blue-400" />
                </div>
                <div className="text-3xl font-black text-white mb-1">$28,490.00</div>
                <div className="text-[10px] font-bold text-emerald-400">+5.2% from last week</div>
              </div>

              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#A67CFF]" /> ESCROW BALANCE
                  </div>
                  <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors shadow-lg">WITHDRAW FUNDS</button>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">FUNDS HELD</div>
                    <div className="text-xl font-bold text-white">$12,450.00</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">FUNDS RELEASED</div>
                    <div className="text-xl font-bold text-[#A67CFF]">$45,200.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
              
              {/* LEFT COLUMN: Orders & Listings */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Active Orders List */}
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <ShoppingCart size={16} className="text-blue-500"/> ACTIVE ORDERS & ESCROW
                    </h3>
                    <Link to="/seller/orders" className="text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-wider">VIEW ALL ORDERS</Link>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                      <thead>
                        <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider">
                          <th className="pb-3 font-bold">ORDER ID</th>
                          <th className="pb-3 font-bold">BUYER</th>
                          <th className="pb-3 font-bold">AMOUNT</th>
                          <th className="pb-3 font-bold">ESCROW STATUS</th>
                          <th className="pb-3 font-bold">ORDER STATUS</th>
                          <th className="pb-3 font-bold text-center">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 font-bold text-[#A67CFF]">#XN-9421</td>
                          <td className="py-4 text-gray-300">James Wilson</td>
                          <td className="py-4 font-bold text-white">$1,299.00</td>
                          <td className="py-4"><span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400"><ShieldCheck size={12}/> PAYMENT IN ESCROW</span></td>
                          <td className="py-4"><span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-2 py-1 rounded">PROCESSING</span></td>
                          <td className="py-4 text-center text-gray-500 group-hover:text-white cursor-pointer"><Eye size={16} className="mx-auto"/></td>
                        </tr>
                        <tr className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 font-bold text-[#A67CFF]">#XN-9420</td>
                          <td className="py-4 text-gray-300">Sarah Jenkins</td>
                          <td className="py-4 font-bold text-white">$890.00</td>
                          <td className="py-4"><span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400"><ShieldCheck size={12}/> PAYMENT IN ESCROW</span></td>
                          <td className="py-4"><span className="bg-orange-500/10 text-orange-400 text-[9px] font-bold px-2 py-1 rounded">SHIPPED</span></td>
                          <td className="py-4 text-center text-gray-500 group-hover:text-white cursor-pointer"><Eye size={16} className="mx-auto"/></td>
                        </tr>
                        <tr className="hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 font-bold text-[#A67CFF]">#XN-9419</td>
                          <td className="py-4 text-gray-300">Michael Chen</td>
                          <td className="py-4 font-bold text-white">$2,100.00</td>
                          <td className="py-4"><span className="flex items-center gap-1.5 text-[10px] font-bold text-blue-400"><ShieldCheck size={12}/> RELEASED TO WALLET</span></td>
                          <td className="py-4"><span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-2 py-1 rounded">DELIVERED</span></td>
                          <td className="py-4 text-center text-gray-500 group-hover:text-white cursor-pointer"><Eye size={16} className="mx-auto"/></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Active Product Listings Grid */}
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <LayoutDashboard size={16} className="text-[#A67CFF]"/> ACTIVE PRODUCT LISTINGS
                    </h3>
                    <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:bg-[#2A2A38] text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors uppercase tracking-wider">
                      ADD LISTING
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Item 1 */}
                    <div className="bg-[#1E1E2C] rounded-xl overflow-hidden border border-transparent hover:border-[#4812B5] transition-colors group relative cursor-pointer flex flex-col">
                      <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow z-10 uppercase tracking-wider">IN STOCK: 14</div>
                      <div className="aspect-square bg-[#12121D] p-4 flex items-center justify-center shrink-0">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400" alt="Server Node" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="text-[11px] font-bold text-white mb-2 leading-tight">X-Pro Server Node V2</h4>
                        <div className="mt-auto flex justify-between items-end">
                           <span className="text-sm font-bold text-white">$1,299</span>
                           <div className="w-6 h-6 rounded-full bg-[#12121D] flex items-center justify-center text-gray-400 group-hover:text-white"><Edit2 size={10}/></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-[#1E1E2C] rounded-xl overflow-hidden border border-transparent hover:border-[#4812B5] transition-colors group relative cursor-pointer flex flex-col">
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow z-10 uppercase tracking-wider">LOW STOCK: 2</div>
                      <div className="aspect-square bg-teal-900/30 p-4 flex items-center justify-center shrink-0">
                        <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          <ShieldCheck size={24} className="text-teal-800"/>
                        </div>
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="text-[11px] font-bold text-white mb-2 leading-tight">Titan Security Key</h4>
                        <div className="mt-auto flex justify-between items-end">
                           <span className="text-sm font-bold text-white">$145</span>
                           <div className="w-6 h-6 rounded-full bg-[#12121D] flex items-center justify-center text-gray-400 group-hover:text-white"><Edit2 size={10}/></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="bg-[#1E1E2C] rounded-xl overflow-hidden border border-transparent hover:border-[#4812B5] transition-colors group relative cursor-pointer flex flex-col">
                      <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow z-10 uppercase tracking-wider">IN STOCK: 42</div>
                      <div className="aspect-square bg-[#12121D] overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400" alt="AI Core" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="text-[11px] font-bold text-white mb-2 leading-tight">Neural Hub Core</h4>
                        <div className="mt-auto flex justify-between items-end">
                           <span className="text-sm font-bold text-white">$890</span>
                           <div className="w-6 h-6 rounded-full bg-[#12121D] flex items-center justify-center text-gray-400 group-hover:text-white"><Edit2 size={10}/></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div className="bg-[#1E1E2C] rounded-xl overflow-hidden border border-transparent hover:border-[#4812B5] transition-colors group relative cursor-pointer flex flex-col">
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow z-10 uppercase tracking-wider">OUT OF STOCK</div>
                      <div className="aspect-square bg-orange-50 shrink-0 p-4">
                        <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400" alt="Headphones" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="text-[11px] font-bold text-white mb-2 leading-tight">Sonic Pro X1</h4>
                        <div className="mt-auto flex justify-between items-end">
                           <span className="text-sm font-bold text-white">$299</span>
                           <div className="w-6 h-6 rounded-full bg-[#12121D] flex items-center justify-center text-gray-400 group-hover:text-white"><Edit2 size={10}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Performance & Offers */}
              <div className="flex flex-col gap-6">
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl">
                  <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">SELLER PERFORMANCE</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-blue-500"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} className="text-blue-500/30" fill="currentColor"/></div>
                    <span className="text-xl font-bold text-white">4.8</span>
                  </div>
                  <div className="bg-[#1E1E2C] rounded-xl p-4 border border-[#2A2A38]">
                    <p className="text-xs text-gray-300 italic leading-relaxed mb-3">
                      "Fast delivery and the escrow process made me feel very secure about the large purchase. Highly recommended."
                    </p>
                    <div className="text-[10px] font-bold text-blue-400">Recent Feedback — @cryptonerd</div>
                  </div>
                </div>

                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[10px] font-bold text-white uppercase tracking-wider">BUYER OFFERS</h3>
                    <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">3 NEW</span>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="pb-4 border-b border-[#2A2A38]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">AS</div>
                        <div>
                          <div className="text-xs font-bold text-white">AlphaCore Solutions</div>
                          <div className="text-[10px] text-gray-500">Proposed for: Server Node</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pl-11">
                        <span className="text-sm font-bold text-blue-400">$1,150.00</span>
                        <span className="text-[9px] font-bold text-orange-400 border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 rounded">PENDING RESPONSE</span>
                      </div>
                    </div>

                    <div className="pb-4 border-b border-[#2A2A38]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">DH</div>
                        <div>
                          <div className="text-xs font-bold text-white">DesignHaus NYC</div>
                          <div className="text-[10px] text-gray-500">Proposed for: Sonic Pro X1</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pl-11">
                        <span className="text-sm font-bold text-blue-400">$240.00</span>
                        <span className="text-[9px] font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded">NEW OFFER</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs shrink-0">KS</div>
                        <div>
                          <div className="text-xs font-bold text-white">Kevin S.</div>
                          <div className="text-[10px] text-gray-500">Proposed for: Titan Key</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pl-11">
                        <span className="text-sm font-bold text-blue-400">$120.00</span>
                        <span className="text-[9px] font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded">NEW OFFER</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-[#1E1E2C] hover:bg-[#2A2A38] text-gray-300 text-[10px] font-bold py-3 rounded-lg transition-colors uppercase tracking-wider">
                    MANAGE ALL NEGOTIATIONS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;