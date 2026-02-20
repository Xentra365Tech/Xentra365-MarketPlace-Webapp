import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, Bell, ShoppingCart, User, ChevronDown, Monitor,
  Wrench, Code, ShieldCheck, Zap, Grid, List, Clock, LogOut, Menu, X, ChevronRight, Smartphone
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'electronics', name: 'Electronics', icon: <Monitor size={16} />,
    subcategories: {
      'Television & Video': ['Smart TVs', 'LED & LCD TVs', 'TV Accessories', 'Projectors'],
      'Cameras & Photos': ['Digital Cameras', 'Video Surveillance', 'Drones'],
      'Home Audio': ['Home Theatre Systems', 'Sound Bars', 'Bluetooth Speakers'],
    }
  },
  {
    id: 'phones', name: 'Phones & Tablets', icon: <Smartphone size={16} />,
    subcategories: {
      'Mobile Phones': ['Smartphones', 'Android Phones', 'iPhones', 'Refurbished Phones'],
      'Tablets': ['iPads', 'Android Tablets'],
    }
  },
  { 
    id: 'software', name: 'Software & Keys', icon: <Code size={16} />, active: true,
    subcategories: {
      'Enterprise': ['SaaS Licenses', 'Server Tools', 'Cloud Storage'],
      'Security': ['Tokens', 'Antivirus', 'VPN Keys'],
    }
  },
  { id: 'b2b', name: 'B2B Services', icon: <Wrench size={16} /> },
];

