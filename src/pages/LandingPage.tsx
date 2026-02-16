import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/mockData";
import { Sun, Moon } from "lucide-react";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Helper to filter products for the new sections
  const getProductsByCategory = (cat: string) => PRODUCTS.filter(p => p.category === cat).slice(0, 4);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen dark:bg-[#111126] bg-slate-50 text-slate-900 dark:text-slate-100 font-sans selection:bg-[#477cff] selection:text-white overflow-x-hidden transition-colors duration-300">
        
        {/* --- Header (Fixed Full Width) --- */}
        <header className="sticky top-0 z-50 bg-[#5702d4] text-white shadow-2xl border-b border-white/10 w-full">
          <div className="w-full px-4 md:px-6 h-16 flex items-center justify-between gap-4">
            
            {/* Logo & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1 rounded-md hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#5702d4] text-2xl md:text-3xl">security</span>
                </div>
                <span className="text-lg md:text-2xl font-bold tracking-tight hidden sm:block">Xentra<span className="text-[#477cff]">365</span></span>
              </div>
            </div>
            
            {/* Search Bar - Full Width on Desktop */}
            <div className="hidden md:block flex-1 max-w-2xl relative mx-4">
              <input 
                  className="w-full bg-[#111126]/20 border border-white/10 rounded-full py-2.5 pl-5 pr-12 text-white placeholder-white/70 focus:ring-2 focus:ring-[#477cff] focus:bg-[#111126]/40 outline-none transition-all text-sm" 
                  placeholder="Search products, brands, or categories..." 
                  type="text"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#477cff] p-1.5 rounded-full hover:bg-white hover:text-[#5702d4] transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">search</span>
              </button>
            </div>

            {/* Right Icons & Auth Navigation */}
            <nav className="flex items-center gap-3 md:gap-5">
              {/* Theme Toggle Button */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1.5 md:p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center text-white"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link to="/dashboard" className="flex flex-col items-center group hidden sm:flex">
                  <span className="material-symbols-outlined text-white group-hover:text-[#477cff] transition-colors text-xl md:text-2xl">shopping_cart</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider hidden md:block">Cart</span>
              </Link>

              {/* Updated Auth Navigation */}
              <div className="flex items-center gap-2 md:gap-3">
                <Link to="/login" className="text-white hover:text-slate-300 text-xs md:text-sm font-bold transition-colors hidden sm:block">
                    Sign In
                </Link>
                <Link to="/register" className="bg-white text-[#5702d4] px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap">
                    Create Account
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* --- Category Nav (Scrollable & Sticky) --- */}
        <div className="bg-white dark:bg-[#1a1a35] border-b border-slate-200 dark:border-[#2f273a] sticky top-16 z-40 w-full shadow-md transition-colors duration-300">
          <div className="w-full px-4 md:px-6 h-12 flex items-center gap-6 overflow-x-auto no-scrollbar">
              <a href="#" className="text-[#477cff] font-bold text-sm whitespace-nowrap border-b-2 border-[#477cff] h-full flex items-center">Home</a>
              {['Electronics', 'Fashion', 'Industrial', 'Software', 'AI'].map((cat) => (
                  <a key={cat} href={`#${cat.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-[#5702d4] dark:hover:text-white text-sm font-medium whitespace-nowrap transition-colors scroll-smooth">
                      {cat}
                  </a>
              ))}
              <div className="flex-grow"></div>
              <Link to="/trust" className="hidden md:flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                  <span className="material-symbols-outlined text-sm">verified_user</span> Trust Center
              </Link>
          </div>
        </div>

        {/* --- Main Content (Full Width) --- */}
        <main className="w-full px-4 md:px-6 py-6 space-y-12">
          
          {/* 1. Hero Section */}
          <section className="flex flex-col lg:grid lg:grid-cols-12 gap-6 w-full">
              
              {/* Sidebar (Desktop Only) */}
              <div className="hidden lg:block lg:col-span-2 bg-white dark:bg-[#1a1a35] border border-slate-200 dark:border-[#2f273a] rounded-xl p-4 h-fit sticky top-32 transition-colors duration-300 shadow-sm">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[#5702d4]">menu</span> Categories
                  </h3>
                  <ul className="space-y-1">
                      {['Women\'s Clothing', 'Smart Devices', 'Luxury Goods', 'Gaming Gear', 'Beauty Care', 'Home Decor'].map((item) => (
                          <li key={item} className="flex justify-between items-center p-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#5702d4] dark:hover:text-white rounded-lg cursor-pointer transition-colors group">
                              {item} <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100">chevron_right</span>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Banner (Fixed Responsiveness: w-full instead of w-[380px]) */}
              <div className="w-full lg:col-span-10 relative h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group bg-slate-900 dark:bg-[#111126]">
                  <img 
                      alt="Hero" 
                      className="w-full h-full object-cover rounded-md opacity-60 transition-transform duration-700 group-hover:scale-105" 
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 dark:from-[#111126] via-slate-900/60 dark:via-[#111126]/60 to-transparent flex flex-col justify-center p-6 md:p-16">
                      <span className="bg-[#477cff] text-white px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4 shadow-lg shadow-[#477cff]/20">EXCLUSIVE LAUNCH</span>
                      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                          Secure Your<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Next Tech Upgrade.</span>
                      </h1>
                      <p className="text-slate-200 dark:text-slate-300 mb-8 max-w-xl text-base md:text-lg leading-relaxed">
                          100% Escrow protected transactions. Verified sellers only. Shop with zero risk on Xentra365.
                      </p>
                      <Link to="/dashboard" className="bg-[#5702d4] hover:bg-[#4a02b3] text-white px-8 py-4 rounded-lg font-bold w-fit shadow-xl shadow-[#5702d4]/30 transition-all active:scale-95 text-sm md:text-base">
                          Start Shopping
                      </Link>
                  </div>
              </div>
          </section>

          {/* 2. Flash Sale Section */}
          <section className="grid grid-cols-1 xl:grid-cols-4 gap-6 w-full">
              <div className="xl:col-span-3 bg-white dark:bg-[#1a1a35] border border-slate-200 dark:border-[#2f273a] rounded-2xl p-6 transition-colors duration-300 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                      <div className="flex items-center gap-4">
                          <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                              <span className="material-symbols-outlined text-orange-500 fill-current">bolt</span> Flash Sale
                          </h2>
                          {/* Timer */}
                          <div className="flex items-center gap-1.5">
                              <span className="bg-slate-100 dark:bg-[#111126] text-slate-800 dark:text-white px-2 py-1 rounded text-xs font-mono border border-slate-200 dark:border-[#2f273a]">04</span>
                              <span className="text-slate-400 dark:text-slate-500">:</span>
                              <span className="bg-slate-100 dark:bg-[#111126] text-slate-800 dark:text-white px-2 py-1 rounded text-xs font-mono border border-slate-200 dark:border-[#2f273a]">22</span>
                              <span className="text-slate-400 dark:text-slate-500">:</span>
                              <span className="bg-slate-100 dark:bg-[#111126] text-slate-800 dark:text-white px-2 py-1 rounded text-xs font-mono border border-slate-200 dark:border-[#2f273a]">59</span>
                          </div>
                      </div>
                      <a href="#" className="text-[#477cff] text-xs font-bold hover:underline">View All</a>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="group cursor-pointer">
                              <div className="relative aspect-square rounded-xl bg-slate-100 dark:bg-[#111126] border border-slate-200 dark:border-[#2f273a] overflow-hidden mb-3">
                                  <img 
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                      src={`https://images.unsplash.com/photo-${i === 1 ? '1523275335684-37898b6baf30' : i === 2 ? '1542291026-7eec264c27ff' : i === 3 ? '1505740420928-5e560c06d30e' : i === 4 ? '1589492477829-d0f992a82054' : '1550745165-9bc0b252726f'}?w=300&auto=format&fit=crop`}
                                      alt="Product"
                                  />
                                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">
                                      -{15 * i}%
                                  </div>
                              </div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">${(299 - (i * 50)).toFixed(2)}</p>
                              <div className="w-full h-1.5 bg-slate-200 dark:bg-[#111126] rounded-full overflow-hidden border border-slate-200 dark:border-[#2f273a]">
                                  <div className="h-full bg-orange-500" style={{ width: `${80 - (i * 15)}%` }}></div>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-1">{80 - (i * 15)}% Sold</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Why Xentra Box (Stays strictly brand colored) */}
              <div className="xl:col-span-1 bg-gradient-to-br from-[#5702d4] to-indigo-900 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between min-h-[300px]">
                  <div>
                      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#477cff]">verified</span> Why Xentra365?
                      </h2>
                      <div className="space-y-5">
                          <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-sm">gavel</span>
                              </div>
                              <div>
                                  <h4 className="font-bold text-sm">Xentra Escrow</h4>
                                  <p className="text-[10px] text-slate-300 leading-tight">Funds held securely until confirmation.</p>
                              </div>
                          </div>
                          <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-sm">check_circle</span>
                              </div>
                              <div>
                                  <h4 className="font-bold text-sm">Verified Merchants</h4>
                                  <p className="text-[10px] text-slate-300 leading-tight">Rigorous identity & quality audits.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                          <p className="text-[10px] uppercase font-bold tracking-widest text-blue-200 mb-1">Total Secured Volume</p>
                          <p className="text-2xl md:text-3xl font-black tracking-tight">$12,450,293</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* 3. Recommended Section */}
          <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#477cff]">auto_awesome</span> Recommended For You
                  </h2>
                  <div className="flex gap-2">
                      <button className="px-4 py-1.5 bg-white dark:bg-[#1a1a35] text-slate-900 dark:text-white border border-slate-300 dark:border-[#2f273a] rounded-full text-xs font-bold hover:border-[#477cff] dark:hover:border-[#477cff] transition-colors shadow-sm">Personalized</button>
                      <button className="px-4 py-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full text-xs font-bold transition-colors">New Arrivals</button>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {PRODUCTS.slice(0, 5).map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </section>

          {/* Sections... */}
          {['electronics', 'fashion', 'industrial'].map((category) => (
            <section key={category} id={category} className="pt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 capitalize">
                        <span className="material-symbols-outlined text-[#5702d4]">
                          {category === 'electronics' ? 'devices' : category === 'fashion' ? 'checkroom' : 'factory'}
                        </span> {category}
                    </h2>
                    <Link to={`/dashboard/${category}`} className="text-sm font-bold text-[#477cff] hover:text-[#325ec8] dark:hover:text-white">View All</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getProductsByCategory(category).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
          ))}

          {/* 7. Trust Banner */}
          <section className="bg-white dark:bg-[#1a1a35] border border-slate-200 dark:border-[#2f273a] shadow-sm rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden mt-12 transition-colors duration-300">
              <div className="relative z-10 flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">Worry-Free Shopping with <span className="text-[#5702d4]">Xentra Escrow</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6 max-w-xl">We hold the payment securely in our vault until you receive your order and verify its condition. Full refunds guaranteed.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-[#111126] px-4 py-2 rounded-lg border border-slate-200 dark:border-[#2f273a]">
                          <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 text-lg">verified_user</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-white">Buyer Protection</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-[#111126] px-4 py-2 rounded-lg border border-slate-200 dark:border-[#2f273a]">
                          <span className="material-symbols-outlined text-[#477cff] text-lg">lock</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-white">Encrypted</span>
                      </div>
                  </div>
              </div>
              <div className="hidden md:block opacity-5 dark:opacity-10 absolute -right-10 -bottom-10 rotate-12">
                  <span className="material-symbols-outlined text-[200px] text-slate-900 dark:text-white">security</span>
              </div>
          </section>

        </main>

        {/* --- Footer --- */}
        <footer className="bg-white dark:bg-[#111126] border-t border-slate-200 dark:border-[#2f273a] mt-12 py-8 text-center w-full transition-colors duration-300">
          <p className="text-slate-500 text-xs tracking-wider">© 2026 Xentra365 Marketplace Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

// Reusable Product Card Component updated with Theme support
function ProductCard({ product }: { product: any }) {
    return (
        <div className="group bg-white dark:bg-[#1a1a35] border border-slate-200 dark:border-[#2f273a] rounded-xl overflow-hidden hover:border-[#477cff] dark:hover:border-[#477cff] transition-all hover:shadow-xl flex flex-col">
            <div className="relative aspect-square bg-slate-100 dark:bg-[#111126] overflow-hidden">
                <img alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src={product.image}/>
                <div className="absolute top-2 right-2">
                    <button className="w-7 h-7 rounded-full bg-white/80 dark:bg-[#1a1a35]/80 text-slate-600 dark:text-white flex items-center justify-center hover:bg-[#5702d4] hover:text-white dark:hover:bg-[#5702d4] transition-colors backdrop-blur-sm border border-slate-200 dark:border-[#2f273a]">
                        <span className="material-symbols-outlined text-xs">favorite</span>
                    </button>
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                    {product.isVerified && <span className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Verified</span>}
                    {product.isEscrow && <span className="bg-[#5702d4] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Escrow</span>}
                </div>
            </div>
            <div className="p-3 flex flex-col flex-1">
                <h3 className="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-2 mb-2 group-hover:text-[#477cff] transition-colors">{product.title}</h3>
                <div className="mt-auto">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-bold text-slate-900 dark:text-white">${product.price}</span>
                        {product.originalPrice && <span className="text-[10px] text-slate-400 dark:text-slate-500 line-through">${product.originalPrice}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-2 text-[10px] text-slate-500 dark:text-slate-400">
                        <div className="flex items-center text-amber-500 gap-0.5">
                            <span className="material-symbols-outlined text-[12px]">star</span>
                            <span className="font-bold text-slate-500 dark:text-slate-400">{product.rating}</span>
                        </div>
                        <span>{product.sold} sold</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;