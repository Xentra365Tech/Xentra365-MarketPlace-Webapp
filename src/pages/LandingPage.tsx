import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, ChevronRight, ChevronDown, 
  Menu, X, ShieldCheck, Zap, Star, Heart, LogOut, Lock, MessageCircle
} from 'lucide-react';
import { CATEGORIES, FLASH_SALE_PRODUCTS, RECOMMENDED_PRODUCTS, ALL_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const liveResults = searchQuery.trim() === '' ? [] : ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans pb-20 overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-40 shadow-xl flex flex-col">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-xl lg:text-2xl font-bold tracking-tight sm:block">Xentra365</span>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-4xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" placeholder="Search for trust-verified products..." 
                value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)} onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-12 pr-24 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-6 py-1.5 rounded-full font-bold text-xs hover:bg-[#501bb8] transition-colors shadow-lg">SEARCH</button>
              
              {showDropdown && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1E1E2C] border border-[#2A2A38] rounded-xl shadow-2xl z-50 overflow-hidden">
                  {liveResults.length > 0 ? liveResults.map(prod => (
                    <div key={prod.id} onMouseDown={(e) => { e.preventDefault(); navigate(`/search?q=${encodeURIComponent(prod.name)}`); }} className="flex items-center justify-between p-3 hover:bg-[#2A2A38] cursor-pointer border-b border-[#2A2A38] last:border-none">
                      <div className="flex items-center gap-3 overflow-hidden"><Search size={14} className="text-gray-500 shrink-0" /><span className="text-sm text-gray-300 line-clamp-1">{prod.name}</span></div>
                      <span className="text-xs text-[#A67CFF] font-bold shrink-0 pl-2">{prod.price}</span>
                    </div>
                  )) : <div className="p-4 text-sm text-gray-500 text-center">No matching products found</div>}
                </div>
              )}
            </form>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0">
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Escrow</span>
              </div>
              <Link to="/cart" className="flex flex-col items-center gap-1 relative text-gray-400 hover:text-white transition-colors">
                <ShoppingCart size={24} />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
                <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-[9px] sm:text-[10px] w-4 h-4 sm:w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">{cartCount}</span>
              </Link>
              <Link to="/login" className="flex flex-col items-center  bg-[#4812B5] hover:bg-[#3A0CA3] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg ml-2"><User size={18} /><span className="text-[10px] font-bold uppercase tracking-wider  sm:block" >LOGIN</span></Link>
              {/* <Link to="/login" className="lg:hidden text-gray-400 hover:text-white transition-colors p-1"><User size={22} /></Link> */}
            </div>
          </div>
          <div className="flex lg:hidden mt-3 w-full relative z-50">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-white"/>
            </form>
          </div>
        </div>

        {/* TIER 1: SUPERIOR NAVIGATION */}
        <div className="hidden lg:flex items-center justify-between px-8 py-3 bg-[#0A0A11] border-b border-[#2A2A38] text-sm">
           <div className="flex gap-8 font-bold text-gray-400">
             <Link to="/" className="text-[#A67CFF] border-b-2 border-[#A67CFF] pb-1">Home</Link>
             <Link to="#" className="hover:text-white transition-colors">Priority Sellers</Link>
             <Link to="#" className="hover:text-white transition-colors">Local Marketplace</Link>
             <Link to="#" className="hover:text-white transition-colors flex items-center gap-1">Promotions <span className="bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">HOT</span></Link>
             <Link to="#" className="hover:text-white transition-colors">Bulk Wholesale</Link>
             <Link to="#" className="hover:text-white transition-colors">New Arrivals</Link>
           </div>
           <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1.5 rounded-full">
             <ShieldCheck size={14} /> Trust Center
           </div>
        </div>

        {/* TIER 2: SUB-NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-2.5 bg-[#12121D] border-b border-[#2A2A38] text-xs font-medium text-gray-500 overflow-x-auto whitespace-nowrap">
           <a href="#" className="hover:text-white transition-colors">Electronics</a>
           <div className="w-1 h-1 rounded-full bg-[#2A2A38]"></div>
           <a href="#" className="hover:text-white transition-colors">Fashion & Apparel</a>
           <div className="w-1 h-1 rounded-full bg-[#2A2A38]"></div>
           <a href="#" className="hover:text-white transition-colors">Home & Living</a>
           <div className="w-1 h-1 rounded-full bg-[#2A2A38]"></div>
           <a href="#" className="hover:text-white transition-colors">Health & Beauty</a>
           <div className="w-1 h-1 rounded-full bg-[#2A2A38]"></div>
           <a href="#" className="hover:text-white transition-colors">Industrial Equipment</a>
           <div className="w-1 h-1 rounded-full bg-[#2A2A38]"></div>
           <a href="#" className="hover:text-white transition-colors">Software & Keys</a>
        </div>
      </nav>

      {/* ========================================= */}
      {/* SMART MOBILE DRAWER (Handles Auth States) */}
      {/* ========================================= */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
      
      <aside className={`fixed top-0 left-0 h-full w-[280px] bg-[#12121D] border-r border-[#2A2A38] z-[70] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#2A2A38] shrink-0 bg-[#0A0A11]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#6324E2] rounded flex items-center justify-center font-bold text-white text-sm">X</div>
            <span className="font-bold tracking-tight text-white">Xentra365</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-1 bg-[#1E1E2C] rounded-md"><X size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto pb-8 no-scrollbar">
          {/* AUTH BLOCK */}
          {isAuthenticated ? (
            <div className="p-5 border-b border-[#2A2A38] bg-gradient-to-b from-[#1E1E2C]/50 to-transparent">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2A2A38]">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="User" />
                </div>
                <div>
                  <div className="text-base font-bold text-white leading-tight">Alex Sterling</div>
                  <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><ShieldCheck size={10}/> Verified Buyer</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/profile" className="bg-[#4812B5] text-white text-xs font-bold py-2.5 rounded-lg text-center shadow-lg">Dashboard</Link>
                <Link to="/wallet" className="bg-[#1E1E2C] border border-[#2A2A38] text-white text-xs font-bold py-2.5 rounded-lg text-center">Wallet</Link>
              </div>
            </div>
          ) : (
            <div className="p-5 border-b border-[#2A2A38] space-y-3 bg-gradient-to-b from-[#1E1E2C]/30 to-transparent">
               <Link to="/login" className="flex items-center justify-center bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-sm font-bold py-3 rounded-lg transition-colors shadow-lg">Log In securely</Link>
               <Link to="/register" className="flex items-center justify-center bg-[#1E1E2C] border border-[#2A2A38] text-white text-sm font-bold py-3 rounded-lg transition-colors">Create Account</Link>
               <div className="text-center pt-2">
                 <Link to="#" className="text-[10px] text-[#A67CFF] font-bold uppercase tracking-wider hover:underline">Apply as a Merchant →</Link>
               </div>
            </div>
          )}

          {/* TIER 1 NAV */}
          <div className="p-4 border-b border-[#2A2A38]">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Marketplace Modes</h3>
            <div className="space-y-1">
              <Link to="/" className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#1E1E2C] text-sm text-white font-bold">Home</Link>
              <Link to="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#1E1E2C] text-sm text-gray-400 hover:text-white font-medium transition-colors">Priority Sellers</Link>
              <Link to="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#1E1E2C] text-sm text-gray-400 hover:text-white font-medium transition-colors">Local Marketplace</Link>
              <Link to="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#1E1E2C] text-sm text-gray-400 hover:text-white font-medium transition-colors">Promotions <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">HOT</span></Link>
              <Link to="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#1E1E2C] text-sm text-gray-400 hover:text-white font-medium transition-colors">Bulk Wholesale</Link>
            </div>
          </div>

          {/* TIER 2 CATEGORIES */}
          <div className="p-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Categories</h3>
            <div className="flex flex-col gap-1">
               {CATEGORIES.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors ${activeCategory === cat.id ? 'bg-[#1E1E2C] text-white font-bold' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}>
                    <div className="flex items-center gap-3">
                      <span className={activeCategory === cat.id ? 'text-[#6324E2]' : 'text-gray-500'}>{cat.icon}</span>
                      {cat.name}
                    </div>
                    {cat.subcategories && <ChevronDown size={14} className={`transition-transform duration-200 ${activeCategory === cat.id ? 'text-[#6324E2] rotate-180' : 'text-gray-600'}`} />}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* LOGOUT ANCHOR */}
        {isAuthenticated && (
          <div className="p-4 border-t border-[#2A2A38] bg-[#0A0A11] shrink-0">
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm font-bold py-3.5 rounded-lg transition-colors border border-red-500/20">
              <LogOut size={16} /> Secure Logout
            </button>
          </div>
        )}
      </aside>

      <main className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-6 lg:space-y-8 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="flex gap-6 relative" onMouseLeave={() => setActiveCategory(null)}>
          
          {/* DESKTOP CATEGORY SIDEBAR */}
          <div className={`hidden lg:flex flex-col w-64 bg-transparent shrink-0`}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-white flex items-center gap-2 text-sm"><Menu size={18}/> All Categories</span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              {CATEGORIES.map((category) => (
                <button 
                  key={category.id} 
                  onMouseEnter={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${activeCategory === category.id ? 'bg-[#1E1E2C] text-white' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeCategory === category.id ? 'text-[#6324E2]' : 'text-gray-500'}>{category.icon}</span>
                    {category.name}
                  </div>
                  {category.subcategories && <ChevronRight size={14} className={activeCategory === category.id ? 'text-[#6324E2]' : 'text-gray-600'} />}
                </button>
              ))}
            </div>
          </div>

          {activeCategory && CATEGORIES.find(c => c.id === activeCategory)?.subcategories && (
            <div className="hidden lg:flex absolute left-64 top-0 h-[500px] w-[700px] bg-[#12121D]/95 backdrop-blur-xl border border-[#2A2A38] rounded-2xl shadow-2xl p-8 z-50 gap-8 animate-in fade-in slide-in-from-left-2 duration-200">
              {Object.entries(CATEGORIES.find(c => c.id === activeCategory)!.subcategories!).map(([title, items], idx) => (
                <div key={idx} className="flex-1">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#2A2A38] pb-2 mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx}><a href="#" className="text-sm text-gray-400 hover:text-[#6324E2] transition-colors">{item}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="flex-1 rounded-xl sm:rounded-2xl relative overflow-hidden flex items-center min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] border border-[#2A2A38]">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" alt="Tech Background" className="absolute inset-0 w-full h-full object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A11] via-[#0A0A11]/90 to-transparent"></div>
            
            <div className="relative z-10 max-w-xl p-6 sm:p-8 lg:p-16">
              <span className="bg-[#6324E2] text-white text-[8px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4 inline-block shadow-lg">Exclusive Launch</span>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">Secure Your<br/>Next Tech Upgrade.</h1>
              <p className="text-gray-300 text-[10px] sm:text-sm lg:text-base mb-6 sm:mb-8 leading-relaxed max-w-xs sm:max-w-md">100% Escrow protected transactions. Verified sellers only. Shop with zero risk on Xentra365.</p>
              <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white text-xs sm:text-sm font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg transition-colors shadow-lg active:scale-95">
                Shop Collection
              </button>
            </div>
          </div>
        </div>

        {/* --- FLASH SALE ROW --- */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="flex-1 bg-[#12121D] border border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white flex items-center gap-1 sm:gap-2"><Zap className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor"/> Flash Sale</h2>
                <div className="flex items-center gap-1 sm:gap-1.5 font-mono text-[10px] sm:text-sm">
                  <span className="bg-[#1E1E2C] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">04</span><span>:</span>
                  <span className="bg-[#1E1E2C] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">22</span><span>:</span>
                  <span className="bg-[#1E1E2C] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">59</span>
                </div>
              </div>
              <button className="text-[10px] sm:text-sm font-medium text-[#6324E2] hover:text-white transition-colors">View All</button>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
              {FLASH_SALE_PRODUCTS.slice(0, 4).map((product, idx) => (
                <Link to={`/product/${product.id}`} key={product.id} className={`${idx === 3 ? 'hidden sm:flex' : 'flex'} bg-[#1E1E2C] hover:bg-[#2A2A38] rounded-xl p-2 sm:p-3 flex-col transition-all cursor-pointer group overflow-hidden border border-transparent hover:border-[#6324E2]`}>
                  <div className="relative aspect-square w-full rounded-lg mb-2 sm:mb-3 overflow-hidden bg-[#12121D]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
                    <span className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-orange-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded shadow-lg z-10">{product.discount}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-[#A67CFF] text-[10px] sm:text-sm lg:text-base mb-1 sm:mb-2">{product.price}</div>
                    <div className="w-full bg-[#12121D] h-1.5 sm:h-2 rounded-full overflow-hidden mb-1">
                      <div className="bg-orange-500 h-full" style={{ width: `${product.soldProgress}%` }}></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* --- RECOMMENDED PRODUCTS GRID --- */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2"><Star className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor"/> Recommended</h2>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 lg:gap-5 mb-10">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl flex flex-col group cursor-pointer transition-all overflow-hidden shadow-lg h-full">
                <div className="relative aspect-square w-full bg-[#1E1E2C] overflow-hidden shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button onClick={(e) => e.preventDefault()} className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-10">
                    <Heart size={12} className="sm:w-4 sm:h-4" />
                  </button>
                  <div className="absolute bottom-2 left-2 flex flex-wrap items-center gap-1 z-10">
                    {product.tag === 'Verified' && (
                      <span className="bg-emerald-600 text-white text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                        <ShieldCheck size={8} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Verified</span>
                      </span>
                    )}
                    {product.isEscrow && (
                      <span className="bg-[#6324E2] text-white text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                        <ShieldCheck size={8} className="sm:w-3 sm:h-3" /> Escrow
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-2 sm:p-3 lg:p-4 flex flex-col flex-1">
                  <h3 className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-200 line-clamp-2 leading-tight mb-1.5 sm:mb-2 group-hover:text-white transition-colors">{product.name}</h3>
                  <div className="mt-auto">
                    <div className="font-bold text-[#A67CFF] text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2">{product.price}</div>
                    <div className="flex items-center justify-between text-[8px] sm:text-[10px] lg:text-xs text-gray-500">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <Star size={10} className="text-yellow-500 sm:w-3 sm:h-3" fill="currentColor" />
                        <span className="font-bold text-gray-300">{product.rating}</span>
                      </div>
                      <span>{product.reviews} sold</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <button className="bg-[#1E1E2C] border border-[#2A2A38] hover:border-[#6324E2] text-white font-bold py-3 px-8 rounded-full transition-colors text-sm shadow-lg">
              Load More Recommendations
            </button>
          </div>
        </div>

        <div className="bg-[#12121D] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 mb-8 border border-[#2A2A38] shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Experience Worry-Free Shopping with <span className="text-[#A67CFF]">Xentra Escrow</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
              We hold the payment securely in our vault until you receive your order and verify its condition. If anything is wrong, we guarantee a full refund through our automated mediation system.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 bg-[#1E1E2C] border border-[#2A2A38] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-md">
                <ShieldCheck size={16} className="text-emerald-400" /> 100% Buyer Protection
              </span>
              <span className="flex items-center gap-2 bg-[#1E1E2C] border border-[#2A2A38] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-md">
                <Lock size={16} className="text-blue-400" /> Encrypted Payments
              </span>
              <span className="flex items-center gap-2 bg-[#1E1E2C] border border-[#2A2A38] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-md">
                <MessageCircle size={16} className="text-[#A67CFF]" /> Live Mediation
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[400px] aspect-square rounded-3xl bg-gradient-to-br from-[#4812B5] to-[#6324E2] flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(99,36,226,0.3)] relative z-10">
             <ShieldCheck size={120} className="text-white opacity-90" />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;