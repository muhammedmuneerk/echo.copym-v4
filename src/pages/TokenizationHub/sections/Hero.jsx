import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Tokenization portel is open
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Investing For{' '}
              <span className="relative">
                Outliers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-400"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              It's easy, it's fun, and it's got charm to burn. Start investing in your future with our modern platform designed for the next generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-gray-500">
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

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-black">Portfolio Overview</h3>
                <span className="text-green-500 text-sm font-medium">+12.5%</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Value</span>
                  <span className="font-semibold text-black">$124,536.72</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Today's Change</span>
                  <span className="font-semibold text-green-500">+$2,421.33</span>
                </div>
              </div>

              <div className="mt-6 h-32 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                {[40, 65, 45, 70, 55, 80, 60].map((height, index) => (
                  <div
                    key={index}
                    className="bg-black rounded-sm opacity-80"
                    style={{ height: `${height}%`, width: '12px' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}