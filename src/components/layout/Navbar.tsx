import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";

const NAV_LINKS: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-ink" : "text-slate-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-display font-semibold text-ink">
          {site.name}
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink border border-line rounded-md px-3 py-1.5 hover:border-ink/40 transition-colors"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
