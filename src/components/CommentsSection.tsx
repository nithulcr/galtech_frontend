// components/CommentsSection.tsx

"use client";

import React, { useState } from "react";
import Button from "./Button";

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

interface CommentsSectionProps {
  blogId: number;
  initialComments: Comment[];
  totalComments: number;
}

export default function CommentsSection({ blogId, initialComments, totalComments }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 4;

  const loadMoreComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?blogId=${blogId}&page=${currentPage + 1}&pageSize=${pageSize}`);
      const data = await response.json();
      
      if (data.comments) {
        setComments(prev => [...prev, ...data.comments]);
        setCurrentPage(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error loading more comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasMoreComments = comments.length < totalComments;

  if (comments.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Comments ({totalComments})
      </h3>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-5 border-b pb-2">
              <h4 className="font-medium text-gray-800">{comment.Name}</h4>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString('en-GB')}
              </span>
            </div>
            <div className="text-gray-500">
              {comment.Comment?.[0]?.children?.[0]?.text || 'No comment text'}
            </div>
          </div>
        ))}
      </div>
      
      {hasMoreComments && (
        <div className="mt-6 text-center">
          <Button
            onClick={loadMoreComments}
            disabled={loading}
            className="text-sm lg:text-md"
          >
            {loading ? "Loading..." : "Read More"}
          </Button>
        </div>
      )}
    </div>
  );
}