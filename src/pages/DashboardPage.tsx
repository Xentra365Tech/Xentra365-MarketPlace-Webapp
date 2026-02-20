import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Bell, ShoppingCart, User, ChevronDown, Monitor, Shirt, 
  Wrench, Code, Bot, Star, ShieldCheck, Zap, Grid, List, Clock, LogOut, Menu, X, Sun, Moon
} from 'lucide-react';

const SIDEBAR_CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: <Monitor size={16} /> },
  { id: 'software', name: 'Software & Keys', icon: <Code size={16} />, active: true },
  { id: 'b2b', name: 'B2B Services', icon: <Wrench size={16} /> },
];

const PRODUCTS = [
  { id: 1, name: "X-Pro Server Cluster Node - 128GB RAM", price: "$1,299.00", oldPrice: "$1,550", rating: 4.8, image: "🖥️", tag: "Verified" },
  { id: 2, name: "Enterprise Security Token v4.0", price: "$89.00", rating: 4.9, image: "🔑" },
  { id: 3, name: "Quantum Core Neural Processor Units", price: "$4,500.00", rating: 5.0, image: "🧠", tag: "SPONSORED", fastShipping: true },
  { id: 4, name: "AcousticSeal Noise-Cancelling B2B", price: "$149.00", rating: 4.5, image: "🎧" },
];

