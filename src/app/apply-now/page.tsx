import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | GALTech School of Technology",
  description: "Start your learning journey today! Fill out the form to apply for our IT training programs.",
  openGraph: {
    title: "Apply Now | GALTech",
    description: "Secure your spot in our job-oriented courses. Limited seats available!",
    url: "https://galtechlearning.com/apply-now",
    images: [
      {
        url: "/mean-stack.png",
      },
    ],
  },
};



const ApplyNowPage = () => {
  // TODO: Implement form submission logic
  // TODO: Populate dropdowns with actual data if needed
  return (
    <div>
      <Navbar />


     <main className="space-y-16">
        <PageBanner
          title="Apply Now"
          subtitle="GALTech School of Technology Private Limited &gt; Apply Now"
        />
        
        

        <section className='md:pt-12 md:pb-20 pt-6 pb-10'>
          
          <div className="text-center container mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-red-600 mb-4 max-w-3xl mx-auto pb-3">
                Welcome to GALTech School of Technology Private Limited
            </h2>

            <p className="text-gray-600 mt-2">Please fill out the form below to start your application process.</p>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-26">
            {/* Illustration Section */}
            <div className="lg:w-2/5 w-full flex flex-col items-center justify-center text-center">
              <img src="/apply-now.png" alt="Internship Illustration"  className="rounded-lg object-cover w-full max-w-[600px] mx-auto" /> 
            </div>

            {/* Form Section */}
            <div className="lg:w-3/5 w-full bg-white p-6 md:p-8 rounded-lg shadow-custom-md">
              <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className='lg:col-span-2'>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">NAME*</label>
                  <input type="text" name="fullName" id="fullName" placeholder="Enter Your Name" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div className=''>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-MAIL*</label>
                  <input type="email" name="email" id="email" placeholder="Enter Your E-mail" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div className=''>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">CONTACT NUMBER*</label>
                  <input type="tel" name="contactNumber" id="contactNumber" placeholder="Enter Your Number" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div className='lg:col-span-2'>
                  <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">QUALIFICATION*</label>
                  <input type="text" name="qualification" id="qualification" placeholder="Add Qualification" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">FRESHER / EXPERIENCED*</label>
                  <select name="experienceLevel" id="experienceLevel" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500 text-gray-500">
                    <option value="">- Select -</option>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="courseDetails" className="block text-sm font-medium text-gray-700 mb-1">COURSE DETAILS*</label>
                  <select name="courseDetails" id="courseDetails" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500 text-gray-500">
                    <option value="">- Select Course -</option>
                    <option value="ai-agents">AI Agents Development</option>
                    <option value="mern-stack">MERN Stack Development</option>
                    <option value="python-fullstack">Python Full Stack Development</option>
                    <option value="frontend-react">Frontend Development with React</option>
                    {/* Add other courses */}
                  </select>
                </div>
                <div className='lg:col-span-2'>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">YOUR MESSAGE</label>
                  <textarea name="message" id="message" rows={5} placeholder="Enter your message (optional)" className="w-full p-3 border border-gray-200 focus:ring-red-500 focus:border-red-500"></textarea>
                </div>
                <div>
                 
                  <Button type="submit" variant="primary" className='min-w-[220px] flex justify-center w-fit'> SUBMIT <ArrowRight className="w-5 h-5" /></Button>
                </div>
              </form>
            </div>
        </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyNowPage;
