import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, HelpCircle, ChevronRight, ChevronDown, 
  Menu, X, ShieldCheck, Zap, Star, Smartphone, Monitor, Home, Shirt, Gamepad2
} from 'lucide-react';

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
  { 
    id: 'appliances', name: 'Appliances', icon: <Home size={18} />,
    subcategories: {
      'Small Appliances': ['Blenders', 'Microwaves', 'Air Fryers', 'Electric Kettles', 'Irons'],
      'Large Appliances': ['Washing Machines', 'Refrigerators', 'Freezers', 'Air Conditioners'],
      'Top Brands': ['LG', 'Hisense', 'Samsung', 'Thermocool']
    }
  },
  { 
    id: 'fashion', name: 'Fashion & Apparel', icon: <Shirt size={18} />,
    subcategories: {
      'Men\'s Fashion': ['T-Shirts & Polos', 'Jeans', 'Sneakers', 'Watches'],
      'Women\'s Fashion': ['Dresses', 'Tops & Blouses', 'Heels & Flats', 'Handbags'],
      'Kids & Baby': ['Boys\' Clothing', 'Girls\' Clothing', 'Baby Essentials']
    }
  },
  { 
    id: 'gaming', name: 'Gaming', icon: <Gamepad2 size={18} />,
    subcategories: {
      'Consoles': ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
      'Video Games': ['PS5 Games', 'PS4 Games', 'Xbox Games', 'Digital Codes'],
      'Accessories': ['Controllers', 'Gaming Headsets', 'Gaming Chairs']
    }
  },
];

