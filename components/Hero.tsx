"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown, FaAws, FaDownload } from "react-icons/fa6";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCountUp } from "@/hooks/useCountUp";
import { heroStats } from "@/lib/data";
import { site } from "@/lib/site";
import { AnimatedBackground } from "./ui/AnimatedBackground";
import { TechIcon } from "./ui/TechIcon";

function Stat({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, display } = useCountUp(value, { decimals });
  return (
    <div className="text-center sm:text-left">
      <p className="text-2xl font-bold text-white sm:text-3xl">
        <span ref={ref}>{display}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

// Tech badges that orbit the profile photo.
const orbit = [
  { icon: "aws", top: "-6%", left: "12%", dur: 7 },
  { icon: "kubernetes", top: "8%", left: "92%", dur: 8 },
  { icon: "docker", top: "78%", left: "-8%", dur: 9 },
  { icon: "terraform", top: "94%", left: "70%", dur: 7.5 },
];

export function Hero() {
  const typed = useTypewriter([
    "Cloud Infrastructure",
    "Reliable Production Systems",
    "CI/CD Automation",
    "Kubernetes at Scale",
  ]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBackground />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities · {site.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building Scalable{" "}
            <span className="gradient-text animate-gradient-x">
              Cloud Infrastructure
            </span>{" "}
            & Reliable Production Systems
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 flex h-7 items-center font-mono text-lg text-brand-cyan sm:text-xl"
          >
            <span className="text-slate-500">&gt;&nbsp;</span>
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-brand-cyan" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            DevOps Engineer with {site.experienceYears} years of experience
            designing, automating, and managing highly available cloud-native
            platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={site.resume}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <FaDownload className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </motion.div>
        </div>

        {/* Right: photo with orbiting tech */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Rotating glow ring */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[105%] w-[105%] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#22D3EE,#3B82F6,#8B5CF6,#22D3EE)] opacity-20 blur-2xl" />
          </div>

          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 shadow-glow">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <Image
                src="/profile.png"
                alt="Rohan Desai, DevOps Engineer"
                width={763}
                height={728}
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between px-3 py-3">
              <div>
                <p className="text-sm font-semibold text-white">{site.name}</p>
                <p className="text-xs text-slate-400">{site.shortRole}</p>
              </div>
              <FaAws className="text-2xl text-brand-cyan" aria-hidden="true" />
            </div>
          </div>

          {/* Orbiting badges */}
          {orbit.map((o) => (
            <motion.div
              key={o.icon}
              className="glass absolute flex h-12 w-12 items-center justify-center rounded-xl shadow-card"
              style={{ top: o.top, left: o.left }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              <TechIcon name={o.icon} className="text-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
