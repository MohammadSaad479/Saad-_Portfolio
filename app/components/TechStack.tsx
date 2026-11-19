import SectionHeader from "./SectionHeader";
import { STACK } from "@/lib/data";

const TechStack = () => (
  <section>
    <SectionHeader
      eyebrow="Toolkit"
      title="Tech stack"
      description="The technologies that shaped me as a developer. I keep sharpening them by building real-world projects."
    />
    <ul className="flex flex-wrap gap-2">
      {STACK.map(({ name, icon: Icon }) => (
        <li key={name} className="chip group transition-colors hover:border-accent/50">
          <Icon className="size-3.5 text-stone transition-colors group-hover:text-accent" />
          {name}
        </li>
      ))}
    </ul>
  </section>
);

export default TechStack;
