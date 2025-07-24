import React from 'react';
import { motion } from 'framer-motion';
import { 
  Public, 
  CheckCircle, 
  Launch, 
  Diamond, 
  SmartToy, 
  MyLocation, 
  Group, 
  AccountBalance, 
  PhoneAndroid, 
  Language, 
  Handshake, 
  BarChart 
} from '@mui/icons-material';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      items: [
        { icon: <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Raise $3.5M Seed' },
        { icon: <Launch sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAI MVP launch' },
        { icon: <Diamond sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'First 10 assets onboarded' }
      ]
    },
    {
      quarter: 'Q3 2024',
      items: [
        { icon: <SmartToy sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAgent Beta Release' },
        { icon: <MyLocation sx={{ fontSize: 20, color: '#4ade80' }} />, text: '100+ tokenized assets' },
        { icon: <Group sx={{ fontSize: 20, color: '#3b82f6' }} />, text: '5,000 active users' }
      ]
    },
    {
      quarter: 'Q1 2025',
      items: [
        { icon: <AccountBalance sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Raise $12M Series A' },
        { icon: <PhoneAndroid sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAI mobile app launch' },
        { icon: <Language sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Add more asset classes' }
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        { icon: <Public sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'Global expansion' },
        { icon: <Handshake sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Enterprise partnerships' },
        { icon: <BarChart sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'Advanced AI portfolio tools' }
      ]
    }
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-green-400/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Public className="text-green-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg" />
            <span>Roadmap</span>
          </h2>
          <p className="brand-description text-gray-300 max-w-2xl mx-auto px-4">
            Our strategic plan for CopymAI growth and AI advancement
          </p>
        </motion.div>
        
        {/* Mobile: Horizontal scrollable container */}
        <div className="block lg:hidden">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 pb-4 -mx-4 px-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group flex-shrink-0 w-72 sm:w-80"
              >
                <h3 className="brand-card-title mb-4 sm:mb-6 md:mb-8 text-green-400 text-center relative text-sm sm:text-base md:text-lg">
                  {item.quarter}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </h3>
                
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  {item.items.map((task, taskIndex) => (
                    <motion.li
                      key={taskIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: taskIndex * 0.1 }}
                      className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-green-400 hover:transform hover:translate-x-2 hover:shadow-lg hover:shadow-green-400/20 group/item text-center"
                    >
                      <div className="flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                        {task.icon}
                      </div>
                      <span className="brand-description text-white text-sm sm:text-base md:text-lg">
                        {task.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group"
            >
              <h3 className="brand-card-title mb-6 sm:mb-8 text-green-400 text-center relative">
                {item.quarter}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </h3>
              
              <ul className="space-y-4 sm:space-y-6">
                {item.items.map((task, taskIndex) => (
                  <motion.li
                    key={taskIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: taskIndex * 0.1 }}
                    className="flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-green-400 hover:transform hover:translate-x-2 hover:shadow-lg hover:shadow-green-400/20 group/item text-center"
                  >
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                      {task.icon}
                    </div>
                    <span className="brand-description text-white text-base sm:text-lg">
                      {task.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection; 