import React from 'react';
import { motion } from 'framer-motion';
import {
  Token,
  Storefront,
  Psychology,
  AutoAwesome
} from '@mui/icons-material';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Token sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'AI Tokenization Engine',
      description: 'Converts real-world assets into secure, blockchain-based tokens using advanced AI'
    },
    {
      icon: <Storefront sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Integrated Marketplace',
      description: 'Trade tokens instantly with AI-powered liquidity and smart order matching'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'CopymAgent AI Advisor',
      description: 'Personal AI investment advisor that analyzes and recommends optimal portfolio strategies'
    }
  ];

  return (
    <section 
      id="solution" 
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="brand-section-title mb-4 sm:mb-6 text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <AutoAwesome className="text-green-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
            <span>Our Solution: CopymAI-Powered Tokenization + Marketplace</span>
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-300 px-4">
            We've built an AI-first platform that solves all this with three key components:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-105 group"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 flex items-center justify-center transition-all duration-400 ease-out group-hover:scale-110 group-hover:-rotate-6">
                {solution.icon}
              </div>
              
              <h3 className="brand-card-title mb-4 sm:mb-6 text-white leading-tight tracking-tight">
                {solution.title}
              </h3>
              
              <p className="brand-description text-gray-300 px-4">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 