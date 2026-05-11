import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRODUCTS } from '../data/products';
import { Check, Star, ShieldCheck, Truck, RefreshCw, ArrowLeft, Plus, Minus } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      navigate('/prodotti');
    }
  }, [product, navigate]);

  if (!product) return null;

  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs / Back */}
          <button 
            onClick={() => navigate('/prodotti')}
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            Torna ai prodotti
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 relative group">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-8 left-8 z-10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-petrol-600 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-petrol-600' : 'border-transparent bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-sm font-bold text-petrol-600 uppercase tracking-widest mb-4 block">
                  {product.brand} • {product.category}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900 mb-6 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-400">({product.reviews.length || 0} recensioni)</span>
                </div>

                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="bg-gray-50 rounded-[2.5rem] p-10 mb-10 border border-gray-100">
                <div className="flex items-end gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-400 line-through font-medium">
                      {product.originalPrice.toFixed(2)} &euro;
                    </span>
                    <span className="text-5xl font-bold text-gray-900 tracking-tighter">
                      {product.salePrice.toFixed(2)} &euro;
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                      Risparmi {discount}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/393331234567?text=Ciao! Vorrei ordinare ${product.name} (${quantity} unità)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white font-bold py-5 rounded-full hover:bg-[#128C7E] transition-all active:scale-[0.98] shadow-xl shadow-green-100 flex items-center justify-center gap-2"
                  >
                    Ordina su WhatsApp
                  </a>
                  <a 
                    href={`mailto:ordini@infinitime.it?subject=Ordine ${product.name}&body=Vorrei ordinare ${quantity} unità di ${product.name}.`}
                    className="flex-1 bg-gray-900 text-white font-bold py-5 rounded-full hover:bg-gray-800 transition-all active:scale-[0.98] shadow-xl shadow-gray-200 flex items-center justify-center gap-2"
                  >
                    Ordina via Email
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-petrol-600">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Qualità Verificata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-petrol-600">
                    <Truck size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Spedizione 24/48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-petrol-600">
                    <RefreshCw size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Reso Gratuito</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Tabs / Sections */}
          <div className="mt-24">
            <div className="border-b border-gray-100 mb-16 flex gap-12 overflow-x-auto no-scrollbar">
              <button className="pb-6 text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900">Descrizione</button>
              <button className="pb-6 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">Informazioni Nutrizionali</button>
              <button className="pb-6 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">Recensioni</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold tracking-tighter text-gray-900 mb-8">Informazioni sul prodotto</h3>
                <div className="prose prose-gray max-w-none text-lg text-gray-500 font-medium leading-relaxed">
                  <p className="mb-6">{product.longDescription}</p>
                  <ul className="space-y-4">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={18} className="text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-[2.5rem] p-10 h-fit border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Valori per dose</h3>
                <div className="space-y-4">
                  {(product.nutritionalInfo || [
                    { label: 'Energia', value: '380 kcal' },
                    { label: 'Proteine', value: '24g' },
                    { label: 'Grassi', value: '1.2g' },
                    { label: 'Carboidrati', value: '2.5g' }
                  ]).map((info, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">{info.label}</span>
                      <span className="text-gray-900 font-bold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
