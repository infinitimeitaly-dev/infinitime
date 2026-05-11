import { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

interface LinkItem {
  label: string;
  href?: string;
  type?: 'modal' | 'link';
  id?: string;
}

const LINKS: Record<string, LinkItem[]> = {
  Palestre: [
    { label: 'Diventa partner', href: '/palestre' },
    { label: 'Come funziona', href: '/come-funziona' }
  ],
  'Chi siamo': [
    { label: 'La nostra storia', href: '/chi-siamo' },
    { label: 'Trasparenza', href: '/come-funziona' },
    { label: 'Contatti', type: 'modal', id: 'contacts' }
  ],
  Legale: [
    { label: 'Privacy Policy', type: 'modal', id: 'privacy' },
    { label: 'Termini e Condizioni', type: 'modal', id: 'terms' },
    { label: 'Cookie Policy', type: 'modal', id: 'cookies' }
  ],
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer id="contatti" className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.jpg" alt="Infinitime Logo" className="w-10 h-10 object-contain rounded-lg" />
              <span className="font-display text-2xl font-bold tracking-tighter text-gray-900">Infinitime</span>
            </Link>
            <p className="mt-6 text-base text-gray-500 font-medium leading-relaxed max-w-xs">
              Integratori di qualità a prezzi convenienti. <br />
              Il metodo più intelligente per acquistare i migliori prodotti sul mercato senza perdere tempo.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.instagram.com/infinitimeitaly?igsh=enk0Zzc2bHM3M3l3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:infinitimeitaly@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => {
            return (
              <div key={title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.label}>
                      {item.type === 'modal' ? (
                        <button
                          onClick={() => setActiveModal(item.id || null)}
                          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.href || '#'}
                          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[13px] font-medium text-gray-400">
              &copy; {new Date().getFullYear()} Infinitime.
            </p>
            <div className="flex gap-6">
              <button onClick={() => setActiveModal('privacy')} className="text-[13px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</button>
              <button onClick={() => setActiveModal('terms')} className="text-[13px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Termini e Condizioni</button>
            </div>
          </div>
          <p className="text-[13px] font-medium text-gray-400 text-center sm:text-right">
            Tutti i prezzi includono IVA e spedizione.
          </p>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <p className="mb-4">Benvenuto su Infinitime. La tua privacy è estremamente importante per noi.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">1. Raccolta dei Dati</h4>
        <p>Raccogliamo solo i dati necessari per gestire i tuoi ordini tramite WhatsApp ed Email. Questo include il tuo nome e le informazioni di contatto fornite durante la comunicazione.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">2. Utilizzo dei Dati</h4>
        <p>I dati vengono utilizzati esclusivamente per elaborare le tue richieste di acquisto e fornirti assistenza.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">3. Conservazione</h4>
        <p>Non conserviamo database di profilazione a lungo termine. Le conversazioni WhatsApp e le Email sono soggette alle policy di sicurezza delle rispettive piattaforme.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Termini e Condizioni"
      >
        <p className="mb-4">Accedendo al sito Infinitime, accetti i seguenti termini.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">1. Natura del Servizio</h4>
        <p>Infinitime agisce come intermediario per l'applicazione di codici sconto aggregati. L'acquisto finale avviene tramite link diretti ai siti dei fornitori ufficiali.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">2. Responsabilità</h4>
        <p>Non siamo responsabili per ritardi di spedizione imputabili al corriere o al fornitore finale. Garantiamo però assistenza per risolvere ogni problematica.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">3. Prezzi</h4>
        <p>I prezzi visualizzati sono frutto di algoritmi di ricerca sconti e sono validi al momento della consultazione.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'cookies'} 
        onClose={closeModal} 
        title="Cookie Policy"
      >
        <p className="mb-4">Utilizziamo solo i cookie strettamente necessari per il funzionamento del sito.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">Cookie Tecnici</h4>
        <p>Questi cookie sono essenziali per navigare tra le pagine e utilizzare le funzionalità del sito. Non raccogliamo dati di profilazione per scopi pubblicitari.</p>
        <h4 className="text-gray-900 font-bold mt-6 mb-2">Terze Parti</h4>
        <p>Il sito potrebbe includere collegamenti a servizi esterni (WhatsApp, Instagram) che gestiscono i propri cookie in base alle loro policy.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'contacts'} 
        onClose={closeModal} 
        title="Contatti"
      >
        <div className="space-y-8">
          <p className="text-lg">Siamo a tua disposizione per qualsiasi dubbio o richiesta di ordine.</p>
          <div className="space-y-4">
            <a 
              href="mailto:infinitimeitaly@gmail.com" 
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:text-petrol-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scrivici via Email</p>
                <p className="text-lg font-bold text-gray-900">infinitimeitaly@gmail.com</p>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/infinitimeitaly?igsh=enk0Zzc2bHM3M3l3&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:text-pink-600">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Seguici su Instagram</p>
                <p className="text-lg font-bold text-gray-900">@infinitimeitaly</p>
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-400">Il nostro team risponde solitamente entro poche ore.</p>
        </div>
      </Modal>
    </footer>
  );
}
