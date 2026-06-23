"use client";

import { motion } from "framer-motion";
import { GitFork, CircleDot, GitPullRequest, BarChart3, Check } from "lucide-react";

export default function OpenSource() {
  // Generate random opacity array for contribution graph
  const generateGraph = () => {
    return Array.from({ length: 52 * 7 }).map((_, i) => {
      // Create some patterns (more activity towards right)
      const isRightHalf = i > (52 * 7) / 2;
      const baseChance = isRightHalf ? 0.4 : 0.2;
      const isActive = Math.random() < baseChance;
      if (!isActive) return "bg-white/5";
      
      const intensity = Math.random();
      if (intensity > 0.8) return "bg-[#FF6B35]";
      if (intensity > 0.5) return "bg-[#FF8C42]/80";
      return "bg-[#FFB347]/50";
    });
  };

  const graphSquares = generateGraph();

  return (
    <section className="py-24 px-6 md:px-10" id="open-source">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Open Source Academy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Contribute to real repositories like a professional developer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mock Terminal & PR Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Terminal */}
            <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-xl font-mono text-sm">
              <div className="bg-[#111] px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <span className="ml-2 text-white/40 text-xs">zsh - firstcommit</span>
              </div>
              <div className="p-4 space-y-2 text-white/80">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-400">$</span> git clone firstcommit/frontend
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-green-400">$</span> git checkout -b fix/navbar-responsive
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-green-400">$</span> git commit -m "Fix mobile nav layout"
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-400">$</span> git push origin fix/navbar-responsive
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-white/50 block"
                  />
                </motion.div>
              </div>
            </div>

            {/* PR Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              className="glass p-5 rounded-xl flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-green-400" />
                    Fix Navbar Responsive Layout
                    <span className="text-white/40 font-normal">#42</span>
                  </h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">good first issue</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">frontend</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-md border border-green-500/20">
                  <Check className="w-3 h-3" /> Merged
                </div>
              </div>
              <div className="text-xs text-white/50 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>student-dev merged this 2 hours ago</span>
                <span className="flex items-center gap-2">
                  <span className="text-white/70">2 files</span>
                  <span className="text-green-400">+45</span>
                  <span className="text-red-400">-12</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Graph & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-white mb-4">Your Contribution History</h3>
              <div className="overflow-x-auto pb-2">
                <div 
                  className="grid gap-[3px] min-w-max" 
                  style={{ 
                    gridTemplateColumns: 'repeat(52, minmax(0, 1fr))',
                    gridTemplateRows: 'repeat(7, minmax(0, 1fr))'
                  }}
                >
                  {graphSquares.map((bgClass, i) => (
                    <div key={i} className={`w-3 h-3 rounded-sm ${bgClass}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-white/40">
                <span>Learn how we count contributions</span>
                <div className="flex items-center gap-1">
                  Less
                  <div className="w-3 h-3 rounded-sm bg-white/5 mx-1" />
                  <div className="w-3 h-3 rounded-sm bg-[#FFB347]/50" />
                  <div className="w-3 h-3 rounded-sm bg-[#FF8C42]/80" />
                  <div className="w-3 h-3 rounded-sm bg-[#FF6B35]" />
                  More
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GitFork, title: "Real Repositories", desc: "Fork and write real code." },
                { icon: CircleDot, title: "Issue Tracking", desc: "Issues labeled by difficulty." },
                { icon: GitPullRequest, title: "Pull Requests", desc: "Submit and get reviewed." },
                { icon: BarChart3, title: "History", desc: "Build a verifiable record." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <item.icon className="w-5 h-5 text-[#FF8C42] mb-2" />
                  <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