const FLASH_SALE_PRODUCTS = [
  { id: 1, name: "Luxury Chronograph Watch", price: "$299.00", oldPrice: "$550.00", discount: "-45%", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", soldProgress: 85 },
  { id: 2, name: "Performance Running Shoes", price: "$120.00", oldPrice: "$170.00", discount: "-30%", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", soldProgress: 40 },
  { id: 3, name: "Noise Cancelling Headphones", price: "$89.50", oldPrice: "$150.00", discount: "-60%", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", soldProgress: 95 },
  { id: 4, name: "Minimalist Smart Speaker", price: "$45.00", oldPrice: "$60.00", discount: "-15%", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", soldProgress: 12 }
];

const RECOMMENDED_PRODUCTS = [
  { id: 5, name: "Ultra-Slim Pro Laptop Gen 4", price: "$1,299.00", oldPrice: "$1,500.00", rating: 4.8, reviews: "1.2k", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", tag: "Verified" },
  { id: 6, name: "Retro Style Instant Film Camera", price: "$150.00", oldPrice: null, rating: 4.6, reviews: "320", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", tag: "Escrow" },
  { id: 7, name: "Classic Aviator Sunglasses - UV400", price: "$55.00", oldPrice: null, rating: 4.9, reviews: "450", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80", tag: "Escrow" },
  { id: 8, name: "Minimalist Designer Tote Bag", price: "$68.00", oldPrice: null, rating: 4.5, reviews: "110", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80", tag: "Verified" },
  { id: 9, name: "Classic Biker Leather Jacket", price: "$350.00", oldPrice: null, rating: 4.9, reviews: "89", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80", tag: "Verified" },
  { id: 10, name: "Statement High-Heels - Red Velvet", price: "$180.00", oldPrice: null, rating: 4.7, reviews: "210", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80", tag: "Escrow" },
  { id: 11, name: "Professional Drone with 4K Camera", price: "$850.00", oldPrice: "$999.00", rating: 4.9, reviews: "540", image: "https://images.unsplash.com/photo-1507580461123-66f6004b509c?w=400&q=80", tag: "Verified" },
  { id: 12, name: "Mechanical Gaming Keyboard RGB", price: "$120.00", oldPrice: null, rating: 4.8, reviews: "890", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80", tag: "Escrow" },
  { id: 13, name: "Curved Ultrawide Monitor 34\"", price: "$450.00", oldPrice: "$550.00", rating: 4.6, reviews: "320", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80", tag: "Verified" },
  { id: 14, name: "Waterproof Smartwatch Series 8", price: "$199.00", oldPrice: "$250.00", rating: 4.7, reviews: "410", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80", tag: "Verified" },
  { id: 15, name: "Wireless Charging Pad", price: "$29.00", oldPrice: null, rating: 4.4, reviews: "150", image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400&q=80", tag: "Escrow" },
  { id: 16, name: "Ergonomic Office Chair", price: "$210.00", oldPrice: "$280.00", rating: 4.8, reviews: "670", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&q=80", tag: "Verified" },
];

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // State for mega menu

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans pb-20 overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50 shadow-xl">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4">
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

           <div className="flex-1 max-w-2xl hidden md:block relative">
                       <input 
                         type="text" placeholder="Search marketplace (e.g. RTX 4090...)" 
                         className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-10 pr-16 text-sm focus:outline-none focus:border-[#6324E2] text-white"
                       />
                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                       <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                          <span className="bg-[#2A2A38] text-gray-400 text-[10px] px-2 py-1 rounded">⌘</span>
                          <span className="bg-[#2A2A38] text-gray-400 text-[10px] px-2 py-1 rounded">K</span>
                       </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0">
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Escrow</span>
              </div>
              
              <Link to="/cart" className="flex flex-col items-center gap-1 relative text-gray-400 hover:text-white transition-colors">
                <ShoppingCart size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold text-white">0</span>
              </Link>

              {/* Desktop Account Dropdown */}
              <div className="relative group hidden lg:block">
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors py-2">
                  <User size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Login <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform"/></span>
                </div>
                <div className="absolute top-full right-0 w-64 bg-[#1E1E2C] border border-[#2A2A38] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-4 transform translate-y-2">
                  <Link to="/login" className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-3 rounded text-center transition-colors shadow-lg active:scale-[0.98]">
                    LOGIN
                  </Link>
                  <div className="mt-4 text-center border-b border-[#2A2A38] pb-4">
                    <Link to="/register" className="text-xs font-medium text-gray-400 hover:text-white transition-colors">
                      New customer? <span className="text-[#6324E2] hover:underline ml-1 font-bold">Create Account</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Login Icon */}
              <Link to="/login" className="lg:hidden text-gray-400 hover:text-white transition-colors p-1">
                <User size={22} />
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden mt-4 w-full relative">
            <input 
              type="text" placeholder="Search products..." 
              className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-4 pr-10 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-[#6324E2] rounded-full flex items-center justify-center">
              <Search size={12} className="text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Sub-Nav */}
        <div className="hidden lg:flex items-center justify-between px-8 py-3 bg-[#0A0A11] border-b border-[#2A2A38] text-sm">
           <div className="flex gap-8 font-medium text-gray-400">
             <a href="#" className="text-white border-b-2 border-[#6324E2] pb-1">Home</a>
             <a href="#" className="hover:text-white transition-colors">Electronics</a>
             <a href="#" className="hover:text-white transition-colors">Fashion</a>
             <a href="#" className="hover:text-white transition-colors">Home & Living</a>
             <a href="#" className="hover:text-white transition-colors">Health & Beauty</a>
             <a href="#" className="hover:text-white transition-colors">Gadgets</a>
             <a href="#" className="hover:text-white transition-colors">Collectibles</a>
           </div>
           <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
             <ShieldCheck size={16} /> Trust Center
           </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6 lg:space-y-8">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-6 relative" onMouseLeave={() => setActiveCategory(null)}>
          
          {/* Sidebar (with Hover Logic) */}
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

          {/* Desktop Mega Menu Flyout (Overlays banner) */}
          {activeCategory && CATEGORIES.find(c => c.id === activeCategory)?.subcategories && (
            <div className="hidden lg:flex absolute left-64 top-0 h-full w-[700px] bg-[#12121D]/95 backdrop-blur-xl border border-[#2A2A38] rounded-2xl shadow-2xl p-8 z-50 gap-8 animate-in fade-in slide-in-from-left-2 duration-200">
              {Object.entries(CATEGORIES.find(c => c.id === activeCategory)!.subcategories!).map(([title, items], idx) => (
                <div key={idx} className="flex-1">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#2A2A38] pb-2 mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx}>
                        <a href="#" className="text-sm text-gray-400 hover:text-[#6324E2] transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Banner */}
          <div className="flex-1 bg-gradient-to-r from-[#170E3A] to-[#0A0A11] border border-[#2A2A38] rounded-2xl p-8 lg:p-16 relative overflow-hidden flex items-center min-h-[300px] lg:min-h-[450px]">
            <div className="relative z-10 max-w-xl">
              <span className="bg-[#6324E2] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">Exclusive Launch</span>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight">Secure Your<br/>Next Tech Upgrade.</h1>
              <p className="text-gray-400 text-sm lg:text-base mb-8 leading-relaxed max-w-md">100% Escrow protected transactions. Verified sellers only. Shop with zero risk on Xentra365.</p>
              <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold px-8 py-3.5 rounded-lg transition-colors shadow-lg shadow-purple-900/20 active:scale-95">
                Shop Collection
              </button>
            </div>
            {/* Abstract Graphic Element */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 lg:opacity-100 pointer-events-none flex justify-end">
               <div className="w-96 h-96 border-[40px] border-[#6324E2]/20 rounded-full absolute -right-20 top-1/2 transform -translate-y-1/2 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* --- MIDDLE ROW (Flash Sale & Why Xentra) --- */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Flash Sale Container */}
          <div className="flex-1 bg-[#12121D] border border-[#2A2A38] rounded-2xl p-5 lg:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2"><Zap className="text-orange-500" fill="currentColor" size={20}/> Flash Sale</h2>
                <div className="hidden sm:flex items-center gap-1.5 font-mono text-sm">
                  <span className="bg-[#1E1E2C] px-2 py-1 rounded">04</span><span>:</span>
                  <span className="bg-[#1E1E2C] px-2 py-1 rounded">22</span><span>:</span>
                  <span className="bg-[#1E1E2C] px-2 py-1 rounded">59</span>
                </div>
              </div>
              <button className="text-sm font-medium text-[#6324E2] hover:text-white transition-colors">View All</button>
            </div>
            
            {/* Responsive Grid inside Flash Sale */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FLASH_SALE_PRODUCTS.map((product) => (
                <div key={product.id} className="bg-[#0A0A11] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl p-3 flex flex-col transition-all cursor-pointer group">
                  <div className="relative aspect-square bg-[#1E1E2C] rounded-lg mb-3 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">{product.discount}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-[#6324E2] text-sm lg:text-base mb-1">{product.price}</div>
                    <div className="w-full bg-[#1E1E2C] h-1.5 rounded-full overflow-hidden mb-1">
                      <div className="bg-orange-500 h-full" style={{ width: `${product.soldProgress}%` }}></div>
                    </div>
                    <div className="text-[9px] text-gray-500">{product.soldProgress}% Sold</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Xentra Sidebar */}
          <div className="w-full lg:w-[380px] bg-gradient-to-b from-[#4812B5] to-[#2A1854] rounded-2xl p-6 lg:p-8 flex flex-col shrink-0 shadow-xl border border-[#6324E2]/30">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={24}/> Why Xentra365?
            </h2>
            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><ShieldCheck size={16} className="text-white"/></div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Xentra Escrow</h4>
                  <p className="text-[11px] text-purple-200 leading-relaxed">Funds are held securely until you confirm receipt and satisfaction.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><User size={16} className="text-white"/></div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Verified Merchants</h4>
                  <p className="text-[11px] text-purple-200 leading-relaxed">Every seller undergoes a rigorous identity and quality audit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><HelpCircle size={16} className="text-white"/></div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">24/7 Mediation</h4>
                  <p className="text-[11px] text-purple-200 leading-relaxed">Human support to resolve any transaction disputes instantly.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] font-bold text-purple-200 uppercase tracking-wider mb-1">TOTAL SECURED VOLUME</div>
              <div className="text-2xl font-black text-white">$12,450,293</div>
            </div>
          </div>

        </div>

        {/* --- RECOMMENDED PRODUCTS GRID --- */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-2"><Star className="text-blue-500" fill="currentColor" size={20}/> Recommended For You</h2>
            <div className="hidden sm:flex gap-2">
              <button className="bg-[#1E1E2C] text-white text-xs font-bold px-4 py-2 rounded-full border border-[#2A2A38] hover:border-[#6324E2]">Personalized</button>
              <button className="text-gray-400 text-xs font-bold px-4 py-2 hover:text-white">New Arrivals</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <div key={product.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl p-3 lg:p-4 group cursor-pointer transition-all flex flex-col h-full">
                <div className="aspect-square bg-[#1E1E2C] rounded-lg mb-3 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="bg-[#6324E2] text-white text-xs font-bold px-4 py-2 rounded shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className={`text-[8px] lg:text-[9px] font-bold px-1.5 py-0.5 rounded ${product.tag === 'Verified' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#6324E2]/20 text-[#A67CFF]'}`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xs font-medium text-gray-300 line-clamp-2 mb-3 h-8 group-hover:text-white transition-colors">{product.name}</h3>
                
                <div className="mt-auto flex items-end justify-between">
                  <div className="font-bold text-[#A67CFF] text-sm lg:text-base">{product.price}</div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500">
                    <Star size={10} className="text-yellow-500" fill="currentColor"/> {product.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="bg-[#12121D] border border-[#2A2A38] text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-[#1E1E2C] transition-colors">
              Load More Recommendations
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;