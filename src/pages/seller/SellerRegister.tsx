import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, Store, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';

const SellerRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/seller/onboarding'); 
  };

  const StoreIcon = (
    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
      <Store size={32} />
    </div>
  );

  return (
    <AuthLayout 
      leftIcon={StoreIcon}
      leftTitle="Build your business with Xentra365."
      leftSubtitle="Join the most secure ecosystem for local and global commerce. Instant settlements, guaranteed."
    >
      <div className="w-full">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Seller Account</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Start selling to local buyers in minutes.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" required />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Store Name</label>
              <input type="text" placeholder="Quantum Hub" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" required />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Business Email</label>
            <input type="email" placeholder="name@company.com" className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" required />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
            <div className="flex gap-2">
              <input type="text" defaultValue="+234" className="w-20 bg-gray-100 dark:bg-[#12121D] border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-3 text-sm text-gray-500 dark:text-gray-400 text-center" readOnly />
              <input type="tel" placeholder="800 000 0000" className="flex-1 bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" required />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Create Password</label>
            <div className="relative mb-2">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" 
                required 
              />
              <button 
               type="button" 
               onClick={() => setShowPassword(!showPassword)}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {/* Password Strength Bar */}
            <div className="flex gap-1 items-center mb-1">
              <div className="h-1 flex-1 bg-[#6324E2] rounded-full"></div>
              <div className="h-1 flex-1 bg-[#6324E2] rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 dark:bg-[#2A2A38] rounded-full"></div>
            </div>
            <span className="text-[9px] font-bold text-blue-500 uppercase tracking-wider">STRENGTH: MEDIUM</span>
          </div>

          <label className="flex items-start gap-3 py-2 cursor-pointer group mt-4">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#6324E2] focus:ring-[#6324E2] bg-white dark:bg-[#1E1E2C]" required />
            <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
              I agree to the <Link to="#" className="text-blue-500 hover:underline">Marketplace rules & escrow policy</Link> and understand how transaction security works.
            </span>
          </label>

          <button type="submit" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold py-3.5 rounded-lg transition-all shadow-md mt-4">
            CREATE SELLER ACCOUNT
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account? <Link to="/seller/login" className="text-[#6324E2] dark:text-[#A67CFF] font-bold hover:underline ml-1">Log in here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SellerRegister;