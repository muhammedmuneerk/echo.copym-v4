import React from 'react';

const HowItWorks = () => {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(135deg,#06140b 0%, #063a19 25%, #0b7c2c 55%, #063a19 80%, #06140b 100%)',
        backgroundSize: '400% 400%'
      }}
      className="relative w-full py-24 flex justify-center items-center overflow-hidden text-white animate-gradient"
    >
      {/* Shining sweep overlay */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full animate-sweep" />

      <div className="w-11/12 max-w-3xl border-4 border-dashed border-white/30 rounded-2xl p-12 text-center backdrop-blur-md bg-white/5">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-gray-200/90">
          This area is reserved for a future explanation of how the platform works.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
