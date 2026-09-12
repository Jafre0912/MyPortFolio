import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { site, socials } from "../../data/site";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
};

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-content mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2">
        <div>
          <p className="font-display font-semibold text-lg">{site.name}</p>
          <p className="mt-2 text-white/60 max-w-sm">{site.role} based in {site.location}.</p>

          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Mail size={16} />
            {site.email}
          </a>
        </div>

        <div className="sm:text-right">
          <div className="flex sm:justify-end gap-4">
            {socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
