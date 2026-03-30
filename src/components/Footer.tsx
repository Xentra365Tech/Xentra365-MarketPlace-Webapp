import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  ShieldCheck, CreditCard
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0A0A11] border-t border-gray-200 dark:border-[#2A2A38] mt-auto w-full transition-colors duration-300">
      
      {/* RESPONSIVE: Tightened padding on mobile */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-10 lg:py-16">
        
        {/* RESPONSIVE: Changed from grid-cols-1 to grid-cols-2 on mobile, shrinking gaps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Column 1: Customer Service */}
          <div>
            <h4 className="text-[10px] sm:text-xs lg:text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-3 sm:mb-6">Let Us Help You</h4>
            <ul className="space-y-2 sm:space-y-4 text-[9px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">How to Shop on Xentra</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Delivery Options</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Corporate Purchasing</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Report a Product</Link></li>
            </ul>
          </div>

          {/* Column 2: About Company */}
          <div>
            <h4 className="text-[10px] sm:text-xs lg:text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-3 sm:mb-6">About Xentra365</h4>
            <ul className="space-y-2 sm:space-y-4 text-[9px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
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
            <h4 className="text-[10px] sm:text-xs lg:text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-3 sm:mb-6">Make Money With Us</h4>
            <ul className="space-y-2 sm:space-y-4 text-[9px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/seller/register" className="hover:text-[#6324E2] dark:hover:text-white transition-colors font-medium text-[#6324E2] dark:text-[#A67CFF]">Sell on Xentra365</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">International Seller</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Sales Consultant</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Logistics Partner</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Vendor Hub</Link></li>
            </ul>
          </div>

          {/* Column 4: International/Local */}
          <div>
            <h4 className="text-[10px] sm:text-xs lg:text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-3 sm:mb-6">Xentra Local</h4>
            <ul className="space-y-2 sm:space-y-4 text-[9px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Nigeria</Link></li>
              <li><Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Global</Link></li>
            </ul>
          </div>

          {/* Column 5: Socials & Contact (Spans full width on mobile to look balanced) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-start pt-4 sm:pt-0 border-t border-gray-200 dark:border-[#2A2A38] lg:border-none">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#6324E2] rounded-md sm:rounded-lg flex items-center justify-center font-bold text-sm sm:text-lg text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
              <span className="text-base sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Xentra365</span>
            </Link>
            <p className="text-[9px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-sm">
              The leading high-density marketplace. Protected by institutional-grade escrow.
            </p>
            
            <h4 className="text-[9px] sm:text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 sm:mb-4">Connect With Us</h4>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Facebook className="w-3 h-3 sm:w-[18px] sm:h-[18px]" fill="currentColor" /></button>
              <button className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Twitter className="w-3 h-3 sm:w-[18px] sm:h-[18px]" fill="currentColor" /></button>
              <button className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Instagram className="w-3 h-3 sm:w-[18px] sm:h-[18px]" /></button>
              <button className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors"><Youtube className="w-3 h-3 sm:w-[18px] sm:h-[18px]" fill="currentColor" /></button>
            </div>
          </div>

        </div>

        {/* Bottom Section: Payment Methods & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-[#2A2A38] flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Legal / Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2">
            <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider text-center lg:text-left">
              © 2026 XENTRA365 HOLDINGS LTD. ALL TRADES SECURED BY X-ESCROW PROTOCOL.
            </p>
            <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              SYSTEM STATUS: <span className="text-emerald-500 flex items-center gap-1"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500"></div> ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Payment Badges (Shrunk for mobile fit) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
            <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mr-1 sm:mr-2">Payment Methods:</span>
            
            <div className="bg-blue-900 text-white text-[8px] sm:text-[10px] font-black italic px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1">VISA</div>
            <div className="bg-red-600 text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1">
               <div className="flex -space-x-1 sm:-space-x-1.5"><div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mix-blend-multiply"/><div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mix-blend-multiply"/></div>
            </div>
            <div className="bg-red-500 text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded">VERVE</div>
            <div className="bg-emerald-600 text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1"><CreditCard className="w-2.5 h-2.5 sm:w-3 sm:h-3"/> Paystack</div>
            <div className="bg-[#6324E2] text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3"/> Escrow</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;