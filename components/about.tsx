"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Code2, Cpu, Rocket, Users, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    label: "Cloud Background",
    desc: "Started career in Oracle Cloud Infrastructure managing enterprise-grade production systems.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Code2,
    label: "Full Stack Engineering",
    desc: "Transitioned to full-stack development building real-time systems and scalable web apps.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Rocket,
    label: "Production Systems",
    desc: "Built and deployed applications serving real users with real-world performance requirements.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Cpu,
    label: "Scalable Architecture",
    desc: "Passionate about designing systems that scale — from single-user apps to high-concurrency platforms.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Major Platforms" },
  { value: "100+", label: "Concurrent Users" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">
              About
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                From Cloud Infrastructure to{" "}
                <span className="text-gradient">Full Stack Engineering</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/60 leading-relaxed mb-5 text-[15px]">
                My journey began in enterprise cloud operations at Oracle, where I managed
                large-scale infrastructure, disaster recovery protocols, and business
                continuity planning. That experience gave me a systems-level understanding
                that most developers never get — knowing how software lives and dies in
                production.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-white/60 leading-relaxed mb-5 text-[15px]">
                I transitioned into full-stack development driven by a desire to{" "}
                <span className="text-white/90">build products</span>, not just maintain
                them. Today I specialize in React, Next.js, Node.js, and TypeScript,
                building everything from real-time trading platforms to AI-powered
                applications — with cloud infrastructure thinking woven into every
                architectural decision.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-white/60 leading-relaxed mb-8 text-[15px]">
                I care deeply about{" "}
                <span className="text-white/90">scalable architecture</span>,{" "}
                <span className="text-white/90">performance optimization</span>, and writing
                code that survives contact with the real world. My cloud background makes
                me uniquely positioned to bridge the gap between application development
                and infrastructure.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-4 gap-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">{value}</div>
                    <div className="text-xs text-white/40 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Photo placeholder + highlights */}
          <div className="space-y-4">
            {/* Photo */}
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3] glass mb-6">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sadhu Sirisha Sundari — Full Stack Engineer"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 border border-white/[0.08]">
                    <div className="text-white font-semibold text-sm">Sadhu Sirisha Sundari</div>
                    <div className="text-blue-400 text-xs">Full Stack Engineer · Cloud Infrastructure</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc, color, bg }, i) => (
                <FadeIn key={label} delay={0.3 + i * 0.1}>
                  <div className={`glass rounded-xl p-4 border ${bg} hover:scale-[1.02] transition-transform`}>
                    <Icon className={`w-5 h-5 ${color} mb-2`} />
                    <div className="text-white text-xs font-semibold mb-1">{label}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{desc}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
