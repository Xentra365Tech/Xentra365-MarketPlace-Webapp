import React from 'react';
import { Smartphone, Monitor, Home, Shirt, Gamepad2, Code, Wrench } from 'lucide-react';

// --- CATEGORIES ---
export const CATEGORIES = [
  {
    id: 'phones', name: 'Phones & Tablets', icon: React.createElement(Smartphone, { size: 18 }),
    subcategories: {
      'Mobile Phones': ['Smartphones', 'Android Phones', 'iPhones', 'Refurbished Phones'],
      'Tablets': ['iPads', 'Android Tablets', 'Educational Tablets'],
      'Mobile Accessories': ['Accessory Kits', 'Adapters & Cables', 'Power Banks', 'Smartwatches'],
      'Top Brands': ['Apple', 'Samsung', 'Xiaomi', 'Tecno']
    }
  },
  {
    id: 'electronics', name: 'Electronics', icon: React.createElement(Monitor, { size: 18 }),
    subcategories: {
      'Television & Video': ['Smart TVs', 'LED & LCD TVs', 'TV Accessories', 'Projectors'],
      'Cameras & Photos': ['Digital Cameras', 'Video Surveillance', 'Drones'],
      'Home Audio': ['Home Theatre Systems', 'Sound Bars', 'Bluetooth Speakers'],
    }
  },
  { 
    id: 'appliances', name: 'Appliances', icon: React.createElement(Home, { size: 18 }),
    subcategories: {
      'Small Appliances': ['Blenders', 'Microwaves', 'Air Fryers', 'Electric Kettles', 'Irons'],
      'Large Appliances': ['Washing Machines', 'Refrigerators', 'Freezers', 'Air Conditioners'],
      'Top Brands': ['LG', 'Hisense', 'Samsung', 'Thermocool']
    }
  },
  { 
    id: 'fashion', name: 'Fashion & Apparel', icon: React.createElement(Shirt, { size: 18 }),
    subcategories: {
      'Men\'s Fashion': ['T-Shirts & Polos', 'Jeans', 'Sneakers', 'Watches'],
      'Women\'s Fashion': ['Dresses', 'Tops & Blouses', 'Heels & Flats', 'Handbags'],
      'Kids & Baby': ['Boys\' Clothing', 'Girls\' Clothing', 'Baby Essentials']
    }
  },
  { 
    id: 'gaming', name: 'Gaming', icon: React.createElement(Gamepad2, { size: 18 }),
    subcategories: {
      'Consoles': ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
      'Video Games': ['PS5 Games', 'PS4 Games', 'Xbox Games', 'Digital Codes'],
      'Accessories': ['Controllers', 'Gaming Headsets', 'Gaming Chairs']
    }
  },
];

export const DASHBOARD_CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: React.createElement(Monitor, { size: 16 }) },
  { id: 'software', name: 'Software & Keys', icon: React.createElement(Code, { size: 16 }), active: true },
  { id: 'b2b', name: 'B2B Services', icon: React.createElement(Wrench, { size: 16 }) },
];

export const HERO_CATEGORIES = [
  'Women\'s Clothing', 'Smart Devices', 'Luxury Goods', 'Gaming Gear', 
  'Beauty Care', 'Sportswear', 'Home Decor', 'Digital Asset'
];

export const RECENT_ORDERS = [
  { id: "#ORD-98211", name: "RTX 4090 Workstation", eta: "ETA: 2 Days", price: "$1,450.00", status: "SHIPPED", statusColor: "text-orange-400" },
  { id: "#ORD-98190", name: "API License (Premium)", eta: "July 22, 2023", price: "$299.00", status: "COMPLETED", statusColor: "text-green-400" },
];

export const FLASH_SALE_PRODUCTS = [
  { id: 1, name: "Luxury Chronograph Watch", price: "$299.00", oldPrice: "$550.00", discount: "-45%", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", soldProgress: 85 },
  { id: 2, name: "Performance Running Shoes", price: "$120.00", oldPrice: "$170.00", discount: "-30%", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", soldProgress: 40 },
  { id: 3, name: "Noise Cancelling Headphones", price: "$89.50", oldPrice: "$150.00", discount: "-60%", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", soldProgress: 95 },
  { id: 4, name: "Minimalist Smart Speaker", price: "$45.00", oldPrice: "$60.00", discount: "-15%", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", soldProgress: 12 }
];

// --- MASSIVE PRODUCT DATABASE GENERATOR ---
const BASE_PRODUCTS = [
  { name: "Ultra-Slim Pro Laptop Gen 4", category: "Hardware", desc: "16GB RAM, 1TB SSD", priceBase: 1299, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", tag: "Verified", isEscrow: true },
  { name: "Noise Cancelling Wireless", category: "Hardware", desc: "Carbon Black, 40h Battery", priceBase: 189, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", tag: "Verified", isEscrow: false },
  { name: "Quantum Core Processor Unit", category: "Hardware", desc: "Enterprise tier, bulk", priceBase: 4500, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", tag: "Escrow", isEscrow: true },
  { name: "AcousticSeal B2B Headset", category: "Hardware", desc: "Noise isolating, dual mic", priceBase: 149, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80", tag: "Verified", isEscrow: true },
  { name: "Enterprise Security Token v4", category: "Software", desc: "Hardware MFA encryption", priceBase: 89, image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?w=400&q=80", tag: "Verified", isEscrow: true },
  { name: "Managed 48-Port PoE Switch", category: "Hardware", desc: "Fiber Uplink, Cloud", priceBase: 670, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80", tag: "Escrow", isEscrow: true },
  { name: "TensorFlow Optimized GPU", category: "Hardware", desc: "24GB VRAM, AI Training", priceBase: 1899, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80", tag: "Verified", isEscrow: true },
  { name: "Cloud Storage Array - 100TB", category: "Hardware", desc: "Enterprise HDD, Rackmount", priceBase: 3400, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80", tag: "Verified", isEscrow: false },
  { name: "SaaS Integration Engine", category: "Software", desc: "Enterprise License, API", priceBase: 2100, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", tag: "Escrow", isEscrow: true },
  { name: "Biometric Access Terminal", category: "Hardware", desc: "Retina + Fingerprint scanner", priceBase: 550, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80", tag: "Verified", isEscrow: true },
];

const LOCATIONS = ["NYC, USA", "LONDON, UK", "BERLIN, DE", "TOKYO, JP", "SHANGHAI, CN", "PARIS, FR", "DUBAI, UAE"];

// This function multiplies our base products to create hundreds of search results
const generateMassiveDatabase = (targetCount: number) => {
  const db = [];
  for (let i = 0; i < targetCount; i++) {
    const base = BASE_PRODUCTS[i % BASE_PRODUCTS.length];
    const randomizedPrice = (base.priceBase + (Math.random() * 100 - 50)).toFixed(2);
    db.push({
      id: 1000 + i,
      name: `${base.name} (Batch ${Math.floor(i / 10) + 1})`,
      desc: base.desc,
      category: base.category,
      price: `$${parseFloat(randomizedPrice).toLocaleString()}`,
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 2000) + 10,
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      image: base.image,
      tag: base.tag,
      isVerified: Math.random() > 0.3,
      isEscrow: base.isEscrow,
    });
  }
  return db;
};

// Generates 400 products automatically!
export const ALL_PRODUCTS = generateMassiveDatabase(400);

// Just grab the first 12 for the Dashboard/Landing page recommendations
export const RECOMMENDED_PRODUCTS = ALL_PRODUCTS.slice(0, 12);