import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';

const TechnologyStackSection = () => {
  const features = [
    {
      title: 'Multi-Chain Infrastructure',
      desc: 'Interact seamlessly across Ethereum, Polygon, Solana, and more — without compromising performance or security.',
      icon: <DeviceHubIcon fontSize="medium" className="text-green-600" />,
    },
    {
      title: 'Smart Contract Transparency',
      desc: 'All smart contracts are open, verifiable, and follow best practices for gas efficiency and audit readiness.',
      icon: <VisibilityIcon fontSize="medium" className="text-blue-600" />,
    },
    {
      title: 'Custodial & Non-Custodial Options',
      desc: 'Choose full control or delegate asset management securely — with support for MPC wallets and direct wallet connections.',
      icon: <AccountBalanceWalletIcon fontSize="medium" className="text-green-600" />,
    },
    {
      title: 'Audits & Security Standards',
      desc: 'Regular smart contract audits, GDPR compliance, and infrastructure built to meet institutional-grade standards.',
      icon: <SecurityIcon fontSize="medium" className="text-blue-600" />,
    },
  ];
  return (
    <section className="w-full px-6 py-16 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="brand-section-title mb-4 bg-clip-text">
          Unified Access to All Major Blockchains
        </h2>
        <p className="brand-description mb-10 max-w-2xl">
          Built for developers, institutions, and innovators.Our infrastructure is designed to be flexible, secure, and future-proof.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – features */}
          {/* Small screens: horizontal swipe */}
          <div className="flex sm:hidden overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-72 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition snap-center"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h4 className="brand-card-title text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Medium & up: grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h4 className="brand-card-title text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
            ))}
          </div>

          {/* Right – Crypto chains Lottie */}
          <div className="flex items-center justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/Crypto%20chains/Crypto%20chains.json"
              style={{ height: '350px', width: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
