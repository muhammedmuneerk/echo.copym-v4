import React from "react";
import AiOverview from "./AiOverview";
import SecurityFeaturesSection from "./SecurityFeaturesSection";
import TechnologyStackSection from "./TechnologyStackSection";

const WhyCopymSection = () => {
  return (
    <section className="w-full px-6 py-12 ">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl brand-title text-[#255f99] relative inline-block">
          Why Copym?
          <span className="block w-24 h-1 bg-green-600 mt-4 mx-auto rounded-full"></span>
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        <AiOverview />
        <SecurityFeaturesSection />
        <TechnologyStackSection />
      </div>
    </section>
  );
};

export default WhyCopymSection;

