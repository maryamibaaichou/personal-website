export function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
  align = "left",
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="reveal chip">
        <span className="font-mono text-rose tabular-nums">{index}</span>
        <span aria-hidden="true" className="text-muted">
          /
        </span>
        {label}
      </p>
      <h2
        id={id}
        className="reveal mt-6 font-display text-[clamp(2.3rem,5.2vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em] [&_em]:font-serif [&_em]:font-normal [&_em]:italic [&_em]:tracking-[-0.01em] [&_em]:text-rose"
      >
        {title}
      </h2>
      {intro && (
        <div className={`reveal mt-6 text-lg leading-relaxed text-fg-soft ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {intro}
        </div>
      )}
    </div>
  );
}
