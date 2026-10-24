import React from 'react';

export default function Hero({ store }) {
  return (
    <section id="hero" className={`mx-4 sm:mx-8 my-6 bg-gradient-to-br ${store.bannerBg} text-white rounded-3xl p-8 sm:p-14 shadow-xl transition-all duration-500`}>
      <div className="max-w-2xl">
        <span className="bg-blue-600 text-white uppercase text-xs font-bold px-3 py-1 rounded-full tracking-wider">
          {store.heroTag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-4 leading-tight">{store.heroTitle}</h1>
        <p className="text-slate-300 text-sm sm:text-base mb-8">{store.heroDesc}</p>
        <a 
          href="#featured" 
          className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:-translate-y-1 inline-block transition-transform duration-300"
        >
          Shop Collection Now
        </a>
      </div>
    </section>
  );
}