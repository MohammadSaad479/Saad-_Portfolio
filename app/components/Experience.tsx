import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "@/lib/data";

const Experience = () => (
  <section>
    <SectionHeader eyebrow="Work" title="Experience" description="A summary of my professional work so far." />
    <div className="flex flex-col gap-4">
      {EXPERIENCE.map((job) => (
        <article key={job.company} className="card">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <img src={job.logo} alt={`${job.company} logo`} className="size-11 rounded-xl border border-line object-cover" />
              <div>
                <h3 className="headline-sm text-ink">{job.role}</h3>
                <p className="text-sm text-stone">
                  {job.company} · {job.meta}
                </p>
              </div>
            </div>
            <p className="text-xs font-medium text-stone sm:mt-1 sm:whitespace-nowrap">{job.period}</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone">{job.summary}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
