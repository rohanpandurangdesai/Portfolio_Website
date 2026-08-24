"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TechIcon } from "./ui/TechIcon";

export function TechStack() {
  return (
    <section id="stack" className="relative section-pad">
      <SectionHeading
        eyebrow="Technology Stack"
        title="Tools I Work With Daily"
        subtitle="A production-grade toolkit spanning cloud, containers, delivery, observability and security."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.05}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-brand-gradient" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ii * 0.05 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="glow-border flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5"
                  >
                    <TechIcon name={item.icon} className="text-xl" />
                    <span className="text-sm font-medium text-slate-200">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
