import Button from "../components/ui/Button";
import { site } from "../data/site";

export default function About() {
  const paragraphs = site.bio.split(". ").reduce<string[]>((acc, sentence, i) => {
    const chunkIndex = Math.floor(i / 2);
    acc[chunkIndex] = (acc[chunkIndex] || "") + sentence + ". ";
    return acc;
  }, []);

  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-14">
        <div className="lg:col-span-2">
          <h1 className="font-display text-3xl font-semibold text-ink mb-6">Who I am</h1>
          <div className="space-y-4 text-slate-muted leading-relaxed max-w-2xl">
            {paragraphs.map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>

        <aside className="border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-10">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-slate-muted">Based in</dt>
              <dd className="mt-1 font-medium text-ink">{site.location}</dd>
            </div>
            <div>
              <dt className="text-slate-muted">Focus</dt>
              <dd className="mt-1 font-medium text-ink">Full-stack web development</dd>
            </div>
            <div>
              <dt className="text-slate-muted">Currently</dt>
              <dd className="mt-1 font-medium text-ink">{site.availability}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
