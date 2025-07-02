

'use client';

import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook size={20} strokeWidth={2} />, href: 'https://www.facebook.com/galtech.school', label: 'Facebook' },
  { icon: <Twitter size={20} strokeWidth={2} />, href: 'https://twitter.com/galtech_school', label: 'Twitter' },
  { icon: <Linkedin size={20} strokeWidth={2} />, href: 'https://www.linkedin.com/company/90389697/', label: 'LinkedIn' },
  { icon: <Youtube size={20} strokeWidth={2} />, href: 'https://www.youtube.com/@galtechlearninghub', label: 'YouTube' },
  { icon: <Instagram size={20} strokeWidth={2} />, href: 'https://www.instagram.com/galtech.school/', label: 'Instagram' },
];

const SocialIcons = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col items-center gap-2 p-2 bg-red-100/70 rounded-l-lg shadow-lg backdrop-blur-sm">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          className="social-icon group md:w-9 md:h-9 w-6 h-8 flex items-center justify-center text-gray-700 hover:bg-gradient-to-tr from-red-400 to-red-200 transition-all duration-300 rounded"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
