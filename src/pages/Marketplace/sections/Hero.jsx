import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AssetCard from './AssetCard';

export default function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-16 overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          />
        </svg>
      </div>

      <div className="w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Market is open
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl  brand-section-title  leading-tight mb-6 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
              Explore Tokenized Real-World Assets
            </h1>

            <p className="text-lg brand-description text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Secure, AI-enhanced marketplace powered by Crossmint and Fireblocks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Button – Full gradient fill */}
              <button className="inline-flex items-center justify-center px-6 py-2.5 font-semibold rounded-full text-white bg-gradient-to-r from-[#15a36e] to-[#255f99] hover:opacity-90 transition-all duration-200">
                Enter Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              {/* Secondary Button – Muted gradient fill */}
              <button className="inline-flex items-center justify-center px-6 py-2.5 font-semibold rounded-full text-white bg-gradient-to-r from-[#b1d8c9] to-[#a3bfdc] hover:opacity-90 transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>



            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-10 text-sm text-gray-500">
              <div>
                <div className="font-semibold text-black text-lg">500K+</div>
                <div>Active Users</div>
              </div>
              <div>
                <div className="font-semibold text-black text-lg">$2.5B+</div>
                <div>Assets Managed</div>
              </div>
              <div>
                <div className="font-semibold text-black text-lg">15.2%</div>
                <div>Avg. Returns</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 transform hover:scale-[1.01] transition-transform duration-300 max-w-md mx-auto">
              <AssetCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
