import React from 'react';

export interface TeamMember {
  name: string;
  qualifications: string;
  email: string;
  phone: string;
  image: string;
  about?: string;        // <-- add this
  expertise?: string[];  // <-- add this
}


export interface ServiceItem {
  title: string;
  description?: string;
  items: string[];
}

export interface IndustryItem {
  name: string;
  icon: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  title: string;
  description: string;
  image: string;
}
