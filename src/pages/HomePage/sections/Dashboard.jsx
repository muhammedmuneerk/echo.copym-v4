import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function MarketplacePreview() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-clip-text">
            Preview Our Marketplace
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Explore how investors can browse, analyze, and purchase tokenized real-world assets with ease.
          </p>
        </div>

        {/* Device mockup image */}
        <div className="flex justify-center">
          <img
            src="/assets/Images/mobile-preview-1.png"
            alt="Marketplace dashboard displayed on multiple devices"
            className="w-full max-w-4xl rounded-2xl shadow-lg border border-gray-200 bg-green-50"
          />
        </div>

        {/* Learn More Button */}
        <div className="flex flex-col sm:flex-row gap-4 py-8 justify-center">
          <button
            onClick={() => navigate("/marketplace")}
            className="px-8 py-4 font-semibold  text-white flex items-center justify-center btn-gradient"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
