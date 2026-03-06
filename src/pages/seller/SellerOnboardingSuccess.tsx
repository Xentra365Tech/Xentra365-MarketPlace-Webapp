import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const SellerOnboardingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="hidden lg:flex w-1/3 bg-[#12121D] p-12 flex-col relative overflow-hidden shrink-0 border-r border-[#2A2A38]">
        <Link to="/" className="flex items-center gap-2 mb-20 z-10 w-max">
          <div className="w-8 h-8 bg-white text-[#12121D] rounded flex items-center justify-center font-bold text-lg">X</div>
          <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
        </Link>

        <div className="relative w-full mx-auto mb-10 z-10">
          <div className="w-full aspect-[4/5] bg-[#3A0CA3] rounded-3xl overflow-hidden relative shadow-2xl">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" alt="Servers" className="w-full h-full object-cover opacity-50 mix-blend-overlay"/>
             <div className="absolute inset-0 bg-gradient-to-t from-[#12121D] to-transparent"></div>
          </div>
        </div>

        <div className="z-10 mt-auto relative -mt-32">
          <span className="bg-[#1E1E2C] border border-[#2A2A38] text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center w-max gap-1.5 uppercase tracking-wider mb-4">
            🚀 GLOBAL INFRASTRUCTURE
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Your storefront is ready for the world.
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect with millions of buyers through Xentra's secure, institutional-grade escrow network.
          </p>
        </div>
      </div>

      {/* RIGHT WIZARD PANEL */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative bg-[#0A0A11]">
        
        <div className="absolute top-8 right-8 flex flex-col items-end">
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">SETUP PROGRESS</span>
           <div className="flex items-center gap-4">
             <span className="text-sm font-bold text-blue-500">100% Complete</span>
             <div className="w-48 h-1.5 bg-[#1E1E2C] rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 w-full"></div>
             </div>
           </div>
        </div>

        <div className="w-full max-w-lg flex flex-col items-center text-center">
          
          {/* Success Badge */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-32 h-32 rounded-full border border-[#2A2A38] bg-[#12121D] flex items-center justify-center relative z-10 shadow-2xl">
              <ShieldCheck size={48} className="text-blue-500" />
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap z-20 shadow-lg border border-blue-400">
              XENTRA ELITE CERTIFIED
            </div>
          </div>

          <h2 className="text-4xl font-black text-white mb-4">Congratulations!</h2>
          <p className="text-gray-400 text-base mb-12">
            You have successfully completed the onboarding process. <strong className="text-white">You are ready to start selling.</strong>
          </p>

          <div className="w-full bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 space-y-4 mb-10 text-left">
             <div className="flex items-center justify-between pb-4 border-b border-[#2A2A38]">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={18} className="text-emerald-500" />
                 <span className="text-sm font-bold text-white">Seller Profile Optimization</span>
               </div>
               <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">COMPLETE</span>
             </div>
             <div className="flex items-center justify-between pb-4 border-b border-[#2A2A38]">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={18} className="text-emerald-500" />
                 <span className="text-sm font-bold text-white">KYC Identity Verification</span>
               </div>
               <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">VERIFIED</span>
             </div>
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={18} className="text-emerald-500" />
                 <span className="text-sm font-bold text-white">Merchant Compliance Training</span>
               </div>
               <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">PASSED</span>
             </div>
          </div>

          <button onClick={() => navigate('/seller/dashboard')} className="w-full bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(72,18,181,0.4)] hover:shadow-[0_0_40px_rgba(72,18,181,0.6)] flex items-center justify-center gap-2 tracking-wider uppercase mb-6">
            COMPLETE ONBOARDING <span className="text-xl leading-none">→</span>
          </button>

          <p className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">
            REDIRECTING TO DASHBOARD IN 5S... <br/>
            ENTERPRISE SECURITY • AUDITED ESCROW • SELLER PROTECTION POLICY
          </p>

        </div>
      </div>
    </div>
  );
};

export default SellerOnboardingSuccess;