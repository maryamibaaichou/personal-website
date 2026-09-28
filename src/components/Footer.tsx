import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="text-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono uppercase tracking-[0.14em]">
          AI <span className="text-rose">×</span> Product <span className="text-rose">×</span> Software{" "}
          <span className="text-rose">×</span> Humans
        </p>
        <a href="#top" className="link-underline self-start pb-0.5 hover:text-fg sm:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
