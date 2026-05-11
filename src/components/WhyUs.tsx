import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { ShieldCheck, Eye, TrendingDown, Users } from 'lucide-react';

const POINTS = [
  {
    icon: TrendingDown,
    title: 'Prezzi sotto il mercato',
    description: 'Offriamo prodotti scontati che normalmente non trovi o che devi cercare a lungo.',
  },
  {
    icon: ShieldCheck,
    title: 'Prodotti verificati',
    description: 'Solo brand con certificazioni, ingredienti dichiarati e che seguono le attuali linee guida scientifiche.',
  },
  {
    icon: Eye,
    title: 'Trasparenza totale',
    description: 'Sai quanto costa, sai quanto risparmi, sai cosa ingerisci, sai quanto tempo guadagni.',
  },
  {
    icon: Users,
    title: 'Rete di palestre partner',
    description: 'I migliori trainer conoscono già il nostro servizio e sanno come aiutarti.',
  },
];

export default function WhyUs() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const count = useCountUp(30, 2000, isVisible);

  return (
    <section className="py-24 sm:py-40 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-petrol-900 via-gray-900 to-gray-900" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-petrol-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
            >
              Perché scegliere
              <br />
              <span className="text-petrol-400">Infinitime?</span>
            </h2>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {POINTS.map((point, i) => (
                <div
                  key={point.title}
                  className={`flex gap-6 fade-in-up stagger-${i + 1} ${
                    isVisible ? 'visible' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-petrol-400">
                    <point.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{point.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative flex flex-col items-center justify-center fade-in-up stagger-3 ${
              isVisible ? 'visible' : ''
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-20 bg-petrol-500/20 blur-[100px] rounded-full animate-pulse" />
              <div className="text-center relative">
                <div className="text-[120px] sm:text-[180px] font-bold tracking-tighter leading-none text-white drop-shadow-2xl">
                  &minus;{count}%
                </div>
                <p className="mt-4 text-xl sm:text-2xl text-petrol-300 font-bold tracking-tight">
                  rispetto ai prezzi di mercato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
