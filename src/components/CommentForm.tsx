// components/CommentForm.tsx

"use client";

import React, { useState } from "react";
import Button from "./Button";

interface CommentFormProps {
  blogId: number;
}

export default function CommentForm({ blogId }: CommentFormProps) {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Comment: [
            {
              type: "paragraph",
              children: [{ type: "text", text: formData.comment }],
            },
          ],
          blogs: [blogId],
          isApproved: false,
        }),
      });

      if (response.ok) {
        setSubmitMessage("Comment submitted successfully! It will be visible after approval.");
        setFormData({ comment: "", name: "", email: "" });
      } else {
        setSubmitMessage("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl md:p-10">
      <h3 className="text-lg font-semibold mb-5">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          placeholder="Enter your comment here...*"
          className="w-full p-3 border border-gray-300 rounded-md min-h-[120px]"
        />
        <p className="text-sm text-gray-600 mb-5 pl-3">
          Your email address will not be published. Required fields are marked *
        </p>
        {submitMessage && (
          <p className={`text-sm p-3 rounded ${
            submitMessage.includes("successfully") 
              ? "text-green-700 bg-green-100" 
              : "text-red-700 bg-red-100"
          }`}>
            {submitMessage}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="text-sm lg:text-md flex justify-center w-fit"
        >
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </Button>
      </form>
    </div>
  );
}