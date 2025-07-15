import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const SecurityFeaturesSection = () => {
  const features = [
    {
      title: 'MPC Wallet Infrastructure',
      desc: 'Secure custody with Multi-Party Computation — no single point of failure.',
      icon: <VpnKeyIcon fontSize="medium" className="text-black" />,
    },
    {
      title: 'Blockchain Transparency',
      desc: 'Immutable transactions and audit trails recorded directly on-chain.',
      icon: <VisibilityIcon fontSize="medium" className="text-black" />,
    },
    {
      title: 'End-to-End Encryption',
      desc: 'Military-grade encryption to protect your data at rest and in transit.',
      icon: <LockIcon fontSize="medium" className="text-black" />,
    },
    {
      title: 'Access Control & Whitelisting',
      desc: 'Only verified, permissioned participants can interact with assets.',
      icon: <VerifiedUserIcon fontSize="medium" className="text-black" />,
    },
    {
      title: 'Audit-Ready Architecture',
      desc: 'Built with compliance in mind — easily integrate with KYC, AML, and reporting tools.',
      icon: <FactCheckIcon fontSize="medium" className="text-black" />,
    },
    {
      title: 'Uptime & Redundancy',
      desc: 'Highly available infrastructure with automated backups and failover.',
      icon: <CloudDoneIcon fontSize="medium" className="text-black" />,
    },
  ];
  return (
    <section
      // style={{
      //   backgroundImage:
      //     'linear-gradient(135deg,#06140b 0%, #063a19 25%, #0b7c2c 55%, #063a19 80%, #06140b 100%)',
      //   backgroundSize: '400% 400%'
      // }}
      className="relative w-full px-6 py-24 bg-white overflow-hidden"
    >
      {/* Shining sweep overlay */}
      {/* <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full animate-sweep" /> */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="brand-section-title mb-4 bg-clip-text">
          Enterprise-Grade Security, Built for Web3
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Your assets are protected with cutting-edge security standards trusted by institutions.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – features */}
          {/* Small screens: horizontal swipe */}
          <div className="flex sm:hidden overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex-none w-72 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition snap-center"
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h4 className="brand-card-title text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Medium & up: grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h4 className="brand-card-title text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right – Lottie animation */}
          <div className="flex items-center justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/CyberSecurity%20Net%20lock/CyberSecurity%20Net%20lock.json"
              style={{ height: '450px', width: '450px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;
