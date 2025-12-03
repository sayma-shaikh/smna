import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex items-center
        justify-center
        overflow-hidden
        pt-32 md:pt-40 lg:pt-48    /* FIX: top padding for navbar */
        pb-[160px] md:pb-[220px]  /* space for Stats */
      "
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Professional Office"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 z-10 text-left relative">

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-block px-3 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 backdrop-blur-sm">
              <span className="text-blue-300 text-xs font-semibold tracking-wider uppercase">
                Professional Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              We care about <br />
              <span className="text-blue-400">Business & Compliance</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              A dynamic firm of Chartered Accountants offering sound financial, technical,
              and compliance-related advice to help you optimize benefits and grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                Request Call Back
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-sm font-semibold transition-all backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
