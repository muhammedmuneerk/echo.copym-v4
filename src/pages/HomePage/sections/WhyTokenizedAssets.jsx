import React from 'react';

const WhyTokenizedAssets = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="brand-section-title text-gray-900 mb-4">
          Why Tokenized Assets?
        </h2>
        <p className="brand-description mb-10 max-w-2xl">
          Unlock new investment opportunities with the power of blockchain. Here's why tokenized assets are reshaping the future of investing.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            'Low entry barrier',
            'Higher liquidity',
            'Passive income (dividends)',
            'Diversification',
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Comparisons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow border border-dashed border-gray-300 text-center text-gray-500">
            <p className="text-md font-medium">Traditional Investment vs Tokenized Assets</p>
            <p className="text-sm mt-2">[Comparison infographic or animation placeholder]</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border border-dashed border-gray-300 text-center text-gray-500">
            <p className="text-md font-medium">REITs vs Tokenized Property</p>
            <p className="text-sm mt-2">[Side-by-side visual or animated explainer]</p>
          </div>
        </div>

        {/* Future Infographics / Video */}
        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-lg border border-dashed border-gray-300">
          Placeholder for short animation or infographic
        </div>
      </div>
    </section>
  );
};

export default WhyTokenizedAssets;
