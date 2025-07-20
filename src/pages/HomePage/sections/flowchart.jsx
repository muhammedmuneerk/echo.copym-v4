import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
  {
    id: 1,
      title: "Connect Your Wallet",
      description: "Start by connecting your crypto wallet—MetaMask, WalletConnect, or Coinbase. RWA securely links your wallet for seamless transactions."
  },
  {
    id: 2,
      title: "Explore, Research, and Invest", 
      description: "Whether it's real estate tokens, commodity pools, or infrastructure projects. RWA curates vetted opportunities to help you diversify smartly."
  },
  {
    id: 3,
      title: "Track Your Growth",
      description: "Build a diversified portfolio with real-time tracking, yield analytics, and insights to help you monitor performance across all assets."
    }
  ];

  return (
    <section className="min-h-screen bg-green-50 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                How it works
              </h1>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                A few simple steps can transform your portfolio.
                <br />
                RWA helps you invest, track, and grow with confidence.
              </p>
            </div>

            {/* Interactive Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className={`cursor-pointer transition-all duration-500 ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'bg-black text-white' 
                          : 'bg-white text-gray-600 border-2 border-gray-300'
                      }`}
                      animate={{ 
                        scale: activeStep === step.id ? 1.1 : 1,
                        rotate: activeStep === step.id ? 360 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {step.id}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <motion.p 
                        className="text-gray-600 max-w-md leading-relaxed overflow-hidden"
                        animate={{ 
                          height: activeStep === step.id ? 'auto' : 0,
                          opacity: activeStep === step.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side - BIGGER CONTAINER FOR PHONES */}
          <div className="relative h-[700px] w-full lg:w-[120%] lg:-mr-[10%]">
            
            {/* Right Phone - Analytics (DYNAMIC Z-INDEX) */}
            <motion.div 
              className="absolute"
              style={{ 
                zIndex: activeStep === 3 ? 30 : 10
              }}
              initial={{ 
                x: 280, 
                y: 50, 
                rotate: 15, 
                scale: 0.75 
              }}
              animate={{
                x: activeStep === 1 ? 280 : activeStep === 2 ? 320 : 120,
                y: activeStep === 1 ? 50 : activeStep === 2 ? 80 : 0,
                rotate: activeStep === 1 ? 15 : activeStep === 2 ? 18 : 0,
                scale: activeStep === 1 ? 0.75 : activeStep === 2 ? 0.8 : 1.05,
                opacity: activeStep === 1 ? 0.6 : activeStep === 2 ? 0.8 : 1
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 pt-3 pb-2">
                    <span className="text-xs font-medium text-white">21:41</span>
                    <div className="w-12 h-4 bg-white rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-2 border border-white rounded-sm"></div>
                      <span className="text-xs text-white">100%</span>
          </div>
        </div>
                  
                  {/* Content */}
                  <div className="px-4 py-3">
                    <div className="text-center mb-4">
                      <h2 className="text-sm font-semibold text-white mb-1">Meditations</h2>
                      <div className="text-lg font-bold text-green-400">24</div>
                      <div className="text-xs text-green-400">completed</div>
        </div>
                    
                    {/* Calendar Grid */}
                    <div className="mb-3">
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'].map(day => (
                          <div key={day} className="text-xs text-gray-400 text-center py-1">{day}</div>
                        ))}
    </div>
                      
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({length: 35}, (_, i) => {
                          const dayNum = i - 2;
                          const isActive = [3, 8, 15, 22, 29].includes(dayNum);
                          const isToday = dayNum === 24;
                          return (
                            <motion.div 
                              key={i} 
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                                isToday 
                                  ? 'bg-white text-black font-bold' 
                                  : isActive 
                                  ? 'bg-blue-600 text-white' 
                                  : dayNum > 0 && dayNum < 32
                                  ? 'text-gray-400'
                                  : 'text-transparent'
                              }`}
                              whileHover={{ scale: 1.1 }}
                              animate={{ 
                                scale: isActive ? [1, 1.1, 1] : 1 
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: i * 0.05 
                              }}
                            >
                              {dayNum > 0 && dayNum < 32 ? dayNum : ''}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Sessions */}
                    <div className="space-y-1 text-white text-xs">
                      <div className="bg-gray-800 p-2 rounded">
                        <div className="font-medium">Morning breathwork</div>
                      </div>
                      <div className="bg-gray-800 p-2 rounded">
                        <div className="font-medium">Sleep meditation</div>
                      </div>
                      <div className="bg-gray-800 p-2 rounded">
                        <div className="font-medium">Easy breathing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Phone - Main Session (DYNAMIC Z-INDEX) */}
            <motion.div 
              className="absolute"
              style={{ 
                zIndex: activeStep === 2 ? 30 : 20
              }}
              initial={{ 
                x: 120, 
                y: 0, 
                rotate: 3, 
                scale: 0.95 
              }}
              animate={{
                x: activeStep === 1 ? 120 : activeStep === 2 ? 80 : -120,
                y: activeStep === 1 ? 0 : activeStep === 2 ? -20 : 10,
                rotate: activeStep === 1 ? 3 : activeStep === 2 ? 0 : -25,
                scale: activeStep === 1 ? 0.95 : activeStep === 2 ? 1.05 : 0.7,
                opacity: activeStep === 1 ? 0.85 : activeStep === 2 ? 1 : 0.3
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 120,
                damping: 25
              }}
            >
              <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-pink-50 to-pink-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-sm font-medium">21:41</span>
                    <div className="w-16 h-6 bg-black rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-3 border border-black rounded-sm"></div>
                      <span className="text-xs">100%</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-6 py-6 text-center">
                    <div className="text-sm text-gray-500 mb-4">Daily session</div>
                    <motion.h2 
                      className="text-2xl font-semibold mb-8 text-gray-800"
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {activeStep === 1 && "Connect.."}
                      {activeStep === 2 && "Breathe in.."}
                      {activeStep === 3 && "Track.."}
                    </motion.h2>
                    
                    {/* Large Circular Element */}
                    <div className="relative mx-auto mb-12">
                      <div className="w-48 h-48 mx-auto">
                        <motion.div 
                          className="w-full h-full border-4 border-pink-200 rounded-full relative"
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 15, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                        >
                          {/* Progress Circle */}
                          <div className="absolute inset-0">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="#F3E8FF"
                                strokeWidth="2"
                                fill="none"
                              />
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="#EC4899"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="282.6"
                                strokeDashoffset="282.6"
                                animate={{ 
                                  strokeDashoffset: 282.6 - (activeStep * 94.2)
                                }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                              />
                            </svg>
      </div>

                          {/* Inner Content */}
                          <motion.div 
                            className="absolute inset-6 bg-pink-200/50 rounded-full flex items-center justify-center"
                            animate={{ 
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          >
                            <div className="w-16 h-16 bg-pink-300/50 rounded-full flex items-center justify-center">
                              <motion.div 
                                className="text-2xl"
                                key={activeStep}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                  duration: 0.8, 
                                  type: "spring", 
                                  stiffness: 200 
                                }}
                              >
                                {activeStep === 1 && "👛"}
                                {activeStep === 2 && "🏠"}
                                {activeStep === 3 && "📈"}
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Animated Pause Button */}
                    <motion.button 
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ 
                        y: [0, -2, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                      <div className="w-3 h-3 bg-gray-600 rounded-sm ml-1"></div>
                    </motion.button>
                  </div>
          </div>
          </div>
            </motion.div>
        
            {/* Left Phone - Portfolio Selection (DYNAMIC Z-INDEX) */}
            <motion.div 
              className="absolute"
          style={{
                zIndex: activeStep === 1 ? 30 : 10
              }}
              initial={{ 
                x: 0, 
                y: 30, 
                rotate: -12, 
                scale: 1 
              }}
              animate={{
                x: activeStep === 1 ? 0 : activeStep === 2 ? -120 : 280,
                y: activeStep === 1 ? 30 : activeStep === 2 ? 10 : 50,
                rotate: activeStep === 1 ? -12 : activeStep === 2 ? -25 : 15,
                scale: activeStep === 1 ? 1 : activeStep === 2 ? 0.7 : 0.75,
                opacity: activeStep === 1 ? 1 : activeStep === 2 ? 0.3 : 0.6
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.23, 1, 0.320, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-sm font-medium">21:41</span>
                    <div className="w-16 h-6 bg-black rounded-full"></div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-3 border border-black rounded-sm"></div>
                      <span className="text-xs">100%</span>
          </div>
      </div>

                  {/* Content */}
                  <div className="px-6 py-4">
                    <div className="text-sm text-gray-500 mb-2">Hi John,</div>
                    <h2 className="text-xl font-semibold mb-6">How are you feeling today?</h2>
                    
                    {/* Investment Options */}
                    <div className="space-y-3">
                      {[
                        { emoji: "😊", title: "Calm", desc: "Maintain a peaceful state", color: "bg-gray-50" },
                        { emoji: "😤", title: "Stressed", desc: "Reduce tension and anxiety", color: "bg-gray-50" },
                        { emoji: "😴", title: "Restless", desc: "Slow down and relax", color: "bg-gray-50" },
                        { emoji: "😪", title: "Sleepy", desc: "Wind down for better rest", color: "bg-pink-100" },
                        { emoji: "😐", title: "Unmotivated", desc: "Find inspiration", color: "bg-pink-100" }
                      ].map((option, index) => (
                        <motion.div 
                          key={index}
                          className={`flex items-center justify-between p-3 ${option.color} rounded-xl cursor-pointer`}
                          whileHover={{ 
                            scale: 1.02, 
                            x: 5,
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: index * 0.2 
                              }}
                            >
                              {option.emoji}
                            </motion.div>
                            <div>
                              <div className="font-medium text-sm">{option.title}</div>
                              <div className="text-xs text-gray-500">{option.desc}</div>
                            </div>
                          </div>
                          <motion.div 
                            className="text-gray-400"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: index * 0.1 
                            }}
                          >
                            ›
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}