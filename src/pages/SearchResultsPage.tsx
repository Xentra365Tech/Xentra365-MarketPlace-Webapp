import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, HelpCircle, ChevronDown, 
  Menu, X, Grid, List, Star, Filter
} from 'lucide-react';
import { ALL_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get('q') || ''; 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [searchInput, setSearchInput] = useState(userQuery);
  const [showDropdown, setShowDropdown] = useState(false);

  // Live Autocomplete
  const liveResults = searchInput.trim() === '' ? [] : ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchInput.toLowerCase()) || 
    product.category.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, 5);

  // Main Page Filter
  const filteredProducts = ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(userQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(userQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);
    
    if (val === '') {
      navigate('/');
    } else {
      setShowDropdown(true);
    }
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

            {/* Desktop Search Form */}
            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-4xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                value={searchInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                placeholder="Search products..."
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-12 pr-24 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              />
              <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-6 py-1.5 rounded-full font-semibold hover:bg-[#501bb8] transition-colors text-sm">
                SEARCH
              </button>
              <DropdownMenu />
            </form>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0">
              <div className="relative group hidden lg:block">
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-[#6324E2] transition-colors py-2">
                  <User size={20} />
                  <span className="text-sm font-medium flex items-center gap-1">Account <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform"/></span>
                </div>
              </div>

              <Link to="/help" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-[#6324E2] transition-colors py-2">
                <HelpCircle size={20} />
                <span className="text-sm font-medium">Help</span>
              </Link>

              <Link to="/cart" className="flex items-center gap-2 relative text-gray-400 hover:text-[#6324E2] transition-colors py-2">
                <ShoppingCart size={24} />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
                <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-[9px] sm:text-[10px] w-4 h-4 sm:w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
          
          {/* Mobile Search Form */}
          <div className="flex lg:hidden mt-3 w-full relative z-50">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                value={searchInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                placeholder="Search products..."
                className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-white"
              />
              <button type="submit" className="hidden"></button>
              <DropdownMenu />
            </form>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENUS OVERLAYS --- */}
      {(isMobileMenuOpen || isFilterMenuOpen) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => { setIsMobileMenuOpen(false); setIsFilterMenuOpen(false); }} />
      )}

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-4 sm:py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
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
              
              <button onClick={() => setIsFilterMenuOpen(true)} className="lg:hidden flex items-center gap-1.5 bg-[#1E1E2C] border border-[#2A2A38] px-3 py-1.5 rounded-full text-[10px] font-medium">
                <Filter size={10} /> Filters
              </button>
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

          {/* DENSE 3-COLUMN PRODUCT GRID */}
          <div className={`grid gap-2 sm:gap-4 lg:gap-6 ${viewMode === 'grid' ? 'grid-cols-3 sm:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1'}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 15).map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className={`bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-lg sm:rounded-xl overflow-hidden group transition-all ${viewMode === 'list' ? 'flex flex-row h-24 sm:h-40' : 'flex flex-col p-1.5 sm:p-3 lg:p-4'}`}>
                  
                  <div className={`relative bg-[#1E1E2C] rounded-md sm:rounded-lg overflow-hidden ${viewMode === 'list' ? 'w-24 sm:w-48 shrink-0 rounded-none' : 'aspect-square sm:aspect-[4/3] w-full mb-1.5 sm:mb-3'}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="absolute top-1 sm:top-2 lg:top-3 left-1 sm:left-2 lg:left-3 flex flex-col gap-1 z-10">
                      <span className={`text-[6px] sm:text-[8px] lg:text-[10px] font-bold px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded shadow-lg flex items-center gap-0.5 sm:gap-1 w-max ${item.isVerified ? 'bg-emerald-600 text-white' : 'bg-[#6324E2] text-white'}`}>
                         {item.isVerified ? '✓ VERIFED' : '★ ESCROW'}
                      </span>
                    </div>
                  </div>

                  <div className={`flex flex-col ${viewMode === 'list' ? 'flex-1 justify-center p-2 sm:p-4' : 'flex-1'}`}>
                    <h3 className={`font-bold text-gray-200 group-hover:text-white transition-colors text-[9px] sm:text-sm lg:text-base mb-0.5 sm:mb-1 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-2 leading-tight h-6 sm:h-auto'}`}>{item.name}</h3>
                    <div className="font-black text-[#A67CFF] text-[10px] sm:text-lg lg:text-xl mb-1">{item.price}</div>
                    
                    <p className={`text-[9px] sm:text-xs text-gray-400 mb-1 sm:mb-4 line-clamp-1 ${viewMode === 'grid' ? 'hidden sm:block' : 'block'}`}>{item.desc}</p>
                    
                    <div className={`mt-auto flex items-center justify-between pt-1 sm:pt-3 ${viewMode === 'grid' ? '' : 'border-t border-[#2A2A38]'}`}>
                      <div className="flex items-center gap-0.5 sm:gap-1.5 text-[8px] sm:text-[10px] lg:text-xs">
                        <Star size={8} className="text-yellow-500 sm:w-3 sm:h-3" fill="currentColor" />
                        <span className="font-bold text-white">{item.rating}</span>
                        <span className="text-gray-500 hidden sm:inline">({item.reviews})</span>
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

        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;