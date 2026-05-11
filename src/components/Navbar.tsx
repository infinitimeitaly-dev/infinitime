import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Come funziona', href: '/come-funziona' },
  { label: 'Prodotti', href: '/prodotti' },
  { label: 'Palestre', href: '/palestre' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isPalestre = location.pathname === '/palestre';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.jpg" alt="Infinitime Logo" className="w-10 h-10 object-contain rounded-lg transition-transform group-hover:scale-105" />
          <span className={`font-display text-xl font-bold tracking-tighter transition-colors ${
            isPalestre && !scrolled ? 'text-white' : 'text-gray-900'
          }`}>
            Infinitime
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[13px] font-medium transition-colors tracking-tight ${
                location.pathname === link.href 
                  ? 'text-petrol-600' 
                  : (isPalestre && !scrolled ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900')
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/prodotti"
            className={`hidden sm:inline-flex items-center px-6 py-2 text-[13px] font-semibold rounded-full transition-all active:scale-95 ${
              isPalestre && !scrolled 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            Prodotti
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isPalestre && !scrolled ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
            }`}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-nav mt-2 mx-4 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  location.pathname === link.href ? 'text-petrol-600' : 'text-gray-900 hover:text-petrol-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/prodotti"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-full active:scale-[0.98] transition-transform"
              >
                Prodotti
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
