import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Search, ShoppingBag, Zap, Truck, CheckCircle, HelpCircle } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Naviga nel catalogo',
    description: 'Esplora la nostra selezione curata dei migliori brand di integratori al mondo.',
  },
  {
    icon: ShoppingBag,
    title: 'Scegli i prodotti e contattaci',
    description: 'Seleziona ciò che ti serve e clicca sul pulsante WhatsApp o Email per inoltrare la tua richiesta al nostro team.',
  },
  {
    icon: Zap,
    title: 'Prodotti già scontati',
    description: 'Il nostro team verifica e confronta i migliori sconti aggregati per garantirti il prezzo sicuro più basso.',
  },
  {
    icon: Truck,
    title: "Consulenze per le tue esigenze",
    description: 'Offriamo la possibilià di consultare il nostro team per analizzare e comprendere quale prodotto si addice di più ai propri obiettivi',
  },
  {
    icon: CheckCircle,
    title: 'Ricevi a casa e risparmi',
    description: 'Ricevi i prodotti originali a un prezzo sensibilmente inferiore a quello di listino.',
  },
];

export default function HowItWorksPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-petrol-50 rounded-full blur-[120px] opacity-60" />
        </div>
        
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`max-w-3xl fade-in-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.05] mb-8">
              Come riusciamo a farti <span className="text-petrol-600">risparmiare?</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Scegliamo il miglior prodotto per le tue necessità, svolgiamo i passaggi tediosi e noiosi e automatizziamo la ricerca della convenienza. 
              Ecco il percorso del tuo risparmio.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Animati Verticali */}
      <section className="py-24 bg-gray-50/50">
        <div ref={stepsRef} className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {STEPS.map((step, i) => (
              <div 
                key={step.title} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 fade-in-up stagger-${(i % 3) + 1} ${stepsVisible ? 'visible' : ''}`}
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center text-petrol-600 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <step.icon size={40} strokeWidth={1.5} />
                </div>
                <div className="max-w-2xl text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Trasparenza */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-petrol-600/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-white/80">
                <HelpCircle size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Trasparenza</span>
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tighter mb-8">
                Come guadagna Infinitime?
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed mb-8">
                Siamo onesti: non siamo una onlus. Il nostro guadagno deriva da un piccolo margine sulla differenza tra lo sconto che riusciamo a ottenere aggregando migliaia di ordini e il prezzo finale che proponiamo a te.
              </p>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                In questo modo, tu paghi comunque il prezzo più basso del mercato e noi sosteniamo la nostra piattaforma, i partner affiliati e i fornitori dei prodotti. 
                <span className="text-white block mt-4 italic">Win-win. Sempre.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
