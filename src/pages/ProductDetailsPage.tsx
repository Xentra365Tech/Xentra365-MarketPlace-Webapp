import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, ChevronRight, 
  ShieldCheck, Star, Heart, Truck, RotateCcw, MessageSquare, Zap
} from 'lucide-react';
import { ALL_PRODUCTS, RECOMMENDED_PRODUCTS, FLASH_SALE_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  soldProgress?: number;
  desc?: string;
  category?: string;
  rating?: string;
  reviews?: string | number;
  isEscrow?: boolean;
  isVerified?: boolean;
  // add any other missing ones here
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // BUG FIX: Check both ALL_PRODUCTS and FLASH_SALE_PRODUCTS so Flash Sales actually load!
  
const product = (
  ALL_PRODUCTS.find((p) => p.id === Number(id)) || 
  FLASH_SALE_PRODUCTS.find((p) => p.id === Number(id)) || 
  RECOMMENDED_PRODUCTS[0]
) as Product;
  const [activeTab, setActiveTab] = useState('description');
  
  const [activeImage, setActiveImage] = useState(product.image);
  
  // Make sure the active image changes when the product changes!
  useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  const thumbnails = [
    product.image,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
  ];

  const availableColors = [
    { name: 'Carbon Black', hex: '#1a1a1a' },
    { name: 'Titanium Silver', hex: '#e3e4e5' },
    { name: 'Midnight Blue', hex: '#1e3a8a' },
  ];
  const [activeColor, setActiveColor] = useState(availableColors[0]);

  const handleBuyNow = () => {
    addToCart(product, activeColor.name);
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  if (!product) {
    return <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A11] flex items-center justify-center text-gray-900 dark:text-white">Product not found.</div>;
  }

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
      <Header />

      {/* RESPONSIVE: Container padding */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to="/" className="hover:text-[#6324E2] dark:hover:text-white transition-colors">HOME</Link>
          <ChevronRight size={12} />
          <Link to={`/search?q=${product.category || 'All'}`} className="hover:text-[#6324E2] dark:hover:text-white transition-colors">{product.category || 'Category'}</Link>
          <ChevronRight size={12} />
          <span className="text-[#6324E2] dark:text-[#A67CFF] line-clamp-1">{product.name}</span>
        </div>

        {/* --- TOP SECTION: GALLERY & DETAILS --- */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-white dark:bg-[#1E1E2C] rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#2A2A38] overflow-hidden flex items-center justify-center group shadow-sm">
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {product.isEscrow && (
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#6324E2] text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded shadow-lg flex items-center gap-1">
                  <ShieldCheck size={12} className="sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">ESCROW PROTECTED</span>
                </span>
              )}
              <button className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:text-red-500 dark:hover:bg-red-500 transition-colors shadow-sm">
                <Heart size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {thumbnails.map((thumb, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(thumb)}
                  className={`aspect-square rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all bg-white dark:bg-[#1E1E2C] ${activeImage === thumb ? 'border-[#6324E2]' : 'border-gray-200 dark:border-[#2A2A38] opacity-70 hover:opacity-100'}`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              {product.isVerified && (
                <span className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1">
                  <ShieldCheck size={10} className="sm:w-3 sm:h-3" /> VERIFIED SELLER
                </span>
              )}
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                <Star size={12} className="text-yellow-500 sm:w-3.5 sm:h-3.5" fill="currentColor"/> 
                <span className="font-bold text-gray-900 dark:text-white">{product.rating}</span> ({product.reviews} Deals)
              </div>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-end gap-2 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#6324E2] dark:text-[#A67CFF]">{product.price}</span>
              <span className="text-sm sm:text-lg text-gray-400 dark:text-gray-500 line-through mb-0.5 sm:mb-1">
                 ${(parseFloat((product.price || "$0").replace(/[^0-9.-]+/g,"")) * 1.2).toFixed(2)}
              </span>
              <span className="text-[9px] sm:text-xs font-bold bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded mb-1 sm:mb-2">18% OFF</span>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Color: <span className="text-gray-500 dark:text-gray-400 font-normal ml-1">{activeColor.name}</span></h3>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                {availableColors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveColor(color)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all flex items-center justify-center ${activeColor.name === color.name ? 'border-[#6324E2] scale-110' : 'border-transparent'}`}
                  >
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 dark:border-gray-700 shadow-inner" style={{ backgroundColor: color.hex }}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Escrow Tracker Box - LIGHT/DARK THEMED */}
            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#6324E2]"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5 sm:gap-2"><ShieldCheck size={14} className="text-blue-500 sm:w-4 sm:h-4"/> Escrow Protection Active</h3>
                <span className="text-[8px] sm:text-[10px] text-[#6324E2] dark:text-[#A67CFF] font-bold">STAGE: PAID</span>
              </div>
              
              <div className="relative flex items-center justify-between pt-2 px-1">
                <div className="absolute left-[10%] right-[10%] top-[14px] h-0.5 bg-gray-100 dark:bg-[#2A2A38] -z-10"></div>
                <div className="absolute left-[10%] right-[70%] top-[14px] h-0.5 bg-blue-500 -z-10"></div>
                
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#12121D] px-1 sm:px-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"><ShieldCheck size={10} className="sm:w-3 sm:h-3"/></div>
                  <span className="text-[7px] sm:text-[8px] font-bold text-gray-900 dark:text-white">PAID</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#12121D] px-1 sm:px-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-400 dark:text-gray-500"><Truck size={10} className="sm:w-3 sm:h-3"/></div>
                  <span className="text-[7px] sm:text-[8px] font-bold text-gray-400 dark:text-gray-500">SHIPPED</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#12121D] px-1 sm:px-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-400 dark:text-gray-500"><CheckCircle size={10}/></div>
                  <span className="text-[7px] sm:text-[8px] font-bold text-gray-400 dark:text-gray-500">DELIVERED</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#12121D] px-1 sm:px-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-50 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-400 dark:text-gray-500"><Zap size={10} className="sm:w-3 sm:h-3"/></div>
                  <span className="text-[7px] sm:text-[8px] font-bold text-gray-400 dark:text-gray-500">RELEASED</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <button onClick={handleBuyNow} className="flex-1 bg-[#6324E2] hover:bg-[#501bb8] text-white text-sm sm:text-base font-bold py-3.5 sm:py-4 rounded-xl transition-colors shadow-[0_0_15px_rgba(99,36,226,0.2)] flex items-center justify-center gap-2">
                <Zap size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor"/> BUY NOW
              </button>
              <button onClick={() => addToCart(product, activeColor.name)} className="flex-1 bg-gray-50 dark:bg-[#1E1E2C] hover:bg-gray-100 dark:hover:bg-[#2A2A38] border border-[#6324E2] text-[#6324E2] dark:text-[#A67CFF] text-sm sm:text-base font-bold py-3.5 sm:py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" /> ADD TO CART
              </button>
            </div>
            
            <button className="w-full bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-bold py-3 sm:py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mb-6 sm:mb-8 shadow-sm">
              <MessageSquare size={14} className="sm:w-4 sm:h-4" /> CHAT WITH SELLER
            </button>

            <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl p-3 sm:p-4 flex items-center justify-between group cursor-pointer hover:border-[#6324E2] dark:hover:border-[#6324E2] transition-colors shadow-sm">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-0.5 shrink-0">
                  <div className="w-full h-full bg-white dark:bg-[#1E1E2C] rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-xs sm:text-sm">SP</div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#6324E2] dark:group-hover:text-[#A67CFF] transition-colors line-clamp-1">SoundMaster Pro</h4>
                  <p className="text-[8px] sm:text-[10px] text-gray-500">MEMBER SINCE 2021</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400">98% TRUST</div>
                <div className="text-[8px] sm:text-[10px] text-gray-500">4,210 Trades</div>
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM SECTION: TABS & INFO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 border-b border-gray-200 dark:border-[#2A2A38] mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap no-scrollbar">
              {['description', `reviews (${product.reviews || '45'})`, 'seller info', 'shipping'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.split(' ')[0])}
                  className={`pb-2 sm:pb-3 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === tab.split(' ')[0] ? 'text-[#6324E2] dark:text-[#A67CFF] border-b-2 border-[#6324E2] dark:border-[#A67CFF]' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
              <p>Experience true quality with the {product.name}. Featuring industry-leading craftsmanship and premium materials, this item is built for professionals and enthusiasts alike.</p>
              <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> {product.desc || 'Premium build and finish.'}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> 100% Authentic Product Guarantee</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> Shipped securely in padded packaging</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> 24/7 Priority Customer Support</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2"><Truck size={14} className="text-[#6324E2] sm:w-4 sm:h-4"/> SHIPPING INFO</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Method</span>
                    <span className="text-gray-900 dark:text-white font-medium">Express Insured</span>
                  </div>
                  <div className="h-px bg-gray-100 dark:bg-[#2A2A38] w-full"></div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Delivery</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">3 - 5 Business Days</span>
                  </div>
                  <div className="h-px bg-gray-100 dark:bg-[#2A2A38] w-full"></div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Returns</span>
                    <span className="text-gray-900 dark:text-white font-medium flex items-center gap-1"><RotateCcw size={12} className="sm:w-3.5 sm:h-3.5"/> 14-Day Back</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Related Products</h2>
            <div className="flex gap-1.5 sm:gap-2">
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-full bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white shadow-sm">&lt;</button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-full bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white shadow-sm">&gt;</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {RECOMMENDED_PRODUCTS.slice(4, 9).map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] hover:border-[#6324E2] dark:hover:border-[#6324E2] rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col group transition-all shadow-sm h-full">
                <div className="aspect-square bg-gray-100 dark:bg-[#1E1E2C] rounded-md sm:rounded-lg mb-2 sm:mb-3 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[10px] sm:text-[11px] lg:text-xs font-medium text-gray-800 dark:text-gray-300 line-clamp-2 leading-snug mb-1 group-hover:text-[#6324E2] dark:group-hover:text-white">{item.name}</h3>
                  <div className="mt-auto pt-1">
                    <div className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">{item.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer/>
    </div>
  );
};

const CheckCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
)

export default ProductDetailsPage;