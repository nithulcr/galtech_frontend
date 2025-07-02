// lib/courses.ts

import { StrapiCourse } from "@/types/strapi";

export async function getAllCourses(): Promise<StrapiCourse[]> {
  console.log('ENV CHECK:', process.env.NEXT_PUBLIC_STRAPI_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/courses?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch courses: ${res.status}`);
  }

  const json = await res.json();
  return json.data as StrapiCourse[];
}

// lib/courses.ts
export async function getCourseBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/courses?filters[Slug][$eq]=${slug}&populate=*`
  );

  if (!res.ok) return null;

  const { data } = await res.json();

  // Check if we got a course
  if (!data || data.length === 0) return null;

  // Return the full course object
  return data[0];
}