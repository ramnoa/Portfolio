import { motion } from "framer-motion";
import { expertise } from "../../data/expertise.js";
import SectionWrapper from "./SectionWrapper";

/**
 * Expertise Section Component
 * Displays technical skills and competencies in animated cards.
 * Each card appears with a staggered animation on scroll.
 */

/**
 * Animation variants for expertise cards
 * Each card animates in sequence with a delay based on index
 */
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

function AICore() {
  // Glowing neural-network ring composition with pulsing nodes.
  const nodes = [
    { x: 50, y: 8 },
    { x: 88, y: 30 },
    { x: 92, y: 70 },
    { x: 64, y: 94 },
    { x: 36, y: 94 },
    { x: 8, y: 70 },
    { x: 12, y: 30 },
  ];
  return (
    <div className="relative h-32 w-32 md:h-40 md:w-40" aria-hidden="true">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#3b82f6]/20 blur-2xl" />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="aiCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
          <linearGradient id="aiLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        {[42, 32, 22].map((r, i) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="url(#aiLine)"
            strokeOpacity={0.35 - i * 0.08}
            strokeWidth="0.6"
          />
        ))}

        {/* Connecting lines from center to nodes */}
        {nodes.map((n) => (
          <line
            key={`l-${n.x}-${n.y}`}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="url(#aiLine)"
            strokeOpacity="0.5"
            strokeWidth="0.5"
          />
        ))}

        {/* Outer nodes */}
        {nodes.map((n, i) => (
          <circle
            key={`n-${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r="2.4"
            fill="#93c5fd"
            style={{
              filter: "drop-shadow(0 0 3px #60a5fa)",
              animation: `aiPulse 2.4s ease-in-out ${i * 0.25}s infinite`,
              transformOrigin: `${n.x}px ${n.y}px`,
            }}
          />
        ))}

        {/* Central core */}
        <circle cx="50" cy="50" r="14" fill="url(#aiCore)" />
        <circle
          cx="50"
          cy="50"
          r="14"
          fill="none"
          stroke="#bfdbfe"
          strokeOpacity="0.6"
          strokeWidth="0.8"
          style={{
            animation: "aiPulse 2s ease-in-out infinite",
            transformOrigin: "50px 50px",
          }}
        />
      </svg>

      {/* AI label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-lg md:text-xl font-bold text-white tracking-wider drop-shadow-[0_0_8px_rgba(147,197,253,0.9)]">
          AI
        </span>
      </div>

      <style>{`
        @keyframes aiPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
}

function ExpertiseCard({ item, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      data-ocid={`expertise.item.${index + 1}`}
      className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg"
    >
      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-foreground mb-3">
        {item.title}
      </h3>
      <p className="font-body text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground mb-5">
        {item.description}
      </p>
      <p className="font-body text-sm md:text-[0.95rem] font-medium text-primary leading-relaxed">
        {item.tools.join(" • ")}
      </p>
    </motion.article>
  );
}

export default function Expertise() {
  return (
    <SectionWrapper id="expertise">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground text-center mb-4"
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-body text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14"
        >
          The languages, frameworks, and tools I use to bring digital products
          to life.
        </motion.p>

        <div className="relative">
          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {expertise.map((item, i) => (
              <ExpertiseCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Central AI graphic — overlaps the 4 cards on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="rounded-full border-4 border-[#0b0e14] bg-[#0b0e14]/80 backdrop-blur-sm">
              <AICore />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
