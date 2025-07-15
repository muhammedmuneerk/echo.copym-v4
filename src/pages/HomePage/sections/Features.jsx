import React from 'react';
import { Shield, Zap, TrendingUp, Users, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your investments are protected with industry-leading security measures and SIPC insurance.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades in milliseconds with our advanced trading infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Analytics',
    description: 'Make informed decisions with AI-powered market insights and portfolio optimization.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Learn from successful investors and share strategies with our growing community.',
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access stocks, ETFs, and crypto from markets around the world, all in one platform.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized by industry leaders for innovation and user experience excellence.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title text-black mb-4">
            Invest Like An Outlier
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design to give you everything you need to build wealth and achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-green-600' : 'bg-blue-600'} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="brand-card-title text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}