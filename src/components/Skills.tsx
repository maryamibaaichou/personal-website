import { skills } from "@/content/site";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal card p-7 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="chip">
                <span className="font-mono text-rose">04</span>
                <span aria-hidden="true" className="text-muted">
                  /
                </span>
                Technical skills
              </p>
              <h2 id="skills-title" className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                The toolkit behind the work.
              </h2>
            </div>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-rose">{s.group}</dt>
                <dd className="mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
