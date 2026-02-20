import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

const VerifyPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showToast, setShowToast] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    if (pastedData.some(char => isNaN(Number(char)))) return;

    const newOtp = [...otp];
    pastedData.forEach((char, i) => { if (i < 6) newOtp[i] = char; });
    setOtp(newOtp);

    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification, then push to Dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleResend = () => {
    if (isLoading) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const EnvelopeIcon = (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 14l2 2 4-4"></path>
    </svg>
  );

  return (
    <>
      <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#13131D] border border-[#6324E2] rounded-full px-6 py-2.5 flex items-center gap-3 z-50 shadow-2xl transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
           <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span className="text-white text-sm font-medium">Code resent successfully to your email</span>
      </div>

      <AuthLayout leftIcon={EnvelopeIcon} leftTitle="Verify your identity" leftSubtitle="We've sent a secure authentication code to protect your assets.">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center lg:text-left">Verify Your Account</h1>
          <p className="text-gray-400 text-sm mb-10 text-center lg:text-left">Enter the 6-digit code sent to your email.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between gap-2 max-w-sm mx-auto lg:mx-0">
              {otp.map((digit, index) => (
                <input 
                  key={index} ref={(el) => { inputRefs.current[index] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit}
                  onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} onPaste={handlePaste} disabled={isLoading} placeholder="-"
                  className="w-10 h-12 sm:w-12 sm:h-14 bg-[#1E1E2C] border border-gray-700 rounded-lg text-center text-white text-xl focus:outline-none focus:border-purple-500 focus:bg-[#2A2A38] focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600 disabled:opacity-50"
                />
              ))}
            </div>

            <button 
              type="submit" 
              disabled={isLoading || otp.join('').length < 6}
              className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-semibold py-3.5 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <><Loader2 className="animate-spin" size={18} /> Verifying...</> : 'Verify Code'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            Didn't receive code? <button type="button" onClick={handleResend} disabled={isLoading} className="text-blue-500 font-medium hover:text-blue-400 transition-colors disabled:opacity-50">Resend</button>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/login" className="text-xs text-gray-500 hover:text-white transition-colors">Back to Login</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default VerifyPage;