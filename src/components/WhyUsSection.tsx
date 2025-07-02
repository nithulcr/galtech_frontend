import React from 'react';
import { Layers, FileText, Headphones, Award, DollarSign, PlayCircle } from 'lucide-react';

// Placeholder icons for each benefit
const ProjectIcon = () => (
 <Layers strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);
const JobFocusedIcon = () => (
 <FileText strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);
const PeerSupportIcon = () => (
 <Headphones strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);
const CertificationIcon = () => (
 <Award strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);
const AffordableIcon = () => (
 <DollarSign strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);
const SelfPacedIcon = () => (
 <PlayCircle strokeWidth={1} className="w-8 h-8 text-red-500 group-hover:text-white" />
);


const benefits = [
  { title: 'Project-based Learning', description: 'Build real products while learning, gaining practical experience.', icon: <ProjectIcon /> },
  { title: 'Job-focused Curriculum', description: 'Learn industry-relevant skills tailored for today’s job market.', icon: <JobFocusedIcon /> },
  { title: 'Peer-to-peer Support', description: 'Get help, collaborate, and learn from your peers in a supportive community.', icon: <PeerSupportIcon /> },
  { title: 'Certification', description: 'Finish the path to get certified and validate your skills.', icon: <CertificationIcon /> },
  { title: 'Affordable Fees', description: 'Access quality education with flexible and easy payment installments.', icon: <AffordableIcon /> },
  { title: 'Self-paced Options', description: 'Learn at your own convenience with our flexible learning schedules.', icon: <SelfPacedIcon /> },
];

const WhyUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        
        <div className="w-fit bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full mb-4 mx-auto flex title-badge">
          WHY US?
        </div>
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-4 max-w-3xl mx-auto text-center">
          Best <span className='text-red-600'>IT Finishing School</span> That Makes You Ready for Job
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our courses are designed to help students gain the knowledge and skills needed for entry-level IT jobs or to advance their careers. We also include job placement assistance and live project internships.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="group bg-white p-6 rounded-lg shadow-custom-md text-center flex flex-col items-center transition-all duration-300 ease-in-out"
            >
              <div className="relative overflow-hidden w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="absolute w-0 h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full z-0 rounded-full"></span>
                <div className="relative z-10  transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
