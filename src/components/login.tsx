import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", email);
    // Add Supabase auth logic here later
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-white selection:bg-electric-blue/30">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-white/5 px-6 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            {/* Logo SVG */}
            <svg fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">Xentra365</h1>
        </div>
        <div className="hidden md:flex gap-6">
          <Link to="/help" className="text-white/60 hover:text-white text-sm transition-colors">Help Center</Link>
          <Link to="/safety" className="text-white/60 hover:text-white text-sm transition-colors">Safety Guide</Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Login Card */}
        <div className="w-full max-w-[440px] bg-[#1C1C36]/40 backdrop-blur-md border border-white/5 rounded-xl p-8 md:p-10 shadow-2xl relative z-10 border-t border-t-primary/40">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary/20 p-3 rounded-lg mb-4">
              {/* Lock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold text-center">Secure Access</h2>
            <p className="text-white/50 text-sm mt-2">Log in to your marketplace dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="email">Email or Phone Number</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-charcoal-field border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:ring-1 focus:ring-electric-blue focus:border-electric-blue transition-all placeholder:text-white/20"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-white/70 text-sm font-medium" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-electric-blue hover:text-electric-blue/80 text-xs font-medium transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-charcoal-field border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:ring-1 focus:ring-electric-blue focus:border-electric-blue transition-all placeholder:text-white/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? (
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                     </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.44 0 .87-.03 1.28-.09"/><line x1="2" x2="22" y1="2" y2="22"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 py-1">
              <input
                id="remember"
                type="checkbox"
                className="rounded border-white/10 bg-charcoal-field text-primary focus:ring-primary focus:ring-offset-background-dark w-4 h-4"
              />
              <label htmlFor="remember" className="text-white/50 text-xs cursor-pointer select-none">Keep me logged in for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              Login to Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-electric-blue font-semibold hover:underline decoration-2 underline-offset-4">Create Account</Link>
            </p>
          </div>

          {/* Escrow Badge */}
          <div className="mt-10 flex items-center justify-center gap-3 border-t border-white/5 pt-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="text-[11px] font-bold text-white uppercase tracking-widest">Escrow Protected</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="text-[11px] font-bold text-white uppercase tracking-widest">SSL Encrypted</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4">
          <Link to="/help" className="text-white/30 hover:text-white/60 text-xs transition-colors">Help Center</Link>
          <Link to="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="text-white/30 hover:text-white/60 text-xs transition-colors">Cookie Settings</Link>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium">© 2026 Xentra365 Marketplace Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;