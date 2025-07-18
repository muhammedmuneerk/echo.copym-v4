import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Code, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#15a36e]" />,
    title: "Complete KYC",
    description: "Verify identity securely and meet regulatory requirements.",
  },
  {
    icon: <Code className="w-8 h-8 text-[#255f99]" />,
    title: "Deploy Smart Contract",
    description: "Issue asset-backed tokens using secure contracts.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[#15a36e]" />,
    title: "Get Listed",
    description: "Showcase tokenized assets to global investors.",
  },
];

const IssuerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full px-6 py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Container */}
        <div className="relative w-full rounded-3xl px-6 py-10 overflow-hidden shadow-xl border border-white/20 bg-gradient-to-br from-black/15 via-white/5 to-black/15 backdrop-blur-lg ring-1 ring-white/10 ring-inset">
          {/* Glow backdrop */}
          <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
            <div className="w-full h-full bg-white/10 blur-2xl opacity-30 rounded-3xl" />
          </div>

          {/* Title */}
          <div className="relative z-10 text-center mb-12">
            <h2 className="brand-section-title text-transparent bg-clip-text text-3xl sm:text-4xl font-bold">
              Tokenize Real-World Assets
            </h2>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14">
            {/* Steps as Features */}
            <div className="flex flex-col gap-8 max-w-md -translate-x-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="p-4 bg-white/30 rounded-xl shadow-md">{step.icon}</div>
                  <div>
                    <h4 className="brand-card-title text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-700 text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Preview Image */}
            <div className="relative w-[420px] h-[320px] rounded-2xl overflow-hidden shrink-0 -translate-x-2">
              <img
                src="/assets/Images/HomePreview.jpeg"
                alt="Issuer Preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 flex justify-center mt-12">
            <button
              onClick={() => navigate("/tokenization")}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssuerSection;
