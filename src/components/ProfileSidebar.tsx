import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Wallet, ShieldCheck, Settings, Bell, LogOut, Store 
} from 'lucide-react';


interface ProfileSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ 
  isCollapsed, 
  setIsCollapsed 
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navItems = [
    { name: 'Marketplace Home', icon: <Store size={20} />, path: '/dashboard' },
    { name: 'Profile Overview', icon: <LayoutDashboard size={20} />, path: '/profile' },
    { name: 'Escrow Wallet', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Security & Privacy', icon: <ShieldCheck size={20} />, path: '/security' },
    { name: 'Profile Settings', icon: <Settings size={20} />, path: '/settings' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-[100dvh] bg-[#07070F] shadow-2xl z-[90] flex flex-col transform transition-all duration-300 ease-in-out shrink-0 border-r border-[#1C1C28]
      ${isCollapsed ? 'w-[88px]' : 'w-[280px]'}
    `}>
      
      {/* HEADER: LOGO & TOGGLE */}

      <div 
          className={`flex items-center h-20 shrink-0 cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0' : 'justify-between px-6'}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          {/* White box with dark X */}
          <div className="w-8 h-8 rounded bg-white text-[#0B0B14] flex items-center justify-center font-bold text-lg shrink-0">
            X
          </div>
          {/* Purple Xentra365 text */}
          <span className={`font-bold text-xl text-[#6324E2] whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'hidden opacity-0' : 'block opacity-100'}`}>
            Xentra365
          </span>
        </div>
        
        {/* Purple Pill Indicator */}
        <div className={`h-3.5 w-7 rounded-full bg-[#6324E2] shrink-0 transition-all ${isCollapsed ? 'hidden' : 'block'}`} />
      </div>

      {/* NAVIGATION MENU */}
      <div className="flex-1 flex flex-col gap-3 py-6 px-4 overflow-y-auto no-scrollbar border-t border-[#1C1C28]/50">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isMarketplaceHome = item.name === 'Marketplace Home'; 

          return (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => window.innerWidth < 1024 && setIsCollapsed(true)}
              className={`flex items-center rounded-xl transition-all duration-200 font-medium text-[15px] overflow-hidden
                ${isCollapsed ? 'justify-center px-0 py-3.5 w-12 mx-auto' : 'gap-4 px-4 py-3.5'}
                ${isActive 
                  ? 'bg-[#1C1C28] text-white font-bold shadow-sm' 
                  : isMarketplaceHome
                    ? 'bg-[#101018] text-gray-200 border border-white/5'
                    : 'text-gray-200 hover:bg-[#101018] hover:text-white'}`}
              title={isCollapsed ? item.name : undefined}
            >
              <div className={`shrink-0 ${isActive ? 'text-[#D4BFFF]' : 'text-[#D4BFFF]'}`}>
                {item.icon}
              </div>
              <span className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'hidden opacity-0 w-0' : 'block opacity-100'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* FOOTER: USER PROFILE */}
      <div className="p-4 mt-auto border-t border-[#1C1C28] shrink-0 mb-2">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} gap-3`}>
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Avatar" className="w-full h-full object-cover"/>
          </div>
          
          {/* User Details */}
          {!isCollapsed && (
            <div className="flex-1 min-w-0 transition-opacity">
              <div className="text-sm font-bold text-white truncate">Alex Sterling</div>
              <div className="text-[11px] text-[#A67CFF] truncate mt-0.5">Buyer Account</div>
            </div>
          )}

          {/* Logout Button */}
          {!isCollapsed && (
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-400 bg-[#1A1A24] hover:text-white hover:bg-[#2A2A38] rounded-lg transition-colors shrink-0"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          )}
        </div>
      </div>

    </aside>
  );
};

export default ProfileSidebar;