import React from 'react';
import { Wallet, LayoutGrid, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppPeekSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 text-transparent bg-clip-text">
            Peek Into Our Web3 Investment Hub
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-700">
            Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
          </p>
        </div>

        {/* Media Showcase Block */}
        <div className="relative py-16 px-6 bg-gradient-to-br from-purple-600 via-purple-800 to-purple-900 rounded-3xl overflow-hidden shadow-xl">

          {/* Logo on Top Center of Media Content */}
          <div className="flex justify-center mb-10">
            <img
              src="/assets/copym/png/Copym-02-1.png"
              alt="Copym Logo"
              className="w-auto h-24 sm:h-14 md:h-24 object-contain"
            />
          </div>



          {/* Media Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-end justify-center z-10 relative">

            {/* Wallet Preview */}
            <div className="flex flex-col items-center">
              <video
                src="/assets/videos/WalletPreview.mp4"
                className="w-[140px] sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              />

              {/* Tag */}
              <div className="mt-4 bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm px-3 py-1 rounded-full flex items-center gap-2 font-medium">
                <Wallet className="w-4 h-4" />
                Deposit-Withdraw
              </div>
            </div>

            {/* Marketplace Preview */}
            <div className="flex flex-col items-center">
              <video
                src="/assets/videos/MarketPlacePreview.mp4"
                className="w-[140px] sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              />
              <div className="mt-4 bg-blue-500/20 text-blue-300 text-xs sm:text-sm px-3 py-1 rounded-full flex items-center gap-2 font-medium">
                <LayoutGrid className="w-4 h-4" />
                Explore Assets
              </div>
            </div>

            {/* Portfolio Dashboard Image */}
            <div className="flex flex-col items-center">
              <img
                src="/assets/Images/MarketplaceDashboard.jpg"
                alt="Portfolio Preview"
                className="w-[140px] sm:w-[160px] md:w-[180px] rounded-xl shadow-xl"
              />
              <div className="mt-4 bg-yellow-400/20 text-yellow-200 text-xs sm:text-sm px-3 py-1 rounded-full flex items-center gap-2 font-medium">
                <LineChart className="w-4 h-4" />
                Track Portfolio
              </div>
            </div>
          </div>
           {/* Launch App Button */}
            <div className="flex justify-center mt-12">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold  text-white btn-gradient"
              >
                Get App Now
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
