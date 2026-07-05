import { motion } from "framer-motion";

/**
 * SectionWrapper Component
 * Reusable wrapper for portfolio sections with:
 * - Scroll-triggered animations (fade in + slide up)
 * - Responsive padding
 * - Unique section ID for scroll-spy navigation
 *
 * @param {string} id - Unique section identifier (used by scroll-spy hook)
 * @param {ReactNode} children - Section content
 * @param {string} className - Optional additional Tailwind classes
 */
export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-16 py-20 md:py-28 ${className}`}
    >
      {/* Animates when section enters viewport (once only) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
