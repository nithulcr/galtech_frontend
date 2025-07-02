// src/app/courses/[slug]/page.tsx

import { getCourseBySlug } from "@/lib/courses";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import CourseFaq from '@/components/CourseFaq';
import Button from "@/components/Button";
import CourseCurriculumTabs from "@/components/CourseCurriculumTabs";
import { GraduationCap, Laptop2, Briefcase, LucideIcon } from "lucide-react";
import { KeyHighlight } from '@/types/strapi';

import { Metadata } from "next";

import DownloadSyllabusButton from "@/components/DownloadSyllabusButton";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const course = await getCourseBySlug(resolvedParams.slug);
  return {
    title: course?.title || "Course Details",
    description: course?.excerpt || "Explore our detailed curriculum and course benefits.",
    openGraph: {
      title: course?.title || "Course Details",
      description: course?.excerpt || "Course overview and syllabus.",
      url: `https://galtechlearning.com/courses/${resolvedParams.slug}`,
      images: [
        {
          url: course?.ogImage || "/mean-stack.png",
        },
      ],
    },
  };
}


type Props = {
  params: Promise<{ slug: string }>;
};

type CurriculumItem = {
  week: string;
  title: string;
  details: string[];
};

type WhoCanJoinItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

interface WhoCanJoinData {
  title: string;
  description: Array<{
    children: Array<{
      text: string;
    }>;
  }>;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Laptop2,
  Briefcase,
  // Add more icon mappings if needed
};

function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || GraduationCap; // Fallback icon
}

const CoursePage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const course = await getCourseBySlug(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const ListItemCheck = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2">
      <svg
        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>{children}</span>
    </li>
  );

  
  const keyHighlights: string[] = (course.KeyHighlights || []).map(
    (item: KeyHighlight) => item.highlight || ""
  );
  
  const curriculum: CurriculumItem[] = course.CourseCurriculum || [];

  const whoCanJoin: WhoCanJoinItem[] = (course.WhoCanJoin || []).map(
    (item: WhoCanJoinData) => ({
      title: item.title,
      description: item.description?.[0]?.children?.[0]?.text || "",
      icon: getIconComponent(item.icon),
    })
  );

  const title = course.text || "Untitled Course";
  const description =
    course.description?.[0]?.children?.[0]?.text || "No description available.";
  const duration = course.duration || "N/A";
  const lectures = course.Lectures || "N/A";
  const skillLevel = course.SkillLevel || "N/A";
  const rating = course.rating || "N/A";
  const students = course.students || "N/A";

  const imageUrl = course.image?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${course.image[0].url}`
    : null;

  
  const syllabusFileUrl = course.SyllabusFile?.[0]?.url
  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${course.SyllabusFile[0].url}`
  : null;

  return (
    <div>
      <Navbar />
      <main className="space-y-16">
        <PageBanner
          title={title}
          subtitle="GALTech School of Technology Private Limited > Courses"
        />

        <section className="py-6 md:pt-12 md:pb-20">
          <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-2/3 space-y-10 md:space-y-20">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-7">
                  {title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>

              {syllabusFileUrl && (
                <DownloadSyllabusButton
                  fileUrl={syllabusFileUrl}
                  fileName={course.SyllabusFile?.[0]?.name || "syllabus"}
                />
              )}
              </section>

              {keyHighlights.length > 0 && (
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    Course Highlights
                  </h3>
                  <ul className="space-y-1 text-gray-700 columns-1 md:columns-2">
                    {keyHighlights.map((highlight, index) => (
                      <ListItemCheck key={index}>{highlight}</ListItemCheck>
                    ))}
                  </ul>
                </section>
              )}

              {curriculum.length > 0 && (
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                    Course Curriculum
                  </h3>
                  <CourseCurriculumTabs curriculum={curriculum} />
                </section>
              )}

              {whoCanJoin.length > 0 && (
                <section>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                    Who Should Enroll?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {whoCanJoin.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="bg-gray-50 p-4 rounded-lg shadow-sm text-center h-full flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                            <Icon
                              className="w-7 h-7 text-red-500 mt-1"
                              strokeWidth={1}
                            />
                          </div>
                          <h4 className="text-lg text-gray-800 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 flex-grow">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
              {course.faqItems?.length > 0 && (
                <section>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                    Frequently Asked Questions
                    </h3>
                    <CourseFaq faqItems={course.faqItems} />
                </section>
                )}
            </div>

            <aside className="lg:w-1/3 space-y-6 lg:sticky lg:top-24 self-start">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              ) : (
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl object-cover w-full h-auto"
                />
              )}

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Course Details
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <strong>Duration:</strong> <span>{duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <strong>Skill Level:</strong> <span>{skillLevel}</span>
                  </li>
                  <li className="flex justify-between">
                    <strong>Lectures:</strong> <span>{lectures}</span>
                  </li>
                  <li className="flex justify-between">
                    <strong>Rating:</strong> <span>{rating}</span>
                  </li>
                  <li className="flex justify-between">
                    <strong>Students:</strong> <span>{students}</span>
                  </li>
                </ul>

                <Button
                  href="/apply-now"
                  variant="primary"
                  className="mt-6 w-full justify-center"
                >
                  Apply Now
                </Button>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
