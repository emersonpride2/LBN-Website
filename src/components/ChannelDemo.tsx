import { useState } from "react";
import { Mail, MapPin, Megaphone, MessageSquare } from "lucide-react";

const channels = [
  {
    id: "text",
    label: "Text",
    icon: MessageSquare,
    kicker: "Text message",
    headline: "Spring tune-up week is here.",
    body: "Book this week and save 20%. Reply YES and we'll hold a spot.",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    kicker: "Inbox",
    headline: "Your neighborhood tune-up, 20% off",
    body: "A few appointments are open this week. Same crew, 20% off when you book before Sunday.",
  },
  {
    id: "social",
    label: "Social",
    icon: Megaphone,
    kicker: "Social post",
    headline: "Spring tune-up special",
    body: "20% off this week for local neighbors. Spots are limited — book while the calendar is open.",
  },
  {
    id: "profile",
    label: "Profile",
    icon: MapPin,
    kicker: "Business profile",
    headline: "Update: Spring tune-up special",
    body: "20% off appointments booked this week. Open for customers in the neighborhood.",
  },
] as const;

export function ChannelDemo({ dark = false }: { dark?: boolean }) {
  const [active, setActive] = useState<(typeof channels)[number]["id"]>("text");
  const channel = channels.find((item) => item.id === active) ?? channels[0];

  return (
    <div className={`mt-14 rounded-3xl border p-6 md:p-8 ${dark ? "border-white/10 bg-white/[0.04]" : "border-border bg-card"}`}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Try one offer</div>
          <h3 className="mt-1 text-2xl font-bold tracking-tight">Same idea. Every channel.</h3>
          <p className={`mt-2 max-w-xl text-sm ${dark ? "text-white/65" : "text-muted-foreground"}`}>
            Switch the destination and watch one promotion reshape itself. Nothing to install — just the message your customers would see.
          </p>
        </div>
        <div role="tablist" aria-label="Preview channels" className="flex flex-wrap gap-2">
          {channels.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(item.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                  selected
                    ? "border-transparent text-slate-deep shadow-[var(--shadow-glow)]"
                    : dark
                      ? "border-white/15 text-white/80 hover:border-primary/50 hover:text-white"
                      : "border-border text-foreground hover:border-primary/50"
                }`}
                style={selected ? { background: "var(--gradient-teal)" } : undefined}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <div
        key={channel.id}
        role="tabpanel"
        className={`channel-swap mt-6 rounded-2xl border p-6 ${dark ? "border-white/10 bg-slate-deep/70" : "border-border bg-muted/40"}`}
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{channel.kicker}</div>
        <p className="mt-3 text-lg font-semibold">{channel.headline}</p>
        <p className={`mt-2 max-w-2xl leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{channel.body}</p>
      </div>
    </div>
  );
}
