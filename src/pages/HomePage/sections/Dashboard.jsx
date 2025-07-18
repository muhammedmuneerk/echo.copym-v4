import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  PiggyBank,
  Building2,
} from "lucide-react";

export default function MarketplacePreview() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full px-6 py-20 bg-green-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Container */}
        <div className="relative w-full rounded-3xl px-6 py-10 overflow-hidden shadow-xl border border-white/20 bg-gradient-to-br from-black/15 via-white/5 to-black/15 backdrop-blur-lg ring-1 ring-white/10 ring-inset">
          {/* Glow backdrop */}
          <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
            <div className="w-full h-full bg-white/10 blur-2xl opacity-30 rounded-3xl" />
          </div>

          {/* Title */}
          <div className="relative z-10 text-center mb-10">
            <h2 className="brand-section-title text-transparent bg-clip-text text-3xl sm:text-4xl font-bold">
              Preview Our Marketplace
            </h2>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Features */}
            <div className="flex flex-col gap-6 max-w-md -translate-x-4">
              <Feature
                icon={<BarChart3 className="w-6 h-6 text-[#15a36e]" />}
                title="Data-Rich Insights"
                description="Get real-time analytics and smart AI-driven market analysis to guide your investments."
              />
              <Feature
                icon={<PiggyBank className="w-6 h-6 text-[#255f99]" />}
                title="High-Yield Assets"
                description="Access tokenized opportunities with low entry barriers and competitive returns."
              />
              <Feature
                icon={<Building2 className="w-6 h-6 text-[#15a36e]" />}
                title="Diverse Opportunities"
                description="Invest across real estate, commodities, carbon credits, and more—all in one place."
              />
            </div>

            {/* Phone */}
            <div className="relative w-[200px] h-[390px] rounded-2xl overflow-hidden shrink-0 -translate-x-4">
              <div className="relative w-full h-full">
                <img
                  src="/assets/Images/MarketPreview.jpg"
                  alt="Marketplace Screenshot"
                  className="absolute top-[12%] left-[14%] w-[72%] h-[75%] object-cover rounded-xl z-0"
                />
                <div className="w-full h-full scale-[2.05]">
                  <img
                    src="/assets/Images/iphone-mockup-screen-removebg-preview.png"
                    alt="iPhone Mockup"
                    className="w-full h-full object-contain z-10 relative"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button Centered at Bottom */}
          <div className="relative z-10 flex justify-center mt-12">
            <button
              onClick={() => navigate("/marketplace")}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-white/30 rounded-xl shadow-md">{icon}</div>
    <div>
      <h4 className="brand-card-title text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
