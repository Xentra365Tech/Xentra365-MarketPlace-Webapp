import React from 'react';
import AuthLayout from '../components/AuthLayout';

const VerifyPage = () => {
  const EnvelopeIcon = (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 14l2 2 4-4"></path>
    </svg>
  );

  return (
    <>
      {/* Toast Notification positioned at top (from the 3rd design) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#13131D] border border-[#6324E2] rounded-full px-6 py-2 flex items-center gap-3 z-50 shadow-lg">
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
           <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span className="text-white text-sm font-medium">Code resent successfully to your email</span>
      </div>

      <AuthLayout 
        leftIcon={EnvelopeIcon}
        leftTitle="Verify your identity"
        leftSubtitle="We've sent a secure authentication code to protect your assets."
      >
        <div className="w-full">
          <h1 className="text-3xl font-bold text-white mb-2">Verify Your Account</h1>
          <p className="text-gray-400 text-sm mb-10">Enter the 6-digit code sent to your email.</p>

          <form className="space-y-8">
            {/* 6-Digit OTP Inputs */}
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <input 
                  key={index}
                  type="text" 
                  maxLength={1}
                  placeholder="-"
                  className="w-12 h-14 bg-[#1E1E2C] border border-gray-800 rounded-lg text-center text-white text-xl focus:outline-none focus:border-purple-500 focus:bg-[#2A2A38] transition-all placeholder-gray-600"
                />
              ))}
            </div>

            <button type="submit" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-semibold py-3.5 rounded-lg transition-colors">
              Verify Code
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            Didn't receive code? <button className="text-blue-500 font-medium hover:text-blue-400 transition-colors">Resend</button>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default VerifyPage;