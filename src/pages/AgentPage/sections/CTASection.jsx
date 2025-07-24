import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  RocketLaunch, 
  Group, 
  AccountBalance, 
  CheckCircle, 
  Help, 
  Handshake, 
  Verified, 
  MonetizationOn, 
  Security, 
  Timer, 
  Warning 
} from '@mui/icons-material';

const CTASection = () => {
  const handleInvestRedirect = () => {
    window.open('https://copymai.ai/invest', '_blank');
  };

  const handleContactRedirect = () => {
    window.open('https://copymai.ai/contact', '_blank');
  };

  return (
    <section 
      id="cta" 
      className="relative overflow-hidden py-12 md:py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="space-y-10 md:space-y-16">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8 md:mb-12">
              <div className="mb-6 md:mb-8">
                <TrendingUp className="text-green-400 text-5xl md:text-6xl mx-auto mb-4 md:mb-6 animate-pulse" />
              </div>
              <h2 className="brand-section-title mb-4 md:mb-6 text-white flex items-center justify-center gap-2 md:gap-4">
                <RocketLaunch className="text-green-400" />
                Investment Opportunity
              </h2>
              <p className="brand-description text-gray-300">
                Join the Future of AI-Powered Asset Investment
              </p>
            </div>
            
            <div className="max-w-2xl md:max-w-4xl mx-auto mb-8 md:mb-16 px-4">
              <p className="brand-description text-gray-300 leading-relaxed text-sm sm:text-base">
                We're raising <strong className="text-white">$30.5M seed funding</strong> to accelerate CopymAI development, ensure full regulatory compliance, and acquire premium assets for our growing platform.
              </p>
            </div>

            {/* Funding Goals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-16 px-4">
              {[
                { icon: <Group sx={{ fontSize: 32, color: '#4ade80' }} />, number: '50,000', label: 'Target Users', type: 'primary' },
                { icon: <AccountBalance sx={{ fontSize: 32, color: '#4ade80' }} />, number: '$50M', label: 'Tokenized Assets', type: 'secondary' },
                { icon: <TrendingUp sx={{ fontSize: 32, color: '#4ade80' }} />, number: '23%', label: 'Better Returns', type: 'tertiary' }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-10 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 hover:from-gray-700 hover:to-gray-800 relative overflow-hidden backdrop-blur-md group"
                >
                  {/* Top border gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 ease-out group-hover:opacity-100 bg-gradient-to-r from-white/20 to-white/10" />
                  
                  <div className="mb-3 sm:mb-4 md:mb-6 transition-all duration-300 ease-out group-hover:scale-110">
                    {goal.icon}
                  </div>
                  
                  <div className="brand-card-title text-white mb-2 text-lg sm:text-xl md:text-2xl">
                      {goal.number}
                  </div>
                  <h3 className="brand-card-title text-white mb-2 text-sm sm:text-base md:text-lg">
                    {goal.label}
                  </h3>
                </motion.div>
              ))}
            </div>


          </motion.div>




        </div>
      </div>


    </section>
  );
};

export default CTASection; 