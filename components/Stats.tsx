import React, { useEffect, useState } from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    STATS.forEach((stat, i) => {
      const finalValue = parseInt(stat.value);
      const duration = 1200;
      const steps = 60;
      const increment = finalValue / steps;

      let current = 0;
      let step = 0;

      const counter = setInterval(() => {
        step++;
        current += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(Math.round(current), finalValue);
          return updated;
        });

        if (step >= steps) {
          // Lock final value cleanly
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = finalValue;
            return updated;
          });
          clearInterval(counter);
        }
      }, duration / steps);
    });
  }, []);

  return (
    <div
      className="
        relative z-20 w-full
        bg-[#0F1A2A] text-white 
        py-12 shadow-2xl rounded-xl
        translate-y-[-70px] md:translate-y-[-100px]
      "
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-700/60">
          {STATS.map((stat, index) => {
            const numericPart = parseInt(stat.value).toString();
            const suffix = stat.value.replace(numericPart, "");

            return (
              <div key={index} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {counts[index]}
                  {suffix}
                </div>
                <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
