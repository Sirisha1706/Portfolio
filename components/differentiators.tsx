"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Cloud,
  Zap,
  TrendingUp,
  Building2,
  Brain,
  CheckCircle2,
  X,
} from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end ownership from React UI to Node.js APIs to database schema design. No handoffs, no gaps.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Experience",
    desc: "Real production experience managing OCI environments — not just theory. I know how software lives in the cloud.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "WebSockets, Redis pub/sub, event-driven architectures. Built systems serving live data to 100+ concurrent users.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    desc: "From React rendering to database query plans to caching strategies — I find and fix bottlenecks at every layer.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Building2,
    title: "Enterprise Production Systems",
    desc: "Worked on systems where downtime has real consequences. I bring that same rigor to every project.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    desc: "Built multi-modal AI platforms integrating LLM, image generation, and audio APIs with proper access control.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const comparison = [
  { feature: "Frontend Development", me: true, typical: true },
  { feature: "Backend / API Development", me: true, typical: true },
  { feature: "Cloud Infrastructure Experience", me: true, typical: false },
  { feature: "Real-Time Systems (WebSockets)", me: true, typical: false },
  { feature: "Redis Caching Architecture", me: true, typical: false },
  { feature: "Enterprise Incident Management", me: true, typical: false },
  { feature: "AI/LLM Integrations", me: true, typical: false },
  { feature: "Disaster Recovery Planning", me: true, typical: false },
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

export default function Differentiators() {
  return (
    <section id="differentiators" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">
              Differentiators
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            What Makes Me <span className="text-gradient">Different</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-12">
            The combination of full-stack engineering depth and cloud infrastructure experience is rare — and it shows in how I build.
          </p>
        </FadeIn>

        {/* Differentiator cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {differentiators.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl border ${border} p-6 h-full transition-all duration-300 hover:shadow-lg group`}
              >
                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 leading-tight">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Comparison table */}
        <FadeIn delay={0.3}>
          <div className="glass rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="p-6 pb-4 border-b border-white/[0.06]">
              <h3 className="text-white font-semibold text-lg">Skills Comparison</h3>
              <p className="text-white/40 text-sm mt-1">Me vs. typical MERN developer</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">
                      Capability
                    </th>
                    <th className="text-center px-6 py-3 text-xs text-blue-400 font-medium uppercase tracking-wider">
                      Sirisha
                    </th>
                    <th className="text-center px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">
                      Typical Dev
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(({ feature, me, typical }, i) => (
                    <motion.tr
                      key={feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-3.5 text-sm text-white/60">{feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        {me ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {typical ? (
                          <CheckCircle2 className="w-4 h-4 text-white/30 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
