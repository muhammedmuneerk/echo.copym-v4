import React, { useEffect, useState } from "react";
import { Wallet, LayoutGrid, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const mediaItems = [
  {
    src: "/assets/Images/iphone-mockup-screen-removebg-preview.png",
    screenshot: "/assets/Images/Walletpreview.jpg",
    label: "Deposit / Withdraw",
    icon: <Wallet className="w-4 h-4" />,
    color: "text-emerald-300 bg-emerald-500/20",
  },
  {
    src: "/assets/Images/iphone-mockup-screen-removebg-preview.png",
    screenshot: "/assets/Images/MarketPreview.jpg",
    label: "Explore Assets",
    icon: <LayoutGrid className="w-4 h-4" />,
    color: "text-emerald-300 bg-emerald-500/20",
  },
  {
    src: "/assets/Images/iphone-mockup-screen-removebg-preview.png",
    screenshot: "/assets/Images/MarketplaceDashboard.jpg",
    label: "Track Portfolio",
    icon: <LineChart className="w-4 h-4" />,
    color: "text-emerald-300 bg-emerald-500/20",
  },
];

export default function AppPeekSection() {
  const [index, setIndex] = useState(0);
  const total = mediaItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(interval);
  }, [total]);

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + total) % total) return "left";
    if (i === (index + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 text-transparent bg-clip-text">
            Peek Into Our Web3 Investment Hub
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-700">
            Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
          </p>
        </div>

        {/* Glassmorphic Carousel */}
        <div className="relative rounded-3xl px-6 py-16 overflow-hidden shadow-2xl flex flex-col items-center border border-white/20 bg-gradient-to-br from-black/15 via-white/5 to-black/15 backdrop-blur-lg ring-1 ring-white/10 ring-inset">

          {/* Glow backdrop */}
          <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
            <div className="w-full h-full bg-white/10 blur-2xl opacity-30 rounded-3xl" />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-10 z-10">
            <img
              src="/assets/copym/png/Copym-01-1.png"
              alt="Copym Logo"
              className="w-auto h-24 sm:h-14 md:h-24 object-contain"
            />
          </div>

          {/* Carousel */}
          <div className="relative w-full max-w-5xl h-[420px] flex items-center justify-center z-10">
            {mediaItems.map((item, i) => {
              const pos = getPosition(i);
              let className = "absolute transition-all duration-700 ease-in-out";
              let style = {};

              if (pos === "center") {
                style = {
                  transform: "translateX(0) scale(1)",
                  zIndex: 30,
                  opacity: 1,
                };
              } else if (pos === "left") {
                style = {
                  transform: "translateX(-220px) scale(0.85) rotateY(10deg)",
                  zIndex: 20,
                  opacity: 0.5,
                };
              } else if (pos === "right") {
                style = {
                  transform: "translateX(220px) scale(0.85) rotateY(-10deg)",
                  zIndex: 20,
                  opacity: 0.5,
                };
              } else {
                style = { transform: "scale(0.5)", opacity: 0, zIndex: 0 };
              }

              return (
                <motion.div
                  key={i}
                  className={`${className} w-[230px] h-[450px] rounded-2xl overflow-hidden`}
                  style={style}
                >
                  <div className="relative w-full h-full">
                    {/* Screenshot inside screen */}
                    <img
                      src={item.screenshot}
                      alt="App Screenshot"
                      className="absolute top-[12%] left-[14%] w-[72%] h-[75%] object-cover rounded-xl z-0"
                    />
                    {/* Frame */}
                    <div className="w-full h-full scale-[2.05]">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-contain z-10 relative"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Caption under center card */}
          <div
            className={`mt-6 px-4 py-2 rounded-full flex items-center gap-2 font-semibold text-sm z-10 text-gray-800 bg-gray-100/60 shadow`}
          >
            {mediaItems[index].icon}
            <span className="text-gray-800 font-bold">{mediaItems[index].label}</span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 z-10">
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient"
            >
              Get App Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