const RECENT_ORDERS = [
  { id: "#ORD-98211", name: "RTX 4090 Workstation", eta: "ETA: 2 Days", price: "$1,450.00", status: "SHIPPED", statusColor: "text-orange-400" },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // THEME STATE

  // Dynamic Theme Classes
  const themeBg = isDarkMode ? 'bg-[#0A0A11] text-white' : 'bg-gray-100 text-gray-900';
  const navBg = isDarkMode ? 'bg-[#12121D] border-[#2A2A38]' : 'bg-white border-gray-200';
  const cardBg = isDarkMode ? 'bg-[#12121D] border-[#2A2A38]' : 'bg-white border-gray-200 shadow-sm';
  const itemBg = isDarkMode ? 'bg-[#1E1E2C]' : 'bg-gray-50';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const handleLogout = () => navigate('/');

  return (
    <div className={`min-h-screen w-screen font-sans flex flex-col overflow-x-hidden transition-colors duration-300 ${themeBg}`}>
      
      {/* --- TOP NAVBAR --- */}
      <nav className={`${navBg} border-b sticky top-0 z-40 transition-colors duration-300`}>
        <div className="px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 shrink-0">
            <button className={`lg:hidden ${textMuted} hover:text-[#6324E2]`} onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6324E2] rounded flex items-center justify-center font-bold text-lg text-white">X</div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">Xentra365</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl hidden md:block relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textMuted}`} size={16} />
            <input 
              type="text" placeholder="Search marketplace..." 
              className={`w-full ${itemBg} border ${isDarkMode ? 'border-[#2A2A38]' : 'border-gray-300'} rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#6324E2] transition-colors`}
            />
          </div>

          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            
            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-[#2A2A38]' : 'hover:bg-gray-100'} transition-colors`}
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>

            <button className={`${textMuted} hover:text-[#6324E2] flex flex-col items-center gap-1`}>
              <Bell size={20} lg:size={18} />
            </button>
            <button className={`${textMuted} hover:text-[#6324E2] flex flex-col items-center gap-1 relative`}>
              <ShoppingCart size={20} lg:size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative group">
              <div className={`flex items-center gap-3 pl-2 lg:pl-4 lg:border-l ${isDarkMode ? 'border-[#2A2A38]' : 'border-gray-200'} cursor-pointer py-2`}>
                <div className={`w-8 h-8 lg:w-9 lg:h-9 ${itemBg} rounded-full flex items-center justify-center ${textMuted}`}>
                  <User size={18} />
                </div>
                <div className="hidden lg:block">
                  <div className={`text-xs ${textMuted} font-medium`}>Buyer Account</div>
                  <div className="text-sm font-bold flex items-center gap-1">Elite Trader <ChevronDown size={14} className="transform group-hover:rotate-180" /></div>
                </div>
              </div>

              <div className={`absolute top-full right-0 w-48 ${cardBg} rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 transform translate-y-2`}>
                <button className={`w-full text-left px-4 py-2.5 text-sm ${textMuted} hover:text-[#6324E2] ${isDarkMode ? 'hover:bg-[#2A2A38]' : 'hover:bg-gray-100'} rounded flex items-center gap-2`}>
                  <User size={16} /> My Profile
                </button>
                <div className={`h-px ${isDarkMode ? 'bg-[#2A2A38]' : 'bg-gray-200'} my-1 w-full`}></div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/10 rounded flex items-center gap-2 font-medium">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* --- MAIN DASHBOARD LAYOUT --- */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-6 py-6 flex flex-col lg:flex-row gap-6 items-start">
        
        <aside className={`fixed top-0 left-0 h-full w-64 ${navBg} z-50 p-6 lg:p-0 lg:bg-transparent lg:relative lg:block transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} shrink-0 flex flex-col gap-6 lg:sticky lg:top-32`}>
          <div className="flex items-center justify-between lg:hidden mb-2">
            <span className="font-bold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className={textMuted}><X size={24} /></button>
          </div>

          <div>
            <h3 className={`text-xs font-bold ${textMuted} uppercase tracking-wider mb-3 px-2`}>CATEGORIES</h3>
            <div className="flex flex-col gap-1">
              {SIDEBAR_CATEGORIES.map((cat) => (
                <button key={cat.id} className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${cat.active ? 'bg-[#6324E2]/10 text-[#6324E2]' : `${textMuted} ${isDarkMode ? 'hover:bg-[#1E1E2C]' : 'hover:bg-gray-100'}`}`}>
                  <div className="flex items-center gap-3">{cat.icon} {cat.name}</div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 w-full flex flex-col gap-6">
          
          <div className="bg-gradient-to-r from-[#2A1854] to-[#12121D] rounded-xl p-6 lg:p-8 relative overflow-hidden flex items-center justify-between shadow-xl">
             <div className="relative z-10 w-full lg:max-w-lg text-white">
               <span className="bg-[#6324E2] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">Flash Sale</span>
               <h1 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">Global Trade Summit Deals</h1>
               <p className="text-gray-300 text-xs lg:text-sm mb-6">Up to 45% off on high-performance server clusters.</p>
               <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors">Browse Sale</button>
             </div>
          </div>

          {/* Product Grid */}
          <div>
            <h2 className="text-sm font-bold text-[#6324E2] uppercase tracking-wider mb-4">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
              {PRODUCTS.map(product => (
                <div key={product.id} className={`${cardBg} rounded-xl p-2.5 lg:p-4 flex flex-col group cursor-pointer transition-all hover:border-[#6324E2]`}>
                  <div className={`aspect-square ${itemBg} rounded-lg mb-2 lg:mb-4 flex items-center justify-center text-4xl lg:text-6xl group-hover:scale-105 transition-transform`}>
                    {product.image}
                  </div>
                  <div className="flex items-center gap-1 text-[#6324E2] text-[8px] lg:text-[10px] font-bold uppercase tracking-wider mb-1">
                    <ShieldCheck size={10} /> <span className="hidden sm:inline">ESCROW PROTECTED</span><span className="sm:hidden">ESCROW</span>
                  </div>
                  <h3 className={`text-[11px] lg:text-sm font-medium line-clamp-2 mb-2 lg:mb-3 h-8 lg:h-10 group-hover:text-[#6324E2] transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    {product.name}
                  </h3>
                  <div className="mt-auto flex items-end justify-between">
                    <div className="font-bold text-[#6324E2] text-sm lg:text-lg">{product.price}</div>
                    <button className={`w-6 h-6 lg:w-8 lg:h-8 ${isDarkMode ? 'bg-[#2A1854]' : 'bg-purple-100'} text-[#6324E2] rounded-md lg:rounded-lg flex items-center justify-center hover:bg-[#6324E2] hover:text-white transition-colors`}>
                      <ShoppingCart size={12} className="lg:w-3.5 lg:h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="w-full lg:w-[300px] shrink-0 flex flex-col md:flex-row lg:flex-col gap-6">
          <div className={`${cardBg} rounded-xl p-5 flex-1`}>
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xs font-bold text-[#6324E2] uppercase tracking-wider">BUYER WALLET</h3>
               <div className={`w-6 h-6 ${itemBg} rounded flex items-center justify-center ${textMuted}`}><Zap size={12} /></div>
            </div>
            <div className="mb-4">
              <div className={`text-[10px] font-bold ${textMuted} uppercase tracking-wider mb-1`}>AVAILABLE BALANCE</div>
              <div className="text-2xl lg:text-3xl font-black">$14,520.40</div>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm font-bold py-2.5 rounded-lg transition-colors">Deposit</button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default DashboardPage;