import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Headset, Phone } from "lucide-react";

const BULLETS = ["24/7 answers", "Qualifies intent", "Books on your calendar", "Texts you the summary"] as const;

const BODY =
  "An AI receptionist answers when you can’t — qualifies the lead, takes the job details, and books the appointment so you stay in the field.";

const SCRIPT = [
  { from: "agent", text: "Thanks for calling — how can I help today?" },
  { from: "caller", text: "Need a roof inspection after the hail" },
  { from: "agent", text: "Got it — I can book you Thursday at 2pm.", time: "10:21 AM" },
] as const;

function PhoneMark({ size = "lg" }: { size?: "lg" | "sm" }) {
  const box = size === "lg" ? "h-36 w-36" : "h-16 w-16";
  const icon = size === "lg" ? "h-10 w-10" : "h-6 w-6";
  return (
    <div className={`relative ${box} shrink-0`} aria-hidden="true">
      <span className="phone-ring absolute inset-0 rounded-full bg-primary/30" />
      <span className="phone-ring phone-ring-delay absolute inset-0 rounded-full bg-primary/25" />
      <span className="absolute inset-[18%] rounded-full bg-primary/15" />
      <span className="absolute inset-[30%] rounded-full bg-primary/25" />
      <span
        className="absolute inset-[38%] flex items-center justify-center rounded-full shadow-[0_0_30px_oklch(0.74_0.14_195/0.55)]"
        style={{ background: "var(--gradient-teal)" }}
      >
        <Phone className={`${icon} text-slate-deep`} />
      </span>
    </div>
  );
}

export function AiReceptionistSection() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  function play() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(SCRIPT.length);
      setPhase("done");
      return;
    }
    setCount(0);
    setPhase("playing");
    SCRIPT.forEach((_, index) => {
      const id = window.setTimeout(() => {
        setCount(index + 1);
        if (index === SCRIPT.length - 1) setPhase("done");
      }, 380 + index * 720);
      timers.current.push(id);
    });
  }

  const label = phase === "playing" ? "Answering…" : phase === "done" ? "Replay" : "Answer a call";

  return (
    <section id="ai-receptionist" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-[28px] border border-white/10 bg-[oklch(0.22_0.03_250)] p-6 text-white shadow-[var(--shadow-glow)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <PhoneMark />
              <div>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Never miss a call again</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">{BODY}</p>
                <ul className="mt-6 space-y-2.5">
                  {BULLETS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                      <Check className="h-4 w-4 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex min-h-[22rem] flex-col rounded-2xl border border-white/10 bg-[oklch(0.2_0.025_250)] p-5">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="font-medium text-white">Try it</span>
                <span aria-hidden="true" className="tracking-widest">
                  •••
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 py-5" aria-live="polite">
                {count === 0 ? (
                  <p className="text-sm text-white/50">Press answer to play a sample call. Nothing is dialed.</p>
                ) : (
                  SCRIPT.slice(0, count).map((line) => (
                    <div key={line.text} className={`bubble-in flex items-end gap-2 ${line.from === "caller" ? "justify-end" : ""}`}>
                      {line.from === "agent" && (
                        <span className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <Headset className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                          line.from === "caller"
                            ? "rounded-br-md text-slate-deep"
                            : "rounded-bl-md bg-white/10 text-white"
                        }`}
                        style={line.from === "caller" ? { background: "var(--gradient-teal)" } : undefined}
                      >
                        <p>{line.text}</p>
                        {"time" in line && (
                          <p className="mt-1 flex items-center justify-end gap-1 text-[11px] text-white/55">
                            <Check className="h-3 w-3" />
                            {line.time}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <button
                type="button"
                onClick={play}
                disabled={phase === "playing"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-red-500 disabled:cursor-wait disabled:opacity-80"
              >
                <Phone className="h-4 w-4" />
                {label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiReceptionistTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <Link
        to="/features"
        hash="ai-receptionist"
        className="lift-card grid items-center gap-6 rounded-3xl border border-white/10 bg-slate-deep p-6 text-white md:grid-cols-[auto_1fr_auto] md:p-8"
      >
        <PhoneMark size="sm" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">AI receptionist</div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">Never miss a call again</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{BODY}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Try a sample call <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </section>
  );
}
