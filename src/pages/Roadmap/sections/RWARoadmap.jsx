import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RWARoadmap() {
  const roadmapRef = useRef(null);
  const ballRef = useRef(null);
  const lineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const roadmapData = [
    {
      id: 1,
      quarter: "Q1 - 2024",
      title: "Foundation Launch",
      side: "left",
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/50",
      ballColor: "#3B82F6",
      items: [
        "Platform architecture & smart contracts",
        "Core RWA tokenization framework", 
        "Initial wallet integrations",
        "Security audits and testing"
      ]
    },
    {
      id: 2,
      quarter: "Live",
      title: "Beta Release",
      side: "right", 
      color: "bg-green-500",
      glowColor: "shadow-green-500/50",
      ballColor: "#10B981",
      items: [
        "Real estate tokenization pilot",
        "Investor onboarding system",
        "KYC/AML compliance integration",
        "Initial liquidity pools"
      ]
    },
    {
      id: 3,
      quarter: "Q2 - 2024", 
      title: "Asset Expansion",
      side: "left",
      color: "bg-purple-500", 
      glowColor: "shadow-purple-500/50",
      ballColor: "#8B5CF6",
      items: [
        "Commodities tokenization (Gold, Silver)",
        "Advanced analytics dashboard",
        "Multi-chain support (Ethereum, Polygon)",
        "Institutional investor tools"
      ]
    },
    {
      id: 4,
      quarter: "Q3 - 2024",
      title: "DeFi Integration", 
      side: "right",
      color: "bg-orange-500",
      glowColor: "shadow-orange-500/50",
      ballColor: "#F59E0B",
      items: [
        "Lending & borrowing with RWA collateral",
        "Yield farming opportunities", 
        "Cross-chain bridge implementation",
        "Governance token launch ($RWA)"
      ]
    },
    {
      id: 5,
      quarter: "Q4 - 2024",
      title: "Global Expansion",
      side: "left", 
      color: "bg-pink-500",
      glowColor: "shadow-pink-500/50",
      ballColor: "#EC4899",
      items: [
        "International compliance frameworks",
        "Fractional ownership marketplace",
        "Mobile app launch (iOS/Android)", 
        "Partnership with traditional finance"
      ]
    },
    {
      id: 6,
      quarter: "Future",
      title: "Innovation Hub",
      side: "right",
      color: "bg-indigo-500", 
      glowColor: "shadow-indigo-500/50",
      ballColor: "#6366F1",
      items: [
        "AI-powered asset valuation",
        "Carbon credit tokenization",
        "Metaverse real estate integration",
        "Decentralized autonomous RWA funds"
      ]
    }
  ];

  // Set first section as active on mount
  useEffect(() => {
    setActiveSection(0);
    
    // Set initial ball color
    if (ballRef.current && roadmapData[0]) {
      const firstItem = roadmapData[0];
      const color = firstItem.ballColor;
      ballRef.current.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}80, 0 0 90px ${color}40`;
      ballRef.current.style.backgroundColor = color;
    }
  }, []);

  // GSAP Animation Setup
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, roadmapData.length);

    const loadGSAP = async () => {
      try {
        if (!window.gsap) {
          const gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
          document.head.appendChild(gsapScript);
          
          await new Promise((resolve) => {
            gsapScript.onload = resolve;
          });
        }

        if (!window.ScrollTrigger) {
          const scrollTriggerScript = document.createElement('script');
          scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          document.head.appendChild(scrollTriggerScript);
          
          await new Promise((resolve) => {
            scrollTriggerScript.onload = resolve;
          });
        }

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        
        if (gsap && ScrollTrigger && roadmapRef.current && ballRef.current) {
          gsap.registerPlugin(ScrollTrigger);

          const timelineHeight = roadmapRef.current.offsetHeight - 100;
          
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());

          gsap.fromTo(ballRef.current, 
            { y: 0 },
            {
              y: timelineHeight,
              ease: "none",
              scrollTrigger: {
                trigger: roadmapRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  
                  let currentSectionIndex;
                  if (progress <= 0.1) {
                    currentSectionIndex = 0;
                  } else {
                    currentSectionIndex = Math.min(
                      Math.floor(progress * roadmapData.length), 
                      roadmapData.length - 1
                    );
                  }
                  
                  if (currentSectionIndex !== activeSection) {
                    setActiveSection(currentSectionIndex);
                  }

                  if (ballRef.current && roadmapData[currentSectionIndex]) {
                    const currentItem = roadmapData[currentSectionIndex];
                    const color = currentItem.ballColor;
                    ballRef.current.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}80, 0 0 90px ${color}40`;
                    ballRef.current.style.backgroundColor = color;
                  }
                }
              }
            }
          );

          gsap.fromTo(lineRef.current, 
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: roadmapRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 1
              }
            }
          );
        }
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    setTimeout(loadGSAP, 100);

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  // Fallback scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current || !ballRef.current) return;

      const roadmapRect = roadmapRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const roadmapTop = roadmapRect.top;
      const roadmapHeight = roadmapRect.height;
      
      const scrollStart = viewportHeight / 2;
      const scrollEnd = roadmapHeight - (viewportHeight / 2);
      
      if (roadmapTop <= scrollStart && roadmapTop >= -scrollEnd) {
        const rawProgress = (scrollStart - roadmapTop) / scrollEnd;
        const scrollProgress = Math.max(0, Math.min(1, rawProgress));
        
        const ballY = scrollProgress * (roadmapHeight - 100);
        ballRef.current.style.transform = `translateX(-50%) translateY(${ballY}px)`;
        
        let currentSectionIndex;
        if (scrollProgress <= 0.1) {
          currentSectionIndex = 0;
        } else {
          currentSectionIndex = Math.floor(scrollProgress * roadmapData.length);
        }
        
        const clampedIndex = Math.min(currentSectionIndex, roadmapData.length - 1);
        
        if (clampedIndex !== activeSection && clampedIndex >= 0) {
          setActiveSection(clampedIndex);
          
          const currentItem = roadmapData[clampedIndex];
          if (currentItem && ballRef.current) {
            const color = currentItem.ballColor;
            ballRef.current.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}80, 0 0 90px ${color}40`;
            ballRef.current.style.backgroundColor = color;
          }
        }
      } else if (roadmapTop > scrollStart) {
        if (activeSection !== 0) {
          setActiveSection(0);
          const firstItem = roadmapData[0];
          if (firstItem && ballRef.current) {
            const color = firstItem.ballColor;
            ballRef.current.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}80, 0 0 90px ${color}40`;
            ballRef.current.style.backgroundColor = color;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    inactive: { 
      scale: 0.9,
      opacity: 0.6,
      y: 20,
      filter: "blur(1px)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    active: {
      scale: 1.05,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }
    }
  };

  const glowVariants = {
    inactive: {
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      borderColor: "rgba(75, 85, 99, 0.3)"
    },
    active: {
      boxShadow: [
        "0 0 0 rgba(0,0,0,0)",
        "0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor",
        "0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor"
      ],
      borderColor: "currentColor",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="bg-gray-900 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Debug Info */}
        <div className="fixed top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded text-sm z-50">
          <div>Active Section: {activeSection + 1} / {roadmapData.length}</div>
          <div>Section: {roadmapData[activeSection]?.quarter}</div>
          <div>Color: {roadmapData[activeSection]?.ballColor}</div>
        </div>

        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            RWA Roadmap
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our journey to revolutionize real-world asset tokenization, bringing traditional finance 
            into the decentralized future through innovative blockchain technology.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={roadmapRef} className="relative max-w-6xl mx-auto" style={{ minHeight: '200vh' }}>
          
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2 z-5">
            <div 
              ref={lineRef}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-pink-500 to-indigo-500 origin-top"
              style={{ height: '100%' }}
            />
          </div>

          {/* Scrolling Ball */}
          <motion.div 
            ref={ballRef}
            className="absolute left-1/2 top-0 w-8 h-8 bg-blue-500 rounded-full z-30"
            style={{
              transform: 'translateX(-50%)',
              boxShadow: '0 0 30px #3B82F6, 0 0 60px #3B82F640'
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-1 bg-white rounded-full opacity-40"></div>
            <div className="absolute inset-2 bg-white rounded-full opacity-60"></div>
          </motion.div>

          {/* Timeline Items */}
          <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {roadmapData.map((item, index) => (
              <div 
                key={item.id}
                className="relative h-80 flex items-center"
                ref={el => sectionRefs.current[index] = el}
              >
                <div className={`flex items-center w-full ${
                  item.side === 'left' ? 'justify-start' : 'justify-end'
                }`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    className={`relative max-w-md ${item.side === 'left' ? 'mr-20' : 'ml-20'}`}
                    variants={cardVariants}
                    animate={activeSection === index ? "active" : "inactive"}
                  >
                    
                    {/* Connector Line */}
                    <motion.div 
                      className={`absolute top-8 w-16 h-0.5 bg-gray-600 ${
                        item.side === 'left' ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'
                      }`}
                      animate={{
                        backgroundColor: activeSection === index ? item.ballColor : '#4B5563',
                        boxShadow: activeSection === index ? `0 0 10px ${item.ballColor}` : '0 0 0 transparent'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Quarter Badge */}
                    <motion.div 
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4 ${item.color}`}
                      animate={{
                        scale: activeSection === index ? 1.1 : 1,
                        boxShadow: activeSection === index ? 
                          `0 0 20px ${item.ballColor}, 0 0 40px ${item.ballColor}40` : 
                          '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.quarter}
                    </motion.div>

                    {/* Content Card with Glow Effect */}
                    <motion.div 
                      className="bg-gray-800 rounded-2xl p-6 border-2 transition-all duration-300 relative overflow-hidden"
                      style={{ 
                        color: activeSection === index ? item.ballColor : 'inherit',
                        borderColor: activeSection === index ? item.ballColor : 'rgba(75, 85, 99, 0.3)'
                      }}
                      variants={glowVariants}
                      animate={activeSection === index ? "active" : "inactive"}
                    >
                      {/* Glow overlay */}
                      <AnimatePresence>
                        {activeSection === index && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                              background: `linear-gradient(45deg, ${item.ballColor}10, transparent, ${item.ballColor}10)`,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                        
                        <ul className="space-y-2">
                          {item.items.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              className="text-gray-300 flex items-start"
                              animate={{
                                color: activeSection === index ? '#fff' : '#D1D5DB',
                                x: activeSection === index ? 5 : 0
                              }}
                              transition={{ delay: idx * 0.1, duration: 0.3 }}
                            >
                              <motion.span 
                                className="text-blue-400 mr-3 mt-1"
                                animate={{
                                  color: activeSection === index ? item.ballColor : '#60A5FA'
                                }}
                              >
                                —
                              </motion.span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div 
                  className={`absolute left-1/2 w-6 h-6 ${item.color} rounded-full transform -translate-x-1/2 z-20 border-4 border-gray-900`}
                  animate={{
                    scale: activeSection === index ? [1, 1.4, 1.2] : 1,
                    boxShadow: activeSection === index ? 
                      `0 0 25px ${item.ballColor}, 0 0 50px ${item.ballColor}60` : 
                      `0 0 10px ${item.ballColor}40`,
                    borderWidth: activeSection === index ? '2px' : '4px'
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join the RWA Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}