import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Come funziona il risparmio?',
    answer:
      'Monitoriamo costantemente le promozioni e i codici sconto dei principali brand di integratori. Quando effettui un ordine, applichiamo automaticamente le offerte migliori disponibili, così paghi meno senza dover cercare nulla.',
  },
  {
    question: 'I prodotti sono originali?',
    answer:
      'Sì, tutti i prodotti provengono direttamente dai canali ufficiali dei brand o da distributori autorizzati. Non vendiamo prodotti contraffatti o di provenienza dubbia.',
  },
  {
    question: 'Come divento palestra partner?',
    answer:
      'Compila il form di richiesta nella sezione dedicata. Ti ricontatteremo per definire le condizioni di affiliazione e fornirti i materiali di comunicazione. Il processo richiede circa 48 ore.',
  },
  {
    question: "Quanto tempo ci vuole per ricevere l'ordine?",
    answer:
      'La spedizione standard prevede consegna in 2-4 giorni lavorativi su tutto il territorio italiano. Riceverai un tracking via email appena il pacco viene spedito.',
  },
  {
    question: 'Posso ordinare anche senza una palestra di riferimento?',
    answer:
      'Certamente. Il nostro servizio è aperto a tutti. Se però la tua palestra è partner, puoi beneficiare di condizioni ancora più vantaggiose.',
  },
  {
    question: "C'è un ordine minimo?",
    answer:
      'No, non c\'è un ordine minimo. Puoi acquistare anche un solo prodotto e beneficiare comunque dei prezzi scontati.',
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left transition-colors group-hover:bg-gray-50/50 rounded-2xl px-4 -mx-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-gray-900 tracking-tight pr-8">{item.question}</span>
        <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gray-900 text-white rotate-180' : 'text-gray-400 group-hover:bg-gray-200'}`}>
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-8' : 'max-h-0'
        }`}
      >
        <div className="px-4">
          <p className="text-base text-gray-500 font-medium leading-relaxed max-w-2xl">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-40 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div className={`mb-20 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6">
            Ancora dubbi? <br />
            <span className="text-petrol-600 text-3xl sm:text-4xl md:text-5xl">Abbiamo le risposte proprio qui:</span>
          </h2>
        </div>

        <div
          className={`fade-in-up stagger-1 ${isVisible ? 'visible' : ''}`}
        >
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
