import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl z-0"></div>

              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Professional Office" 
                className="relative z-10 w-full rounded-lg shadow-xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg z-20 max-w-xs hidden md:block">
                <p className="text-slate-800 font-bold text-lg mb-1">Affiliated with</p>
                <p className="text-slate-500 text-sm">RBI, CAG, & Cooperative Societies</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h4 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partners in your Growth Journey</h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Shah Mulewa & Associates is a young and dynamic firm comprising of 4 Partners having rich Corporate experience in Accounting, Taxation, Audit, and Consulting.
              </p>
              <p>
                We employ highly motivated staff and train them to sharpen their skills...
              </p>
              <p>
                Since each business is inherently different, we tailor our services...
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {['End-to-End Services', 'Tailored Solutions', 'Professional Ethos', 'Single Window Solution'].map((item, i) => (
                <div key={i} className="flex items-center text-slate-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
