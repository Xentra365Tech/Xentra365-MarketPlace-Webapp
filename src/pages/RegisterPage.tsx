import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const RegisterPage = () => {
  const StoreIcon = (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
    </svg>
  );

  return (
    <AuthLayout 
      leftIcon={StoreIcon}
      leftTitle="Join the next generation marketplace"
      leftSubtitle="Redefining digital trade with uncompromising security."
    >
      <div className="w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center lg:text-left">Create Account</h1>
        <p className="text-gray-400 text-sm mb-8 text-center lg:text-left">Fill in your details to start trading securely.</p>

        <form className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="bg-[#1E1E2C] border border-gray-700 rounded-lg px-3 py-3 text-white flex items-center justify-between sm:justify-start gap-2 cursor-pointer w-full sm:w-28">
                <div className="flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span className="text-sm">+1</span>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <input 
                type="tel" 
                placeholder="(555) 000-0000" 
                className="flex-1 bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 w-full"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 mb-2"
            />
            {/* Strength Indicator */}
            <div className="flex items-center gap-1 mb-1">
              <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
              <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
              <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-700 rounded-full"></div>
              <span className="text-[10px] font-bold text-green-500 ml-2 tracking-wider whitespace-nowrap">STRONG</span>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-semibold py-3.5 rounded-lg transition-colors mt-4">
            Create Account
          </button>
        </form>

        <div className="mt-6 mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
          <div className="relative px-4 bg-[#13131D] text-xs font-bold text-gray-500 uppercase tracking-wider">Or continue with</div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {['G', 'f', '⊞', ''].map((provider, i) => (
            <button key={i} className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              {provider}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-500 font-medium hover:text-blue-400 transition-colors">Login here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;