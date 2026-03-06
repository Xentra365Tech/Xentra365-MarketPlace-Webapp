import { Link, useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, Eye, Activity } from 'lucide-react';
import { useState } from 'react';

const SellerLogin = () => {
  const navigate = useNavigate();
  const [twoFactor, setTwoFactor] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/seller/dashboard'); // Instantly routes to the seller dashboard
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="hidden lg:flex w-1/2 bg-[#4812B5] p-12 flex-col relative overflow-hidden">
        <Link to="/" className="flex items-center gap-2 mb-20 z-10 w-max">
          <div className="w-8 h-8 bg-white text-[#4812B5] rounded flex items-center justify-center font-bold text-lg">X</div>
          <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
        </Link>

        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            Manage your store with institutional-grade security.
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed mb-12">
            Access your merchant dashboard protected by multi-layer encryption and real-time fraud monitoring.
          </p>
        </div>

        {/* Abstract Graphic */}
        <div className="relative w-64 h-64 mx-auto mt-auto mb-10 z-10">
          <div className="absolute inset-0 rounded-full border-[1px] border-white/20 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full border-[2px] border-white/30"></div>
          <div className="absolute inset-12 rounded-full border-[4px] border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm">
             <Lock size={48} className="text-white" />
          </div>
          <div className="absolute top-4 left-4 bg-blue-500 p-2 rounded-lg shadow-lg"><ShieldCheck size={20} className="text-white"/></div>
          <div className="absolute bottom-4 right-4 bg-emerald-500 p-2 rounded-lg shadow-lg"><Activity size={20} className="text-white"/></div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider z-10">
          <ShieldCheck size={16} /> MILITARY GRADE ENCRYPTION ACTIVE
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative bg-[#0A0A11]">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Seller Login</h2>
            <p className="text-gray-400">Enter your credentials to manage your inventory.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">EMAIL ADDRESS</label>
              <div className="relative">
                <input type="email" placeholder="name@company.com" className="w-full bg-[#12121D] border border-[#2A2A38] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#4812B5] text-white transition-colors" required />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">PASSWORD</label>
                <Link to="#" className="text-[10px] font-bold text-[#A67CFF] hover:text-white transition-colors">FORGOT PASSWORD?</Link>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"><Lock size={16} /></div>
                <input type="password" placeholder="••••••••" className="w-full bg-[#12121D] border border-[#2A2A38] rounded-xl pl-12 pr-10 py-3.5 text-sm focus:outline-none focus:border-[#4812B5] text-white transition-colors" required />
                <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"><Eye size={16} /></button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div onClick={() => setTwoFactor(!twoFactor)} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-300 ${twoFactor ? 'bg-[#4812B5]' : 'bg-[#2A2A38]'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-transform duration-300 shadow-sm ${twoFactor ? 'left-[22px]' : 'left-[3px]'}`}></div>
                </div>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">ENABLE 2FA</span>
              </div>
              {twoFactor && <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">SECURE SESSION</span>}
            </div>

            <button type="submit" className="w-full bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(72,18,181,0.3)] hover:shadow-[0_0_40px_rgba(72,18,181,0.5)]">
              LOG IN
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            New seller? <Link to="/seller/register" className="text-[#A67CFF] font-bold hover:underline">Sign up for an account</Link>
          </p>

          <div className="mt-12 flex justify-center">
            <div className="bg-[#12121D] border border-[#2A2A38] px-6 py-3 rounded-xl flex items-center gap-2">
               <ShieldCheck size={16} className="text-blue-500" />
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ESCROW PROTECTED INFRASTRUCTURE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;