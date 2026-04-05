import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, X, Grid, List, ChevronLeft, ChevronRight, Heart, ShieldCheck, Star, Search 
} from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '../data/mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get('q') || ''; 

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when search changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [userQuery]);

  // 1. Filter by Search Query
  let filteredProducts = ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(userQuery.toLowerCase()) || 
    (product.category && product.category.toLowerCase().includes(userQuery.toLowerCase()))
  );

  // 2. Filter by Selected Sidebar Category
  if (activeCategoryFilter) {
    filteredProducts = filteredProducts.filter(product => 
      product.category && product.category.toLowerCase().includes(activeCategoryFilter.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-[#0A0A11] text-gray-900 dark:text-white font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
      
      {/* GLOBAL HEADER */}
      <Header />

      {/* FILTER OVERLAY (MOBILE) */}
      {isFilterMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsFilterMenuOpen(false)} />
      )}

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start relative z-10">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <aside className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-[280px] sm:w-[320px] lg:w-64 xl:w-72 bg-white dark:bg-[#12121D] lg:bg-transparent z-[70] lg:z-auto border-r lg:border-none border-gray-200 dark:border-[#2A2A38] shrink-0 flex flex-col py-6 lg:py-0 transform transition-transform duration-300 ${isFilterMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto lg:overflow-visible lg:sticky lg:top-[140px]`}>
          
          <div className="flex items-center justify-between px-6 lg:px-0 lg:hidden mb-6 border-b border-gray-200 dark:border-[#2A2A38] pb-4">
            <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-lg"><Filter size={20}/> Filters</span>
            <button onClick={() => setIsFilterMenuOpen(false)} className="text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-[#1E1E2C] p-2 rounded-lg"><X size={20} /></button>
          </div>

          <div className="px-6 lg:px-0 space-y-8">
            {/* Category Filter */}
            <div className="bg-white dark:bg-[#12121D] lg:bg-transparent lg:dark:bg-transparent rounded-xl lg:rounded-none p-4 lg:p-0 border border-gray-200 dark:border-[#2A2A38] lg:border-none shadow-sm lg:shadow-none">
              <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">CATEGORIES</h3>
              <div className="space-y-1.5 sm:space-y-2">
                
                <button 
                  onClick={() => setActiveCategoryFilter(null)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-bold ${activeCategoryFilter === null ? 'bg-[#6324E2] text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E1E2C]'}`}
                >
                  <span>All Categories</span>
                </button>

                {CATEGORIES.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => { setActiveCategoryFilter(cat.name); setIsFilterMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium ${activeCategoryFilter === cat.name ? 'bg-[#6324E2] text-white shadow-md font-bold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E1E2C] hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    <span className="flex items-center gap-2">{cat.icon} {cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter (Mock UI) */}
            <div className="bg-white dark:bg-[#12121D] lg:bg-transparent lg:dark:bg-transparent rounded-xl lg:rounded-none p-4 lg:p-0 border border-gray-200 dark:border-[#2A2A38] lg:border-none shadow-sm lg:shadow-none">
              <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">PRICE RANGE</h3>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="Min" className="w-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" />
                <span className="text-gray-400">-</span>
                <input type="number" placeholder="Max" className="w-full bg-gray-100 dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6324E2]" />
              </div>
              <button className="w-full mt-3 bg-gray-200 dark:bg-[#2A2A38] hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-xs font-bold py-2 rounded-lg transition-colors">APPLY</button>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT (RESULTS) --- */}
        <div className="flex-1 w-full min-w-0">
          
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-1 sm:mb-2">
              {userQuery ? `Results for "${userQuery}"` : activeCategoryFilter ? `${activeCategoryFilter}` : 'All Products'}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Found {filteredProducts.length} items</p>
              <button onClick={() => setIsFilterMenuOpen(true)} className="lg:hidden flex items-center justify-center gap-1.5 bg-white dark:bg-[#1E1E2C] border border-gray-200 dark:border-[#2A2A38] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 shadow-sm"><Filter size={14} /> Filters</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5 border-b border-gray-200 dark:border-[#2A2A38] pb-3 sm:pb-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap no-scrollbar text-xs sm:text-sm font-bold">
              <button className="text-[#6324E2] dark:text-[#A67CFF] border-b-2 border-[#6324E2] dark:border-[#A67CFF] pb-3 sm:pb-4 -mb-[13px] sm:-mb-[17px]">Popularity</button>
              <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white pb-3 sm:pb-4 -mb-[13px] sm:-mb-[17px] transition-colors">Price: Low to High</button>
              <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white pb-3 sm:pb-4 -mb-[13px] sm:-mb-[17px] transition-colors">Newest Arrivals</button>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-[#1E1E2C] text-[#6324E2] dark:text-[#A67CFF] border border-gray-300 dark:border-[#2A2A38]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}><Grid size={18} /></button>
              <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-gray-200 dark:bg-[#1E1E2C] text-[#6324E2] dark:text-[#A67CFF] border border-gray-300 dark:border-[#2A2A38]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}><List size={18} /></button>
            </div>
          </div>

          <div className={`grid gap-3 sm:gap-4 lg:gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 20).map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className={`bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] hover:border-[#6324E2] dark:hover:border-[#6324E2] rounded-xl overflow-hidden group cursor-pointer transition-all shadow-sm hover:shadow-md relative ${viewMode === 'list' ? 'flex flex-row h-28 sm:h-40 lg:h-48' : 'flex flex-col h-full'}`}>
                  
                  {/* Image Container */}
                  <div className={`relative bg-gray-100 dark:bg-[#1E1E2C] overflow-hidden group ${viewMode === 'list' ? 'w-28 sm:w-48 lg:w-64 shrink-0' : 'aspect-square w-full shrink-0'}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors"><ChevronLeft size={14}/></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors"><ChevronRight size={14}/></div>
                    </div>

                    <button onClick={(e) => e.preventDefault()} className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:text-red-500 transition-colors z-30 shadow-sm">
                      <Heart size={14} className="sm:w-4 sm:h-4"/>
                    </button>

                    <div className="absolute bottom-2 left-2 flex flex-wrap items-center gap-1 sm:gap-2 z-30">
                      {item.isVerified && (
                        <span className="bg-emerald-600 text-white text-[7px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded shadow flex items-center gap-1">
                          <ShieldCheck size={10} className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> <span className={`${viewMode === 'list' ? 'inline' : 'hidden sm:inline'}`}>Verified</span>
                        </span>
                      )}
                      {item.isEscrow && (
                        <span className="bg-[#6324E2] text-white text-[7px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded shadow flex items-center gap-1">
                          <ShieldCheck size={10} className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> <span className={`${viewMode === 'list' ? 'inline' : 'hidden sm:inline'}`}>Escrow</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className={`flex flex-col flex-1 p-2 sm:p-4 lg:p-5`}>
                    <h3 className={`font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#6324E2] dark:group-hover:text-white transition-colors text-[10px] sm:text-sm lg:text-base mb-1.5 sm:mb-3 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-2 leading-tight sm:leading-snug'}`}>{item.name}</h3>
                    
                    <div className="mt-auto">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 sm:mb-3 gap-1 sm:gap-0">
                        <div className="font-black text-gray-900 dark:text-white text-xs sm:text-lg lg:text-xl">{item.price}</div>
                        <div className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#1E1E2C] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-gray-200 dark:border-[#2A2A38] w-fit">12 in stock</div>
                      </div>
                      
                      {viewMode === 'list' && (
                        <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                      )}
                      
                      <div className={`flex items-center justify-between pt-1.5 sm:pt-3 border-t border-gray-100 dark:border-[#2A2A38]`}>
                        <div className="flex items-center gap-0.5 sm:gap-1.5">
                          <Star size={10} className="text-yellow-500 sm:w-3.5 sm:h-3.5" fill="currentColor" />
                          <span className="font-bold text-[9px] sm:text-xs lg:text-sm text-gray-700 dark:text-gray-300">{item.rating}</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{item.reviews} sold</span>
                      </div>
                    </div>
                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-full py-16 sm:py-24 lg:py-32 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-[#12121D] rounded-2xl border border-gray-200 dark:border-[#2A2A38]">
                <Search size={40} className="mx-auto mb-4 opacity-30 sm:w-12 sm:h-12" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-xs sm:text-sm text-gray-500">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-12 mb-8 lg:mb-12">
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] text-gray-500 dark:text-gray-400 rounded-lg sm:rounded-xl hover:text-gray-900 dark:hover:text-white transition-colors">&lt;</button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#6324E2] text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-md">1</button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] text-gray-500 dark:text-gray-400 rounded-lg sm:rounded-xl hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium">2</button>
              <span className="text-gray-400 px-1 sm:px-2 text-xs sm:text-sm font-bold">...</span>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white dark:bg-[#12121D] border border-gray-200 dark:border-[#2A2A38] text-gray-500 dark:text-gray-400 rounded-lg sm:rounded-xl hover:text-gray-900 dark:hover:text-white transition-colors">&gt;</button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;