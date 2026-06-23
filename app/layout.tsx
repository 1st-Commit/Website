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
  title: "First Commit",
  description: "Gain real software engineering experience through structured learning, simulated internships, and open-source collaboration. Bridge the gap between tutorials and real development.",
};

const NAV_ITEMS = {
  "/": { name: "home" },
  "/tracks": { name: "tracks" },
  "/internships": { name: "internships" },
  "/open-source": { name: "open source" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MorphicNavbar items={NAV_ITEMS} className="py-6" />
        {children}
      </body>
    </html>
  );
}
