import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';

const portfolioItems = [
  { symbol: 'AAPL', name: 'Apple Inc.', value: '$28,534', change: '+2.4%', positive: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', value: '$15,220', change: '+5.8%', positive: true },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', value: '$22,110', change: '-1.2%', positive: false },
  { symbol: 'MSFT', name: 'Microsoft Corp.', value: '$18,890', change: '+1.8%', positive: true },
];

export default function Dashboard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Powerful Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your investments, track performance, and make informed decisions with our comprehensive dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Portfolio Performance</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 font-semibold">+12.5%</span>
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
                    Portfolio
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    S&P 500
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8 text-black" />
                <span className="text-green-500 text-sm font-medium">+8.2%</span>
              </div>
              <div className="text-2xl font-bold text-black mb-1">$124,536</div>
              <div className="text-gray-600 text-sm">Total Portfolio Value</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <PieChart className="h-8 w-8 text-black" />
                <span className="text-orange-500 text-sm font-medium">Diversified</span>
              </div>
              <div className="text-2xl font-bold text-black mb-1">15</div>
              <div className="text-gray-600 text-sm">Active Positions</div>
            </div>
          </div>
        </div>

        {/* Portfolio Holdings */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-black">Top Holdings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {portfolioItems.map((item, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{item.symbol.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-black">{item.symbol}</div>
                      <div className="text-gray-600 text-sm">{item.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-black">{item.value}</div>
                    <div className={`text-sm flex items-center ${
                      item.positive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {item.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}