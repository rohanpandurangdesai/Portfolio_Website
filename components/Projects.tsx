"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import { projects } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TechIcon } from "./ui/TechIcon";

// Maps a display tech name to a TechIcon key.
const iconKey: Record<string, string> = {
  AWS: "aws",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Terraform: "terraform",
  Jenkins: "jenkins",
  Git: "githubactions",
  "Argo CD": "argocd",
  Helm: "helm",
  Ansible: "ansible",
  SonarQube: "sonarqube",
};

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Project"
        subtitle="An end-to-end, cloud-native build showcasing IaC, containers and GitOps."
      />

      {projects.map((p) => (
        <Reveal key={p.title}>
          <div className="glass-strong overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left: details */}
              <div className="p-7 sm:p-9">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan">
                  Cloud-Native · GitOps
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Features
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <FaCircleCheck className="mt-0.5 shrink-0 text-brand-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-slate-200"
                    >
                      <TechIcon name={iconKey[t] ?? "yaml"} className="text-sm" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: architecture / workflow visual */}
              <div className="relative flex flex-col justify-center border-t border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-7 sm:p-9 lg:border-l lg:border-t-0">
                <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
                <p className="relative mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Deployment Workflow
                </p>

                <div className="relative flex flex-col gap-3">
                  {p.workflow.map((stage, i) => (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      className="flex items-center gap-3"
                    >
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-glow">
                        {i + 1}
                      </span>
                      <div className="glass flex-1 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200">
                        {stage}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-brand-cyan"
                >
                  Continuous Delivery <FaArrowRight />
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
