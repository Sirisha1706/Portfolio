"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Users,
  TrendingUp,
  Brain,
  Shield,
  Database,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const projects = [
  {
    id: "trading",
    title: "Real-Time Trading Platform",
    tagline: "Live market data. 100+ concurrent users. Zero compromise on speed.",
    type: "Full Stack · Real-Time Systems",
    status: "Production",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-600/20 to-cyan-600/10",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    metrics: [
      { icon: Users, label: "Concurrent Users", value: "100+" },
      { icon: Zap, label: "Latency Reduction", value: "~60%" },
      { icon: TrendingUp, label: "Data Freshness", value: "<50ms" },
    ],
    overview:
      "A high-performance trading platform built to handle live market data streams with minimal latency. Designed for simultaneous users accessing real-time prices, portfolio management, and trade execution.",
    challenge:
      "Building a platform that could serve live market data to 100+ concurrent users without performance degradation, while maintaining data consistency across Redis cache and persistent storage layers.",
    solution:
      "Implemented a WebSocket-based pub/sub architecture with Redis for ephemeral data caching, PostgreSQL for persistent trade records, and MongoDB for user portfolios. Node.js cluster mode handled concurrent connections efficiently.",
    contributions: [
      "Architected the WebSocket event system with room-based subscriptions",
      "Implemented Redis pub/sub for broadcasting live price updates",
      "Built JWT + RBAC authentication with role-based trading permissions",
      "Designed PostgreSQL schema for trade history with indexing strategy",
      "Optimized React components with virtualization for large data tables",
    ],
    tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "MongoDB", "TypeScript", "JWT", "Docker"],
  },
  {
    id: "ai",
    title: "AI-Powered Multi-Modal Platform",
    tagline: "Subscription management, RBAC, and AI — all in one scalable system.",
    type: "Full Stack · AI Integration",
    status: "Production",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-amber-600/15 to-rose-600/10",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    metrics: [
      { icon: Brain, label: "AI Services", value: "Multi-modal" },
      { icon: Shield, label: "Access Tiers", value: "3 Levels" },
      { icon: Database, label: "Storage", value: "Cloud Native" },
    ],
    overview:
      "A comprehensive AI platform integrating multiple AI APIs (text, image, audio) with a subscription-based access model, RBAC permissions, media storage, and billing management.",
    challenge:
      "Orchestrating multiple AI services under a single unified platform while managing user subscriptions, enforcing granular access control, and handling large media assets efficiently.",
    solution:
      "Built a Node.js API gateway that routes requests to appropriate AI services (Python microservices), enforces RBAC policies, manages subscription entitlements, and stores media assets in cloud storage.",
    contributions: [
      "Designed the multi-tier RBAC system with subscription-based feature gating",
      "Built API gateway integrating multiple AI provider SDKs",
      "Implemented cloud storage pipeline for media upload and retrieval",
      "Created React dashboard for usage analytics and subscription management",
      "Set up Python microservice communication via REST and message queues",
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "MongoDB", "Cloud Storage", "TypeScript", "REST APIs", "RBAC"],
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={index * 0.15}>
      <div className={`glass rounded-2xl border ${project.borderColor} overflow-hidden hover:border-white/[0.14] transition-all duration-300 group`}>
        {/* Hero image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500 scale-105 group-hover:scale-100"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <span className={`inline-flex items-center px-2.5 py-1 text-xs rounded-full border font-medium ${project.statusColor} mb-2`}>
                {project.status}
              </span>
              <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
              <p className={`text-xs ${project.accentColor} mt-1`}>{project.type}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tagline */}
          <p className="text-white/50 text-sm leading-relaxed mb-5 italic">
            &ldquo;{project.tagline}&rdquo;
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {project.metrics.map(({ icon: Icon, label, value }) => (
              <div key={label} className={`glass rounded-xl border border-white/[0.06] p-3 text-center`}>
                <Icon className={`w-4 h-4 ${project.accentColor} mx-auto mb-1.5`} />
                <div className={`text-sm font-bold ${project.accentColor}`}>{value}</div>
                <div className="text-xs text-white/30 leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <p className="text-white/60 text-sm leading-relaxed mb-4">{project.overview}</p>

          {/* Expandable details */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-2 text-sm ${project.accentColor} hover:opacity-80 transition-opacity mb-4`}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {expanded ? "Hide Details" : "View Case Study"}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-5 pb-2 border-t border-white/[0.06] pt-5">
                  {/* Challenge */}
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-widest mb-2 font-medium">Challenge</div>
                    <p className="text-white/55 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  {/* Solution */}
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-widest mb-2 font-medium">Solution</div>
                    <p className="text-white/55 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  {/* Contributions */}
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-widest mb-3 font-medium">My Contributions</div>
                    <ul className="space-y-2">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                          <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor.replace("text-", "bg-")} mt-2 flex-shrink-0 opacity-70`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mt-2 pt-4 border-t border-white/[0.06]">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 text-xs text-white/40 glass rounded border border-white/[0.06]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Projects</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                Featured <span className="text-gradient">Work</span>
              </h2>
              <p className="text-white/50 text-[15px] max-w-xl">
                Production systems built with real constraints — performance, scale, and reliability.
              </p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-white/[0.08] hover:border-white/15 text-white/60 hover:text-white text-sm transition-all flex-shrink-0"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
