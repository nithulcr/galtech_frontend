// src/components/ContactFormSection.tsx

import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import MarqueeComponent from "./MarqueeComponent";

interface ContactFormSectionProps {
  showMarquee?: boolean;
}

const ContactFormSection = ({ showMarquee = false }: ContactFormSectionProps) => {
  // TODO: Implement form submission logic
  // TODO: Add actual illustration
  return (
    <section className="  bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 w-full hidden lg:flex  justify-center items-center ">
            {showMarquee && <MarqueeComponent />}
            {!showMarquee && <img src="/get-in-touch.webp" alt="Internship Illustration"  className="rounded-lg object-cover w-full max-w-[600px] mx-auto" />}
          </div>
          <div className="lg:w-1/2 w-full  py-16">
            <div className="text-center lg:text-left mb-4">
              <span className="inline-block bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full title-badge">APPROACH US</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl mx-auto text-center lg:text-left">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder="Full Name" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="Email Address" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
              </div>
              <div>
                <label htmlFor="course" className="sr-only">Select Course</label>
                <select name="course" id="course" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500 text-gray-500">
                  <option value="">- Select Course -</option>
                  <option value="mern">MERN Stack Development</option>
                  <option value="python">Python Full Stack</option>
                  <option value="frontend">Frontend Development</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} placeholder="Message" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
              <div className="text-center lg:text-left">
                
                 <Button type="submit"  variant="primary" className='min-w-[220px] flex justify-center w-fit '>SUBMIT <ArrowRight className="w-5 h-5" /></Button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
