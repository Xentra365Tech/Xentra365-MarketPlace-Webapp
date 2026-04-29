import { Search, Bell } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between px-8 dark:bg-[#0A0A11] border-b dark:border-[#2A2A38]  border-gray-200 shrink-0">
      
      {/* Left: Subtle Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search settings..." 
          className="w-full dark:bg-[#12121D] bg-gray-50 border border-[#2A2A38]  text-white text-sm rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors"
        />
      </div>

      {/* Right: Status, Notifications, Avatar */}
      <div className="flex items-center gap-6">
        
        {/* System Online Badge */} 
        <div className="hidden sm:flex items-center gap-2 dark:bg-[#12121D] border border-[#2A2A38] px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">SYSTEM ONLINE</span>
        </div>

        {/* Bell Icon */}
        <button className="relative dark:text-gray-400 text-gray-50 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#2A2A38]">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;