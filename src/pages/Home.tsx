import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/sections/Hero";
import Stack from "../components/sections/Stack";
import WorkList from "../components/sections/WorkList";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <Stack />

      <section className="max-w-content mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <SectionHeading
            title="Selected work"
            description="A few projects that shaped how I think about building software end to end."
          />
          <Link
            to="/work"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-signal transition-colors mb-10"
          >
            View all
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <WorkList projects={featured} />

        <Link
          to="/work"
          className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink"
        >
          View all work
          <ArrowUpRight size={14} />
        </Link>
      </section>
    </>
  );
}
