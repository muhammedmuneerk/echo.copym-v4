import React from 'react';

const AiOverview = () => {
  const features = [
    {
      title: 'Contextual Chatbots',
      description:
        'Engage your users with AI-driven chatbots that understand context, intent, and deliver human-like responses.'
    },
    {
      title: 'Real-Time Analytics',
      description:
        'Our AI engine continuously analyses on-chain & off-chain data streams, surfacing actionable insights in real-time.'
    },
    {
      title: 'Predictive Modelling',
      description:
        'Leverage machine-learning models to forecast market movements, token demand, and investor behaviour.'
    },
    {
      title: 'Automated Compliance',
      description:
        'Smart policies monitor transactions 24/7 to flag anomalies and enforce KYC/AML requirements automatically.'
    },
    {
      title: 'Personalised Dashboards',
      description:
        'Each stakeholder sees AI-curated KPIs, alerts, and recommendations tailored to their unique portfolio.'
    },
    {
      title: 'Low-Code Integrations',
      description:
        'Plug-and-play widgets & APIs let you embed powerful AI capabilities into your own products within minutes.'
    }
  ];

  return (
    <section className="w-full px-6 py-16 bg-white">

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="brand-section-title text-center text-gray-900 mb-4">AI-Powered Overview</h2>
        <p className="brand-description text-center text-gray-700 max-w-3xl mb-14">
          From conversational agents to predictive analytics, our platform weaves artificial intelligence into every
          layer of the tokenization journey — unlocking smarter, faster and more secure experiences for issuers and
          investors alike.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="brand-card-title text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiOverview; 