import React from 'react';
import { INDUSTRIES } from '../constants';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industries We Serve</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-blue-100 group text-center h-40"
            >
              <div className="text-slate-400 mb-4 group-hover:text-blue-600 transition-colors group-hover:scale-110 duration-300">
                {industry.icon}
              </div>
              <span className="font-medium text-slate-700 text-sm group-hover:text-slate-900">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};