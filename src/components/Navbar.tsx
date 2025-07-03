"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  X,
  ArrowRight,
  AlignRight,
  Send,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest(".mega-menu-container") &&
        !(e.target as HTMLElement).closest(".mega-menu-button")
      ) {
        setOpenMegaMenu(false);
      }
    };

    if (openMegaMenu) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [openMegaMenu]);

  const coursesMenu = {
    title: "All Training Courses",
    sections: [
      {
        title: "Popular Courses",
        items: [
          { name: "Web Development", href: "/courses/web-development" },
          { name: "Data Science", href: "/courses/data-science" },
          { name: "AI Agents", href: "/courses/ai-agents" },
          { name: "Digital Marketing", href: "/courses/digital-marketing" },
        ],
      },
      {
        title: "Development",
        items: [
          { name: "React.js", href: "/courses/react" },
          { name: "Node.js", href: "/courses/node" },
          { name: "Python", href: "/courses/python" },
          { name: "Machine Learning", href: "/courses/ml" },
        ],
      },
      {
        title: "AI Based Courses",
        items: [
          { name: "AI Agents", href: "/courses/ai-agents" },
          { name: "AI & Data Science", href: "/courses/data-science" },
          { name: "Data Analytics", href: "/courses/data-analytics" },
        ],
      },
      {
        title: "For Teams",
        items: [
          { name: "Corporate Training", href: "/teams/corporate" },
          { name: "Startup Programs", href: "/teams/startups" },
          { name: "Educational Institutions", href: "/teams/education" },
        ],
      },
    ],
  };

  const navLinks = [
    { href: "/", label: "Home Main" },
    { href: "/courses", label: "Courses" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div
      className={`
      fixed top-0 z-50 w-full transition-all duration-300 
      ${isHome ? "" : "bg-[#00000036] border-b border-[#ffffff1a]"} 
      ${
        isScrolled || openMegaMenu || isMobileMenuOpen
          ? "shadow-md bg-[#fff]"
          : "shadow-none"
      }
    `}
    >
      <nav className="container mx-auto rounded-[24]">
        <div className="mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4">
          <Link href="/" className="text-2xl font-bold flex items-center py-5">
            <Image
              src={
                isScrolled || isHome || openMegaMenu || isMobileMenuOpen
                  ? "/logo2.png"
                  : "/logo.png"
              }
              alt="GALTech"
              width={200}
              height={120}
              className="mr-2 transition duration-300"
              priority
            />
          </Link>

          <div className="lg:hidden justify-self-end content-center py-5">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={`w-6 h-6 ${
                isHome || isScrolled || openMegaMenu || isMobileMenuOpen
                  ? "text-gray-900"
                  : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <AlignRight className="w-7 h-7" />
              )}
            </button>
          </div>

          <div className="hidden lg:col-span-2 lg:flex items-center justify-center">
            {navLinks.map((link) => {
              if (link.href === "/courses") {
                return (
                  <div key={link.href} className="relative">
                    <button
                      className={`mega-menu-button flex items-center transition-colors text-lg py-8 transition-transform duration-300 hover:translate-y-[-1px] px-3 cursor-pointer ${
                        isHome || isScrolled || openMegaMenu || isMobileMenuOpen
                          ? "text-gray-900 hover:text-red-600"
                          : "text-white hover:text-red-300"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMegaMenu((prev) => !prev);
                      }}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {openMegaMenu && (
                      <div className="mega-menu-container fixed left-1/2 top-[90px] transform -translate-x-1/2 w-screen bg-white rounded-lg shadow-xl">
                        <div className="col-span-4 mb-4 bg-red-50 p-4">
                          <h3 className="text-xl font-semibold text-red-600 container mx-auto">
                            {coursesMenu.title}
                          </h3>
                        </div>
                        <div className="grid grid-cols-4 gap-8 container mx-auto p-8">
                          {coursesMenu.sections.map((section, index) => (
                            <div key={index}>
                              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      href={item.href}
                                      className="text-gray-500 hover:text-primary transition"
                                      onClick={() => setOpenMegaMenu(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="col-span-4 mt-4 pt-4 border-t border-gray-200 ">
                            <Link
                              href="/courses"
                              className="font-medium hover:underline text-red-600 flex items-center gap-2 "
                              onClick={() => setOpenMegaMenu(false)}
                            >
                              Browse all courses{" "}
                              <ArrowRight className="w-5 h-5 stroke-[1]" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 transition-colors text-lg transition-transform duration-300 hover:translate-y-[-2px] ${
                    isHome || isScrolled || openMegaMenu || isMobileMenuOpen
                      ? "text-gray-900 hover:text-red-600"
                      : "text-white hover:text-red-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex space-x-4 items-center justify-end py-5">
            <Link
              href="tel:+917012716483"
              className="p-1 flex items-center justify-center rounded-full transition duration-300 bg-white hover:bg-red-200 cursor-pointer text-red-600 border border-red-200 w-13 h-13"
            >
              <Phone className="w-5 h-5 stroke-[1.5]" />
            </Link>

            <Button
              href="/apply-now"
              variant="primary"
              className="min-w-[160px] flex justify-center w-fit lg:mx-0 mx-auto"
            >
              Apply Now <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-900 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+917012716483"
              className="flex items-center text-red-600 pt-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 70127 16483
            </Link>
            <Button href="/apply-now" variant="primary" className="w-fit">
              Apply Now <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
