import React from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  ShoppingCart,
  SmartToy,
  AutoAwesome
} from '@mui/icons-material';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Link sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'AI Tokenization Engine',
      description: 'Converts real-world assets into secure, blockchain-based tokens using advanced AI'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Integrated Marketplace',
      description: 'Trade tokens instantly with AI-powered liquidity and smart order matching'
    },
    {
      icon: <SmartToy sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'CopymAgent AI Advisor',
      description: 'Personal AI investment advisor that analyzes and recommends optimal portfolio strategies'
    }
  ];

  return (
    <section 
      id="solution" 
      className="relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <AutoAwesome sx={{ mr: 1, verticalAlign: 'middle' }} /> 
            Our Solution: CopymAI-Powered Tokenization + Marketplace
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've built an AI-first platform that solves all this with three key components:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-12 text-center transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-105 hover:border-green-400/30 hover:shadow-2xl hover:shadow-green-400/15 hover:from-gray-700 hover:to-gray-800 relative overflow-hidden backdrop-blur-md group"
            >
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              
              <div className="text-6xl mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-green-400/10 mx-auto transition-all duration-400 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-green-400/20">
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white leading-tight tracking-tight">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg font-normal">
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