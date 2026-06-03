"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    dot: "bg-blue-400",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    dot: "bg-cyan-400",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT / Auth", level: 82 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-400",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    dot: "bg-amber-400",
    skills: [
      { name: "Oracle Cloud", level: 85 },
      { name: "Docker", level: 78 },
      { name: "Git / CI/CD", level: 82 },
      { name: "Linux", level: 80 },
    ],
  },
];

const allTechTags = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express.js", "WebSockets", "REST APIs",
  "PostgreSQL", "MongoDB", "Redis",
  "Docker", "Oracle Cloud", "Git", "CI/CD",
  "JWT", "RBAC", "Socket.IO", "Prisma",
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <span className={`text-xs ${color} font-mono`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${
            color.includes("blue") ? "from-blue-600 to-blue-400" :
            color.includes("cyan") ? "from-cyan-600 to-cyan-400" :
            color.includes("emerald") ? "from-emerald-600 to-emerald-400" :
            "from-amber-600 to-amber-400"
          }`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-12">
            A diverse skill set across the full stack — from pixel-perfect UIs to cloud infrastructure management.
          </p>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  active === cat.id
                    ? `${cat.color} ${cat.bg} ${cat.border}`
                    : "text-white/40 glass border-white/[0.06] hover:text-white/70 hover:border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Main skill area */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skill bars */}
          <FadeIn delay={0.15}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`glass rounded-2xl border ${activeCategory.border} p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-2 rounded-full ${activeCategory.dot}`} />
                <h3 className={`font-semibold ${activeCategory.color}`}>{activeCategory.label}</h3>
              </div>
              <div className="space-y-5">
                {activeCategory.skills.map(({ name, level }, i) => (
                  <SkillBar
                    key={name}
                    name={name}
                    level={level}
                    color={activeCategory.color}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </FadeIn>

          {/* All categories overview */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`glass rounded-xl border p-5 text-left transition-all duration-200 ${
                    active === cat.id ? `${cat.border} ${cat.bg}` : "border-white/[0.06] hover:border-white/10"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${cat.dot} mb-3`} />
                  <div className={`font-semibold text-sm mb-2 ${active === cat.id ? cat.color : "text-white/70"}`}>
                    {cat.label}
                  </div>
                  <div className="space-y-1">
                    {cat.skills.slice(0, 3).map(({ name }) => (
                      <div key={name} className="text-xs text-white/35">{name}</div>
                    ))}
                    {cat.skills.length > 3 && (
                      <div className="text-xs text-white/20">+{cat.skills.length - 3} more</div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* All tech tags */}
        <FadeIn delay={0.3}>
          <div className="border-t border-white/[0.06] pt-10">
            <div className="text-xs text-white/30 uppercase tracking-widest mb-5 font-medium">Full Technology Stack</div>
            <div className="flex flex-wrap gap-2">
              {allTechTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="px-3 py-1.5 text-sm text-white/50 glass rounded-lg border border-white/[0.06] hover:text-white/80 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
