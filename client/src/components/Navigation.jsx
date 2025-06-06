import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:space-x-8">
              <Link to="/" className={`hover:text-gray-300 transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`}>
                Home
              </Link>
              <Link to="/about-me" className={`hover:text-gray-300 transition-colors ${location.pathname === '/about-me' ? 'text-white' : 'text-gray-400'}`}>
                About Me
              </Link>
              <Link to="/testimonials" className={`hover:text-gray-300 transition-colors ${location.pathname === '/testimonials' ? 'text-white' : 'text-gray-400'}`}>
                Testimonials
              </Link>
              <Link to="/recent-work" className={`hover:text-gray-300 transition-colors ${location.pathname === '/recent-work' ? 'text-white' : 'text-gray-400'}`}>
                Recent work
              </Link>
              <Link to="/contact" className={`hover:text-gray-300 transition-colors ${location.pathname === '/contact' ? 'text-white' : 'text-gray-400'}`}>
                Get In Touch
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/shubham-jakhete" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors text-white" />
              </a>
              <a href="https://github.com/shubhamjakhete" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/about-me" 
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 transition-colors ${location.pathname === '/about-me' ? 'text-white' : 'text-gray-400'}`}
                  onClick={toggleMenu}
                >
                  About Me
                </Link>
                <Link 
                  to="/testimonials" 
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 transition-colors ${location.pathname === '/testimonials' ? 'text-white' : 'text-gray-400'}`}
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
                <Link 
                  to="/recent-work" 
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 transition-colors ${location.pathname === '/recent-work' ? 'text-white' : 'text-gray-400'}`}
                  onClick={toggleMenu}
                >
                  Recent work
                </Link>
                <Link 
                  to="/contact" 
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 transition-colors ${location.pathname === '/contact' ? 'text-white' : 'text-gray-400'}`}
                  onClick={toggleMenu}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation; 