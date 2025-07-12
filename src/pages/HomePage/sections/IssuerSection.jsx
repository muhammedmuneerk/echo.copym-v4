import React from 'react';

const IssuerSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tokenize Your Real-World Assets
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl">
            Whether you're a real estate developer, art collector, or small business owner, our platform enables you to raise funds and unlock liquidity by tokenizing your assets.
          </p>

          {/* Benefits */}
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Raise capital with fractional ownership</li>
            <li>Boost asset liquidity and reach global investors</li>
          </ul>

          {/* Simple Steps */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-2">How it works:</h4>
            <ol className="list-decimal list-inside text-gray-600">
              <li>KYC & Verification</li>
              <li>Smart Contract Deployment</li>
              <li>Your Asset Gets Listed</li>
            </ol>
          </div>

          {/* CTA */}
          <a
            href="/issuer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More About Issuing Tokens
          </a>
        </div>

        {/* Right Side: Placeholder for image / flowchart / video */}
        <div className="flex-1 w-full h-[300px] bg-white border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-center">
          Placeholder for asset tokenization flowchart / explainer video
        </div>
      </div>
    </section>
  );
};

export default IssuerSection;
