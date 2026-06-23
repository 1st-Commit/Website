"use client";

import { motion } from "framer-motion";
import { BookX, AlertTriangle, FolderX, Map, Briefcase, Award } from "lucide-react";
import clsx from "clsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const problems = [
  {
    title: "Tutorial Hell",
    description: "Learn React → Watch tutorials → Build Todo App → Get Stuck → No Experience.",
    icon: BookX,
  },
  {
    title: "Missing Real Skills",
    description: "You know syntax, but don't know Git, PRs, Code Reviews, or Team Collaboration.",
    icon: AlertTriangle,
  },
  {
    title: "No Portfolio",
    description: "Difficulty building a meaningful portfolio beyond basic course projects.",
    icon: FolderX,
  },
];

const solutions = [
  {
    title: "Structured Pathways",
    description: "Follow guided learning paths from fundamentals to advanced industry skills.",
    icon: Map,
  },
  {
    title: "Real Internships",
    description: "Join simulated internships with real projects, code reviews, and sprints.",
    icon: Briefcase,
  },
  {
    title: "Built Portfolio",
    description: "Every contribution becomes a verifiable part of your professional portfolio.",
    icon: Award,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-10 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Problem <span className="underline decoration-[#FF6B35] underline-offset-4 decoration-4">We Solve</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Stop watching tutorials. Start building real experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold mb-2 text-red-400/90 flex items-center gap-2">
              <BookX className="w-6 h-6" /> What You Experience Now
            </h3>
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={clsx(
                  "p-6 rounded-2xl border border-red-500/10 bg-red-950/10 backdrop-blur-md",
                  "hover:-translate-y-1 transition-transform duration-300"
                )}
              >
                <div className="flex gap-4">
                  <div className="mt-1 bg-red-500/20 p-2 rounded-lg text-red-400 h-fit">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white/90">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#FF8C42] flex items-center gap-2">
              <Briefcase className="w-6 h-6" /> What We Provide
            </h3>
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={clsx(
                  "p-6 rounded-2xl border border-[#FF6B35]/20 bg-[#FF6B35]/5 backdrop-blur-md",
                  "hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/10"
                )}
              >
                <div className="flex gap-4">
                  <div className="mt-1 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-2 rounded-lg text-white h-fit shadow-lg shadow-orange-500/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
