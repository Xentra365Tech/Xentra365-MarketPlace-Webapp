import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  ShieldCheck, CreditCard
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0A0A11] border-t border-gray-200 dark:border-[#2A2A38] mt-auto w-full transition-colors duration-300">
      
      {/* Top Banner (Optional Newsletter/App Promo) */}
      {/* <div className="bg-[#6324E2] dark:bg-[#1E1E2C] border-b border-[#501bb8] dark:border-[#2A2A38] transition-colors">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Shop on the go</h3>
              <p className="text-sm text-white/80">Download the Xentra365 App for exclusive mobile deals.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors font-bold text-sm">
              <Apple size={20} fill="currentColor" /> App Store
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors font-bold text-sm">
              <PlayCircle size={20} fill="currentColor" /> Google Play
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-10 lg:py-16">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Customer Service */}
          <div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-6">Let Us Help You</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">How to Shop on Xentra</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Delivery Options & Timelines</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">How to Return a Product</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Corporate & Bulk Purchasing</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Report a Product</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Dispute Resolution</Link></li>
            </ul>
          </div>

          {/* Column 2: About Company */}
          <div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-6">About Xentra365</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Privacy Notice</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Billing Policy</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Flash Sales Terms</Link></li>
            </ul>
          </div>

          {/* Column 3: Make Money */}
          <div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-6">Make Money With Us</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/seller/register" className="hover:text-[#6324E2] dark:hover:text-white transition-colors font-medium text-[#6324E2] dark:text-[#A67CFF]">Sell on Xentra365</Link></li>
               <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Become an International Seller</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Become a Sales Consultant</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Become a Logistics Partner</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Vendor Hub</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Column 4: International/Local */}
          <div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-6">Xentra Local</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Nigeria (Local)</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra International (Global)</Link></li>
            </ul>
          </div>

          {/* Column 5: Socials & Contact */}
          <div className="xl:col-span-1 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Xentra365</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-sm">
              The leading high-density marketplace. Protected by institutional-grade escrow.
            </p>
            
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect With Us</h4>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Facebook size={18} fill="currentColor" /></button>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Twitter size={18} fill="currentColor" /></button>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Instagram size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Youtube size={18} fill="currentColor" /></button>
            </div>
          </div>

        </div>

        {/* Bottom Section: Payment Methods & Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-[#2A2A38] flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Legal / Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider text-center lg:text-left">
              © 2026 XENTRA365 HOLDINGS LTD. ALL TRADES SECURED BY X-ESCROW PROTOCOL.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              SYSTEM STATUS: <span className="text-emerald-500 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Payment Badges (Mocked with styled text/icons to look like Jumia's bottom row) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mr-2">Payment Methods & Trust:</span>
            
            <div className="bg-blue-900 text-white text-[10px] font-black italic px-3 py-1.5 rounded flex items-center gap-1">VISA</div>
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1">
               <div className="flex -space-x-1.5"><div className="w-3 h-3 rounded-full bg-red-500 mix-blend-multiply"/><div className="w-3 h-3 rounded-full bg-yellow-500 mix-blend-multiply"/></div> mastercard
            </div>
            <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded">VERVE</div>
            <div className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1"><CreditCard size={12}/> Paystack</div>
            <div className="bg-[#6324E2] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1"><ShieldCheck size={12}/> Escrow</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;