"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Code2,
  Database,
  Cloud,
  Layers,
  Zap,
  Globe,
  Server,
  GitBranch,
  Terminal,
  Cpu,
} from "lucide-react";

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "20%", delay: 0, color: "text-blue-400" },
  { Icon: Database, x: "88%", y: "15%", delay: 0.3, color: "text-cyan-400" },
  { Icon: Cloud, x: "5%", y: "65%", delay: 0.6, color: "text-blue-300" },
  { Icon: Layers, x: "92%", y: "55%", delay: 0.9, color: "text-cyan-300" },
  { Icon: Zap, x: "15%", y: "80%", delay: 1.2, color: "text-amber-400" },
  { Icon: Globe, x: "82%", y: "78%", delay: 1.5, color: "text-emerald-400" },
  { Icon: Server, x: "50%", y: "88%", delay: 0.4, color: "text-blue-400" },
  { Icon: GitBranch, x: "72%", y: "28%", delay: 0.8, color: "text-pink-400" },
  { Icon: Terminal, x: "25%", y: "12%", delay: 1.0, color: "text-cyan-400" },
  { Icon: Cpu, x: "60%", y: "10%", delay: 0.5, color: "text-emerald-400" },
];

const techBadges = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Oracle Cloud",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow — blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-500/[0.05] blur-[120px] pointer-events-none" />
        {/* Radial glow — cyan */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[100px] pointer-events-none" />
        {/* Radial glow — bottom left */}
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/[0.03] blur-[80px] pointer-events-none" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y: iconY, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} opacity-20 hidden lg:block`}
          style={{ left: x, top: iconY }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.2, 0.2],
            scale: [0, 1, 1],
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay },
            scale: { duration: 0.6, delay },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 },
          }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm text-blue-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">Building Real-Time Systems,</span>
          <br />
          <span className="text-gradient">Scalable Web Applications,</span>
          <br />
          <span className="text-white/80">and Cloud-Aware Software</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Engineer specializing in{" "}
          <span className="text-white/80">React, Next.js, Node.js, TypeScript,</span>{" "}
          <span className="text-white/80">PostgreSQL, MongoDB, Redis,</span> and{" "}
          <span className="text-white/80">Cloud Infrastructure</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-xl transition-all duration-200 glow-blue flex items-center justify-center gap-2 text-sm"
          >
            <Layers className="w-4 h-4" />
            View Projects
          </button>
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-6 py-3 glass border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:bg-white/[0.05]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto px-6 py-3 glass border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:bg-white/[0.05]"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-20"
        >
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
              className="px-3 py-1 text-xs text-white/40 glass rounded-full border border-white/[0.06] hover:text-white/70 hover:border-white/20 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-all mx-auto"
          aria-label="Scroll to about"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
