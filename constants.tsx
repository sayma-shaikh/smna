import React from 'react';
import { 
  Factory, 
  Landmark, 
  Utensils, 
  Truck, 
  ArrowRightLeft, 
  Film, 
  Monitor, 
  Building2, 
  Briefcase, 
  ShoppingCart 
} from 'lucide-react';
import { TeamMember, ServiceItem, IndustryItem, StatItem, ValueItem } from './types';



export const NAV_LINKS = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Values', href: '/#values' },
  { name: 'Services', href: '/#services' },
  { name: 'Industries', href: '/#industries' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
];

// ------------------ CONTACT INFO ------------------
export const CONTACT_INFO = {
  phone: ['+91-8879300061', '8879000062'],
  email: 'office@smna.in',
  address: 'Shop No. J-9, Opp Sai Service, D. S. Road, Gandhi Nagar, Worli, Mumbai – 400 018.',
  timing: 'Monday - Saturday',
};

// ------------------ STATS ------------------
export const STATS: StatItem[] = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Years Combined Exp.' },
  { value: '150+', label: 'Happy Clients' },
  { value: '100%', label: 'Commitment' },
];

// ------------------ VALUES ------------------
export const VALUES: ValueItem[] = [
  {
    title: 'Personalized Approach',
    description: 'We cater to all our clients with partner-driven personalized attention and meet their unique business challenges head-on.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Nimble Approach',
    description: 'We understand the dynamic nature of business. We adopt a nimble approach to amend our scope and services based on your changing needs.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Excellence & Satisfaction',
    description: 'We continuously focus on quality and deploy best practices. We believe client satisfaction is of utmost importance and constantly strive for it.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Simplicity with Speed',
    description: 'We believe in providing simple, effective solutions to clients efficiently, removing complexity from your compliance and financial growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Trust & Transparency',
    description: "We aim to protect our client's interests. We adopt transparent practices and adhere to high ethical standards thus ensuring confidentiality and our own credibility.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500',
  },
];

// ------------------ SERVICES ------------------
export const SERVICES: ServiceItem[] = [
  { 
    title: 'Tax Audit & Assurance Advisory',
    items: [
      'Statutory Audit',
      'Internal / Concurrent Audit',
      'Enterprise Risk Management',
      'Transfer Pricing Audit',
      'Forensic & Investigations',
      'IFC Testing',
      'SOX reviews',
      'Due diligence',
      'Process Audits',
    ],
  },
  { 
    title: 'Information Technology Advisory',
    items: [
      'IT Audits',
      'Data Privacy consulting',
      'Cybersecurity reviews',
      'SSAE 18 implementation & reviews',
      'VAPT (Ethical Hacking)',
      'Outsourced CISO services',
      'Software testing',
      'BCP & DR reviews',
    ],
  },
  { 
    title: 'Governance Risk & Compliance (GRC)',
    items: [
      'Vendor Infosec due diligence and audits',
      'Liaison Partner / client audits',
      'Cybersecurity Liaison regulatory and statutory audits',
      'ISO document management and updation',
      'BCP / DR testing and reporting',
      'Outsourced Trainings',
    ],
  },
  { 
    title: 'ISO Advisory Implementation & Audit',
    items: [
      'ISO 27001 – Information security',
      'ISO 20000 – IT Service management',
      'ISO 22301 – Business Continuity Management',
      'ISO 9001 – Quality',
      'ISO 14001 – Environment',
      'ISO 45001 – Occupational health & Safety',
      'ISO 22000 – Food Safety',
    ],
  },
  { 
    title: 'Secretarial & Company Law Advisory',
    items: [
      'Incorporation / winding up services',
      'MCA / ROC compliances',
    ],
  },
  { 
    title: 'Accounting & Transaction Advisory',
    items: [
      'Bookkeeping & Accounting',
      'Payroll Processing',
      'Fixed Asset Management',
      'Financial Reporting',
      'Management MIS',
      'Virtual CFO Services',
    ],
  },
];

