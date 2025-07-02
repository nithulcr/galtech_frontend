import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <img src="/about.png" alt="Internship Illustration"  className="rounded-lg object-cover max-w-[550px] w-full mx-auto" /> 
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full title-badge">ABOUT US</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-red-600 mb-4 max-w-3xl mx-auto">
              <span className='text-gray-900'>Expert Training for </span><br></br>Successful  IT Careers
            </h2>
            <p className="text-gray-600 mb-6">
              We are an educational initiative of GALTech Technologies Pvt Ltd, Infopark, Koratty. We provide industry-based IT training programs and internships for students who want to start their career in Software and Information Technology. 
            </p>
            <p className="text-gray-600 mb-8">
              Our software training courses cover HTML5, CSS3, PHP-Laravel, ReactJS, Data Science, Artificial Intelligence, AI Agents, Full Stack Development, MERN Stack, Digital Marketing, SEO, Social Media Marketing, PPC, and many more advanced and latest technology job-oriented training and internship programs.
            </p>

            <Button href="/about-us" variant="primary" className='min-w-[220px] flex justify-center w-fit lg:mx-0 mx-auto'>Learn More About us <ArrowRight className="w-5 h-5" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
