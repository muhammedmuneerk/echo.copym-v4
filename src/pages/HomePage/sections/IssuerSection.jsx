import React from 'react';

const IssuerSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="brand-section-title mb-4 bg-clip-text">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/tokenization"
            className="text-white px-8 py-4 rounded-lg font-semibold btn-gradient items-center justify-center"
          >
            Learn More
          </a>
          </div>
        </div>

        {/* Right Side: Placeholder for image / flowchart / video */}
        <div className="flex-1 w-full h-[300px] bg-white  border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-center">
          <img className='rounded-2xl border border-gray-200 shadow-lg ' src='/assets/Images/HomePreview.jpeg'></img>
        </div>
      </div>
    </section>
  );
};

export default IssuerSection;
