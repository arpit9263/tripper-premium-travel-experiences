import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  height?: "sm" | "md";
}

export function PageHero({ eyebrow, title, description, image, height = "md" }: Props) {
  return (
    <section
      className={`relative isolate overflow-hidden ${height === "sm" ? "py-20 md:py-28" : "py-28 md:py-40"}`}
    >
      {image ? (
        <>
          <img src={image} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        </>
      ) : (
        <div className="absolute inset-0 -z-10 bg-navy-deep" />
      )}
      <div className="container-page max-w-4xl text-primary-foreground">
        {eyebrow && (
          <span className="inline-block rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
