import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const LoginPage = () => {
 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false
  });

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to backend here later
    console.log("Login Submitting:", formData);
  };

  const ShieldIcon = (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  );

  return (
    <AuthLayout 
      leftIcon={ShieldIcon}
      leftTitle="Securing your marketplace assets"
      leftSubtitle="Multi-layered protection powered by Xentra365 protocols."
    >
      <div className="w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center lg:text-left">Welcome Back</h1>
        <p className="text-gray-400 text-sm mb-8 text-center lg:text-left">Enter your credentials to access your account.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email or Phone</label>
            <input 
              type="text" 
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              required
              placeholder="name@company.com" 
              className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="••••••••" 
                className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600 pr-16"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-gray-700 bg-[#1E1E2C] text-purple-600 focus:ring-purple-500" 
              />
              <span className="text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 font-medium hover:text-blue-400 transition-colors">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-semibold py-3.5 rounded-lg transition-colors mt-2">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
          <div className="relative px-4 bg-[#13131D] text-xs font-bold text-gray-500 uppercase tracking-wider">Or continue with</div>
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-4 mb-8">
          {['G', 'f', '⊞', ''].map((provider, i) => (
            <button key={i} type="button" className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 hover:bg-[#2A2A38] transition-all">
              {provider}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          Don't have an account? <Link to="/register" className="text-blue-500 font-medium hover:text-blue-400 transition-colors">Create Account</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;