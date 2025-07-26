import React, { useState, useEffect, useCallback } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code'; // New Icon
import SpeedIcon from '@mui/icons-material/Speed'; // New Icon
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'Multi-Chain Infrastructure',
    desc: 'Interact seamlessly across Ethereum, Polygon, Solana, and more, without compromising performance or security.',
    icon: <DeviceHubIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Smart Contract Transparency',
    desc: 'All smart contracts are open, verifiable, and follow best practices for gas efficiency and audit readiness.',
    icon: <VisibilityIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Developer-First APIs & SDKs',
    desc: 'Build, test, and deploy powerful applications with our comprehensive SDKs and well-documented APIs.',
    icon: <CodeIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Custodial & Non-Custodial',
    desc: 'Choose full control or delegate asset management securely with MPC and direct wallet support.',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Scalability & Performance',
    desc: 'Our architecture is engineered for high throughput and low latency, ensuring your application can grow.',
    icon: <SpeedIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Audits & Security Standards',
    desc: 'Regular smart contract audits and infrastructure built to meet institutional-grade standards.',
    icon: <SecurityIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
];

const CIRCLE_RADIUS_DESKTOP = 180;
const CIRCLE_RADIUS_MOBILE = 120;
const ROTATION_PER_ITEM = 360 / features.length; // Now 60 for 6 items

const TechnologyStackSection = () => {
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
    <section className="w-full px-6 py-16 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title text-center mb-4 bg-clip-text">
            <span className="text-[#255f99]">Unified Access To All </span>
            <span className="text-[#15a36e]">Major Blockchains</span>
          </h2>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto">
            Built for developers, institutions, and innovators. Our infrastructure
            is designed to be flexible, secure, and future-proof.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16 items-center">
          {/* Left Column: Interactive Circle Dial */}
          <div className="relative flex items-center justify-center h-[320px] lg:h-[450px]">
            {/* Central Glassmorphism Card */}
            <div className="absolute w-40 h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center text-center z-20 bg-white/30 backdrop-blur-sm rounded-full shadow-lg p-4">
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
                    sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.2, mb: 1 }}
                  >
                    {features[activeIndex].title}
                  </Typography>
                  <Typography
                    className="text-gray-700"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, lineHeight: 1.4 }}
                  >
                    {features[activeIndex].desc}
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
                        className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300"
                        sx={{
                          boxShadow: activeIndex === index
                            ? '0px 0px 25px 4px rgba(37, 95, 153, 0.5)' // Blue glow
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

          {/* Right Column: Lottie animation */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/Crypto%20chains/Crypto%20chains.json"
              style={{ height: "350px", width: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;