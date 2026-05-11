import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import GymsPage from './pages/GymsPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';

// Scroll to top and handle hash links on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
        <Route path="/prodotti/:id" element={<ProductDetailPage />} />
        <Route path="/come-funziona" element={<HowItWorksPage />} />
        <Route path="/palestre" element={<GymsPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
