// src/app/courses/pages.tsx

import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimpleCourseCard from "@/components/SimpleCourseCard";
import ContactFormSection from "@/components/ContactFormSection";
import PageBanner from "@/components/PageBanner";
import { getAllCourses } from "@/lib/courses";
import { StrapiCourse } from "@/types/strapi";


export const metadata: Metadata = {
  title: "Courses | GALTech School of Technology",
  description: "Explore industry-oriented IT courses like MERN Stack, Python, AI, Data Science, and more – designed for career growth.",
  openGraph: {
    title: "Explore Our Courses | GALTech",
    description: "Practical IT training with expert mentors. Choose your path to success.",
    url: "https://galtechlearning.com/courses",
    images: [
      {
        url: "/mean-stack.png",
      },
    ],
  },
};


const CoursesPage = async () => {
  const courses: StrapiCourse[] = await getAllCourses();

  return (
    <div>
      <Navbar />
      <main className="space-y-16">
        <PageBanner
          title="Courses"
          subtitle="GALTech School of Technology Private Limited > Courses"
        />
        <section className="py-4">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {courses.map((course) => {
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
                  title={title}
                  link={link}
                  imageSrc={imageSrc}
                  description={descText}
                  rating={course.rating}
                  students={course.students}
                  duration={course.duration}
                />
              );
            })}
          </div>
        </section>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
