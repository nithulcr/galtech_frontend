// app/blogs/[slug]/page.tsx
 
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import RecentPosts from "@/components/RecentPosts";
import ContactFormSection from "@/components/ContactFormSection";
import { marked } from "marked";
import CommentForm from "@/components/CommentForm";
import CommentsSection from "@/components/CommentsSection";
 
interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  author: string;
  content: string;
  createdAt?: string;
  excerpt?: string;
  metaDescription?: string;
  featuredImage?: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    url: string;
    width: number;
    height: number;
  }>;
  tags?: Array<{
    id: number;
    documentId: string;
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
}
 
interface RecentPost {
  id: number;
  title: string;
  slug: string;
  createdAt?: string;
  featuredImage?: {
    url: string;
  }[];
}
 
interface Comment {
  id: number;
  documentId: string;
  Name: string;
  Email: string;
  Comment: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  isApproved: boolean;
  createdAt: string;
}
 
async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=featuredImage&populate=tags`,
      { cache: "no-store" }
    );
 
    const json = await res.json();
    const blogData = json.data?.[0];
    if (!blogData) return null;
 
    // Transform the Strapi response to match our Blog interface
    const blog: Blog = {
      id: blogData.id,
      documentId: blogData.documentId,
      title: blogData.title,
      slug: blogData.slug,
      author: blogData.author,
      content: blogData.content,
      createdAt: blogData.createdAt,
      excerpt: blogData.excerpt,
      metaDescription: blogData.metaDescription,
      featuredImage: blogData.featuredImage,
      tags: blogData.tags,
    };
 
    return blog;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
 
async function getRecentPosts(): Promise<RecentPost[]> {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/blogs?sort=createdAt:desc&populate=featuredImage`,
    { cache: "no-store" }
  );
 
  const json = await res.json();
  return json.data || [];
}
 
 
async function getBlogComments(blogId: number, page: number = 1, pageSize: number = 4): Promise<{ comments: Comment[], total: number }> {
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/comments?filters[blogs][id][$eq]=${blogId}&filters[isApproved][$eq]=true&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      { cache: "no-store" }
    );
   
    const json = await res.json();
    return {
      comments: json.data || [],
      total: json.meta?.pagination?.total || 0
    };
  } catch (err) {
    console.error("Fetch comments error:", err);
    return { comments: [], total: 0 };
  }
}
 
export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const [blog, recentPosts] = await Promise.all([
    getBlogBySlug(resolvedParams.slug),
    getRecentPosts(),
  ]);
 
  const initialComments = blog ? await getBlogComments(blog.id, 1, 4) : { comments: [], total: 0 };
 
  if (!blog) {
    notFound();
  }
 
  const { title, author, createdAt, content, featuredImage, tags } = blog;
 
  const imageUrl = featuredImage?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage[0].url}`
    : "";
  const altText = featuredImage?.[0]?.alternativeText || title;
 
  return (
    <div>
      <Navbar />
      <main className="space-y-16">
        <PageBanner
          title={title}
          subtitle={`GALTech School of Technology Private Limited > Blogs / ${title}`}
          createdAt={createdAt}
          author={author}
          titleSize="text-2xl md:text-[2.5rem]"
        />
 
        <div className="container mx-auto pb-12 px-4">
          <div className="xl:grid xl:grid-cols-3 gap-12">
            <div className="xl:col-span-2 grid gap-6 mb-12">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full object-cover rounded-[20px] mb-6"
                />
              )}
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 blog-details"
                  dangerouslySetInnerHTML={{ __html: marked(content || "") }}
                />
              </div>
 
              {/* Tags Section */}
              {tags && tags.length > 0 && (
                <div className="mt-8 pt-16 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <a
                        key={tag.id}
                        href={`/tags/${tag.documentId}`}
                        className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                      >
                        {tag.Name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
 
              {/* Comments Display Section */}
              <CommentsSection
                blogId={blog.id}
                initialComments={initialComments.comments}
                totalComments={initialComments.total}
              />
 
              <div className="mt-8 pt-16 border-t border-gray-200">
                <CommentForm blogId={blog.id} />
              </div>
 
            </div>
 
           
 
            <div className="recent-items">
              <RecentPosts posts={recentPosts} />
            </div>
          </div>
        </div>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
 
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getBlogBySlug(resolvedParams.slug);
  return {
    title: data?.title || "Default Title",
    description: data?.excerpt || "Default Description",
    openGraph: {
      title: data?.title,
      description: data?.excerpt,
      url: `https://galtechlearning.com/blogs/${resolvedParams.slug}`,
      images: [
        {
          url: data?.featuredImage?.[0]?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.featuredImage[0].url}`
            : "/mean-stack.png",
        },
      ],
    },
  };
}