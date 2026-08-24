"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCloud,
  FaCode,
  FaGears,
  FaRocket,
  FaShieldHalved,
} from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { aboutSkills, focusAreas } from "@/lib/data";
import { site } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const focusIcons: Record<string, typeof FaCloud> = {
  cloud: FaCloud,
  automation: FaGears,
  pipeline: FaRocket,
  reliability: FaChartLine,
  monitor: FaChartLine,
  security: FaShieldHalved,
};

// give a couple of areas distinct icons
focusIcons.reliability = FaCode;

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About Me"
        title="Reliability-obsessed DevOps Engineer"
        subtitle={`DevOps professional with ${site.experienceYears} years of experience designing and managing scalable cloud infrastructures supporting millions of users.`}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Skill chips */}
        <Reveal direction="right">
          <div className="glass h-full rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">
              Core Technologies
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Hands-on experience across the modern cloud-native toolchain.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {aboutSkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-slate-200"
                >
                  <FaCircleCheck className="shrink-0 text-brand-cyan" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Focus areas */}
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, i) => {
            const Icon = focusIcons[area.icon] ?? FaCloud;
            return (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="glow-border glass group h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient/10 text-brand-cyan ring-1 ring-white/10">
                    <Icon className="text-xl" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-white">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
