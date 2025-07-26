import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const cityRef = useRef(null);
  
  // Carousel images
  const carouselImages = [
    '/assets/Images/carousel/floating-city.png',
    // '/assets/Images/carousel/carbon-credits.png',
    // '/assets/Images/carousel/goldbar.png',
    // '/assets/Images/carousel/art.png',
    '/assets/Images/carousel/floating-green-city-3.png',
    '/assets/Images/carousel/floating-glod-city-1.png',
    '/assets/Images/carousel/floating-art-city-1.png',
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Load Vanta.js scripts dynamically
    const loadVantaScripts = async () => {
      // Load Three.js first
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        document.head.appendChild(threeScript);
        
        await new Promise((resolve) => {
          threeScript.onload = resolve;
        });
      }

      // Load Vanta Clouds
      if (!window.VANTA) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js';
        document.head.appendChild(vantaScript);
        
        await new Promise((resolve) => {
          vantaScript.onload = resolve;
        });
      }

      // Initialize Vanta effect
      if (vantaRef.current && window.VANTA) {
        vantaEffect.current = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00
        });
      }
    };

    loadVantaScripts();

    // 3D Animation for floating city
    const animateCity = () => {
      if (cityRef.current) {
        const time = Date.now() * 0.001;
        const floatY = Math.sin(time * 0.5) * 10;
        const rotateX = Math.sin(time * 0.3) * 2;
        const rotateY = Math.cos(time * 0.2) * 3;
        const scale = 1 + Math.sin(time * 0.4) * 0.02;
        
        cityRef.current.style.transform = `
          translateY(${floatY}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(${scale})
        `;
      }
      requestAnimationFrame(animateCity);
    };

    animateCity();
    
    // Carousel image rotation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // Change image every 2 seconds

    // Cleanup
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      clearInterval(imageInterval);
    };
  }, [carouselImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Vanta Clouds Background */}
      <div 
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Floating City Image Layer with 3D Animation */}
      <div
        ref={cityRef}
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 2,
          opacity: 0.9,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          marginTop: '2.5rem'
        }}
      >
        {carouselImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="carousel"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-black/20"
        style={{ zIndex: 3 }}
      />

      {/* Text Content Layer */}
      <div 
        className="relative flex items-center justify-center mt-20 min-h-screen px-4 sm:px-6 lg:px-12"
        style={{ zIndex: 4 }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* <h1 className="brand-title mb-6">
            <span
              className="text-white drop-shadow-2xl"
              style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}
            >
              Unlock Exclusive Assets, Invest With{' '}
            </span>
            <span
              className="text-green-400 drop-shadow-2xl"
              style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}
            >
              Confidence
            </span>
          </h1>

          <p className="text-xl text-white/95 mb-8 mt-4 max-w-2xl mx-auto drop-shadow-lg font-medium">
            Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 mt-32 pt-32 justify-center mb-12">
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white btn-gradient shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white btn-gradient-secondary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
          
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <video
              src="/assets/videos/how-it-works.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
