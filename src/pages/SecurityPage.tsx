import { useState } from 'react';
import { 
  ShieldCheck, Bell, Key, Smartphone, Mail, Monitor, 
  LogOut, Globe
} from 'lucide-react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileHeader from '../components/ProfileHeader';

const SecurityPage = () => {
  // Form states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [escrowUpdatesEnabled, setEscrowUpdatesEnabled] = useState(true);
  const [messagesEnabled, setMessagesEnabled] = useState(false);
  const [promosEnabled, setPromosEnabled] = useState(false);

  // Reusable Theme-Responsive Toggle Switch Component
  const ToggleSwitch = ({ active, onToggle }: { active: boolean, onToggle: () => void }) => (
    <div 
      onClick={onToggle}
      className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ease-in-out ${active ? 'bg-[#6324E2]' : 'bg-gray-300 dark:bg-[#2A2A38]'}`}
    >
      <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform duration-300 shadow-sm ${active ? 'left-6' : 'left-1'}`}></div>
    </div>
  );

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
          
          <div className="p-4 lg:p-8 max-w-[1400px] w-full mx-auto flex-1">
            
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Account Security Settings</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your password, authentication methods, and security preferences.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              
              {/* --- LEFT COLUMN --- */}
              <div className="space-y-6 lg:space-y-8">
                
                {/* Password Security */}
                <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 shadow-sm lg:shadow-md transition-colors">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                    <Key size={18} className="text-[#6324E2] dark:text-[#A67CFF]" /> Password Security
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CURRENT PASSWORD</label>
                      <input type="password" placeholder="••••••••••••" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">NEW PASSWORD</label>
                      <input type="password" placeholder="••••••••••••" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CONFIRM NEW PASSWORD</label>
                    <input type="password" placeholder="••••••••••••" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6324E2] text-gray-900 dark:text-white transition-colors" />
                  </div>
                  <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-md">
                    Update Password
                  </button>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 shadow-sm lg:shadow-md transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <ShieldCheck size={18} className="text-blue-500" /> Two-Factor Authentication (2FA)
                    </h3>
                    <ToggleSwitch active={twoFactorEnabled} onToggle={() => setTwoFactorEnabled(!twoFactorEnabled)} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Secure your account with an additional layer of security. Every time you log in, we'll ask for a unique code generated by your mobile app.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-4 flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-lg flex items-center justify-center text-gray-500">
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Authenticator App</div>
                        <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-500">Google Authenticator Active</div>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-gray-500 hover:text-[#6324E2] dark:hover:text-white transition-colors">Manage</button>
                  </div>
                </div>

                {/* Social Account Linking */}
                <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 shadow-sm lg:shadow-md transition-colors">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                    <Globe size={18} className="text-gray-400" /> Social Account Linking
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-4 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white border border-gray-200 dark:border-transparent rounded flex items-center justify-center text-black font-bold shadow-sm">G</div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Google Account</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded">CONNECTED</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-4 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold shadow-sm">f</div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Facebook</span>
                      </div>
                      <button className="text-[10px] font-bold text-[#6324E2] dark:text-[#A67CFF] hover:text-[#501bb8] dark:hover:text-white uppercase tracking-wider transition-colors">LINK ACCOUNT</button>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-4 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white shadow-sm"><Mail size={16} /></div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Outlook / Office 365</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded">CONNECTED</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* --- RIGHT COLUMN --- */}
              <div className="space-y-6 lg:space-y-8">
                
                {/* Notification Preferences */}
                <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 shadow-sm lg:shadow-md transition-colors">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                    <Bell size={18} className="text-[#6324E2] dark:text-[#A67CFF]" /> Notification Preferences
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">Security Alerts</div>
                        <div className="text-[10px] text-gray-500">Critical account safety updates</div>
                      </div>
                      <ToggleSwitch active={alertsEnabled} onToggle={() => setAlertsEnabled(!alertsEnabled)} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">Escrow Updates</div>
                        <div className="text-[10px] text-gray-500">Status changes on your funds</div>
                      </div>
                      <ToggleSwitch active={escrowUpdatesEnabled} onToggle={() => setEscrowUpdatesEnabled(!escrowUpdatesEnabled)} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">New Messages</div>
                        <div className="text-[10px] text-gray-500">Buyer/Seller direct chat alerts</div>
                      </div>
                      <ToggleSwitch active={messagesEnabled} onToggle={() => setMessagesEnabled(!messagesEnabled)} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">Promotional Offers</div>
                        <div className="text-[10px] text-gray-500">Discounts and marketing info</div>
                      </div>
                      <ToggleSwitch active={promosEnabled} onToggle={() => setPromosEnabled(!promosEnabled)} />
                    </div>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-2xl p-6 shadow-sm lg:shadow-md transition-colors">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                    <Monitor size={18} className="text-blue-500" /> Active Sessions
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg flex items-center justify-center text-blue-500 dark:text-blue-400 transition-colors">
                          <Monitor size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            Windows PC • Chrome 
                            <span className="bg-[#6324E2] text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">CURRENT</span>
                          </div>
                          <div className="text-[10px] text-gray-500">London, UK • 192.168.1.45</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg flex items-center justify-center text-gray-500 transition-colors">
                          <Smartphone size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            iPhone 14 Pro • Safari 
                          </div>
                          <div className="text-[10px] text-gray-500">London, UK • 2 days ago</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 p-2 transition-colors">
                        <LogOut size={16} />
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] hover:bg-gray-100 dark:hover:bg-[#2A2A38] hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 text-xs font-bold py-3 rounded-lg transition-colors uppercase tracking-wider shadow-sm">
                    LOG OUT ALL OTHER SESSIONS
                  </button>
                </div>

              </div>
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

export default SecurityPage;