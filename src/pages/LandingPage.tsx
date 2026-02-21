import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, ChevronRight, ChevronDown, 
  Menu, X, ShieldCheck, Zap, Star
} from 'lucide-react';
import { CATEGORIES, FLASH_SALE_PRODUCTS, RECOMMENDED_PRODUCTS, ALL_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const DropdownMenu = () => (
    showDropdown && searchQuery.trim().length > 0 && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-[#1E1E2C] border border-[#2A2A38] rounded-xl shadow-2xl z-50 overflow-hidden">
        {liveResults.length > 0 ? (
          liveResults.map(prod => (
            <div
              key={prod.id}
              onMouseDown={(e) => {
                e.preventDefault();
                setSearchQuery(prod.name);
                setShowDropdown(false);
                navigate(`/search?q=${encodeURIComponent(prod.name)}`);
              }}
              className="flex items-center justify-between p-3 hover:bg-[#2A2A38] cursor-pointer transition-colors border-b border-[#2A2A38] last:border-none"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Search size={14} className="text-gray-500 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 line-clamp-1">{prod.name}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#A67CFF] font-bold shrink-0 pl-2">{prod.price}</span>
            </div>
          ))
        ) : (
          <div className="p-4 text-sm text-gray-500 text-center">No matching products found</div>
        )}
      </div>
    )
  );

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans pb-20 overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50 shadow-xl">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-xl lg:text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-4xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search for trust-verified products..." 
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-12 pr-24 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-6 py-1.5 rounded-full font-bold text-xs hover:bg-[#501bb8] transition-colors shadow-lg">
                SEARCH
              </button>
              <DropdownMenu />
            </form>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0">
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Escrow</span>
              </div>
              
              <Link to="/cart" className="flex flex-col items-center gap-1 relative text-gray-400 hover:text-white transition-colors">
                <ShoppingCart size={24} />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
                <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-[9px] sm:text-[10px] w-4 h-4 sm:w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">
                  {cartCount}
                </span>
              </Link>

              <div className="relative group hidden lg:block">
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors py-2">
                  <User size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Login <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform"/></span>
                </div>
                <div className="absolute top-full right-0 w-64 bg-[#1E1E2C] border border-[#2A2A38] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-4 transform translate-y-2">
                  <Link to="/login" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-3 rounded text-center transition-colors shadow-lg active:scale-[0.98]">LOGIN</Link>
                  <div className="mt-4 text-center border-b border-[#2A2A38] pb-4">
                    <Link to="/register" className="text-xs font-medium text-gray-400 hover:text-white transition-colors">New customer? <span className="text-[#6324E2] hover:underline ml-1 font-bold">Create Account</span></Link>
                  </div>
                </div>
              </div>

              <Link to="/login" className="lg:hidden text-gray-400 hover:text-white transition-colors p-1">
                <User size={22} />
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden mt-3 w-full relative z-50">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-white"
              />
              <button type="submit" className="hidden"></button>
              <DropdownMenu />
            </form>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <main className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-6 lg:space-y-8">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 relative" onMouseLeave={() => setActiveCategory(null)}>
          <div className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-64 bg-[#12121D] lg:bg-transparent z-50 lg:z-auto border-r lg:border-none border-[#2A2A38] shrink-0 flex flex-col py-6 lg:py-0 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="flex items-center justify-between px-6 lg:px-0 lg:mb-4 mb-6">
              <span className="font-bold text-white flex items-center gap-2 text-sm"><Menu size={18}/> Categories</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-gray-400"><X size={20} /></button>
            </div>
            <div className="flex flex-col gap-1 px-4 lg:px-0 flex-1 overflow-y-auto lg:overflow-visible">
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

          <div className="flex-1 bg-gradient-to-r from-[#170E3A] to-[#0A0A11] border border-[#2A2A38] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-16 relative overflow-hidden flex items-center min-h-[220px] sm:min-h-[300px] lg:min-h-[450px]">
            <div className="relative z-10 max-w-xl">
              <span className="bg-[#6324E2] text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1 rounded uppercase tracking-wider mb-2 sm:mb-4 inline-block shadow-[0_0_10px_rgba(99,36,226,0.5)]">Exclusive Launch</span>
              <h1 className="text-xl sm:text-3xl lg:text-6xl font-black text-white mb-2 sm:mb-4 lg:mb-6 leading-tight">Secure Your<br/>Next Tech Upgrade.</h1>
              <p className="text-gray-400 text-[10px] sm:text-xs lg:text-base mb-4 sm:mb-8 leading-relaxed max-w-xs sm:max-w-md">100% Escrow protected transactions. Verified sellers only.</p>
              <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white text-xs sm:text-sm font-bold px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-lg transition-colors shadow-lg active:scale-95">
                Shop Collection
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 lg:opacity-100 pointer-events-none flex justify-end">
               <div className="w-64 h-64 sm:w-96 sm:h-96 border-[20px] sm:border-[40px] border-[#6324E2]/20 rounded-full absolute -right-10 sm:-right-20 top-1/2 transform -translate-y-1/2 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* --- FLASH SALE ROW --- */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="flex-1 bg-[#12121D] border border-[#2A2A38] rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col">
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
            
            {/* 3 COLUMNS ON MOBILE, 4 ON TABLET */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
              {FLASH_SALE_PRODUCTS.slice(0, 3).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="bg-[#0A0A11] border border-[#2A2A38] hover:border-[#6324E2] rounded-lg sm:rounded-xl p-1.5 sm:p-3 flex flex-col transition-all cursor-pointer group">
                  <div className="relative aspect-square bg-[#1E1E2C] rounded-md sm:rounded-lg mb-2 sm:mb-3 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-orange-500 text-white text-[7px] sm:text-[10px] font-bold px-1 py-0.5 sm:px-2 sm:py-0.5 rounded sm:rounded-full z-10">{product.discount}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-[#6324E2] text-[10px] sm:text-sm lg:text-base mb-0.5 sm:mb-1">{product.price}</div>
                    <div className="w-full bg-[#1E1E2C] h-1 sm:h-1.5 rounded-full overflow-hidden mb-0.5 sm:mb-1">
                      <div className="bg-orange-500 h-full" style={{ width: `${product.soldProgress}%` }}></div>
                    </div>
                    <div className="text-[7px] sm:text-[9px] text-gray-500">{product.soldProgress}% Sold</div>
                  </div>
                </Link>
              ))}
              {/* Show the 4th item only on screens sm and up */}
              <Link to={`/product/${FLASH_SALE_PRODUCTS[3].id}`} key={FLASH_SALE_PRODUCTS[3].id} className="hidden sm:flex bg-[#0A0A11] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl p-3 flex-col transition-all cursor-pointer group">
                  <div className="relative aspect-square bg-[#1E1E2C] rounded-lg mb-3 overflow-hidden">
                    <img src={FLASH_SALE_PRODUCTS[3].image} alt={FLASH_SALE_PRODUCTS[3].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">{FLASH_SALE_PRODUCTS[3].discount}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-[#6324E2] text-sm lg:text-base mb-1">{FLASH_SALE_PRODUCTS[3].price}</div>
                    <div className="w-full bg-[#1E1E2C] h-1.5 rounded-full overflow-hidden mb-1">
                      <div className="bg-orange-500 h-full" style={{ width: `${FLASH_SALE_PRODUCTS[3].soldProgress}%` }}></div>
                    </div>
                    <div className="text-[9px] text-gray-500">{FLASH_SALE_PRODUCTS[3].soldProgress}% Sold</div>
                  </div>
              </Link>
            </div>
          </div>
        </div>

        {/* --- RECOMMENDED PRODUCTS GRID --- */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2"><Star className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor"/> Recommended</h2>
          </div>
          
          {/* 3 COLUMNS ON MOBILE, 4 ON TABLET, 6 ON DESKTOP */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-lg sm:rounded-xl p-1.5 sm:p-3 lg:p-4 group cursor-pointer transition-all flex flex-col h-full">
                
                <div className="aspect-square bg-[#1E1E2C] rounded-md sm:rounded-lg mb-1.5 sm:mb-3 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  
                  {/* Badges - Ultra compact on mobile */}
                  <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex flex-col gap-1 z-10">
                    <span className={`text-[6px] sm:text-[8px] lg:text-[9px] font-bold px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded shadow-lg ${product.tag === 'Verified' ? 'bg-emerald-600 text-white' : 'bg-[#6324E2] text-white'}`}>
                      {product.tag === 'Verified' ? '✓ VERIF' : '★ ESCROW'}
                    </span>
                  </div>
                </div>

                <h3 className="text-[9px] sm:text-xs font-medium text-gray-300 line-clamp-2 leading-tight mb-1 sm:mb-3 h-6 sm:h-8 group-hover:text-white transition-colors">{product.name}</h3>
                
                <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between">
                  <div className="font-bold text-[#A67CFF] text-[10px] sm:text-sm lg:text-base leading-tight mb-0.5 sm:mb-0">{product.price}</div>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] text-gray-500">
                    <Star size={8} className="text-yellow-500 sm:w-2.5 sm:h-2.5" fill="currentColor"/> {product.rating}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;