const PRODUCTS = [
  { id: 1, name: "X-Pro Server Cluster Node - 128GB RAM", price: "$1,299.00", oldPrice: "$1,550", rating: 4.8, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80", tag: "Verified" },
  { id: 2, name: "Enterprise Security Token v4.0", price: "$89.00", rating: 4.9, image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?w=400&q=80", tag: "Escrow" },
  { id: 3, name: "Quantum Core Neural Processor Units", price: "$4,500.00", rating: 5.0, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", tag: "SPONSORED", fastShipping: true },
  { id: 4, name: "AcousticSeal Noise-Cancelling B2B", price: "$149.00", rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", tag: "Verified" },
  { id: 5, name: "SaaS Integration Engine - Enterprise License", price: "$2,100.00", rating: 4.8, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", tag: "Escrow" },
  { id: 6, name: "TensorFlow Optimized GPU - 24GB VRAM", price: "$1,899.00", rating: 4.9, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80", tag: "Verified" },
  { id: 7, name: "Managed 48-Port PoE Fiber Switch", price: "$670.00", rating: 4.6, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80", tag: "Escrow" },
  { id: 8, name: "Industrial Grade IoT Sensor Array", price: "$345.00", rating: 4.7, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", tag: "Verified" },
  { id: 9, name: "Cloud Storage Array - 100TB HDD", price: "$3,400.00", oldPrice: "$4,000", rating: 4.9, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80", tag: "Verified" },
  { id: 10, name: "Biometric Access Control System", price: "$550.00", rating: 4.5, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80", tag: "Escrow" },
  { id: 11, name: "Enterprise Wi-Fi 6 Access Point", price: "$220.00", rating: 4.8, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80", tag: "Verified" },
  { id: 12, name: "Automated Robot Arm Controller", price: "$1,250.00", rating: 4.7, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80", tag: "Escrow" },
];

const RECENT_ORDERS = [
  { id: "#ORD-98211", name: "RTX 4090 Workstation", eta: "ETA: 2 Days", price: "$1,450.00", status: "SHIPPED", statusColor: "text-orange-400" },
  { id: "#ORD-98190", name: "API License (Premium)", eta: "July 22, 2023", price: "$299.00", status: "COMPLETED", statusColor: "text-green-400" },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleLogout = () => navigate('/');

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
            <button className="md:hidden text-gray-400 hover:text-white"><Search size={20} /></button>
            
            <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors">
               <Bell size={20} />
               <span className="text-[10px] font-bold uppercase tracking-wider">Alerts</span>
            </div>

            <Link to="/cart" className="flex flex-col items-center gap-1 relative text-gray-400 hover:text-white transition-colors">
              <ShoppingCart size={20} />
              <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Cart</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center">0</span>
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

        <div className="bg-[#4812B5] px-4 lg:px-6 py-2 flex items-center gap-6 lg:gap-8 text-sm font-medium overflow-x-auto whitespace-nowrap no-scrollbar">
          <a href="#" className="text-white border-b-2 border-white pb-0.5 shrink-0">All Items</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors shrink-0">Priority Sellers</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors shrink-0">Local Marketplace</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors shrink-0">Promotions</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors shrink-0">Bulk Wholesale</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors shrink-0">New Arrivals</a>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* --- MAIN DASHBOARD LAYOUT --- */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-6 py-6 flex flex-col lg:flex-row gap-6 items-start" onMouseLeave={() => setActiveCategory(null)}>
        
        {/* Sidebar (With Hover Logic) */}
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${cat.active || activeCategory === cat.id ? 'bg-[#2A1854] text-[#A67CFF]' : 'text-gray-400 hover:bg-[#1E1E2C] hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">{cat.icon} {cat.name}</div>
                  {(cat.subcategories || cat.active) && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-4 mt-auto lg:mt-0">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">PARTNER BENEFITS</h3>
            <div className="bg-gradient-to-r from-[#6324E2] to-[#4812B5] rounded-lg p-4">
              <h4 className="font-bold text-white mb-1">Xentra Prime</h4>
              <p className="text-xs text-purple-200 mb-3 leading-relaxed">Get 0% escrow fees on all industrial orders.</p>
              <button className="w-full bg-white text-[#6324E2] font-bold text-xs py-2 rounded">Join Now</button>
            </div>
          </div>
        </aside>

        {/* Mega Menu Flyout for Dashboard Sidebar */}
        {activeCategory && CATEGORIES.find(c => c.id === activeCategory)?.subcategories && (
          <div className="hidden lg:flex absolute left-64 top-6 h-[500px] w-[500px] bg-[#12121D]/95 backdrop-blur-xl border border-[#2A2A38] rounded-2xl shadow-2xl p-6 z-50 gap-8 animate-in fade-in slide-in-from-left-2 duration-200">
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

        <main className="flex-1 w-full flex flex-col gap-6 relative z-10">
          
          <div className="bg-gradient-to-r from-[#2A1854] to-[#12121D] rounded-xl border border-[#2A2A38] p-6 lg:p-8 relative overflow-hidden flex items-center justify-between">
             <div className="relative z-10 w-full lg:max-w-lg">
               <span className="bg-[#6324E2] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">Flash Sale</span>
               <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">Global Trade Summit Deals</h1>
               <p className="text-gray-400 text-xs lg:text-sm mb-6">Up to 45% off on high-performance server clusters and networking hardware.</p>
               <div className="flex flex-col sm:flex-row gap-3">
                 <button className="w-full sm:w-auto bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors text-center">Browse Sale</button>
                 <button className="w-full sm:w-auto bg-[#2A2A38] hover:bg-gray-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors text-center">Details</button>
               </div>
             </div>
             <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#4812B5]/40 to-transparent"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#12121D] border-b border-[#2A2A38] pb-4">
            <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap no-scrollbar pb-2 sm:pb-0 text-sm">
              <span className="text-gray-500 font-medium shrink-0">SORT BY:</span>
              <button className="bg-[#6324E2] text-white px-4 py-1.5 rounded-full font-medium shrink-0">Recommended</button>
              <button className="text-gray-400 hover:text-white transition-colors shrink-0">Newest</button>
              <button className="text-gray-400 hover:text-white transition-colors shrink-0">Price: Low to High</button>
              <button className="text-gray-400 hover:text-white transition-colors shrink-0">Top Rated</button>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0 border-l border-[#2A2A38] pl-4">
              <span className="text-gray-500 text-sm font-medium">View:</span>
              <button className="text-[#6324E2]"><Grid size={18} fill="currentColor" /></button>
              <button className="text-gray-500 hover:text-white"><List size={18} /></button>
            </div>
          </div>

          {/* Product Grid - ENFORCED 2 ITEMS ON MOBILE, 3 ON TABLET, 4 ON DESKTOP */}
          <div>
            <h2 className="text-sm font-bold text-[#6324E2] uppercase tracking-wider mb-4">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
              {PRODUCTS.map(product => (
                <div key={product.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl p-2.5 lg:p-4 flex flex-col group cursor-pointer transition-colors relative">
                  
                  {product.tag && (
                    <span className={`absolute top-2 left-2 lg:top-4 lg:left-4 text-[8px] lg:text-[10px] font-bold px-1.5 py-0.5 lg:px-2 lg:py-0.5 rounded z-10 ${
                      product.tag === 'Verified' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#6324E2] text-white'
                    }`}>
                      {product.tag}
                    </span>
                  )}

                  <div className="aspect-square bg-[#1E1E2C] rounded-lg mb-2 lg:mb-4 relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="flex items-center gap-1 text-[#6324E2] text-[8px] lg:text-[10px] font-bold uppercase tracking-wider mb-1 lg:mb-2">
                    <ShieldCheck size={10} className="lg:w-3 lg:h-3" /> <span className="hidden sm:inline">ESCROW PROTECTED</span><span className="sm:hidden">ESCROW</span>
                  </div>

                  <h3 className="text-[11px] lg:text-sm text-gray-300 font-medium line-clamp-2 mb-2 lg:mb-3 h-8 lg:h-10 group-hover:text-white transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <div className="font-bold text-[#A67CFF] text-sm lg:text-lg">{product.price}</div>
                      {product.oldPrice && <div className="text-[9px] lg:text-xs text-gray-500 line-through">{product.oldPrice}</div>}
                    </div>
                    <button className="w-6 h-6 lg:w-8 lg:h-8 bg-[#2A1854] text-[#A67CFF] rounded-md lg:rounded-lg flex items-center justify-center hover:bg-[#6324E2] hover:text-white transition-colors">
                      <ShoppingCart size={12} className="lg:w-3.5 lg:h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center gap-2 mt-8 lg:mt-10">
              <button className="w-8 h-8 flex items-center justify-center bg-[#1E1E2C] text-gray-400 rounded hover:text-white">&lt;</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#6324E2] text-white rounded font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1E1E2C] text-gray-400 rounded hover:text-white">2</button>
              <span className="text-gray-500">...</span>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1E1E2C] text-gray-400 rounded hover:text-white">15</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1E1E2C] text-gray-400 rounded hover:text-white">&gt;</button>
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

          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-5 flex-1">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider">RECENT ORDERS</h3>
                 <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-white">View All</a>
              </div>

              <div className="flex flex-col gap-5">
                {RECENT_ORDERS.map((order, i) => (
                  <div key={i} className={i !== 0 ? "pt-5 border-t border-[#2A2A38]" : ""}>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-medium text-gray-400">{order.id}</span>
                      <span className={`text-[10px] font-bold ${order.statusColor}`}>{order.status}</span>
                    </div>
                    <h4 className="text-xs lg:text-sm font-medium text-white mb-2">{order.name}</h4>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] text-gray-500 flex items-center gap-1"><Clock size={10}/> {order.eta}</span>
                      <span className="text-sm font-bold text-[#A67CFF]">{order.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1E1E2C] border border-[#2A2A38] rounded-xl p-5 text-center flex flex-col items-center justify-center md:hidden lg:flex">
               <div className="w-10 h-10 bg-[#2A1854] text-[#6324E2] rounded-full flex items-center justify-center mb-3">
                 <ShieldCheck size={20} />
               </div>
               <h4 className="font-bold text-white text-sm mb-2">100% Escrow Protection</h4>
               <p className="text-[10px] text-gray-400 mb-4 leading-relaxed">Your funds are only released when you confirm delivery.</p>
               <a href="#" className="text-xs text-[#A67CFF] hover:underline font-medium">Learn more about security</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;