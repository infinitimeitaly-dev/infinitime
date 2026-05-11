import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { DollarSign, Users, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

const GYM_BENEFITS = [
  {
    icon: DollarSign,
    title: 'Per te e la tua attività',
    description: 'Commissione passiva su ogni ordine, zero gestione logistica e materiali marketing pronti all\'uso.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Per i tuoi clienti',
    description: 'Accesso ai prezzi più bassi del mercato in assoluto, la sicurezza di prodotti certificati e di qualità eccellente.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: HeartHandshake,
    title: 'Per tutti',
    description: 'Un rapporto di fiducia reciproca. Diventi insieme a noi, il punto di riferimento per il benessere totale dei tuoi clienti.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function GymsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Palestra moderna"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className={`max-w-3xl fade-in-up ${heroVisible ? 'visible' : ''}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8">
              La tua attività guadagna. <br />
              <span className="text-petrol-400">I tuoi soci risparmiano.</span>
            </h1>
            <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12">
              Trasforma la tua attività in un hub di qualità e efficenza. 
              Senza magazzino e senza rischi, solo vantaggi.
            </p>
            <a href="#form-affiliazione" className="inline-flex items-center px-10 py-4 text-[15px] font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all active:scale-95">
              Inizia ora <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Meccanismo in 3 blocchi */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {GYM_BENEFITS.map((benefit, i) => (
              <div key={benefit.title} className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-8`}>
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900">La differenza è concreta</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100">
              <h4 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest text-center">Attività tradizionale</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-500 line-through decoration-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0" />
                  <span>Vendita di integratori con margini bassi</span>
                </li>
                <li className="flex items-start gap-4 text-gray-500 line-through decoration-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0" />
                  <span>Gestione magazzino e scadenze</span>
                </li>
                <li className="flex items-start gap-4 text-gray-500 line-through decoration-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0" />
                  <span>I soci cercano sconti online altrove</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-petrol-600/30 blur-3xl rounded-full" />
              <h4 className="text-xl font-bold text-petrol-400 mb-8 uppercase tracking-widest text-center">Palestra Infinitime</h4>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4 text-white font-medium">
                  <CheckCircle2 className="text-petrol-400 flex-shrink-0" size={24} />
                  <span>Commissioni automatiche su ogni ordine</span>
                </li>
                <li className="flex items-start gap-4 text-white font-medium">
                  <CheckCircle2 className="text-petrol-400 flex-shrink-0" size={24} />
                  <span>Zero magazzino, zero pensieri</span>
                </li>
                <li className="flex items-start gap-4 text-white font-medium">
                  <CheckCircle2 className="text-petrol-400 flex-shrink-0" size={24} />
                  <span>I soci hanno il prezzo più basso garantito</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form di Richiesta */}
      <section id="form-affiliazione" className="py-24 sm:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] p-12 sm:p-20 border border-gray-100">
            {submitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Richiesta Inviata!</h3>
                <p className="text-lg text-gray-500 font-medium">Ti abbiamo inviato un'email di conferma. Ti ricontatteremo entro 24 ore.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-petrol-600 hover:text-petrol-700"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-bold tracking-tighter text-gray-900 mb-4">Diventa partner ora</h2>
                <p className="text-lg text-gray-500 font-medium mb-12">Pochi dati per iniziare una collaborazione che dura nel tempo.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Nome Palestra</label>
                      <input required type="text" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 transition-all font-medium" placeholder="Gym Name" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Nome Referente</label>
                      <input required type="text" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 transition-all font-medium" placeholder="Mario Rossi" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Email</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 transition-all font-medium" placeholder="email@palestra.it" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Numero di soci</label>
                    <select className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 transition-all font-medium appearance-none">
                      <option>Meno di 100</option>
                      <option>100 - 300</option>
                      <option>300 - 500</option>
                      <option>Più di 500</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Messaggio libero</label>
                    <textarea className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-petrol-500/20 transition-all font-medium min-h-[120px]" placeholder="Parlaci della tua realtà..." />
                  </div>
                  <button type="submit" className="w-full py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-[0.98] shadow-xl shadow-gray-200">
                    Invia richiesta
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
