import React from 'react';
import { FaLinkedin, FaBehance, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex space-x-8">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/case-studies" className="hover:text-gray-300">Case Studies</a>
          <a href="/testimonials" className="hover:text-gray-300">Testimonials</a>
          <a href="/recent-work" className="hover:text-gray-300">Recent work</a>
          <a href="/contact" className="hover:text-gray-300">Get In Touch</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-gray-300" />
          </a>
          <a href="https://behance.com" target="_blank" rel="noopener noreferrer">
            <FaBehance className="w-6 h-6 hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:text-gray-300" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">Your Name Here</h1>
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-md text-lg 
              hover:bg-green-700 transition-all duration-300 shadow-lg 
              hover:shadow-green-600/50">
              Let's get started →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-700">
              <img 
                src="https://placekitten.com/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Worked With Section */}
      <div className="container mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-gray-400 mb-12 text-center">Worked with</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 
          items-center justify-items-center opacity-50">
          <img src="https://placehold.co/200x80/333/FFF?text=ClickUp" alt="ClickUp" className="h-8" />
          <img src="https://placehold.co/200x80/333/FFF?text=Dropbox" alt="Dropbox" className="h-8" />
          <img src="https://placehold.co/200x80/333/FFF?text=Paychex" alt="Paychex" className="h-8" />
          <img src="https://placehold.co/200x80/333/FFF?text=Elastic" alt="Elastic" className="h-8" />
          <img src="https://placehold.co/200x80/333/FFF?text=Stripe" alt="Stripe" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero; 