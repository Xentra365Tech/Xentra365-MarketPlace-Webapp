import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/xentra.png";

interface AuthLayoutProps {
  children: React.ReactNode;
  leftIcon: React.ReactNode;
  leftTitle: string;
  leftSubtitle: string;
}

const AuthLayout = ({ children, leftIcon, leftTitle, leftSubtitle }: AuthLayoutProps) => {
  return (
    <div className="w-screen min-h-screen dark:bg-purple-700 bg-purple-700 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      
      {/* Back to Home Button */}
      <Link to="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 flex hover:bg-black items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm font-medium z-10 shadow-lg border border-white/10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Home
      </Link>

      {/* Main Card Container */}
      <div className="flex flex-col lg:flex-row dark:bg-[#13131D] bg-gray-50 rounded-3xl overflow-hidden max-w-[1000px] w-full shadow-2xl mt-12 sm:mt-0">
        
        {/* Left Panel */}
        <div className="w-full lg:w-[45%] dark:bg-[#1E1E2C] bg-gray-50 p-8 lg:p-12 hidden lg:flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#2A2A38] rounded-full flex items-center justify-center mb-6 lg:mb-8 text-white">
            {leftIcon}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold dark:text-white text-gray-950 mb-3 lg:mb-4 leading-tight">{leftTitle}</h2>
          <p className="text-gray-400 text-sm lg:text-base">{leftSubtitle}</p>
        </div>

        {/* Right Panel - Form Area */}
        <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 lg:mb-10">
             <img src={logo} alt="Xentra365 Logo" className="w-20 h-20" />
             {/* <span className="text-white font-bold text-xl">Xentra365</span> */}
          </div>
          
          {/* Form Content Injected Here */}
          <div className="flex-grow flex flex-col justify-center">
            {children}
          </div>

          {/* Footer - Centered now that Escrow is removed */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium text-center">
             <div className="flex gap-6">
               <a href="#" className="hover:text-white transition-colors">Support</a>
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="absolute bottom-6 text-[10px] sm:text-xs dark:text-white/50 text-gray-500 text-center w-full px-4">
        © 2026 Xentra365 Digital Marketplace. All rights reserved.
      </div>
    </div>
  );
};

export default AuthLayout;