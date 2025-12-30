
import React from 'react';
import Navbar from './components/Navbar';
import HouseCard from './components/HouseCard';
import DesignAssistant from './components/DesignAssistant';
import { INITIAL_DESIGNS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            alt="Warm House Interior" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h4 className="text-warm-primary font-bold tracking-[0.3em] uppercase mb-4 animate-in slide-in-from-bottom duration-700">The Essence of Comfort</h4>
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight animate-in slide-in-from-bottom delay-100 duration-700">
            Crafting the <span className="italic">Amber Hearth</span> of Your Dreams
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom delay-200 duration-700">
            Explore architecturally stunning designs that redefine the meaning of "home." From sun-drenched oak rooms to cozy stone fireplaces, your sanctuary awaits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in slide-in-from-bottom delay-300 duration-700">
            <a href="#gallery" className="bg-warm-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a67245] transition-all shadow-xl hover:scale-105">
              Explore Gallery
            </a>
            <a href="#assistant" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Try AI Designer
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/50 text-2xl"></i>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-warm-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Curated Inspirations</h2>
            <div className="w-24 h-1 bg-warm-primary mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our signature collections focus on tactile materials, soft palettes, and architectural harmony to create spaces that feel like a warm embrace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_DESIGNS.map(design => (
              <HouseCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>

      {/* Assistant Section */}
      <section id="assistant" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Design Your Own <br/><span className="text-warm-primary">Sanctuary</span> with AI
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Can't find exactly what you're looking for? Our custom Gemini-powered AI assistant can help you conceptualize and visualize the unique warmth you desire. 
                Describe your mood, your preferred light, and your dream materials, and let the magic happen.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-warm-light rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2">Instant Visualization</h4>
                  <p className="text-sm text-gray-500">Real-time image generation based on your unique prompts.</p>
                </div>
                <div className="p-6 bg-warm-light rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2">Expert Consultation</h4>
                  <p className="text-sm text-gray-500">Architectural advice tailored to your personal aesthetic.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <DesignAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-warm-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8 italic">"A home is not just a place, but a feeling of warmth."</h2>
          <p className="text-gray-400 mb-10 text-lg">Ready to transform your living space into a haven of tranquility?</p>
          <button className="bg-warm-primary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#a67245] transition-all shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-warm-primary rounded-full flex items-center justify-center">
              <i className="fas fa-fire text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-800 uppercase">AMBER HEARTH</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-warm-primary transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-warm-primary transition-colors"><i className="fab fa-pinterest text-xl"></i></a>
            <a href="#" className="hover:text-warm-primary transition-colors"><i className="fab fa-facebook text-xl"></i></a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Amber Hearth Designs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
