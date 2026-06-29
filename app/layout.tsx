import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NotchNavbar } from "@/components/ui/notch-navbar";
import { ThemeProvider } from "@/components/theme-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NotchNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
