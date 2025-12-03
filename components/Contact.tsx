import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    helpType: 'General Inquiry',
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request. We will contact you shortly.');
  };

  return (
    <section id="contact" className="bg-blue-900 text-white">
      <div className="flex flex-col lg:flex-row">
        
        {/* Contact Info Side */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-blue-900 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's start a conversation.</h2>
          <p className="text-blue-200 mb-12 max-w-md">
            Whether you need audit assistance, tax planning, or strategic consulting, our team is ready to assist.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-400 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                <p className="text-blue-200 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-400 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                <p className="text-blue-200">{CONTACT_INFO.phone.join(', ')}</p>
                <p className="text-blue-400 text-sm mt-1">{CONTACT_INFO.timing}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-400 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                <p className="text-blue-200">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 bg-white text-slate-800 p-12 lg:p-24">
          <h3 className="text-2xl font-bold mb-8">Request Call Back</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
              <select 
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
              >
                <option>Select the services</option>
                <option>Business Advisory</option>
                <option>Accounting & Tax advisory</option>
                <option>IT Advisory</option>
                <option>ISO Advisory</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
                placeholder="+91..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
                placeholder="john@example.com"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              SUBMIT REQUEST <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};