import { 
  User, Mail, Phone, Globe, Upload, ShieldCheck
} from 'lucide-react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileHeader from '../components/ProfileHeader';

const SettingsPage = () => {

  return (
    // Standardized fixed layout with full Light/Dark mode support
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white font-sans overflow-hidden transition-colors duration-300">
      
      {/* 1. Reusable Left Sidebar */}
      <ProfileSidebar />

      {/* 2. Main Right Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Reusable Top Header */}
        <ProfileHeader />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          
          <div className="p-4 lg:p-8 max-w-[1000px] w-full mx-auto flex-1 space-y-6 lg:space-y-8">
            
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">Profile Settings</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your personal information, addresses, and marketplace preferences.</p>
            </div>

            {/* Personal Information */}
            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-sm lg:shadow-xl transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-[#2A2A38] pb-4">
                <User size={20} className="text-[#6324E2] dark:text-[#A67CFF]" /> Personal Information
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border-2 border-gray-200 dark:border-[#2A2A38] overflow-hidden shrink-0 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] hover:border-[#6324E2] dark:hover:border-[#6324E2] text-gray-700 dark:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
                    <Upload size={14} /> Upload New Photo
                  </button>
                  <p className="text-[10px] text-gray-500 text-center sm:text-left">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" defaultValue="Sterling" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                    <input type="email" disabled defaultValue="alex.sterling@xentra365.io" className="w-full bg-gray-100 dark:bg-[#0A0A11] border border-gray-200 dark:border-[#2A2A38] rounded-lg pl-10 pr-4 py-3 text-sm text-gray-500 cursor-not-allowed transition-colors" />
                    <ShieldCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={16} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                    <input type="text" defaultValue="+1 (555) 019-2831" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Regional & Preferences */}
            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 lg:p-8 shadow-sm lg:shadow-xl transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-[#2A2A38] pb-4">
                <Globe size={20} className="text-blue-500" /> Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Display Language</label>
                  <select className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white appearance-none transition-colors">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Default Currency</label>
                  <select className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white appearance-none transition-colors">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>USDC (Crypto)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Action */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <button className="px-6 py-3 rounded-lg text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
              <button className="px-8 py-3 rounded-lg bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold shadow-md transition-colors">Save Changes</button>
            </div>

          </div>

          {/* PAGE MINI-FOOTER */}
          <div className="mt-auto px-4 lg:px-8 py-6 border-t border-gray-200 dark:border-[#2A2A38] bg-gray-50 dark:bg-[#0A0A11] flex flex-col items-center justify-center gap-4 text-center transition-colors">
            <div className="flex items-center gap-2 bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] px-4 py-1.5 rounded-full shadow-sm">
              <ShieldCheck size={14} className="text-[#6324E2]" />
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">ESCROW PROTECTED INFRASTRUCTURE</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GDPR Compliance</a>
            </div>
            <div className="text-[10px] text-gray-500 dark:text-gray-600 uppercase tracking-wider mt-2">
              © 2026 XENTRA365 DIGITAL MARKETPLACE. ALL RIGHTS RESERVED.
            </div>
          </div>
          
        </main>
      </div>

    </div>
  );
};

export default SettingsPage;