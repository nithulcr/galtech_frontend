import { Poppins, Geist_Mono, DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import LenisScrollWrapper from "@/components/LenisScrollWrapper";
import TopLoader from "@/components/TopLoader";
import SocialIcons from "@/components/SocialIcons";
import FirstVisitLoader from "@/components/FirstVisitLoader";
import type { Metadata } from "next";
import BlobCursor from '@/components/BlobCursor';

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "GALTech School of Technology - IT Training Hub",
    template: "%s | GALTech School of Technology",
  },
  description: "GALTech offers industry-based IT training courses in Kerala...",
  icons: {
    icon: "/favicon.png",             
    shortcut: "/favicon.png",         
    apple: "/favicon.png",           
    other: [
      {
        rel: "icon",
        url: "/favicon.png",          
      },
    ],
  },
  other: {
    "google-site-verification": "74_q13Npv_ppKl7_fORVCfNSn8ceTuleEWvKEeTmyd0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${roboto.variable} ${dmSans.variable} font-sans antialiased before-loader`}
      >
        <FirstVisitLoader />
        <span id="loader-span-1" className="loader-text loader-text1 text-red-600 text-[2rem] lg:text-[3rem]">GALTECH</span>
        <div id="main-body-section">
          <BlobCursor />
          <SocialIcons />
          <TopLoader />
          <LenisScrollWrapper>{children}</LenisScrollWrapper>
        </div>
        <span id="loader-span-2" className="loader-text loader-text2  text-red-600 text-[2rem] lg:text-[3rem]">SCHOOL</span>
      </body>
    </html>
  );
}
