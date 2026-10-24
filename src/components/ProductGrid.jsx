import React from 'react';

export default function ProductGrid({ storeName, products, addToCart }) {
  return (
    <section id="featured" className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">{storeName}</h2>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-slate-500 py-12">No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col">
              <div className="overflow-hidden h-60 bg-slate-100">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{p.title}</h3>
                  <div className="text-blue-600 font-extrabold text-lg mb-4">Rs. {p.price.toLocaleString()}</div>
                </div>
                <button 
                  onClick={() => addToCart(p)}
                  className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}