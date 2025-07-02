import React from 'react';
import Image from 'next/image'; // For course images/icons

// Placeholder for actual icons or SVGs
const DefaultCourseIcon = ({ className = "w-16 h-16 text-red-500 mx-auto mb-4" }: { className?: string }) => (
  <div className={`bg-red-100 rounded-lg p-3 flex items-center justify-center ${className}`}>
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m0 0A7.5 7.5 0 1012 6.253v11.494z"></path> {/* Generic Course Icon */}
    </svg>
  </div>
);

export interface CourseCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image for the course
  icon?: React.ReactNode; // Optional custom icon component
  link: string; // Link to the course details page
  tags?: string[]; // Optional tags like 'Popular', 'New'
  duration?: string; // Optional course duration
  level?: string; // Optional difficulty level
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  icon,
  link,
  tags,
  duration,
  level,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      {imageUrl ? (
        <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      ) : (
        icon || <DefaultCourseIcon /> 
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description.substring(0, 100)}{description.length > 100 && '...'}</p>
        
        {(duration || level) && (
          <div className="text-xs text-gray-500 mb-3 space-x-2">
            {duration && <span>Duration: {duration}</span>}
            {level && <span>Level: {level}</span>}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full mr-2">{tag}</span>
            ))}
          </div>
        )}
        
        <a 
          href={link} 
          className="mt-auto inline-block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-sm"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
