import PageShell from "../components/PageShell";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="pt-6">
        <Projects />
      </div>
    </PageShell>
  );
}
