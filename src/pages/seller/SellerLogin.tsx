import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Eye, ShieldCheck, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';

const SellerLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/seller/dashboard'); 
  };


  const SecureIcon = (
    <div className="relative">
      {/* <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Lock size={24} />
      </div> */}
    </div>
  );

  return (
    <AuthLayout 
      leftIcon={SecureIcon}
      leftTitle="Institutional-grade merchant security."
      leftSubtitle="Access your seller dashboard protected by multi-layer encryption and real-time fraud monitoring."
    >
      <div className="w-full">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Seller Login</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your credentials to manage your inventory.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2] focus:ring-1 focus:ring-[#6324E2] transition-colors" 
              required 
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Password</label>
              <Link to="#" className="text-[10px] font-bold text-[#6324E2] hover:text-[#4F1CBA] dark:text-[#A67CFF] dark:hover:text-white transition-colors">FORGOT PASSWORD?</Link>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"><Lock size={16} /></div>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-gray-700 rounded-lg pl-11 pr-10 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2] focus:ring-1 focus:ring-[#6324E2] transition-colors" 
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
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-[#2A2A38] mb-4">
            <div className="flex items-center gap-3">
              <div onClick={() => setTwoFactor(!twoFactor)} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-300 ${twoFactor ? 'bg-[#6324E2]' : 'bg-gray-300 dark:bg-[#2A2A38]'}`}>
                <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-transform duration-300 shadow-sm ${twoFactor ? 'left-[22px]' : 'left-[3px]'}`}></div>
              </div>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">ENABLE 2FA</span>
            </div>
            {twoFactor && <span className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-500 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">SECURE SESSION</span>}
          </div>

          <button type="submit" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold py-3.5 rounded-lg transition-all shadow-md mt-2">
            LOG IN TO PORTAL
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          New seller? <Link to="/seller/register" className="text-[#6324E2] dark:text-[#A67CFF] font-bold hover:underline">Sign up for an account</Link>
        </p>

        <div className="mt-8 flex justify-center">
          <div className="bg-blue-50 dark:bg-[#12121D] border border-blue-100 dark:border-[#2A2A38] px-4 py-2.5 rounded-lg flex items-center gap-2">
             <ShieldCheck size={16} className="text-blue-500" />
             <span className="text-[9px] font-bold text-blue-700 dark:text-gray-400 uppercase tracking-wider">ESCROW PROTECTED INFRASTRUCTURE</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SellerLogin;