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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl p-8 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 group"
            >
              <div className="text-6xl mb-6 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110">
                {problem.icon}
              </div>
              
              <h3 className="brand-card-title mb-4 text-white leading-tight tracking-tight">
                {problem.title}
              </h3>
              
              <p className="brand-description text-gray-300">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-12 px-8 rounded-2xl text-xl font-semibold max-w-4xl mx-auto shadow-2xl shadow-red-900/40 relative overflow-hidden border border-red-700"
        >
          <div 
            className="absolute inset-0 opacity-20"
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