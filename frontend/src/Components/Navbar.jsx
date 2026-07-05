import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection.jsx";
import ThemeToggle from "../Components/ThemeToggle.jsx";

/**
 * Navigation links array
 * Each link has an id (matches section IDs in DOM) and a label for display
 */
const LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "expertise", label: "EXPERTISE" },
  { id: "contact", label: "CONTACT" },
];

/**
 * Navbar Component
 * Fixed header with navigation links, theme toggle, and mobile menu.
 * - Tracks active section using IntersectionObserver
 * - Highlights the current section link
 * - Responsive: Full nav on desktop, hamburger menu on mobile
 * - Smooth scroll to sections on link click
 */
export default function Navbar() {
  // Get current active section from IntersectionObserver hook
  const active = useActiveSection();
  // Track mobile menu open/close state
  const [open, setOpen] = useState(false);

  /**
   * Smooth scroll to a section by ID and close mobile menu
   * @param {string} id - The section ID to scroll to
   */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:pl-24 md:pr-8 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <span className="font-display text-sm font-semibold tracking-wide text-foreground hidden sm:block">
          NEL<span className="text-primary">.</span>
        </span>
      </div>

      <nav
        className="hidden md:flex items-center gap-1.5"
        data-ocid="navbar.list"
      >
        {LINKS.map((link) => {
          const isActive = active === link.id;
          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              data-ocid={`navbar.${link.id}.link`}
              className={`rounded-pill px-5 py-2 font-display text-xs font-semibold tracking-wider transition-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-[#E9E9F2] text-foreground/80 hover:bg-secondary hover:text-foreground dark:bg-secondary dark:text-secondary-foreground"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        data-ocid="navbar.menu_button"
        className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed top-0 right-0 h-screen w-64 bg-card border-l border-border p-6 pt-20 md:hidden"
            data-ocid="navbar.mobile_menu"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((link) => {
                const isActive = active === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    data-ocid={`navbar.mobile.${link.id}.link`}
                    className={`rounded-pill px-5 py-3 text-left font-display text-sm font-semibold tracking-wider transition-smooth ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
