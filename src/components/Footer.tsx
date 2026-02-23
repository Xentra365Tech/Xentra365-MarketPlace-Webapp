import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A11] border-t border-[#2A2A38] mt-auto w-full">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
              <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-sm">
              The world's leading high-density marketplace for enterprise hardware and industrial services. Protected by institutional-grade escrow.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6324E2] transition-colors"><Facebook size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6324E2] transition-colors"><Twitter size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6324E2] transition-colors"><Mail size={18} /></button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider mb-6">MARKETPLACE</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/search" className="hover:text-white transition-colors">All Categories</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">Verified Sellers</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">Flash Sales</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">Service Level Agreements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider mb-6">SECURITY</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-white transition-colors">Escrow Protection</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Conflict Resolution</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Identity Verification</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Fraud Prevention</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Community Forum</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Status Board</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#2A2A38] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">© 2026 XENTRA365 HOLDINGS LTD. ALL TRADES SECURED BY X-ESCROW PROTOCOL.</p>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            SYSTEM STATUS: <span className="text-emerald-500 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;