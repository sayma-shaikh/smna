import React from 'react';
import { TEAM } from '../constants';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-50">
     <div className="container mx-auto px-10 sm:px-16 lg:px-24">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Management Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our partners bring decades of combined experience and specialized qualifications to lead your business to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => {
            const profileUrl = `/team/${member.name.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col"
              >
                {/* Image section */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-sm hover:text-blue-300 flex items-center mb-2"
>
  <Mail className="w-4 h-4 mr-2" /> Email Me
</a>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-white text-sm hover:text-blue-300 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" /> Call Me
                    </a>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-bold mb-4 uppercase tracking-wider">
                    {member.qualifications}
                  </p>

                  {/* Mobile-only contact */}
                  <div className="space-y-2 lg:hidden">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-slate-500 text-sm hover:text-blue-600 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" /> {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-slate-500 text-sm hover:text-blue-600 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" /> {member.phone}
                    </a>
                  </div>

                  {/* View Profile Button pinned to bottom */}
                  <Link
                    to={profileUrl}
                    className="mt-auto inline-block w-full py-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
