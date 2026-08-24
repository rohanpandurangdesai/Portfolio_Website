"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { experience } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've Made Impact"
        subtitle="Delivering resilient cloud platforms and automation in production."
      />

      {experience.map((job) => (
        <div key={job.company} className="relative">
          {/* Header card */}
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <FaBriefcase className="text-lg" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="text-brand-cyan">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-400 sm:items-end">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                    {job.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaLocationDot className="text-brand-violet" />
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Achievement cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {job.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glow-border glass group relative rounded-2xl p-5"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-cyan/10 text-sm font-bold text-brand-cyan ring-1 ring-brand-cyan/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
