import { approach } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function ProductThinking() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="approach-title"
          index="03"
          label="Product thinking"
          title={
            <>
              How I approach a problem, <em>before I write code.</em>
            </>
          }
          intro="I don't have years of product management behind me. What I do have is a habit, formed by building and evaluating real systems, of asking the product questions first. Here's how I work through a problem."
        />

        <ol className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {approach.map((a, i) => (
            <li key={a.step} className="reveal">
              <div className="card card-hover group flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine font-display text-sm font-semibold text-fg transition-colors group-hover:bg-rose group-hover:text-bg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="text-lg text-rose">
                    ✦
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{a.step}</h3>
                <p className="mt-2 leading-snug text-fg">{a.principle}</p>
                <p className="mt-auto pt-6 text-sm leading-relaxed text-muted">
                  <span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-rose">How I do it</span>
                  {a.how}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="reveal mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          The loop doesn&rsquo;t end at step six. Evaluation feeds back into understanding the user, which is why I
          think evaluation is the most underrated product skill in AI.
        </p>
      </div>
    </section>
  );
}
