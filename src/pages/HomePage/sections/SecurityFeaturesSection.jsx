import React, { useState, useEffect, useCallback } from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const features = [
  {
    title: 'MPC Wallet Infrastructure',
    desc: 'Secure custody with Multi-Party Computation — no single point of failure.',
    icon: <VpnKeyIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Blockchain Transparency',
    desc: 'Immutable transactions and audit trails are recorded directly on-chain for full visibility.',
    icon: <VisibilityIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'End-to-End Encryption',
    desc: 'Military-grade encryption protects your sensitive data at all times, at rest and in transit.',
    icon: <LockIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Access Control & Whitelisting',
    desc: 'Only verified and explicitly permissioned participants can interact with digital assets.',
    icon: <VerifiedUserIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Audit-Ready Architecture',
    desc: 'Built for compliance with easy integration for KYC, AML, and reporting tools.',
    icon: <FactCheckIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
  {
    title: 'Uptime & Redundancy',
    desc: 'Highly available infrastructure with automated backups and failover to ensure reliability.',
    icon: <CloudDoneIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#255f99' }} />,
  },
];

const CIRCLE_RADIUS_DESKTOP = 180;
const CIRCLE_RADIUS_MOBILE = 120;
const ROTATION_PER_ITEM = 360 / features.length;

const SecurityFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const nextFeature = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextFeature, 4000); // Cycle every 4 seconds
    return () => clearInterval(timer);
  }, [nextFeature]);

  const rotationAngle = activeIndex * ROTATION_PER_ITEM;

  return (
    <section className="relative w-full px-4 sm:px-6 py-16 sm:py-24 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="brand-section-title text-center mb-4 bg-clip-text">
            <span className="text-[#255f99]">Enterprise-Grade </span>
            <span className="text-[#15a36e]">Security </span>
            <span className="text-[#255f99]">Built for Web3</span>
          </h2>
          <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto px-4">
            Your assets are protected with cutting-edge security standards trusted
            by institutions.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-16 items-center">
          {/* Left Column: Interactive Circle Dial */}
          <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] lg:h-[450px]">
            {/* Central Glassmorphism Card */}
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
                  {/* <Typography
                    className="text-gray-700"
                    sx={{ fontSize: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' }, lineHeight: 1.4 }}
                  >
                    {features[activeIndex].desc}
                  </Typography> */}
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
          <div className="flex items-center justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/Password Authentication/Password Authentication.json"
              style={{ 
                height: isMobile ? "280px" : "450px", 
                width: isMobile ? "280px" : "450px" 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;