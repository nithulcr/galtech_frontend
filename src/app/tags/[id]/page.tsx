// src/app/tags/[id]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BlogCard from "@/components/BlogCard";
import RecentPosts from "@/components/RecentPosts";
import { StrapiBlogPost, StrapiTag } from "@/types/blog";

async function getTagById(id: string): Promise<StrapiTag | null> {
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/tags/${id}`,
      { cache: "no-store" }
    );

    const json = await res.json();
    return json.data || null;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

async function getBlogsByTag(tagId: string): Promise<StrapiBlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?filters[tags][documentId][$eq]=${tagId}&populate=*`,
      { cache: "no-store" }
    );

    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

async function getRecentPosts(): Promise<StrapiBlogPost[]> {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/blogs?sort=createdAt:desc&populate=featuredImage`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data || [];
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const [tag, tagBlogs, recentPosts] = await Promise.all([
    getTagById(resolvedParams.id),
    getBlogsByTag(resolvedParams.id),
    getRecentPosts(),
  ]);

  if (!tag) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <main className="space-y-16">
        <PageBanner
          title={`Tag: ${tag.Name}`}
          subtitle={`GALTech School of Technology Private Limited > Tags / ${tag.Name}`}
        />
        <section className="pt-4 pb-16">
          <div className="container mx-auto px-4">
            <div className="xl:grid xl:grid-cols-3 gap-12">
              <div className="xl:col-span-2 grid gap-16 mb-12">
                {tagBlogs.length > 0 ? (
                  tagBlogs.map((post: StrapiBlogPost) => (
                    <BlogCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No blogs found for this tag.</p>
                  </div>
                )}
              </div>

              <div className="recent-items">
                <RecentPosts posts={recentPosts} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const tag = await getTagById(resolvedParams.id);
  
  return {
    title: tag ? `${tag.Name} - GALTech School of Technology` : "Tag Not Found",
    description: tag ? `Browse all blogs tagged with ${tag.Name}` : "Tag not found",
    openGraph: {
      title: tag ? `${tag.Name} - GALTech School of Technology` : "Tag Not Found",
      description: tag ? `Explore articles about ${tag.Name}` : "Tag not found",
      url: `https://galtechlearning.com/tags/${resolvedParams.id}`,
      images: [
        {
          url: "/mean-stack.png",
        },
      ],
    },
  };
}