// src/components/BlogCard.tsx

import { ArrowRight, Calendar, User } from "lucide-react";
import Button from "./Button";
import { StrapiBlogPost } from "@/types/blog";

type BlogCardProps = {
  post: StrapiBlogPost;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  if (!post || typeof post !== "object") {
    console.error("❌ Invalid post:", post);
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error:</strong> Invalid blog post data.
      </div>
    );
  }

  const { title, slug, author, excerpt, createdAt, featuredImage } = post;

  const imageUrl = featuredImage?.[0]?.url
  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage[0].url}`
  : "";
  const altText = featuredImage?.[0]?.alternativeText || title;  

  return (
    <div className="bg-white">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="w-full aspect-[2/1] object-cover rounded-[20px]"
        />
      )}
      <div className="flex gap-5 items-center mt-2">
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          <Calendar size={16} className="text-red-600" strokeWidth={1} />
          {new Date(createdAt || "").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          <User size={16} className="text-red-600" strokeWidth={1} />
          {author}
        </p>
      </div>

      <h2 className="text-xl lg:text-2xl font-bold my-3">{title}</h2>

      <p className="mt-2 mb-4 text-sm lg:text-md text-gray-500">{excerpt}</p>

      <Button
        href={`/blogs/${slug}`}
        variant="primary"
        className="text-sm lg:text-md flex justify-center w-fit"
      >
        Read more <ArrowRight className="w-5 h-5 stroke-[1]" />
      </Button>
    </div>
  );
};

export default BlogCard;
