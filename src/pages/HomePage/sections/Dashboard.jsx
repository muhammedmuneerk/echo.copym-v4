import React from "react";
import { useNavigate } from "react-router-dom";

export default function MarketplacePreview() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full px-6 py-24 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 text-transparent bg-clip-text">
            Preview Our Marketplace
          </h2>
          <p className="text-gray-600 mb-10">
            Browse,analyze and purchase tokenized real-world assets with ease.
          </p>
        </div>

        {/* Compact Glass Container */}
        <div className="relative max-w-md mx-auto rounded-3xl px-4 py-10 overflow-hidden shadow-2xl flex flex-col items-center border border-white/20 bg-gradient-to-br from-black/15 via-white/5 to-black/15 backdrop-blur-lg ring-1 ring-white/10 ring-inset">

          {/* Glow backdrop */}
          <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
            <div className="w-full h-full bg-white/10 blur-2xl opacity-30 rounded-3xl" />
          </div>

          {/* Phone Preview */}
          <div className="relative w-[230px] h-[450px] rounded-2xl overflow-hidden z-10">
            <div className="relative w-full h-full">
              {/* Screenshot inside screen */}
              <img
                src="/assets/Images/MarketPreview.jpg"
                alt="Marketplace Screenshot"
                className="absolute top-[12%] left-[14%] w-[72%] h-[75%] object-cover rounded-xl z-0"
              />
              {/* Frame */}
              <div className="w-full h-full scale-[2.05]">
                <img
                  src="/assets/Images/iphone-mockup-screen-removebg-preview.png"
                  alt="iPhone Mockup"
                  className="w-full h-full object-contain z-10 relative"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 z-10">
            <button
              onClick={() => navigate("/marketplace")}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
