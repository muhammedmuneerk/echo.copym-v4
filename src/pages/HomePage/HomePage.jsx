import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import IssuerSection from "./sections/IssuerSection";
import WhyCopym from "./sections/WhyCopym";
import InvestmentSection from "./sections/InvestmentSection";
import Testimonials from "./sections/Testimonials";
import SupportedAssets from "./sections/SupportedAssets";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Hero />
      <HowItWorks />
      <InvestmentSection />
      <SupportedAssets />
      <Dashboard />
      <IssuerSection />
      <WhyCopym />
      <Testimonials />
    </div>
  );
}