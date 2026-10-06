import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PhoneCall, BellRing, Users, Send, Calendar, MessageSquare,
  Star, ShieldAlert, ShieldCheck, TrendingUp, Clock, DollarSign, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features - Local Biz Ninja" },
      { name: "description", content: "Explore every feature: instant missed-call recovery, 1-click multi-channel marketing, and automated reputation protection built for local businesses." },
      { property: "og:title", content: "Features - Local Biz Ninja" },
      { property: "og:description", content: "Capture every lead, publish everywhere in one click, and protect your reputation on autopilot." },
    ],
  }),
  component: FeaturesPage,
});

const outcomes = [
  { icon: DollarSign, title: "Capture Lost Revenue", body: "Every missed call is a customer ready to spend. We put them back in the conversation before they call anyone else." },
  { icon: Clock, title: "Save 10+ Hours a Week", body: "Marketing, reviews, and follow-ups run themselves - freeing your team to focus on serving customers." },
  { icon: TrendingUp, title: "Boost Local SEO", body: "Fresh content, fast review responses, and consistent posting move you up in local search - where it counts." },
  { icon: ShieldCheck, title: "Protect Your Reputation", body: "Only your best foot goes forward. A manager approves every sensitive reply before it's ever published." },
];

const groups = [
  {
    eyebrow: "The 24/7 Safety Net",
    title: "Never miss a lead - even after hours.",
    intro: "Your phone stops being a leak and starts being a growth engine.",
    items: [
      { icon: PhoneCall, title: "Instant Text-Back", body: "The second a call is missed, the caller gets a warm, personal text - keeping them engaged before they move on." },
      { icon: Users, title: "Smart Team Routing", body: "If your main line rings 3 times, the call is simultaneously routed to up to 5 team phones so the first available person picks up." },
      { icon: BellRing, title: "Real-Time Alerts", body: "Every missed call and new lead lights up your team on mobile and desktop, keeping response times measured in seconds." },
    ],
  },
  {
    eyebrow: "1-Click Multi-Channel Marketing",
    title: "Show up everywhere your customers already are.",
    intro: "Stop juggling five tabs. One click reaches every channel that matters.",
    items: [
      { icon: Send, title: "1-Click Content Generation", body: "Turn a single idea into on-brand promotions tailored to each channel - no writing, no formatting, no design." },
      { icon: MessageSquare, title: "SMS, Email, Facebook & Google", body: "Reach your entire audience in one motion across text, inbox, social, and your Google Business Profile." },
      { icon: Calendar, title: "Automated Content Planner", body: "A month-at-a-glance calendar is built and scheduled for you, so your marketing never goes quiet." },
    ],
  },
  {
    eyebrow: "Automated Reputation Protection",
    title: "Answer every review - safely.",
    intro: "Great reviews get instant replies. Sensitive ones get a human check first.",
    items: [
      { icon: Star, title: "Instant Review Responses", body: "Positive reviews receive thoughtful, on-brand replies within moments - improving your ranking and impressing future customers." },
      { icon: ShieldAlert, title: "Manager's Safety Filter", body: "Negative or low-star reviews are automatically paused and sent to a manager for approval before anything is posted." },
      { icon: ShieldCheck, title: "Always-On Monitoring", body: "Every platform is watched around the clock - nothing slips by without a response and a strategy behind it." },
    ],
  },
];

function FeaturesPage() {
  return (
    <>
      <section className="text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Features</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Everything you need to stop leaking leads.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Local Biz Ninja replaces the patchwork of missed-call apps, marketing tools, and reputation trackers with one automated assistant - focused entirely on business outcomes.
          </p>
        </div>
      </section>

      {/* Outcomes grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-teal)" }}>
                <o.icon className="w-5 h-5 text-slate-deep" />
              </div>
              <div className="font-semibold mb-1">{o.title}</div>
              <p className="text-sm text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={g.eyebrow} className={i % 2 === 1 ? "bg-muted/40" : ""}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-2xl mb-12">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{g.eyebrow}</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{g.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{g.intro}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {g.items.map((it) => (
                <div key={it.title} className="rounded-2xl bg-card border border-border p-8 hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-teal)" }}>
                    <it.icon className="w-5 h-5 text-slate-deep" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
                  <p className="text-muted-foreground">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl p-12 md:p-16 text-center text-white" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">Ready to see it in action?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">A 20-minute personalized walkthrough - no pressure, no jargon.</p>
          <Link to="/demo" className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-deep shadow-[var(--shadow-glow)] hover:brightness-110 transition" style={{ background: "var(--gradient-teal)" }}>
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}