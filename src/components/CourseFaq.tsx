"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: {
    type: string;
    children: {
      text: string;
    }[];
  }[];
}

const getPlainText = (richText: FAQItem["answer"]) => {
  return richText
    ?.map((block) =>
      block.children?.map((child) => child.text).join(" ")
    )
    .join("\n");
};

const CourseFaq = ({ faqItems }: { faqItems: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Default first open

  const handleToggle = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4">
      {faqItems.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg hover:shadow-sm transition-shadow border border-gray-200"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex justify-between cursor-pointer items-center p-4 md:text-[17px] text-left text-gray-800 focus:outline-none"
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <span
              className={`text-red-500 text-[26px] transform transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-600 text-sm">
              {getPlainText(faq.answer)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseFaq;
