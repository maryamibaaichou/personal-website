import type { Project } from "@/content/site";

function Frame({
  caption,
  children,
  tone = "dark",
}: {
  caption: string;
  children: React.ReactNode;
  tone?: "cream" | "dark" | "wine";
}) {
  const tones = {
    cream: "bg-cream text-bg",
    dark: "bg-bg text-fg border border-line",
    wine: "bg-gradient-to-br from-wine to-wine-deep text-fg",
  };
  return (
    <figure className="lg:sticky lg:top-28">
      <div className={`overflow-hidden rounded-3xl ${tones[tone]}`}>{children}</div>
      <figcaption className="mt-3 px-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{caption}</figcaption>
    </figure>
  );
}

function SkyQueryVisual() {
  return (
    <Frame caption="Interface flow · illustrative query" tone="cream">
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-wine px-4 py-3 text-sm text-fg">
          Which destinations from JFK are cheapest on average?
        </div>
        <div className="max-w-[94%] rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#7a6a6e]">Generated HiveQL</p>
          <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-[0.72rem] leading-relaxed text-[#3b2a2f]">
            <code>
              <span className="text-wine">SELECT</span> destinationAirport,{"\n"}
              {"  "}<span className="text-wine">AVG</span>(totalFare) <span className="text-wine">AS</span> avg_fare{"\n"}
              <span className="text-wine">FROM</span> itineraries{"\n"}
              <span className="text-wine">WHERE</span> startingAirport = <span className="text-[#2f6b4f]">&apos;JFK&apos;</span>{"\n"}
              <span className="text-wine">GROUP BY</span> destinationAirport{"\n"}
              <span className="text-wine">ORDER BY</span> avg_fare <span className="text-wine">LIMIT</span> 5;
            </code>
          </pre>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {["Table", "Chart", "Route map"].map((v, i) => (
            <span
              key={v}
              className={`rounded-full px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${
                i === 2 ? "bg-bg text-fg" : "border border-[#d9ccc4] text-[#4a3a3f]"
              }`}
            >
              {v}
            </span>
          ))}
          <span className="text-xs text-[#6d5d61]">chosen automatically from the result columns</span>
        </div>
      </div>
    </Frame>
  );
}

const cycle = ["Plan", "Act", "Evaluate", "Learn"];

function ResearchVisual() {
  return (
    <Frame caption="The idea, not the results · research in progress" tone="wine">
      <div className="relative flex aspect-square items-center justify-center p-8 sm:aspect-[5/4]">
        <div aria-hidden="true" className="absolute inset-10 rounded-full border border-dashed border-fg/25" />
        <div className="relative z-10 text-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-fg/70">Closed loop</p>
          <p className="mt-2 font-serif text-3xl italic leading-tight sm:text-4xl">
            Did the agent
            <br />
            get it right?
          </p>
        </div>
        {cycle.map((c, i) => {
          const pos = [
            "left-1/2 top-4 -translate-x-1/2",
            "right-4 top-1/2 -translate-y-1/2",
            "bottom-4 left-1/2 -translate-x-1/2",
            "left-4 top-1/2 -translate-y-1/2",
          ][i];
          return (
            <span
              key={c}
              className={`absolute ${pos} rounded-full px-4 py-2 text-xs font-medium sm:text-sm ${
                c === "Evaluate" ? "bg-fg text-wine-deep" : "border border-fg/30 bg-wine-deep/60 text-fg"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>
    </Frame>
  );
}

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  switch (kind) {
    case "skyquery":
      return <SkyQueryVisual />;
    case "research":
      return <ResearchVisual />;
  }
}
