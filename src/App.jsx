import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StoreTabs from './components/StoreTabs';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const storesData = {
  tech: {
    name: "Sohail Tech & Electronics Store",
    heroTag: "Modern Electronics",
    heroTitle: "Premium Laptops, Audio & Smart Gadgets",
    heroDesc: "Latest technology handpicked by Sohail Khan. Authentic hardware with official warranty.",
    bannerBg: "from-slate-900 to-slate-800",
    products: [
      { id: 101, title: "Pro Wireless ANC Headphones", price: 18500, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop" },
      { id: 102, title: "Smart Watch Ultra Series", price: 12000, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop" },
      { id: 103, title: "Mechanical RGB Keyboard", price: 8500, category: "Accessories", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop" },
      { id: 104, title: "Ergonomic Gaming Mouse", price: 4500, category: "Accessories", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop" },
      { id: 105, title: "4K Ultra HD Action Camera", price: 29000, category: "Cameras", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop" },
      
      // ✅ Fixed Image Link (Wireless Charger)
      { id: 106, title: "Fast Wireless Charging Pad", price: 3500, category: "Accessories", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop" },
      
      { id: 107, title: "Bluetooth Portable Speaker", price: 7200, category: "Audio", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop" },
      { id: 108, title: "Active Noise Cancelling Earbuds", price: 9500, category: "Audio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop" },
      { id: 109, title: "RGB Gaming Headset Stand", price: 3200, category: "Accessories", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop" },
      
      // ✅ Fixed Image Link (Power Bank)
      { id: 110, title: "10000mAh Slim Power Bank", price: 4200, category: "Accessories", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop" }
    ]
  },
  fashion: {
    name: "Sohail Fashion & Clothing Store",
    heroTag: "Luxury Fashion 2026",
    heroTitle: "Elegant Suits, Streetwear & Accessories",
    heroDesc: "Step into modern style with Sohail Khan’s signature clothing line.",
    bannerBg: "from-rose-900 to-rose-950",
    products: [
      { id: 201, title: "Classic Italian Fit Suit", price: 34500, category: "Suits", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop" },
      { id: 202, title: "Minimalist Leather Jacket", price: 22000, category: "Outerwear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop" },
      { id: 203, title: "Premium Urban Sneakers", price: 14000, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop" },
      { id: 204, title: "Luxury Chronograph Watch", price: 28000, category: "Accessories", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop" },
      { id: 205, title: "Formal Oxford Leather Shoes", price: 11500, category: "Footwear", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop" },
      { id: 206, title: "Casual Cotton Polo Shirt", price: 3200, category: "Clothing", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop" },
      { id: 207, title: "Designer Winter Woolen Coat", price: 19500, category: "Outerwear", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop" },
      { id: 208, title: "Slim Fit Denim Jeans", price: 4800, category: "Clothing", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop" },
      { id: 209, title: "Classic Silk Necktie Set", price: 2500, category: "Accessories", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500&auto=format&fit=crop" },
      { id: 210, title: "Genuine Leather Wallet & Belt", price: 3800, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop" }
    ]
  },
  home: {
    name: "Sohail Home & Living Decor",
    heroTag: "Cozy Home Interior",
    heroTitle: "Modern Furniture & Interior Decor",
    heroDesc: "Transform your living area with stylish and comfortable furniture selection.",
    bannerBg: "from-emerald-900 to-emerald-950",
    products: [
      { id: 301, title: "Nordic Minimalist Armchair", price: 42000, category: "Furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop" },
      { id: 302, title: "Warm Ceramic Desk Lamp", price: 6500, category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop" },
      { id: 303, title: "Handcrafted Modern Rug", price: 18000, category: "Decor", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop" },
      { id: 304, title: "Aromatic Diffuser Set", price: 4800, category: "Accessories", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop" },
      { id: 305, title: "Luxury Velvet Cushion Covers Set", price: 3500, category: "Decor", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop" },
      { id: 306, title: "Modern Wall Clock Minimalist", price: 4200, category: "Decor", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop" },
      { id: 307, title: "Stainless Steel Cutlery Set", price: 5500, category: "Kitchen", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop" },
      { id: 308, title: "Indoor Decorative Plant Pot", price: 3200, category: "Decor", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop" },
      { id: 309, title: "Smart LED Ambient Floor Lamp", price: 12500, category: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop" },
      { id: 310, title: "Premium Cotton Bed Sheet Set", price: 7500, category: "Bedroom", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop" }
    ]
  }
};

export default function App() {
  const [currentStore, setCurrentStore] = useState('tech');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const store = storesData[currentStore];

  const filteredProducts = store.products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Announcement Bar with Truck SVG Icon */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center py-2 text-xs sm:text-sm font-medium px-4 flex items-center justify-center gap-2">
        <span>Welcome to Sohail Stores — Owner: <span className="font-bold underline decoration-blue-500">Sohail Khan</span> | Nationwide Express Delivery</span>
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <StoreTabs currentStore={currentStore} setCurrentStore={setCurrentStore} />

      <Hero store={store} />

      <ProductGrid storeName={store.name} products={filteredProducts} addToCart={addToCart} />

      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
        cart={cart} 
        setCart={setCart}
      />

      {/* Animated Floating WhatsApp Button with Professional Vector SVG */}
      <a 
        href="https://wa.me/923000000000?text=Hello%20Sohail%20Sahab,%20I%20want%20to%20inquire%20about%20your%20store%20products." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25d366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-transform duration-300"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Online</span>
        <span className="font-semibold text-sm">Chat with Sohail</span>
      </a>

      <Footer setCurrentStore={setCurrentStore} />

      {/* 🤖 Smart Auto-Search AI Chat Bot (Added Here Successfully) */}
      <ChatBot />
    </div>
  );
}