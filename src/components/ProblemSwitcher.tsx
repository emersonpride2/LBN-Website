import { useState } from "react";
import { Ghost, MapPin, MessageSquareX, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const problems = [
  {
    id: "channels",
    icon: Ghost,
    title: "Ghost Town Social Media",
    desc: "Empty profiles and stale posts make you look closed. Prospects scroll past to businesses that look alive.",
    fix: "One-click publishing",
    detail: "Turn a single offer into text, email, social, and profile updates, then let the planner keep the month from going quiet.",
  },
  {
    id: "reviews",
    icon: MessageSquareX,
    title: "Unanswered Reviews",
    desc: "Reviews sitting without a response tell future customers you don't care — and quietly tank your local search ranking.",
    fix: "Safe review replies",
    detail: "Positive reviews get a thoughtful reply in moments. Sensitive ones pause for a manager before anything is posted.",
  },
  {
    id: "search",
    icon: MapPin,
    title: "Invisible in Local Search",
    desc: "Without a clear view of where you rank, competitors own the searches your customers already make — and the lost traffic never shows up on a report.",
    fix: "Local visibility",
    detail: "A neighborhood rank map plus weekly insights show where you stand and which channels are actually bringing people in.",
  },
] as const;

export function ProblemSwitcher() {
  const [active, setActive] = useState<(typeof problems)[number]["id"]>("channels");
  const problem = problems.find((item) => item.id === active) ?? problems[0];

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(item.id)}
              className={`lift-card group relative rounded-2xl border bg-card p-8 text-left transition-colors ${
                selected ? "border-primary shadow-[var(--shadow-glow)]" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-teal)" }}>
                <item.icon className="h-6 w-6 text-slate-deep" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
            </button>
          );
        })}
      </div>
      <div key={problem.id} className="channel-swap mt-6 rounded-2xl border border-primary/30 bg-card p-6 md:p-8" aria-live="polite">
        <div className="text-sm font-semibold uppercase tracking-wider text-primary">The fix · {problem.fix}</div>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed">{problem.detail}</p>
        <Link to="/features" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          See how it works <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
