import React from 'react';
import { NAV_LINKS } from '../constants';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SMNA.</h3>
            <p className="text-sm leading-relaxed mb-6">
              Shah Mulewa & Associates is a young and dynamic firm providing high-quality financial services with a focus on client satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#"><Facebook className="w-5 h-5"/></a>
              <a href="#"><Twitter className="w-5 h-5"/></a>
              <a href="#"><Linkedin className="w-5 h-5"/></a>
              <a href="#"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <HashLink smooth to={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-blue-400">Tax Advisory</a></li>
              <li><a href="#" className="hover:text-blue-400">Risk & Compliance</a></li>
              <li><a href="#" className="hover:text-blue-400">ISO Consulting</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Shah Mulewa & Associates. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
