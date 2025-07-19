import React from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, PiggyBank, Building2 } from "lucide-react";

export default function MarketplacePreview() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 bg-green-50 overflow-hidden">
  <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Clean Container */}
        <div className="relative w-full rounded-3xl px-6 py-12 bg-green-50 shadow-xl border border-gray-200">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="brand-section-title">
              <span className="text-[#255f99]">Preview Our </span>
              <span className="text-[#15a36e]">Marketplace</span>
            </h1>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
            {/* Features */}
            <div className="flex flex-col gap-8 max-w-md -translate-x-4">
              <Feature
                icon={<BarChart3 className="w-8 h-8 text-[#15a36e]" />}
                title="Data-Rich Insights"
                description="Get real-time analytics and smart AI-driven market analysis to guide your investments."
              />
              <Feature
                icon={<PiggyBank className="w-8 h-8 text-[#255f99]" />}
                title="High-Yield Assets"
                description="Access tokenized opportunities with low entry barriers and competitive returns."
              />
              <Feature
                icon={<Building2 className="w-8 h-8 text-[#15a36e]" />}
                title="Diverse Opportunities"
                description="Invest across real estate, commodities, carbon credits, and more—all in one place."
              />
            </div>

            {/* Phone Preview */}
            <div className="relative w-[200px] h-[390px] rounded-2xl overflow-hidden shrink-0 -translate-x-2">
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

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
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
  <div className="flex items-start gap-5">
    <div className="p-4 bg-green-100 rounded-xl shadow-md">{icon}</div>
    <div>
      <h4 className="brand-card-title text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);
