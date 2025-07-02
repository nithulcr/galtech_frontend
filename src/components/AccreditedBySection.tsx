import React from 'react';
import Image from 'next/image'; 

const accreditations = [
  { name: 'Startup India', src: '/startup_india.png', alt: 'Startup India Logo', width: 180, height: 60 }, // Example dimensions
  { name: 'Kerala Startup Mission', src: '/startup_kerala.png', alt: 'Kerala Startup Mission Logo', width: 200, height: 60 }, // Example dimensions
];

const AccreditedBySection = () => {
  // TODO: Add actual logo images to /public/logos/ and update src paths and dimensions
  return (
    <section className="py-12  bg-gray-50">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-red-100 text-red-600  text-xs px-3 py-1 rounded-full title-badge">ACCREDITED BY</span>
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-4 max-w-3xl mx-auto">Startup India and Kerala Startup <span className='text-red-600'>Mission Certified Training Institute.</span></h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
          {accreditations.map((acc) => (
            <div key={acc.name}>
              <Image src={acc.src} alt={acc.alt} width={acc.width} height={acc.height} className="object-contain" />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditedBySection;
