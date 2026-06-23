import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MorphicNavbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Commit — Real Software Engineering Experience for Students",
  description:
    "Bridge the gap between tutorials and real software development. Learn industry skills, join simulated internships, contribute to real projects, and build a portfolio that proves your abilities.",
  keywords: [
    "software engineering",
    "student internship",
    "learn coding",
    "portfolio builder",
    "open source",
    "virtual internship",
    "first commit",
  ],
};

const NAV_ITEMS = {
  "/": { name: "home" },
  "#how-it-works": { name: "how it works" },
  "#tracks": { name: "tracks" },
  "#internships": { name: "internships" },
  "#open-source": { name: "open source" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <MorphicNavbar items={NAV_ITEMS} className="py-4 fixed top-0 left-0 right-0 z-50" />
        {children}
      </body>
    </html>
  );
}
