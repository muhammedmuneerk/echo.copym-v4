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
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)'
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white flex items-center justify-center gap-2 md:gap-4">
                <RocketLaunch className="text-green-400" />
                Investment Opportunity
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                Join the Future of AI-Powered Asset Investment
              </p>
            </div>
            
            <div className="max-w-2xl md:max-w-4xl mx-auto mb-8 md:mb-16">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We're raising <strong className="text-green-400">$3.5M seed funding</strong> to accelerate CopymAI development, ensure full regulatory compliance, and acquire premium assets for our growing platform.
              </p>
            </div>

            {/* Funding Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
              {[
                { icon: <Group sx={{ fontSize: 32, color: '#4ade80' }} />, number: '50,000', label: 'Target Users', timeline: 'by End 2024', type: 'primary' },
                { icon: <AccountBalance sx={{ fontSize: 32, color: '#3b82f6' }} />, number: '$50M', label: 'Tokenized Assets', timeline: 'Portfolio Value', type: 'secondary' },
                { icon: <TrendingUp sx={{ fontSize: 32, color: '#f59e0b' }} />, number: '23%', label: 'Better Returns', timeline: 'vs Traditional', type: 'tertiary' }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 md:p-10 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 hover:from-gray-700 hover:to-gray-800 relative overflow-hidden backdrop-blur-md group"
                >
                  {/* Top border gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ease-out group-hover:opacity-100 ${
                    goal.type === 'primary' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    goal.type === 'secondary' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                    'bg-gradient-to-r from-yellow-400 to-yellow-600'
                  }`} />
                  
                  <div className="mb-6 transition-all duration-300 ease-out group-hover:scale-110">
                    {goal.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-extrabold text-green-400 leading-none drop-shadow-lg">
                      {goal.number}
                    </div>
                    <div className="text-lg font-semibold text-white uppercase tracking-wider">
                      {goal.label}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {goal.timeline}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Investment Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-green-400/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-12 mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8 flex items-center justify-center gap-2 md:gap-3">
                <Help className="text-green-400" />
                Why Invest in CopymAI?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  'First-mover advantage in AI-powered RWA investment',
                  'Proven AI technology with 23% better accuracy',
                  'Massive $16T market opportunity by 2025',
                  'Experienced team with deep fintech expertise'
                ].map((benefit, index) => (
                  <div
                    key={index}
                  className="flex items-center gap-2 md:gap-4 p-3 md:p-4 bg-black/30 border border-white/10 rounded-xl transition-all duration-300 ease-out hover:bg-black/40 hover:border-green-400/30 hover:translate-x-2"
                  >
                    <CheckCircle className="text-green-400 text-xl flex-shrink-0" />
                    <span className="text-gray-300 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="flex gap-4 md:gap-6 justify-center mb-6 md:mb-8 flex-wrap">
              <button 
                onClick={handleInvestRedirect} 
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 md:py-5 text-lg md:text-xl font-bold border-2 border-transparent rounded-2xl text-black bg-gradient-to-br from-green-400 to-green-500 shadow-xl shadow-green-400/30 min-w-[220px] md:min-w-[320px] relative overflow-hidden transition-all duration-400 ease-out hover:from-green-500 hover:to-green-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/40 active:scale-95 uppercase tracking-wider"
              >
                <TrendingUp className="mr-3 text-xl" />
                <span className="relative z-10">Join CopymAI Investment Round</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-600 ease-out group-hover:translate-x-full" />
              </button>
              
              <button 
                onClick={handleContactRedirect}
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 md:py-5 text-lg md:text-xl font-bold border-2 border-white/20 rounded-2xl text-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md min-w-[220px] md:min-w-[320px] relative overflow-hidden transition-all duration-400 ease-out hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 active:scale-95 uppercase tracking-wider"
              >
                <Handshake className="mr-3 text-xl" />
                <span className="relative z-10">Schedule Partnership Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-600 ease-out group-hover:translate-x-full" />
              </button>
            </div>
            
            <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
              {[
                { icon: <Verified />, text: 'Accredited Investors Only' },
                { icon: <MonetizationOn />, text: 'Minimum $25,000 Investment' },
                { icon: <Security />, text: 'SEC Compliant' }
              ].map((requirement, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 md:gap-2 bg-black/50 text-gray-400 px-3 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium border border-white/10 transition-all duration-300 ease-out hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30 hover:-translate-y-1"
                >
                  {requirement.icon}
                  {requirement.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Urgency Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-br from-red-400/10 to-red-500/10 border border-red-400/20 rounded-2xl p-4 md:p-8 animate-pulse flex flex-col items-center justify-center text-center"
            style={{
              animation: 'urgencyPulse 2s ease-in-out infinite'
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full">
              <div className="flex-shrink-0 animate-pulse mb-2 md:mb-0">
                <Timer className="text-red-400 text-3xl md:text-4xl" />
              </div>
              <div className="w-full">
                <h4 className="text-xl md:text-2xl font-bold text-red-400 mb-2 flex items-center justify-center gap-2">
                  <Warning className="text-red-400" />
                  Limited Time Opportunity
                </h4>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Only 15 spots remaining in this funding round. Join the elite group of investors shaping the future of asset investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes urgencyPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection; 