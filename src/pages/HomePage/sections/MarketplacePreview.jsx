import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, Users, Shield } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function MarketplacePreview() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Track scroll progress and update animation steps
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2 && latest < 0.8) {
      setIsSticky(true);
      // Map scroll progress to animation steps (0-6 for 6 devices + content)
      const step = Math.floor((latest - 0.2) / 0.6 * 7);
      setCurrentStep(Math.min(step, 6));
    } else {
      setIsSticky(false);
      if (latest <= 0.2) setCurrentStep(0);
    }
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <section
        className={`w-full bg-green-50 overflow-hidden transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 min-h-[700px]' : 'relative min-h-[700px]'
          }`}
        style={{ zIndex: isSticky ? 50 : 'auto' }}
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="relative w-full max-w-7xl px-6">
            {/* Features at Top - Horizontal Layout */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentStep >= 0 ? 1 : 0,
                y: currentStep >= 0 ? 0 : 50
              }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <TopFeature
                number="01"
                title="AI Analytics"
                description="Advanced AI algorithms analyze market trends and provide real-time insights for optimal investment decisions."
                icon={<BarChart3 className="w-6 h-6 text-[#15a36e]" />}
              />
              <TopFeature
                number="02"
                title="P2P Trading"
                description="Direct peer-to-peer trading of tokenized assets with secure smart contract execution and low fees."
                icon={<Users className="w-6 h-6 text-[#255f99]" />}
              />
              <TopFeature
                number="03"
                title="Secure Staking"
                description="Stake your RWA tokens to earn passive income with institutional-grade security and transparent rewards."
                icon={<Shield className="w-6 h-6 text-[#15a36e]" />}
              />
            </motion.div>

            {/* Animated Devices Preview */}
            <DevicesShowcase currentStep={currentStep} />

            {/* CTA Button */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentStep >= 6 ? 1 : 0,
                y: currentStep >= 6 ? 0 : 50
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => navigate("/marketplace")}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient rounded-lg"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const TopFeature = ({ number, title, description, icon }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center justify-center mb-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-[#ff6b6b] bg-[#ff6b6b]/10 px-2 py-1 rounded">
          {number}
        </span>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
);

const devices = [
  {
    key: "desktop",
    src: "/assets/Images/devices/device-desktop.png",
    alt: "Desktop",
    style: {
      width: 386,
      left: "50%",
      bottom: 16,
      zIndex: 1, // Desktop at the back
      marginLeft: -193,
      final: { x: 0, y: 0 },
      initial: { x: 0, y: -400 },
      delay: 0,
    },
  },
  {
    key: "laptop",
    src: "/assets/Images/devices/device-laptop.png",
    alt: "Laptop",
    style: {
      width: 355,
      left: "13%",
      bottom: 0,
      zIndex: 5, // Laptop in front of desktop, behind tablet
      final: { x: 0, y: 0 },
      initial: { x: -500, y: 200 },
      delay: 0.3,
    },
  },
  {
    key: "ipad",
    src: "/assets/Images/devices/device-ipad.png",
    alt: "iPad",
    style: {
      width: 155,
      left: "62%",
      bottom: 24,
      zIndex: 2, // iPad in front of desktop
      final: { x: 0, y: 0 },
      initial: { x: 400, y: 200 },
      delay: 0.15,
    },
  },
  {
    key: "iphone",
    src: "/assets/Images/devices/device-iphone.png",
    alt: "iPhone",
    style: {
      width: 92,
      left: "77%",
      bottom: 0,
      zIndex: 3, // iPhone in front of iPad
      final: { x: 0, y: 0 },
      initial: { x: 600, y: 400 },
      delay: 0.45,
    },
  },
  {
    key: "phone",
    src: "/assets/Images/devices/device-phone.png",
    alt: "Phone",
    style: {
      width: 170,
      left: "85%",
      bottom: 8,
      zIndex: 4, // Phone in front of iPhone
      final: { x: 0, y: 0 },
      initial: { x: 400, y: 400 },
      delay: 0.75,
    },
  },
  {
    key: "tablet",
    src: "/assets/Images/devices/device-tablet.png",
    alt: "Tablet",
    style: {
      width: 195,
      left: 0,
      bottom: -8,
      zIndex: 6, // Tablet in front of everything
      final: { x: 0, y: 0 },
      initial: { x: -400, y: 400 },
      delay: 0.6,
    },
  },
];

