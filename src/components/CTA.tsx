import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 sm:py-40 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] bg-gray-900 overflow-hidden px-8 py-20 sm:px-16 sm:py-32 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-petrol-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>

          <div className={`relative z-10 max-w-3xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8 text-balance leading-tight">
              Pronto a migliorare il tuo allenamento?
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-12 text-balance leading-relaxed">
              Unisciti a migliaia di atleti e attività che hanno già scelto Infinitime per i loro integratori. Prezzi trasparenti, qualità garantita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/prodotti"
                className="w-full sm:w-auto px-10 py-4 text-[15px] font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Inizia ora
              </Link>
              <Link
                to="/palestre"
                className="w-full sm:w-auto px-10 py-4 text-[15px] font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all active:scale-[0.98]"
              >
                Parla con noi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
