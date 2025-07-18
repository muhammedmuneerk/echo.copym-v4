import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Search, TrendingUp, ArrowRight, Building } from 'lucide-react';

const Flowchart = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 1, title: "Login", icon: User },
    { id: 2, title: "Tokenize your asset", icon: Building },
    { id: 3, title: "List in marketplace", icon: Search },
    { id: 4, title: "Investors buy fractional shares", icon: TrendingUp }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -6, scale: 1.03, transition: { duration: 0.3 } }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  const iconWrapper = (Icon) => (
    <div className="flex items-center justify-center w-10 h-10 rounded-full mb-4 bg-white/20">
      <Icon className="w-5 h-5 text-white" />
    </div>
  );

  const imageBlock = (src, label) => (
    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-2 text-white">
      <img src={src} alt={label} className="w-full h-24 object-cover rounded-md mb-2" />
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );

  const renderStepContent = (step) => {
    switch (step.id) {
      case 1:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Sign up / Log in</h3>
            {imageBlock("/assets/images/flowchart4.png", "Login Interface")}
          </div>
        );
      case 2:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Tokenize Asset</h3>
            {imageBlock("/assets/images/flowchart1.png", "Asset Tokenization")}
          </div>
        );
      case 3:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Marketplace Listing</h3>
            {imageBlock("/assets/images/flowchart2.png", "Marketplace")}
          </div>
        );
      case 4:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Fractional Ownership</h3>
            {imageBlock("/assets/images/flowchart5.png", "Fractional Investment")}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full rounded-3xl px-6 py-10 overflow-hidden shadow-xl border border-white/20 bg-gradient-to-br from-black/15 via-white/5 to-black/15 backdrop-blur-lg ring-1 ring-white/10 ring-inset">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="brand-section-title mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#15a36e] to-[#255f99]">
            Tokenize or Invest in Real-World Assets in Just 4 Simple Steps
          </h2>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="w-full max-w-xs lg:w-44"
                onClick={() => setActiveStep(index)}
              >
                <div className={`bg-gradient-to-br from-[#15a36e] to-[#255f99] text-white rounded-2xl shadow-xl overflow-hidden cursor-pointer h-full min-h-[280px] flex flex-col justify-between`}>
                  <div className="flex-1">{renderStepContent(step)}</div>
                  <div className="px-4 py-2 text-xs text-center text-white/80">
                    Step {step.id}: {step.title}
                  </div>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="hidden lg:flex items-center justify-center text-white/60"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Mobile Indicators */}
      <div className="flex justify-center mt-8 lg:hidden">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flowchart;
