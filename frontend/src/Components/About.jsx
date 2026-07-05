import { motion } from "framer-motion";
import { profile } from "../../Data/profile.js";
import { stack } from "../../Data/stack.js";
import SectionWrapper from "./SectionWrapper.jsx";

/**
 * About Section Component
 * Displays a brief bio with an animated AI brain graphic and tech stack.
 * Layout: Brain graphic on left (desktop), bio and skills on right
 */

/* ------------------------------------------------------------------ */
/*  AI Brain circular graphic — inline SVG + CSS animations          */
/* ------------------------------------------------------------------ */
function BrainGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="188"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 14"
          />
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        className="absolute inset-6"
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#60A5FA"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
        </svg>
      </motion.div>

      {/* Glow halo */}
      <div className="absolute inset-10 rounded-full bg-[#3B82F6]/20 blur-3xl" />

      {/* Central brain + AI text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 200 200" className="h-3/5 w-3/5" aria-hidden="true">
          <defs>
            <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="brainFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="92" fill="url(#brainGlow)" />
          {/* Stylized brain hemispheres */}
          <path
            d="M100 30
               C 70 30 55 55 55 80
               C 40 85 38 110 52 122
               C 48 138 60 158 80 158
               C 88 168 112 168 120 158
               C 140 158 152 138 148 122
               C 162 110 160 85 145 80
               C 145 55 130 30 100 30 Z"
            fill="url(#brainFill)"
            fillOpacity="0.18"
            stroke="#60A5FA"
            strokeWidth="2"
          />
          {/* Brain folds */}
          <path
            d="M100 30 C 100 60 100 130 100 168"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M75 55 C 85 70 75 90 85 105 M125 55 C 115 70 125 90 115 105"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <path
            d="M65 110 C 78 120 70 135 82 145 M135 110 C 122 120 130 135 118 145"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          {/* AI text */}
          <text
            x="100"
            y="108"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize="34"
            fill="#ffffff"
            letterSpacing="2"
          >
            AI
          </text>
        </svg>
      </motion.div>

      {/* Overlaid laptop showing code */}
      <motion.div
        className="absolute left-1/2 top-[58%] z-20 w-[42%] -translate-x-1/2"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="rounded-lg border border-[#60A5FA]/40 bg-[#0b0e14]/90 p-1.5 shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)] backdrop-blur-sm">
          <div className="flex gap-1 px-0.5 pb-1">
            <span className="h-1 w-1 rounded-full bg-red-400" />
            <span className="h-1 w-1 rounded-full bg-yellow-400" />
            <span className="h-1 w-1 rounded-full bg-green-400" />
          </div>
          <svg viewBox="0 0 100 56" className="w-full" aria-hidden="true">
            <text
              x="6"
              y="14"
              fontFamily="JetBrains Mono, monospace"
              fontSize="6"
              fill="#60A5FA"
            >
              const ai =
            </text>
            <text
              x="6"
              y="24"
              fontFamily="JetBrains Mono, monospace"
              fontSize="6"
              fill="#93C5FD"
            >
              train(data);
            </text>
            <text
              x="6"
              y="34"
              fontFamily="JetBrains Mono, monospace"
              fontSize="6"
              fill="#FACC15"
            >
              return model;
            </text>
            <text
              x="6"
              y="44"
              fontFamily="JetBrains Mono, monospace"
              fontSize="6"
              fill="#9aa0ad"
            >
              {"</>"} ship();
            </text>
          </svg>
        </div>
        <div className="mx-auto h-1 w-1/3 rounded-b-md bg-[#60A5FA]/40" />
      </motion.div>

      {/* Floating code brackets */}
      <motion.div
        className="absolute left-2 top-10 text-2xl font-bold text-[#60A5FA]"
        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"</>"}
      </motion.div>
      <motion.div
        className="absolute right-4 top-20 text-xl font-bold text-[#93C5FD]"
        animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        {"{ }"}
      </motion.div>

      {/* Network nodes around the circle */}
      {[
        { top: "6%", left: "50%" },
        { top: "50%", left: "94%" },
        { top: "94%", left: "50%" },
        { top: "50%", left: "6%" },
        { top: "18%", left: "82%" },
        { top: "82%", left: "18%" },
      ].map((pos, i) => (
        <motion.div
          key={`p-${pos.top}-${pos.left}`}
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60A5FA] shadow-[0_0_12px_2px_rgba(96,165,250,0.8)]"
          style={{ top: pos.top, left: pos.left }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="1">
          <line x1="200" y1="24" x2="200" y2="200" />
          <line x1="376" y1="200" x2="200" y2="200" />
          <line x1="200" y1="376" x2="200" y2="200" />
          <line x1="24" y1="200" x2="200" y2="200" />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tech stack card                                                   */
/* ------------------------------------------------------------------ */
function TechCard({ tech, index }) {
  const Icon = tech.icon;
  return (
    <motion.div
      data-ocid={`about.stack.item.${index + 1}`}
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/60 px-3 py-4 backdrop-blur-sm transition-smooth hover:border-primary/50 hover:bg-card"
    >
      <Icon
        className="h-8 w-8 md:h-9 md:w-9"
        style={{ color: tech.color }}
        aria-hidden="true"
      />
      <span className="font-body text-xs md:text-sm font-medium text-muted-foreground">
        {tech.name}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  About section                                                     */
/* ------------------------------------------------------------------ */
export default function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      {/* Heading block */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl font-body text-sm md:text-base text-muted-foreground"
        >
          Bridging the gap between intelligent data systems and modern user
          experiences.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — brain graphic */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <BrainGraphic />
        </motion.div>

        {/* Right — text + CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground">
            AI Engineer &amp; Full-Stack Developer
          </h3>
          <p className="mt-5 font-body text-sm md:text-base leading-relaxed text-muted-foreground">
            I am an AI Engineer and Full-Stack Developer focused on building
            intelligent, data-driven systems. My work centers on computer vision
            pipelines, machine learning models, and modern web applications
            using React and Laravel. I build systems that turn complex logic,
            datasets, and interfaces into functional, production-ready software.
            My focus is on developing practical solutions that combine machine
            intelligence with scalable backend systems to solve real-world
            problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              data-ocid="about.get_cv.primary_button"
              href={profile.cvUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-smooth hover:shadow-primary/40"
            >
              Get My CV
            </motion.a>
            {/* <motion.a
              data-ocid="about.hire_me.secondary_button"
              href={profile.whatsapp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary transition-smooth hover:bg-primary/10"
            >
              Hire Me
            </motion.a> */}
          </div>
        </motion.div>
      </div>

      {/* My Stack */}
      <div className="mx-auto mt-20 max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-display text-2xl md:text-3xl font-semibold text-foreground"
        >
          My Stack
        </motion.h3>
        <div
          data-ocid="about.stack.list"
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7"
        >
          {stack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
