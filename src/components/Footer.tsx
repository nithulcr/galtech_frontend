import React from 'react';
import Link from 'next/link'; 
import Image from "next/image";
import { MapPin } from 'lucide-react';


const accreditationLogos = [
    { name: 'Kerala Startup Mission', src: 'startup_india.png', alt: 'Kerala Startup Mission Logo', width: 150, height: 50 },
    { name: 'Startup India', src: 'startup_kerala.png', alt: 'Startup India Logo', width: 140, height: 50 },
];


const Footer = () => {

  return (
    <footer className="relative bg-[#030313] text-gray-300 pt-18 pb-8  overflow-hidden">
      <img src="/footer-bg.png" alt="Software Training"  className="absolute object-contain bottom-0 right-0 h-[100vh] object-bottom" /> 
      <div className="container mx-auto z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold text-red-600 flex items-center">
              <Image src="/logo.png" alt="GALTech" width={200} height={120} className="mr-2" />
            </Link>
            <p className="text-sm my-4 leading-6">
              School of Technology Pvt. Ltd.
              Leading IT finishing school dedicated to empowering the next generation of tech professionals.
            </p>
            <div className="grid gap-2 grid-cols-2 mt-4">
              {accreditationLogos.map(logo => (
                <img
                  key={logo.name} // ✅ Add this line
                  src={`/${logo.src}`}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}            
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-red-500 transition-colors">Courses</Link></li>
              <li><Link href="/about-us" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li> 
              <li><Link href="/contact-us" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
              {/* <li><a href="#" className="hover:text-red-500 transition-colors">Placements</a></li>  */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
            <div className='flex gap-6 flex-col'>
              <ul className="space-y-2 text-sm">
                <li className='text-white font-semibold'>Phone Number: </li>
                <li><a href="tel:+917012716483" className="hover:text-red-500 transition-colors">+91 70127 16483</a></li>
                <li><a href="tel:04802730123" className="hover:text-red-500 transition-colors">0480 273 0123</a></li>
              
              </ul>
              <ul className="space-y-2 text-sm">

                <li className='text-white font-semibold'>Email: </li>
                <li><a href="mailto:info@galtechlearning.com" className="hover:text-red-500 transition-colors">info@galtechlearning.com</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
             <div className='flex gap-6 flex-col'>
              <address className="text-sm not-italic leading-6 flex gap-1">
                <MapPin className="w-5 h-5 stroke-1 text-gray-100" />
                Office No: 3A-4, Third Floor,<br />
                Indeevaram, Special Economic Zone (SEZ),<br />
              Infopark Thrissur Campus, Koratty P O,<br />
              Thrissur District - 680308
              </address>
              <address className="text-sm not-italic leading-6 flex gap-1">
                <MapPin className="w-5 h-5 stroke-1 text-gray-100" />
                GALTech School of Technology Private Limited<br />
                First Floor,<br />
                  Oregano Tower,<br />
                Koratty Junction,<br />
                Thrissur, Kerala, India
              </address>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-10 border-t border-gray-700 text-sm text-center">
          <p className="mb-2">Copyright © 2022 - {new Date().getFullYear()} GALTech School of Technology Pvt Ltd , All Rights Reserved.</p>
          <p>An Educational Initiative of GALTech Technologies Private Limited, Infopark Koratty</p>
          <div className="mt-4">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
