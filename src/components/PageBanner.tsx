import React from 'react';
import { Calendar, User } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  createdAt?: string;
  author?: string;
  titleSize?: string; // Example: "text-3xl", "text-5xl"
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  createdAt,
  author,
  titleSize = "text-4xl md:text-6xl", // default size
}) => {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <section className="bg-custom-gradient text-white pt-42 pb-24 px-4 text-center flex items-center">
      <div className="container mx-auto">
        {(formattedDate || author) && (
          <div className="flex gap-5 justify-center items-center my-3 text-sm text-gray-200">
            {formattedDate && (
              <div className="flex items-center gap-1">
                <Calendar size={16} strokeWidth={1} className="text-red-500" />
                {formattedDate}
              </div>
            )}
            {author && (
              <div className="flex items-center gap-1">
                <User size={16} strokeWidth={1} className="text-red-500" />
                {author}
              </div>
            )}
          </div>
        )}
        <h1 className={`${titleSize} md:leading-[60px] font-bold max-w-[1300px] mx-auto`}>
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-sm flex-wrap flex justify-center">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
