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
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-green-400/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white flex items-center justify-center">
            <Public className="mr-4 text-green-400 text-4xl md:text-5xl lg:text-6xl drop-shadow-lg animate-pulse" />
            Roadmap
          </h2>
          <p className="brand-description text-gray-300">
            Our strategic plan for CopymAI growth and AI advancement
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 transition-all duration-500 hover:transform hover:-translate-y-3 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/20 relative overflow-hidden group"
              style={{
                animationDelay: `${index * 1.5}s`,
                animation: 'roadmapFloat 6s ease-in-out infinite'
              }}
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="brand-card-title mb-8 text-green-400 text-center relative">
                {item.quarter}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </h3>
              
              <ul className="space-y-6">
                {item.items.map((task, taskIndex) => (
                  <motion.li
                    key={taskIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: taskIndex * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-green-400 hover:transform hover:translate-x-2 hover:shadow-lg hover:shadow-green-400/10 group/item"
                  >
                    <div className="flex-shrink-0 drop-shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      {task.icon}
                    </div>
                    <span className="brand-description text-white text-lg">
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
        @keyframes roadmapFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection; 