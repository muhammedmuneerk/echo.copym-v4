import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import IssuerSection from "./sections/IssuerSection";
import WhyCopym from "./sections/WhyCopym";
import InvestmentSection from "./sections/InvestmentSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Hero />
      <InvestmentSection />
      <HowItWorks />
      <Dashboard />
      <IssuerSection />
      <WhyCopym />
    </div>
  );
}