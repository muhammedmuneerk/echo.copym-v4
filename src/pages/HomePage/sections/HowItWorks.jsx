import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flowchart from "./flowchart";

const HowItWorks = () => {
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [key, setKey] = useState(0); // for replay animation
  const modalRef = useRef(null);

  // Replay heading animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFlowchart(false);
      }
    };

    if (showFlowchart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFlowchart]);

  return (
    <section className="w-full py-10 lg:py-28 flex justify-center items-center bg-green-50">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading and Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <motion.h2
            key={key}
            className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 flex flex-wrap justify-center leading-snug"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {"Want to see how it works?".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <button
            onClick={() => setShowFlowchart(!showFlowchart)}
            className="rounded-full bg-gradient-to-r from-[#15a36e] to-[#255f99] text-white p-2 hover:opacity-90 transition"
          >
            <motion.span
              animate={{ rotate: showFlowchart ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
        </div>

        {/* Flowchart Popup */}
        <AnimatePresence>
          {showFlowchart && (
            <motion.div
              key="flowchart"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-xl rounded-xl p-6 sm:p-10 w-full max-w-5xl mx-auto"
            >
              <Flowchart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
