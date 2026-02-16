export interface Product {
  id: number;
  title: string;
  category: "electronics" | "fashion" | "industrial" | "software" | "b2b" | "ai";
  price: number;
  originalPrice?: number;
  sold: number;
  rating: number;
  image: string;
  isEscrow: boolean;
  isVerified: boolean;
  tags?: string[];
}

export const PRODUCTS: Product[] = [
  // --- Electronics ---
  {
    id: 1,
    title: "RTX 4090 Workstation GPU - 24GB VRAM",
    category: "electronics",
    price: 1450.00,
    originalPrice: 1699.00,
    sold: 210,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true,
    tags: ["High Performance", "GPU"]
  },
  {
    id: 2,
    title: "Ultra-Slim 4K OLED Monitor 32-inch",
    category: "electronics",
    price: 399.00,
    sold: 85,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: false
  },

  // --- Fashion ---
  {
    id: 3,
    title: "Premium Vegan Leather Tote - Minimalist",
    category: "fashion",
    price: 68.00,
    sold: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop",
    isEscrow: false,
    isVerified: true
  },
  {
    id: 4,
    title: "Urban Techwear Jacket - Waterproof",
    category: "fashion",
    price: 145.00,
    originalPrice: 200.00,
    sold: 450,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true
  },

  // --- Industrial ---
  {
    id: 5,
    title: "Hydraulic Press Machine - 50 Ton Capacity",
    category: "industrial",
    price: 12500.00,
    sold: 4,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true,
    tags: ["Heavy Machinery"]
  },

  // --- Software & Keys ---
  {
    id: 6,
    title: "Windows 11 Pro Enterprise - Bulk License (50 Keys)",
    category: "software",
    price: 450.00,
    originalPrice: 1200.00,
    sold: 89,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true
  },
  {
    id: 7,
    title: "SaaS Integration Engine - 1 Year Subscription",
    category: "software",
    price: 2100.00,
    sold: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true
  },

  // --- AI & Automation ---
  {
    id: 8,
    title: "Quantum Core Neural Processor Unit (NPU)",
    category: "ai",
    price: 4500.00,
    sold: 24,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop",
    isEscrow: true,
    isVerified: true,
    tags: ["Sponsored"]
  }
];