// ------------------ TEAM ------------------
export const TEAM: TeamMember[] = [
  {
    name: 'Prateek Sharma',
    qualifications: 'CA, CISA, ISA, PMP, ISO 27001 LA, ISO 9001 LA, Data Privacy Auditor',
    email: 'prateek@smna.in',
    phone: '9819291965',
    image: '/assets/prateek-sharma.jpg',
    about: `
Prateek is a seasoned Audit & Consulting Professional. He is a CA, CISA, ISA, PMP, 
ISO 27001 LA, ISO 9001 LA and a Project Management Professional. Additionally, he 
is an ITIL V3 Foundation Professional, Certified Internal Quality Auditor, AMFI certified, 
and holds multiple certifications in Derivatives and Currency Futures.

He has 15 years of rich experience working with Mutual Funds, OTT platforms, Media 
& Broadcasting, Software, BFSI, and consulting roles.

Before joining as Senior Partner, he served as Vice President (Finance) at a leading 
Media agency. He previously worked at SBI Mutual Fund as Senior Manager – Internal 
Audit, managing audits across multiple operations and strategic assignments.

He brings strong expertise in internal audits, IT process reviews, IS audits, SSAE 16, 
system implementation consulting, ISO frameworks, SOX/IFC controls testing, vendor 
risk management, revenue assurance and commercial operations.

He has extensive experience engaging with diverse stakeholders including industry 
associations, regulators, vendors, customers, and senior management.
    `,
    expertise: [
      "Internal Audit & Management Audit",
      "IT Process Reviews & IS Audit",
      "SSAE 16 & System Review",
      "ISO 27001 & 9001 Reviews",
      "SOX & IFC Testing",
      "Process Consulting",
      "Vendor Risk Management",
      "Commercial Operations & Revenue Assurance"
    ]
  },

  {
    name: 'Deepak Mulewa',
    qualifications: 'FCA, BCOM, ISA',
    email: 'deepak@smna.in',
    phone: '9773482548',
    image: '/assets/deepak.jpg',
    about: `
Deepak is a founding partner at the firm with 11 years of experience in Direct & 
Indirect Tax, Bank/NBFC audits, and Co-operative Society audits.

He has been instrumental in providing solutions to complex GST and compliance 
issues. Deepak leads GST advisory, audits, due diligence reviews, and tax-related 
assignments for a wide range of clients.

He holds a Bachelor’s degree in Commerce from Mumbai University and became a 
Chartered Accountant in 2011.
    `,
    expertise: [
      "Goods & Services Tax (GST) Compliance",
      "GST Advisory & Due Diligence",
      "Income Tax Audit",
      "Co-operative Societies Audit",
      "Bank & NBFC Audit"
    ]
  },

  {
    name: 'Abhishek Shah',
    qualifications: 'FCA, BCOM, CISA',
    email: 'abhishek@smna.in',
    phone: '9833424902',
    image: '/assets/abhishek.jpg',
    about: `
Abhishek is an Accounting and Auditing professional and a subject matter expert in 
Indian GAAP and Ind AS. He is a Founder Partner at the firm.

He has over 9 years of experience in Accounting, Audit & Taxation with major 
consulting firms and corporate groups in the F&B sector.

He serves as engagement partner for statutory audits, internal audits and transaction 
advisory assignments, particularly in manufacturing, F&B and education sectors.
    `,
    expertise: [
      "Direct & Indirect Tax Advisory",
      "Accounting Advisory",
      "Auditing & Assurance",
      "Transaction Advisory"
    ]
  },

  {
    name: 'Ameen Shah',
    qualifications: 'ACA, BCOM, CISA',
    email: 'ameen@smna.in',
    phone: '9773482550',
    image: '/assets/ameen-singh.jpg',
    about: `
Ameen is a partner at the firm with nearly 11 years of experience in Audit & Assurance, 
CFO Advisory, Business Modelling and Management Reporting.

He has worked across multiple industries helping clients improve risk management, 
internal controls, governance frameworks, and financial processes.

He has handled diverse audit, risk assessment, process review and due diligence 
engagements for corporate and institutional clients.
    `,
    expertise: [
      "Audit & Assurance",
      "Risk Assessment",
      "Process & Control Review",
      "Due Diligence",
      "Revenue Assurance",
      "Management Reporting"
    ]
  }
];


// ------------------ INDUSTRIES ------------------
export const INDUSTRIES: IndustryItem[] = [
  { name: 'Manufacturing', icon: <Factory className="w-8 h-8" /> },
  { name: 'BFSI', icon: <Landmark className="w-8 h-8" /> },
  { name: 'Hospitality & Food', icon: <Utensils className="w-8 h-8" /> },
  { name: 'Logistics', icon: <Truck className="w-8 h-8" /> },
  { name: 'Trading', icon: <ArrowRightLeft className="w-8 h-8" /> },
  { name: 'Media & Entertainment', icon: <Film className="w-8 h-8" /> },
  { name: 'Software Companies', icon: <Monitor className="w-8 h-8" /> },
  { name: 'NGO & Trusts', icon: <Building2 className="w-8 h-8" /> },
  { name: 'Government / PSUs', icon: <Briefcase className="w-8 h-8" /> },
  { name: 'Retail', icon: <ShoppingCart className="w-8 h-8" /> },
];

// ------------------ GALLERY ------------------
export const GALLERY_IMAGES = [
'/assets/gal-img1.jpeg',
'/assets/gal-img2.jpeg',
'/assets/gal-img3.jpeg',
'/assets/gal-img4.jpeg',
'/assets/gal-img5.jpeg',
'/assets/gal-img6.jpeg',
'/assets/gal-img7.jpeg',
'/assets/gal-img8.jpeg',
];