type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">{title}</h2>
      {description && <p className="mt-2 text-slate-muted">{description}</p>}
    </div>
  );
}
