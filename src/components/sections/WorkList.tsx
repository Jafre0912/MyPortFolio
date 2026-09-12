import { ArrowUpRight } from "lucide-react";
import { Project } from "../../types";
import Tag from "../ui/Tag";

export default function WorkList({ projects, showImages = true }: { projects: Project[]; showImages?: boolean }) {
  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row sm:items-center gap-5 py-7 hover:bg-white/60 transition-colors px-2 -mx-2 rounded-md"
        >
          {showImages && project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-32 h-32 sm:h-20 object-cover border border-line rounded shrink-0"
            />
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-ink">{project.title}</h3>
              <ArrowUpRight
                size={16}
                className="text-slate-muted group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              />
            </div>
            <p className="mt-1.5 text-sm text-slate-muted leading-relaxed">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
