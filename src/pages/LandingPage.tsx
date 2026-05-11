import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import GymPartners from '../components/GymPartners';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Products />
      <WhyUs />
      <GymPartners />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
