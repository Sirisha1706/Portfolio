"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "sadhu-sirisha-sundari",
    href: "https://linkedin.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "sirishasundari",
    href: "https://github.com",
    color: "text-white/70",
    bg: "bg-white/5",
    border: "border-white/10",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "sirisha@example.com",
    href: "mailto:sirisha@example.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
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

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500/60" />
            <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-white/50 text-[15px] max-w-xl mb-12">
            Open to full-time roles, freelance projects, and technical collaborations. Let&apos;s build something great.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Status card */}
            <FadeIn delay={0.1}>
              <div className="glass rounded-2xl border border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-medium">Available for Work</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Currently seeking full-time opportunities in full-stack engineering or cloud-aware development roles.
                </p>
              </div>
            </FadeIn>

            {/* Location */}
            <FadeIn delay={0.15}>
              <div className="glass rounded-2xl border border-white/[0.08] p-5 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/40 flex-shrink-0" />
                <div>
                  <div className="text-white/70 text-sm font-medium">Location</div>
                  <div className="text-white/40 text-xs">India · Open to Remote</div>
                </div>
              </div>
            </FadeIn>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href, color, bg, border }, i) => (
                <FadeIn key={label} delay={0.2 + i * 0.07}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`glass rounded-2xl border ${border} p-5 flex items-center gap-4 hover:scale-[1.02] transition-all duration-200 group block`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{label}</div>
                      <div className="text-white/35 text-xs">{handle}</div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.2} >
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/[0.08] p-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Send a Message</h3>
                </div>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
                    <h4 className="text-white font-semibold text-lg mb-2">Message Sent!</h4>
                    <p className="text-white/50 text-sm">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-5 py-2 text-sm glass border border-white/10 rounded-xl text-white/60 hover:text-white transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 font-medium" htmlFor="name">
                          Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-2.5 bg-white/[0.04] border rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all ${
                            errors.name
                              ? "border-rose-500/50 focus:ring-rose-500/50"
                              : "border-white/[0.08] focus:border-blue-500/50 focus:ring-blue-500/30"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5 font-medium" htmlFor="email">
                          Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-2.5 bg-white/[0.04] border rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? "border-rose-500/50 focus:ring-rose-500/50"
                              : "border-white/[0.08] focus:border-blue-500/50 focus:ring-blue-500/30"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium" htmlFor="message">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity or project..."
                        className={`w-full px-4 py-2.5 bg-white/[0.04] border rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                          errors.message
                            ? "border-rose-500/50 focus:ring-rose-500/50"
                            : "border-white/[0.08] focus:border-blue-500/50 focus:ring-blue-500/30"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3 bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm glow-blue"
                    >
                      {status === "submitting" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
