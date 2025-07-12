import React from 'react';

const SecurityFeaturesSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Enterprise-Grade Security, Built for Web3
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Your assets are protected with cutting-edge security standards trusted by institutions.
        </p>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'MPC Wallet Infrastructure',
              desc: 'Secure custody with Multi-Party Computation — no single point of failure.',
            },
            {
              title: 'Blockchain Transparency',
              desc: 'Immutable transactions and audit trails recorded directly on-chain.',
            },
            {
              title: 'End-to-End Encryption',
              desc: 'Military-grade encryption to protect your data at rest and in transit.',
            },
            {
              title: 'Access Control & Whitelisting',
              desc: 'Only verified, permissioned participants can interact with assets.',
            },
            {
              title: 'Audit-Ready Architecture',
              desc: 'Built with compliance in mind — easily integrate with KYC, AML, and reporting tools.',
            },
            {
              title: 'Uptime & Redundancy',
              desc: 'Highly available infrastructure with automated backups and failover.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Placeholder */}
        <div className="mt-12 h-64 bg-gray-800 border border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-500 text-center">
          Placeholder for security infographic / animation / badge logos
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;
