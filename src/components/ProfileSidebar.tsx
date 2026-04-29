import { Link, useLocation } from 'react-router-dom';
import { 
  User, ShoppingBag, Wallet, ShieldCheck, Settings, Bell, Heart, LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfileSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  // ALL your original navigations are back!
  const menuItems = [
    { name: 'Back to Dashboard', icon: <User size={20} />, path: '/dashboard' },
    { name: 'My Profile', icon: <User size={20} />, path: '/profile' },
    { name: 'My Orders', icon: <ShoppingBag size={20} />, path: '/orders' },
    { name: 'Wallet & Escrow', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Saved Items', icon: <Heart size={20} />, path: '/saved' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
    { name: 'Security', icon: <ShieldCheck size={20} />, path: '/security' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside className="w-[260px] h-screen dark:bg-[#0A0A11] bg-gray-50 border-r dark:border-[#2A2A38] border-gray-200 flex flex-col shrink-0">
      
      {/* Top: Logo */}
      <div className="h-20 flex items-center px-6 shrink-0 border-b border-transparent">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6324E2] rounded flex items-center justify-center font-bold text-white">X</div>
          <span className="text-xl font-bold tracking-tight dark:text-white text-[[#6324E2]">Xentra365</span>
        </Link>
        <div className="ml-auto w-6 h-3 bg-[#6324E2] rounded-full"></div>
      </div>

      {/* Middle: Navigation */}
      <div className="flex-1 py-6 px-4 flex flex-col gap-1 overflow-y-auto no-scrollbar">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/profile');
          return (
            <Link 
              key={index} 
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-200
                ${isActive 
                  ? 'bg-[#1E1E2C] text-white' 
                  : 'text-gray-400 hover:bg-[#12121D] hover:text-white'
                }
              `}
            >
              <div className={isActive ? 'text-[#6324E2]' : 'text-gray-500'}>
                {item.icon}
              </div>
              {item.name}
            </Link>
          )
        })}
      </div>

      {/* Bottom: User Profile & Logout */}
      <div className="p-4 shrink-0 border-t dark:border-[#2A2A38] border-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2A2A38]">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Alex" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Alex Sterling</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Buyer Account</div>
            </div>
          </div>
          <button onClick={logout} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 bg-[#12121D] rounded-lg transition-colors border border-[#2A2A38]">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;