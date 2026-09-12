import Button from "../ui/Button";
import { site } from "../../data/site";

export default function Hero() {
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 grid-fade pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-sm text-white/60 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {site.availability}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            {site.role}.
            <br />
            {site.tagline}
          </h1>

          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            {site.bio.split(". ")[0]}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/work" variant="primary">View my work</Button>
            <Button href="/contact" variant="secondary">
              <span className="text-white">Get in touch</span>
            </Button>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end w-full max-w-sm">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] font-mono text-sm overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <div className="p-5 space-y-1.5 text-white/80">
              <p><span className="text-emerald-400">$</span> whoami</p>
              <p className="text-white/50 pl-4">{site.name.toLowerCase().replace(" ", "_")}</p>
              <p className="mt-3"><span className="text-emerald-400">$</span> cat role.txt</p>
              <p className="text-white/50 pl-4">{site.role}</p>
              <p className="mt-3"><span className="text-emerald-400">$</span> cat focus.txt</p>
              <p className="text-white/50 pl-4">MERN · DSA · Clean Architecture</p>
              <p className="mt-3 flex items-center gap-1">
                <span className="text-emerald-400">$</span>
                <span className="w-2 h-4 bg-white/70 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
