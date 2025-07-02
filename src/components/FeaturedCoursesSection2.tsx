"use client"; // It uses SimpleCourseCard which uses Link, and might have client-side aspects.
import React from 'react';
// import Image from 'next/image'; // REMOVED as icons are SVGs now
import SimpleCourseCard from './SimpleCourseCard'; 
import Button from './Button';
import { ArrowRight } from 'lucide-react';
// More specific placeholder icons based on visual memory of reference site
// These are still placeholders and should be replaced with actual/accurate SVGs or images.


// Define a type for individual course data to ensure type safety for badgeColor
interface CourseDataType {
  imageSrc: string;
  badgeText?: string;
  badgeColor?: 'yellow' | 'red' | 'green' | 'purple' | 'blue';
  title: string;
  description: string;
  rating?: number;
  students?: number;
  duration?: string;
  link: string;
}

// Placeholder course data matching the new design
// TODO: Replace with actual image paths and correct data
const coursesData: CourseDataType[] = [
  {
    imageSrc: '/course-data-science.png', // Placeholder
    badgeText: 'Best Seller',
    badgeColor: 'yellow', 
    title: 'Data Science & Analytics',
    description: 'Master data analysis, visualization, and machine learning techniques',
    rating: 4.9,
    students: 2345,
    duration: '12 Weeks',
    link: '/courses/data-science',
  },
  {
    imageSrc: '/course-full-stack.png', // Placeholder
    badgeText: 'Most Popular',
    badgeColor: 'red', // for bg-red-400 text-red-800
    title: 'Full-Stack Web Development',
    description: 'Build modern web applications from front-end to back-end',
    rating: 4.8,
    students: 3120,
    duration: '16 Weeks',
    link: '/courses/full-stack',
  },

  {
    imageSrc: '/course-cybersecurity.png', // Placeholder
    badgeText: 'High Demand',
    badgeColor: 'green', // for bg-green-400 text-green-800
    title: 'AI Agents',
    description: 'Build intelligent AI-powered agents and bots.',
    rating: 4.7,
    students: 1890,
    duration: '14 Weeks',
    link: '/courses/ai-agents',
  },
  {
    imageSrc: '/course-ai-ml.png', // Placeholder
    badgeText: 'New',
    badgeColor: 'purple', // for bg-purple-400 text-purple-800
    title: 'AI & Machine Learning',
    description: 'Develop intelligent systems and predictive models',
    rating: 4.9,
    students: 1675,
    duration: '15 Weeks',
    link: '/courses/ai-ml',
  },
  // Add more courses if needed to show more than 4
];


const FeaturedCoursesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="container mx-auto text-center">
        <div className="inline-block bg-red-100 text-red-600  text-xs  px-3 py-1 rounded-full mb-4 title-badge">
          Our Programs
        </div>
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-4 max-w-3xl mx-auto">
          Industry-Driven Courses to Boost <span className='text-red-600'>Your Career</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our expert-led courses are designed to give you the skills that today&rsquo;s employers are looking for
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-8 mb-12">
          {coursesData.map((course) => (
            <SimpleCourseCard 
              key={course.title}
              // Pass all new props to SimpleCourseCard
              imageSrc={course.imageSrc}
              badgeText={course.badgeText}
              badgeColor={course.badgeColor}
              title={course.title}
              description={course.description}
              rating={course.rating}
              students={course.students}
              duration={course.duration}
              link={course.link}
              // The old icon prop is no longer used by the new card design
            />
          ))}
        </div>
        <div className="text-center">
          <Button href="/courses" variant="primary" className='min-w-[220px] flex justify-center w-fit mx-auto'>View All Courses <ArrowRight className="w-5 h-5" /></Button>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
