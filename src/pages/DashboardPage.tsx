import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Grid, List, Clock, Star, Heart, ShieldCheck, Flame, Truck, PhoneCall, Gift 
} from 'lucide-react';
import { RECOMMENDED_PRODUCTS, RECENT_ORDERS, FLASH_SALE_PRODUCTS } from '../data/mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000",
    tag: "WEEKEND MEGA SALE",
    tagColor: "bg-orange-500",
    title: "Up to 60% Off\nTop Electronics.",
    desc: "Shop securely with Xentra Escrow. Verified sellers, guaranteed refunds, zero risk.",
    button: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
    tag: "EXCLUSIVE ACCESS",
    tagColor: "bg-[#6324E2]",
    title: "Global Trade Deals\nServer Hardware.",
    desc: "Up to 45% off on high-performance server clusters and networking hardware.",
    button: "Browse Sale"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
    tag: "NEW ARRIVALS",
    tagColor: "bg-emerald-500",
    title: "Premium Fashion\nSpring Collection.",
    desc: "Upgrade your wardrobe with the latest trends. Verified fashion vendors with global shipping.",
    button: "Discover Fashion"
  },
  {
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2000",
    tag: "CLEARANCE",
    tagColor: "bg-red-500",
    title: "Luxury Goods\nWholesale Prices.",
    desc: "Direct from manufacturers. Secure your inventory with Xentra Escrow protection.",
    button: "View Clearance"
  }
];

