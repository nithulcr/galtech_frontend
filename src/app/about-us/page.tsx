import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import TimelineClientWrapper from '@/components/TimelineClientWrapper'; 
import { Target,  Compass } from 'lucide-react';
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About GALTech School of Technology",
  description: "Learn about GALTech – our mission, vision, expert trainers, and why we are Kerala’s trusted IT training center.",
  openGraph: {
    title: "About Us | GALTech",
    description: "Meet the team and discover what makes GALTech stand out in IT education.",
    url: "https://galtechlearning.com/about-us",
    images: [
      {
        url: "/mean-stack.png",
      },
    ],
  },
};


const AboutUsPage = () => {
  return (
    <div>
      <Navbar />

      {/* Page Banner */}
     

      <main className="space-y-16">
        <PageBanner
          title="About Us"
          subtitle="GALTech School of Technology Private Limited > About Us"
        />
       
        <section>
          
          <div className='pb-5'>
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full uppercase title-badge">About Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl text-center mx-auto ">
              Our History
            </h2>
          </div>
          <TimelineClientWrapper />
        </section>

        {/* Our Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className='pb-5'>
                <div className="text-center mb-4">
                  <span className="inline-block bg-red-100 text-red-600 uppercase text-xs  px-3 py-1 rounded-full title-badge">we offer</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl text-center mx-auto ">
                  Our Mission & Vision
                </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
              <div className="grid grid-cols-1  gap-8">
                  <div 
                    className="group bg-white p-6 rounded-lg shadow-custom-md  flex-col md:flex-row flex  gap-6  transition-all duration-300 ease-in-out"
                  >
                    <div className="relative overflow-hidden w-20 h-20 bg-red-100 rounded-[5px] flex items-center justify-center  flex-none">
                      <span className="absolute w-0 h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full z-0 rounded-[5px]"></span>
                      <div className="relative z-10  transition-colors duration-300">
                       <Target className="w-12 h-12 text-red-600 mx-auto text-red-600 group-hover:text-white"  strokeWidth={1} />
                      </div>
                    </div>
                    <div className='text-left'>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
                      <p className="text-gray-600 text-sm leading-[22px] dm-sans">Our mission at GALTech School of Technology is to provide top-quality technical education and training to students seeking a competitive edge in the job market. We strive to create an inclusive and supportive learning environment that helps students reach their full potential leading to their success.</p>
                    </div>
                  </div>
                  <div 
                    className="group bg-white p-6 rounded-lg shadow-custom-md  flex-col md:flex-row flex  gap-6  transition-all duration-300 ease-in-out"
                  >
                    <div className="relative overflow-hidden w-20 h-20 bg-red-100 rounded-[5px] flex items-center justify-center  flex-none">
                      <span className="absolute w-0 h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full z-0 rounded-[5px]"></span>
                      <div className="relative z-10  transition-colors duration-300">
                       <Compass className="w-12 h-12 text-red-600 mx-auto text-red-600 group-hover:text-white"  strokeWidth={1} />
                      </div>
                    </div>
                    <div className='text-left'>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
                      <p className="text-gray-600 text-sm leading-[22px] dm-sans">Our vision at GALTech School of Technology is to become the region’s leading IT training and education center. We desire to offer modern education programs that are customized to the needs of the industry and that give our graduates the capabilities they need to build successful careers. Through our commitment to excellence, we hope to inspire and empower our students to achieve their dreams, and we aims to make a positive impact on society.</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src="/about_us.png" alt="Internship Illustration"  className="rounded-lg object-cover w-full max-w-[600px] mx-auto" /> 
            
            </div>
          </div>
        </div>
      </section>
       
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
