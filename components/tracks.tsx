"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Code2, Layers, Palette, ArrowRight } from "lucide-react";
import clsx from "clsx";

const tracks = [
  {
    title: "Frontend Development",
    description: "Master modern web interfaces. From fundamentals to React and full deployment.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    shadow: "hover:shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
    text: "group-hover:text-blue-400",
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
    modules: 6,
  },
  {
    title: "Backend Development",
    description: "Build robust APIs and databases. Focus on server architecture and data management.",
    icon: Server,
    color: "from-green-500 to-emerald-400",
    shadow: "hover:shadow-green-500/20",
    border: "group-hover:border-green-500/50",
    text: "group-hover:text-green-400",
    skills: ["Node.js", "Express", "SQL", "APIs"],
    modules: 5,
  },
  {
    title: "Python Development",
    description: "Learn Python for backend, data processing, and automation.",
    icon: Code2,
    color: "from-yellow-500 to-amber-400",
    shadow: "hover:shadow-yellow-500/20",
    border: "group-hover:border-yellow-500/50",
    text: "group-hover:text-yellow-400",
    skills: ["Python", "Django", "Flask", "Data"],
    modules: 5,
  },
  {
    title: "Full Stack Development",
    description: "The complete package. Master both frontend and backend technologies.",
    icon: Layers,
    color: "from-purple-500 to-fuchsia-400",
    shadow: "hover:shadow-purple-500/20",
    border: "group-hover:border-purple-500/50",
    text: "group-hover:text-purple-400",
    skills: ["React", "Node", "DBs", "DevOps"],
    modules: 8,
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user interfaces. From research to prototypes.",
    icon: Palette,
    color: "from-pink-500 to-rose-400",
    shadow: "hover:shadow-pink-500/20",
    border: "group-hover:border-pink-500/50",
    text: "group-hover:text-pink-400",
    skills: ["Figma", "Design Systems", "Prototyping"],
    modules: 4,
  },
];

export default function Tracks() {
  return (
    <section className="py-24 px-6 md:px-10" id="tracks">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Learning Pathways</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose your path and master industry-relevant skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={clsx(
                "group relative p-6 rounded-2xl glass transition-all duration-300",
                "border border-white/10 hover:-translate-y-1",
                track.shadow,
                track.border
              )}
            >
              <div className={clsx(
                "w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br shadow-lg",
                track.color
              )}>
                <track.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
              <p className="text-white/60 text-sm mb-6 line-clamp-2">{track.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {track.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-medium text-white/50">{track.modules} Modules</span>
                <button className={clsx(
                  "text-sm font-medium flex items-center gap-1 transition-colors text-white/70",
                  track.text
                )}>
                  Start Learning <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
