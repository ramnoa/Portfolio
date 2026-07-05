import { motion } from "framer-motion";
import { projects } from "../../data/projects.js";
import SectionWrapper from "./SectionWrapper";

/**
 * Portfolio Section Component
 * Showcases featured projects in a responsive grid.
 * - Projects from data/projects.js
 * - Responsive: 1 column mobile, 2 columns desktop
 * - Each project card is an animated article with image, title, description, and tags
 */
export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2
            data-ocid="portfolio.heading"
            className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
          >
            Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-sm md:text-base text-muted-foreground">
            A showcase of intelligent systems, visual pipelines, and advanced
            digital architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              data-ocid={`portfolio.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-subtle transition-smooth"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6 md:p-7">
                <h3
                  data-ocid={`portfolio.title.${i + 1}`}
                  className="font-display text-lg md:text-xl font-bold text-foreground leading-snug"
                >
                  {project.title}
                </h3>
                <p
                  data-ocid={`portfolio.description.${i + 1}`}
                  className="mt-3 font-body text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground"
                >
                  {project.description}
                </p>
                <div
                  data-ocid={`portfolio.tags.${i + 1}`}
                  className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs md:text-sm font-medium text-primary"
                >
                  {project.tags.map((tag, idx) => (
                    <span key={tag} className="flex items-center gap-x-2">
                      {idx > 0 && (
                        <span aria-hidden="true" className="text-primary">
                          •
                        </span>
                      )}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