function DevicesShowcase({ currentStep }) {
  // Screen content that appears on devices based on scroll progress
  const screenContent = [
    { device: "desktop", content: "AI Analytics", description: "Smart Market Insights", step: 2 },
    { device: "laptop", content: "P2P Trading", description: "Direct Asset Exchange", step: 3 },
    { device: "ipad", content: "Staking Rewards", description: "Earn Passive Income", step: 4 },
    { device: "tablet", content: "RWA Tokens", description: "Real Estate & More", step: 4 },
    { device: "iphone", content: "Live Trading", description: "Mobile Portfolio", step: 5 },
    { device: "phone", content: "Secure Wallet", description: "Multi-Asset Storage", step: 5 },
  ];

  return (
    <div
      className="devices_MMUi flex justify-center items-center"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        height: 420,
        maxWidth: 900,
        margin: "0 auto",
        marginTop: "0px", // moved up from 40px
        background: "transparent",
        borderRadius: 32,
        overflow: "visible",
      }}
    >
      {devices.map((device) => {
        const style = {
          position: "absolute",
          width: device.style.width,
          top: device.style.top,
          left: device.style.left,
          right: device.style.right,
          bottom: device.style.bottom,
          zIndex: device.style.zIndex,
          marginLeft: device.style.marginLeft,
          pointerEvents: "none",
        };

        return (
          <motion.div
            key={device.key}
            className="device-anim"
            style={style}
            initial={{
              opacity: 0,
              x: device.style.initial.x,
              y: device.style.initial.y,
              scale: 0.8,
            }}
            animate={{
              opacity: currentStep >= 1 ? 1 : 0, // All devices appear when section is active
              x: currentStep >= 1 ? device.style.final.x : device.style.initial.x,
              y: currentStep >= 1 ? device.style.final.y : device.style.initial.y,
              scale: currentStep >= 1 ? 1 : 0.8,
            }}
            transition={{
              duration: 0.9,
              delay: device.style.delay, // Use original staggered delays for assembly
              type: "spring",
              stiffness: 60,
            }}
          >
            <div className="relative">
              <img
                src={device.src}
                alt={device.alt}
                style={{ width: "100%", height: "auto", display: "block" }}
              />

              {/* Screen Content Overlay - Only lights up based on scroll */}
              {screenContent.map((content) => {
                if (content.device === device.key && currentStep >= content.step) {
                  return (
                    <motion.div
                      key={`${device.key}-content`}
                      className="absolute flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{
                        top: device.key === "desktop" ? "15%" : "20%",
                        left: device.key === "desktop" ? "15%" : "10%",
                        right: device.key === "desktop" ? "15%" : "10%",
                        bottom: device.key === "desktop" ? "25%" : "30%",
                        background: "rgba(21, 163, 110, 0.15)",
                        borderRadius: "8px",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(21, 163, 110, 0.2)",
                        boxShadow: "0 4px 20px rgba(21, 163, 110, 0.1)",
                      }}
                    >
                      <div className="text-center p-2">
                        <div className="text-lg font-semibold text-[#15a36e] mb-1">
                          {content.content}
                        </div>
                        <div className="text-xs text-gray-700 font-medium">
                          {content.description}
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        );
      })}

      {/* Final lift-up animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: currentStep >= 6 ? -50 : 0,
          scale: currentStep >= 6 ? 0.95 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}