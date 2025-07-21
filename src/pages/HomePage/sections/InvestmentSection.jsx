import React from "react";
import { Home, DollarSign, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Home className="w-8 h-8 text-green-600" />,
    title: "Earn passively",
    description:
      "Skip the paperwork and management stress. Let our experts do the work.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-600" />,
    title: "High returns",
    description:
      "Invest monthly and earn up to 16.3% annual rental return.",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-green-600" />,
    title: "Flexible exit",
    description:
      "Sell your property shares on the secondary market with just a few clicks.",
  },
];

const RealEstateInvestmentSection = () => {
  return (
    <section className="w-full px-6 py-20 bg-green-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* Left Content */}
        <div className="flex-1 flex items-center justify-center mt-14">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="brand-section-title ">
              <span className="text-[#255f99]">Own fractions of </span>
              <span className="text-[#15a36e]">high-performing</span>
              <span className="text-[#255f99]"> assets and earn from yield, rent, and long-term value growth.</span>
            </h2>
          </div>
        </div>

        {/* Right Features - Spacious List */}
        <div className="flex-1 flex flex-col gap-16 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <div>
                <h4 className="brand-card-title text-gray-800 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateInvestmentSection;
