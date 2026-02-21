import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, Bell, ShoppingCart, User, ChevronDown, 
  Zap, Grid, List, LogOut, Menu, X, ChevronRight
} from 'lucide-react';
import { CATEGORIES, RECOMMENDED_PRODUCTS, ALL_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => navigate('/');
  
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
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 shrink-0">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6324E2] rounded flex items-center justify-center font-bold text-lg text-white">X</div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">Xentra365</span>
            </Link>
          </div>

          {/* DESKTOP SEARCH */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:block relative">
            <input 
              type="text" 
              placeholder="Search marketplace (e.g. RTX 4090...)" 
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-16 text-sm focus:outline-none focus:border-[#6324E2] text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer">
               <span className="bg-[#2A2A38] text-gray-400 text-[10px] px-2 py-1 rounded">⌘</span>
               <span className="bg-[#2A2A38] text-gray-400 text-[10px] px-2 py-1 rounded">K</span>
            </button>
            <DropdownMenu />
          </form>

          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <button className="md:hidden text-gray-400 hover:text-white"><Search size={20} /></button>
            
            <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors">
               <Bell size={20} />
               <span className="text-[10px] font-bold uppercase tracking-wider">Alerts</span>
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
                <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Account <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform"/></span>
              </div>
              <div className="absolute top-full right-0 w-48 bg-[#1E1E2C] border border-[#2A2A38] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 transform translate-y-2">
                <button className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A38] rounded transition-colors flex items-center gap-2">
                  <User size={16} /> My Profile
                </button>
                <div className="h-px bg-[#2A2A38] my-1 w-full"></div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors flex items-center gap-2 font-medium">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>

            <button className="lg:hidden text-gray-400 hover:text-white transition-colors p-1">
              <User size={22} />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH FORM */}
        <div className="px-4 pb-3 lg:hidden w-full relative block mt-2">
          <form onSubmit={handleSearch} className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search marketplace..." 
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] text-sm text-white"
            />
            <button type="submit" className="hidden"></button>
            <DropdownMenu />
          </form>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className="flex-1 max-w-[1600px] w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 flex flex-col lg:flex-row gap-4 sm:gap-6 items-start" onMouseLeave={() => setActiveCategory(null)}>
        
        {/* Sidebar */}
        <aside className={`fixed top-0 left-0 h-full w-64 bg-[#12121D] lg:bg-transparent z-50 lg:z-40 p-6 lg:p-0 lg:relative lg:block transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} shrink-0 flex flex-col gap-6 lg:sticky lg:top-32 border-r border-[#2A2A38] lg:border-none shadow-2xl lg:shadow-none`}>
          <div className="flex items-center justify-between lg:hidden mb-2">
            <span className="font-bold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2 flex items-center justify-between">
              CATEGORIES <ChevronDown size={14} />
            </h3>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat.id} 
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat.id ? 'bg-[#2A1854] text-[#A67CFF]' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">{cat.icon} {cat.name}</div>
                  {cat.subcategories && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 w-full flex flex-col gap-4 sm:gap-6 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#12121D] border-b border-[#2A2A38] pb-4">
            <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap no-scrollbar pb-2 sm:pb-0 text-sm">
              <span className="text-gray-500 font-medium shrink-0">SORT BY:</span>
              <button className="bg-[#6324E2] text-white px-4 py-1.5 rounded-full font-medium shrink-0">Recommended</button>
              <button className="text-gray-400 hover:text-white transition-colors shrink-0">Newest</button>
              <button className="text-gray-400 hover:text-white transition-colors shrink-0">Price: Low to High</button>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0 border-l border-[#2A2A38] pl-4">
              <span className="text-gray-500 text-sm font-medium">View:</span>
              <button className="text-[#6324E2]"><Grid size={18} fill="currentColor" /></button>
              <button className="text-gray-500 hover:text-white"><List size={18} /></button>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#6324E2] uppercase tracking-wider mb-3 sm:mb-4">FEATURED PRODUCTS</h2>
            
            {/* 3 COLUMNS ON MOBILE */}
            <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
              {RECOMMENDED_PRODUCTS.slice(0, 10).map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-lg sm:rounded-xl p-1.5 sm:p-3 flex flex-col group cursor-pointer transition-colors relative">
                  
                  <div className="aspect-square bg-[#1E1E2C] rounded-md sm:rounded-lg mb-1.5 sm:mb-3 relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className={`absolute top-1 sm:top-2 left-1 sm:left-2 text-[6px] sm:text-[8px] font-bold px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded z-10 ${
                      product.tag === 'Verified' ? 'bg-emerald-600 text-white' : 'bg-[#6324E2] text-white'
                    }`}>
                      {product.tag === 'Verified' ? '✓ VERIF' : '★ ESCROW'}
                    </span>
                  </div>

                  <h3 className="text-[9px] sm:text-xs text-gray-300 font-medium line-clamp-2 leading-tight mb-1 sm:mb-2 h-6 sm:h-8 group-hover:text-white transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-1">
                    <div className="font-bold text-[#A67CFF] text-[10px] sm:text-sm">{product.price}</div>
                    <button className="hidden sm:flex w-6 h-6 bg-[#2A1854] text-[#A67CFF] rounded-md items-center justify-center hover:bg-[#6324E2] hover:text-white transition-colors">
                      <ShoppingCart size={10} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <aside className="w-full lg:w-[300px] shrink-0 flex flex-col md:flex-row lg:flex-col gap-6 mt-6 lg:mt-0 relative z-10">
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-5 flex-1">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider">BUYER WALLET</h3>
               <div className="w-6 h-6 bg-[#2A2A38] rounded flex items-center justify-center text-gray-400"><Zap size={12} /></div>
            </div>
            
            <div className="mb-4">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">AVAILABLE BALANCE</div>
              <div className="text-2xl lg:text-3xl font-black text-white">$14,520.40</div>
            </div>
            
            <div className="mb-6">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">PENDING ESCROW</div>
              <div className="text-base lg:text-lg font-bold text-[#6324E2]">$2,100.00</div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-2.5 rounded-lg transition-colors">Deposit</button>
              <button className="flex-1 bg-[#2A2A38] hover:bg-gray-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors">Withdraw</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;