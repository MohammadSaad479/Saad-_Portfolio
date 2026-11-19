const SectionHeader = ({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) => (
  <header className="mb-6">
    {eyebrow && <p className="label-sm text-accent mb-3">{eyebrow}</p>}
    <h2 className="headline-lg text-ink">{title}</h2>
    {description && <p className="mt-2 max-w-xl text-sm leading-6 text-stone">{description}</p>}
  </header>
);

export default SectionHeader;
