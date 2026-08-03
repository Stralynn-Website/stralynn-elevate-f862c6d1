import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import stralynnLogo from "../../assets/stralynn-logo.avif";

const socials = [
  { label: "LinkedIn", href: "#", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" },
  { label: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
  { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.268 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.507.011-4.746.068-.938.043-1.447.198-1.786.33-.449.174-.77.383-1.107.72-.337.337-.546.658-.72 1.107-.132.339-.287.848-.33 1.786-.057 1.239-.068 1.605-.068 4.746s.011 3.507.068 4.746c.043.938.198 1.447.33 1.786.174.449.383.77.72 1.107.337.337.658.546 1.107.72.339.132.848.287 1.786.33 1.239.057 1.605.068 4.746.068s3.507-.011 4.746-.068c.938-.043 1.447-.198 1.786-.33.449-.174.77-.383 1.107-.72.337-.337.546-.658.72-1.107.132-.339.287-.848.33-1.786.057-1.239.068-1.605.068-4.746s-.011-3.507-.068-4.746c-.043-.938-.198-1.447-.33-1.786-.174-.449-.383-.77-.72-1.107-.337-.337-.658-.546-1.107-.72-.339-.132-.848-.287-1.786-.33C15.507 3.976 15.141 3.965 12 3.965zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm5.338-8.669a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" },
  { label: "YouTube", href: "#", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
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
              <div className="h-14 w-14 rounded-full bg-cream grid place-items-center ring-2 ring-cream/30">
                <img src={stralynnLogo} alt="Stralynn" className="h-12 w-12 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-extrabold tracking-[0.2em] text-cream">STRALYNN</span>
                <span className="mt-1.5 text-[10px] font-bold tracking-[0.2em] text-cyan-glow">REIMAGINE.DIGITALIZE.TRANSCEND</span>
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
