const words = [
  "AI",
  "Product",
  "Software",
  "Humans",
  "Multi-agent systems",
  "Evaluation",
  "Conversational search",
  "Human-centred design",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <span className="px-6 font-display text-2xl font-medium tracking-tight text-fg sm:px-8 sm:text-4xl">{w}</span>
          <span aria-hidden="true" className="text-xl text-rose sm:text-2xl">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-line bg-wine-deep/40 py-5 sm:py-7">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />
    </div>
  );
}
