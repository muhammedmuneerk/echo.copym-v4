import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
          {/* Logo */}
          <img
            loading="lazy"
            src="assets/copym/png/Copym-01-1.png"
            alt="COPYM"
            className="h-10 w-auto sm:h-16 md:h-16 object-contain"
          />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/tokenization"
              className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
            >
              Tokenization
            </Link>
            <Link
              to="/marketplace"
              className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
            >
              Marketplace
            </Link>
          </nav>

       
        

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
              >
                Invest
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
              >
                Portfolio
              </a>
              <Link
                to="/tokenization"
                className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
              >
                Tokenization
              </Link>
              <Link
                to="/marketplace"
                className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
              >
                Marketplace
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-gray-600 hover:text-black transition-colors duration-200 font-medium text-left">
                  Sign In
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}