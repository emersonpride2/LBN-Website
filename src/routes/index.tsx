import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  ShieldCheck,
  Sparkles, Calendar, Send, MessageSquare,
  Star, ShieldAlert, CheckCircle2, ArrowRight,
  BarChart3, LineChart, Lightbulb, TrendingUp,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { Reveal } from "../components/Reveal";
import { ChannelDemo } from "../components/ChannelDemo";
import { ProblemSwitcher } from "../components/ProblemSwitcher";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.74 0.14 195 / 0.35), transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-rise">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <Sparkles className="hero-spark w-3.5 h-3.5" /> Built for local businesses
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              The All-in-One <span className="text-primary">Automated Assistant</span> for Local Businesses
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Publish across every channel in one click, protect your reputation, and see exactly where you rank locally - all on autopilot. Stop leaking revenue and start growing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-slate-deep shadow-[var(--shadow-glow)] hover:brightness-110 transition" style={{ background: "var(--gradient-teal)" }}>
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/features" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold border border-white/20 text-white hover:bg-white/5 transition">
                See Features
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Consistent local presence</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Setup in days</div>
            </div>
          </div>
          <div className="hero-rise relative" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-teal)" }} />
            <img src={heroImg} alt="Local Biz Ninja automated assistant dashboard" width={1600} height={1200} className="relative rounded-2xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* PROBLEM GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Leaky Bucket</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Every day, local businesses lose real money in three places.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Pick a leak. We'll show the fix — marketing, reviews, or local visibility.</p>
        </Reveal>
        <Reveal delay={80}>
          <ProblemSwitcher />
        </Reveal>
      </section>

      {/* FEATURE 1: Multi-Channel Marketing */}
      <FeatureSection
        eyebrow="Feature 01 · 1-Click Multi-Channel Marketing"
        title="Publish everywhere your customers are - in a single click."
        description="Write once. Reach everyone. Generate on-brand content and push it to text, email, social, and your business profile simultaneously, guided by a smart planner that never leaves a gap in your calendar."
        bullets={[
          { icon: Send, title: "1-Click Content Generation", body: "Turn a single idea into a polished promotion tailored for every channel - no copywriter, no design headaches." },
          { icon: MessageSquare, title: "Text, Email, Social & Your Profile", body: "Send offers and updates to every channel at once. Your customers see you everywhere they already are." },
          { icon: Calendar, title: "Automated Planner & Calendar", body: "A month-at-a-glance content plan is built for you and scheduled automatically - so your marketing runs itself." },
        ]}
        dark
      >
        <ChannelDemo dark />
      </FeatureSection>

      {/* FEATURE 2: Reputation Protection */}
      <FeatureSection
        eyebrow="Feature 02 · Automated Reputation Protection"
        title="Answer every review instantly - without ever posting a bad reply."
        description="Great reviews get thoughtful, on-brand responses in seconds. Anything negative or low-star is quietly paused and routed to a manager for approval - so your reputation is always protected."
        bullets={[
          { icon: Star, title: "Instant Review Responses", body: "Every positive review is thanked with a personalized reply within moments - boosting your local search ranking." },
          { icon: ShieldAlert, title: "Manager's Safety Filter", body: "Negative or low-star reviews are automatically held back and sent to a manager for manual approval before anything goes live." },
          { icon: ShieldCheck, title: "Reputation on Autopilot", body: "Your star rating, response rate and local SEO improve week after week - with zero daily effort from your team." },
        ]}
      />

      {/* FEATURE 3: Reporting & Local Visibility Analytics */}
      <VisibilitySection />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" data-final-cta>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center" style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.74 0.14 195 / 0.5), transparent 60%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
                Stop leaking revenue. Start growing on autopilot.
              </h2>
              <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">
                See how Local Biz Ninja fills your marketing calendar, protects your reputation, and shows where you rank - in a 20-minute personalized demo.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link to="/demo" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-deep shadow-[var(--shadow-glow)] hover:brightness-110 transition" style={{ background: "var(--gradient-teal)" }}>
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/features" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold border border-white/20 text-white hover:bg-white/5 transition">
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

type Bullet = { icon: React.ComponentType<{ className?: string }>; title: string; body: string };

