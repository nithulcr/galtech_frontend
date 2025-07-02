// src/components/FeaturedCoursesSection.tsx

// "use client"; // It uses SimpleCourseCard which uses Link, and might have client-side aspects.
import React from 'react';
import SimpleCourseCard from './SimpleCourseCard'; 
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { getAllCourses } from '@/lib/courses';
import { StrapiCourse } from '@/types/strapi';

const FeaturedCoursesSection = async () => {
  const courses: StrapiCourse[] = await getAllCourses();
  console.log('Debug - First course:', courses[0]);
  console.log('Debug - Image data:', courses[0]?.image);
  console.log('Debug - STRAPI_API_URL:', process.env.NEXT_PUBLIC_STRAPI_API_URL);

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
          {courses.slice(0, 4).map((course) => {
            const title = course.text || "Untitled Course";
            const slug = course.Slug || "";
            const link = slug ? `/courses/${slug}` : "#";

            const descText =
              course.description?.[0]?.children?.[0]?.text ||
              "No description available.";

            let imageSrc = "/images/placeholder-course.jpg"; // default fallback

            if (course.image && Array.isArray(course.image) && course.image.length > 0) {
              const imageData = course.image[0]; // Get first image from array
              const imageUrl = 
                imageData.formats?.thumbnail?.url || 
                imageData.formats?.small?.url ||
                imageData.url;
              
              if (imageUrl) {
                imageSrc = imageUrl.startsWith('http') 
                  ? imageUrl 
                  : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`;
              }
            }

            return (
              <SimpleCourseCard 
                key={course.id}
                imageSrc={imageSrc}
                badgeText={course.badge}
                badgeColor={course.badgeColor}
                title={title}
                description={descText}
                rating={course.rating}
                students={course.students}
                duration={course.duration}
                link={link}
              />
            );
          })}
        </div>
        <div className="text-center">
          <Button href="/courses" variant="primary" className='min-w-[220px] flex justify-center w-fit mx-auto'>View All Courses <ArrowRight className="w-5 h-5" /></Button>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
