"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import clsx from "clsx";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const start = () => setHasStarted(true);

  useEffect(() => {
    if (!hasStarted && !startOnMount) return;
    let raf: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, startOnMount, target, duration]);

  return { count, start };
}

/* ------------------------------------------------------------------ */
/*  Stat item                                                          */
/* ------------------------------------------------------------------ */
interface StatProps {
  value: number;
  suffix: string;
  label: string;
  onViewStart: () => void;
}

function StatItem({ value, suffix, label, onViewStart }: StatProps) {
  const { count, start } = useCountUp(value, 2200);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          start();
          onViewStart();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start, onViewStart]);

  return (
    <div ref={ref} className="text-center px-6 md:px-10">
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="text-sm md:text-base text-white/50 mt-1">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger variants                                                   */
/* ------------------------------------------------------------------ */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#050505]">
      {/* ---- Dot grid overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ---- Animated gradient orbs (CSS-only) ---- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Orb 1 — large orange */}
        <div
          className={clsx(
            "absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full",
            "bg-[radial-gradient(circle,rgba(255,107,53,0.35),transparent_70%)]",
            "blur-3xl animate-[orbDrift1_18s_ease-in-out_infinite]"
          )}
        />
        {/* Orb 2 — amber */}
        <div
          className={clsx(
            "absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full",
            "bg-[radial-gradient(circle,rgba(255,140,66,0.25),transparent_70%)]",
            "blur-3xl animate-[orbDrift2_22s_ease-in-out_infinite]"
          )}
        />
        {/* Orb 3 — deep orange bottom */}
        <div
          className={clsx(
            "absolute -bottom-24 left-1/3 h-[480px] w-[480px] rounded-full",
            "bg-[radial-gradient(circle,rgba(255,107,53,0.2),transparent_70%)]",
            "blur-3xl animate-[orbDrift3_20s_ease-in-out_infinite]"
          )}
        />
        {/* Orb 4 — subtle purple accent */}
        <div
          className={clsx(
            "absolute top-10 right-1/4 h-[340px] w-[340px] rounded-full",
            "bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_70%)]",
            "blur-3xl animate-[orbDrift4_25s_ease-in-out_infinite]"
          )}
        />
      </div>

      {/* ---- Content ---- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8 inline-flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            Now in Early Access
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Learning Into
          <br />
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
            Real-World Experience
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg"
        >
          Bridge the gap between tutorials and real software engineering.
          Structured learning paths, simulated internships, and open-source
          contributions — all in one platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <button
            className={clsx(
              "group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5",
              "bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]",
              "text-sm font-semibold text-white shadow-lg shadow-orange-500/20",
              "transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.03]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/60"
            )}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            className={clsx(
              "group inline-flex items-center gap-2 rounded-full px-8 py-3.5",
              "border border-white/10 bg-white/5 backdrop-blur-md",
              "text-sm font-semibold text-white/80",
              "transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            )}
          >
            <Play className="h-4 w-4 fill-white/80 transition-colors group-hover:fill-white" />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          className={clsx(
            "mx-auto mt-16 flex max-w-2xl items-center justify-center",
            "divide-x divide-white/10 rounded-2xl border border-white/[0.06]",
            "bg-white/[0.03] py-6 backdrop-blur-lg"
          )}
        >
          <StatItem value={500} suffix="+" label="Students" onViewStart={() => {}} />
          <StatItem value={50} suffix="+" label="Projects" onViewStart={() => {}} />
          <StatItem value={95} suffix="%" label="Satisfaction" onViewStart={() => {}} />
        </motion.div>
      </motion.div>

      {/* ---- Keyframe definitions (injected once) ---- */}
      <style jsx global>{`
        @keyframes orbDrift1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(60px, 40px) scale(1.08);
          }
          50% {
            transform: translate(20px, 80px) scale(0.95);
          }
          75% {
            transform: translate(-40px, 30px) scale(1.05);
          }
        }
        @keyframes orbDrift2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.1);
          }
          50% {
            transform: translate(-80px, -20px) scale(0.92);
          }
          75% {
            transform: translate(30px, -40px) scale(1.06);
          }
        }
        @keyframes orbDrift3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(70px, -30px) scale(1.07);
          }
          66% {
            transform: translate(-50px, -60px) scale(0.96);
          }
        }
        @keyframes orbDrift4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          20% {
            transform: translate(-30px, 50px) scale(1.1);
          }
          40% {
            transform: translate(40px, 20px) scale(0.93);
          }
          60% {
            transform: translate(60px, -30px) scale(1.04);
          }
          80% {
            transform: translate(-20px, -50px) scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
