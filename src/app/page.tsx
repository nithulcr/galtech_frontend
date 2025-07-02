// src/app/page.tsx

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import InternshipSection from "@/components/InternshipSection";
import AboutUsSection from "@/components/AboutUsSection";
import AccreditedBySection from "@/components/AccreditedBySection";
import StatsSection from "@/components/StatsSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlacementsSection from "@/components/PlacementsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GALTech School of Technology - IT Training Hub",
  description:
    "Welcome to GALTech, Kerala's leading IT training institute. We offer a wide range of job-oriented courses including Full Stack Development, AI, Data Science, and more to kickstart your tech career.",
  openGraph: {
    title: "GALTech School of Technology - IT Training Hub",
    description:
      "Explore top IT courses in Kerala at GALTech. Your gateway to a successful career in technology with industry-expert-led training.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://galtechlearning.com",
    type: "website",
    images: [
      {
        url: "/mean-stack.png",
        width: 1200,
        height: 630,
        alt: "GALTech Training Institute",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="main_body">
        <HeroSection />
        <FeaturedCoursesSection />
        <ContactFormSection showMarquee={true} />
        <WhyUsSection />
        <InternshipSection />
        <AboutUsSection />
        <AccreditedBySection />
        <StatsSection />
        <FaqSection />
        <TestimonialsSection />
        <PlacementsSection />
      </div>
      <Footer />
    </div>
  );
}

