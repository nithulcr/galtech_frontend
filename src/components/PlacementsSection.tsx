"use client";
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const placedStudents = [
  {  imageSrc: '/placements/placement (1).webp' },
  {  imageSrc: '/placements/placement (2).webp' },
  {  imageSrc: '/placements/placement (3).webp' },
  {  imageSrc: '/placements/placement (4).webp' },
  {  imageSrc: '/placements/placement (5).webp' },
  {  imageSrc: '/placements/placement (6).webp' },
  {  imageSrc: '/placements/placement (7).webp' },
  {  imageSrc: '/placements/placement (8).webp' },
  {  imageSrc: '/placements/placement (9).webp' },
  {  imageSrc: '/placements/placement (10).webp' },
  {  imageSrc: '/placements/placement (11).webp' },
  {  imageSrc: '/placements/placement (12).webp' },
  {  imageSrc: '/placements/placement (13).webp' },
  {  imageSrc: '/placements/placement (14).webp' },
  {  imageSrc: '/placements/placement (15).webp' },
  {  imageSrc: '/placements/placement (16).webp' },
  {  imageSrc: '/placements/placement (17).webp' },
];

const PlacementsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })] // Slightly different delay
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Duplicate students for smoother looping if fewer than needed for viewport
  const duplicatedStudents = [...placedStudents, ...placedStudents];


  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block bg-red-100 text-red-600  text-xs font-semibold px-3 py-1 rounded-full">PLACEMENTS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl mx-auto text-center">
          Our Recently <span className='text-red-600'>Placed</span> Students
        </h2>
        <div className="relative overflow-hidden  cursor-grab" ref={emblaRef}>
          <div className="flex space-x-6 "> {/* Embla container */}
            {duplicatedStudents.map((student, index) => ( // Use duplicated array
              <div 
                key={index} 
                className="flex-shrink-0 w-72 sm:w-80 bg-gray-50 rounded-lg shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow duration-300"
                style={{ flex: '0 0 auto' }} // Embla slide
              >
                <div className="w-full  flex items-center justify-center">
                  <img src={student.imageSrc} alt=''  className="w-full h-full object-cover  "/>
                  
                </div>
               
              </div>
            ))}
          </div>
        </div>
        {/* Slider Buttons */}
        <div className="mt-8 flex justify-center space-x-3">
          <button 
            aria-label="Previous Placement"
            className="cursor-pointer bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={scrollPrev}
          >
           <ArrowLeft strokeWidth={1} className="w-6 h-6 text-white-600" />
          </button>
          <button 
            aria-label="Next Placement"
            className="cursor-pointer bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={scrollNext}
          >
            <ArrowRight strokeWidth={1} className="w-6 h-6 text-white-600" />
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default PlacementsSection;
