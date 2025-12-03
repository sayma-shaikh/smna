import React from 'react';
import { VALUES } from '../constants';

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-28">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              We Care About <span className="text-blue-600">You</span> & Your Business
            </h2>
          </div>

          <p className="md:w-1/3 text-slate-500 mt-4 md:mt-0 text-sm md:text-right border-l-4 border-blue-100 pl-4 md:border-l-0 md:border-r-4 md:pr-4">
            Our core values define who we are. They guide us to be a partner you can trust, not just a service provider.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl h-80 shadow-md w-full md:w-[45%] lg:w-[30%]"
            >
              <img
                src={value.image}
                alt={value.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-3 border-b-2 border-blue-500 inline-block pb-2 w-fit">
                  {value.title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {value.description}
                </p>

                <div className="mt-4 transform group-hover:translate-y-full absolute bottom-8 opacity-100 group-hover:opacity-0 transition-all duration-300">
                  <p className="text-xs uppercase tracking-widest text-blue-300">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
