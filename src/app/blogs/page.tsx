  // src/app/blogs/page.tsx
 
  import React from "react";
  import type { Metadata } from "next";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import PageBanner from "@/components/PageBanner";
  import BlogCard from "@/components/BlogCard";
  import RecentPosts from "@/components/RecentPosts";
  import { StrapiBlogPost } from "@/types/blog";
 
  export default async function BlogsPage() {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/blogs?populate=*`, {
      cache: "no-store",
    });
 
    const json = await res.json();
    const blogs = json?.data;
 
    if (!blogs || !Array.isArray(blogs)) {
      return <div>⚠️ No blog data found.</div>;
    }
 
    return (
      <div>
        <Navbar />
        <main className="space-y-16">
          <PageBanner
            title="All Blogs"
            subtitle="GALTech School of Technology Private Limited > Blogs"
          />
          <section className="pt-4 pb-16">
            <div className="container mx-auto">
              <div className="xl:grid xl:grid-cols-3 gap-12">
                <div className="xl:col-span-2 grid gap-16 mb-12">
                  {blogs.map((post: StrapiBlogPost) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
 
                <div className="recent-items">
                  <RecentPosts posts={blogs} />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
 
 
 
export const metadata: Metadata = {
  title: "All Blogs - GALTech School of Technology",
  description: "Read the latest blogs and updates from GALTech School of Technology. Stay informed about new tech trends, career tips, and our student stories.",
  openGraph: {
    title: "All Blogs - GALTech School of Technology",
    description: "Explore expert-written articles and updates from GALTech.",
    url: "https://galtechlearning.com/blogs", // replace with actual domain
    images: [
      {
        url: "/mean-stack.png", // fallback image for blog listing
      },
    ],
  },
};
 