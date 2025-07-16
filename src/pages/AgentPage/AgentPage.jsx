import React from 'react';

// Import all converted Tailwind sections
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import FeaturesSection from './sections/FeaturesSection';
import DemoSection from './sections/DemoSection';
import StatsSection from './sections/StatsSection';
import BusinessModel from './sections/BusinessModel';
import RoadmapSection from './sections/RoadmapSection';
import ComparisonSection from './sections/ComparisonSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';

const AgentPage = () => {
  return (
    <div className="app">
      {/* All sections converted to Tailwind CSS */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoSection />
      <StatsSection />
      <BusinessModel />
      <RoadmapSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default AgentPage; 