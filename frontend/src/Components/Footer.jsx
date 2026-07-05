import { profile } from "../../Data/profile.js";

/**
 * Footer Component
 * Site footer with copyright information.
 * - Auto-calculates current year
 * - Pushed to left on desktop (respects md:ml-20 sidebar width)
 * - Social links available in SideBar component
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="ml-0 md:ml-20 border-t border-border bg-card px-6 md:px-16 py-8"
      data-ocid="footer.section"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="font-body text-sm text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
