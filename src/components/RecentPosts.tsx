// src/components/RecentPosts.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface Post {
  id: number;
  title: string;
  slug: string;
  createdAt?: string;
  featuredImage?: {
    url: string;
  }[];
}

export default function RecentPosts({ posts }: { posts: Post[] }) {
  const [searchText, setSearchText] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid gap-8">
      <div className="bg-white shadow-custom-md p-6 rounded-[8px]">
        {/* 🔍 Search input */}
        <div className="relative">
            <input
            type="text"
            placeholder="Search posts..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-4 px-5 text-sm border border-red-300 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-600 pr-12"
            />
            {searchText ? "" :
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-600 p-3 rounded-full text-white">
                  <Search size={18} strokeWidth={1.5} />
              </div>
            }
        </div>
      </div>
      <div className="bg-white shadow-custom-md p-6 rounded-[8px]">
        <h3 className="text-2xl font-semibold mb-4  pb-2">
          {searchText ? "Results" : "Recent Posts"}
        </h3>

        {filteredPosts.length === 0 ? (
          <p className="text-sm text-gray-500">No matching posts.</p>
        ) : (
          <div className="grid gap-4">
            {filteredPosts.slice(0, 5).map((post) => {
              const imageUrl = post?.featuredImage?.[0]?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.featuredImage[0].url}`
                : "/placeholder.jpg";

              return (
                <div key={post.id} className="flex gap-3 items-start">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={120}
                    height={120}
                    className="rounded object-cover aspect-[2/1.5] "
                  />
                  <div>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm font-[600] hover:text-red-600 block mb-1"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-500">
                      {new Date(post.createdAt || "").toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
