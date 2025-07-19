import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) {
      console.log('Mount ref not available');
      return;
    }

    console.log('Setting up Three.js scene...');

    // Mouse tracking
    const handleMouseMove = (event) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12); // Moved camera further back to see more of the scene

    console.log('Camera position:', camera.position);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    console.log('Renderer setup complete');

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4a90e2, 1, 100);
    pointLight.position.set(-10, 10, 10);
    scene.add(pointLight);

    console.log('Lights added to scene');

    // Load GLB model
    const loader = new GLTFLoader();
    console.log('Loading GLB model from:', '/assets/glb/abstract_shape.glb');
    
    // Add a fallback cube to ensure scene is working
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.8
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);
    console.log('Fallback cube added to scene');
    
    loader.load(
      '/assets/glb/abstract_shape.glb',
      (gltf) => {
        console.log('GLB model loaded successfully:', gltf);
        const model = gltf.scene;
        model.scale.set(60, 60, 60); // Much larger scale to test
        model.position.set(3, -1, 0); // Set initial Y position to -1 to move down
        model.castShadow = true;
        model.receiveShadow = true;
        
        console.log('Model scale set to:', model.scale);
        console.log('Model position set to:', model.position);
        
        // Remove centering code that was overriding our position
        // const box = new THREE.Box3().setFromObject(model);
        // const center = box.getCenter(new THREE.Vector3());
        // model.position.sub(center);
        
        console.log('Model added to scene at position:', model.position);
        
        // Remove fallback cube and add the real model
        scene.remove(cube);
        scene.add(model);
        modelRef.current = model;

        // GSAP animations
        gsap.fromTo(model.rotation, 
          { y: 0 },
          { 
            y: Math.PI * 2, 
            duration: 20, 
            ease: "none", 
            repeat: -1 
          }
        );

        // Remove floating animation and add cursor following
        // gsap.fromTo(model.position,
        //   { y: -0.5 },
        //   {
        //     y: 0.5,
        //     duration: 2,
        //     ease: "power2.inOut",
        //     yoyo: true,
        //     repeat: -1
        //   }
        // );

        // Initial entrance animation
        gsap.fromTo(model.scale,
          { x: 0, y: 0, z: 0 },
          {
            x: 60, y: 60, z: 60,
            duration: 1.5,
            ease: "back.out(1.7)"
          }
        );

        console.log('GSAP animations applied');
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
        console.log('Keeping fallback cube due to GLB loading error');
        
        // Animate the fallback cube instead
        gsap.fromTo(cube.rotation, 
          { y: 0 },
          { 
            y: Math.PI * 2, 
            duration: 10, 
            ease: "none", 
            repeat: -1 
          }
        );

        gsap.fromTo(cube.position,
          { y: -0.5 },
          {
            y: 0.5,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          }
        );
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Cursor following animation - set position directly instead of using GSAP
      if (modelRef.current) {
        const targetX = (mouseRef.current.x * 1.5) + 2.2; // Reduced offset from 2.5 to 2.2
        const targetY = (mouseRef.current.y * 1) - 3; // Decreased multiplier from 3 to 1 for less range
        
        // Set position directly for smoother performance
        modelRef.current.position.x = targetX;
        modelRef.current.position.y = targetY;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    console.log('Animation loop started');

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      console.log('Cleaning up Three.js scene');
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Container */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-100 mix-blend-multiply">
            <img 
              src="/assets/images/cover.png" 
              alt="Background" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:-mt-24">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Institutional-Grade Asset Tokenization Platform
              </div>

              <h1 className="brand-title text-black mb-6 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
                Tokenize Real-World Assets{' '}
                <span className="relative bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
                  with Institutional-Grade Security
                </span>
              </h1>

              <p className="brand-description mb-8 max-w-lg mx-auto lg:mx-0">
                Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Primary Button – Full gradient fill */}
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white btn-gradient"
                >
                  Start Investing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                {/* Secondary Button – Muted gradient fill */}
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white btn-gradient-secondary">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-gray-500">
                <div>
                  <div className="font-semibold text-black text-lg">500K+</div>
                  <div>Active Users</div>
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">$2.5B+</div>
                  <div>Assets Managed</div>
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">15.2%</div>
                  <div>Avg. Returns</div>
                </div>
              </div>
            </div>

            {/* Right Content - Three.js 3D Model */}
            <div className="flex items-center justify-center overflow-hidden">
              <div 
                ref={mountRef} 
                className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
              />
            </div>
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
              className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
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
            <button
              onClick={() => setVideoOpen(false)}
              className="mt-4 px-6 py-2 bg-white text-black font-medium rounded shadow hover:bg-gray-100 focus:outline-none absolute left-1/2 transform -translate-x-1/2 bottom- -12"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}