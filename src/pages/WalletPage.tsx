import { useState } from 'react';
import { 
  ShieldCheck, Wallet, ChevronLeft, ChevronRight,
  ArrowDownLeft, RotateCcw, Package, Filter, Clock, HeadphonesIcon, Lock
} from 'lucide-react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileHeader from '../components/ProfileHeader';

const WalletPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const transactions = [
    { id: '#ESC-8291-XA', date: 'Oct 24, 2023', time: '14:22 PM EST', type: 'purchase', title: 'Bulk Hardware Order - Batch #12', vendor: 'NexusGlobal Tech', amount: '-$4,200.00', status: 'IN ESCROW', statusColor: 'bg-blue-500/20 text-blue-400', icon: <Package size={14} /> },
    { id: '#ESC-9011-BQ', date: 'Oct 22, 2023', time: '09:15 AM EST', type: 'deposit', title: 'Wallet Top-up (Wire Transfer)', vendor: 'Reference: DEP-8211029', amount: '+$15,000.00', status: 'COMPLETED', statusColor: 'bg-emerald-500/20 text-emerald-400', icon: <ArrowDownLeft size={14} /> },
    { id: '#ESC-7723-CM', date: 'Oct 20, 2023', time: '18:45 PM EST', type: 'refund', title: 'Software License Refund', vendor: 'Ticket: #DS-1092', amount: '+$245.00', status: 'REFUNDED', statusColor: 'bg-orange-500/20 text-orange-400', icon: <RotateCcw size={14} /> },
    { id: '#ESC-1102-LL', date: 'Oct 19, 2023', time: '11:02 AM EST', type: 'purchase', title: 'Marketing Campaign Graphics', vendor: 'Artist: CreativeHub Studio', amount: '-$1,850.00', status: 'PENDING APPROVAL', statusColor: 'bg-gray-500/20 text-gray-400', icon: <Package size={14} /> },
  ];

  return (
    // Standardized Dashboard Layout Wrapper
    <div className="flex h-screen w-screen dark:bg-[#0A0A11] bg-gray-50 text-white font-sans overflow-hidden">
      
      {/* 1. Reusable Left Sidebar */}
      <ProfileSidebar />

      {/* 2. Main Right Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Reusable Top Header */}
        <ProfileHeader />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar">
          
          <div className="p-4 lg:p-8 max-w-[1400px] w-full mx-auto">
            
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold dark:text-white text-gray-900 mb-2">Wallet Overview</h1>
                <p className="text-sm text-gray-400">Manage your funds, escrow holds, and transaction history.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-2.5 rounded-lg border bg-gray-50 border-gray-200 text-[#A67CFF] font-bold text-sm hover:bg-[#1E1E2C] transition-colors flex items-center gap-2">
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
              <div className="dark:bg-[#12121D] bg-gray-50 border border-[#2A2A38] rounded-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
                  <ShieldCheck size={180} />
                </div>
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                    <ShieldCheck size={14} /> ESCROW LOCKED BALANCE
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black dark:text-white text-gray-900">$12,450.00</span>
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
                  <button className="text-xs bg-gray-50 dark:bg-gray-900 border-gray-300 font-bold text-[#A67CFF] hover:text-white transition-colors">View active holds</button>
                </div>
              </div>

              {/* Available for Withdrawal */}
              <div className="dark:bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    <Wallet size={14} /> AVAILABLE FOR WITHDRAWAL
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-black dark:text-white text-gray-900">$3,822.45</span>
                    <span className="text-lg text-gray-500 font-bold mb-1">USD</span>
                  </div>
                </div>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-[#2A2A38] pb-4">
                    <span className="text-gray-400">Connected Method</span>
                    <span className="dark:text-white text-gray-900 font-medium">Bank *8842</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="text-gray-400">Daily Limit</span>
                    <span className="dark:text-white text-gray-900 font-medium">$50,000.00</span>
                  </div>
                </div>
              </div>

            </div>

            {/* TRANSACTION HISTORY */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold dark:text-white text-gray-900">Transaction History</h2>
                  <span className="dark:bg-[#2A1854] border-gry-300 border text-[#A67CFF] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">REAL-TIME</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar ">
                  {['All', 'Deposits', 'Purchases', 'Refunds'].map(filter => (
                    <button 
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${activeFilter === filter ? 'dark:bg-[#4812B5] bg-gray-50 border border-gray-300 dark:text-white text-gray-900' : 'text-gray-900 bg-gray-50 border border-gray-300 dark:text-gray-200 hover:text-gray-300'}`}
                    >
                      {filter}
                    </button>
                  ))}
                  <button className="w-8 h-8 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-900  flex items-center justify-center text-gray-400 hover:text-white transition-colors ml-2">
                    <Filter size={14} />
                  </button>
                </div>
              </div>

              <div className="dark:bg-[#12121D] bg-gray-50 border border-[#2A2A38] rounded-xl overflow-x-auto no-scrollbar shadow-xl">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-[#2A2A38] text-[10px] text-gray-900 dark:text-gray-400 uppercase tracking-wider bg-[#6324E2]">
                      <th className="p-4 font-bold">ESCROW ID</th>
                      <th className="p-4 font-bold">DATE & TIME</th>
                      <th className="p-4 font-bold">TYPE</th>
                      <th className="p-4 font-bold">DESCRIPTION</th>
                      <th className="p-4 font-bold">AMOUNT</th>
                      <th className="p-4 font-bold">STATUS</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Pagination Footer */}
                <div className="p-4 flex items-center justify-between text-sm text-gray-400 border-t border-[#2A2A38] bg-[#0A0A11]/50">
                  <span className="text-xs">Showing <strong className="text-white">1-4</strong> of <strong className="text-white">124</strong> transactions</span>
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

          </div>

          {/* PAGE MINI-FOOTER */}
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
          
        </main>
      </div>
    </div>
  );
};

export default WalletPage;