import React from 'react';
import { motion } from 'framer-motion';
import { MonetizationOn } from '@mui/icons-material';

const BusinessModel = () => {
  const revenueStreams = [
    {
      title: 'AI Tokenization Fee',
      percentage: '2.5%',
      description: 'Fee for AI-powered asset conversion to tokens'
    },
    {
      title: 'Transaction Fee',
      percentage: '1%',
      description: 'Marketplace trading fee with AI optimization'
    },
    {
      title: 'CopymAgent Premium',
      percentage: '$29–$299/month',
      description: 'Advanced AI insights and personalized recommendations'
    },
    {
      title: 'Asset Management',
      percentage: '0.75%',
      description: 'Annual AI-powered portfolio management fee'
    }
  ];

  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <MonetizationOn className="mr-4 text-green-400" />
            Business Model
          </h2>
          <p className="text-xl text-gray-300">
            Multiple AI-powered revenue streams with projected $18M/year by Year 3
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="text-4xl font-bold text-green-400 mb-4">
                {stream.percentage}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {stream.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {stream.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-green-400 text-black py-4 md:py-6 px-4 md:px-8 rounded-xl text-base md:text-lg font-semibold"
        >
          <p>
            <strong>Projected to be profitable by Q3 2025 with CopymAI's AI-driven efficiency</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel; 