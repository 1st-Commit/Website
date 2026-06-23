"use client";

import { motion } from "framer-motion";
import { Code, MessageSquare, Timer, Award, LayoutDashboard, CheckSquare, GitPullRequest, FileText } from "lucide-react";
import clsx from "clsx";

export default function Internships() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#FF6B35]/[0.02]" id="internships">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Virtual Internships
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Experience real software engineering before your first job.
          </motion.p>
        </div>

        {/* Mock Dashboard UI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden mb-16 relative"
        >
          {/* Browser Chrome */}
          <div className="bg-[#111] px-4 py-3 flex items-center gap-4 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-black/50 text-white/40 text-xs px-4 py-1.5 rounded-md flex-1 text-center font-mono max-w-md mx-auto">
              firstcommit.dev/dashboard
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Sidebar */}
            <div className="w-full md:w-48 bg-[#111]/50 border-r border-white/5 p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-2 text-[#FF8C42] bg-[#FF6B35]/10 rounded-lg text-sm font-medium">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white/80 text-sm font-medium">
                <CheckSquare className="w-4 h-4" /> Tasks
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white/80 text-sm font-medium">
                <GitPullRequest className="w-4 h-4" /> Repository
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white/80 text-sm font-medium">
                <FileText className="w-4 h-4" /> Docs
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-6 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Frontend Engineer Internship</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-white/40">Sprint 2</span>
                  <div className="flex-1 max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full"
                    />
                  </div>
                  <span className="text-[#FF8C42] font-medium">65%</span>
                </div>
              </div>

              {/* Task Cards */}
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="font-medium text-white mb-1">Build Navbar</h4>
                    <span className="text-xs text-white/40 px-2 py-0.5 bg-white/5 rounded border border-white/10">Easy • 2hrs</span>
                  </div>
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-400/20">To Do</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between border-l-2 border-l-[#FF8C42]">
                  <div>
                    <h4 className="font-medium text-white mb-1">Fix Responsive Bug</h4>
                    <span className="text-xs text-white/40 px-2 py-0.5 bg-white/5 rounded border border-white/10">Medium • 3hrs</span>
                  </div>
                  <span className="text-xs font-medium text-[#FF8C42] bg-[#FF8C42]/10 px-2.5 py-1 rounded-full border border-[#FF8C42]/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] animate-pulse" /> In Progress
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between opacity-50">
                  <div className="line-through decoration-white/30">
                    <h4 className="font-medium text-white mb-1">Add Dark Mode</h4>
                    <span className="text-xs text-white/40 px-2 py-0.5 bg-white/5 rounded border border-white/10">Intermediate • 4hrs</span>
                  </div>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full border border-green-400/20">Done</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Real Projects", desc: "Work on actual codebases, not toy examples." },
            { icon: MessageSquare, title: "Code Reviews", desc: "Get actionable feedback from experienced developers." },
            { icon: Timer, title: "Sprint Cycles", desc: "Work in agile sprints just like real engineering teams." },
            { icon: Award, title: "Completion Certificate", desc: "Get recognized and showcase your verifiable work." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4 text-[#FF8C42]">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
