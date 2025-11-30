import type { Metadata } from "next";
import { Geist, Geist_Mono ,Mulish } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Md Yusuf Raza | Network Engineer",
  description:
    "Portfolio of Md Yusuf Raza,",
  keywords: [

  ],
  authors: [{ name: "Md Yusuf Raza", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Md Yusuf Raza | Network Engineer",
    description:
      "Portfolio of Md Yusuf Raza",
    url: "https://yourwebsite.com",
    siteName: "Md Yusuf Raza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Yusuf Raza Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Yusuf Raza | Network Engineer",
    description:
      "Portfolio of Your Name, a frontend developer specializing in React and Next.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mulish.variable} antialiased relative`}
      >
        {/* 🌀 Background Splash Cursor Effect */}
        <SplashCursor />

        {/* 🌐 App Structure */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
