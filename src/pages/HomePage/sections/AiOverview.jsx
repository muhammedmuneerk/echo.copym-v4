import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GavelIcon from '@mui/icons-material/Gavel';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const AiOverview = () => {
  const features = [
    {
      title: 'Contextual Chatbots',
      icon: <SmartToyIcon className="text-green-600" />,
      description:
        'Engage your users with AI-driven chatbots that understand context, intent, and deliver human-like responses.'
    },
    {
      title: 'Real-Time Analytics',
      icon: <QueryStatsIcon className="text-blue-600" />,
      description:
        'Our AI engine continuously analyses on-chain & off-chain data streams, surfacing actionable insights in real-time.'
    },
    {
      title: 'Predictive Modelling',
      icon: <AutoGraphIcon className="text-green-600" />,
      description:
        'Leverage machine-learning models to forecast market movements, token demand, and investor behaviour.'
    },
    {
      title: 'Automated Compliance',
      icon: <GavelIcon className="text-blue-600" />,
      description:
        'Smart policies monitor transactions 24/7 to flag anomalies and enforce KYC/AML requirements automatically.'
    },
    {
      title: 'Personalised Dashboards',
      icon: <DashboardCustomizeIcon className="text-green-600" />,
      description:
        'Each stakeholder sees AI-curated KPIs, alerts, and recommendations tailored to their unique portfolio.'
    },
    {
      title: 'Low-Code Integrations',
      icon: <IntegrationInstructionsIcon className="text-blue-600" />,
      description:
        'Plug-and-play widgets & APIs let you embed powerful AI capabilities into your own products within minutes.'
    }
  ];

  return (
    <section className="w-full px-6 py-16 bg-green-50">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="brand-section-title text-center text-gray-900 mb-4">AI-Powered Overview</h2>
        <p className="brand-description text-center text-gray-700 max-w-3xl mx-auto mb-14">
          From conversational agents to predictive analytics, our platform weaves artificial intelligence into every
          layer of the tokenization journey — unlocking smarter, faster and more secure experiences for issuers and
          investors alike.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – feature cards */}
          {/* Small screens: horizontal swipe list */}
          <div className="flex sm:hidden overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex-none w-72 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition snap-center"
              >
                <div className="mb-3 text-2xl">{feature.icon}</div>
                <h4 className="brand-card-title text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Medium & up: grid layout */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
              <h4 className="brand-card-title text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

          {/* Right – Lottie animation & CTA */}
          <div className="flex flex-col items-center justify-center w-full">
            <Player
              autoplay
              loop
              src="/assets/lottie/simple ai pulse/simple ai pulse.json"
              style={{ height: '350px', width: '350px' }}
            />

            <Link
              to="/agent"
              className="mt-8 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
          >
            Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiOverview; 