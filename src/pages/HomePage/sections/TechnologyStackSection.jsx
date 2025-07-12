import React from 'react';

const TechnologyStackSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="brand-section-title text-gray-900 mb-4">
          Unified Access to All Major Blockchains
        </h2>
        <p className="brand-description mb-10 max-w-2xl">
          Built for developers, institutions, and innovators — our infrastructure is designed to be flexible, secure, and future-proof.
        </p>

        {/* Technology Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="brand-card-title text-gray-800 mb-2">Multi-Chain Infrastructure</h4>
            <p className="text-gray-600 text-sm">
              Interact seamlessly across Ethereum, Polygon, Solana, and more — without compromising performance or security.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="brand-card-title text-gray-800 mb-2">Smart Contract Transparency</h4>
            <p className="text-gray-600 text-sm">
              All smart contracts are open, verifiable, and follow best practices for gas efficiency and audit readiness.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="brand-card-title text-gray-800 mb-2">Custodial & Non-Custodial Options</h4>
            <p className="text-gray-600 text-sm">
              Choose full control or delegate asset management securely — with support for MPC wallets and direct wallet connections.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h4 className="brand-card-title text-gray-800 mb-2">Audits & Security Standards</h4>
            <p className="text-gray-600 text-sm">
              Regular smart contract audits, GDPR compliance, and infrastructure built to meet institutional-grade standards.
            </p>
          </div>
        </div>

        {/* Optional Graphic / Badge / Chain Logos */}
        <div className="mt-12 h-56 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-500 text-center">
          Placeholder for blockchain logos, audit badges, or chain flow diagram
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
