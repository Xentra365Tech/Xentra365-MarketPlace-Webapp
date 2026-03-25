import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, HelpCircle, ChevronDown, 
  Menu, X, ShieldCheck, Grid, List, Heart, Star, Filter, LogOut, ChevronLeft, ChevronRight
} from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get('q') || ''; 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [searchInput, setSearchInput] = useState(userQuery);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const liveResults = searchInput.trim() === '' ? [] : ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchInput.toLowerCase()) || 
    product.category.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, 5);

  const filteredProducts = ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(userQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(userQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);
    if (val === '') navigate('/');
    else setShowDropdown(true);
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      setShowDropdown(false);
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-40 shadow-xl flex flex-col">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={28} />
              </button>
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-4xl relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => setShowDropdown(true)} onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Search products..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-3.5 pl-14 pr-32 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-8 py-2 rounded-full font-bold hover:bg-[#501bb8] transition-colors text-sm flex items-center justify-center">SEARCH</button>
              
              {showDropdown && searchInput.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1E1E2C] border border-[#2A2A38] rounded-xl shadow-2xl z-50 overflow-hidden">
                  {liveResults.length > 0 ? liveResults.map(prod => (
                    <div key={prod.id} onMouseDown={(e) => { e.preventDefault(); setSearchInput(prod.name); setShowDropdown(false); navigate(`/search?q=${encodeURIComponent(prod.name)}`); }} className="flex items-center justify-between p-4 hover:bg-[#2A2A38] cursor-pointer transition-colors border-b border-[#2A2A38] last:border-none">
                      <div className="flex items-center gap-4 overflow-hidden"><Search size={18} className="text-gray-500 shrink-0" /><span className="text-base text-gray-300 line-clamp-1">{prod.name}</span></div>
                      <span className="text-sm text-[#A67CFF] font-bold shrink-0 pl-4">{prod.price}</span>
                    </div>
                  )) : <div className="p-6 text-base text-gray-500 text-center">No matching products found</div>}
                </div>
              )}
            </form>

            <div className="flex items-center gap-6 lg:gap-8 shrink-0">
              <Link to="/help" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-[#6324E2] transition-colors py-2"><HelpCircle size={24} /><span className="text-sm font-bold uppercase tracking-wider">Help</span></Link>
              <Link to="/cart" className="flex items-center gap-2 relative text-gray-400 hover:text-[#6324E2] transition-colors py-2"><ShoppingCart size={28} /><span className="text-sm font-bold uppercase tracking-wider hidden sm:block">Cart</span><span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">{cartCount}</span></Link>
              
              {isAuthenticated ? (
                 <div className="relative group hidden lg:block">
                  <div className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-[#6324E2] transition-colors py-2 pl-4 border-l border-[#2A2A38]">
                    <div className="w-12 h-12 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-white group-hover:border-[#6324E2] transition-colors"><User size={24} /></div>
                    <span className="text-sm font-bold flex items-center gap-1">Account <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform"/></span>
                  </div>
                  <div className="absolute top-full right-0 w-56 bg-[#1E1E2C] border border-[#2A2A38] rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 transform translate-y-2">
                    <Link to="/profile" className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A38] rounded-xl transition-colors flex items-center gap-3 font-medium"><User size={18} /> My Profile</Link>
                    <div className="h-px bg-[#2A2A38] my-1 w-full"></div>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors flex items-center gap-3 font-medium"><LogOut size={18} /> Logout</button>
                  </div>
                 </div>
              ) : (
                 <Link to="/login" className="hidden lg:flex items-center justify-center gap-2 bg-[#4812B5] hover:bg-[#3A0CA3] text-white px-8 py-3 rounded-full font-bold text-sm transition-colors shadow-lg ml-2"><User size={20} />LOGIN</Link>
              )}
            </div>
          </div>
          
          <div className="flex lg:hidden mt-4 w-full relative z-50">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => setShowDropdown(true)} onBlur={() => setTimeout(() => setShowDropdown(false), 200)} placeholder="Search products..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-white"/>
              <button type="submit" className="hidden"></button>
            </form>
          </div>
        </div>

        {/* TIER 1: SUPERIOR NAVIGATION */}
        <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-[#0A0A11] border-b border-[#2A2A38] text-base">
           <div className="flex gap-8 font-bold text-gray-400">
             <Link to="/" className="text-[#A67CFF] border-b-2 border-[#A67CFF] pb-1">Home</Link>
             <Link to="#" className="hover:text-white transition-colors">Priority Sellers</Link>
             <Link to="#" className="hover:text-white transition-colors">Local Marketplace</Link>
             <Link to="#" className="hover:text-white transition-colors flex items-center gap-2">Promotions <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">HOT</span></Link>
             <Link to="#" className="hover:text-white transition-colors">Bulk Wholesale</Link>
             <Link to="#" className="hover:text-white transition-colors">New Arrivals</Link>
           </div>
           <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider bg-emerald-500/10 px-4 py-2 rounded-full">
             <ShieldCheck size={18} /> Trust Center
           </div>
        </div>
      </nav>

      {/* SMART MOBILE DRAWER */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
      
      <aside className={`fixed top-0 left-0 h-full w-[300px] bg-[#12121D] border-r border-[#2A2A38] z-[70] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#2A2A38] shrink-0 bg-[#0A0A11]">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-white text-base">X</div>
            <span className="text-xl font-bold tracking-tight text-white">Xentra365</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2 bg-[#1E1E2C] rounded-lg"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto pb-8 no-scrollbar">
          {isAuthenticated ? (
            <div className="p-6 border-b border-[#2A2A38] bg-gradient-to-b from-[#1E1E2C]/50 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2A2A38]">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="User" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">Alex Sterling</div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><ShieldCheck size={14}/> Verified Buyer</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/profile" className="flex items-center justify-center bg-[#4812B5] text-white text-sm font-bold py-3 rounded-full shadow-lg">Dashboard</Link>
                <Link to="/wallet" className="flex items-center justify-center bg-[#1E1E2C] border border-[#2A2A38] text-white text-sm font-bold py-3 rounded-full">Wallet</Link>
              </div>
            </div>
          ) : (
            <div className="p-6 border-b border-[#2A2A38] space-y-4 bg-gradient-to-b from-[#1E1E2C]/30 to-transparent">
               <Link to="/login" className="flex items-center justify-center bg-[#4812B5] hover:bg-[#3A0CA3] text-white text-base font-bold py-3.5 rounded-full transition-colors shadow-lg">Log In securely</Link>
               <Link to="/register" className="flex items-center justify-center bg-[#1E1E2C] border border-[#2A2A38] text-white text-base font-bold py-3.5 rounded-full transition-colors">Create Account</Link>
               <div className="text-center pt-3">
                 <Link to="/seller/register" className="text-xs text-[#A67CFF] font-bold uppercase tracking-wider hover:underline">Apply as a Merchant →</Link>
               </div>
            </div>
          )}

          <div className="p-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-1">Categories</h3>
            <div className="flex flex-col gap-2">
               {CATEGORIES.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} className={`flex items-center justify-between px-4 py-4 rounded-xl text-base transition-colors ${activeCategory === cat.id ? 'bg-[#1E1E2C] text-white font-bold' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}>
                    <div className="flex items-center gap-4"><span className={activeCategory === cat.id ? 'text-[#6324E2]' : 'text-gray-500'}>{cat.icon}</span>{cat.name}</div>
                    {cat.subcategories && <ChevronDown size={18} className={`transition-transform duration-200 ${activeCategory === cat.id ? 'text-[#6324E2] rotate-180' : 'text-gray-600'}`} />}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div className="p-6 border-t border-[#2A2A38] bg-[#0A0A11] shrink-0">
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 text-base font-bold py-4 rounded-full transition-colors border border-red-500/20">
              <LogOut size={20} /> Secure Logout
            </button>
          </div>
        )}
      </aside>

      {/* FILTER OVERLAY */}
      {isFilterMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsFilterMenuOpen(false)} />
      )}

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-6 lg:py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <aside className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 bg-[#12121D] lg:bg-transparent z-50 lg:z-auto border-r lg:border-none border-[#2A2A38] shrink-0 flex flex-col py-8 lg:py-0 transform transition-transform duration-300 ${isFilterMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto lg:overflow-visible lg:sticky lg:top-28`}>
          
          <div className="flex items-center justify-between px-8 lg:px-0 lg:hidden mb-8">
            <span className="font-bold text-white flex items-center gap-3 text-lg"><Filter size={24}/> Filters</span>
            <button onClick={() => setIsFilterMenuOpen(false)} className="text-gray-400"><X size={28} /></button>
          </div>

          <div className="px-8 lg:px-0 space-y-8 lg:space-y-10">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 lg:mb-6">CATEGORIES</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm sm:text-base text-[#A67CFF] font-bold">Enterprise Hardware</span>
                  <span className="text-xs text-gray-500 bg-[#1E1E2C] px-2.5 py-1 rounded-md">1.2k</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors font-medium">Software Licenses</span>
                  <span className="text-xs text-gray-500 bg-[#1E1E2C] px-2.5 py-1 rounded-md">840</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT (RESULTS) --- */}
        <div className="flex-1 w-full min-w-0">
          
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              {userQuery ? `Results for "${userQuery}"` : 'All Products'}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400 font-medium">Found {filteredProducts.length} items</p>
              <button onClick={() => setIsFilterMenuOpen(true)} className="lg:hidden flex items-center justify-center gap-2 bg-[#1E1E2C] border border-[#2A2A38] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"><Filter size={16} /> Filters</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-[#2A2A38] pb-5 mb-8">
            <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap no-scrollbar text-base font-bold">
              <button className="text-[#A67CFF] border-b-[3px] border-[#A67CFF] pb-5 -mb-[23px]">Popularity</button>
              <button className="text-gray-400 hover:text-white pb-5 -mb-[23px] transition-colors">Price: Low to High</button>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#1E1E2C] text-[#A67CFF] border border-[#2A2A38]' : 'text-gray-600 hover:text-gray-400'}`}><Grid size={24} /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#1E1E2C] text-[#A67CFF] border border-[#2A2A38]' : 'text-gray-600 hover:text-gray-400'}`}><List size={24} /></button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 12).map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className={`bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-2xl overflow-hidden group cursor-pointer transition-all shadow-xl relative ${viewMode === 'list' ? 'flex flex-row h-32 sm:h-48' : 'flex flex-col h-full'}`}>
                  
                  <div className={`relative bg-[#1E1E2C] overflow-hidden group ${viewMode === 'list' ? 'w-32 sm:w-64 shrink-0' : 'aspect-[4/3] w-full shrink-0'}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors"><ChevronLeft size={16}/></div>
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors"><ChevronRight size={16}/></div>
                    </div>

                    <button onClick={(e) => e.preventDefault()} className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-30">
                      <Heart size={20} />
                    </button>

                    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 z-30">
                      {item.isVerified && (
                        <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow flex items-center gap-1">
                          <ShieldCheck size={12} /> Verified
                        </span>
                      )}
                      {item.isEscrow && (
                        <span className="bg-[#6324E2] text-white text-xs font-bold px-2.5 py-1 rounded shadow flex items-center gap-1">
                          <ShieldCheck size={12} /> Escrow
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`flex flex-col flex-1 p-5 sm:p-6`}>
                    <h3 className={`font-bold text-gray-200 group-hover:text-white transition-colors text-base mb-3 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-2 leading-snug'}`}>{item.name}</h3>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-black text-[#A67CFF] text-xl">{item.price}</div>
                        <div className="text-xs font-medium text-gray-400 bg-[#1E1E2C] px-2 py-1 rounded-md border border-[#2A2A38]">12 in stock</div>
                      </div>
                      
                      {viewMode === 'list' && (
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.desc}</p>
                      )}
                      
                      <div className={`flex items-center justify-between pt-4 border-t border-[#2A2A38]`}>
                        <div className="flex items-center gap-1.5">
                          <Star size={14} className="text-yellow-500" fill="currentColor" />
                          <span className="font-bold text-sm text-gray-300">{item.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">{item.reviews} sold</span>
                      </div>
                    </div>
                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 sm:py-32 text-center text-gray-500 bg-[#12121D] rounded-3xl border border-[#2A2A38]">
                <Search size={48} className="mx-auto mb-6 opacity-30" />
                <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                <p className="text-base text-gray-400">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>

          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-12 mb-12">
              <button className="w-12 h-12 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded-xl hover:text-white transition-colors">&lt;</button>
              <button className="w-12 h-12 flex items-center justify-center bg-[#6324E2] text-white rounded-xl font-bold text-lg shadow-lg">1</button>
              <button className="w-12 h-12 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded-xl hover:text-white transition-colors text-lg font-medium">2</button>
              <span className="text-gray-500 px-3 text-lg font-bold">...</span>
              <button className="w-12 h-12 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded-xl hover:text-white transition-colors">&gt;</button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;