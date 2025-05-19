import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-white/10 py-4">
      <div className="container mx-auto px-6 flex items-center justify-center space-x-2">
        <span className="text-gray-400">Made with</span>
        <a 
          href="https://cursor.sh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors font-semibold"
        >
          Cursor
        </a>
      </div>
    </footer>
  );
};

export default Footer; 