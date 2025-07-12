import React from 'react';
import { TrendingUp, DollarSign, PieChart } from 'lucide-react';

export default function MarketplacePreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Preview Our Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how investors can browse, analyze, and purchase tokenized real-world assets with ease.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart or Preview Panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Token Investment Overview</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 font-semibold">+12.5% ROI</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </div>

            <div className="h-64 bg-gray-50 rounded-lg relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <polyline
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  points="0,150 50,120 100,140 150,100 200,110 250,80 300,90 350,60 400,70"
                />
                <polyline
                  fill="none"
                  stroke="#f7931a"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  points="0,160 50,140 100,150 150,120 200,130 250,100 300,110 350,80 400,90"
                />
              </svg>
              <div className="absolute bottom-4 left-4 text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                    My Investments
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    Market Index
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panels */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8 text-black" />
                <span className="text-green-500 text-sm font-medium">+8.2%</span>
              </div>
              <div className="text-2xl font-bold text-black mb-1">$124,536</div>
              <div className="text-gray-600 text-sm">Invested Value</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <PieChart className="h-8 w-8 text-black" />
                <span className="text-orange-500 text-sm font-medium">Diversified</span>
              </div>
              <div className="text-2xl font-bold text-black mb-1">18 Tokens</div>
              <div className="text-gray-600 text-sm">Across 4 Asset Classes</div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-12 text-center">
          <a
            href="/marketplace"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
