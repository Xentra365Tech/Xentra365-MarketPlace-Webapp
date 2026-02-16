import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/mockData";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  const { category } = useParams(); 
  const activeCategory = category || "all";

  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
   
    <div className="bg-[#111126] text-slate-200 min-h-screen font-display flex flex-col w-full overflow-x-hidden">
      
      {/* Header (Full Width) */}
      <header className="bg-[#5702d4] sticky top-0 z-50 shadow-xl w-full">
        <div className="w-full px-4 md:px-6 flex items-center justify-between h-14 gap-6">
          <Link to="/" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#5702d4] font-bold text-xl">X</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Xentra365</span>
          </Link>
          
          <div className="flex-grow max-w-3xl relative hidden md:block">
            <input 
                className="w-full bg-white/10 border-none rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 text-sm outline-none transition-all" 
                placeholder="Search marketplace..." 
                type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">search</span>
          </div>

          <div className="flex items-center gap-4 text-white">
             <button className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="text-[10px]">Alerts</span>
             </button>
             <button className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
                <span className="text-[10px]">Cart</span>
             </button>
             <div className="h-8 w-px bg-white/20 mx-1"></div>
             <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-1 px-2 rounded-lg transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                   <span className="material-symbols-outlined text-sm">person</span>
                </div>
                <div className="hidden xl:block text-left">
                   <p className="text-[10px] leading-tight opacity-70">Buyer Account</p>
                   <p className="text-xs font-bold leading-tight">Elite Trader</p>
                </div>
             </div>
          </div>
        </div>
        
        {/* Sub-header Navigation */}
        <div className="w-full px-4 md:px-6 flex items-center gap-8 h-10 border-t border-white/10 overflow-x-auto scrollbar-hide">
            {['All Items', 'Priority Sellers', 'Local Marketplace', 'Promotions', 'Bulk Wholesale', 'New Arrivals'].map((item, idx) => (
                <button key={idx} className={`text-xs font-medium h-full flex items-center px-1 whitespace-nowrap transition-colors ${idx === 0 ? "text-white border-b-2 border-white" : "text-white/70 hover:text-white"}`}>
                    {item}
                </button>
            ))}
        </div>
      </header>

      {/* Main Layout (Full Width) */}
      <main className="w-full px-4 md:px-6 py-6 flex gap-6 flex-grow">
        
        <Sidebar currentCategory={activeCategory} />

        {/* Main Feed */}
        <section className="flex-grow min-w-0 space-y-6">
           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {filteredProducts.map((item) => (
                 <div key={item.id} className="bg-[#111126] border border-[#2d2d4a] rounded-xl overflow-hidden hover:border-[#5702d4]/50 transition-all flex flex-col group shadow-sm">
                   
                    <div className="relative aspect-square overflow-hidden bg-[#111126]">
                       <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={item.title} />
                       
                    </div>
                    <div className="p-3 flex flex-col flex-grow">
                      
                       <h4 className="text-slate-300 text-xs font-medium mb-1 line-clamp-2 leading-relaxed group-hover:text-white transition-colors">{item.title}</h4>
                       <div className="mt-auto">
                          <p className="text-[#477cff] text-lg font-bold tracking-tight">${item.price.toFixed(2)}</p>
                          
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Right Widgets - Hidden on smaller screens */}
        <aside className="w-72 flex-shrink-0 hidden 2xl:flex flex-col gap-4">
            {/* ... [Widgets content same as before] ... */}
             <div className="bg-[#111126] border border-[#2d2d4a] rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-sm tracking-tight text-[#5702d4] uppercase">Buyer Wallet</h3>
                    <span className="material-symbols-outlined text-[#5702d4]">account_balance_wallet</span>
                </div>
            
            </div>
        </aside>

      </main>
    </div>
  );
}

export default DashboardPage;