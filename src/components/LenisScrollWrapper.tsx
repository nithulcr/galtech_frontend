"use client";

import React from "react";
import useLenisScroll from "@/hooks/useLenisScroll";

const LenisScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useLenisScroll();

  return <main>{children}</main>;
};

export default LenisScrollWrapper;
