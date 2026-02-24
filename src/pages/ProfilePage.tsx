import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, 
  Search, LogOut, Menu, X, ChevronLeft, ChevronRight,
  ShieldAlert, Star, Plus, HelpCircle, Lock, Edit3,
  ShoppingCart, RotateCcw, FileText, ArrowDownLeft
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
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

  const transactions = [
    { id: '1', date: 'Oct 24, 2023', type: 'Product Purchase', desc: 'Order #882-901', amount: '-$1,240.00', status: 'In Escrow', icon: <ShoppingCart size={14}/>, iconBg: 'bg-[#2A1854] text-[#A67CFF]', statusDot: 'bg-orange-500' },
    { id: '2', date: 'Oct 22, 2023', type: 'Wallet Top-up', desc: 'Via Bank Transfer', amount: '+$5,000.00', status: 'Completed', amountColor: 'text-emerald-400', icon: <ArrowDownLeft size={14}/>, iconBg: 'bg-emerald-500/20 text-emerald-400', statusDot: 'bg-emerald-500' },
    { id: '3', date: 'Oct 20, 2023', type: 'Refund Issued', desc: 'Order #771-442', amount: '+$450.00', status: 'Completed', amountColor: 'text-emerald-400', icon: <RotateCcw size={14}/>, iconBg: 'bg-blue-500/20 text-blue-400', statusDot: 'bg-emerald-500' },
    { id: '4', date: 'Oct 18, 2023', type: 'Platform Fee', desc: 'Oct Maintenance', amount: '-$25.00', status: 'Completed', icon: <FileText size={14}/>, iconBg: 'bg-gray-500/20 text-gray-400', statusDot: 'bg-emerald-500' },
  ];

  return (
    <div className="h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* --- MOBILE OVERLAY --- */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsMobileSidebarOpen(false)} 
        />
      )}

      {/* --- PURPLE SIDEBAR (FULL HEIGHT) --- */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-full bg-[#3A0CA3] text-white transition-all duration-300 z-50 flex flex-col shadow-2xl shrink-0
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
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" placeholder="Search transactions..." 
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#4812B5] transition-colors text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">System Online</span>
            </div>
            <button className="text-gray-400 hover:text-white relative">
               <Bell size={20} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/>
            </div>
          </div>
        </header>

        {/* --- DASHBOARD BODY (Split Layout) --- */}
        <main className="flex-1 p-4 lg:p-8 max-w-[1400px] w-full mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            
            {/* --- LEFT COLUMN: USER PROFILE CARD --- */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
              
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl overflow-hidden shadow-xl">
                <div className="h-28 bg-gradient-to-br from-[#1A1438] to-[#2A1854]"></div>
                <div className="px-6 pb-6 flex flex-col items-center -mt-14">
                  <div className="w-24 h-24 rounded-full border-4 border-[#12121D] bg-[#1E1E2C] overflow-hidden mb-4 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Alex Sterling" className="w-full h-full object-cover"/>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    Alex Sterling <ShieldCheck size={16} className="text-blue-500" fill="currentColor"/>
                  </h2>
                  <p className="text-xs text-gray-500 mb-4">alex.sterling@xentra365.io</p>
                  
                  <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 mb-6">
                    <ShieldCheck size={12}/> KYC VERIFIED
                  </span>

                  <div className="w-full flex items-center justify-between border-t border-[#2A2A38] pt-6 mb-6">
                     <div>
                       <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TRUST SCORE</div>
                       <div className="flex items-center gap-2">
                         <span className="text-2xl font-black text-white">4.9<span className="text-sm text-gray-500 font-medium">/5.0</span></span>
                       </div>
                     </div>
                     <div className="flex text-yellow-500">
                        <Star size={14} fill="currentColor"/>
                        <Star size={14} fill="currentColor"/>
                        <Star size={14} fill="currentColor"/>
                        <Star size={14} fill="currentColor"/>
                        <Star size={14} fill="currentColor"/>
                     </div>
                  </div>

                  <p className="text-xs text-gray-400 text-left w-full leading-relaxed mb-6">
                    Top-rated trader with 128 successful escrowed transactions this year. 0 disputes raised.
                  </p>

                  <button className="w-full bg-[#1E1E2C] hover:bg-[#2A2A38] border border-[#2A2A38] text-white text-sm font-bold py-3 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2">
                    <Edit3 size={16}/> Edit Profile
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm font-bold py-3 rounded-lg transition-colors">
                    <LogOut size={16}/> LOGOUT
                  </button>
                </div>
              </div>

              {/* Security Tip Box */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                 <div className="absolute left-0 top-0 w-1 h-full bg-[#4812B5]"></div>
                 <h3 className="text-xs font-bold text-gray-400 flex items-center gap-2 mb-3 uppercase tracking-wider">
                   <ShieldAlert size={14} className="text-[#A67CFF]"/> SECURITY TIP
                 </h3>
                 <p className="text-xs text-gray-300 leading-relaxed mb-4">Enable Two-Factor Authentication (2FA) to add an extra layer of protection to your withdrawals.</p>
                 <button className="text-[#A67CFF] text-xs font-bold hover:underline">Setup 2FA Now →</button>
              </div>
            </div>

            {/* --- RIGHT COLUMN: BALANCES & TRANSACTIONS --- */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8 min-w-0">
              
              {/* Balance Card */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">AVAILABLE BALANCE <HelpCircle size={12}/></div>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl lg:text-5xl font-black text-white">$12,840.50</span>
                    <span className="text-sm font-bold text-emerald-500 mb-2">+12.4%</span>
                  </div>
                  
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-2">ESCROW BALANCE <Lock size={10}/></div>
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-400">$4,250.00</span>
                    <span className="text-xs text-gray-600 mb-0.5">4 active contracts</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                  <button className="w-full md:w-48 bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                    <Plus size={16} /> Fund Wallet
                  </button>
                  <button className="w-full md:w-48 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                    <Wallet size={16} /> Withdraw Funds
                  </button>
                </div>
              </div>

              {/* Transaction History Card */}
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl overflow-hidden flex flex-col flex-1">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-lg font-bold text-white">Transaction History</h3>
                   <button className="text-xs font-bold text-[#A67CFF] hover:text-white transition-colors">View All</button>
                </div>

                <div className="overflow-x-auto -mx-6 lg:-mx-8 px-6 lg:px-8">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider">
                        <th className="pb-4 font-bold">DATE</th>
                        <th className="pb-4 font-bold">TYPE</th>
                        <th className="pb-4 font-bold">AMOUNT</th>
                        <th className="pb-4 font-bold text-right">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 text-gray-400">{tx.date}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.iconBg}`}>
                                {tx.icon}
                              </div>
                              <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">{tx.type}</div>
                                <div className="text-[10px] text-gray-500 mt-0.5">{tx.desc}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${tx.amountColor || 'text-white'}`}>{tx.amount}</span>
                              {tx.amountColor && <ShieldCheck size={14} className="text-[#A67CFF]"/>}
                            </div>
                          </td>
                          <td className="py-4 text-right">
                            <span className="text-[10px] font-bold text-gray-300 flex items-center justify-end gap-1.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${tx.statusDot}`}></div> {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </main>

        <div className="mt-auto px-4 lg:px-8 py-6 border-t border-[#2A2A38] bg-[#0A0A11] flex flex-col md:flex-row items-center justify-between gap-4 text-center shrink-0">
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-[10px] text-gray-600">
            © 2026 Xentra365 Marketplace. Secure Escrow Enabled.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;