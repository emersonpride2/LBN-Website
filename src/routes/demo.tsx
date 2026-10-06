import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitDemoRequest } from "@/lib/demo.functions";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo - Local Biz Ninja" },
      { name: "description", content: "See Local Biz Ninja in a 20-minute personalized demo. Discover how to automate marketing, protect your reputation, and track local visibility." },
      { property: "og:title", content: "Request a Demo - Local Biz Ninja" },
      { property: "og:description", content: "Book a 20-minute personalized walkthrough of Local Biz Ninja." },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitDemoRequest);

  return (
    <section className="relative overflow-hidden text-white min-h-[calc(100vh-4rem)]" style={{ background: "var(--gradient-hero)" }}>
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Sparkles className="hero-spark w-3.5 h-3.5" /> Personalized 20-min demo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">See Local Biz Ninja tailored to your business.</h1>
          <p className="mt-5 text-lg text-white/70">
            Tell us a little about your business and a product specialist will walk you through how marketing, reviews, and local visibility work together - and what that looks like for you.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              { icon: Clock, title: "20 minutes, zero pressure", body: "A working walkthrough - not a sales pitch." },
              { icon: CheckCircle2, title: "Tailored to your workflow", body: "See exactly how marketing, reviews, and local visibility will run for you." },
              { icon: ShieldCheck, title: "Your data stays yours", body: "We never share, sell, or spam. Ever." },
            ].map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-teal)" }}>
                  <f.icon className="w-5 h-5 text-slate-deep" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-white/60 text-sm">{f.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
        <div className="rounded-2xl bg-white text-foreground p-8 md:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5" style={{ background: "var(--gradient-teal)" }}>
                <CheckCircle2 className="w-7 h-7 text-slate-deep" />
              </div>
              <h2 className="text-2xl font-bold">You're all set.</h2>
              <p className="mt-3 text-muted-foreground">A product specialist will reach out within one business day to schedule your walkthrough.</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (sending) return;
                setError(null);
                setSending(true);
                const fd = new FormData(e.currentTarget);
                try {
                  await submit({
                    data: {
                      firstName: String(fd.get("first") ?? ""),
                      lastName: String(fd.get("last") ?? ""),
                      email: String(fd.get("email") ?? ""),
                      business: String(fd.get("business") ?? ""),
                      phone: String(fd.get("phone") ?? ""),
                      smsOptIn,
                      industry: String(fd.get("industry") ?? ""),
                      message: String(fd.get("message") ?? ""),
                    },
                  });
                  setSubmitted(true);
                } catch (err) {
                  console.error(err);
                  setError("Something went wrong sending your request. Please try again or email support@localbizninja.com.");
                } finally {
                  setSending(false);
                }
              }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold">Request your demo</h2>
                <p className="text-sm text-muted-foreground mt-1">We'll be in touch within one business day.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
              </div>
              <Field label="Work email" name="email" type="email" required />
              <Field label="Business name" name="business" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="rounded-lg border border-input bg-muted/30 p-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sms_opt_in"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-input accent-primary shrink-0"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Send me text message updates (optional).</span> By checking this box, I agree to receive recurring SMS messages from Local Biz Ninja about my demo, account, and product updates at the mobile number provided. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out or HELP for help. See our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> and <a href="/terms" className="underline hover:text-primary">Terms</a>. Mobile opt-in data will never be shared with third parties or affiliates.
                  </span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Industry</label>
                <select name="industry" className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Home services</option>
                  <option>Health & wellness</option>
                  <option>Auto</option>
                  <option>Restaurants & hospitality</option>
                  <option>Professional services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What are you hoping to fix?</label>
                <textarea name="message" rows={3} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Quiet social channels, review backlog, unclear local rankings…" />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full px-6 py-3.5 font-semibold text-slate-deep shadow-[var(--shadow-glow)] hover:brightness-110 transition"
                style={{ background: "var(--gradient-teal)" }}
              >
                {sending ? "Sending…" : "Request My Demo"}
              </button>
              <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted about Local Biz Ninja. No spam.</p>
            </form>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" htmlFor={name}>{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}