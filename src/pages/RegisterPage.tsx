import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

// Expanded list of countries for the dropdown
const COUNTRIES = [
  { code: '+1', flag: '🇺🇸', label: 'USA' },
  { code: '+234', flag: '🇳🇬', label: 'Nigeria' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+1', flag: '🇨🇦', label: 'Canada' },
  { code: '+61', flag: '🇦🇺', label: 'Australia' },
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+49', flag: '🇩🇪', label: 'Germany' },
  { code: '+33', flag: '🇫🇷', label: 'France' },
  { code: '+81', flag: '🇯🇵', label: 'Japan' },
  { code: '+86', flag: '🇨🇳', label: 'China' },
  { code: '+55', flag: '🇧🇷', label: 'Brazil' },
  { code: '+27', flag: '🇿🇦', label: 'South Africa' },
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+254', flag: '🇰🇪', label: 'Kenya' },
  { code: '+233', flag: '🇬🇭', label: 'Ghana' }
];

const RegisterPage = () => {
  // --- Form State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  // --- UI State ---
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  // --- Regex for Email Validation ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // It is invalid if they typed something, but it doesn't match the regex
  const isEmailInvalid = formData.email.length > 0 && !emailRegex.test(formData.email);

  // --- Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time password evaluation
    if (name === 'password') {
      evaluatePassword(value);
    }
  };

  const evaluatePassword = (password: string) => {
    let score = 0;
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    if (password.length >= 8) score += 1; // 1. Length > 8
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1; // 2. Upper & Lowercase
    if (/\d/.test(password)) score += 1; // 3. Numbers
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1; // 4. Special Characters

    setPasswordStrength(score);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailInvalid) return; // Prevent submission if email is bad
    
    console.log("Submitting New Account:", { 
      ...formData, 
      countryCode: selectedCountry.code 
    });
  };

  // --- Helpers for Password UI ---
  const getStrengthColor = (level: number) => {
    if (passwordStrength >= level) {
      if (passwordStrength === 1) return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';
      if (passwordStrength === 2) return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
      if (passwordStrength === 3) return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
      if (passwordStrength === 4) return 'bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.5)]';
    }
    return 'bg-gray-700';
  };

  const getStrengthLabel = () => {
    switch (passwordStrength) {
      case 1: return <span className="text-[10px] font-bold text-red-500 ml-2 tracking-wider">WEAK</span>;
      case 2: return <span className="text-[10px] font-bold text-yellow-500 ml-2 tracking-wider">FAIR</span>;
      case 3: return <span className="text-[10px] font-bold text-emerald-400 ml-2 tracking-wider">GOOD</span>;
      case 4: return <span className="text-[10px] font-bold text-emerald-600 ml-2 tracking-wider">STRONG</span>;
      default: return <span className="text-[10px] font-bold text-gray-500 ml-2 tracking-wider">SECURITY</span>;
    }
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
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="John Doe" 
              className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600"
            />
          </div>

          {/* Email Input (With Red Glow Logic) */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="name@example.com" 
              className={`w-full bg-[#1E1E2C] border rounded-lg px-4 py-3 text-white focus:outline-none transition-all placeholder-gray-600 ${
                isEmailInvalid 
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' 
                  : 'border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
              }`}
            />
            {isEmailInvalid && (
              <p className="text-[10px] text-red-500 mt-1.5 font-medium">Please enter a valid email address.</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
            <div className="flex flex-col sm:flex-row gap-2 relative">
              
              {/* Custom Country Dropdown */}
              <div className="relative w-full sm:w-36">
                <button 
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-[#1E1E2C] border border-gray-700 hover:border-gray-500 rounded-lg px-3 py-3 text-white flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span className="text-sm font-medium">{selectedCountry.code}</span>
                  </div>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu - Scrollable */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#2A2A38] border border-gray-700 rounded-lg shadow-2xl z-50 overflow-y-auto max-h-60 no-scrollbar">
                    {COUNTRIES.map((country, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-[#6324E2] flex items-center gap-3 transition-colors text-white border-b border-gray-700/50 last:border-0"
                      >
                        <span className="text-base leading-none">{country.flag}</span>
                        <span className="text-sm font-medium">{country.code}</span>
                        <span className="text-xs text-gray-400 ml-auto hidden sm:block">{country.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(555) 000-0000" 
                className="flex-1 bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 w-full"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative mb-2">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="••••••••" 
                className="w-full bg-[#1E1E2C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-gray-600 pr-12"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Dynamic Strength Indicator */}
            <div className="flex items-center gap-1.5 mb-1">
              {[1, 2, 3, 4].map((level) => (
                <div key={level} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${getStrengthColor(level)}`}></div>
              ))}
              {getStrengthLabel()}
            </div>
            <p className="text-[10px] text-gray-500 mt-1.5">Use 8+ characters, a mix of letters, numbers & symbols.</p>
          </div>

          <button 
            type="submit" 
            disabled={isEmailInvalid}
            className={`w-full font-semibold py-3.5 rounded-lg transition-all mt-6 shadow-lg active:scale-[0.98] ${
              isEmailInvalid 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-[#6324E2] hover:bg-[#501bb8] text-white shadow-purple-900/20'
            }`}
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
          <div className="relative px-4 bg-[#13131D] text-xs font-bold text-gray-500 uppercase tracking-wider">Or continue with</div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {['G', 'f', '⊞', ''].map((provider, i) => (
            <button key={i} type="button" className="w-10 h-10 rounded-full bg-[#1E1E2C] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 hover:bg-[#2A2A38] transition-all">
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