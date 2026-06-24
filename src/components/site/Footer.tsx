import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import stralynnLogo from "../../assets/stralynn-logo.avif";

const socials = [
  { label: "LinkedIn", href: "#", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" },
  { label: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
  { label: "GitHub", href: "#", path: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z" },
];

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "AI Digital Transformation", to: "/services/ai-digital-transformation" },
      { label: "M&A Advisory", to: "/services/ma-advisory" },
      { label: "BPO Transformation", to: "/services/bpo-transformation" },
      { label: "Enterprise Implementations", to: "/services/enterprise-implementations" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", to: "/industries/healthcare" },
      { label: "Private Equity", to: "/industries/private-equity" },
      { label: "Financial Services", to: "/industries/financial-services" },
      { label: "Technology", to: "/industries/technology" },
      { label: "Public Sector", to: "/industries/public-sector" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream/90">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="h-14 w-14 rounded-full bg-cream/95 grid place-items-center">
                <img src={stralynnCircle.url} alt="Stralynn" className="h-12 w-12 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-[0.18em] text-cream">STRALYNN</span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-cyan-glow">REIMAGINE.DIGITALIZE.TRANSCEND</span>
              </div>
            </Link>
            <p className="text-cream/60 max-w-sm text-sm leading-relaxed">
              We are an experienced IT consulting organization & leading Digital Strategy and Transformation across industries. Our expertise in Digital, Technical & Creative competencies unite together in successfully driving the digital transformation journey for our customers.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="h-10 w-10 grid place-items-center rounded-full border border-cream/15 hover:bg-cream hover:text-ink transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-widest text-cream/40 mb-4">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-cream/80 hover:text-cream text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-cream/50">
          <div>© {new Date().getFullYear()} Stralynn Consulting. All rights reserved.</div>
          <Link to="/contact" className="group inline-flex items-center gap-2 text-cream hover:text-cream/80">
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
