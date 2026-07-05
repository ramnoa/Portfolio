import { motion } from "framer-motion";
import { profile } from "../../data/profile.js";
import SectionWrapper from "./SectionWrapper";

/**
 * Animation easing function for smooth, natural motion
 * [tension, friction, velocity] - creates a smooth deceleration effect
 */
const easeOut = [0.4, 0, 0.2, 1];

/**
 * Container animation: staggered children with delay
 * Children appear one after another with a time gap (staggerChildren)
 */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual item animation: fade in and slide up
 * Each item starts invisible and below its final position, then animates to visible
 */
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/**
 * Image animation: fade in and scale up slightly
 * Creates a smooth zoom-in effect as the image appears
 */
const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/**
 * Hero Section Component
 * The landing section with profile image, introduction, and CTA buttons
 * Features:
 * - Animated entrance with staggered children
 * - Responsive layout (profile image on left desktop, top mobile)
 * - Profile data from profile.js
 */
export default function Hero() {
  return (
    <SectionWrapper
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16"
      >
        {/* Profile image — left on desktop, top on mobile (reversed via flex-col-reverse) */}
        <motion.div
          variants={imageVariants}
          className="relative shrink-0 order-2 md:order-1"
        >
          {/* Glow ring */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/40 via-primary/20 to-accent/30 blur-2xl animate-pulse-glow"
          />
          {/* Rotating dashed accent ring */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-full border border-dashed border-primary/30 animate-spin-slow"
          />
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden ring-4 ring-primary/60 shadow-glow bg-card">
            <img
              src={profile.profileImage}
              alt="Noah Ewalan Logong — AI Engineer portrait"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Text block — right on desktop, below on mobile */}
        <div className="flex-1 min-w-0 text-center md:text-left order-1 md:order-2">
          <motion.p
            variants={itemVariants}
            className="font-body text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-3"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-primary leading-[1.05] mb-4 break-words"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-body text-base sm:text-lg md:text-xl font-medium text-foreground mb-5"
          >
            {profile.subtitle}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            {profile.description}
          </motion.p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
