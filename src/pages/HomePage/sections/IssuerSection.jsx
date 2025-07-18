import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Code, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Complete KYC",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: "Deploy Smart Contract",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-500" />,
    title: "Get Listed",
  },
];

const IssuerSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-blue-50 to-white text-center flex flex-col items-center">
      {/* Section Title & Description */}
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="brand-section-title mb-4 bg-clip-text">
          Tokenize Real-World Assets
        </h2>
        <p className="text-gray-700 text-lg">
          Turn your real-world assets into digital tokens.
        </p>
      </div>

      {/* Animated 3-Step Slider */}
      <div className="relative h-32 mb-10 w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full flex flex-col items-center"
          >
            <div className="mb-2">{steps[currentStep].icon}</div>
            <h4 className="brand-card-title text-gray-600 text-xl font-semibold">
              {steps[currentStep].title}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Visual Preview */}
      <div className="w-full max-w-sm mb-10">
        <img
          src="/assets/Images/HomePreview.jpeg"
          alt="Tokenization Preview"
          className="rounded-2xl border border-gray-200 shadow-lg w-full"
        />
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href="/tokenization"
          className="px-8 py-4 rounded-lg font-semibold text-white btn-gradient"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default IssuerSection;
