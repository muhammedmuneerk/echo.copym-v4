import React from 'react';

export default function PhoneMockup({ screenshot, alt }) {
  return (
    // --- CHANGE IS HERE ---
    // Reduced size from w-72 h-[580px] to w-64 h-[520px] for a smaller footprint.
    <div className="w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
      <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
        <img
          src={screenshot}
          alt={alt}
          className="absolute top-0 left-0 w-full h-auto"
        />
        {/* <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-1">
          <img
            src="/assets/Images/iphone-statusbar.png"
            alt="Status Bar"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </div>
  );
}