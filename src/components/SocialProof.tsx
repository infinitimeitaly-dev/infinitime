import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Giuseppe P.',
    role: 'Istruttore di sala pesi',
    text: 'Prezzi davvero convenienti e servizio impeccabile. Ho risparmiato tanto sul mio ordine rispetto ai prezzi dei soliti siti. Inoltre grazie al piano di affilizione guadagno anche una percentuale onesta, senza fare nulla.',
    stars: 5,
  },
  {
    name: 'Gaia R.',
    role: 'Nutrizionista',
    text: 'Consiglio Infinitime ai miei clienti. I prodotti sono gli stessi che trovavo altrove, ma a un prezzo decisamente migliore e un servizio di indirizzamento eccellente.',
    stars: 5,
  },
  {
    name: 'Eamanuele A.',
    role: 'Atleta',
    text: 'Ho ordinato quello che era più adatto a me, grazie alla consulenza di Infinitime e ai loro sconti. Servizio intuitivo e rapido.',
    stars: 5,
  },
];

const BRANDS = ['MyProtein', 'Bulk', 'Tsunami Nutrition', 'Yamamoto', 'Prozis', 'GymBeam'];

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 sm:py-40 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-24 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-tight">
            Cosa dicono di noi, <br />
            <span className="text-petrol-600">senza alcun filtro:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`bg-gray-50/50 rounded-[2.5rem] p-10 border border-gray-100 flex flex-col justify-between fade-in-up stagger-${i + 1} ${
                isVisible ? 'visible' : ''
              }`}
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={j < review.stars ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}
                    />
                  ))}
                </div>
                <p className="text-xl font-medium text-gray-900 leading-relaxed italic mb-10">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-petrol-600 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-petrol-200">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900 tracking-tight">{review.name}</div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-40 text-center fade-in-up stagger-4 ${
            isVisible ? 'visible' : ''
          }`}
        >
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            Trattiamo i migliori marchi del mondo appositamente per te.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
