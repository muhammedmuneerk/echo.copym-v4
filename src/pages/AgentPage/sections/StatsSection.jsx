import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from '@mui/icons-material';

const StatsSection = () => {
  const marketStats = [
    { number: '$16T', label: 'Total RWA Value by 2025' },
    { number: '43%', label: 'CAGR Growth Rate' },
    { number: '$1.5B', label: 'Year 1 Target Market' },
    { number: '23%', label: 'Better AI Accuracy' }
  ];

  return (
    <section className="bg-black py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white flex items-center justify-center">
            <TrendingUp className="mr-4 text-green-400" />
            Massive Market Potential
          </h2>
        </motion.div>
        
        {/* Mobile: Horizontal scrollable container */}
        <div className="block lg:hidden">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/10 flex-shrink-0 w-64"
              >
                <div className="brand-card-title text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="brand-description text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 md:gap-8">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="brand-card-title text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="brand-description text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default StatsSection; 