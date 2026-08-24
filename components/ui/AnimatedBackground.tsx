"use client";

import { motion } from "framer-motion";

// Fixed positions keep server and client render identical (no hydration drift).
const clouds = [
  { top: "12%", left: "8%", size: 46, dur: 9, delay: 0 },
  { top: "22%", left: "82%", size: 34, dur: 11, delay: 1.5 },
  { top: "58%", left: "6%", size: 30, dur: 10, delay: 0.8 },
  { top: "70%", left: "88%", size: 40, dur: 12, delay: 2 },
  { top: "40%", left: "50%", size: 26, dur: 13, delay: 1 },
  { top: "82%", left: "40%", size: 32, dur: 10.5, delay: 0.4 },
];

function Cloud({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 0.66}
      viewBox="0 0 64 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 40c7 0 13-6 13-13s-6-13-13-13c-1 0-2 .1-3 .3C45 6 38 1 30 1 20 1 12 9 12 19v.5C6 21 1 26 1 33s6 9 12 9h37Z"
        fill="url(#cloudg)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient id="cloudg" x1="0" y1="0" x2="64" y2="42">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Large blurred orbs */}
      <motion.div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-brand-violet/20 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-cyan/10 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating cloud icons */}
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top, left: c.left }}
          animate={{ y: [0, -22, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: c.dur,
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud size={c.size} />
        </motion.div>
      ))}
    </div>
  );
}
