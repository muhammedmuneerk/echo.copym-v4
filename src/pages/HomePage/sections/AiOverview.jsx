import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GavelIcon from '@mui/icons-material/Gavel';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    {
        title: 'Contextual Chatbots',
        icon: <SmartToyIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Engage users with AI chatbots that understand context and deliver human-like responses.',
    },
    {
        title: 'Real-Time Analytics',
        icon: <QueryStatsIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Our AI engine analyses data streams, surfacing actionable insights in real-time.',
    },
    {
        title: 'Predictive Modelling',
        icon: <AutoGraphIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Leverage ML to forecast market movements, token demand, and investor behaviour.',
    },
    {
        title: 'Automated Compliance',
        icon: <GavelIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Smart policies monitor transactions 24/7, flagging anomalies and enforcing KYC/AML rules.',
    },
    {
        title: 'Personalised Dashboards',
        icon: <DashboardCustomizeIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Stakeholders see AI-curated KPIs, alerts, and recommendations for their unique portfolio.',
    },
    {
        title: 'Low-Code Integrations',
        icon: <IntegrationInstructionsIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
        description: 'Embed powerful AI capabilities into your products in minutes with plug-and-play widgets & APIs.',
    },
];

const CIRCLE_RADIUS_DESKTOP = 180;
const CIRCLE_RADIUS_MOBILE = 120;
const ROTATION_PER_ITEM = 360 / features.length;

// Curved Text Component
const CurvedText = ({ text, radius = 60, fontSize = 14, color = '#255f99', rotation = 0 }) => {
  const characters = text.split('');
  const angleStep = (2 * Math.PI) / characters.length;
  
  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <defs>
        <path
          id={`circle-path-${text}`}
          d={`M ${radius},${radius} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>
      
      <g transform={`rotate(${rotation}, ${radius}, ${radius})`}>
        {characters.map((char, index) => {
          const angle = index * angleStep - Math.PI / 2; // Start from top
          const x = radius + (radius - 10) * Math.cos(angle);
          const y = radius + (radius - 10) * Math.sin(angle);
          const rotation = (angle * 180) / Math.PI + 90;
          
          return (
            <text
              key={index}
              x={x}
              y={y}
              fontSize={fontSize}
              fill={color}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${rotation}, ${x}, ${y})`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {char}
            </text>
          );
        })}
      </g>
    </svg>
  );
};

const AiOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextFeature = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextFeature, 4000);
    return () => clearInterval(timer);
  }, [nextFeature]);

  const rotationAngle = activeIndex * ROTATION_PER_ITEM;

  return (
    <section className="w-full px-6 py-20 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title text-center mb-4 bg-clip-text">
            <span className="text-[#255f99]">An Ecosystem </span>
            <span className="text-[#15a36e]">of Intelligence</span>
          </h2>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto">
            Our AI capabilities work in concert to create a smarter, faster, and
            more secure tokenization journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16 items-center">
          {/* Left Column: Interactive Circle Dial */}
          <div className="relative flex items-center justify-center h-[320px] lg:h-[450px]">
            
            {/* --- CRITICAL CHANGE: Central Glassmorphism Card with Curved Text --- */}
            <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center text-center z-20 bg-white/30 backdrop-blur-sm rounded-full shadow-lg p-4">
              
              {/* Curved Text Ring - Outer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`curved-outer-${activeIndex}`}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <CurvedText
                    text={features[activeIndex].title.toUpperCase()}
                    radius={85}
                    fontSize={10}
                    color="#255f99"
                    rotation={rotationAngle}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Curved Text Ring - Inner */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`curved-inner-${activeIndex}`}
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                >
                  <CurvedText
                    text="AI ECOSYSTEM"
                    radius={45}
                    fontSize={8}
                    color="#15a36e"
                    rotation={-rotationAngle}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Central Content */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-full w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="text-center"
                  >
                    <Typography
                      component="h3"
                      className="font-bold text-gray-800"
                      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, lineHeight: 1.2, mb: 0.5 }}
                    >
                      {features[activeIndex].title.split(' ')[0]}
                    </Typography>
                    <Typography
                      component="h3"
                      className="font-bold text-gray-800"
                      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, lineHeight: 1.2, mb: 0.5 }}
                    >
                      {features[activeIndex].title.split(' ').slice(1).join(' ')}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description Text - Bottom */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 lg:w-56">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
                  >
                    <Typography
                      className="text-gray-700 text-center"
                      sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, lineHeight: 1.4 }}
                    >
                      {features[activeIndex].description}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* The main rotating container for the icons */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: rotationAngle }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {features.map((feature, index) => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
                const radius = isMobile ? CIRCLE_RADIUS_MOBILE : CIRCLE_RADIUS_DESKTOP;
                const angleRad = (index / features.length) * 2 * Math.PI;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <motion.div
                    key={feature.title}
                    className="absolute top-1/2 left-1/2 cursor-pointer"
                    style={{ x: '-50%', y: '-50%' }}
                    onClick={() => setActiveIndex(index)}
                    animate={{ x: `calc(-50% + ${x}px)`, y: `calc(-50% + ${y}px)` }}
                  >
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{
                        rotate: -rotationAngle,
                        scale: activeIndex === index ? 1.4 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      whileHover={{ scale: activeIndex === index ? 1.5 : 1.1 }}
                    >
                      <Box
                        className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300"
                        sx={{
                          boxShadow: activeIndex === index
                            ? '0px 0px 25px 4px rgba(21, 163, 110, 0.5)'
                            : '0px 4px 10px rgba(0, 0, 0, 0.1)',
                          zIndex: activeIndex === index ? 10 : 1,
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:flex items-center justify-center">
            <img
              src="/assets/svg/iq.svg"
              alt="AI Ecosystem Diagram"
              style={{ height: '550px', width: 'auto' }}
              className=" animate-pulse"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/agent" className="text-white px-8 py-4 font-semibold btn-gradient">
            Explore Our AI Agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiOverview;