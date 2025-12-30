
import React from 'react';
import { HouseDesign } from '../types';

interface HouseCardProps {
  design: HouseDesign;
}

const HouseCard: React.FC<HouseCardProps> = ({ design }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={design.imageUrl} 
          alt={design.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {design.tags.map(tag => (
            <span key={tag} className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase px-2 py-1 rounded text-gray-600 tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{design.title}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {design.description}
        </p>
        <div className="space-y-2">
          {design.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-gray-400">
              <i className="fas fa-check text-warm-primary mr-2"></i>
              {feature}
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-3 border-2 border-warm-primary text-warm-primary font-bold rounded-lg hover:bg-warm-primary hover:text-white transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HouseCard;
