import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GavelIcon from '@mui/icons-material/Gavel';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const AiOverview = () => {
  const features = [
    {
      title: 'Contextual Chatbots',
      icon: <SmartToyIcon className="text-blue-500 text-5xl" />,
      description: 'Conversational bots that adapt to intent and context.',
    },
    {
      title: 'Real-Time Analytics',
      icon: <QueryStatsIcon className="text-blue-500 text-5xl" />,
      description: 'Instant insights from live asset & market data.',
    },
    {
      title: 'Predictive Modelling',
      icon: <AutoGraphIcon className="text-blue-500 text-5xl" />,
      description: 'Forecast asset trends & investor activity with AI.',
    },
    {
      title: 'Automated Compliance',
      icon: <GavelIcon className="text-blue-500 text-5xl" />,
      description: 'Enforce KYC/AML using smart policy rules.',
    },
    {
      title: 'Personalised Dashboards',
      icon: <DashboardCustomizeIcon className="text-blue-500 text-5xl" />,
      description: 'Custom views with AI-selected alerts and KPIs.',
    },
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      position: 'absolute',
    }),
  };

  const currentFeature = features[currentFeatureIndex];

  return (
    <section className="relative w-full px-6 py-12 bg-green-50 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section title and description */}
        <h2 className="brand-section-title bg-clip-text">
          AI-Powered Overview
        </h2>
        <p className="brand-description text-gray-700 mb-14">
          AI elevates every step.
        </p>
          {/* Animated Feature */}
        <div className="relative h-32 mb-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentFeatureIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full px-4"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="mb-4">{currentFeature.icon}</div>
                <h4 className="brand-card-title text-gray-600 mb-1">{currentFeature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">{currentFeature.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
         {/* Lottie animation */}
        <div className="flex justify-center mt-16">
          <Player
            autoplay
            loop
            src="/assets/lottie/loading/loading.json"
            style={{ height: '400px', width: '400px' }}
          />
        </div>

        {/* CTA Button */}
        <Link
          to="/agent"
          className="mt-8 inline-block px-8 py-4 font-semibold text-white rounded-full btn-gradient"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AiOverview;
