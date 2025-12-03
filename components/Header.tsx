import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { HashLink } from 'react-router-hash-link';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      {/* ---- Top utility strip ---- */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href={`tel:${CONTACT_INFO.phone[0]}`} className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-2" />
              {CONTACT_INFO.phone.join(' / ')}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-2" />
              {CONTACT_INFO.email}
            </a>
          </div>
          <span className="opacity-75">{CONTACT_INFO.timing}</span>
        </div>
      </div>

      {/* ---- Main Navigation ---- */}
      <nav
        className={`w-full ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4 md:py-5'
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <HashLink smooth to="/#home" className="flex items-center group">
            <div className="font-bold text-2xl tracking-tighter text-slate-800 group-hover:text-blue-900 transition-colors">
              SMNA<span className="text-blue-600">.</span>
            </div>
            <div className="hidden lg:block ml-3 border-l border-slate-300 pl-3 text-xs uppercase tracking-widest text-slate-500">
              Chartered<br />Accountants
            </div>
          </HashLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <HashLink
                smooth
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </HashLink>
            ))}
            <HashLink
              smooth
              to="/#contact"
              className="bg-blue-900 text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md"
            >
              Enquire
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <HashLink
                  smooth
                  key={link.name}
                  to={link.href}
                  className="text-slate-700 font-medium hover:text-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </HashLink>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-2">Contact Us</p>
                <a href={`tel:${CONTACT_INFO.phone[0]}`} className="block text-slate-700 mb-2 text-sm">{CONTACT_INFO.phone[0]}</a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="block text-slate-700 text-sm">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
