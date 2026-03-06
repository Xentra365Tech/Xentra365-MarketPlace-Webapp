import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Database, Scale, Wallet, Lock, Truck, RotateCcw } from 'lucide-react';

const SellerEscrowGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="w-full lg:w-[450px] bg-[#12121D] border-r border-[#2A2A38] p-12 flex flex-col relative shrink-0">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-2 w-max">
            <div className="w-8 h-8 bg-[#6324E2] text-white rounded flex items-center justify-center font-bold text-lg">X</div>
            <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
          </Link>
        </div>

        <div className="mb-8">
          <span className="border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center w-max gap-1.5 mb-6">
            <ShieldCheck size={12} /> INSTITUTIONAL GRADE SECURITY
          </span>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">Escrow & Payouts Infrastructure</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            To maintain the integrity of the Xentra365 marketplace, all transactions are processed through our proprietary multi-sig escrow system. This ensures both parties are protected and funds are only released upon successful delivery.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-5 flex gap-4">
             <div className="w-10 h-10 rounded-lg bg-[#12121D] flex items-center justify-center text-blue-400 shrink-0"><Database size={20}/></div>
             <div>
               <h4 className="text-sm font-bold text-white mb-1">Multi-Sig Vaults</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Funds are held in isolated, audited smart contracts, not in platform wallets.</p>
             </div>
          </div>
          <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-5 flex gap-4">
             <div className="w-10 h-10 rounded-lg bg-[#12121D] flex items-center justify-center text-[#A67CFF] shrink-0"><Scale size={20}/></div>
             <div>
               <h4 className="text-sm font-bold text-white mb-1">24h Dispute Resolution</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">Our legal team acts as an impartial arbitrator for any logistics discrepancies.</p>
             </div>
          </div>
        </div>

        <div className="mt-auto">
          <button onClick={() => navigate('/seller/onboarding/success')} className="w-full bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-4 rounded-xl transition-all shadow-lg text-sm tracking-wider uppercase">
            ACKNOWLEDGE ESCROW RULES
          </button>
          <p className="text-center text-[9px] font-bold text-gray-500 mt-4 uppercase tracking-wider">
            PROCEEDING CONFIRMS YOUR AGREEMENT TO THE SELLER TERMS OF SERVICE
          </p>
        </div>
      </div>

      {/* RIGHT DIAGRAM PANEL */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 relative bg-[#0A0A11]">
        
        <div className="absolute top-8 right-8 flex flex-col items-end">
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">ONBOARDING STATUS</span>
           <div className="flex items-center gap-2">
             <span className="text-sm font-bold text-white">Step 3 of 4</span>
             <div className="w-6 h-6 rounded-full border-2 border-[#4812B5] border-t-transparent animate-spin"></div>
           </div>
        </div>

        <div className="w-full max-w-3xl bg-[#12121D] border border-[#2A2A38] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
           <h3 className="text-[#A67CFF] font-bold tracking-[0.2em] text-xs uppercase mb-4">THE TRANSACTION LIFECYCLE</h3>
           <p className="text-gray-400 text-sm leading-relaxed mb-16 max-w-2xl">
             Xentra365 automates every stage of the exchange, providing real-time visibility and cryptographic proof of payment.
           </p>

           {/* The Diagram Flow */}
           <div className="relative flex justify-between items-start mb-20">
             {/* Background connecting line */}
             <div className="absolute top-8 left-10 right-10 h-0.5 bg-[#2A2A38] z-0"></div>
             
             {/* Step 1 */}
             <div className="relative z-10 flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-2xl bg-[#1E1E2C] border-2 border-blue-500 flex items-center justify-center text-blue-500 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Wallet size={24} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">BUYER PAYS</h4>
                <p className="text-[9px] text-gray-500">Funds are committed to the escrow contract.</p>
             </div>
             {/* Step 2 */}
             <div className="relative z-10 flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-2xl bg-[#1E1E2C] border-2 border-[#2A2A38] flex items-center justify-center text-gray-400 mb-4">
                  <Lock size={24} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">ESCROW HOLDS</h4>
                <p className="text-[9px] text-gray-500">Verification of proof-of-funds completed.</p>
             </div>
             {/* Step 3 */}
             <div className="relative z-10 flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-2xl bg-[#1E1E2C] border-2 border-[#2A2A38] flex items-center justify-center text-gray-400 mb-4">
                  <Truck size={24} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">SELLER SHIPS</h4>
                <p className="text-[9px] text-gray-500">Carrier tracking is linked to the order.</p>
             </div>
             {/* Step 4 */}
             <div className="relative z-10 flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-2xl bg-[#1E1E2C] border-2 border-[#2A2A38] flex items-center justify-center text-gray-400 mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">BUYER CONFIRMS</h4>
                <p className="text-[9px] text-gray-500">Recipient verifies item condition.</p>
             </div>
             {/* Step 5 */}
             <div className="relative z-10 flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-2xl bg-[#4812B5] flex items-center justify-center text-white mb-4 shadow-[0_0_20px_rgba(99,36,226,0.5)]">
                  <Wallet size={24} />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">ESCROW RELEASES</h4>
                <p className="text-[9px] text-gray-500">Funds transferred to your wallet.</p>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-8 border-t border-[#2A2A38] pt-8">
             <div className="flex gap-3">
               <ShieldCheck size={16} className="text-blue-500 shrink-0"/>
               <div>
                 <h4 className="text-xs font-bold text-white mb-1">FRAUD PREVENTION</h4>
                 <p className="text-[10px] text-gray-500 leading-relaxed">Every account is verified through biometric AI to prevent sybil attacks and protect our sellers.</p>
               </div>
             </div>
             <div className="flex gap-3">
               <RotateCcw size={16} className="text-emerald-500 shrink-0"/>
               <div>
                 <h4 className="text-xs font-bold text-white mb-1">INSTANT SETTLEMENT</h4>
                 <p className="text-[10px] text-gray-500 leading-relaxed">Once the buyer confirms receipt, our settlement engine processes your payout in under 60 seconds.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SellerEscrowGuide;