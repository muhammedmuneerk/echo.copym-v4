import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Determine which nav buttons to show
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tokenization', label: 'Tokenization' },
    { path: '/marketplace', label: 'Marketplace' },
  ];
  let visibleLinks;
  if (location.pathname === '/') {
    visibleLinks = navLinks.filter(link => link.path !== '/');
  } else if (location.pathname === '/tokenization') {
    visibleLinks = navLinks.filter(link => link.path !== '/tokenization');
  } else if (location.pathname === '/marketplace') {
    visibleLinks = navLinks.filter(link => link.path !== '/marketplace');
  } else {
    visibleLinks = navLinks.filter(link => link.path !== '/');
  }

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
              {visibleLinks.map(link => (
              <Link
                  key={link.path}
                  to={link.path}
                className="font-semibold text-[#255f99] bg-clip-text hover:opacity-80 transition"
              >
                  {link.label}
              </Link>
              ))}
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
            {visibleLinks.map(link => (
            <Link
                key={link.path}
                to={link.path}
              className="block text-gray-700 font-medium hover:text-black transition"
              onClick={() => setIsMenuOpen(false)}
            >
                {link.label}
            </Link>
            ))}
          </div>
        </div>
      )}

      {/* Spacer to avoid content overlap */}
      <div className="h-20 md:h-28" />
    </>
  );
}
