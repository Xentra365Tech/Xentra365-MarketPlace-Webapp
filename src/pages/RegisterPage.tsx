import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Eye, EyeOff, Loader2 } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

const COUNTRIES = [
  { code: '+1', label: 'USA' },
  { code: '+234', label: 'Nigeria' },
  { code: '+44', label: 'UK' },
  { code: '+61', label: 'Australia' },
  { code: '+91', label: 'India' }
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailInvalid = formData.email.length > 0 && !emailRegex.test(formData.email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'password') evaluatePassword(value);
  };

  const evaluatePassword = (password: string) => {
    let score = 0;
    if (!password) { setPasswordStrength(0); return; }
    if (password.length >= 8) score += 1; 
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1; 
    if (/\d/.test(password)) score += 1; 
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1; 
    setPasswordStrength(score);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailInvalid) return; 
    
    setIsLoading(true);
    // Simulate API registration, then push to Verify OTP screen
    setTimeout(() => {
      navigate('/verify');
    }, 1500);
  };

  const getStrengthColor = (level: number) => {
    if (passwordStrength >= level) {
      if (passwordStrength === 1) return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';
      if (passwordStrength === 2) return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
      if (passwordStrength === 3) return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
      if (passwordStrength === 4) return 'bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.5)]';
    }
    return 'bg-gray-700';
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
            <input 
              type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required disabled={isLoading}
              placeholder="John Doe" className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" name="email" value={formData.email} onChange={handleInputChange} required disabled={isLoading}
              placeholder="name@example.com" 
              className={`w-full bg-[#1E1E2C] border rounded-lg px-4 py-3 text-white focus:outline-none transition-all placeholder-gray-600 disabled:opacity-50 ${
                isEmailInvalid ? 'border-red-500 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'border-gray-700 focus:border-purple-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
            <div className="flex flex-col sm:flex-row gap-2 relative">
              <div className="relative w-full sm:w-32">
                <button 
                  type="button" onClick={() => !isLoading && setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-[#1E1E2C] border border-gray-700 hover:border-gray-500 rounded-lg px-3 py-3 text-white flex items-center justify-between transition-all disabled:opacity-50"
                >
                  <span className="text-sm font-medium">{selectedCountry.code}</span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#2A2A38] border border-gray-700 rounded-lg shadow-2xl z-50 overflow-y-auto max-h-60 no-scrollbar">
                    {COUNTRIES.map((country, index) => (
                      <button
                        key={index} type="button"
                        onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2.5 hover:bg-[#6324E2] text-sm font-medium text-white border-b border-gray-700/50 last:border-0"
                      >
                        {country.code} <span className="text-xs text-gray-400 ml-2">{country.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input 
                type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required disabled={isLoading}
                placeholder="(555) 000-0000" className="flex-1 bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 w-full disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative mb-2">
              <input 
                type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} required disabled={isLoading}
                placeholder="••••••••" className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 pr-12 disabled:opacity-50"
              />
              <button 
                type="button" onClick={() => setShowPassword(!showPassword)} disabled={isLoading}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex items-center gap-1.5 mb-1">
              {[1, 2, 3, 4].map((level) => (
                <div key={level} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${getStrengthColor(level)}`}></div>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isEmailInvalid || isLoading}
            className={`w-full font-semibold py-3.5 rounded-lg transition-all mt-6 shadow-lg flex items-center justify-center gap-2 ${
              isEmailInvalid || isLoading ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-[#6324E2] hover:bg-[#501bb8] text-white shadow-purple-900/20 active:scale-[0.98]'
            }`}
          >
            {isLoading ? <><Loader2 className="animate-spin" size={18} /> Creating Account...</> : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
          <div className="relative px-4 bg-[#13131D] text-xs font-bold text-gray-500 uppercase tracking-wider">Or continue with</div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {[
            { name: 'Google', src: '/google.svg' },
            { name: 'Facebook', src: '/facebook.svg' },
            { name: 'Outlook', src: '/outlook.svg' },
            { name: 'Apple', src: '/apple.svg' }
          ].map((provider, i) => (
            <button key={i} type="button" disabled={isLoading} className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gray-500 hover:bg-[#2A2A38] transition-all overflow-hidden disabled:opacity-50">
               <img src={provider.src} alt={`${provider.name} icon`} className={`w-5 h-5 object-contain ${provider.name === 'Apple' ? 'invert' : ''}`} />
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