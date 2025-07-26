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
    // ... (feature array remains the same)
    {
        title: 'Contextual Chatbots',
        icon: <SmartToyIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Engage users with AI chatbots that understand context and deliver human-like responses.',
      },
      {
        title: 'Real-Time Analytics',
        icon: <QueryStatsIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Our AI engine continuously analyses data streams, surfacing actionable insights in real-time.',
      },
      {
        title: 'Predictive Modelling',
        icon: <AutoGraphIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Leverage ML to forecast market movements, token demand, and investor behaviour.',
      },
      {
        title: 'Automated Compliance',
        icon: <GavelIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Smart policies monitor transactions 24/7, flagging anomalies and enforcing KYC/AML rules.',
      },
      {
        title: 'Personalised Dashboards',
        icon: <DashboardCustomizeIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Stakeholders see AI-curated KPIs, alerts, and recommendations for their unique portfolio.',
      },
      {
        title: 'Low-Code Integrations',
        icon: <IntegrationInstructionsIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#255f99' }} />,
        description:
          'Embed powerful AI capabilities into your products in minutes with plug-and-play widgets & APIs.',
      },
];

const CIRCLE_RADIUS_DESKTOP = 200;
const CIRCLE_RADIUS_MOBILE = 130;

const AiOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize the callback to prevent re-creation on every render
  const nextFeature = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  // Set up the automatic timer
  useEffect(() => {
    const timer = setInterval(nextFeature, 5000);
    return () => clearInterval(timer);
  }, [nextFeature]);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Column: Interactive Circle Dial --- */}
          <div className="relative flex items-center justify-center h-[350px] lg:h-[500px]">
            {/* Decorative Background Dashed Circle */}
            <Box className="absolute w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] border-2 border-dashed border-gray-300 rounded-full" />

            {/* Central Animated Content */}
            <div className="relative w-40 h-40 lg:w-56 lg:h-56 flex items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="px-2"
                >
                  <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                    {features[activeIndex].title}
                  </Typography>
                  <Typography className="text-gray-600 text-sm leading-snug">
                    {features[activeIndex].description}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Orbiting Feature Icons */}
            {features.map((feature, index) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
              const radius = isMobile ? CIRCLE_RADIUS_MOBILE : CIRCLE_RADIUS_DESKTOP;
              const angle = (index / features.length) * 2 * Math.PI - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={feature.title}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x,
                    y,
                    scale: activeIndex === index ? 1.25 : 1,
                    zIndex: activeIndex === index ? 10 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  whileHover={{ scale: activeIndex === index ? 1.3 : 1.1 }}
                >
                  <Box className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    {feature.icon}
                  </Box>
                </motion.div>
              );
            })}
          </div>

          {/* --- Right Column: Image --- */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/src/styles/iq.svg"
              alt="AI Ecosystem Diagram"
              className="w-full max-w-md animate-pulse"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/agent"
            className="text-white px-8 py-4 font-semibold btn-gradient"
          >
            Explore Our AI Agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiOverview;