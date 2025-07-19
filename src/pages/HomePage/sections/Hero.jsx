import React, { useState } from 'react';
import { ArrowRight, Play, X, Users, Vault, Zap, Clock } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:-mt-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Institutional-Grade Asset Tokenization Platform
            </div>

            <h1 className="brand-title">
              <span className="text-[#255f99]">Access Passive Income Through Tokenized</span>
              <span className="text-[#15a36e]"> Real-World Assets</span>
            </h1>

            <p className="brand-description mb-8 max-w-lg mx-auto lg:mx-0 text-gray-700">
              Access tokenized real estate, commodities, carbon credits, and luxury assets — gas-free and frictionless. Secure. Instant. Smart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white btn-gradient"
              >
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-[#255f99] border border-[#255f99] bg-white hover:bg-gray-50 transition rounded-md"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Lottie */}
          <div className="flex items-center justify-center overflow-hidden">
            <Player
              autoplay
              loop
              src="/assets/lottie/hero-rightgrid-tokenization/hero-rightgrid-tokenization.json"
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <motion.div
        className="mt-24 lg:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-3 h-3 mb-1 text-[#15a36e]" />
            <p className="text-l font-semibold text-[#15a36e]">
              <CountUp end={10000} duration={2} separator="," />+
            </p>
            <p className="text-gray-700 text-sm">Verified Investors</p>
          </div>

          <div className="flex flex-col items-center">
            <Vault className="w-3 h-3 mb-1 text-[#255f99]" />
            <p className="text-l font-semibold text-[#255f99]">
              $<CountUp end={500000} duration={2} separator="," />
            </p>
            <p className="text-gray-700 text-sm">Assets Tokenized</p>
          </div>

          <div className="flex flex-col items-center">
            <Zap className="w-3 h-3 mb-1 text-[#15a36e]" />
            <p className="text-l font-semibold text-[#15a36e]">0 Gas</p>
            <p className="text-gray-700 text-sm">Fees for Users</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-3 h-3 mb-1 text-[#255f99]" />
            <p className="text-l font-semibold text-[#255f99]">24/7</p>
            <p className="text-gray-700 text-sm">On-Chain Access</p>
          </div>
        </div>
      </motion.div>

      {/* Modal Video */}
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
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
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
          </div>
        </div>
      )}
    </section>
  );
}
