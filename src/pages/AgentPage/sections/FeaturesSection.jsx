import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Verified,
  Percent,
  Security,
  Assessment,
  Launch
} from '@mui/icons-material';

const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const features = [
    {
      id: 1,
      icon: <Verified sx={{ fontSize: 32, color: '#4ade80' }} />,
      title: 'Smart Asset Verification',
      description: 'CopymAI + human experts verify every asset\'s value and authenticity',
      color: '#4ade80'
    },
    {
      id: 2,
      icon: <Percent sx={{ fontSize: 32, color: '#f59e0b' }} />,
      title: 'Fractional Ownership',
      description: 'Start investing with as little as $100 through AI-powered tokenization',
      color: '#f59e0b'
    },
    {
      id: 3,
      icon: <Security sx={{ fontSize: 32, color: '#ef4444' }} />,
      title: 'Secure AI Wallet',
      description: 'Bank-level security for storing your tokens with AI-powered fraud detection',
      color: '#ef4444'
    },
    {
      id: 4,
      icon: <Assessment sx={{ fontSize: 32, color: '#3b82f6' }} />,
      title: 'Predictive AI Analytics',
      description: 'Our AI predicts which assets will grow in value with 23% better accuracy',
      color: '#3b82f6'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="features" 
      className="relative overflow-hidden py-12 md:py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="brand-section-title mb-6 text-white">
            <Launch sx={{ mr: 1, verticalAlign: 'middle' }} />
            Key Features
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-300">
            Advanced AI and blockchain technology powering your investment journey
          </p>
        </motion.div>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto py-8 md:py-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded transform -translate-y-1/2 z-10" />
          
          {/* Timeline Progress */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded transform -translate-y-1/2 z-20 transition-all duration-2000 ease-in-out shadow-lg shadow-green-400/30"
            style={{ width: `${(activeStep / 4) * 100}%` }}
          />
          
          {/* Timeline Features */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-center z-30 mx-2 md:mx-8 gap-8 md:gap-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-full md:max-w-64 relative transition-all duration-300 ease-out hover:-translate-y-2.5 group"
              >
                {/* Feature Icon */}
                <div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-3 border-gray-600 flex items-center justify-center mb-6 relative z-30 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-current shadow-lg shadow-black/30"
                  style={{ '--tw-border-opacity': 0.6 }}
                >
                  <div className="filter drop-shadow-md transition-all duration-300 ease-out group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Feature Content */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl p-6 relative transition-all duration-300 ease-out group-hover:border-current group-hover:shadow-xl group-hover:shadow-black/30 group-hover:-translate-y-1.5">
                  <h3 className="brand-card-title mb-3 leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="brand-description text-gray-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Feature Connector */}
                <div 
                  className="absolute top-10 left-1/2 w-0.5 h-10 bg-gradient-to-b from-current to-transparent transform -translate-x-1/2 opacity-60 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:h-12"
                  style={{ color: feature.color }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Timeline Progress Indicators */}
          <div className="flex justify-center gap-4 mt-8 md:mt-12">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-3 h-3 rounded-full border-2 border-gray-500 cursor-pointer transition-all duration-300 ease-out hover:scale-110 ${
                  step === activeStep 
                    ? 'bg-green-400 border-green-400 shadow-lg shadow-green-400/50 scale-125' 
                    : 'hover:bg-green-400 hover:border-green-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* AI Accuracy Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 md:mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 md:py-8 px-4 md:px-8 rounded-2xl text-lg md:text-xl font-semibold max-w-xl md:max-w-4xl mx-auto shadow-2xl shadow-green-500/30 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`
              }}
            />
            <h3 className="relative z-10">
              CopymAI has shown 23% better accuracy in predicting asset appreciation vs top market tools.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 