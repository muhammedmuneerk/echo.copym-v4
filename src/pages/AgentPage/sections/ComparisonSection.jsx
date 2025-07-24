import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  WorkspacePremium, 
  TrendingUp, 
  Speed, 
  Shield, 
  Group, 
  PsychologyAlt, 
  Bolt, 
  MonetizationOn, 
  Assessment, 
  VerifiedUser, 
  Security 
} from '@mui/icons-material';

const ComparisonSection = () => {
  const [activeMatrixTab, setActiveMatrixTab] = useState('performance');

  const metricData = {
    performance: [
      {
        label: 'Return on Investment',
        icon: <TrendingUp sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '87%', value: '23% Better' },
        traditional: { width: '64%', value: 'Standard' }
      },
      {
        label: 'Transaction Speed',
        icon: <Speed sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '95%', value: 'Instant', instant: true },
        traditional: { width: '25%', value: 'Weeks' }
      },
      {
        label: 'AI Intelligence',
        icon: <PsychologyAlt sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '92%', value: 'Advanced AI' },
        traditional: { width: '15%', value: 'Basic' }
      }
    ],
    efficiency: [
      {
        label: 'Processing Speed',
        icon: <Bolt sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '98%', value: 'Real-time' },
        traditional: { width: '35%', value: 'Hours' }
      },
      {
        label: 'Cost Efficiency',
        icon: <MonetizationOn sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '85%', value: '90% Lower' },
        traditional: { width: '45%', value: 'High Fees' }
      },
      {
        label: 'Resource Utilization',
        icon: <Assessment sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '94%', value: 'Optimized' },
        traditional: { width: '28%', value: 'Wasteful' }
      }
    ],
    security: [
      {
        label: 'Fraud Detection',
        icon: <Shield sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '99%', value: 'AI-Powered' },
        traditional: { width: '52%', value: 'Manual' }
      },
      {
        label: 'Identity Verification',
        icon: <VerifiedUser sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '96%', value: 'Multi-Factor' },
        traditional: { width: '38%', value: 'Basic' }
      },
      {
        label: 'Data Protection',
        icon: <Security sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '97%', value: 'Enterprise' },
        traditional: { width: '42%', value: 'Standard' }
      }
    ],
    accessibility: [
      {
        label: 'Global Access',
        icon: <Group sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '95%', value: '24/7 Global' },
        traditional: { width: '30%', value: 'Limited Hours' }
      },
      {
        label: 'User Experience',
        icon: <TrendingUp sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '92%', value: 'Intuitive AI' },
        traditional: { width: '25%', value: 'Complex' }
      },
      {
        label: 'Mobile Support',
        icon: <Speed sx={{ fontSize: 20, color: '#4ade80' }} />,
        copymai: { width: '98%', value: 'Full Mobile' },
        traditional: { width: '20%', value: 'Desktop Only' }
      }
    ]
  };

  const handleTabClick = (tab) => {
    setActiveMatrixTab(tab);
  };

  return (
    <section id="comparison" className="bg-black py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(74,222,128,0.05), transparent 60%, rgba(248,113,113,0.05))"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white">
            Why CopymAI is Different
          </h2>
          <p className="brand-description text-gray-300">
            Advanced AI-Powered Platform vs Traditional Investment Systems
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Matrix Tabs */}
          <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 sm:gap-4 px-4">
                {[
                  { id: 'performance', icon: <TrendingUp />, label: 'Performance' },
                  { id: 'efficiency', icon: <Speed />, label: 'Efficiency' },
                  { id: 'security', icon: <Shield />, label: 'Security' },
                  { id: 'accessibility', icon: <Group />, label: 'Accessibility' }
            ].map((tab, index) => (
                  <button
                key={index}
                    onClick={() => handleTabClick(tab.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 mx-1 sm:mx-2 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
                      activeMatrixTab === tab.id
                    ? 'bg-green-400 text-black shadow-lg shadow-green-400/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline ml-1">{tab.label}</span>
                  </button>
                ))}
            </div>
            
          {/* Matrix Content */}
          <div className="space-y-6 sm:space-y-8 px-4">
            <h3 className="brand-card-title text-white mb-4 sm:mb-8 text-lg sm:text-xl md:text-2xl text-center">
              Performance Comparison Matrix
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {metricData[activeMatrixTab].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-3 sm:p-4 md:p-6 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-center">
                    {metric.icon}
                    <span className="brand-card-title text-white text-sm sm:text-base md:text-lg">{metric.label}</span>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {/* CopymAI Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      <div className="flex-1 w-full bg-gray-700 rounded-full h-4 sm:h-6 md:h-8 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out relative ${metric.copymai.instant ? 'animate-pulse' : ''}`}
                          style={{ width: metric.copymai.width }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          <span className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-white whitespace-nowrap">{metric.copymai.value}</span>
                        </div>
                      </div>
                      <span className="text-green-400 font-semibold text-xs sm:text-sm min-w-[50px] sm:min-w-[60px] md:min-w-[80px] text-center">CopymAI</span>
                    </div>
                    {/* Traditional Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      <div className="flex-1 w-full bg-gray-700 rounded-full h-4 sm:h-6 md:h-8 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ width: metric.traditional.width }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          <span className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-white whitespace-nowrap">{metric.traditional.value}</span>
                        </div>
                      </div>
                      <span className="text-blue-400 font-semibold text-xs sm:text-sm min-w-[50px] sm:min-w-[60px] md:min-w-[80px] text-center">Traditional</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection; 