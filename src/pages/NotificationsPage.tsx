import { useState } from 'react';
import { AlertTriangle, Package, Tag, CheckCircle2, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const notifications = [
    { id: 1, type: 'security', title: 'New login detected', message: 'We noticed a new login to your account from Chrome on Windows 11 in London, UK.', time: '10 mins ago', unread: true, icon: <AlertTriangle className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>, color: 'text-orange-600 bg-orange-100 dark:text-orange-500 dark:bg-orange-500/10' },
    { id: 2, type: 'order', title: 'Order Shipped: Cloud Infrastructure B', message: 'Your escrowed order #XN-48201 has been shipped by the vendor. Track your deployment progress.', time: '2 hours ago', unread: true, icon: <Package className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>, color: 'text-blue-600 bg-blue-100 dark:text-blue-500 dark:bg-blue-500/10' },
    { id: 3, type: 'promo', title: 'Flash Sale: 20% off Enterprise Gear', message: 'Special weekend promotion on all enterprise networking gear. Valid for the next 48 hours.', time: 'Yesterday', unread: false, icon: <Tag className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>, color: 'text-[#6324E2] bg-purple-100 dark:text-[#A67CFF] dark:bg-[#2A1854]' },
    { id: 4, type: 'escrow', title: 'Escrow Released: Order #771-442', message: 'The escrow funds for your recent hardware return have been fully released to your wallet.', time: 'Oct 20', unread: false, icon: <CheckCircle2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>, color: 'text-emerald-600 bg-emerald-100 dark:text-emerald-500 dark:bg-emerald-500/10' },
    { id: 5, type: 'system', title: 'Terms of Service Update', message: 'We have updated our Escrow Protocol terms to improve buyer protection. Please review.', time: 'Oct 15', unread: false, icon: <ShieldCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px]"/>, color: 'text-gray-600 bg-gray-200 dark:text-gray-400 dark:bg-[#1E1E2C]' },
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
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">Notifications</h1>
              <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">Stay updated on your account activity and marketplace alerts.</p>
            </div>
            <button className="text-[10px] sm:text-sm font-bold text-[#6324E2] dark:text-[#A67CFF] hover:text-[#501bb8] dark:hover:text-white transition-colors bg-white dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm self-start sm:self-auto">
              Mark all as read
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 sm:gap-2 border-b border-gray-200 dark:border-[#2A2A38] pb-3 sm:pb-4 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap no-scrollbar">
            {['All', 'Unread', 'Orders', 'Security', 'Promotions'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-bold transition-colors ${
                  activeFilter === filter 
                    ? 'bg-[#6324E2] text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-transparent hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-transparent dark:hover:bg-[#1E1E2C]'
                }`}
              >
                {filter} {filter === 'Unread' && <span className="ml-1 bg-red-500 text-white px-1 sm:px-1.5 py-0.5 rounded text-[8px] sm:text-[10px]">2</span>}
              </button>
            ))}
          </div>

          {/* Notification List */}
          <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl shadow-sm sm:shadow-xl flex flex-col mb-10">
            {notifications.map((notif, index) => (
              <div key={notif.id} className={`p-3 sm:p-4 lg:p-6 flex gap-3 sm:gap-4 lg:gap-6 hover:bg-gray-50 dark:hover:bg-[#1E1E2C] transition-colors cursor-pointer ${index !== notifications.length - 1 ? 'border-b border-gray-100 dark:border-[#2A2A38]' : ''} ${notif.unread ? 'bg-gray-50/50 dark:bg-[#1E1E2C]/50' : ''}`}>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shrink-0 flex items-center justify-center ${notif.color}`}>
                  {notif.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 mb-1 sm:mb-1.5">
                    <h3 className={`text-xs sm:text-sm lg:text-base font-bold truncate pr-2 ${notif.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>{notif.title}</h3>
                    <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wider shrink-0">{notif.time}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-snug sm:leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-none">{notif.message}</p>
                </div>
                {notif.unread && (
                  <div className="shrink-0 flex items-center justify-center pl-1 sm:pl-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 bg-[#6324E2] rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* CONSTANT GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default NotificationsPage;