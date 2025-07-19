import React from "react";
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
    <section className="w-full px-4 py-24 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-3xl px-6 py-12 bg-green-50 shadow-xl border border-gray-200">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="brand-section-title">
            <span className="text-[#255f99]">Tokenize Real-World </span>
            <span className="text-[#15a36e]">Assets</span>
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Steps */}
          <div className="flex flex-col gap-8 max-w-md">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="p-4 bg-white rounded-xl shadow-md">{step.icon}</div>
                <div>
                  <h4 className="brand-card-title text-gray-800 mb-1">{step.title}</h4>
                  <p className="text-gray-700 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Image */}
          <div className="w-full max-w-lg h-[320px] rounded-2xl overflow-hidden shrink-0">
            <img
              src="/assets/Images/image-2.png"
              alt="Issuer Preview"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
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
