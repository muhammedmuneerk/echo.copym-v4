import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
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
          <div className="text-center lg:text-left  lg:-mt-24">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
             Institutional-Grade Asset Tokenization Platform
            </div>
            
            <h1 className="brand-title text-black mb-6">
               Tokenize Real-World Assets{' '}
              <span className="relative">
                with Institutional-Grade Security
              </span>
            </h1>
            
            <p className="brand-description mb-8 max-w-lg mx-auto lg:mx-0">
           Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => setVideoOpen(true)} className="border border-gray-300 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
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

          {/* Right Content - Lottie Animation */}
          <div className="flex items-center justify-center">
            <Player
              autoplay
              loop
              src="/assets/lottie/hero-rightgrid-tokenization/hero-rightgrid-tokenization.json"
              style={{ height: '400px', width: '400px' }}
            />
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <video
              src="/assets/videos/how-it-works.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="mt-4 px-6 py-2 bg-white text-black font-medium rounded shadow hover:bg-gray-100 focus:outline-none absolute left-1/2 transform -translate-x-1/2 bottom- -12"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}