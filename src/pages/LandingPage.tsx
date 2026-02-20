import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, HelpCircle, Phone, Package, 
  Smartphone, Monitor, Home, Shirt, Gamepad2, ChevronRight, ChevronDown, Star, Menu, X, Sun, Moon
} from 'lucide-react';

// --- MOCK DATA ---
const CATEGORIES = [
  {
    id: 'phones', name: 'Phones & Tablets', icon: <Smartphone size={18} />,
    subcategories: {
      'Mobile Phones': ['Smartphones', 'Android Phones', 'iPhones', 'Refurbished Phones'],
      'Tablets': ['iPads', 'Android Tablets', 'Educational Tablets'],
      'Mobile Accessories': ['Accessory Kits', 'Adapters & Cables', 'Power Banks', 'Smartwatches'],
      'Top Brands': ['Apple', 'Samsung', 'Xiaomi', 'Tecno']
    }
  },
  {
    id: 'electronics', name: 'Electronics', icon: <Monitor size={18} />,
    subcategories: {
      'Television & Video': ['Smart TVs', 'LED & LCD TVs', 'TV Accessories', 'Projectors'],
      'Cameras & Photos': ['Digital Cameras', 'Video Surveillance', 'Drones'],
      'Home Audio': ['Home Theatre Systems', 'Sound Bars', 'Bluetooth Speakers'],
    }
  },
  { id: 'appliances', name: 'Appliances', icon: <Home size={18} /> },
  { id: 'fashion', name: 'Fashion & Apparel', icon: <Shirt size={18} /> },
  { id: 'gaming', name: 'Gaming', icon: <Gamepad2 size={18} /> },
];

