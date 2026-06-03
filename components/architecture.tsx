"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const architectures = [
  {
    id: "trading",
    label: "Trading Platform",
    color: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    description:
      "Real-time market data pipeline — from UI to persistent storage with Redis caching and WebSocket streaming.",
    layers: [
      {
        name: "React / Next.js",
        sub: "UI Layer",
        note: "Real-time charts, order book, portfolio views",
        color: "bg-blue-500/15 border-blue-500/30 text-blue-300",
      },
      {
        name: "WebSocket Server",
        sub: "Connection Layer",
        note: "Socket.IO, room-based subscriptions",
        color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
      },
      {
        name: "Node.js API",
        sub: "Business Logic",
        note: "REST + WebSocket, JWT auth, RBAC",
        color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      },
      {
        name: "Redis Cache",
        sub: "Caching Layer",
        note: "Pub/Sub, TTL-based price caching",
        color: "bg-rose-500/15 border-rose-500/30 text-rose-300",
      },
      {
        name: "PostgreSQL",
        sub: "Persistent Storage",
        note: "Trade records, user accounts, history",
        color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
      },
      {
        name: "MongoDB",
        sub: "Document Store",
        note: "User portfolios, dynamic configs",
        color: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Platform",
    color: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    description:
      "Multi-modal AI orchestration — routing requests across providers, managing subscriptions, and storing media.",
    layers: [
      {
        name: "React / Next.js",
        sub: "Frontend",
        note: "Dashboard, file uploads, usage analytics",
        color: "bg-blue-500/15 border-blue-500/30 text-blue-300",
      },
      {
        name: "Node.js API Gateway",
        sub: "Orchestration Layer",
        note: "Auth, RBAC, subscription enforcement",
        color: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      },
      {
        name: "Python Microservices",
        sub: "AI Processing",
        note: "LLM, image gen, audio transcription",
        color: "bg-rose-500/15 border-rose-500/30 text-rose-300",
      },
      {
        name: "MongoDB",
        sub: "User Data",
        note: "Profiles, history, subscription state",
        color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
      },
      {
        name: "Cloud Storage",
        sub: "Media Layer",
        note: "Images, audio files, generated assets",
        color: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
      },
    ],
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

function ArchCard({ arch, delay }: { arch: typeof architectures[0]; delay: number }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <FadeIn delay={delay}>
      <div className={`glass rounded-2xl border ${arch.accentBorder} p-6 h-full`}>
        {/* Header */}
        <div className="mb-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${arch.accentBg} border ${arch.accentBorder} ${arch.color} mb-3`}>
            {arch.label}
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{arch.description}</p>
        </div>

        {/* Architecture layers */}
        <div className="space-y-1">
          {arch.layers.map((layer, i) => (
            <div key={layer.name}>
              <motion.div
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ x: 4 }}
                className={`relative rounded-xl border p-3.5 cursor-default transition-all duration-200 ${layer.color} ${
                  hovered === i ? "shadow-lg" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{layer.name}</div>
                    <div className="text-xs opacity-60 mt-0.5">{layer.sub}</div>
                  </div>
                  <div className="text-xs opacity-50 text-right max-w-[140px] leading-relaxed hidden sm:block">
                    {layer.note}
                  </div>
                </div>
              </motion.div>
              {i < arch.layers.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-3 h-3 text-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            System <span className="text-gradient">Design</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-12">
            Visual breakdown of how each platform is architected — from user interface to data persistence.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {architectures.map((arch, i) => (
            <ArchCard key={arch.id} arch={arch} delay={i * 0.15} />
          ))}
        </div>

        {/* Design principles */}
        <FadeIn delay={0.3}>
          <div className="mt-12 glass rounded-2xl border border-white/[0.06] p-8">
            <h3 className="text-white font-semibold text-lg mb-6">Architecture Principles</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Separation of Concerns",
                  desc: "Each layer has a single responsibility. UI, business logic, caching, and persistence are cleanly separated.",
                  color: "text-blue-400",
                },
                {
                  title: "Performance First",
                  desc: "Redis caching at critical paths, database indexing, and React virtualization for high-frequency data.",
                  color: "text-cyan-400",
                },
                {
                  title: "Cloud-Aware Design",
                  desc: "Infrastructure choices informed by cloud best practices — stateless services, managed storage, horizontal scaling.",
                  color: "text-emerald-400",
                },
              ].map(({ title, desc, color }) => (
                <div key={title}>
                  <div className={`flex items-center gap-2 mb-2`}>
                    <ArrowRight className={`w-4 h-4 ${color}`} />
                    <div className={`font-semibold text-sm ${color}`}>{title}</div>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
