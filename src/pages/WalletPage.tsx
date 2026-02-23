import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, Bell, Clock, Wallet, ShieldCheck, Lock, HeadphonesIcon, 
  ArrowDownLeft, RotateCcw, Package, MoreVertical, Filter, ChevronLeft, ChevronRight
} from 'lucide-react';
import Footer from '../components/Footer';

const WalletPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

 

  const transactions = [
    { id: '#ESC-8291-XA', date: 'Oct 24, 2023', time: '14:22 PM EST', type: 'purchase', title: 'Bulk Hardware Order - Batch #12', vendor: 'NexusGlobal Tech', amount: '-$4,200.00', status: 'IN ESCROW', statusColor: 'bg-blue-500/20 text-blue-400', icon: <Package size={14} /> },
    { id: '#ESC-9011-BQ', date: 'Oct 22, 2023', time: '09:15 AM EST', type: 'deposit', title: 'Wallet Top-up (Wire Transfer)', vendor: 'Reference: DEP-8211029', amount: '+$15,000.00', status: 'COMPLETED', statusColor: 'bg-emerald-500/20 text-emerald-400', icon: <ArrowDownLeft size={14} /> },
    { id: '#ESC-7723-CM', date: 'Oct 20, 2023', time: '18:45 PM EST', type: 'refund', title: 'Software License Refund', vendor: 'Ticket: #DS-1092', amount: '+$245.00', status: 'REFUNDED', statusColor: 'bg-orange-500/20 text-orange-400', icon: <RotateCcw size={14} /> },
    { id: '#ESC-1102-LL', date: 'Oct 19, 2023', time: '11:02 AM EST', type: 'purchase', title: 'Marketing Campaign Graphics', vendor: 'Artist: CreativeHub Studio', amount: '-$1,850.00', status: 'PENDING APPROVAL', statusColor: 'bg-gray-500/20 text-gray-400', icon: <Package size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6324E2] rounded flex items-center justify-center font-bold text-lg text-white">X</div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">Xentra365</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <Link to="/search" className="hover:text-white transition-colors">Marketplace</Link>
              <Link to="/wallet" className="text-white border-b-2 border-[#6324E2] pb-1">Wallet</Link>
              <Link to="/dashboard" className="hover:text-white transition-colors">Orders</Link>
              <Link to="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>

          <div className="flex-1 max-w-xl hidden lg:block relative ml-8">
            <input 
              type="text" placeholder="Search transactions..." 
              className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#6324E2] text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="text-gray-400 hover:text-white relative">
               <Bell size={20} />
            </button>
            <div className="flex items-center gap-3 ml-2 border-l border-[#2A2A38] pl-4">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-bold text-white leading-none">Alex Rivera</div>
                <div className="text-[10px] text-gray-400">Buyer Account</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 p-0.5 cursor-pointer" onClick={() => navigate('/profile')}>
                <div className="w-full h-full bg-[#1E1E2C] rounded-full flex items-center justify-center overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 lg:px-8 py-8 lg:py-12">
        
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
            <button className="px-6 py-2.5 rounded-lg bg-[#6324E2] text-white font-bold text-sm hover:bg-[#501bb8] transition-colors flex items-center gap-2">
               <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[10px]">+</div> Fund Wallet
            </button>
          </div>
        </div>

        {/* BALANCE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Escrow Locked Balance */}
          <div className="bg-gradient-to-br from-[#1A1438] to-[#0A0A11] border border-[#2A1854] rounded-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 pointer-events-none">
              <ShieldCheck size={180} />
            </div>
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                <ShieldCheck size={14} /> ESCROW LOCKED BALANCE <div className="w-3 h-3 rounded-full bg-gray-600 flex items-center justify-center text-[8px] text-white cursor-pointer hover:bg-gray-500">i</div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black text-white">$12,450.00</span>
                <span className="text-lg text-gray-500 font-bold mb-1">USD</span>
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <span className="bg-[#6324E2] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div> 4 Active Escrows
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Clock size={12} /> Next release in 2 days
              </span>
            </div>
            <div className="relative z-10 mt-8 pt-6 border-t border-[#2A2A38]/50 flex items-center justify-between">
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
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${activeFilter === filter ? 'bg-[#6324E2] text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {filter}
                </button>
              ))}
              <button className="w-8 h-8 rounded-md border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white transition-colors ml-2">
                <Filter size={14} />
              </button>
            </div>
          </div>

          <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl overflow-x-auto">
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
                <button className="w-8 h-8 flex items-center justify-center rounded bg-[#6324E2] text-white font-bold">1</button>
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

      <Footer />
    </div>
  );
};

export default WalletPage;