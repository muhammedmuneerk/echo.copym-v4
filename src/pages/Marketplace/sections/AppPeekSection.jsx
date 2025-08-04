import React, { useEffect, useState } from "react";
import { Wallet, LayoutGrid, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "../../../components/PhoneMockup";

const mediaItems = [
  {
    screenshot: "/assets/Images/Walletpreview.jpg",
    label: "Deposit / Withdraw",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    screenshot: "/assets/Images/MarketPreview.jpg",
    label: "Explore Assets",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    screenshot: "/assets/Images/MarketplaceDashboard.jpg",
    label: "Track Portfolio",
    icon: <LineChart className="w-5 h-5" />,
  },
];

export default function AppPeekSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = mediaItems.length;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const getAnimationProps = (i) => {
    // --- ORBIT ADJUSTMENTS ---
    // Reduced radius to match the smaller phone size, keeping the visuals tight.
    const ORBIT_RADIUS_X = 280; 
    const ORBIT_RADIUS_Y = 80;  
    const FRONT_Z_INDEX = 100;
    const BASE_SCALE = 0.7; // Kept the same scale factor for good depth
    const angle = (i - activeIndex) * (2 * Math.PI / total) + (Math.PI / 2);
    const x = ORBIT_RADIUS_X * Math.cos(angle);
    const y = ORBIT_RADIUS_Y * Math.sin(angle);
    const normalizedDepth = (y + ORBIT_RADIUS_Y) / (2 * ORBIT_RADIUS_Y);
    const scale = BASE_SCALE + (1 - BASE_SCALE) * normalizedDepth;
    const zIndex = Math.round(FRONT_Z_INDEX * normalizedDepth);
    // Only apply rotation on larger screens (md and up)
    const rotate = isMobile ? 0 : x / 20;
    return { x, y, scale, zIndex, rotate, opacity: scale };
  };

  return (
    <section className="py-24  text-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <div className="mb-8">
            <h1 className="brand-section-title">
              <span className="text-[#255f99]">Peek Into Our </span>
              <span className="text-[#15a36e]">Web3 </span>
              <span className="text-[#255f99]">Investment Hub</span>
            </h1>
            <p className="brand-description max-w-3xl mx-auto text-gray-700">
              Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
            </p>
          </div>

          {/* --- MORE SPACE --- Increased margin-bottom for better separation */}
          <div className="h-12 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-5 py-2.5 rounded-full flex items-center gap-2 font-semibold text-md text-gray-900 bg-white/70 shadow-lg backdrop-blur-md border border-gray-200"
              >
                {mediaItems[activeIndex].icon}
                <span className="font-bold">{mediaItems[activeIndex].label}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* --- BIGGER CONTAINER --- Increased height to give the animation more room */}
          <div className="relative w-full h-[750px] flex items-center justify-center">
            {mediaItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="absolute cursor-pointer"
                animate={getAnimationProps(i)}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setActiveIndex(i)}
              >
                <PhoneMockup screenshot={item.screenshot} alt={item.label} />
              </motion.div>
            ))}
          </div>

          {/* --- REPOSITIONED CTA --- Removed negative margin, placing it clearly below the animation */}
          <div className="flex justify-center mt-8 z-10">
            <Link to="/marketplace" className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white btn-gradient rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              Explore the Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}