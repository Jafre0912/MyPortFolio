import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Facebook } from "lucide-react";
import { site, socials } from "../data/site";

const ICONS = { github: Github, linkedin: Linkedin, facebook: Facebook };

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <div className="max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-ink mb-4">Let's talk</h1>
        <p className="text-slate-muted leading-relaxed mb-10">
          The fastest way to reach me is email. I'll get back to you within a day or two.
        </p>

        <div className="space-y-4">
          <button
            onClick={copyEmail}
            className="w-full flex items-center justify-between gap-3 rounded-md border border-line bg-white px-5 py-4 text-left hover:border-ink/30 transition-colors"
          >
            <span className="flex items-center gap-3">
              <Mail size={18} className="text-slate-muted" />
              <span className="font-medium text-ink">{site.email}</span>
            </span>
            {copied ? (
              <span className="flex items-center gap-1 text-sm text-emerald-600"><Check size={16} /> Copied</span>
            ) : (
              <Copy size={16} className="text-slate-muted" />
            )}
          </button>

          <div className="flex items-center gap-3 rounded-md border border-line bg-white px-5 py-4">
            <Phone size={18} className="text-slate-muted" />
            <span className="font-medium text-ink">{site.phone}</span>
          </div>

          <div className="flex items-center gap-3 rounded-md border border-line bg-white px-5 py-4">
            <MapPin size={18} className="text-slate-muted" />
            <span className="font-medium text-ink">{site.location}</span>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-slate-muted mb-3">Or find me elsewhere</p>
          <div className="flex gap-4">
            {socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-md border border-line text-slate-muted hover:text-ink hover:border-ink/30 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
