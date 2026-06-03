"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Shield, Code2, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "OCI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    type: "Cloud Certification",
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
    year: "2023",
    badge: "OCI Certified",
    desc: "Demonstrates foundational knowledge of Oracle Cloud Infrastructure services, security, and architecture patterns.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    type: "Developer Certification",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    year: "2023",
    badge: "FCC Certified",
    desc: "Covers ES6+, functional programming, OOP, and common algorithmic patterns in JavaScript.",
  },
  {
    title: "REST API Intermediate",
    issuer: "HackerRank",
    type: "Technical Assessment",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
    year: "2023",
    badge: "Verified",
    desc: "Validates ability to design, build, and consume RESTful APIs following industry best practices.",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    type: "Technical Assessment",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
    year: "2023",
    badge: "Verified",
    desc: "Demonstrates proficiency in data structures, algorithms, and computational problem solving.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coding Ninjas",
    type: "Course Completion",
    icon: GraduationCap,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    year: "2022",
    badge: "Completed",
    desc: "Comprehensive full-stack curriculum covering React, Node.js, databases, and deployment strategies.",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    type: "Developer Certification",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    year: "2022",
    badge: "FCC Certified",
    desc: "Covers HTML5, CSS3, flexbox, CSS grid, and responsive design principles for modern web development.",
  },
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

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">
              Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Credentials &amp;{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-12">
            Verified credentials across cloud infrastructure, full-stack development, and algorithmic problem solving.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map(({ title, issuer, type, icon: Icon, color, bg, border, year, badge, desc }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl border ${border} p-5 h-full transition-all duration-300 group cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${bg} ${border} ${color} font-medium`}>
                      {badge}
                    </span>
                    <span className="text-xs text-white/30 font-mono">{year}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-sm leading-tight mb-1">{title}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-xs text-white/35">{issuer}</span>
                  <span className="text-white/15">·</span>
                  <span className="text-xs text-white/25">{type}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Stats row */}
        <FadeIn delay={0.5}>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: "6+", label: "Certifications" },
              { value: "3", label: "Issuing Bodies" },
              { value: "OCI", label: "Cloud Certified" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="glass rounded-xl border border-white/[0.06] p-5 text-center"
              >
                <div className="text-2xl font-bold text-gradient mb-1">{value}</div>
                <div className="text-xs text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
