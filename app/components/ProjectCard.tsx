import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="card group flex flex-col gap-4"
  >
    <div className="overflow-hidden rounded-lg border border-line/70 bg-muted">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div className="flex items-start justify-between gap-3">
      <h3 className="headline-sm text-ink">{project.title}</h3>
      <ArrowUpRight className="mt-1 size-5 shrink-0 text-stone transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </div>
    <p className="text-sm leading-6 text-stone">{project.description}</p>
    <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1">
      {project.tech.map(({ name }) => (
        <li key={name} className="text-xs font-medium text-stone">
          {name}
        </li>
      ))}
    </ul>
  </a>
);

export default ProjectCard;
