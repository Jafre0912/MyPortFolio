import WorkList from "../components/sections/WorkList";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <SectionHeading
        title="Work"
        description="Projects spanning e-commerce, healthcare booking, and farm management systems."
      />
      <WorkList projects={projects} />
    </section>
  );
}
