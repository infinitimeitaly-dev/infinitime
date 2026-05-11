import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

function ProductCard({ product, index, isVisible }: { product: any; index: number; isVisible: boolean }) {
  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  return (
    <Link
      to={`/prodotti/${product.id}`}
      className={`group relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 scale-in stagger-${(index % 3) + 1} ${
        isVisible ? 'visible' : ''
      }`}
    >
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-petrol-600 rounded-full">
          {product.badge}
        </span>
      )}
      <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-petrol-600 uppercase tracking-widest">
            {product.category}
          </span>
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            Risparmia {discount}%
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-petrol-600 transition-colors">
          {product.name}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through font-medium">
              {product.originalPrice.toFixed(2)} &euro;
            </span>
            <span className="text-2xl font-bold text-gray-900 tracking-tighter">
              {product.salePrice.toFixed(2)} &euro;
            </span>
          </div>
          <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="prodotti" className="py-24 sm:py-32 bg-gray-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className={`max-w-2xl fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
              I migliori prezzi del <span className="text-petrol-600">momento.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Il nostro sistema seleziona quotidianamente le offerte più vantaggiose dai produttori più affidabili.
            </p>
          </div>
          <div className={`fade-in-up stagger-1 ${isVisible ? 'visible' : ''}`}>
            <Link to="/prodotti" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:gap-3 transition-all">
              Vedi tutto il catalogo <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {PRODUCTS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} isVisible={isVisible} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg font-medium">Non sono presenti prodotti scontati.</p>
          </div>
        )}
      </div>
    </section>
  );
}
