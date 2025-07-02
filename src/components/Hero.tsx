'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex  justify-between h-full px-8 py-12 md:px-20 text-white">
        {/* Heading */}
        <div className="mt-auto  max-w-[700px]">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Kerala&apos;s No.1<br></br>
            Software Training<br></br>
            Institute
          </h1>
          <p className="text-lg mb-4"> Best software training institute in Kochi, Trivandrum & Calicut. Job-ready tech skills for your career. As the best software training institute in Kochi, we&apos;re committed to your career success through industry-relevant curriculum and hands-on training.</p>
            <div className="flex gap-4 mb-8">
            <button className="bg-white  text-red-600 font-semibold px-8 py-3  text-sm transition-all">
              Apply Now
            </button>
            <button className="border  border-white text-white  font-semibold px-8 py-3  text-sm transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer text and buttons */}
        <div className="mt-auto mb-4 max-w-[400px]">
          <video src="/hero-video.mp4" autoPlay loop muted playsInline className="rounded-2xl object-cover w-full h-auto" 
          ></video>
         
        </div>
      </div>

      {/* Optional: Overlay color gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f04e98]/50 to-[#ffb963]/50 z-0" />
    </section>
  );
}
