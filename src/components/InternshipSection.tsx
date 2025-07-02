import React from 'react';

// Placeholder for actual icons or SVGs
const BenefitIconPlaceholder = ({ className = "w-10 h-10 text-red-500" }: { className?: string }) => (
  <div className={`bg-red-100 rounded-full p-2 flex items-center justify-center mr-4 ${className}`}>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {/* Generic Benefit Icon */}
  </div>
);

const internshipBenefits = [
  { text: "Mentorship from experienced Developers and Team Heads" },
  { text: "Join a rapidly growing job market with high demand for skilled professionals" },
  { text: "Hands-on experience in live projects simulating real-world scenarios" },
  { text: "Career guidance and placement assistance to kickstart your IT journey" },
];

const InternshipSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center ">
          <div className="lg:w-1/2 lg:pr-12 mt-10 lg:mt-0 text-center lg:text-left">
          
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-600  text-xs px-3 py-1 rounded-full title-badge">INDUSTRIAL TRAINING</span> {/* Updated from DURATION */}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-red-600 mb-4 max-w-3xl mx-auto ">
              <span className='text-gray-900'>Offline</span> Industrial Training and Internship Programs
            </h2>
            <p className="text-gray-600 mb-8">
              Gain practical, hands-on experience with our intensive industrial training and internship programs, designed to bridge the gap between academic learning and industry demands.
            </p>
            <ul className="space-y-4">
              {internshipBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <BenefitIconPlaceholder />
                  <span className="text-gray-700 text-left">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
             <img src="/offline.png" alt="Internship Illustration"  className="rounded-lg object-cover w-full max-w-[600px] mx-auto" /> 
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
