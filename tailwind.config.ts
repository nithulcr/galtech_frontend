import { DM_Sans, Roboto } from 'next/font/google';
import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
        sans: ['var(--font-roboto)', 'sans-serif'], // Or dm-sans as base
      },
      
      

     
      
    },
  },
  plugins: [
    // require('tailwind-scrollbar'), // Removed for now to avoid error if not installed
  ],
};
export default config;
