import React from 'react';
// import Image from 'next/image'; // For avatars - REMOVED

// Example StarRating component (can be more sophisticated)
const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'stroke-current'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    quote: "I'm mightily impressed and satisfied with the training given by GALTech School of Technology. The instructors are very knowledgeable and always willing to answer questions. I'm very much glad and I highly recommend others choose GALTech School of Technologie...",
    name: 'Jessica E Joseph',
    avatar: '/avatars/jessica.jpg', // Placeholder
    rating: 5,
  },
  {
    quote: "GALTech School of Technologies is the best software training institute in Kerala. The main specialty of this training institution is that you will get excellent training experience in theoretical as well as practical learning. Their course materials are well-...",
    name: 'Vysakh P',
    avatar: '/avatars/vysakh.jpg', // Placeholder
    rating: 5,
  },
  {
    quote: "I have attended full stack course at GALTech School of Technology over the past few years and each one has been an exceptional learning experience. Their hands-on approach is commendable.",
    name: 'Meenakshi Menon',
    avatar: '/avatars/meenakshi.jpg', // Placeholder
    rating: 5,
  },
   {
    quote: "I recently completed the MERN stack course at GALTech and I was impressed by the expertise of the instructors and their level of professionalism. The course material they offer was comprehensive and the hands-on learning experience was invaluable.",
    name: 'Krishnendhu S',
    avatar: '/avatars/krishnendhu.jpg', // Placeholder
    rating: 5,
  },
];

const TestimonialsSection = () => {
  // TODO: Implement carousel/slider for testimonials
  // TODO: Add actual avatar images to /public/avatars/
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block bg-red-100 text-red-600  text-xs font-semibold px-3 py-1 rounded-full">TESTIMONIALS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold md:leading-16 text-gray-800 mb-8 max-w-3xl mx-auto text-center">
          What   <span className='text-red-600'>Our Students </span>Say About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => ( // Displaying first 4 for now
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center mb-4">
                {/* <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" /> */}
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-white text-xl font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                <span className="text-red-500 text-3xl font-bold mr-1">&ldquo;</span>
                {testimonial.quote}
                <span className="text-red-500 text-3xl font-bold ml-1">&rdquo;</span>
              </p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default TestimonialsSection;
