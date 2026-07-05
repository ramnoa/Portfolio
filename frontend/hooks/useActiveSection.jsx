import { useEffect, useState } from "react";

// Section IDs must match the id attributes in SectionWrapper components
const SECTION_IDS = ["home", "about", "portfolio", "expertise", "contact"];

/**\n * useActiveSection Hook\n * Scroll-spy functionality: tracks which section is currently visible in viewport\n * and returns its ID. This is used by Navbar to highlight the active nav link.\n * \n * How it works:\n * 1. Creates an IntersectionObserver for each section\n * 2. Monitors when sections enter/leave the viewport\n * 3. Updates state with the most visible section\n * 4. Cleans up observers on unmount\n * \n * @returns {string} The ID of the currently active section\n */
export default function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        // Treat the middle band of the viewport as the "active" zone
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return active;
}
