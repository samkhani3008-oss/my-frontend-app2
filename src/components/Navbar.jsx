import React, { useState } from 'react';

export default function Navbar({ cartCount, toggleCart, searchQuery, setSearchQuery }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm px-4 sm:px-8 py-3 sm:py-4 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 focus:outline-none p-1"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">SOHAIL</span>
          <span className="text-xl sm:text-2xl font-light text-blue-600">STORES</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600">
          <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#stores" className="hover:text-blue-600 transition-colors">Stores</a>
          <a href="#featured" className="hover:text-blue-600 transition-colors">Products</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Search & Cart Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-slate-200 bg-slate-50 pl-8 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm outline-none focus:border-blue-600 w-28 sm:w-48 md:w-60 transition-all"
            />
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button 
            onClick={toggleCart} 
            className="bg-slate-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-blue-600 transition-colors shrink-0"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav Links */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2 font-medium text-slate-600 text-sm">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Home</a>
          <a href="#stores" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Stores</a>
          <a href="#featured" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Products</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 py-1">Contact</a>
        </nav>
      )}
    </header>
  );
}