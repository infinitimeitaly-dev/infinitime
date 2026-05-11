import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { DollarSign, Package, LayoutGrid as Layout, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Commissione su ogni acquisto',
    description: 'Guadagni una percentuale su ogni ordine, senza fare nulla.',
  },
  {
    icon: Package,
    title: 'Nessun magazzino, nessuna gestione',
    description: 'No scorte, no logistica. Ci pensa il nostro servizio a tutto.',
  },
  {
    icon: Layout,
    title: 'Materiali di comunicazione pronti',
    description: 'Post e contenuti social già predisposti per la tua palestra.',
  },
];

export default function GymPartners() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="palestre" className="relative py-24 sm:py-40 bg-[#0a0f14] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-petrol-900/40 via-transparent to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
            >
              Sei una palestra?
              <br />
              <span className="text-petrol-400">Collaboriamo!</span>
            </h2>
            <p
              className={`mt-8 text-xl text-gray-400 font-medium leading-relaxed max-w-lg fade-in-up stagger-1 ${
                isVisible ? 'visible' : ''
              }`}
            >
              Se i tuoi clienti comprano già integratori o non sanno scegliere ciò che è più giusto per le loro esigenze ed obiettivi, offri a loro un servizio in più e aumenta i tuoi ricavi senza sforzo.
            </p>

            <div className="mt-16 space-y-10">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`flex gap-6 fade-in-up stagger-${i + 2} ${
                    isVisible ? 'visible' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-petrol-400">
                    <benefit.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed max-w-md">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/palestre#form-affiliazione"
              className={`mt-16 inline-block px-10 py-4 text-[15px] font-bold text-white bg-petrol-400 rounded-full hover:bg-petrol-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-petrol-900/20 fade-in-up stagger-5 ${
                isVisible ? 'visible' : ''
              }`}
            >
              Diventa partner
            </Link>
          </div>

          <div
            className={`relative fade-in-up stagger-3 ${isVisible ? 'visible' : ''}`}
          >
          </div>
        </div>
      </div>

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl p-12 relative animate-in zoom-in-95 duration-500">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 rounded-full"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tighter mb-4">
              Unisciti a Infinitime
            </h3>
            <p className="text-gray-500 font-medium mb-10">
              Compila il modulo e riceverai una email dettagliata con la spiegazione del servizio. Successivamente ti ricontatteremo entro 24 ore per spiegarti come funziona la nostra partnership.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Nome Palestra</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 focus:bg-white transition-all text-gray-900 font-medium"
                    placeholder="Gold's Gym"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Città</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 focus:bg-white transition-all text-gray-900 font-medium"
                    placeholder="Milano"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Email di contatto</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 focus:bg-white transition-all text-gray-900 font-medium"
                  placeholder="info@latuapalestra.it"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-[0.98] mt-4 shadow-lg shadow-gray-200"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
