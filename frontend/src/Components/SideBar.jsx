import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../Data/profile.js";

/**
 * Social media icon array
 * Links stored here for easy maintenance and DRY principle
 * Used in SideBar component
 */
const ICONS = [
  { href: profile.social.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: profile.social.github, icon: FaGithub, label: "GitHub" },
  { href: profile.social.email, icon: FaEnvelope, label: "Email" },
];

/**
 * SideBar Component
 * Fixed vertical sidebar visible only on desktop (md:).
 * Features:
 * - Social media links (LinkedIn, GitHub, Email)
 * - Vertical divider line for aesthetic
 * - Smooth hover animations and glow effects
 * - Hidden on mobile to save space
 */
export default function Sidebar() {
  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-20 flex-col items-center justify-end pb-10 bg-sidebar border-r border-sidebar-border"
      data-ocid="sidebar.section"
    >
      <div className="flex flex-col items-center gap-5">
        {ICONS.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            data-ocid={`sidebar.${label.toLowerCase()}.link`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sidebar-border text-sidebar-foreground/70 transition-smooth hover:border-primary hover:text-primary hover:shadow-glow"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <span className="mt-2 h-20 w-px bg-sidebar-border" aria-hidden="true" />
      </div>
    </aside>
  );
}
