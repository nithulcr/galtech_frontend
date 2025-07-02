import React from 'react';
import Button from './Button';
import { Phone,  ArrowRight} from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[100vh] content-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 text-gray-800 pt-22 pb-8 lg:py-30 px-4 sm:px-8" // Removed pt-8 from section, relying on Navbar's py-4 and container's pt if needed
      // Placeholder for a more complex background if needed, like the wave pattern.
    >
      <img src="/hero-img.png" alt="Software Training"  className="absolute object-contain bottom-0 right-0 h-[94vh] object-bottom lg:flex hidden" /> 
      <div className="background absolute bottom-0 md:inset-0 overflow-hidden  transform translte-scale-keyframe">
         <img src="./hero-bg.png"></img>
      </div>

      {/* The pt-8 on the container might still be needed if the content is too close to the relative navbar */}
      {/* Let's test with pt-8 on container first. If too much space, can reduce/remove. */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center pt-8 z-40"> 
        {/* Left Content Area */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 relative">
          {/* Assuming "Leaders in Education..." and "Kerala's No.1..." are desired for GALTech as per image structure */}
          <div className="inline-block bg-red-100 text-red-700 text-sm  px-3 py-1 rounded-full mb-4">
            🏆 Leaders in Education Since 6 Years {/* TODO: Replace with actual trophy icon */}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl md:leading-[70px] font-bold mb-4">
            {/* Kerala&apos;s <span className="text-red-600">No.1</span>
            <br />
            Software Training
            <br />
            Institute */}

            <span className="text-red-600">#1</span> INDUSTRY-BASED
            <br />
            IT TRAINING HUB

          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Master advanced web development and next-generation AI courses at Galtech. As one of the best IT training centers in Kerala, we offer courses that incorporate AI, giving you useful skills for the future. Enhance your potential by choosing us, the trusted AI Institute in Kerala dedicated to your success. Join us to get the tech skills you need for tomorrow. 
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
           
            <Button href="/courses" variant="primary" className='min-w-[220px] flex justify-center w-fit '>EXPLORE COURSES <ArrowRight className="w-5 h-5" /></Button>
            <span className="flex items-center text-red-600 flex items-center gap-3">
              <a href='https://wa.me/7012716483' target="_blank"  rel="noopener noreferrer"  className=''> <img src="./whatsapp.png" className="w-13 h-13"></img></a>
              <a href='tel:+917012716483' className=' bg-white rounded-full p-3 border border-red-100'><Phone className="w-7 h-7" strokeWidth={1} /></a>
              <div>
                <p className="text-sm text-gray-800">Have any questions?</p>
                <p className="font-semibold text-lg ">+91 70127 16483</p> 
              </div>
            </span>
          </div>
        </div>

        {/* Right Content Area - Illustration and Stats */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Placeholder for the woman with laptop image */}
         

          {/* <div className="absolute top-1/4 -left-10 sm:left-0 z-20 bg-white p-4 rounded-lg shadow-lg text-center w-40 z-40">
            <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-2xl">
              🎓
            </div>
            <p className="text-sm text-gray-600">Placements</p>
            <p className="text-2xl font-bold text-red-700">7000+</p> 
          </div>

          <div className="absolute bottom-1/4 -right-10 sm:right-0 z-20 bg-white p-4 rounded-lg shadow-lg text-center w-40 z-40">
            <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-2xl"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-7.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v3.5a2.25 2.25 0 0 0 2.25 2.25Zm8.25-3.75h.008v.008h-.008v-.008Zm.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3.75 0h.008v.008h-.008v-.008Zm.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3.75 0h.008v.008h-.008v-.008Zm.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Total Technologies</p>
            <p className="text-2xl font-bold text-red-700">30+</p> 
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
