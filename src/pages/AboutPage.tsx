import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Heart, Target, ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Trasparenza',
    description: 'Niente costi nascosti o abbonamenti a sorpresa. Solo prezzi reali.',
  },
  {
    icon: Target,
    title: 'Concretezza',
    description: 'Risultati visibili nel portafoglio e nella qualità dell\'integrazione.',
  },
  {
    icon: Heart,
    title: 'Rispetto del tempo',
    description: 'Cerchiamo noi le offerte, tu ti alleni e basta.',
  },
];

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-24 overflow-hidden">
        <div ref={heroRef} className="max-w-7xl mx-auto px-6">
          <div className={`max-w-4xl fade-in-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 leading-[1] mb-12">
              Intelligente, <br />
              <span className="text-petrol-600 italic">non scontato.</span>
            </h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              Infinitime nasce per risolvere un problema del sistema attuale utilizzato per acquistare integratori, che risulta essere molto inefficente. Abbiamo deciso di renderlo intelligente.
            </p>
          </div>
        </div>
      </section>

      {/* Storia e Fondatore */}
      <section className="py-24 sm:py-40 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-petrol-500/10 blur-3xl rounded-[3rem] -z-10" />
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-200 shadow-2xl">
                <img 
                  src="/INFINITIME.png" 
                  alt="logo2" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tighter text-gray-900 mb-8">La nostra storia</h2>
              <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed">
                <p>
                  Osservavo i miei amici in palestra passare tanto tempo a cercare il codice sconto giusto, o peggio, pagare il prezzo di listino perché non avevano tempo di cercare.
                </p>
                <p>
                  Ho capito che non serviva un altro negozio di integratori, ma un sistema che automatizzasse la ricerca della convenienza e questo è ancora solo l'inizio. 
                </p>
                <p>
                  Così è nata Infinitime: una piattaforma che mette al centro il tempo e il denaro di chi si allena seriamente.
                </p>
              </div>
              
              <div className="mt-16 p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm relative">
                <div className="text-5xl text-petrol-200 absolute top-6 left-6 font-serif opacity-50">“</div>
                <p className="text-2xl font-bold text-gray-900 tracking-tight leading-relaxed relative z-10">
                  Il miglior integratore è quello che non ti costa tempo per essere acquistato.
                </p>
                <p className="mt-6 text-gray-400 font-bold uppercase tracking-widest text-xs">— Fondatore, Infinitime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">I nostri valori</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {VALUES.map((val) => (
              <div key={val.title} className="text-center">
                <div className="w-20 h-20 bg-gray-50 text-petrol-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <val.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{val.title}</h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
