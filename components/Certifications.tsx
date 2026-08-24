"use client";

import { FaAward } from "react-icons/fa6";
import { certifications } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TechIcon } from "./ui/TechIcon";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & Recognition"
        subtitle="Validated expertise backing hands-on production experience."
      />

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.1}>
            <div className="glow-border glass-strong group relative h-full overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-violet/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <TechIcon name={cert.icon} className="text-3xl" />
                </span>
                <FaAward className="text-2xl text-brand-cyan" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
              <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-brand-cyan">
                {cert.code}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
