import { Link, Outlet } from "@tanstack/react-router";
import logoAsset from "@/assets/local-biz-ninja-logo.png.asset.json";
import { ScrollCta } from "@/components/ScrollCta";

function Logo() {
  return (
    <Link to="/" className="flex items-center group" aria-label="Local Biz Ninja home">
      <img src={logoAsset.url} alt="Local Biz Ninja" className="h-10 w-auto rounded-md" />
    </Link>
  );
}

export function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/demo"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-deep shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          style={{ background: "var(--gradient-teal)" }}
        >
          Book a Demo
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-deep text-white/70 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center mb-3">
            <img src={logoAsset.url} alt="Local Biz Ninja" className="h-10 w-auto rounded-md bg-white/90 p-1" />
          </div>
          <p className="text-sm max-w-xs">The all-in-one automated assistant helping local businesses market everywhere, protect their reputation, and see where they rank.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3 text-sm">Product</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/features" className="hover:text-primary">Features</Link></li>
            <li><Link to="/demo" className="hover:text-primary">Request a Demo</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3 text-sm">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/50 flex justify-between">
          <span>© {new Date().getFullYear()} Local Biz Ninja. All rights reserved.</span>
          <span>Built for local businesses.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <ScrollCta />
      <SiteFooter />
    </div>
  );
}