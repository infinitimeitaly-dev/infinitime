import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const CATEGORIES = ['Tutti', 'Proteine', 'Creatina', 'Vitamine', 'Pre-workout', 'Recupero', 'Omega & Salute'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Tutti') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const todayDate = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Compatta */}
      <section className="pt-32 pb-16 bg-gray-50/50">
        <div ref={heroRef} className="max-w-7xl mx-auto px-6">
          <div className={`fade-in-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900 mb-8">
              Tutti i <span className="text-petrol-600">prodotti</span>
            </h1>
            
            {/* Filtri Orizzontali */}
            <div className="flex flex-wrap gap-2 sm:gap-4 overflow-x-auto pb-4 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Griglia Prodotti */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.map((product, i) => {
                const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);
                return (
                  <Link
                    key={product.name}
                    to={`/prodotti/${product.id}`}
                    className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2"
                  >
                    {product.badge && (
                      <span className="absolute top-6 left-6 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-petrol-600 rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                          {product.brand}
                        </span>
                        <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          -{discount}%
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-6">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400 line-through font-medium">
                            {product.originalPrice.toFixed(2)} &euro;
                          </span>
                          <span className="text-3xl font-bold text-gray-900 tracking-tighter">
                            {product.salePrice.toFixed(2)} &euro;
                          </span>
                        </div>
                        <div className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 transition-all active:scale-95">
                          Dettagli
                        </div>
                      </div>

                      {/* Trust Indicator */}
                      <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <CheckCircle2 size={12} className="text-green-500" />
                        Prezzo verificato il {todayDate}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-50/50 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-lg font-medium">Non sono presenti prodotti scontati.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
