import { skillGroups } from "../../data/skills";
import Tag from "../ui/Tag";
import SectionHeading from "../ui/SectionHeading";

export default function Stack() {
  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <SectionHeading
        title="Stack"
        description="Tools I reach for regularly, grouped by where they sit in a project."
      />

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-ink mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
