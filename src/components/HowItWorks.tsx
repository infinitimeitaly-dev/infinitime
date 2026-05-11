import { useScrollReveal } from '../hooks/useScrollReveal';
import { Search, Tag, Truck } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Scegli i prodotti o chiedi a noi',
    description: 'Scegli gli integratori che ti servono dal nostro catalogo o fatti aiutare dal nostro team per indirizzare al meglio il tuo percorso verso le tuo obiettivo.',
  },
  {
    icon: Tag,
    title: 'Prezzi e tempi ridotti',
    description: 'Troviamo e applichiamo i migliori codici sconto disponibili per te e gestiamo tutto al tuo posto.',
  },
  {
    icon: Truck,
    title: 'Ricevi a casa o in palestra',
    description: 'Consegna diretta dal brand stesso a un prezzo più basso del mercato, senza che tu faccia altro.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="come-funziona" className="py-24 sm:py-40 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`max-w-3xl mb-24 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.1] mb-8">
            Scegliere bene è una <span className="text-petrol-600">scienza.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Abbiamo automatizzato la ricerca dei prezzi migliori per farti risparmiare tempo e denaro. Ecco come facciamo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`relative fade-in-up stagger-${i + 1} ${
                isVisible ? 'visible' : ''
              }`}
            >
              <div className="text-[120px] font-bold text-gray-50 absolute -top-20 -left-4 pointer-events-none select-none leading-none">
                {i + 1}
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-petrol-50 text-petrol-600 mb-8 shadow-sm">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
