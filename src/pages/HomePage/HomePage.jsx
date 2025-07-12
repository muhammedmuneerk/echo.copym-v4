import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhyTokenizedAssets from "./sections/WhyTokenizedAssets";
import IssuerSection from "./sections/IssuerSection";
import SecurityFeaturesSection from "./sections/SecurityFeaturesSection";
import TechnologyStackSection from "./sections/TechnologyStackSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Dashboard />
      <WhyTokenizedAssets />
      <IssuerSection />
      <SecurityFeaturesSection />
      <TechnologyStackSection />
    </div>
  );
}