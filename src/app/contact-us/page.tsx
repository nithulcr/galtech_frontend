import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import Button from '@/components/Button';
import type { Metadata } from "next";

import {
  MapPin,
  Mail,
  Phone,
  ArrowRight

} from 'lucide-react';





export const metadata: Metadata = {
  title: "Contact Us | GALTech School of Technology",
  description: "Have questions? Reach out to our team for guidance on courses, admissions, or partnerships.",
  openGraph: {
    title: "Contact GALTech",
    description: "We’re here to help. Contact us for any queries or support.",
    url: "https://galtechlearning.com/contact-us",
    images: [
      {
        url: "/mean-stack.png",
      },
    ],
  },
};




// import Image from 'next/image'; // For illustrations - REMOVED
const iconMap: { [key: string]: React.ElementType } = {
  MapPin,
  Mail,
  Phone,

};


// Generic Icon component


const contactDetails = [
  {
    title: 'Development Center',
    iconName: 'MapPin',
    lines: [
      "Office No: 3A-4, Third Floor, Indeevaram,",
      "Special Economic Zone (SEZ), Infopark",
      "Thrissur Campus, Koratty P O, Thrissur",
      "District - 680308"
    ]
  },
  {
    title: 'Training Center',
    iconName: 'MapPin',
    lines: [
      "First Floor, Oregano Tower,",
      "Koratty Junction,",
      "Thrissur, Kerala"
    ]
  },
  {
    title: 'Email',
    iconName: 'Mail',
    lines: ["info@galtechlearning.com"]
  },
  {
    title: 'Call Us',
    iconName: 'Phone',
    lines: ["+91 70127 16483", "0480 273 0123"]
  }
];


const ContactUsPage = () => {
  
  return (
    <div>
      <Navbar />

      {/* Page Banner */}
      

      <main className=" space-y-16">
        <PageBanner
          title="Contact Us"
          subtitle="GALTech School of Technology Private Limited > Contact Us"
        />
        <section>
          <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12 md:pt-12">
            
            <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
              <img src="/contact_us.png" alt="Internship Illustration"  className="rounded-lg object-cover w-full max-w-[600px] mx-auto" /> 
            </div>
            <div className="lg:w-1/2 w-full ">
   
              <div>
                {/* <div className="w-fit bg-red-100 text-red-600  text-xs font-semibold px-3 py-1 rounded-full mb-4 mx-auto flex">
                  WHY US?
                </div> */}
                <h2 className="text-3xl font-bold md:leading-16 text-gray-800 mb-4 max-w-3xl mx-auto pb-3">
                 Send us a Message
                </h2>
              </div>
              <form className="space-y-6 w-full">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <input type="text" name="fullName" id="fullName" placeholder="Full Name" className="w-full p-3 border border-gray-200  focus:ring-red-500 focus:border-red-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="w-full p-3 border border-gray-200  focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-200  focus:ring-red-500 focus:border-red-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="course" className="sr-only">Select Course</label>
                  <select name="course" id="course" className="w-full p-3 border border-gray-200  focus:ring-red-500 focus:border-gray-300 text-gray-500">
                    <option value="">- Select Course -</option>
                    <option value="ai-agents">AI Agents Development</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="python">Python Full Stack</option>
                    {/* Add more courses from your list */}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={5} placeholder="Your Message" className="w-full p-3 border border-gray-200  focus:ring-red-500 focus:border-red-500"></textarea>
                </div>
                <div>

                  <Button type="submit" variant="primary" className='min-w-[220px] flex justify-center w-fit'> SUBMIT <ArrowRight className="w-5 h-5" /></Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map(detail => {
              const LucideIcon = iconMap[detail.iconName]; // dynamically get icon
              return (
                <div key={detail.title} className="group bg-white p-6 rounded-lg shadow-custom-md text-center flex flex-col items-center transition-all duration-300 ease-in-out">
                  <div className="relative overflow-hidden w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="absolute w-0 h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full z-0 rounded-full"></span>
                    <div className="relative z-10  transition-colors duration-300">
                      {LucideIcon && (
                        <LucideIcon className="w-12 h-12 text-red-600 group-hover:text-white" strokeWidth={1} />
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{detail.title}</h3>
                  {detail.lines.map((line, index) => (
                    <p key={index} className="text-sm text-gray-600">{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </section>


        {/* Map Section */}
        <section className='py-12'>
          <div className='container mx-auto'>
            <div>
                  {/* <div className="w-fit bg-red-100 text-red-600  text-xs font-semibold px-3 py-1 rounded-full mb-4 mx-auto flex">
                    WHY US?
                  </div> */}
                  <h2 className="text-3xl font-bold md:leading-16 text-gray-800 mb-4 max-w-3xl mx-auto pb-3 text-center">
                  Find Us On Map
                  </h2>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-500">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.895511204974!2d76.34547457573221!3d10.270002368329115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08032148d5cc69%3A0xef2ddf714dfe0489!2sGALTech%20School%20of%20Technology%20Private%20Limited%20-%20Data%20Science%20%7C%20Full%20Stack%20Development%20%7C%20Digital%20Marketing%20Training!5e0!3m2!1sen!2sin!4v1749450396997!5m2!1sen!2sin" width="100%" height="100%" style={{ border:0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUsPage;