function VisibilitySection() {
  const points = [
    {
      icon: MapPin,
      title: "Local SEO Grid Heat Maps",
      body: "See exactly where your business ranks in local map results across every square mile of your neighborhood.",
    },
    {
      icon: BarChart3,
      title: "Unified Marketing Reporting",
      body: "Track social engagement, business profile traffic, and email campaign conversion in a single visual dashboard.",
    },
    {
      icon: Lightbulb,
      title: "Automated Actionable Insights",
      body: "Receive weekly digest cards telling you which channels are working and how to bring in more local traffic.",
    },
  ];

  // 3x3 grid of local rank markers (mostly 1s, some 2s, a couple 3s)
  const grid: { rank: 1 | 2 | 3 }[][] = [
    [{ rank: 1 }, { rank: 1 }, { rank: 2 }],
    [{ rank: 1 }, { rank: 1 }, { rank: 1 }],
    [{ rank: 3 }, { rank: 2 }, { rank: 1 }],
  ];

  const rankStyles: Record<1 | 2 | 3, { bg: string; ring: string; glow: string }> = {
    1: { bg: "bg-primary text-slate-deep", ring: "ring-primary/50", glow: "shadow-[0_0_30px_-4px_oklch(0.74_0.14_195/0.9)]" },
    2: { bg: "bg-emerald-400 text-slate-deep", ring: "ring-emerald-400/40", glow: "shadow-[0_0_24px_-6px_oklch(0.78_0.16_155/0.7)]" },
    3: { bg: "bg-orange-400 text-slate-deep", ring: "ring-orange-400/40", glow: "shadow-[0_0_22px_-6px_oklch(0.78_0.16_55/0.7)]" },
  };

  return (
    <section className="text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* TEXT SIDE */}
        <Reveal>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Feature 03 · Reporting & Local Visibility Analytics
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Command Local Search with <span className="text-primary">360° Visibility</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 max-w-xl">
            Know exactly where you rank, which channels are working, and what to do next - all from one dashboard built for local business owners.
          </p>
          <div className="mt-10 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="lift-card flex gap-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 p-5">
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-teal)" }}>
                  <p.icon className="w-5 h-5 text-slate-deep" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-white/65 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* VISUAL SIDE - SEO Grid Heat Map UI Mock */}
        <Reveal className="relative" delay={120}>
          <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-teal)" }} />
          <div className="relative rounded-3xl border border-white/10 bg-slate-deep/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="text-xs text-white/50 font-medium">Local Rank Grid · "coffee shop near me"</div>
              <div className="text-xs text-primary font-semibold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +18%
              </div>
            </div>

            {/* Map area */}
            <div className="relative aspect-square p-6">
              {/* Illustrative map backdrop */}
              <div className="absolute inset-6 rounded-2xl overflow-hidden border border-white/10 bg-[oklch(0.22_0.02_240)]">
                <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0H0V40" fill="none" stroke="oklch(0.35 0.02 240 / 0.35)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#mapgrid)" />
                  {/* Roads */}
                  <path d="M0 120 L400 140" stroke="oklch(0.4 0.02 240 / 0.6)" strokeWidth="8" fill="none" />
                  <path d="M0 280 L400 260" stroke="oklch(0.4 0.02 240 / 0.6)" strokeWidth="6" fill="none" />
                  <path d="M140 0 L120 400" stroke="oklch(0.4 0.02 240 / 0.6)" strokeWidth="7" fill="none" />
                  <path d="M300 0 L280 400" stroke="oklch(0.4 0.02 240 / 0.5)" strokeWidth="5" fill="none" />
                  {/* Parks / blocks */}
                  <rect x="200" y="160" width="70" height="80" rx="6" fill="oklch(0.35 0.05 155 / 0.35)" />
                  <rect x="30" y="300" width="80" height="60" rx="6" fill="oklch(0.32 0.03 240 / 0.5)" />
                  <rect x="310" y="60" width="60" height="50" rx="6" fill="oklch(0.32 0.03 240 / 0.5)" />
                  {/* Water */}
                  <path d="M0 380 Q100 340 200 370 T400 360 L400 400 L0 400 Z" fill="oklch(0.35 0.06 220 / 0.35)" />
                </svg>
              </div>

              {/* 3x3 grid of rank markers */}
              <div className="relative h-full grid grid-cols-3 grid-rows-3 gap-4 p-4">
                {grid.flat().map((cell, i) => {
                  const s = rankStyles[cell.rank];
                  return (
                    <div key={i} className="flex items-center justify-center">
                      <div
                        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg ring-4 ${s.ring} ${s.bg} ${s.glow} ${cell.rank === 1 ? "rank-live" : ""}`}
                        style={cell.rank === 1 ? { animationDelay: `${(i % 3) * 0.35}s` } : undefined}
                      >
                        {cell.rank}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend + stat strip */}
            <div className="border-t border-white/10 px-5 py-4 flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary" /> Top 1</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-400" /> Top 2</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-400" /> Top 3</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <LineChart className="w-3.5 h-3.5 text-primary" />
                <span>Avg. rank <span className="text-white font-semibold">1.4</span> · 7 of 9 points in top 1</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureSection({
  eyebrow, title, description, bullets, dark = false, children,
}: { eyebrow: string; title: string; description: string; bullets: Bullet[]; dark?: boolean; children?: React.ReactNode }) {
  return (
    <section
      className={dark ? "text-white" : "bg-muted/40"}
      style={dark ? { background: "var(--gradient-hero)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider mb-3 text-primary">{eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{description}</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {bullets.map((b, index) => (
            <Reveal key={b.title} delay={index * 90}>
              <div
                className={`lift-card h-full rounded-2xl p-8 border ${
                  dark ? "bg-white/[0.03] border-white/10 hover:border-primary/40" : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-teal)" }}>
                  <b.icon className="w-5 h-5 text-slate-deep" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className={dark ? "text-white/60" : "text-muted-foreground"}>{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
