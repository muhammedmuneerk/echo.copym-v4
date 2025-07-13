import React from 'react';

const SecurityFeaturesSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(135deg,#06140b 0%, #063a19 25%, #0b7c2c 55%, #063a19 80%, #06140b 100%)',
        backgroundSize: '400% 400%'
      }}
      className="relative w-full px-6 py-24 text-white overflow-hidden animate-gradient"
    >
      {/* Shining sweep overlay */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full animate-sweep" />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="brand-section-title text-white mb-4">
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
              className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="brand-card-title text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Placeholder */}
        <div className="mt-12 h-64 bg-white/15 backdrop-blur-md border border-dashed border-white/40 rounded-xl flex items-center justify-center text-gray-100 text-center">
          Placeholder for security infographic / animation / badge logos
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;
