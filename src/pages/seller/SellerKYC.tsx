import { Link, useNavigate } from 'react-router-dom';
import { UserCheck, UploadCloud, AlertCircle } from 'lucide-react';

const SellerKYC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/seller/onboarding/escrow');
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] flex text-white font-sans">
      {/* LEFT PROMO PANEL */}
      <div className="hidden lg:flex w-1/3 bg-[#12121D] border-r border-[#2A2A38] p-12 flex-col relative shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-16 w-max">
          <div className="w-8 h-8 bg-[#6324E2] text-white rounded flex items-center justify-center font-bold text-lg">X</div>
          <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
          <span className="ml-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">SELLER ONBOARDING</span>
        </Link>

        <div className="mb-8">
          <span className="text-[#A67CFF] text-[10px] font-bold uppercase tracking-wider mb-2 block">STEP 2 OF 4</span>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">Identity & Trust Verification</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            We require KYC (Know Your Customer) documentation to comply with international trade regulations and ensure secure payouts.
          </p>
        </div>

        <div className="space-y-6 flex-1">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span>ONBOARDING PROGRESS</span>
            <span className="text-[#A67CFF]">35%</span>
          </div>
          <div className="w-full bg-[#1E1E2C] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#4812B5] h-full w-[35%]"></div>
          </div>

          <div className="space-y-4 mt-10">
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center"><div className="w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5"></div></div>
              <span className="text-sm font-bold text-white">Account Basics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#4812B5] flex items-center justify-center text-[10px] font-bold">2</div>
              <div>
                <span className="text-sm font-bold text-white block">KYC Verification</span>
                <span className="text-[10px] text-[#A67CFF] font-bold uppercase tracking-wider">ACTIVE STEP</span>
              </div>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center"></div>
              <span className="text-sm font-bold text-gray-400">Escrow Configuration</span>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4 flex gap-3">
          <UserCheck size={20} className="text-blue-400 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-white mb-1">COMPLIANCE PROTOCOL</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed">KYC is required for payouts and high-volume trading. Your data is encrypted with AES-256 standards.</p>
          </div>
        </div>
      </div>

      {/* RIGHT WIZARD PANEL */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative bg-[#0A0A11] overflow-y-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          
          <div className="flex items-center justify-between mb-8 border-b border-[#2A2A38] pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2"><UserCheck size={20} className="text-blue-500"/> KYC & Verification Form</h2>
            <span className="border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              VERIFIED STATUS: PENDING
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-white">Government-Issued ID</label>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">PASSPORT, DRIVER'S LICENSE</span>
              </div>
              <div className="border-2 border-dashed border-[#2A2A38] hover:border-[#4812B5] bg-[#12121D] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
                <UploadCloud size={24} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-white mb-1">Click to upload front & back</span>
                <span className="text-xs text-gray-500">Maximum file size: 10MB (PDF, PNG, JPG)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-white">Proof of Address</label>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">UTILITY BILL (&lt; 3 MONTHS)</span>
              </div>
              <div className="border-2 border-dashed border-[#2A2A38] hover:border-[#4812B5] bg-[#12121D] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
                <div className="w-8 h-8 bg-[#1E1E2C] rounded-full flex items-center justify-center text-blue-500 mb-2"><UserCheck size={14}/></div>
                <span className="text-sm font-bold text-white mb-1">Upload residential proof</span>
                <span className="text-xs text-gray-500">Documents must clearly show your full name and address</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">TAX IDENTIFICATION NUMBER (OPTIONAL)</label>
                <input type="text" placeholder="e.g. EIN or VAT ID" className="w-full bg-[#12121D] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">DATE OF BIRTH</label>
                <input type="date" className="w-full bg-[#12121D] border border-[#2A2A38] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4812B5] text-white" required />
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex gap-3">
              <AlertCircle size={20} className="text-orange-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-orange-500 mb-1">Manual Review Process</h4>
                <p className="text-[10px] text-orange-200/70 leading-relaxed">Our compliance team typically reviews documents within 12-24 business hours. You will receive an email notification once your status changes to 'Verified'.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#2A2A38]">
              <button type="button" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">SAVE AS DRAFT</button>
              <div className="flex gap-4">
                <button type="button" onClick={() => navigate(-1)} className="text-sm font-bold text-gray-400 hover:text-white transition-colors px-4">BACK</button>
                <button type="submit" className="bg-[#4812B5] hover:bg-[#3A0CA3] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-sm">
                  SUBMIT DOCUMENTS
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerKYC;