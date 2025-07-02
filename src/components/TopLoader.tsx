"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const TopLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // duration of the loader

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger when route changes

  return (
    <div
      className={`fixed top-0 left-0 h-1 bg-red-200 z-[9999] transition-all duration-300 ease-out ${
        loading ? "w-full" : "w-0"
      }`}
    />
  );
};

export default TopLoader;
