import { site } from "@/content/site";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: MailIcon, external: false },
  { label: "LinkedIn", value: "in/maryamibaaichou", href: site.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "maryamibaaichou", href: site.github, icon: GitHubIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-wine-bright via-wine to-wine-deep">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] animate-glow rounded-full bg-rose/30 blur-[120px]" />
          <div className="grain absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <p className="reveal chip border-fg/20 bg-fg/10 text-fg">
            <span className="font-mono">05</span>
            <span aria-hidden="true" className="text-fg/60">
              /
            </span>
            Contact
          </p>
          <h2
            id="contact-title"
            className="reveal mt-8 max-w-5xl font-display text-[clamp(2.6rem,6.6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
          >
            Building something that should work for{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em]">real people?</span>
          </h2>
          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-fg/85">
            I&rsquo;d like to hear about it. I&rsquo;m open to conversations about AI products, evaluation, research
            and internships.
          </p>

          <ul className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label} className="reveal">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 rounded-3xl border border-fg/15 bg-bg/25 p-6 backdrop-blur-sm transition-colors hover:bg-fg hover:text-bg"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] opacity-70">
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </span>
                    <span className="mt-2 block break-all text-lg">{value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
