import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Eye } from 'lucide-react';

const SellerRegister = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/seller/onboarding'); // Routes to onboarding step 1!
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="hidden lg:flex w-1/2 bg-[#4812B5] p-12 flex-col relative overflow-hidden">
        <div className="flex items-center justify-between w-full z-10 mb-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#4812B5] rounded flex items-center justify-center font-bold text-lg">X</div>
            <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
          </Link>
          <span className="bg-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-md border border-white/20">
            <ShieldCheck size={14} /> TRUSTED PARTNER
          </span>
        </div>

        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            Build your business with Xentra365
          </h1>
          <p className="text-purple-100 text-lg leading-relaxed mb-6">
            Join the most secure ecosystem for local commerce.
          </p>
          <div className="flex items-center gap-2 text-white font-bold mb-12">
            <ShieldCheck size={20} className="text-blue-300" /> Secure, Escrow-Protected Trade
          </div>
        </div>

        {/* Floating Graphic Element */}
        <div className="relative w-full max-w-sm mx-auto mt-auto mb-10 z-10">
          <div className="w-full aspect-square bg-[#3A0CA3] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" alt="Servers" className="w-full h-full object-cover opacity-80 mix-blend-overlay"/>
             <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl">
                <div className="text-[10px] text-purple-200 font-bold uppercase tracking-wider mb-1">GUARANTEED</div>
                <div className="text-lg font-bold text-white">Instant Settlement</div>
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-16 relative bg-[#0A0A11] overflow-y-auto">
        <div className="w-full max-w-lg bg-[#12121D] p-8 sm:p-10 rounded-3xl border border-[#2A2A38] shadow-2xl my-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create Seller Account</h2>
            <p className="text-gray-400 text-sm">Start selling to local buyers in minutes.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">FULL NAME</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">STORE NAME</label>
                <input type="text" placeholder="Quantum Hub" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">BUSINESS EMAIL</label>
              <input type="email" placeholder="name@company.com" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">PHONE NUMBER</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="+1" className="w-20 bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white text-center" readOnly />
                <input type="tel" placeholder="(555) 000-0000" className="flex-1 bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CREATE PASSWORD</label>
              <div className="relative mb-2">
                <input type="password" placeholder="••••••••" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
                <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"><Eye size={16} /></button>
              </div>
              <div className="flex gap-1 items-center mb-1">
                <div className="h-1 flex-1 bg-[#4812B5] rounded-full"></div>
                <div className="h-1 flex-1 bg-[#4812B5] rounded-full"></div>
                <div className="h-1 flex-1 bg-[#2A2A38] rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">STRENGTH: MEDIUM</span>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">CONFIRM PASSWORD</label>
              <input type="password" placeholder="••••••••" className="w-full bg-[#0A0A11] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
            </div>

            <label className="flex items-start gap-3 py-2 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-600 text-[#4812B5] focus:ring-[#4812B5] bg-transparent" required />
              <span className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                I agree to the <Link to="#" className="text-blue-400 hover:underline">Marketplace rules & escrow policy</Link> and understand how transaction security works.
              </span>
            </label>

            <button type="submit" className="w-full bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-2">
              CREATE ACCOUNT
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account? <Link to="/seller/login" className="text-[#A67CFF] font-bold hover:underline uppercase tracking-wider ml-1">Log in</Link>
          </p>
        </div>
        
        <div className="w-full flex justify-between items-center mt-8 text-[10px] font-bold text-gray-600 uppercase tracking-wider max-w-lg">
          <span>© 2026 XENTRA365 SELLER PORTAL</span>
          <div className="flex gap-4">
             <Link to="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;