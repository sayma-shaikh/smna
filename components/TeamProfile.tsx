import React from "react";
import { useParams } from "react-router-dom";
import { TEAM } from "../constants";
import { Mail, Phone, CheckCircle } from "lucide-react";

export const TeamProfile = () => {
  const { id } = useParams();
  const member = TEAM.find(
    (m) => m.name.replace(/\s+/g, "-").toLowerCase() === id
  );

  if (!member) return <p className="text-center py-20">Profile not found :(</p>;
return (
  <section className="py-20">
    <div className="max-w-5xl mx-auto px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10">

        {/* ---------- LEFT + RIGHT WRAPPER ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-10 items-start">

          {/* ---------- LEFT SIDE ---------- */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={member.image}
              className="w-40 h-40 rounded-full object-cover shadow-xl mb-6"
              alt={member.name}
            />

            <h1 className="text-3xl font-bold">{member.name}</h1>

            <p className="text-slate-600 mt-1 font-medium">
              CA, CISA, ISA, PMP, ISO 27001 LA, ISO 9001 LA
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-blue-600"
              >
                <Mail className="w-5 h-5" /> {member.email}
              </a>
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-green-600"
              >
                <Phone className="w-5 h-5" /> {member.phone}
              </a>
            </div>
          </div>

          {/* ---------- RIGHT SIDE ---------- */}
          <div>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {member.about}
            </div>

            {member.expertise && (
              <>
                <h3 className="text-xl font-semibold mt-10 mb-4">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {member.expertise.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};