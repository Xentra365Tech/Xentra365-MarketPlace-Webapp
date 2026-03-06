import { Link, useNavigate } from 'react-router-dom';
import { User, Fingerprint, List, ShieldCheck, ChevronRight } from 'lucide-react';

const SellerOnboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="hidden lg:flex w-1/3 bg-[#4812B5] p-12 flex-col relative overflow-hidden shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-20 z-10 w-max">
          <div className="w-8 h-8 bg-white text-[#4812B5] rounded flex items-center justify-center font-bold text-lg">X</div>
          <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
        </Link>

        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            Join our trusted network of professional sellers.
          </h1>
          <p className="text-purple-200 text-base leading-relaxed">
            Access high-volume liquidity and institutional-grade escrow protection for all your local transactions.
          </p>
        </div>

        <div className="relative w-full mx-auto mt-auto mb-10 z-10">
          <div className="w-full aspect-video bg-[#3A0CA3] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" alt="Servers" className="w-full h-full object-cover opacity-60 mix-blend-overlay"/>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-purple-300 text-[10px] font-bold uppercase tracking-wider z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> INFRASTRUCTURE STATUS: ACTIVE & AUDITED
        </div>
      </div>

      {/* RIGHT WIZARD PANEL */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative bg-[#0A0A11]">
        <div className="w-full max-w-xl">
          <div className="mb-10">
            <span className="bg-[#2A1854] text-[#A67CFF] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block border border-[#4812B5]/50">
              • STEP 1 OF 4: INTRODUCTION
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Welcome to Xentra365<br/>Seller Onboarding</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Let's get your store ready for high-density local commerce. The process takes approximately 5-10 minutes.
            </p>
          </div>

          <div className="space-y-4">
            <button onClick={() => navigate('/seller/dashboard')} className="w-full flex items-center justify-between p-6 bg-[#12121D] border border-[#2A2A38] hover:border-[#4812B5] hover:bg-[#1E1E2C] rounded-2xl transition-all group">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1E1E2C] group-hover:bg-[#4812B5] text-gray-400 group-hover:text-white flex items-center justify-center transition-colors">
                  <User size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-white mb-1">Profile Setup</h3>
                  <p className="text-xs text-gray-500">Define your brand identity and location.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" />
            </button>

            <button disabled className="w-full flex items-center justify-between p-6 bg-[#0A0A11] border border-[#1E1E2C] rounded-2xl opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#12121D] text-gray-600 flex items-center justify-center">
                  <Fingerprint size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-400 mb-1">KYC Verification</h3>
                  <p className="text-xs text-gray-600">Confirm identity for marketplace trust.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-700" />
            </button>

            <button disabled className="w-full flex items-center justify-between p-6 bg-[#0A0A11] border border-[#1E1E2C] rounded-2xl opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#12121D] text-gray-600 flex items-center justify-center">
                  <List size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-400 mb-1">Listing Tutorial</h3>
                  <p className="text-xs text-gray-600">Learn to create high-conversion listings.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-700" />
            </button>

            <button disabled className="w-full flex items-center justify-between p-6 bg-[#0A0A11] border border-[#1E1E2C] rounded-2xl opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#12121D] text-gray-600 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-400 mb-1">Escrow Guide</h3>
                  <p className="text-xs text-gray-600">How payment protection works for you.</p>
                </div>
              </div>
              <ChevronRight className="text-gray-700" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellerOnboarding;