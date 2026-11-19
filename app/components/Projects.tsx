import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

const Projects = ({ limit, showAllLink = false }: { limit?: number; showAllLink?: boolean }) => (
  <section>
    <SectionHeader
      eyebrow="Selected work"
      title="Projects"
      description="A few projects I created as part of my learning and skill development."
    />
    <div className="grid gap-5 sm:grid-cols-2">
      {PROJECTS.slice(0, limit).map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
    {showAllLink && (
      <Link href="/Projects" className="btn-secondary mt-6">
        View all projects <ArrowRight className="size-4" />
      </Link>
    )}
  </section>
);

export default Projects;
