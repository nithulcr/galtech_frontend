"use client"; // <-- important

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';





const timelineEvents = [
  {
    year: '2018',
    title: 'GALTech Founded',
    description: 'GALTech School of Technology was established with a vision to bridge the gap between academic learning and industry demands, starting with a small team and a few core courses.',
    icon: '🚀',
  },
  {
    year: '2019',
    title: 'First Batch & Expansion',
    description: 'Successfully trained our first batch of students. Expanded course offerings to include emerging technologies and moved to a larger facility to accommodate growing student numbers.',
    icon: '🎓',
  },
  {
    year: '2020',
    title: 'Adapting to Online Learning',
    description: 'Pivoted to a hybrid model, launching comprehensive online courses and virtual labs in response to global changes, ensuring uninterrupted learning.',
    icon: '💻',
  },
  {
    year: '2021',
    title: 'Industry Partnerships & Recognition',
    description: 'Forged key partnerships with tech companies for internships and placements. Received accreditation from Kerala Startup Mission and recognition from Startup India.',
    icon: '🤝',
  },
  {
    year: '2022',
    title: 'Launch of AI & Specialized Courses',
    description: 'Introduced advanced courses in AI, Machine Learning, and AI Agents development, catering to the evolving needs of the IT industry.',
    icon: '🤖',
  },
  {
    year: '2023',
    title: 'Expanding Reach & Impact',
    description: 'Reached a milestone of 1000+ students trained. Opened new international learning centers and continued to enhance our curriculum with cutting-edge content.',
    icon: '🌍',
  },
  {
    year: '2024', 
    title: 'Future Innovations Hub',
    description: 'Planning to launch a dedicated R&D hub for students and faculty to collaborate on innovative tech solutions and contribute to open-source projects.',
    icon: '💡',
  },
];  

const TimelineSlider = () => {
  return (
    <div className="  timline-slide">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={false}
        speed={700} // ↓ slower transition speed (ms)
        autoplay={{
          delay: 3000, // wait 3 seconds between slides
          disableOnInteraction: false,
        }}
        className="px-6 md:px-12 cursor-grab"
      >
        {timelineEvents.map((event, index) => (
          <SwiperSlide key={index}  >
            <div className="relative pt-11 w-full max-w-sm mx-auto">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-red-500 text-red-600 rounded-full flex items-center justify-center  text-xl  z-10">
                {event.year}
              </div>
              
              <div className="absolute left-1/2 top-10 h-6 w-0.5 bg-red-500 transform -translate-x-1/2 z-0"></div>
              <div className="timline-slider-card relative bg-white p-6 rounded-lg  transition-shadow duration-300 mt-6 shadow-custom-md text-center border-t-2 border-t-red-500">
               
                <div className="text-2xl mb-3">{event.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default TimelineSlider;
