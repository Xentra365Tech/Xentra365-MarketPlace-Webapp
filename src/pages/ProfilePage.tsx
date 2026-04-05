import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  Wallet, ShieldCheck, ShieldAlert, Star, Plus, HelpCircle, Lock, Edit3,
  ShoppingCart, RotateCcw, FileText, ArrowDownLeft, LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const transactions = [
    { id: '1', date: 'Oct 24, 2023', type: 'Product Purchase', desc: 'Order #882-901', amount: '-$1,240.00', status: 'In Escrow', icon: <ShoppingCart size={14}/>, iconBg: 'bg-purple-100 text-[#6324E2] dark:bg-[#2A1854] dark:text-[#A67CFF]', statusDot: 'bg-orange-500' },
    { id: '2', date: 'Oct 22, 2023', type: 'Wallet Top-up', desc: 'Via Bank Transfer', amount: '+$5,000.00', status: 'Completed', amountColor: 'text-emerald-600 dark:text-emerald-400', icon: <ArrowDownLeft size={14}/>, iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', statusDot: 'bg-emerald-500' },
    { id: '3', date: 'Oct 20, 2023', type: 'Refund Issued', desc: 'Order #771-442', amount: '+$450.00', status: 'Completed', amountColor: 'text-emerald-600 dark:text-emerald-400', icon: <RotateCcw size={14}/>, iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400', statusDot: 'bg-emerald-500' },
    { id: '4', date: 'Oct 18, 2023', type: 'Platform Fee', desc: 'Oct Maintenance', amount: '-$25.00', status: 'Completed', icon: <FileText size={14}/>, iconBg: 'bg-gray-200 text-gray-600 dark:bg-gray-500/20 dark:text-gray-400', statusDot: 'bg-emerald-500' },
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
      
      {/* CONSTANT GLOBAL HEADER */}
      <Header />

      <main className="flex-1 max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 px-0 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10">
        
        {/* REUSABLE SIDEBAR */}
        <ProfileSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* PAGE CONTENT */}
        <div className="flex-1 px-3 sm:px-0 min-w-0">
          
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-start">
            
            {/* --- LEFT COLUMN: USER PROFILE CARD --- */}
            <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-4 sm:gap-6">
              
              <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl overflow-hidden shadow-sm lg:shadow-md transition-colors">
                <div className="h-24 sm:h-28 bg-gradient-to-br from-purple-500 to-[#2A1854]"></div>
                <div className="px-4 sm:px-6 pb-6 flex flex-col items-center -mt-12 sm:-mt-14">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white dark:border-[#12121D] bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden mb-3 sm:mb-4 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Alex Sterling" className="w-full h-full object-cover"/>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-1.5 sm:gap-2">
                    Alex Sterling <ShieldCheck size={16} className="text-blue-500" fill="currentColor"/>
                  </h2>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-4">alex.sterling@xentra365.io</p>
                  
                  <span className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-500 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 mb-6">
                    <ShieldCheck size={12}/> KYC VERIFIED
                  </span>

                  <div className="w-full flex items-center justify-between border-t border-gray-100 dark:border-[#2A2A38] pt-4 sm:pt-6 mb-4 sm:mb-6">
                     <div>
                       <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TRUST SCORE</div>
                       <div className="flex items-center gap-2">
                         <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">4.9<span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium">/5.0</span></span>
                       </div>
                     </div>
                     <div className="flex text-yellow-500">
                        <Star size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor"/>
                        <Star size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor"/>
                        <Star size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor"/>
                        <Star size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor"/>
                        <Star size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor"/>
                     </div>
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 text-center sm:text-left w-full leading-relaxed mb-6">
                    Top-rated trader with 128 successful escrowed transactions this year. 0 disputes raised.
                  </p>

                  <Link to="/settings" className="w-full bg-gray-100 dark:bg-[#1E1E2C] hover:bg-gray-200 dark:hover:bg-[#2A2A38] border border-gray-200 dark:border-[#2A2A38] text-gray-800 dark:text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2">
                    <Edit3 size={16}/> Edit Profile
                  </Link>
                  
                  {/* Logout only visible here on mobile (Sidebar handles desktop) */}
                  <button onClick={handleLogout} className="lg:hidden w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 text-xs sm:text-sm font-bold py-2.5 sm:py-3 rounded-lg transition-colors">
                    <LogOut size={16}/> LOGOUT
                  </button>
                </div>
              </div>

              {/* Security Tip Box */}
              <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm lg:shadow-md relative overflow-hidden transition-colors">
                 <div className="absolute left-0 top-0 w-1 h-full bg-[#6324E2]"></div>
                 <h3 className="text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 uppercase tracking-wider">
                   <ShieldAlert size={14} className="text-[#6324E2] dark:text-[#A67CFF]"/> SECURITY TIP
                 </h3>
                 <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">Enable Two-Factor Authentication (2FA) to add an extra layer of protection to your withdrawals.</p>
                 <Link to="/security" className="text-[#6324E2] dark:text-[#A67CFF] text-[10px] sm:text-xs font-bold hover:underline">Setup 2FA Now →</Link>
              </div>
            </div>

            {/* --- RIGHT COLUMN: BALANCES & TRANSACTIONS --- */}
            <div className="flex-1 flex flex-col w-full gap-4 sm:gap-6 lg:gap-8 min-w-0">
              
              {/* Balance Card */}
              <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 shadow-sm lg:shadow-md transition-colors">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">AVAILABLE BALANCE <HelpCircle size={12}/></div>
                  <div className="flex items-end gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">$12,840.50</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-500 mb-1 sm:mb-2">+12.4%</span>
                  </div>
                  
                  <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5 sm:gap-2">ESCROW BALANCE <Lock size={10}/></div>
                  <div className="flex items-end gap-2">
                    <span className="text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-400">$4,250.00</span>
                    <span className="text-[10px] sm:text-xs text-gray-500 mb-0.5">4 active contracts</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-3 w-full md:w-auto shrink-0">
                  <button className="w-full md:w-48 bg-[#6324E2] hover:bg-[#501bb8] text-white text-[10px] sm:text-sm font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    <Plus size={14} className="sm:w-4 sm:h-4" /> Fund Wallet
                  </button>
                  <button className="w-full md:w-48 bg-gray-50 dark:bg-[#1E1E2C] hover:bg-gray-100 dark:hover:bg-[#2A2A38] border border-gray-200 dark:border-[#2A2A38] text-gray-800 dark:text-white text-[10px] sm:text-sm font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Wallet size={14} className="sm:w-4 sm:h-4" /> Withdraw Funds
                  </button>
                </div>
              </div>

              {/* Transaction History Card */}
              <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm lg:shadow-md overflow-hidden flex flex-col flex-1 w-full transition-colors mb-10">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                   <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Transaction History</h3>
                   <Link to="/wallet" className="text-[10px] sm:text-xs font-bold text-[#6324E2] dark:text-[#A67CFF] hover:underline transition-colors">View All</Link>
                </div>

                <div className="overflow-x-auto w-full -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 no-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-[#2A2A38] text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">
                        <th className="pb-3 sm:pb-4 font-bold">DATE</th>
                        <th className="pb-3 sm:pb-4 font-bold">TYPE</th>
                        <th className="pb-3 sm:pb-4 font-bold">AMOUNT</th>
                        <th className="pb-3 sm:pb-4 font-bold text-right">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="border-b border-gray-50 dark:border-[#2A2A38] hover:bg-gray-50 dark:hover:bg-[#1E1E2C] transition-colors group">
                          <td className="py-3 sm:py-4 text-gray-500 dark:text-gray-400 pr-4 whitespace-nowrap">{tx.date}</td>
                          <td className="py-3 sm:py-4 pr-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${tx.iconBg}`}>
                                {tx.icon}
                              </div>
                              <div>
                                <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#6324E2] dark:group-hover:text-white whitespace-nowrap transition-colors">{tx.type}</div>
                                <div className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">{tx.desc}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 pr-4">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <span className={`font-bold whitespace-nowrap ${tx.amountColor || 'text-gray-900 dark:text-white'}`}>{tx.amount}</span>
                              {tx.amountColor && <ShieldCheck size={12} className="text-[#6324E2] dark:text-[#A67CFF] shrink-0 sm:w-3.5 sm:h-3.5"/>}
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 text-right">
                            <span className="text-[9px] sm:text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center justify-end gap-1.5 whitespace-nowrap">
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

        </div>
      </main>

      {/* CONSTANT GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default ProfilePage;