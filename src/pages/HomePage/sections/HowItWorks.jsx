import React from 'react';
import Flowchart from './flowchart';

const HowItWorks = () => {
  return (
    <section className="w-full py-24 flex justify-center items-center bg-green-50 text-white">
      <div className="w-full max-w-screen-xl px-4">
        <Flowchart />
      </div>
    </section>
  );
};

export default HowItWorks;
