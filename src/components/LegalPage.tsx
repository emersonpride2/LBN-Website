import type { ReactNode } from "react";

export function LegalPage({
  title, updated, sections,
}: { title: string; updated: string; sections: { heading: string; body: ReactNode }[] }) {
  return (
    <>
      <section className="text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-white/60">{updated}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none">
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="text-2xl font-semibold tracking-tight mb-3">{s.heading}</h2>
              <div className="text-muted-foreground leading-relaxed">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
