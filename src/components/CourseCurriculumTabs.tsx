"use client";
import React, { useState, useRef } from 'react';

interface CurriculumItem {
  week: string;
  title: string;
  details: string[];
}

interface CourseCurriculumTabsProps {
  curriculum: CurriculumItem[];
}

const CourseCurriculumTabs: React.FC<CourseCurriculumTabsProps> = ({ curriculum }) => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  if (!curriculum || curriculum.length === 0) {
    return <p>Curriculum details are not available at the moment.</p>;
  }

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex flex-col md:flex-row items-start overflow-x-auto space-x-0 gap-5  cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {curriculum.map((item, index) => (
          <div key={index} className="flex-shrink-0 md:h-full w-full md:w-fit">
            {activeTab === index ? (
              <div className="w-full md:w-96 lg:w-[400px] p-6 border-2 border-red-500 rounded-lg bg-white md:min-h-[300px] shadow-xl transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.week}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">{item.title}</h4>
                <ul className="list-none space-y-1 text-sm text-gray-600">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-3 h-3 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <button
                onClick={() => setActiveTab(index)}
                className="flex items-center justify-center  w-full md:w-14 md:h-[300px] py-3 cursor-pointer  px-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300 ease-in-out shadow-md md:writing-normal"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                <span className="text-gray-800 text-md transform md:rotate-180 whitespace-nowrap ">
                  {item.week}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculumTabs;
