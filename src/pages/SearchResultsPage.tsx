import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, HelpCircle, ChevronDown, 
  Menu, X, ShieldCheck, Grid, List, Heart, Star, Filter, LogOut
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

  const DropdownMenu = () => (
    showDropdown && searchInput.trim().length > 0 && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-[#1E1E2C] border border-[#2A2A38] rounded-xl shadow-2xl z-50 overflow-hidden">
        {liveResults.length > 0 ? (
          liveResults.map(prod => (
            <div
              key={prod.id}
              onMouseDown={(e) => {
                e.preventDefault();
                setSearchInput(prod.name);
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
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-40 shadow-xl flex flex-col">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}><Menu size={24} /></button>
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-xl lg:text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-4xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => setShowDropdown(true)} onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Search products..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-12 pr-24 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-6 py-1.5 rounded-full font-semibold hover:bg-[#501bb8] transition-colors text-sm">SEARCH</button>
              <DropdownMenu />
            </form>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0">
              <Link to="/help" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-[#6324E2] transition-colors py-2"><HelpCircle size={20} /><span className="text-sm font-medium">Help</span></Link>
              <Link to="/cart" className="flex items-center gap-2 relative text-gray-400 hover:text-[#6324E2] transition-colors py-2"><ShoppingCart size={24} /><span className="text-sm font-medium hidden sm:block">Cart</span><span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-[9px] sm:text-[10px] w-4 h-4 sm:w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">{cartCount}</span></Link>
              
              {isAuthenticated ? (
                 <div className="relative group hidden lg:block">
                  <div className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-[#6324E2] transition-colors py-2"><User size={20} /><span className="text-sm font-medium flex items-center gap-1">Account <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform"/></span></div>
                  <div className="absolute top-full right-0 w-48 bg-[#1E1E2C] border border-[#2A2A38] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-4 transform translate-y-2">
                    <Link to="/profile" className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A38] rounded transition-colors flex items-center gap-2"><User size={16} /> My Profile</Link>
                    <div className="h-px bg-[#2A2A38] my-1 w-full"></div>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors flex items-center gap-2 font-medium"><LogOut size={16} /> Logout</button>
                  </div>
                 </div>
              ) : (
                 <Link to="/login" className="hidden lg:flex items-center gap-2 bg-[#4812B5] hover:bg-[#3A0CA3] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg ml-2"><User size={18} />LOGIN</Link>
              )}
            </div>
          </div>
          
          {/* MOBILE SEARCH - FULLY FUNCTIONAL */}
          <div className="flex lg:hidden mt-3 w-full relative z-50">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => setShowDropdown(true)} onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Search products..." className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-white"
              />
              <button type="submit" className="hidden"></button>
              <DropdownMenu />
            </form>
          </div>
        </div>
      </nav>

      {/* SMART MOBILE DRAWER */}
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
                 <Link to="/seller/register" className="text-[10px] text-[#A67CFF] font-bold uppercase tracking-wider hover:underline">Apply as a Merchant →</Link>
               </div>
            </div>
          )}

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

          <div className="p-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Categories</h3>
            <div className="flex flex-col gap-1">
               {CATEGORIES.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors ${activeCategory === cat.id ? 'bg-[#1E1E2C] text-white font-bold' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}>
                    <div className="flex items-center gap-3"><span className={activeCategory === cat.id ? 'text-[#6324E2]' : 'text-gray-500'}>{cat.icon}</span>{cat.name}</div>
                    {cat.subcategories && <ChevronDown size={14} className={`transition-transform duration-200 ${activeCategory === cat.id ? 'text-[#6324E2] rotate-180' : 'text-gray-600'}`} />}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div className="p-4 border-t border-[#2A2A38] bg-[#0A0A11] shrink-0">
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm font-bold py-3.5 rounded-lg transition-colors border border-red-500/20">
              <LogOut size={16} /> Secure Logout
            </button>
          </div>
        )}
      </aside>

      {/* FILTER OVERLAY */}
      {isFilterMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsFilterMenuOpen(false)} />
      )}

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-4 sm:py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative z-10">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <aside className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-72 bg-[#12121D] lg:bg-transparent z-50 lg:z-auto border-r lg:border-none border-[#2A2A38] shrink-0 flex flex-col py-6 lg:py-0 transform transition-transform duration-300 ${isFilterMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto lg:overflow-visible lg:sticky lg:top-28`}>
          
          <div className="flex items-center justify-between px-6 lg:px-0 lg:hidden mb-6">
            <span className="font-bold text-white flex items-center gap-2"><Filter size={18}/> Filters</span>
            <button onClick={() => setIsFilterMenuOpen(false)} className="text-gray-400"><X size={24} /></button>
          </div>

          <div className="px-6 lg:px-0 space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 lg:mb-4">CATEGORIES</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs sm:text-sm text-[#A67CFF] font-medium">Enterprise Hardware</span>
                  <span className="text-[10px] sm:text-xs text-gray-500 bg-[#1E1E2C] px-2 py-0.5 rounded">1.2k</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">Software Licenses</span>
                  <span className="text-[10px] sm:text-xs text-gray-500 bg-[#1E1E2C] px-2 py-0.5 rounded">840</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT (RESULTS) --- */}
        <div className="flex-1 w-full min-w-0">
          
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
              {userQuery ? `Results for "${userQuery}"` : 'All Products'}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-[10px] sm:text-sm text-gray-400">Found {filteredProducts.length} items</p>
              <button onClick={() => setIsFilterMenuOpen(true)} className="lg:hidden flex items-center gap-1.5 bg-[#1E1E2C] border border-[#2A2A38] px-3 py-1.5 rounded-full text-[10px] font-medium"><Filter size={10} /> Filters</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#2A2A38] pb-3 sm:pb-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto whitespace-nowrap no-scrollbar text-xs sm:text-sm font-medium">
              <button className="text-[#A67CFF] border-b-2 border-[#A67CFF] pb-3 sm:pb-4 -mb-[13px] sm:-mb-[17px]">Popularity</button>
              <button className="text-gray-400 hover:text-white pb-3 sm:pb-4 -mb-[13px] sm:-mb-[17px] transition-colors">Price: Low to High</button>
            </div>
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              <button onClick={() => setViewMode('grid')} className={`${viewMode === 'grid' ? 'text-white' : 'text-gray-600 hover:text-gray-400'} transition-colors`}><Grid size={18} /></button>
              <button onClick={() => setViewMode('list')} className={`${viewMode === 'list' ? 'text-white' : 'text-gray-600 hover:text-gray-400'} transition-colors`}><List size={18} /></button>
            </div>
          </div>

          <div className={`grid gap-2 sm:gap-4 lg:gap-6 ${viewMode === 'grid' ? 'grid-cols-3 sm:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1'}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 15).map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className={`bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl overflow-hidden group cursor-pointer transition-all shadow-lg ${viewMode === 'list' ? 'flex flex-row h-24 sm:h-40' : 'flex flex-col h-full'}`}>
                  
                  <div className={`relative bg-[#1E1E2C] overflow-hidden ${viewMode === 'list' ? 'w-24 sm:w-48 shrink-0' : 'aspect-square w-full shrink-0'}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <button onClick={(e) => e.preventDefault()} className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-10">
                      <Heart size={12} className="sm:w-4 sm:h-4" />
                    </button>

                    <div className="absolute bottom-2 left-2 flex flex-wrap items-center gap-1 z-10">
                      {item.isVerified && (
                        <span className="bg-emerald-600 text-white text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                          <ShieldCheck size={8} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Verified</span>
                        </span>
                      )}
                      {item.isEscrow && (
                        <span className="bg-[#6324E2] text-white text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                          <ShieldCheck size={8} className="sm:w-3 sm:h-3" /> Escrow
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`flex flex-col flex-1 p-2 sm:p-3 lg:p-4`}>
                    <h3 className={`font-bold text-gray-200 group-hover:text-white transition-colors text-[10px] sm:text-xs lg:text-sm mb-1.5 sm:mb-2 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-2 leading-tight'}`}>{item.name}</h3>
                    
                    <div className="mt-auto">
                      <div className="font-bold text-[#A67CFF] text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2">{item.price}</div>
                      
                      {viewMode === 'list' && (
                        <p className="text-[9px] sm:text-xs text-gray-400 mb-1 sm:mb-4 line-clamp-1">{item.desc}</p>
                      )}
                      
                      <div className={`flex items-center justify-between text-[8px] sm:text-[10px] lg:text-xs text-gray-500`}>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Star size={10} className="text-yellow-500 sm:w-3 sm:h-3" fill="currentColor" />
                          <span className="font-bold text-gray-300">{item.rating}</span>
                        </div>
                        <span className="hidden sm:inline">{item.reviews} sold</span>
                      </div>
                    </div>
                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 sm:py-20 text-center text-gray-500">
                <Search size={32} className="mx-auto mb-2 sm:mb-4 opacity-50 sm:w-12 sm:h-12" />
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1">No results found</h3>
              </div>
            )}
          </div>

          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12 mb-6 sm:mb-8">
              <button className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded sm:rounded-lg hover:text-white transition-colors">&lt;</button>
              <button className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#6324E2] text-white rounded sm:rounded-lg font-bold text-xs sm:text-base">1</button>
              <button className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded sm:rounded-lg hover:text-white transition-colors text-xs sm:text-base">2</button>
              <span className="text-gray-500 px-1 text-xs sm:text-base">...</span>
              <button className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#12121D] border border-[#2A2A38] text-gray-400 rounded sm:rounded-lg hover:text-white transition-colors">&gt;</button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;