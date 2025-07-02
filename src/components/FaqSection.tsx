"use client"; // Make it a Client Component
import React, { useState } from 'react';


const faqItemsData = [
  { q: 'What types of IT courses do you offer?', a: 'We offer a wide range of courses including Full Stack Development (MERN, MEAN, Python), AI & Machine Learning, Data Science, Digital Marketing, Web Development, Mobile App Development, and more.' },
  { q: 'Are your courses beginner-friendly?', a: 'Yes, many of our courses are designed for beginners with no prior IT experience. We also offer advanced courses for professionals looking to upskill.' },
  { q: 'Do you provide placement assistance?', a: 'Yes, we provide comprehensive placement assistance, including resume building, interview preparation, and connections with our network of hiring partners.' },
  { q: 'What is the duration of the courses?', a: 'Course durations vary depending on the program, typically ranging from 2 months to 6 months. Please check individual course pages for specific details.' },
  { q: 'Are the classes online or offline?', a: 'We offer both online and offline classes for most courses to provide flexibility for our students.' },
  { q: 'Can I get a demo class before enrolling?', a: 'Yes, we often provide demo classes or counseling sessions. Please contact our admission team for more information.' },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Default first item open, always a number

  const handleToggle = (index: number) => {
    setOpenIndex(index); // Always set the clicked item as the open one
  };

  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="mb-4 text-center lg:text-left">
              <span className="inline-block bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full title-badge">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl mx-auto text-center lg:text-left">
              Frequently Asked <span className='text-red-600'>Questions</span>
            </h2>
            <div className="space-y-3">
              {faqItemsData.map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg  transition-shadow">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center p-4 text-left md:text-[17px] text-gray-700 focus:outline-none cursor-pointer"
                    aria-expanded={openIndex === index}
                  >
                    {item.q}
                    <span className={`text-red-500  md:text-[26px] transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                      +
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 pt-0 text-gray-500 text-sm">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
            <img src="/faq.png" alt="Internship Illustration"  className="rounded-lg object-cover max-w-[700px] w-full mx-auto" /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
