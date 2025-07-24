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
      icon: <AttachMoney sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Too Expensive',
      description: 'Most people can\'t afford the high minimum investment (e.g., $10,000+)'
    },
    {
      icon: <AcUnit sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Illiquid',
      description: 'You can\'t buy or sell easily; it takes weeks/months'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Complex',
      description: 'Requires deep knowledge and manual analysis'
    }
  ];

  return (
    <section 
      id="problem" 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
                {problem.icon}
              </div>
              
              <h3 className="brand-card-title mb-3 sm:mb-4 text-white leading-tight tracking-tight">
                {problem.title}
              </h3>
              
              <p className="brand-description text-gray-300 text-sm sm:text-base">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center px-4"
        >
          <button className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white py-3 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-16 rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out border-0 cursor-pointer max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto w-full text-center leading-tight">
            <span className="whitespace-normal sm:whitespace-nowrap">
            <strong>Result?</strong> Great opportunities are missed by everyday investors.
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 