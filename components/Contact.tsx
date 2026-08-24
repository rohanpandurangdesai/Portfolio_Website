"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { site } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const details = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: site.location,
    href: undefined,
  },
];

const buttons = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: site.socials.linkedin,
    className: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2]",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: site.socials.github,
    className: "hover:border-white/40 hover:text-white",
  },
  {
    icon: FaEnvelope,
    label: "Email Me",
    href: `mailto:${site.email}`,
    className: "hover:border-brand-cyan/60 hover:text-brand-cyan",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="glow-border glass-strong relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-blue/20 blur-[100px]"
            animate={{ x: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-violet/20 blur-[100px]"
            animate={{ x: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Reliable"
            subtitle="Open to DevOps / SRE roles and collaborations. Reach out — I usually reply within a day."
          />

          {/* Contact details */}
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {details.map((d, i) => {
              const Inner = (
                <div className="glass flex h-full flex-col items-center gap-2 rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <d.icon />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    {d.label}
                  </span>
                  <span className="text-sm font-medium text-slate-200 break-all">
                    {d.value}
                  </span>
                </div>
              );
              return (
                <Reveal key={d.label} delay={i * 0.08}>
                  {d.href ? (
                    <a href={d.href} className="block h-full">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {buttons.map((b, i) => (
              <motion.a
                key={b.label}
                href={b.href}
                target={b.href.startsWith("http") ? "_blank" : undefined}
                rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`glass inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition-all ${b.className}`}
              >
                <b.icon className="text-lg" />
                {b.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
