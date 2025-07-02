// src/components/SimpleCourseCard.tsx
 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
 
export interface SimpleCourseCardProps {
  imageSrc: string;
  badgeText?: string;
  badgeColor?: 'yellow' | 'red' | 'green' | 'purple' | 'blue';
  title: string;
  description?: string;
  rating?: number;
  students?: number;
  duration?: string;
  link: string;
}
 
const badgeColorClasses = {
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
};
 
const SimpleCourseCard: React.FC<SimpleCourseCardProps> = ({
  imageSrc,
  badgeText,
  badgeColor = 'blue',
  title,
  description,
  rating,
  students,
  duration,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-custom-md overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-400">
      <div className="relative">
        <Image
          src={imageSrc || '/images/placeholder-course.jpg'}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        {badgeText && (
          <span
            className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-[20px] min-w-[60px] ${
              badgeColorClasses[badgeColor] || badgeColorClasses.blue
            }`}
          >
            {badgeText}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mb-4 flex-grow text-left line-clamp-2 max-h-[40px]">
            {description}
          </p>
        )}
 
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4 mt-auto">
          <div className="flex items-center">
            {typeof rating === 'number' && (
              <>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="ml-1 mr-3">{rating.toFixed(1)}</span>
              </>
            )}
            {typeof students === 'number' && (
              <>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 mr-3">{students.toLocaleString()}</span>
              </>
            )}
          </div>
          {duration && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1">{duration}</span>
            </div>
          )}
        </div>
 
        <Link
          href={link}
          className="flex justify-center items-center gap-2 w-full text-center text-red-600 py-2 px-4 border border-red-600 rounded-[24px] transition duration-300 hover:bg-red-50"
        >
          View Details <ArrowRight className="w-5 h-5 stroke-[1]" />
        </Link>
      </div>
    </div>
  );
};
 
export default SimpleCourseCard;