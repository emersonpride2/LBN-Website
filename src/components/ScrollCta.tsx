import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";

const ELIGIBLE = new Set(["/", "/features"]);

export function ScrollCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const eligible = ELIGIBLE.has(pathname);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!eligible || dismissed) {
      setVisible(false);
      return;
    }
    const update = () => {
      const scrolled = window.scrollY > 560;
      const nearBottom = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 220;
      const finalCta = document.querySelector("[data-final-cta]");
      const finalRect = finalCta?.getBoundingClientRect();
      const finalVisible = !!finalRect && finalRect.top < window.innerHeight * 0.9 && finalRect.bottom > 80;
      setVisible(scrolled && !nearBottom && !finalVisible);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [eligible, dismissed, pathname]);

  if (!visible) return null;

  return (
    <div className="scroll-cta fixed bottom-5 left-1/2 z-40 w-[min(40rem,calc(100%-1.5rem))]">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-deep/95 px-3 py-2.5 text-white shadow-[var(--shadow-glow)] backdrop-blur-md">
        <p className="min-w-0 flex-1 truncate pl-3 text-sm text-white/80">
          See marketing, reviews, and local rank on your business.
        </p>
        <Link
          to="/demo"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-slate-deep hover:brightness-110 transition"
          style={{ background: "var(--gradient-teal)" }}
        >
          Book a Demo <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Dismiss demo reminder"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
