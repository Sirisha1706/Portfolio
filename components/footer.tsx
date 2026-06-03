"use client";

import { Terminal, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  More: [
    { label: "Architecture", href: "#architecture" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/[0.06] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">
                Sirisha<span className="text-blue-400">.</span>dev
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Full Stack Engineer building real-time systems, scalable web applications, and cloud-aware software.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sirisha@example.com"
                className="w-9 h-9 glass rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs text-white/30 uppercase tracking-widest font-medium mb-4">{group}</div>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={href.startsWith("#") ? (e) => { e.preventDefault(); handleNavClick(href); } : undefined}
                      className="text-sm text-white/45 hover:text-white/80 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sadhu Sirisha Sundari. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors group"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
