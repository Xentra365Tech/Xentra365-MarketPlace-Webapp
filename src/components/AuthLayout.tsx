import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  leftIcon: React.ReactNode;
  leftTitle: string;
  leftSubtitle: string;
}

const AuthLayout = ({ children, leftIcon, leftTitle, leftSubtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-screen bg-purple-700 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      
      {/* Back to Home Button */}
      <Link to="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm font-medium z-10 shadow-lg border border-white/10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Home
      </Link>

      {/* Main Card Container */}
      <div className="flex flex-col lg:flex-row bg-[#13131D] rounded-3xl overflow-hidden max-w-[1000px] w-full shadow-2xl mt-12 sm:mt-0">
        
        {/* Left Panel - Stacks on mobile, side-by-side on desktop */}
        <div className="w-full lg:w-[45%] bg-[#1E1E2C] p-8 lg:p-12 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#2A2A38] rounded-full flex items-center justify-center mb-6 lg:mb-8 text-white">
            {leftIcon}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4 leading-tight">{leftTitle}</h2>
          <p className="text-gray-400 text-sm lg:text-base mb-8 lg:mb-12">{leftSubtitle}</p>
          
          <div className="mt-auto px-4 lg:px-6 py-2 lg:py-3 bg-[#13131D] rounded-full border border-gray-700 flex items-center gap-2">
            <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-[10px] lg:text-xs font-bold text-white tracking-widest uppercase">Trusted Connection</span>
          </div>
        </div>

        {/* Right Panel - Form Area */}
        <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 lg:mb-10">
             <div className="w-8 h-8 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-white">X</div>
             <span className="text-white font-bold text-xl">Xentra365</span>
          </div>
          
          {/* Form Content Injected Here */}
          <div className="flex-grow flex flex-col justify-center">
            {children}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium text-center sm:text-left">
             <div className="flex items-center gap-2">
                <span>🔒 ESCROW PROTECTED</span>
             </div>
             <div className="flex gap-4 sm:gap-6">
               <a href="#" className="hover:text-white transition-colors">Support</a>
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="absolute bottom-4 text-[10px] sm:text-xs text-white/50 text-center w-full px-4">
        © 2026 Xentra365 Digital Marketplace. All rights reserved.
      </div>
    </div>
  );
};

export default AuthLayout;