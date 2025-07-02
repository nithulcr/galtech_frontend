"use client";
import React from "react";

const technologies = [
  { name: "WooCommerce", src: "/logos/woocommerce.png", alt: "WooCommerce Logo" },
  { name: "JavaScript", src: "/logos/javascript.png", alt: "JavaScript Logo" },
  { name: "React", src: "/logos/react.png", alt: "React Logo" },
  { name: "Facebook", src: "/logos/facebook.png", alt: "Facebook Logo" },
  { name: "AI", src: "/logos/ai.png", alt: "AI Logo" },
  { name: "Google Ads", src: "/logos/google-ads.png", alt: "Google Ads Logo" },
  { name: "Mongo DB", src: "/logos/mongodb.png", alt: "Mongo DB Logo" },
  { name: "Shopify", src: "/logos/shopify.png", alt: "Shopify Logo" },
  { name: "WooCommerce", src: "/logos/woocommerce.png", alt: "WooCommerce Logo" },
  { name: "WordPress", src: "/logos/wordpress.png", alt: "WordPress Logo" },
  { name: "Node.js", src: "/logos/nodejs.png", alt: "Node.js Logo" },
  { name: "PHP", src: "/logos/php.png", alt: "PHP Logo" },
];

const TechnologiesSection = () => {
  const repeated = [...technologies, ...technologies]; // duplicate for smooth loop

  return (
    <section className="py-16 sm:px-4 sm:px-8 bg-white overflow-hidden">
      <div className="sm:container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-12 max-w-3xl mx-auto text-center">Technologies <span className='text-red-600'>We</span> Cover</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {repeated.map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center mx-6"
                style={{ minWidth: "140px" }}
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-full object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
