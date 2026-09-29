import { journey, languages } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "6", label: "languages spoken" },
  { value: "Full", label: "merit scholarship" },
  { value: "2027", label: "graduating" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="about-title"
          index="02"
          label="About me"
          title={
            <>
              Engineer by training. <em className="whitespace-nowrap">Product-minded</em> by instinct.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="reveal card p-7 sm:p-10 lg:col-span-7 lg:row-span-2">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              I got into software engineering because I liked making things work. I&rsquo;ve stayed because the harder
              question is <span className="font-serif text-[1.1em] italic text-rose">who</span> they work for.
            </p>
            <div className="mt-8 space-y-5 leading-relaxed text-fg-soft">
              <p>
                I&rsquo;m an international student at <span className="text-fg">Sichuan University</span>, studying
                Software Engineering on a full merit scholarship and graduating in 2027. My foundation is the core of
                the discipline: data structures, algorithms, databases, operating systems and software architecture.
              </p>
              <p>
                In 2026 I completed a Big Data Engineering internship at <span className="text-fg">Suncaper</span>, a
                big-data company in Chengdu, where I worked on flight-data analysis and a conversational search
                interface. Today I&rsquo;m a Research Assistant at the university&rsquo;s{" "}
                <span className="text-fg">Machine Intelligence Lab</span>, working on multi-agent AI. Between the two, I
                learned to ask one question of every AI feature:{" "}
                <span className="text-fg">how would we know if it&rsquo;s wrong?</span>
              </p>
              <p>
                I speak six languages: Arabic and Amazigh natively, French and English fluently, Chinese and some
                Turkish. Living and studying across cultures keeps me asking who a product is really for, and who it
                quietly leaves out.
              </p>
              <p>
                Where I&rsquo;m going: work where engineering and product meet. That means building AI products,
                defining what &ldquo;good&rdquo; means for them, and measuring whether they get there.
              </p>
            </div>
          </div>

          <dl className="reveal grid grid-cols-3 gap-3 lg:col-span-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex min-h-36 flex-col-reverse justify-start rounded-[1.5rem] p-5 ${i === 0 ? "bg-rose text-bg" : "card"}`}
              >
                <dt className={`mt-1 text-xs leading-snug ${i === 0 ? "text-bg/75" : "text-muted"}`}>{s.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="reveal card p-7 sm:p-9 lg:col-span-5">
            <p className="eyebrow">Languages · 6</p>
            <ul className="mt-6 divide-y divide-line">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between py-3">
                  <span className="font-display text-lg font-medium tracking-tight">{l.name}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      l.level === "Native" ? "bg-wine text-fg" : "border border-line text-fg-soft"
                    }`}
                  >
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card p-7 sm:p-9 lg:col-span-12">
            <p className="eyebrow">My journey</p>
            <ol className="relative mt-6 grid gap-6 border-l border-line pl-6 lg:mt-10 lg:grid-cols-6 lg:gap-5 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
              {journey.map((j) => (
                <li key={j.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-rose lg:-top-[1.875rem] lg:left-0"
                  />
                  <p className="font-mono text-xs text-rose">{j.year}</p>
                  <p className="mt-1 font-medium text-fg">{j.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{j.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
