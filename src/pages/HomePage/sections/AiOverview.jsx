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
    <section className="w-full px-4 sm:px-6 py-12 sm:py-20 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="brand-section-title text-center mb-3 sm:mb-4 bg-clip-text text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-[#255f99]">An Ecosystem </span>
            <span className="text-[#15a36e]">of Intelligence</span>
          </h2>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 text-sm sm:text-base">
            Our AI capabilities work in concert to create a smarter, faster, and
            more secure tokenization journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-16 items-center">
          {/* Left Column: Interactive Circle Dial */}
          <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] lg:h-[450px]">
            
            {/* --- CRITICAL CHANGE: Central Glassmorphism Card --- */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 flex flex-col items-center justify-center text-center z-20 bg-white/30 backdrop-blur-sm rounded-full shadow-lg p-3 sm:p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Typography
                    component="h3"
                    className="font-bold text-gray-800"
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, lineHeight: 1.2, mb: 1 }}
                  >
                    {features[activeIndex].title}
                  </Typography>
                  <Typography
                    className="text-gray-700"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' }, lineHeight: 1.4 }}
                  >
                    {features[activeIndex].description}
                  </Typography>
                </motion.div>
              </AnimatePresence>
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
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300"
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
              style={{ height: 'auto', width: '100%', maxHeight: '400px', maxWidth: '400px' }}
              className="animate-pulse mx-auto lg:mx-0 lg:h-[550px] lg:w-auto"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link to="/agent" className="text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold btn-gradient text-sm sm:text-base">
            Explore Our AI Agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiOverview;