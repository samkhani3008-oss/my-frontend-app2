import React from 'react';

export default function Footer({ setCurrentStore }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="text-white font-black text-xl mb-4">SOHAIL STORES</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Premium multi-category e-commerce experience providing luxury fashion, tech gadgets, and home essentials. Owned and managed by Sohail Khan.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Our Stores</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#stores" onClick={() => setCurrentStore('tech')} className="hover:text-white transition-colors">Tech & Gadgets</a></li>
            <li><a href="#stores" onClick={() => setCurrentStore('fashion')} className="hover:text-white transition-colors">Fashion & Clothing</a></li>
            <li><a href="#stores" onClick={() => setCurrentStore('home')} className="hover:text-white transition-colors">Home & Living Decor</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Fast Nationwide Shipping</li>
            <li>7 Days Money Back Guarantee</li>
            <li>24/7 Dedicated Support</li>
            <li>100% Genuine Warranty</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Direct Contact</h4>
          <p className="text-sm text-slate-400 mb-1"><strong>Owner:</strong> Sohail Khan</p>
          <p className="text-sm text-slate-400 mb-1"><strong>WhatsApp:</strong> +92 300 0000000</p>
          <p className="text-sm text-slate-400 mb-1"><strong>Email:</strong> sohail.owner@sohailstores.com</p>
          <p className="text-sm text-slate-400"><strong>Address:</strong> Sohail Plaza, Main Commercial Area</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; 2026 Sohail Stores. All Rights Reserved. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}