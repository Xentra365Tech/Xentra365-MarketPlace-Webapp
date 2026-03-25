import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {  Star, ShieldCheck, Zap, Flame, Truck, PhoneCall, Gift } from 'lucide-react';
import { FLASH_SALE_PRODUCTS, RECOMMENDED_PRODUCTS } from '../data/mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

// FIXED: Upgraded HERO_SLIDES to include dynamic text for each slide
const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000",
    tag: "WEEKEND MEGA SALE",
    tagColor: "bg-orange-500",
    title: "Up to 60% Off items",
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

const QUICK_PROMOS = [
  { id: 1, title: "Awoof Deals", icon: <Flame size={24}/>, color: "bg-red-500" },
  { id: 2, title: "Clearance", icon: <Gift size={24}/>, color: "bg-orange-500" },
  { id: 3, title: "Buy 1 Get 1", icon: <Star size={24}/>, color: "bg-blue-500" },
  { id: 4, title: "Free Delivery", icon: <Truck size={24}/>, color: "bg-emerald-500" },
  { id: 5, title: "Top Picks", icon: <Star size={24}/>, color: "bg-purple-500" },
  { id: 6, title: "Call to Order", icon: <PhoneCall size={24}/>, color: "bg-pink-500" },
  { id: 7, title: "Super Savers", icon: <Zap size={24}/>, color: "bg-yellow-500" },
  { id: 8, title: "New Arrivals", icon: <Gift size={24}/>, color: "bg-teal-500" },
];

const LandingPage = () => {
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
    <div className="min-h-screen w-screen overflow-x-hidden font-sans bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* --- DYNAMIC HERO CAROUSEL --- */}
        <div className="w-full h-[200px] sm:h-[350px] lg:h-[450px] relative overflow-hidden rounded-2xl shadow-xl bg-gray-900">
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <img src={slide.image} alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center p-8 lg:p-16">
                 <div className="max-w-xl">
                    <span className={`${slide.tagColor} text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block shadow-lg`}>
                      {slide.tag}
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-md leading-relaxed hidden sm:block">
                      {slide.desc}
                    </p>
                    <button className="bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm sm:text-base font-bold px-8 py-3 rounded-full transition-colors shadow-lg">
                      {slide.button}
                    </button>
                 </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {HERO_SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'}`}/>
            ))}
          </div>
        </div>

        {/* --- CONTINUOUS QUICK PROMOS --- */}
        <div className="bg-white dark:bg-[#12121D] rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-[#2A2A38]">
          <div ref={promosRef} className="flex overflow-x-hidden gap-2 no-scrollbar">
            {[...QUICK_PROMOS, ...QUICK_PROMOS].map((promo, idx) => (
              <Link to="#" key={idx} className="flex flex-col items-center gap-2 min-w-[90px] shrink-0 group cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1E1E2C] p-2 rounded-xl transition-colors">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${promo.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>{promo.icon}</div>
                <span className="text-[10px] sm:text-xs font-bold text-center text-gray-700 dark:text-gray-300">{promo.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* --- FLASH SALES --- */}
        <div>
          <div className="flex items-center justify-between bg-red-500 rounded-t-xl px-4 py-3">
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2"><Zap className="text-yellow-300" size={18} fill="currentColor"/> Flash Sales</h2>
            <Link to="#" className="text-white text-xs font-medium hover:underline">See All {'>'}</Link>
          </div>
          <div ref={flashSaleRef} className="flex overflow-x-hidden gap-2 sm:gap-4 no-scrollbar pb-4 pt-4 px-2 bg-white dark:bg-[#12121D] border border-t-0 border-gray-200 dark:border-[#2A2A38] rounded-b-xl shadow-sm">
            {[...FLASH_SALE_PRODUCTS, ...FLASH_SALE_PRODUCTS].map((product, idx) => (
              <Link to={`/product/${product.id}`} key={`${product.id}-${idx}`} className="w-[120px] sm:w-[150px] lg:w-[170px] shrink-0 bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl flex flex-col group cursor-pointer overflow-hidden hover:border-[#6324E2] transition-colors">
                <div className="aspect-square w-full bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-1 left-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{product.discount}</span>
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-200 line-clamp-1 mb-1">{product.name}</h3>
                  <div className="font-black text-gray-900 dark:text-white text-xs sm:text-sm">{product.price}</div>
                  <div className="w-full bg-gray-200 dark:bg-[#2A2A38] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-orange-500 h-full" style={{ width: `${product.soldProgress}%` }}></div>
                  </div>
                  <div className="text-[9px] text-gray-500 mt-1">{100 - product.soldProgress}% left</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- RECOMMENDED PRODUCTS GRID --- */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Star className="text-orange-500 w-5 h-5" fill="currentColor"/> Recommended For You
            </h2>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4 mb-10">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] hover:border-[#6324E2] dark:hover:border-[#6324E2] rounded-xl flex flex-col group cursor-pointer transition-all overflow-hidden shadow-sm h-full relative">
                <div className="relative aspect-square w-full bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-1 left-1 flex flex-wrap gap-1 z-30">
                    {product.tag === 'Verified' && (
                      <span className="bg-emerald-600 text-white text-[8px] font-bold px-1 py-0.5 rounded flex items-center gap-0.5"><ShieldCheck size={8} /> Verified</span>
                    )}
                  </div>
                </div>
                <div className="p-2 sm:p-3 flex flex-col flex-1">
                  <h3 className="text-[10px] sm:text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug mb-1 group-hover:text-[#6324E2] transition-colors line-clamp-2">{product.name}</h3>
                  <div className="mt-auto">
                    <div className="font-black text-gray-900 dark:text-white text-xs sm:text-sm">{product.price}</div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-0.5"><Star size={10} className="text-yellow-500" fill="currentColor" /><span className="font-bold text-[9px] text-gray-600 dark:text-gray-400">{product.rating}</span></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;