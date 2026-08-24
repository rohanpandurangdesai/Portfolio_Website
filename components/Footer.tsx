"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { navLinks } from "@/lib/data";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-800/50">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
              RD
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{site.name}</p>
              <p className="text-xs text-slate-500">{site.shortRole}</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:text-brand-cyan"
            >
              <FaLinkedin />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:text-brand-cyan"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind
          CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
