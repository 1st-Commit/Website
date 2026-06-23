"use client";

import { motion } from "framer-motion";
import { UserPlus, Compass, BookOpen, Building2, GitBranch, Trophy } from "lucide-react";
import clsx from "clsx";

const steps = [
  {
    title: "Create Account",
    description: "Sign up with Email, Google, or GitHub to start your journey.",
    icon: UserPlus,
  },
  {
    title: "Choose Your Track",
    description: "Select from Frontend, Backend, Python, Full Stack, or UI/UX paths.",
    icon: Compass,
  },
  {
    title: "Follow Learning Paths",
    description: "Master structured modules from HTML to React to full Deployment.",
    icon: BookOpen,
  },
  {
    title: "Join Internships",
    description: "Work on real projects in simulated engineering environments.",
    icon: Building2,
  },
  {
    title: "Contribute & Collaborate",
    description: "Fork repos, solve issues, and submit pull requests.",
    icon: GitBranch,
  },
  {
    title: "Build Your Portfolio",
    description: "Every merged PR becomes a verifiable part of your career story.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-10 bg-white/[0.01]" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Your journey from learner to contributor
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B35]/20 via-[#FF8C42]/50 to-[#FF6B35]/10 -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={clsx(
                    "relative flex items-center md:justify-between w-full flex-col md:flex-row gap-8 md:gap-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline circle */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-12 h-12 bg-[#050505] rounded-full border-4 border-[#111] -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={clsx("w-full pl-20 md:pl-0 md:w-[45%]", isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12")}>
                    <div className="p-6 rounded-2xl glass-strong hover:bg-white/[0.08] transition-colors border border-white/10 group">
                      <div className={clsx("flex items-center gap-4 mb-3", isEven ? "md:flex-row-reverse" : "md:flex-row")}>
                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#FF6B35]/20 group-hover:text-[#FF6B35] transition-colors text-white/70">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
