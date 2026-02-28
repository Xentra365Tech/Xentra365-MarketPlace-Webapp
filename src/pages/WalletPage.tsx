import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, 
  Search, MoreVertical, LogOut, Menu, X, ChevronLeft, ChevronRight,
  ArrowDownLeft, RotateCcw, Package, Filter, Clock, HeadphonesIcon, Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const WalletPage = () => {
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

  const transactions = [
    { id: '#ESC-8291-XA', date: 'Oct 24, 2023', time: '14:22 PM EST', type: 'purchase', title: 'Bulk Hardware Order - Batch #12', vendor: 'NexusGlobal Tech', amount: '-$4,200.00', status: 'IN ESCROW', statusColor: 'bg-blue-500/20 text-blue-400', icon: <Package size={14} /> },
    { id: '#ESC-9011-BQ', date: 'Oct 22, 2023', time: '09:15 AM EST', type: 'deposit', title: 'Wallet Top-up (Wire Transfer)', vendor: 'Reference: DEP-8211029', amount: '+$15,000.00', status: 'COMPLETED', statusColor: 'bg-emerald-500/20 text-emerald-400', icon: <ArrowDownLeft size={14} /> },
    { id: '#ESC-7723-CM', date: 'Oct 20, 2023', time: '18:45 PM EST', type: 'refund', title: 'Software License Refund', vendor: 'Ticket: #DS-1092', amount: '+$245.00', status: 'REFUNDED', statusColor: 'bg-orange-500/20 text-orange-400', icon: <RotateCcw size={14} /> },
    { id: '#ESC-1102-LL', date: 'Oct 19, 2023', time: '11:02 AM EST', type: 'purchase', title: 'Marketing Campaign Graphics', vendor: 'Artist: CreativeHub Studio', amount: '-$1,850.00', status: 'PENDING APPROVAL', statusColor: 'bg-gray-500/20 text-gray-400', icon: <Package size={14} /> },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex overflow-hidden">
      
      {/* --- MOBILE OVERLAY --- */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsMobileSidebarOpen(false)} 
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-screen bg-slate-950 text-white transition-all duration-300 z-50 flex flex-col shadow-2xl shrink-0
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

        <div className={`p-4 border-t border-white/10 ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover rounded-full"/>
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate">Alex Rivera</div>
                <div className="text-[10px] text-purple-300 truncate">Pro Buyer</div>
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
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-20 bg-[#0A0A11] border-[#2A2A38] p-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" placeholder="Search transactions..." 
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
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 lg:p-8 max-w-[1400px] w-full mx-auto">
          
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Wallet Overview</h1>
              <p className="text-sm text-gray-400">Manage your funds, escrow holds, and transaction history.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 rounded-lg border border-[#2A2A38] text-[#A67CFF] font-bold text-sm hover:bg-[#1E1E2C] transition-colors flex items-center gap-2">
                 <ArrowDownLeft size={16} /> Withdraw
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-[#4812B5] text-white font-bold text-sm hover:bg-[#3A0CA3] transition-colors shadow-lg shadow-purple-900/20 flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[10px]">+</div> Fund Wallet
              </button>
            </div>
          </div>

          {/* BALANCE CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            
            {/* Escrow Locked Balance */}
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
                <ShieldCheck size={180} />
              </div>
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                  <ShieldCheck size={14} /> ESCROW LOCKED BALANCE
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-black text-white">$12,450.00</span>
                  <span className="text-lg text-gray-500 font-bold mb-1">USD</span>
                </div>
              </div>
              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <span className="bg-[#4812B5] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div> 4 Active Escrows
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Clock size={12} /> Next release in 2 days
                </span>
              </div>
              <div className="relative z-10 mt-8 pt-6 border-t border-[#2A2A38] flex items-center justify-between">
                <span className="text-xs text-gray-500">Protected by Xentra365 Escrow Protocol</span>
                <button className="text-xs font-bold text-[#A67CFF] hover:text-white transition-colors">View active holds</button>
              </div>
            </div>

            {/* Available for Withdrawal */}
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  <Wallet size={14} /> AVAILABLE FOR WITHDRAWAL
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-black text-white">$3,822.45</span>
                  <span className="text-lg text-gray-500 font-bold mb-1">USD</span>
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-[#2A2A38] pb-4">
                  <span className="text-gray-400">Connected Method</span>
                  <span className="text-white font-medium">Bank *8842</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-gray-400">Daily Limit</span>
                  <span className="text-white font-medium">$50,000.00</span>
                </div>
              </div>
            </div>

          </div>

          {/* TRANSACTION HISTORY */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Transaction History</h2>
                <span className="bg-[#2A1854] text-[#A67CFF] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">REAL-TIME</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                {['All', 'Deposits', 'Purchases', 'Refunds'].map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${activeFilter === filter ? 'bg-[#4812B5] text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {filter}
                  </button>
                ))}
                <button className="w-8 h-8 rounded-md border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white transition-colors ml-2">
                  <Filter size={14} />
                </button>
              </div>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl overflow-x-auto shadow-xl">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider bg-[#0A0A11]/50">
                    <th className="p-4 font-bold">ESCROW ID</th>
                    <th className="p-4 font-bold">DATE & TIME</th>
                    <th className="p-4 font-bold">TYPE</th>
                    <th className="p-4 font-bold">DESCRIPTION</th>
                    <th className="p-4 font-bold">AMOUNT</th>
                    <th className="p-4 font-bold">STATUS</th>
                    <th className="p-4 font-bold text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {transactions.map((tx, idx) => (
                    <tr key={idx} className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                      <td className="p-4 text-[#A67CFF] font-bold text-xs">{tx.id}</td>
                      <td className="p-4">
                        <div className="text-gray-200">{tx.date}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{tx.time}</div>
                      </td>
                      <td className="p-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.type === 'purchase' ? 'bg-[#2A1854] text-[#A67CFF]' : tx.type === 'deposit' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                          {tx.icon}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-gray-200 group-hover:text-white">{tx.title}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{tx.vendor}</div>
                      </td>
                      <td className={`p-4 font-bold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>
                        {tx.amount}
                      </td>
                      <td className="p-4">
                        <span className={`${tx.statusColor} text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 w-max`}>
                          {tx.status === 'IN ESCROW' && <ShieldCheck size={10} />}
                          {tx.status === 'COMPLETED' && <ShieldCheck size={10} />}
                          {tx.status === 'REFUNDED' && <RotateCcw size={10} />}
                          {tx.status === 'PENDING APPROVAL' && <div className="w-2 h-0.5 bg-current rounded-full"></div>}
                          {tx.status}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button className="text-gray-500 hover:text-white p-1"><MoreVertical size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination Footer */}
              <div className="p-4 flex items-center justify-between text-sm text-gray-400 border-t border-[#2A2A38] bg-[#0A0A11]/50">
                <span className="text-xs">Showing <strong className="text-white">1-10</strong> of <strong className="text-white">124</strong> transactions</span>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors"><ChevronLeft size={14}/></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#4812B5] text-white font-bold">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors">3</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors"><ChevronRight size={14}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1E1E2C] flex items-center justify-center text-blue-400 shrink-0"><Lock size={18}/></div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Bank-Grade Encryption</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">All financial data is encrypted using AES-256 protocols and secured via SSL certificates.</p>
              </div>
            </div>
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1E1E2C] flex items-center justify-center text-[#A67CFF] shrink-0"><ShieldCheck size={18}/></div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Dispute Protection</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">Our mediation center handles disputes fairly, ensuring funds are released only when terms are met.</p>
              </div>
            </div>
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1E1E2C] flex items-center justify-center text-emerald-400 shrink-0"><HeadphonesIcon size={18}/></div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">24/7 Financial Support</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">Dedicated billing support specialists are available around the clock for any wallet inquiries.</p>
              </div>
            </div>
          </div>

        </main>

        <div className="mt-auto px-4 lg:px-8 py-6 border-t border-[#2A2A38] bg-[#0A0A11] flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-[10px] text-gray-600">
            © 2026 Xentra365 Marketplace. Secure Escrow Enabled.
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletPage;