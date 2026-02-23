import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, ShoppingCart, ShieldCheck, LogOut, ArrowLeft, 
  Wallet, Settings, Lock, CheckCircle, Clock, ShieldAlert,
  HelpCircle, Star, RotateCcw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'wallet' | 'settings' | 'security'>('wallet');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      
      {/* Top Navbar */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6324E2] rounded flex items-center justify-center font-bold text-lg text-white">X</div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">Xentra365</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
              <Link to="/search" className="hover:text-white transition-colors">Marketplace</Link>
              <Link to="/profile" className="text-white">Assets & Wallet</Link>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="text-gray-400 hover:text-white relative">
               <Bell size={20} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Link to="/cart" className="text-gray-400 hover:text-white"><ShoppingCart size={20} /></Link>
            
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <div className="w-full h-full bg-[#1E1E2C] rounded-full flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-6 py-6 lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
        {/* --- LEFT SIDEBAR: USER CARD --- */}
        <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl overflow-hidden shadow-xl">
            <div className="h-24 bg-gradient-to-r from-[#2A1854] to-[#1E1E2C]"></div>
            <div className="px-6 pb-6 flex flex-col items-center -mt-12">
              <div className="w-24 h-24 rounded-full border-4 border-[#12121D] bg-[#1E1E2C] overflow-hidden mb-4 shadow-lg">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Alex Sterling" className="w-full h-full object-cover"/>
              </div>
              <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                Alex Sterling <ShieldCheck size={16} className="text-blue-500" fill="currentColor"/>
              </h2>
              <p className="text-xs text-gray-500 mb-4">alex.sterling@xentra365.io</p>
              
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">KYC Verified</span>

              <div className="w-full flex items-center justify-between border-t border-b border-[#2A2A38] py-4 mb-6">
                 <div>
                   <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TRUST SCORE</div>
                   <div className="flex items-center gap-2">
                     <span className="text-xl font-black text-white">4.9<span className="text-sm text-gray-500 font-medium">/5.0</span></span>
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

              <p className="text-xs text-gray-400 text-center leading-relaxed mb-6">
                Top-rated trader with 128 successful escrowed transactions this year. 0 disputes raised.
              </p>

              <button className="w-full bg-[#1E1E2C] border border-[#2A2A38] hover:border-gray-500 text-white text-sm font-bold py-3 rounded-xl transition-colors mb-3">
                Edit Profile
              </button>
              <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-500/10 text-sm font-bold py-3 rounded-xl transition-colors">
                <LogOut size={16}/> LOGOUT
              </button>
            </div>
          </div>

          {/* Security Tip Box */}
          <div className="bg-gradient-to-br from-[#2A1854] to-[#12121D] border border-[#6324E2]/30 rounded-2xl p-6 shadow-xl">
             <h3 className="text-xs font-bold text-[#A67CFF] flex items-center gap-2 mb-3 uppercase tracking-wider"><ShieldAlert size={14}/> Security Tip</h3>
             <p className="text-xs text-gray-300 leading-relaxed mb-4">Enable Two-Factor Authentication (2FA) to add an extra layer of protection to your withdrawals.</p>
             <button className="text-[#A67CFF] text-xs font-bold hover:underline">Setup 2FA Now →</button>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 w-full flex flex-col">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-[#12121D] border border-[#2A2A38] rounded-xl p-1.5 mb-6 overflow-x-auto whitespace-nowrap no-scrollbar w-max">
             <button 
                onClick={() => setActiveTab('wallet')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'wallet' ? 'bg-[#2A1854] text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
             >
                <Wallet size={16}/> Overview & Wallet
             </button>
             <button 
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'security' ? 'bg-[#2A1854] text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
             >
                <Lock size={16}/> Security
             </button>
             <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'settings' ? 'bg-[#2A1854] text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
             >
                <Settings size={16}/> Settings
             </button>
          </div>

          {activeTab === 'wallet' && (
            <div className="space-y-6">
              {/* TOP ROW: Balances & Escrow Shield */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Balance Card */}
                <div className="xl:col-span-2 bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">AVAILABLE BALANCE <HelpCircle size={12}/></div>
                    <div className="flex items-end gap-3 mb-6">
                      <span className="text-4xl lg:text-5xl font-black text-white">$12,840.50</span>
                      <span className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded mb-2">+12.4%</span>
                    </div>
                    
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-2">ESCROW BALANCE <Lock size={10}/></div>
                    <div className="flex items-end gap-2">
                      <span className="text-xl font-bold text-gray-400">$4,250.00</span>
                      <span className="text-xs text-gray-600 mb-0.5">in 4 active contracts</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                    <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-3.5 px-8 rounded-xl transition-colors shadow-[0_0_20px_rgba(99,36,226,0.3)]">
                      + Fund Wallet
                    </button>
                    <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-gray-500 text-white text-sm font-bold py-3.5 px-8 rounded-xl transition-colors">
                      Withdraw Funds
                    </button>
                  </div>
                </div>

                {/* Escrow Shield Card */}
                <div className="bg-gradient-to-br from-[#6324E2] to-[#4812B5] rounded-2xl p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                     <ShieldCheck size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#6324E2] mb-6 shadow-lg">
                      <ShieldCheck size={24} fill="currentColor"/>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Escrow Shield</h3>
                    <p className="text-sm text-purple-200 leading-relaxed mb-6">
                      Your security is our priority. Funds are released only when both parties confirm the transaction is complete.
                    </p>
                    <button className="bg-white text-[#6324E2] text-sm font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-100 transition-colors w-max">
                      Learn Protection Policy
                    </button>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW: Transactions & Active Orders */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Transaction History */}
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-lg font-bold text-white">Transaction History</h3>
                     <button className="text-xs font-bold text-[#A67CFF] hover:underline">View All</button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-[#2A2A38] text-[10px] text-gray-500 uppercase tracking-wider">
                          <th className="pb-3 font-bold">Date</th>
                          <th className="pb-3 font-bold">Type</th>
                          <th className="pb-3 font-bold">Amount</th>
                          <th className="pb-3 font-bold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 text-gray-400">Oct 24, 2026</td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#2A1854] text-[#A67CFF] flex items-center justify-center"><ShoppingCart size={14}/></div>
                              <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">Product Purchase</div>
                                <div className="text-xs text-gray-500">Order #882-901</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 font-bold text-red-400">-$1,240.00</td>
                          <td className="py-4 text-right"><span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">• In Escrow</span></td>
                        </tr>
                        <tr className="border-b border-[#2A2A38] hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 text-gray-400">Oct 22, 2026</td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><ArrowLeft size={14} className="transform rotate-45"/></div>
                              <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">Wallet Top-up</div>
                                <div className="text-xs text-gray-500">Via Bank Transfer</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 font-bold text-emerald-400">+$5,000.00</td>
                          <td className="py-4 text-right"><span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">• Completed</span></td>
                        </tr>
                        <tr className="hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-4 text-gray-400">Oct 20, 2026</td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><RotateCcw size={14}/></div>
                              <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">Refund Issued</div>
                                <div className="text-xs text-gray-500">Order #771-442</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 font-bold text-emerald-400">+$450.00</td>
                          <td className="py-4 text-right"><span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">• Completed</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Active Orders Widget */}
                <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-lg font-bold text-white flex items-center gap-2">Active Orders <span className="bg-[#2A1854] text-[#A67CFF] text-[10px] px-2 py-0.5 rounded-full">3 In Progress</span></h3>
                     <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors">View All Purchases →</button>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <h4 className="font-bold text-sm text-gray-200">Cloud Infrastructure B</h4>
                          <p className="text-[10px] text-gray-500">Order #XN-48201</p>
                        </div>
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">DEPLOYING</span>
                      </div>
                      <div className="w-full bg-[#1E1E2C] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-blue-500 h-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400">
                        <span className="flex items-center gap-1"><Clock size={10}/> ETA: 4h 12m</span>
                        <span>65%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <h4 className="font-bold text-sm text-gray-200">Security Suite Pro</h4>
                          <p className="text-[10px] text-gray-500">Order #XN-77312</p>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">READY</span>
                      </div>
                      <div className="w-full bg-[#1E1E2C] h-2 rounded-full overflow-hidden mb-3">
                        <div className="bg-emerald-500 h-full" style={{ width: '98%' }}></div>
                      </div>
                      <button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold py-2 rounded-lg transition-colors flex justify-center items-center gap-2">
                        <CheckCircle size={14}/> CONFIRM RECEIPT
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab !== 'wallet' && (
            <div className="flex-1 bg-[#12121D] border border-[#2A2A38] rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-xl">
               <Settings size={48} className="text-gray-600 mb-4 animate-spin-slow"/>
               <h2 className="text-xl font-bold text-white mb-2">Module Under Construction</h2>
               <p className="text-gray-400 max-w-sm">The {activeTab} panel is currently being updated to Xentra365 v2.0 standards. Check back soon.</p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;