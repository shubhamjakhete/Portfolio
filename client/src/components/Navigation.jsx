import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
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
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/shubham-jakhete" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
              </a>
              <a href="https://github.com/shubhamjakhete" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation; 