import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-6xl font-semibold leading-none tracking-tight">
        This page doesn&rsquo;t <span className="font-serif font-normal italic text-rose">exist.</span>
      </h1>
      <Link
        href="/"
        className="mt-10 self-start rounded-full bg-wine px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-wine-bright"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