const FLASH_SALE_PRODUCTS = [
  { id: 1, name: "PlayStation 5 + eFootball Bundle", price: "₦850,000", oldPrice: "₦950,000", discount: "-11%", image: "🎮", soldOut: 85 },
  { id: 2, name: "Arduino Mega 2560 Complete Kit", price: "₦45,000", oldPrice: "₦60,000", discount: "-25%", image: "🤖", soldOut: 42 },
  { id: 3, name: "MacBook Pro M3 Max 1TB", price: "₦3,200,000", oldPrice: "₦3,500,000", discount: "-8%", image: "💻", soldOut: 92 },
  { id: 4, name: "Smart Home Security Camera", price: "₦25,000", oldPrice: "₦40,000", discount: "-37%", image: "📷", soldOut: 15 },
  { id: 5, name: "Wireless Noise-Cancelling Headphones", price: "₦85,000", oldPrice: "₦120,000", discount: "-29%", image: "🎧", soldOut: 64 },
  { id: 6, name: "Samsung 65-inch 4K Smart TV", price: "₦650,000", oldPrice: "₦800,000", discount: "-18%", image: "📺", soldOut: 78 }
];

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // THEME STATE

  // Dynamic Theme Classes
  const themeBg = isDarkMode ? 'bg-[#13131D] text-white' : 'bg-gray-50 text-gray-900';
  const navBg = isDarkMode ? 'bg-[#1E1E2C] border-gray-800' : 'bg-white border-gray-200';
  const cardBg = isDarkMode ? 'bg-[#1E1E2C] border-gray-800' : 'bg-white border-gray-200 shadow-sm';
  const itemBg = isDarkMode ? 'bg-[#13131D]' : 'bg-gray-50';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen w-screen font-sans pb-20 overflow-x-hidden transition-colors duration-300 ${themeBg}`}>
      
      {/* --- NAVBAR --- */}
      <nav className={`${navBg} border-b sticky top-0 z-50 shadow-lg transition-colors duration-300`}>
        <div className="max-w-[1400px] mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <button className={`lg:hidden ${textMuted} hover:text-[#6324E2]`} onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
                <span className="text-xl lg:text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 max-w-3xl">
              <div className="relative flex-1">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${textMuted}`} size={20} />
                <input 
                  type="text" placeholder="Search products, brands and categories..." 
                  className={`w-full ${itemBg} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-l-lg py-3 pl-12 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors`}
                />
              </div>
              <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white px-8 rounded-r-lg font-semibold transition-colors shadow-lg">SEARCH</button>
            </div>

            {/* Right Actions - Now includes Theme Toggle and Mobile Account Icon */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
              
              {/* Theme Toggle Button */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
              </button>

              {/* Mobile Account Icon (Navigates straight to login) */}
              <Link to="/login" className={`lg:hidden ${textMuted} hover:text-[#6324E2] transition-colors p-1`}>
                <User size={22} />
              </Link>

              {/* Desktop Account Dropdown */}
              <div className="relative group hidden lg:block">
                <div className={`flex items-center gap-2 hover:text-[#6324E2] transition-colors cursor-pointer py-2 ${textMuted}`}>
                  <User size={20} />
                  <span className="font-medium">Account</span>
                  <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div className={`absolute top-full right-0 w-64 ${cardBg} rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-4 transform translate-y-2 group-hover:translate-y-0`}>
                  <Link to="/login" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-3 rounded text-center transition-colors shadow-lg active:scale-[0.98]">
                    LOGIN
                  </Link>
                  <div className={`mt-4 text-center border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} pb-4`}>
                    <Link to="/register" className={`text-xs font-medium ${textMuted} hover:text-[#6324E2] transition-colors`}>
                      New customer? <span className="text-[#6324E2] hover:underline ml-1 font-bold">Create Account</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/help" className={`hidden sm:flex items-center gap-2 hover:text-[#6324E2] transition-colors py-2 ${textMuted}`}>
                <HelpCircle size={20} />
                <span className="font-medium hidden lg:block">Help</span>
              </Link>
              
              <Link to="/cart" className={`flex items-center gap-2 hover:text-[#6324E2] transition-colors relative py-2 ${textMuted}`}>
                <ShoppingCart size={24} lg:size={20} />
                <span className="font-medium hidden lg:block">Cart</span>
                <span className="absolute top-0 lg:-top-2 -right-2 lg:-right-3 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg text-white">0</span>
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden mt-3 w-full">
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textMuted}`} size={18} />
              <input 
                type="text" placeholder="Search products..." 
                className={`w-full ${itemBg} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm`}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <main className="max-w-[1400px] mx-auto px-4 py-4 lg:py-6 space-y-4 lg:space-y-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-4 relative" onMouseLeave={() => setActiveCategory(null)}>
          
          <div className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-64 ${navBg} z-50 lg:z-40 lg:rounded-lg shadow-2xl lg:shadow-xl shrink-0 flex flex-col py-2 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className={`flex items-center justify-between px-4 py-3 lg:hidden border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mb-2`}>
              <span className="font-bold uppercase tracking-wider text-sm">Categories</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className={textMuted}><X size={20} /></button>
            </div>

            <div className="overflow-y-auto lg:overflow-visible flex-1">
              {CATEGORIES.map((category) => (
                <div 
                  key={category.id} onMouseEnter={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${activeCategory === category.id ? 'text-[#6324E2] bg-[#6324E2]/10' : `${textMuted} hover:bg-gray-500/10`}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeCategory === category.id ? 'text-[#6324E2]' : textMuted}>{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  {category.subcategories && <ChevronRight size={16} className={`hidden lg:block ${activeCategory === category.id ? 'text-[#6324E2]' : textMuted}`} />}
                </div>
              ))}
            </div>
            
            <div className={`lg:hidden p-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mt-auto`}>
               <Link to="/login" className="w-full block bg-[#6324E2] text-white text-center text-sm font-bold py-3 rounded-lg mb-3">Login / Register</Link>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-r from-[#39138B] to-[#1E1E2C] rounded-lg overflow-hidden relative flex items-center p-6 sm:p-8 lg:p-12 shadow-xl min-h-[250px] lg:min-h-[400px]">
            <div className="z-10 w-full sm:max-w-md lg:max-w-lg">
              <span className="bg-[#6324E2] text-white text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 lg:mb-4 inline-block shadow-[0_0_10px_rgba(99,36,226,0.5)]">Official Store</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 lg:mb-4 leading-tight">Next-Gen Tech<br/>Essentials at 40% Off</h2>
              <p className="text-gray-300 mb-6 lg:mb-8 text-xs lg:text-sm leading-relaxed hidden sm:block">Upgrade your digital lifestyle with uncompromising security. Verified vendors only.</p>
              <button className="bg-white text-[#13131D] text-sm lg:text-base font-bold px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg hover:bg-gray-200 transition-colors shadow-lg active:scale-95">SHOP NOW</button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 lg:w-96 lg:h-96 bg-[#6324E2] rounded-full mix-blend-multiply filter blur-2xl lg:blur-3xl opacity-50"></div>
          </div>

          <div className="w-full lg:w-64 shrink-0 flex flex-row lg:flex-col gap-4 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <div className={`${cardBg} rounded-lg p-4 flex flex-col gap-4 min-w-[200px] flex-1 lg:flex-none`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6324E2]/20 flex items-center justify-center text-[#6324E2]"><Phone size={18} /></div>
                <div>
                  <div className={`text-[10px] ${textMuted} uppercase font-bold tracking-wider`}>Call to Order</div>
                  <div className="text-xs lg:text-sm font-bold">0700-XENTRA</div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[200px] lg:flex-none bg-gradient-to-br from-orange-500 to-[#13131D] rounded-lg p-4 lg:p-6 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group cursor-pointer">
              <h3 className="text-lg lg:text-xl font-black text-white mb-1">XENTRA FORCE</h3>
              <p className="text-gray-200 text-[10px] lg:text-xs font-medium mb-3 lg:mb-4">Refer and earn today!</p>
              <button className="bg-black text-white text-[10px] lg:text-xs font-bold py-1.5 px-4 lg:py-2 lg:px-6 rounded hover:bg-gray-800 transition-colors z-10">JOIN NOW</button>
            </div>
          </div>
        </div>

        {/* --- FLASH SALES SECTION --- */}
        <div className={`${cardBg} rounded-lg overflow-hidden`}>
          <div className="bg-gradient-to-r from-red-600 to-red-800 px-4 py-3 lg:px-6 lg:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="bg-white text-red-600 p-1 lg:p-1.5 rounded flex items-center justify-center"><Gamepad2 size={16} className="lg:w-5 lg:h-5"/></span>
              <h2 className="text-lg lg:text-xl font-black text-white uppercase tracking-wider">Flash Sales</h2>
            </div>
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
              <div className="flex items-center gap-1.5 font-bold text-sm lg:text-lg">
                <span className="text-xs lg:text-sm font-medium text-red-100 mr-1">Ends in:</span>
                <span className="bg-black/50 px-2 py-1 rounded text-white">08h</span><span className="text-white">:</span>
                <span className="bg-black/50 px-2 py-1 rounded text-white">45m</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 lg:p-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
            {FLASH_SALE_PRODUCTS.map((product) => (
              <div key={product.id} className={`${itemBg} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} hover:border-[#6324E2] rounded-lg p-2.5 lg:p-3 group cursor-pointer transition-all flex flex-col`}>
                <div className={`relative aspect-square ${isDarkMode ? 'bg-[#1E1E2C]' : 'bg-white'} rounded-md mb-2 lg:mb-3 flex items-center justify-center text-4xl lg:text-5xl`}>
                  {product.image}
                  <span className="absolute top-1.5 right-1.5 bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded">{product.discount}</span>
                </div>
                <h3 className={`text-[11px] lg:text-xs font-medium line-clamp-2 mb-2 group-hover:text-[#6324E2] transition-colors h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{product.name}</h3>
                <div className="mt-auto">
                  <div className="font-bold mb-0.5 text-sm lg:text-base">{product.price}</div>
                  <div className={`text-[9px] lg:text-[10px] ${textMuted} line-through mb-2`}>{product.oldPrice}</div>
                  <div className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} h-1.5 rounded-full overflow-hidden`}>
                    <div className="bg-red-500 h-full" style={{ width: `${product.soldOut}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;