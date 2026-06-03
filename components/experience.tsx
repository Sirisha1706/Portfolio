"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Code2, CheckCircle2, Building2, Layers } from "lucide-react";

const experiences = [
  {
    role: "Oracle Cloud Engineer",
    company: "Oracle",
    type: "Cloud Infrastructure",
    period: "Earlier Experience",
    icon: Cloud,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    dotColor: "bg-cyan-400",
    ringColor: "ring-cyan-400/20",
    description:
      "Managed enterprise-grade cloud infrastructure at Oracle, ensuring high availability and resilience for production systems serving thousands of users.",
    responsibilities: [
      {
        title: "Infrastructure Monitoring",
        desc: "Implemented comprehensive monitoring frameworks for OCI services with proactive alerting and incident dashboards.",
      },
      {
        title: "Disaster Recovery",
        desc: "Designed and tested multi-region DR strategies to ensure RTO/RPO compliance for critical business systems.",
      },
      {
        title: "Business Continuity Planning",
        desc: "Contributed to BCP documentation and runbooks aligning infrastructure with organizational resilience goals.",
      },
      {
        title: "Incident Management",
        desc: "Led L2/L3 incident response, coordinated cross-functional teams, and conducted post-mortems to improve reliability.",
      },
      {
        title: "Production Support",
        desc: "Provided 24/7 production support for Oracle Cloud workloads, maintaining SLA commitments and uptime targets.",
      },
    ],
    tech: ["Oracle Cloud", "OCI Monitoring", "Disaster Recovery", "ITSM", "Bash", "Linux"],
  },
  {
    role: "MERN Stack Developer",
    company: "Current Role",
    type: "Full Stack Engineering",
    period: "Current",
    icon: Code2,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    dotColor: "bg-blue-400",
    ringColor: "ring-blue-400/20",
    description:
      "Building production-grade full-stack applications with modern technologies — real-time platforms, AI integrations, and high-performance APIs.",
    responsibilities: [
      {
        title: "Real-Time Trading Platform",
        desc: "Architected a live market data platform supporting 100+ concurrent users using WebSockets and Redis pub/sub.",
      },
      {
        title: "WebSockets & Real-Time Systems",
        desc: "Implemented bidirectional communication channels with Socket.IO and custom event-driven architectures.",
      },
      {
        title: "Redis Caching Layer",
        desc: "Reduced API latency significantly by implementing strategic Redis caching for high-frequency data queries.",
      },
      {
        title: "Authentication & RBAC",
        desc: "Built JWT-based auth with granular Role-Based Access Control supporting multiple permission tiers.",
      },
      {
        title: "Performance Optimization",
        desc: "Profiled and optimized React rendering, database queries, and Node.js event loops for production scale.",
      },
    ],
    tech: ["React", "Next.js", "Node.js", "Redis", "WebSockets", "PostgreSQL", "MongoDB", "TypeScript", "Docker", "JWT"],
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

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-16">
            From cloud infrastructure engineering to full-stack development — a journey defined by systems thinking and product building.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-blue-400/40 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <FadeIn key={exp.role} delay={idx * 0.15}>
                  <div className="md:pl-20 relative">
                    {/* Timeline dot (desktop) */}
                    <div className={`hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full items-center justify-center ring-4 ${exp.ringColor} ${exp.iconBg} border`}>
                      <Icon className={`w-4 h-4 ${exp.iconColor}`} />
                    </div>

                    {/* Card */}
                    <div className="glass rounded-2xl border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 overflow-hidden group">
                      {/* Card header */}
                      <div className="p-6 pb-4 border-b border-white/[0.06]">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center ${exp.iconBg} border`}>
                              <Icon className={`w-5 h-5 ${exp.iconColor}`} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg leading-tight">{exp.role}</h3>
                              <div className="flex items-center gap-2 mt-0.5">
                                <Building2 className="w-3 h-3 text-white/30" />
                                <span className="text-white/40 text-sm">{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className={`px-3 py-1 text-xs rounded-full border ${exp.iconBg} ${exp.iconColor} font-medium`}>
                              {exp.type}
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full glass border border-white/10 text-white/50">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/55 text-sm leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Responsibilities */}
                      <div className="p-6 pt-4">
                        <div className="grid sm:grid-cols-2 gap-3 mb-5">
                          {exp.responsibilities.map(({ title, desc }) => (
                            <div key={title} className="flex gap-3 group/item">
                              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${exp.iconColor} opacity-70`} />
                              <div>
                                <div className="text-white/80 text-sm font-medium leading-tight mb-0.5">{title}</div>
                                <div className="text-white/40 text-xs leading-relaxed">{desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="px-2.5 py-1 text-xs text-white/40 glass rounded-lg border border-white/[0.06] hover:text-white/70 hover:border-white/15 transition-all">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
