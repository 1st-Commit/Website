import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Tracks from "@/components/tracks";
import Internships from "@/components/internships";
import OpenSource from "@/components/open-source";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Hero />
      <Features />
      <HowItWorks />
      <Tracks />
      <Internships />
      <OpenSource />
      <CTA />
      <Footer />
    </main>
  );
}
