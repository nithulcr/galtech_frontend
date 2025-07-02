"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FirstVisitLoader() {
  const pathname = usePathname();
  const [stage, setStage] = useState<number | null>(null);

  // Detect hard reload
  const navEntry = performance.getEntriesByType("navigation")[0];
  const isReload =
    typeof window !== "undefined" &&
    "type" in navEntry &&
    (navEntry as PerformanceNavigationTiming).type === "reload";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const span1 = document.getElementById("loader-span-1");
    const span2 = document.getElementById("loader-span-2");

    const isHome = pathname === "/";
    const isFirstVisit = sessionStorage.getItem("first-visit-loaded") !== "true";

    if (!isHome || (!isFirstVisit && !isReload)) {
      body.classList.remove("before-loader", "home-loader-active", "loader-active");
      html.classList.remove("overflow-hidden");
      span1?.classList.add("hide");
      span2?.classList.add("hide");
      return;
    }

    sessionStorage.setItem("first-visit-loaded", "true");

    // Add before-loader only on first visit to home
    body.classList.add("before-loader", "home-loader-active", "loader-active");
    html.classList.add("overflow-hidden");
    body.classList.remove("stage-1", "stage-2", "stage-3");

    span1?.classList.add("hide");
    span2?.classList.add("hide");

    setTimeout(() => setStage(0), 50);
  }, [pathname]);

  useEffect(() => {
    if (stage === null) return;

    const html = document.documentElement;
    const body = document.body;
    const span1 = document.getElementById("loader-span-1");
    const span2 = document.getElementById("loader-span-2");

    body.classList.remove("stage-1", "stage-2", "stage-3");

    if (stage === 0) {
      body.classList.add("stage-1");
      span1?.classList.remove("hide");
      span2?.classList.remove("hide");
      setTimeout(() => setStage(1), 1000);
    } else if (stage === 1) {
      body.classList.add("stage-2");
      body.classList.remove("before-loader"); // Remove here
      setTimeout(() => setStage(2), 1000);
    } else if (stage === 2) {
      body.classList.add("stage-3");
      span1?.classList.add("hide");
      span2?.classList.add("hide");
      setTimeout(() => {
        html.classList.remove("overflow-hidden");
        body.classList.remove(
          "loader-active",
          "stage-1",
          "stage-2",
          "stage-3",
          "home-loader-active"
        );
      }, 1000);
    }
  }, [stage]);

  return null;
}
