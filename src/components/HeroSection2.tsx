// app/components/HeroSection2.tsx
'use client';
import React from 'react';
import Button from './Button';

const HeroSection2 = () => {
  return (
    <section className="bg-[#fff7ed] flex items-center justify-center px-4 sm:px-12 pb-12">
      <div className="  w-full  grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
        {/* Left Content */}
        <div className='relative p-14 bg-[#fff] rounded-[24px] justify-center flex flex-col'>
            <div className="background absolute inset-0 overflow-hidden  opacity-40 translte-y-keyframe">
                <img src="https://framerusercontent.com/images/lfpZOCdQucUzQ7SybzmtPG3fw.png"></img>
            </div>
            <div className='z-9'>
                <div className="inline-block bg-red-100 text-red-700 text-sm  px-3 py-1 rounded-full mb-4">
            🏆 Leaders in Education Since 6 Years {/* TODO: Replace with actual trophy icon */}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-[650px]">
            Kerala&apos;s No.1 Software Training Institute
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-[650px]">
           Best software training institute in Kochi, Trivandrum & Calicut. Job-ready tech skills for your career. As the best software training institute in Kochi, we&apos;re committed to your career success through industry-relevant curriculum and hands-on training.
          </p>
          <div className="flex gap-4 mb-8">
            <Button href="/courses" variant="primary" className='min-w-[220px] flex justify-center w-fit'> Apply Now</Button>
            <Button href="/courses" variant="outline_primary" className='min-w-[220px] flex justify-center w-fit'>  Contact Us</Button>

           
          </div>

          {/* Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167bf55c44a1e4f7a30_hero%20icon%20one.webp" alt="user1" width={40} height={40} className="rounded-full border-2 border-white" />
              <img src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167a8b72934a2763cee_hero%20icon%20two.webp" alt="user2" width={40} height={40} className="rounded-full border-2 border-white" />
              <img src="https://cdn.prod.website-files.com/67721265f59069a5268af325/677701675adc2f93c6574cab_hero%20icon%20three.webp" alt="user3" width={40} height={40} className="rounded-full border-2 border-white" />
              <img src="https://cdn.prod.website-files.com/67721265f59069a5268af325/67770167230b7d2799966da6_hero%20icon%20four.webp" alt="user4" width={40} height={40} className="rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-black text-white text-sm flex items-center justify-center rounded-full border-2 border-white">
                10k+
              </div>
            </div>
            <p className="text-sm text-gray-500">10,000+ Placements</p>
          </div>
          </div>
        </div>

        {/* Right Image with Floating Elements */}
        <div className="relative">
          {/* <Image
            src="/hero2.png"
            alt="Hero"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
          /> */}
          <video src="/hero-video.mp4" autoPlay loop muted playsInline className="rounded-2xl object-cover w-full h-auto" 
          ></video>

          {/* Floating Tags */}
          <div className="absolute top-[35%] left-12 bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 translte-y-keyframe">
            <span className="text-sm font-medium text-gray-700">Affordable fees</span>
            <span className="w-5 h-5  bg-red-600 text-white rounded-full text-xs flex items-center justify-center">+</span>
          </div>
          <div className="absolute bottom-[50%] right-20 bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 translte-y-keyframe">
            <span className="text-sm font-medium text-gray-700">Certification</span>
            <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">+</span>
          </div>
          {/* Chart Card */}
          <div className="absolute bottom-30 left-30 bg-white p-5 rounded-2xl shadow-md w-56 translte-y-keyframe">
            <div className="text-sm text-gray-700 font-medium mb-1">Learn industry-relevant skills</div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-red-600">85%</span>
              <span className="text-xs text-gray-400">Job-focused </span>
            </div>
            {/* Bar chart style (mocked with divs) */}
            <div className="flex gap-1 items-end h-20">
              {[30, 50, 70, 40, 60, 80].map((h, i) => (
                <div key={i} className="w-3 bg-red-300 rounded-t-full" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
