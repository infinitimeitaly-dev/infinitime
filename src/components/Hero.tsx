import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const BADGES = [
  'Prezzi verificati',
  'Spedizione inclusa',
  'Affiliazioni attività',
];

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-petrol-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] opacity-40" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <div className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="relative flex items-center justify-center">
            <img 
              src="/logo.jpg" 
              alt="" 
              className="w-4 h-4 rounded-full animate-pulse relative z-10" 
            />
            <div className="absolute inset-0 bg-petrol-400/20 rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Prezzi aggiornati in tempo reale</span>
        </div>

        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter text-gray-900 text-balance fade-in-up stagger-1 ${
            isVisible ? 'visible' : ''
          }`}
        >
          I migliori integratori,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 via-petrol-500 to-blue-600">al prezzo giusto.</span>
        </h1>

        <p
          className={`mt-8 max-w-xl mx-auto text-lg sm:text-xl text-gray-500 font-medium leading-relaxed text-balance fade-in-up stagger-2 ${
            isVisible ? 'visible' : ''
          }`}
        >
          Risparmia soldi e tempo sugli integratori migliori.
          Nessun costo aggiuntivo, solo sconti reali mirati per te.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 fade-in-up stagger-3 ${
            isVisible ? 'visible' : ''
          }`}
        >
          <Link
            to="/prodotti"
            className="w-full sm:w-auto px-10 py-4 text-[15px] font-bold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-gray-200"
          >
            Sfoglia il catalogo
          </Link>
          <Link
            to="/palestre"
            className="w-full sm:w-auto px-10 py-4 text-[15px] font-bold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            Sei un'attività?
          </Link>
        </div>
      </div>
    </section>
  );
}
