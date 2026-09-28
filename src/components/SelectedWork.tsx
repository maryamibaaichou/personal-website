import { projects, type Project } from "@/content/site";
import { ArrowRight, ArrowUpRight } from "./icons";
import { ProjectVisual } from "./ProjectVisuals";
import { SectionHeading } from "./SectionHeading";

function ProjectLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-rose"
    >
      {label}
      {external ? (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  const headingId = `project-${project.id}`;
  return (
    <div className="reveal">
    <article aria-labelledby={headingId} className="card card-hover relative overflow-hidden p-6 sm:p-10 lg:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-wine/25 blur-[90px]"
      />
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-5xl font-semibold leading-none tracking-tight text-rose sm:text-6xl">
            {project.index}
          </span>
          <span className="ml-3 chip">{project.kicker}</span>
        </div>
        <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {project.meta.map((m) => (
            <div key={m.label} className="flex gap-2">
              <dt className="text-muted">{m.label}</dt>
              <dd className="text-fg-soft">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h3
            id={headingId}
            className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em]"
          >
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-soft">{project.summary}</p>

          {project.fields && (
            <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.fields.map((f) => (
                <div key={f.label} className="rounded-2xl border border-line bg-bg/40 p-5">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-rose">{f.label}</dt>
                  <dd className="mt-2.5 text-[0.95rem] leading-relaxed text-fg-soft">{f.body}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.focus && (
            <div className="mt-10">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-rose">Focus</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-surface-2 px-4 py-2 font-display text-base font-medium tracking-tight text-fg"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.stack && (
            <div className="mt-6">
              <p className="sr-only">Technology</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.links?.length || project.status) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.links?.map((l) => <ProjectLink key={l.href} {...l} />)}
              {project.status && (
                <span className="chip border-rose/40 text-rose">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose" aria-hidden="true" />
                  {project.status}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <ProjectVisual kind={project.visual} />
        </div>
      </div>
    </article>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section aria-labelledby="work-title" id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="work-title"
          index="01"
          label="Experience"
          title={
            <>
              Proof of work, <em>not a list of skills.</em>
            </>
          }
          intro="An industry internship in big data, and ongoing AI research at my university lab. Both start with a real problem and end with what I learned."
        />
        <div className="mt-14 space-y-6 sm:mt-16 sm:space-y-8">
          {projects.map((p) => (
            <ProjectEntry key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
