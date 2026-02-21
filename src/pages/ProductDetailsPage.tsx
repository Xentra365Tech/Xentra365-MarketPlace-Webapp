import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, ChevronRight, Menu, 
  ShieldCheck, Star, Heart, Truck, RotateCcw, MessageSquare, Zap
} from 'lucide-react';
import { ALL_PRODUCTS, RECOMMENDED_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { addToCart, cartCount } = useCart();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = ALL_PRODUCTS.find(p => p.id === Number(id)) || RECOMMENDED_PRODUCTS[0];

  const [, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  const [activeImage, setActiveImage] = useState(product.image);
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
    return <div className="min-h-screen  bg-[#0A0A11] flex items-center justify-center text-white">Product not found.</div>;
  }

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      
      {/* --- MINIMAL NAVBAR --- */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl relative hidden md:block">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" placeholder="Search secure listings..." 
              className="w-full bg-[#1E1E2C] border border-[#2A2A38] rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:border-[#6324E2] transition-colors text-sm"
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/search?q=${e.currentTarget.value}`) }}
            />
          </div>

          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <Link to="/cart" className="flex items-center gap-2 relative text-gray-400 hover:text-white transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-2 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold text-white shadow-lg">
                {cartCount}
              </span>
            </Link>
            <button className="flex items-center gap-2 bg-[#1E1E2C] border border-[#2A2A38] px-4 py-2 rounded-full text-sm font-medium hover:border-[#6324E2] transition-colors">
              <User size={16}/> <span className="hidden sm:block">Account</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 lg:px-8 py-6 lg:py-10">
        
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-2 text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 lg:mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white transition-colors">HOME</Link>
          <ChevronRight size={12} />
          <Link to={`/search?q=${product.category}`} className="hover:text-white transition-colors">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-[#A67CFF] line-clamp-1">{product.name}</span>
        </div>

        {/* --- TOP SECTION: GALLERY & DETAILS --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          
          <div className="w-full lg:w-[55%] flex flex-col gap-4">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-[#1E1E2C] rounded-2xl border border-[#2A2A38] overflow-hidden flex items-center justify-center group">
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {product.isEscrow && (
                <span className="absolute top-4 left-4 bg-[#6324E2] text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1">
                  <ShieldCheck size={14} /> ESCROW PROTECTED
                </span>
              )}
              <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {thumbnails.map((thumb, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(thumb)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === thumb ? 'border-[#6324E2]' : 'border-[#2A2A38] opacity-60 hover:opacity-100'}`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              {product.isVerified && (
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                  <ShieldCheck size={12} /> VERIFIED SELLER
                </span>
              )}
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Star size={14} className="text-yellow-500" fill="currentColor"/> 
                <span className="font-bold text-white">{product.rating}</span> ({product.reviews} Deals)
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-end gap-4 mb-6 lg:mb-8">
              <span className="text-3xl lg:text-4xl font-black text-[#A67CFF]">{product.price}</span>
              <span className="text-lg text-gray-500 line-through mb-1">
                 ${(parseFloat(product.price.replace(/[^0-9.-]+/g,"")) * 1.2).toFixed(2)}
              </span>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded mb-2">18% OFF</span>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white">Color: <span className="text-gray-400 font-normal ml-1">{activeColor.name}</span></h3>
              </div>
              <div className="flex items-center gap-3">
                {availableColors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${activeColor.name === color.name ? 'border-[#6324E2] scale-110' : 'border-transparent'}`}
                  >
                    <span className="w-8 h-8 rounded-full border border-gray-700 shadow-inner" style={{ backgroundColor: color.hex }}></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-5 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#6324E2]"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-white flex items-center gap-2"><ShieldCheck size={16} className="text-blue-500"/> Escrow Protection Active</h3>
                <span className="text-[10px] text-[#A67CFF] font-bold">CURRENT STAGE: PAID</span>
              </div>
              
              <div className="relative flex items-center justify-between pt-2">
                <div className="absolute left-[10%] right-[10%] top-[14px] h-0.5 bg-[#2A2A38] -z-10"></div>
                <div className="absolute left-[10%] right-[70%] top-[14px] h-0.5 bg-blue-500 -z-10"></div>
                
                <div className="flex flex-col items-center gap-2 bg-[#12121D] px-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"><ShieldCheck size={12}/></div>
                  <span className="text-[8px] font-bold text-white">PAID</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-[#12121D] px-2">
                  <div className="w-6 h-6 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-500"><Truck size={12}/></div>
                  <span className="text-[8px] font-bold text-gray-500">SHIPPED</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-[#12121D] px-2">
                  <div className="w-6 h-6 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-500"><CheckCircle size={12}/></div>
                  <span className="text-[8px] font-bold text-gray-500">DELIVERED</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-[#12121D] px-2">
                  <div className="w-6 h-6 rounded-full bg-[#1E1E2C] border border-[#2A2A38] flex items-center justify-center text-gray-500"><Zap size={12}/></div>
                  <span className="text-[8px] font-bold text-gray-500">RELEASED</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button onClick={handleBuyNow} className="flex-1 bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(99,36,226,0.3)] flex items-center justify-center gap-2">
                <Zap size={18} fill="currentColor"/> BUY NOW
              </button>
              <button onClick={() => addToCart(product, activeColor.name)} className="flex-1 bg-[#1E1E2C] hover:bg-[#2A2A38] border border-[#6324E2] text-[#A67CFF] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={18} /> ADD TO CART
              </button>
            </div>
            
            <button className="w-full bg-[#12121D] border border-[#2A2A38] hover:border-gray-500 text-gray-300 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mb-8">
              <MessageSquare size={16} /> CHAT WITH SELLER
            </button>

            <div className="bg-[#12121D] border border-[#2A2A38] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-[#6324E2] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-0.5">
                  <div className="w-full h-full bg-[#1E1E2C] rounded-full flex items-center justify-center text-white font-bold text-sm">SP</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#A67CFF] transition-colors">SoundMaster Pro</h4>
                  <p className="text-[10px] text-gray-500">MEMBER SINCE 2021</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-emerald-400">98% TRUST SCORE</div>
                <div className="text-[10px] text-gray-500">4,210 Trades</div>
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM SECTION: TABS & INFO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 lg:gap-10 border-b border-[#2A2A38] mb-6 overflow-x-auto whitespace-nowrap no-scrollbar">
              {['description', `reviews (${product.reviews})`, 'seller info', 'shipping & returns'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.split(' ')[0])}
                  className={`pb-3 text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === tab.split(' ')[0] ? 'text-[#A67CFF] border-b-2 border-[#A67CFF]' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>Experience audio like never before with the {product.name}. Featuring industry-leading active noise cancellation and a staggering 40-hour battery life, these headphones are built for professionals and audiophiles alike.</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> {product.desc}</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> Hi-Res Audio Certified with LDAC support</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> Multi-point connection for 2 devices</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#6324E2] mt-1.5 shrink-0"></div> Smart touch gesture controls</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2"><Truck size={16} className="text-[#6324E2]"/> SHIPPING INFO</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Method</span>
                    <span className="text-white font-medium">Express Insured</span>
                  </div>
                  <div className="h-px bg-[#2A2A38] w-full"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Estimated Delivery</span>
                    <span className="text-emerald-400 font-bold">3 - 5 Business Days</span>
                  </div>
                  <div className="h-px bg-[#2A2A38] w-full"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Returns</span>
                    <span className="text-white font-medium flex items-center gap-1"><RotateCcw size={14}/> 14-Day Money Back</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-white">Related Products</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-[#12121D] border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white">&lt;</button>
              <button className="w-8 h-8 rounded-full bg-[#12121D] border border-[#2A2A38] flex items-center justify-center text-gray-400 hover:text-white">&gt;</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {RECOMMENDED_PRODUCTS.slice(4, 9).map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-[#12121D] border border-[#2A2A38] hover:border-[#6324E2] rounded-xl p-3 flex flex-col group transition-all">
                <div className="aspect-square bg-[#1E1E2C] rounded-lg mb-3 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-[11px] sm:text-xs font-medium text-gray-300 line-clamp-1 mb-1 group-hover:text-white">{item.name}</h3>
                <div className="font-bold text-[#A67CFF] text-xs sm:text-sm">{item.price}</div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A11] border-t border-[#2A2A38] mt-auto">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <ShieldCheck className="text-blue-500" size={24}/>
               <div>
                 <div className="text-xs font-bold text-white uppercase tracking-wider">BUYER PROTECTION</div>
                 <div className="text-[10px] text-gray-500">Full refund for 30 days</div>
               </div>
             </div>
             <div className="w-px h-8 bg-[#2A2A38] hidden sm:block"></div>
             <div className="flex items-center gap-2">
               <ShieldCheck className="text-[#6324E2]" size={24}/>
               <div>
                 <div className="text-xs font-bold text-white uppercase tracking-wider">ESCROW SECURED</div>
                 <div className="text-[10px] text-gray-500">Funds released on delivery</div>
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CheckCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
)

export default ProductDetailsPage;