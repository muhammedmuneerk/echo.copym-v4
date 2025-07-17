import React from 'react';
import { motion } from 'framer-motion';
import {
  AttachMoney,
  AcUnit,
  Psychology,
  Extension
} from '@mui/icons-material';

const ProblemSection = () => {
  const problems = [
    {
      icon: <AttachMoney sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Too Expensive',
      description: 'Most people can\'t afford the high minimum investment (e.g., $10,000+)'
    },
    {
      icon: <AcUnit sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Illiquid',
      description: 'You can\'t buy or sell easily; it takes weeks/months'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      title: 'Complex',
      description: 'Requires deep knowledge and manual analysis'
    }
  ];

  return (
    <section 
      id="problem" 
      className="relative overflow-hidden py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white">
            <Extension sx={{ mr: 1, verticalAlign: 'middle' }} /> 
            The Problem We Solve
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-300">
            Traditional RWA (Real-World Asset) investment is broken:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-3xl p-12 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:border-red-400/30 hover:shadow-2xl hover:shadow-red-400/15 hover:from-gray-700 hover:to-gray-800 flex flex-col items-center justify-center min-h-80 relative overflow-hidden backdrop-blur-md group"
            >
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              
              <div className="text-6xl mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-white/5 transition-all duration-400 ease-out group-hover:bg-red-400/10 group-hover:scale-110 group-hover:rotate-6 relative">
                {problem.icon}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              </div>
              
              <h3 className="brand-card-title mb-6 text-white leading-tight tracking-tight">
                {problem.title}
              </h3>
              
              <p className="brand-description max-w-xs mx-auto text-gray-300">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-8 rounded-3xl text-xl font-semibold max-w-4xl mx-auto shadow-2xl shadow-red-500/30 relative overflow-hidden"
        >
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`
            }}
          />
          <p className="relative z-10">
            <strong>Result?</strong> Great opportunities are missed by everyday investors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 