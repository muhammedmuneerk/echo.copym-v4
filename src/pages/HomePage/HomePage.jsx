import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import IssuerSection from "./sections/IssuerSection";
import SecurityFeaturesSection from "./sections/SecurityFeaturesSection";
import TechnologyStackSection from "./sections/TechnologyStackSection";
import AiOverview from "./sections/AiOverview";
import Features from "./sections/Features";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Hero />
      <HowItWorks />
      <AiOverview />
      <SecurityFeaturesSection />
      <TechnologyStackSection />
      <Dashboard />
      <IssuerSection />
    </div>
  );
}