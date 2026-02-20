import { useState } from 'react';
import { Link } from "react-router-dom";

interface SidebarProps {
  currentCategory?: string;
}

const MENU_ITEMS = [
  { id: "all", label: "All Items", icon: "grid_view", path: "/dashboard" },
  { id: "electronics", label: "Electronics", icon: "devices", path: "/dashboard/electronics" },
  { id: "fashion", label: "Fashion & Apparel", icon: "checkroom", path: "/dashboard/fashion" },
  { id: "industrial", label: "Industrial Equipment", icon: "factory", path: "/dashboard/industrial" },
  { id: "software", label: "Software & Keys", icon: "code", path: "/dashboard/software" },
  { id: "b2b", label: "B2B Services", icon: "handyman", path: "/dashboard/b2b" },
  { id: "ai", label: "AI & Automation", icon: "smart_toy", path: "/dashboard/ai" },
];

function Sidebar({ currentCategory = "all" }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
      {/* Categories Card */}
      <div className="bg-[#111126] border border-[#2d2d4a] rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#2d2d4a] flex items-center justify-between">
          <h3 className="font-bold text-sm tracking-tight text-[#5702d4] uppercase">Categories</h3>
          <span className="material-symbols-outlined text-xs text-slate-500 cursor-pointer">unfold_more</span>
        </div>
        
        <nav className="p-2 space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = currentCategory === item.id || (currentCategory === "all" && item.id === "all");
            
            return (
              <Link 
                key={item.id}
                to={item.path}
                className={`flex items-center justify-between p-2 text-xs rounded-lg group transition-all duration-200 ${
                  isActive 
                    ? "bg-[#5702d4]/20 border border-[#5702d4]/30 text-white" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined text-lg ${isActive ? "text-[#5702d4]" : "text-slate-500 group-hover:text-white"}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {isActive && (
                  <span className="material-symbols-outlined text-xs text-[#5702d4]">chevron_right</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Partner Benefits Card */}
      <div className="bg-[#111126] border border-[#2d2d4a] rounded-xl overflow-hidden p-3">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 pl-1">Partner Benefits</p>
        <div className="bg-gradient-to-br from-[#5702d4] to-[#477cff] rounded-lg p-4 shadow-lg text-center">
          <h4 className="text-white text-sm font-bold mb-1">Xentra Prime</h4>
          <p className="text-white/80 text-[10px] leading-tight mb-3">
            Get 0% escrow fees on all industrial & bulk orders.
          </p>
          <button className="w-full py-2 bg-white text-[#5702d4] text-[10px] font-bold rounded shadow-sm hover:bg-slate-50 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;