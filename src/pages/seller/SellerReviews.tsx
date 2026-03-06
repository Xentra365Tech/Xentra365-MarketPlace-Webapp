import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, ShieldCheck, 
  Star, HelpCircle, MessageSquare, BarChart2, Settings, 
  Search, ChevronLeft, ChevronRight, ThumbsUp, ChevronDown, LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SellerReviews = () => {
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

        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -right-3 top-10 w-6 h-6 bg-[#4812B5] border-2 border-[#0A0A11] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50"
        >
          {isSidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-20 bg-[#12121D] border-b border-[#2A2A38] px-8 flex items-center justify-between shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search reviews, products, or buyers..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] text-white transition-colors" />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <button className="text-[#A67CFF] flex flex-col items-center gap-1 hover:text-white"><LayoutDashboard size={20} /><span className="text-[8px] font-bold">PORTAL</span></button>
              <button className="text-gray-400 flex flex-col items-center gap-1 hover:text-white"><MessageSquare size={20} /><span className="text-[8px] font-bold">MESSAGES</span></button>
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

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Star size={28} className="text-blue-500" fill="currentColor" /> Reviews & Ratings
              </h1>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              
              {/* LEFT COLUMN: Stats & Guidelines */}
              <div className="space-y-6">
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-8 shadow-xl">
                  <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-6">PERFORMANCE SNAPSHOT</h3>
                  <div className="flex items-end gap-4 mb-8">
                    <span className="text-6xl font-black text-[#4812B5] leading-none">4.9</span>
                    <div className="pb-1">
                      <div className="flex text-blue-500 mb-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                      <div className="text-xs font-medium text-gray-400">Based on 1,248 reviews</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <span className="w-12 text-white">5 Star</span>
                      <div className="flex-1 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden"><div className="h-full bg-[#4812B5] w-[92%]"></div></div>
                      <span className="w-8 text-right">92%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <span className="w-12 text-white">4 Star</span>
                      <div className="flex-1 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden"><div className="h-full bg-[#2A2A38] w-[6%]"></div></div>
                      <span className="w-8 text-right">6%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <span className="w-12 text-white">3 Star</span>
                      <div className="flex-1 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden"><div className="h-full bg-[#2A2A38] w-[1%]"></div></div>
                      <span className="w-8 text-right">1%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <span className="w-12 text-white">2 Star</span>
                      <div className="flex-1 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden"><div className="h-full bg-[#2A2A38] w-[0%]"></div></div>
                      <span className="w-8 text-right">&lt;1%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <span className="w-12 text-white">1 Star</span>
                      <div className="flex-1 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden"><div className="h-full bg-[#2A2A38] w-[0%]"></div></div>
                      <span className="w-8 text-right">&lt;1%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-8 shadow-xl">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-6">
                    <HelpCircle size={18} className="text-blue-400" /> RESPONSE GUIDELINES
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck size={10}/></div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1">Speed Matters</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed">Respond within 12 hours to maintain "Fast Responder" status.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck size={10}/></div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1">Stay Professional</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed">Keep tone neutral, even with negative feedback. Focus on resolution.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#A67CFF]/20 text-[#A67CFF] flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck size={10}/></div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1">Escrow Disputes</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed">Reference transaction IDs for issues involving held funds.</p>
                      </div>
                    </li>
                  </ul>
                  <button className="w-full mt-6 bg-[#1E1E2C] hover:bg-[#2A2A38] border border-[#2A2A38] text-white text-[10px] font-bold py-3 rounded-lg transition-colors uppercase tracking-wider">
                    VIEW ALL TIPS
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Review Feed */}
              <div className="xl:col-span-2 space-y-6">
                
                <div className="flex items-center justify-between bg-[#12121D] border border-[#2A2A38] rounded-xl p-2 shadow-xl">
                  <div className="flex gap-2">
                    <button className="bg-[#4812B5] text-white text-[10px] font-bold px-4 py-2 rounded-lg">ALL REVIEWS</button>
                    <button className="text-gray-400 hover:text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors">WITH TEXT</button>
                    <button className="text-gray-400 hover:text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors">CRITICAL</button>
                    <button className="text-gray-400 hover:text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1 bg-[#1E1E2C]">Last 30 Days <ChevronDown size={12}/></button>
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 px-4 flex items-center gap-2">
                    SORT: <span className="text-white flex items-center gap-1 cursor-pointer">Newest First <ChevronDown size={12}/></span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Review 1 */}
                  <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 overflow-hidden"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="Avatar"/></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-white text-base">Marcus Chen</h4>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">2 HOURS AGO</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex text-blue-500 mb-1"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                          <span className="text-[9px] font-bold text-blue-400 flex items-center gap-1 bg-blue-500/10 px-2 py-0.5 rounded"><ShieldCheck size={10}/> ESCROW PROTECTED</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Exceptional quality on the Node V2 units. Delivery was significantly faster than quoted and the technical documentation provided by the seller was a huge help for our integration. Will be sourcing from them again.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-[#1E1E2C] border border-[#2A2A38] p-2 rounded-xl pr-6">
                           <div className="w-10 h-10 bg-[#12121D] rounded-lg shrink-0 overflow-hidden"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&q=80" alt="Product" className="w-full h-full object-cover"/></div>
                           <div>
                             <div className="text-[8px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">ITEM PURCHASED</div>
                             <div className="text-xs font-bold text-white">X-Pro Server Node V2</div>
                           </div>
                        </div>
                        <button className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg">RESPOND</button>
                      </div>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 overflow-hidden"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Avatar"/></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-white text-base">Sarah Jenkins</h4>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">12 HOURS AGO</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex text-blue-500 mb-1"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Solid product. The casing had a very minor scuff mark, but functionality is perfect. Seller was responsive when I asked about the warranty registration process.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-[#1E1E2C] border border-[#2A2A38] p-2 rounded-xl pr-6">
                           <div className="w-10 h-10 bg-teal-900/30 rounded-lg shrink-0 flex items-center justify-center"><ShieldCheck size={16} className="text-teal-500"/></div>
                           <div>
                             <div className="text-[8px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">ITEM PURCHASED</div>
                             <div className="text-xs font-bold text-white">Titan Security Key</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="text-xs font-bold text-emerald-500 flex items-center gap-1"><ThumbsUp size={12}/> Responded</span>
                           <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:bg-[#2A2A38] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors">EDIT</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-[#6324E2] text-white text-xs font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                      LOAD MORE REVIEWS
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerReviews;