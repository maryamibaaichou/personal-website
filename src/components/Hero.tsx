import { site } from "@/content/site";
import { ArrowRight, GitHubIcon, LinkedInIcon } from "./icons";
import { Marquee } from "./Marquee";

const stickers = [
  { text: "AI research", className: "-left-4 top-6 sm:-left-10", r: "-6deg", tone: "bg-fg text-bg" },
  { text: "Sichuan University", className: "-right-3 -top-4 sm:-right-8", r: "5deg", tone: "bg-wine text-fg" },
  { text: "✦ Human-centred", className: "-left-3 bottom-16 sm:-left-12", r: "4deg", tone: "bg-rose text-bg" },
  { text: "6 languages", className: "-right-2 -bottom-3 sm:-right-6", r: "-4deg", tone: "bg-surface-2 text-fg border border-line" },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] animate-glow rounded-full bg-wine/45 blur-[120px]" />
        <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] animate-glow rounded-full bg-wine-bright/25 blur-[120px] [animation-delay:-6s]" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-28">
        <div className="lg:col-span-7 lg:pt-6">
          <p className="reveal chip">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
            </span>
            Currently: AI research at the Machine Intelligence Lab
          </p>

          <h1
            id="hero-title"
            className="reveal mt-8 font-display text-[clamp(2.9rem,7.6vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
          >
            Building AI products that solve{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-rose">real human problems.</span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-fg-soft sm:text-xl">
            I&rsquo;m Maryam, a software engineer in training and an AI research assistant. I build systems end to
            end, from the data and the model calls to the evaluation that shows whether they actually work, and I
            design them around the person on the other side of the screen.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-wine px-6 py-4 text-sm font-medium text-fg shadow-[0_18px_50px_-18px] shadow-wine-bright transition-colors hover:bg-wine-bright"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-4 text-sm text-fg transition-colors hover:border-rose"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-4 text-sm text-fg transition-colors hover:border-rose"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="reveal lg:col-span-5">
          <figure className="relative mx-auto max-w-[22rem] sm:max-w-sm lg:ml-auto lg:mr-4">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-wine-bright/60 via-wine/30 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-line bg-wine-deep p-2">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/maryam-portrait-640.webp 640w, /images/maryam-portrait-960.webp 960w"
                  sizes="(min-width: 1024px) 24rem, 90vw"
                />
                <img
                  src="/images/maryam-portrait-960.jpg"
                  srcSet="/images/maryam-portrait-640.jpg 640w, /images/maryam-portrait-960.jpg 960w"
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  width={960}
                  height={1200}
                  alt="Portrait of Maryam Ibaaichou wearing a black hijab and blazer against a deep burgundy background"
                  className="aspect-[4/5] h-auto w-full rounded-[1.8rem] object-cover"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <figcaption className="sr-only">Maryam Ibaaichou</figcaption>
            {stickers.map((s, i) => (
              <span
                key={s.text}
                aria-hidden="true"
                style={{ rotate: s.r, animationDelay: `${i * -1.6}s` }}
                className={`absolute ${s.className} animate-float whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] sm:text-sm ${s.tone}`}
              >
                {s.text}
              </span>
            ))}
          </figure>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
