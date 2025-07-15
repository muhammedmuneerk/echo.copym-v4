import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Capsule Navbar with Gradient Border */}
      <header className="absolute top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
        {/* Outer wrapper with gradient border */}
        <div className="w-[95%] max-w-6xl rounded-full bg-gradient-to-r from-[#15a36e] to-[#255f99] p-[2px] pointer-events-auto shadow-xl">
          
          {/* Inner container with blur and background */}
          <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-1 flex items-center justify-between w-full">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/copym/png/Copym-01-1.png"
                alt="COPYM"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/tokenization"
                className="font-semibold bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text hover:opacity-80 transition"
              >
                Tokenization
              </Link>
              <Link
                to="/marketplace"
                className="font-semibold bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text hover:opacity-80 transition"
              >
                Marketplace
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-black transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 px-4 md:hidden">
          <div className="bg-white rounded-2xl shadow-xl py-4 px-6 space-y-4 text-center">
            <Link
              to="/tokenization"
              className="block text-gray-700 font-medium hover:text-black transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenization
            </Link>
            <Link
              to="/marketplace"
              className="block text-gray-700 font-medium hover:text-black transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
          </div>
        </div>
      )}

      {/* Spacer to avoid content overlap */}
      <div className="h-20 md:h-28" />
    </>
  );
}
