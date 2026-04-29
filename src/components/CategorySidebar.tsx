import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]
    );
  };

  const toggleSubcategory = (title: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className="w-[280px] h-full bg-white dark:bg-[#12121D] border-r border-gray-200 dark:border-[#2A2A38] flex flex-col overflow-y-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="py-2 flex flex-col w-full h-full">
        {CATEGORIES.map((category) => {
          const isCategoryOpen = expandedCategories.includes(category.id);
          
          return (
            <div key={category.id} className="w-full flex flex-col">
              
              {/* LEVEL 1: Main Category */}
              <button 
                onClick={() => toggleCategory(category.id)} 
                className={`w-full flex items-center justify-between px-6 py-4 text-sm transition-colors font-bold border-l-2 ${
                  isCategoryOpen 
                    ? 'bg-gray-100 text-[#6324E2] dark:bg-[#1E1E2C] dark:text-[#A67CFF] border-[#6324E2] dark:border-[#A67CFF]' 
                    : 'bg-white text-gray-800 dark:bg-[#12121D] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1a1a24] border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isCategoryOpen ? 'text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-500'}>
                    {category.icon}
                  </span>
                  {category.name}
                </div>
                {category.subcategories && (
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-400'}`} 
                  />
                )}
              </button>

              {/* LEVEL 2 & 3: Subcategories Container */}
              {isCategoryOpen && category.subcategories && (
                <div className="flex flex-col bg-gray-50 dark:bg-[#0A0A11] border-y border-gray-200 dark:border-[#2A2A38]">
                  {Object.entries(category.subcategories).map(([title, items], idx) => {
                    const isSubOpen = expandedSubcategories.includes(title);
                    
                    return (
                      <div key={idx} className="flex flex-col">
                        
                        {/* LEVEL 2: Subcategory Header (e.g., TABLETS, MOBILE ACCESSORIES) */}
                        <button 
                          onClick={() => toggleSubcategory(title)} 
                          className={`flex items-center justify-between w-full px-8 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                            isSubOpen 
                              ? 'bg-gray-200 text-gray-900 dark:bg-[#2A2A38] dark:text-white' 
                              : 'bg-gray-50 text-gray-600 dark:bg-[#0A0A11] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E1E2C]'
                          }`}
                        >
                          {title} 
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-200 ${isSubOpen ? 'rotate-180 text-[#6324E2] dark:text-[#A67CFF]' : 'text-gray-500'}`} 
                          />
                        </button>

                        {/* LEVEL 3: Subcategory Items (e.g., iPads, Power Banks) */}
                        {isSubOpen && (
                          <ul className="flex flex-col py-2 bg-white dark:bg-[#12121D] shadow-inner">
                            {(items as string[]).map((item: string, itemIdx: number) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={`/search?q=${encodeURIComponent(item)}`} 
                                  className="block px-10 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#6324E2] dark:hover:text-[#A67CFF] transition-colors hover:bg-gray-50 dark:hover:bg-[#1E1E2C]/50"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  );
};

export default CategorySidebar;