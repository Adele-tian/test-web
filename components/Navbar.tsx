
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-light px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-warm-primary rounded-full flex items-center justify-center">
            <i className="fas fa-fire text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800">AMBER <span className="text-warm-primary">HEARTH</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 uppercase tracking-widest">
          <a href="#gallery" className="hover:text-warm-primary transition-colors">Gallery</a>
          <a href="#assistant" className="hover:text-warm-primary transition-colors">Design AI</a>
          <a href="#about" className="hover:text-warm-primary transition-colors">About</a>
        </div>
        <button className="bg-warm-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#a67245] transition-all shadow-md">
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