// RESPONSIVe
const QUICK_PROMOS = [
  { id: 1, title: "Awoof Deals", icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-red-500" },
  { id: 2, title: "Clearance", icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-orange-500" },
  { id: 3, title: "Buy 1 Get 1", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-blue-500" },
  { id: 4, title: "Free Delivery", icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-emerald-500" },
  { id: 5, title: "Top Picks", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-purple-500" },
  { id: 6, title: "Call to Order", icon: <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-pink-500" },
  { id: 7, title: "Super Savers", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-yellow-500" },
  { id: 8, title: "New Arrivals", icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6"/>, color: "bg-teal-500" },
];

const DashboardPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flashSaleRef = useRef<HTMLDivElement>(null);
  const promosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (promosRef.current) {
        promosRef.current.scrollLeft += 1;
        if (promosRef.current.scrollLeft >= promosRef.current.scrollWidth / 2) {
           promosRef.current.scrollLeft = 0; 
        }
      }
      if (flashSaleRef.current) {
        flashSaleRef.current.scrollLeft += 1;
        if (flashSaleRef.current.scrollLeft >= flashSaleRef.current.scrollWidth / 2) {
           flashSaleRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col overflow-x-hidden font-sans bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white transition-colors duration-300">
      
      <Header />

      {/* RESPONSIVE*/}
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8">
          
          <main className="flex-1 w-full flex flex-col gap-4 sm:gap-6 lg:gap-8 relative z-10 min-w-0">
            
            {/* --- DYNAMIC DASHBOARD HERO --- */}
            <div className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden flex items-center h-[180px] sm:h-[250px] lg:h-[350px] border border-gray-200 dark:border-[#2A2A38] shadow-md sm:shadow-lg bg-gray-900">
               {HERO_SLIDES.map((slide, index) => (
                 <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                   <img src={slide.image} alt="Promo" className="absolute inset-0 w-full h-full object-cover object-center" />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent flex items-center">
                     <div className="relative z-20 w-full p-4 sm:p-6 lg:p-14">
                       <span className={`${slide.tagColor} text-white text-[8px] sm:text-[10px] lg:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-sm sm:rounded-full uppercase tracking-wider mb-1.5 sm:mb-4 inline-block shadow-lg`}>
                         {slide.tag}
                       </span>
                       <h1 className="text-xl sm:text-3xl lg:text-5xl font-black text-white mb-1.5 sm:mb-3 lg:mb-4 leading-tight max-w-lg whitespace-pre-line">
                         {slide.title}
                       </h1>
                       <p className="text-gray-200 text-[10px] sm:text-xs lg:text-base mb-3 sm:mb-6 lg:mb-8 max-w-md leading-snug sm:leading-relaxed hidden sm:block">
                         {slide.desc}
                       </p>
                       <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mt-1 sm:mt-0">
                         <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold text-[10px] sm:text-sm lg:text-base px-4 py-1.5 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full transition-colors shadow-lg flex items-center justify-center">
                           {slide.button}
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
               <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-30">
                 {HERO_SLIDES.map((_, idx) => (
                   <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-4 sm:w-6 lg:w-8' : 'bg-white/50'}`}/>
                 ))}
               </div>
            </div>

            {/* --- QUICK PROMOS --- */}
            <div className="bg-white dark:bg-[#12121D] rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-sm border border-gray-200 dark:border-[#2A2A38]">
              <div ref={promosRef} className="flex overflow-x-hidden gap-1.5 sm:gap-2 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {[...QUICK_PROMOS, ...QUICK_PROMOS].map((promo, idx) => (
                  <Link to="#" key={idx} className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[70px] sm:min-w-[90px] shrink-0 group cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1E1E2C] p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-colors">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl ${promo.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>{promo.icon}</div>
                    <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-center text-gray-700 dark:text-gray-300 leading-tight">{promo.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* --- FLASH SALES --- */}
            <div>
              <div className="flex items-center justify-between bg-red-500 rounded-t-lg sm:rounded-t-xl px-3 sm:px-4 py-2 sm:py-3">
                <h2 className="text-xs sm:text-sm lg:text-base font-bold text-white flex items-center gap-1 sm:gap-2"><Zap className="text-yellow-300 w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" fill="currentColor"/> Flash Sales</h2>
                <Link to="#" className="text-white text-[10px] sm:text-xs font-medium hover:underline">See All {'>'}</Link>
              </div>
              <div ref={flashSaleRef} className="flex overflow-x-hidden gap-1.5 sm:gap-2 lg:gap-4 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-3 sm:pb-4 pt-2 sm:pt-4 px-1.5 sm:px-2 bg-white dark:bg-[#12121D] border border-t-0 border-gray-200 dark:border-[#2A2A38] rounded-b-lg sm:rounded-b-xl shadow-sm">
                {[...FLASH_SALE_PRODUCTS, ...FLASH_SALE_PRODUCTS].map((product, idx) => (
                  <Link to={`/product/${product.id}`} key={`${product.id}-${idx}`} className="w-[100px] sm:w-[120px] lg:w-[150px] shrink-0 bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-lg sm:rounded-xl flex flex-col group cursor-pointer overflow-hidden hover:border-[#6324E2] transition-colors">
                    <div className="aspect-square w-full bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <span className="absolute top-1 left-1 bg-red-500 text-white text-[8px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded">{product.discount}</span>
                    </div>
                    <div className="p-1.5 sm:p-2 lg:p-3">
                      <h3 className="text-[9px] sm:text-[10px] lg:text-xs text-gray-700 dark:text-gray-200 line-clamp-1 mb-0.5 sm:mb-1">{product.name}</h3>
                      <div className="font-black text-gray-900 dark:text-white text-[11px] sm:text-xs lg:text-sm">{product.price}</div>
                      <div className="w-full bg-gray-200 dark:bg-[#2A2A38] h-1 sm:h-1.5 rounded-full mt-1 sm:mt-2 overflow-hidden">
                        <div className="bg-purple-600 h-full" style={{ width: `${product.soldProgress}%` }}></div>
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-gray-500 mt-0.5 sm:mt-1">{100 - product.soldProgress}% left</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-white dark:bg-[#12121D] p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-[#2A2A38] shadow-sm overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-[10px] sm:text-xs lg:text-sm">
                <span className="text-gray-500 font-bold shrink-0">SORT BY:</span>
                <button className="bg-[#6324E2] text-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full font-bold shrink-0 shadow-md">Recommended</button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white font-medium transition-colors shrink-0 px-1 sm:px-2">Newest</button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-white font-medium transition-colors shrink-0 px-1 sm:px-2">Price: Low to High</button>
              </div>
              <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0 border-l border-gray-200 dark:border-[#2A2A38] pl-3 sm:pl-4 lg:pl-5">
                <span className="text-gray-400 text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider">View:</span>
                <button className="text-[#6324E2] bg-gray-100 dark:bg-[#1E1E2C] p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-[#2A2A38]"><Grid className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" fill="currentColor" /></button>
                <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-1.5 sm:p-2"><List className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" /></button>
              </div>
            </div>

            {/* Featured Products Grid */}
            <div>
              <h2 className="text-sm sm:text-base lg:text-lg font-bold text-[#6324E2] dark:text-[#A67CFF] uppercase tracking-wider mb-3 sm:mb-4 lg:mb-6">FEATURED PRODUCTS</h2>
              <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 sm:gap-3 lg:gap-4">
                {RECOMMENDED_PRODUCTS.slice(0, 15).map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] hover:border-[#6324E2] dark:hover:border-[#6324E2] rounded-lg sm:rounded-xl flex flex-col group cursor-pointer transition-all overflow-hidden shadow-sm hover:shadow-xl h-full relative">
                    <div className="relative aspect-square w-full bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden shrink-0 group">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <button onClick={(e) => e.preventDefault()} className="absolute top-1 right-1 sm:top-2 sm:right-2 lg:top-3 lg:right-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:text-red-500 transition-colors z-30">
                        <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 flex flex-wrap gap-1 z-30">
                        {product.tag === 'Verified' && (
                          <span className="bg-emerald-600 text-white text-[7px] sm:text-[8px] font-bold px-1 sm:px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                            <ShieldCheck className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="hidden sm:inline">Verified</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-1.5 sm:p-3 lg:p-4 flex flex-col flex-1">
                      <h3 className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight sm:leading-snug mb-1 sm:mb-1.5 lg:mb-2 group-hover:text-[#6324E2] dark:group-hover:text-white transition-colors line-clamp-2">{product.name}</h3>
                      <div className="mt-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 sm:mb-2 gap-0.5 sm:gap-0">
                          <div className="font-black text-gray-900 dark:text-white text-[11px] sm:text-sm lg:text-base">{product.price}</div>
                        </div>
                        <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-gray-100 dark:border-[#2A2A38]">
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            <Star className="text-yellow-500 w-2 h-2 sm:w-2.5 sm:h-2.5" fill="currentColor" />
                            <span className="font-bold text-[8px] sm:text-[9px] lg:text-[10px] text-gray-600 dark:text-gray-400">{product.rating}</span>
                          </div>
                          <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-500">{product.reviews} sold</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR: WALLET & ORDERS */}
          <aside className="w-full xl:w-[320px] shrink-0 flex flex-col md:flex-row xl:flex-col gap-4 sm:gap-6 relative z-10">
            
            {/* Wallet Widget */}
            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md flex-1">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                 <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">BUYER WALLET</h3>
                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 dark:bg-[#1E1E2C] rounded-lg sm:rounded-xl flex items-center justify-center text-[#6324E2] dark:text-[#A67CFF]">
                   <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                 </div>
              </div>
              <div className="mb-3 sm:mb-4">
                <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5 sm:mb-1">AVAILABLE BALANCE</div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">$14,520.40</div>
              </div>
              <div className="mb-6 sm:mb-8">
                <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5 sm:mb-1">PENDING ESCROW</div>
                <div className="text-base sm:text-lg font-bold text-[#6324E2] dark:text-[#A67CFF]">$2,100.00</div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <Link to="/profile" className="flex items-center justify-center w-full bg-[#6324E2] hover:bg-[#501bb8] text-white text-[10px] sm:text-sm font-bold py-2.5 sm:py-3.5 rounded-full transition-colors shadow-md">Fund Wallet</Link>
                <button className="flex items-center justify-center w-full bg-gray-50 dark:bg-[#1E1E2C] hover:bg-gray-100 dark:hover:bg-[#2A2A38] text-gray-900 dark:text-white text-[10px] sm:text-sm font-bold py-2.5 sm:py-3.5 rounded-full transition-colors border border-gray-200 dark:border-[#2A2A38]">Withdraw</button>
              </div>
            </div>

            {/* Orders Widget */}
            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                 <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">RECENT ORDERS</h3>
                 <Link to="/profile" className="text-[9px] sm:text-[10px] font-bold text-[#6324E2] dark:text-[#A67CFF] hover:underline uppercase tracking-wider">VIEW ALL</Link>
              </div>
              <div className="flex flex-col gap-3 sm:gap-5">
                {RECENT_ORDERS.map((order, i) => (
                  <div key={i} className={i !== 0 ? "pt-3 sm:pt-5 border-t border-gray-100 dark:border-[#2A2A38]" : ""}>
                    <div className="flex justify-between items-start mb-1 sm:mb-1.5">
                      <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500">{order.id}</span>
                      <span className={`text-[7px] sm:text-[9px] font-bold px-1 py-0.5 sm:px-1.5 rounded uppercase tracking-wider ${
                        order.status === 'SHIPPED' ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20' : 
                        order.status === 'PROCESSING' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20' : 
                        'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                      }`}>{order.status}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 line-clamp-1">{order.name}</h4>
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3"/> {order.eta}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900 dark:text-[#A67CFF]">{order.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;