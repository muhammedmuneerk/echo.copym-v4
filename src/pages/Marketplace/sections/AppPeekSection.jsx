import React from 'react';
import { Link } from 'react-router-dom';

export default function AppPeekSection() {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Peek Into Our Web3 Investment Hub
          </h2>

          <p className="brand-description max-w-3xl mx-auto">
            Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
          </p>
        </div>

        {/* Mockup Image */}
        <div className="flex justify-center mb-12">
          <video
            src="/assets/videos/MarketplacePreview.mp4" // update this path to your actual video
            className="w-full max-w-5xl rounded-2xl shadow-lg "
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
}
