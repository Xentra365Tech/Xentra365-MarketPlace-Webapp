import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, ChevronRight, ChevronDown, 
  Menu, X, ShieldCheck, Sun, Moon, LogOut, Grid 
} from 'lucide-react';
import { CATEGORIES, ALL_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);
  
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
      setShowDropdown(false);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]);
  };

  const toggleSubcategory = (title: string) => {
    setExpandedSubcategories(prev => prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]);
  };

  const isUserLoggedIn = isAuthenticated || location.pathname.includes('/dashboard');

  return (
    <>
      <nav className="bg-white dark:bg-[#12121D] border-b border-gray-200 dark:border-[#2A2A38] sticky top-0 z-50 shadow-md flex flex-col transition-colors">
        <div className="max-w-[1600px] w-full mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 lg:gap-8">
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button 
                className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-[#1E1E2C] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2A2A38] transition-colors" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-lg sm:text-2xl font-bold tracking-tight hidden sm:block text-gray-900 dark:text-white">Xentra365</span>
              </Link>
            </div>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-3xl relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search products, brands and categories..." value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }} onFocus={() => setShowDropdown(true)} className="w-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-300 dark:border-[#2A2A38] rounded-full py-3 pl-14 pr-32 focus:outline-none focus:border-[#6324E2] transition-colors text-sm text-gray-900 dark:text-white" />
              <button type="submit" className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#6324E2] px-8 py-2 rounded-full font-bold text-sm text-white hover:bg-[#501bb8] transition-colors shadow-lg">SEARCH</button>
              {showDropdown && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-xl shadow-2xl z-[60] overflow-hidden">
                  <div className="flex justify-between items-center p-2 border-b border-gray-100 dark:border-[#2A2A38]">
                     <span className="text-xs font-bold text-gray-500">Search Results</span>
                     <button type="button" onClick={() => setShowDropdown(false)} className="text-gray-400 hover:text-red-500"><X size={16}/></button>
                  </div>
                  {liveResults.length > 0 ? liveResults.map(prod => (
                    <div key={prod.id} onMouseDown={(e) => { e.preventDefault(); navigate(`/search?q=${encodeURIComponent(prod.name)}`); setShowDropdown(false); }} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#2A2A38] cursor-pointer border-b border-gray-100 dark:border-[#2A2A38] last:border-none">
                      <div className="flex items-center gap-4 overflow-hidden"><Search size={18} className="text-gray-500 shrink-0" /><span className="text-sm text-gray-900 dark:text-gray-300 line-clamp-1">{prod.name}</span></div>
                    </div>
                  )) : <div className="p-6 text-sm text-gray-500 text-center">No matching products found</div>}
                </div>
              )}
            </form>

            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
              <button onClick={toggleTheme} className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-[#1E1E2C] text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white transition-colors">
                {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white transition-colors">
                <ShieldCheck size={24} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Escrow</span>
              </div>
              <Link to="/cart" className="flex flex-col items-center gap-1 relative text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7" />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
                <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-red-500 text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">{cartCount}</span>
              </Link>
              
              {isUserLoggedIn ? (
                <div className="relative group hidden lg:block">
                  <div className="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-200 dark:border-[#2A2A38] py-1">
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">BUYER ACCOUNT</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white leading-none mt-1.5 flex items-center gap-1">Alex Sterling <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform"/></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-300 dark:border-[#2A2A38] flex items-center justify-center text-gray-600 dark:text-white group-hover:border-[#6324E2] dark:group-hover:border-[#6324E2] transition-colors">
                      <User size={20} />
                    </div>
                  </div>
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 transform translate-y-2">
                    <Link to="/dashboard" className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#6324E2] hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#2A2A38] rounded-xl transition-colors flex items-center gap-3 font-medium">
                      <Grid size={18} /> Dashboard
                    </Link>
                    <Link to="/profile" className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#6324E2] hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#2A2A38] rounded-xl transition-colors flex items-center gap-3 font-medium">
                      <User size={18} /> My Profile
                    </Link>
                    <div className="h-px bg-gray-100 dark:bg-[#2A2A38] my-1 w-full"></div>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors flex items-center gap-3 font-medium">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="hidden lg:flex items-center justify-center gap-2 bg-[#4812B5] hover:bg-[#3A0CA3] text-white px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-lg ml-2">
                  <User size={18} /> LOGIN
                </Link>
              )}
              <Link to={isUserLoggedIn ? "/profile" : "/login"} className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1"><User className="w-5 h-5 sm:w-7 sm:h-7" /></Link>
            </div>
          </div>
          
          {/* RESPONSIVE: Tightened Mobile Search Padding */}
          <div className="flex lg:hidden mt-3 sm:mt-4 w-full relative z-[55]">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-300 dark:border-[#2A2A38] rounded-full py-2.5 sm:py-3 pl-10 sm:pl-12 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-xs sm:text-sm text-gray-900 dark:text-white shadow-sm" />
            </form>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center px-8 py-3 bg-gray-50 dark:bg-[#0A0A11] border-b border-gray-200 dark:border-[#2A2A38] text-sm relative transition-colors">
           <div className="flex items-center gap-8 font-bold text-gray-700 dark:text-gray-400">
             <button onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${isDesktopSidebarOpen ? 'bg-[#6324E2] text-white' : 'bg-gray-200 text-gray-800 dark:bg-[#1E1E2C] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#2A2A38]'}`}>
               <Menu size={18}/> All Categories {isDesktopSidebarOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
             </button>
             <Link to="/" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Home</Link>
             <Link to="/dashboard" className="text-[#6324E2] dark:text-[#A67CFF] border-b-2 border-[#6324E2] dark:border-[#A67CFF] pb-1">Dashboard</Link>
             <Link to="/seller/register" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Xentra Sellers</Link>
             <Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Local Marketplace</Link>
             {/* <Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">International Marketplace</Link> */}
             <Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors flex items-center gap-1">Promotions <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm">HOT</span></Link>
             <Link to="#" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">Bulk Wholesale</Link>
           </div>
        </div>
      </nav>

      {/* DESKTOP SIDEBAR */}
      <aside className={`fixed top-[130px] left-0 h-[calc(100vh-130px)] w-[280px] bg-white dark:bg-[#12121D] border-r border-gray-200 dark:border-[#2A2A38] z-[40] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] hidden lg:block transition-transform duration-300 ease-in-out shadow-lg ${isDesktopSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="py-2 flex flex-col relative h-full">
          {CATEGORIES.map((category) => {
            const isCategoryOpen = expandedCategories.includes(category.id);
            return (
              <div key={category.id} className="w-full flex flex-col">
                <button onClick={() => toggleCategory(category.id)} className={`w-full flex items-center justify-between px-6 py-4 text-sm transition-colors font-bold ${isCategoryOpen ? 'bg-gray-100 text-[#6324E2] dark:bg-[#1E1E2C] dark:text-[#A67CFF]' : 'bg-white text-gray-800 dark:bg-[#12121D] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1a1a24]'}`}>
                  <div className="flex items-center gap-3"><span className={isCategoryOpen ? 'text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-500'}>{category.icon}</span>{category.name}</div>
                  {category.subcategories && <ChevronDown size={16} className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-400'}`} />}
                </button>
                {isCategoryOpen && category.subcategories && (
                  <div className="flex flex-col bg-gray-50 dark:bg-[#0A0A11] border-y border-gray-200 dark:border-[#2A2A38]">
                    {Object.entries(category.subcategories).map(([title, items], idx) => {
                      const isSubOpen = expandedSubcategories.includes(title);
                      return (
                        <div key={idx} className="flex flex-col">
                          <button onClick={() => toggleSubcategory(title)} className={`flex items-center justify-between w-full px-8 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${isSubOpen ? 'bg-gray-200 text-gray-900 dark:bg-[#2A2A38] dark:text-white' : 'bg-gray-50 text-gray-600 dark:bg-[#0A0A11] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E1E2C]'}`}>
                            {title} <ChevronDown size={14} className={`transition-transform duration-200 ${isSubOpen ? 'rotate-180 text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-500'}`} />
                          </button>
                          {isSubOpen && (
                            <ul className="flex flex-col py-1 pb-3 bg-white dark:bg-[#12121D] shadow-inner">
                              {items.map((item: string, itemIdx: number) => (
                                <li key={itemIdx}><a href="#" className="block px-10 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-[#A67CFF] transition-colors hover:bg-gray-50 dark:hover:bg-[#1E1E2C]/50">{item}</a></li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </aside>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
      <aside className={`fixed top-0 left-0 h-full w-[300px] bg-white dark:bg-[#12121D] border-r border-gray-200 dark:border-[#2A2A38] z-[70] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200 dark:border-[#2A2A38] shrink-0 bg-gray-50 dark:bg-[#0A0A11]">
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Xentra365</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white p-2 bg-gray-200 dark:bg-[#1E1E2C] rounded-lg"><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto pb-8 no-scrollbar bg-white dark:bg-[#12121D]">
          {isUserLoggedIn ? (
            <div className="p-6 border-b border-gray-200 dark:border-[#2A2A38] bg-gray-50 dark:bg-[#1E1E2C]/50">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-[#2A2A38] overflow-hidden flex items-center justify-center text-gray-500"><User size={24}/></div>
                 <div>
                   <div className="font-bold text-gray-900 dark:text-white">Alex Sterling</div>
                   <div className="text-xs text-emerald-600 dark:text-emerald-500 font-bold">Verified Buyer</div>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-4">
                 <Link to="/dashboard" className="flex items-center justify-center bg-[#4812B5] text-white text-sm font-bold py-2.5 rounded-full shadow-lg">Dashboard</Link>
                 <Link to="/wallet" className="flex items-center justify-center bg-white dark:bg-[#1E1E2C] border border-gray-300 dark:border-[#2A2A38] text-gray-900 dark:text-white text-sm font-bold py-2.5 rounded-full">Wallet</Link>
               </div>
            </div>
          ) : (
            <div className="p-6 border-b border-gray-200 dark:border-[#2A2A38] space-y-3 bg-gray-50 dark:bg-[#1E1E2C]/30">
               <Link to="/login" className="flex items-center justify-center bg-[#4812B5] text-white text-sm font-bold py-3 rounded-full shadow-lg">Log In securely</Link>
               <Link to="/register" className="flex items-center justify-center bg-white dark:bg-[#1E1E2C] border border-gray-300 dark:border-[#2A2A38] text-gray-900 dark:text-white text-sm font-bold py-3 rounded-full">Create Account</Link>
            </div>
          )}
          <div className="p-4">
            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">Categories</h3>
            <div className="flex flex-col gap-1">
               {CATEGORIES.map((category) => {
                  const isCategoryOpen = expandedCategories.includes(category.id);
                  return (
                  <div key={category.id} className="flex flex-col">
                    <button onClick={() => toggleCategory(category.id)} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors font-bold ${isCategoryOpen ? 'bg-gray-100 text-gray-900 dark:bg-[#1E1E2C] dark:text-white' : 'bg-white text-gray-700 dark:bg-[#12121D] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1E1E2C]'}`}>
                      <div className="flex items-center gap-3"><span className={isCategoryOpen ? 'text-[#6324E2]' : 'text-gray-400'}>{category.icon}</span>{category.name}</div>
                      {category.subcategories && <ChevronDown size={16} className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-[#6324E2]' : 'text-gray-500'}`} />}
                    </button>
                    {isCategoryOpen && category.subcategories && (
                      <div className="pl-4 pr-2 py-2 flex flex-col gap-1">
                         {Object.entries(category.subcategories).map(([title, items], idx) => {
                           const isSubOpen = expandedSubcategories.includes(title);
                           return (
                             <div key={idx} className="flex flex-col">
                               <button onClick={() => toggleSubcategory(title)} className={`flex items-center justify-between w-full px-4 py-2 text-xs font-bold rounded-lg transition-colors ${isSubOpen ? 'bg-gray-200 text-gray-900 dark:bg-[#2A2A38] dark:text-white' : 'bg-gray-100 text-gray-700 dark:bg-[#1E1E2C] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2A2A38]'}`}>
                                 {title} <ChevronDown size={14} className={`transition-transform duration-200 ${isSubOpen ? 'rotate-180 text-[#6324E2]' : 'text-gray-500'}`} />
                               </button>
                               {isSubOpen && (
                                 <ul className="flex flex-col py-1 pl-4 border-l-2 border-gray-200 dark:border-[#2A2A38] ml-4 mt-1">
                                   {items.map((item: string, i: number) => (
                                     <li key={i}><Link to="#" className="block py-1.5 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-[#A67CFF] rounded-md hover:bg-gray-50 dark:hover:bg-[#1E1E2C]/50">{item}</Link></li>
                                   ))}
                                 </ul>
                               )}
                             </div>
                           )
                         })}
                      </div>
                    )}
                  </div>
                )})}
            </div>
          </div>
        </div>
        {isUserLoggedIn && (
          <div className="p-6 border-t border-gray-200 dark:border-[#2A2A38] bg-gray-50 dark:bg-[#0A0A11] shrink-0">
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-red-100 dark:bg-red-500/10 hover:bg-red-200 dark:hover:bg-red-500/20 text-red-600 dark:text-red-500 text-sm font-bold py-3.5 rounded-full transition-colors border border-red-200 dark:border-red-500/20">
              <LogOut size={18} /> Secure Logout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Header;