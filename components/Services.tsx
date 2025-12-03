import React from 'react';
import { SERVICES } from '../constants';
import { Briefcase, ShieldCheck, FileText, BarChart3, Globe, Lock, Check } from 'lucide-react';

const getIconForService = (index: number) => {
  const icons = [ShieldCheck, Lock, Globe, FileText, Briefcase, BarChart3];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-28">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Comprehensive Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            In-Depth Services
          </h2>

          <p className="text-slate-600">
            We go beyond the basics. Our detailed approach ensures every aspect of your financial and
            regulatory needs is covered with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white p-8 rounded-lg shadow-sm
                hover:shadow-2xl transition-all duration-300
                border-t-4 border-t-transparent hover:border-t-blue-600
                flex flex-col h-full
              "
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors mr-4">
                  {getIconForService(index)}
                </div>

                <h3 className="text-xl font-bold text-slate-800 leading-tight">
                  {service.title}
                </h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-slate-600 group-hover:text-slate-700"
                    >
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
