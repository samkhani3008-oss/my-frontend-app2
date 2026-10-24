import React from 'react';

export default function Navbar({ cartCount, toggleCart, searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm px-4 sm:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-1 cursor-pointer">
        <span className="text-2xl font-black tracking-tight text-slate-900">SOHAIL</span>
        <span className="text-2xl font-light text-blue-600">STORES</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600">
        <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="#stores" className="hover:text-blue-600 transition-colors">Stores</a>
        <a href="#featured" className="hover:text-blue-600 transition-colors">Products</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 rounded-full text-sm outline-none focus:border-blue-600 w-36 sm:w-60 transition-all"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <button 
          onClick={toggleCart} 
          className="bg-slate-900 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <span>Cart</span>
          <span className="bg-blue-600 px-2 py-0.5 rounded-full text-xs">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}