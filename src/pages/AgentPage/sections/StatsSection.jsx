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
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <TrendingUp className="mr-4 text-green-400" />
            Massive Market Potential
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-white hover:shadow-lg hover:shadow-white/10"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-base text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 