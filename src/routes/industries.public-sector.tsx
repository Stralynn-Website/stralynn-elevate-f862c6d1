import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Landmark,
  ShieldCheck,
  ServerCog,
  FileCheck,
  Database,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/public-sector")({
  head: () => ({
    meta: [
      { title: "Public Sector Portal Modernization & Legacy Migration — Stralynn" },
      {
        name: "description",
        content:
          "Stralynn executes compliant government portal modernizations, legacy mainframe migrations and secure cloud architectures aligned with FISMA, FedRAMP and NIST 800-53.",
      },
      {
        property: "og:title",
        content: "Public Sector Portal Modernization & Legacy Migration — Stralynn",
      },
      {
        property: "og:description",
        content:
          "Risk-mitigated legacy modernization, ADA-compliant citizen portals and audit-ready cloud architectures for federal, state and local agencies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const controls = [
  "NIST 800-53",
  "FISMA Aligned",
  "FedRAMP Architecture",
  "ADA Accessibility Compliance",
  "Sole-Source / RFI Procurement Ready",
];

const capabilities = [
  {
    icon: Landmark,
    track: "Next-Gen Portal Development & ADA Compliance",
    scope:
      "Architecting accessible, high-availability agency and citizen web portals aligned with federal and state accessibility standards.",
    impact:
      "Guarantees 100% ADA compliance, enhanced citizen adoption, and zero reportable accessibility findings.",
  },
  {
    icon: ServerCog,
    track: "Legacy Mainframe & Core Migration",
    scope:
      "Refactoring COBOL, mainframe systems, and legacy CMS environments into modern, secure cloud architectures.",
    impact:
      "Eliminates legacy operational risk and maintenance overhead while preserving complete historical record fidelity.",
  },
  {
    icon: ShieldCheck,
    track: "FISMA & NIST 800-53 Security Governance",
    scope:
      "Engineering security architecture controls, continuous audit logging, and role-based access protocols.",
    impact:
      "Secures agency audit approvals, enforces data sovereignty, and accelerates Authority to Operate (ATO) timelines.",
  },
  {
    icon: FileCheck,
    track: "Procurement-Safe Product Integrations",
    scope:
      "Deploying StraBoard and StraL2C tools with role-based controls and complete audit trail tracking.",
    impact:
      "Delivers procurement-ready operational tools fully compatible with Salesforce Government Cloud and ServiceNow.",
  },
  {
    icon: Database,
    track: "High-Fidelity Cloud & Data Migration",
    scope:
      "Executing large-scale public data migrations and database cutovers with rigorous validation protocols.",
    impact:
      "Ensures 100% record fidelity, legislative mandate compliance, and zero disruption to public agency operations.",
  },
];

const metrics = [
  {
    kpi: "100%",
    t: "Record Fidelity",
    l: "Achieved on citizen-facing data assets during complex public portal cutovers.",
  },
  {
    kpi: "Zero",
    t: "Reportable Data Incidents",
    l: "Documented track record across government system modernizations.",
  },
  {
    kpi: "42TB",
    t: "Legacy Migration",
    l: "Mission-critical public records migrated and validated within legislative mandate timelines.",
  },
];

const caseStudies = [
  {
    t: "42TB Government Infrastructure Migration Brief",
    d: "Review the compliance controls, technical validation methodologies, and scale metrics used to move legacy public records safely.",
  },
  {
    t: "StraBoard & StraL2C Product Datasheets",
    d: "Access procurement-friendly documentation covering role-based access, audit logging, and integration compatibility for agency purchase orders.",
  },
];

const pathways = [
  {
    icon: CalendarClock,
    t: "Capability Statement & Security Briefing",
    d: "Access Stralynn's official Capability Statement, request a security architecture brief, or schedule a formal technical review with our public sector director.",
    cta: "Request capability statement",
  },
  {
    icon: FileCheck,
    t: "RFI/RFP Submission & Procurement Pathway",
    d: "Submit an official agency RFI/RFP or initiate a discussion on cooperative and sole-source procurement options.",
    cta: "Start procurement pathway",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Public Sector"
        title={
          <>
            Next-gen public sector portal development and{" "}
            <span className="font-editorial italic">risk-mitigated legacy modernization.</span>
          </>
        }
        description="Stralynn executes compliant government portal modernizations, legacy mainframe migrations, and secure cloud architectures fully aligned with FISMA, FedRAMP, and NIST 800-53 security controls."
        video="https://videos.pexels.com/video-files/8961550/8961550-hd_1920_1080_25fps.mp4"
        poster="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all"
          >
            Request a capability statement{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-10">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cream/60 mb-4">
            Government security &amp; compliance controls
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {controls.map((c) => (
              <span key={c} className="text-sm text-cream/80">
                {c}
              </span>
            ))}
          </div>
        </div>
      </PageHeader>

      {/* WHAT WE DO */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Public sector IT modernization and{" "}
                <span className="font-editorial italic">digital portal development.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stralynn Consulting Services delivers specialized IT consulting for government agencies
              and public sector institutions, executing next-generation portal development, legacy
              mainframe migrations, FISMA/NIST-compliant cloud architectures, and secure data
              integrations. By modernizing legacy government infrastructure while maintaining
              absolute data sovereignty, 100% record fidelity, and strict compliance with ADA
              accessibility mandates, Stralynn eliminates procurement risk, accelerates agency
              efficiency, and delivers seamless, zero-incident digital services for citizens.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="pb-8">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[16/7] relative shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=2000&q=80"
                alt="Government building colonnade representing public sector institutions"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">
                  In focus
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  Modernize public infrastructure without introducing procurement risk.
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">
              Our capabilities
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Specialized public sector technical capabilities and{" "}
              <span className="font-editorial italic">compliance frameworks.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.track}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card hover-lift flex flex-col">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{c.track}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.scope}</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-azure mb-2">
                      Procurement &amp; operational impact
                    </div>
                    <p className="text-sm leading-relaxed">{c.impact}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">
              Industry insights
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              Documented scale metrics and proven public sector performance.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden">
            {metrics.map((m) => (
              <StaggerItem key={m.kpi} className="bg-ink p-10">
                <div className="font-display text-5xl md:text-6xl font-semibold gradient-accent-text">
                  {m.kpi}
                </div>
                <div className="mt-3 font-display text-lg font-semibold">{m.t}</div>
                <div className="mt-2 text-sm text-cream/70 leading-relaxed">{m.l}</div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <h3 className="mt-20 font-display text-2xl md:text-3xl font-semibold">
              Featured public sector case studies &amp; datasheets
            </h3>
          </Reveal>
          <Stagger className="mt-8 grid md:grid-cols-2 gap-5">
            {caseStudies.map((c) => (
              <StaggerItem key={c.t}>
                <Link
                  to="/insights"
                  className="group block h-full p-7 rounded-2xl border border-cream/15 bg-cream/[0.04] hover:bg-cream/[0.08] transition-colors"
                >
                  <h4 className="font-display text-lg font-semibold leading-snug">{c.t}</h4>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.d}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-glow">
                    Read the brief
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">
                Our leadership
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Methodological governance and{" "}
                <span className="font-editorial italic">public sector oversight.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Stralynn's public sector technology practice operates under the strategic leadership
                of Founder, CEO, and Board Chairwoman Alpna J. Doshi, NACD.DC. Drawing on extensive
                executive experience leading enterprise technology organizations and managing
                high-stakes digital transformations, Alpna enforces strict risk-mitigation
                frameworks, security governance, and audit-ready delivery across every public agency
                engagement.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Former - Group CIO Royal Philips, Thoma Bravo Operating Partner",
                  "Risk-mitigation frameworks enforced at engagement level",
                  "Security governance and audit-ready delivery",
                  "NACD.DC certified director",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
              <blockquote className="font-editorial italic text-2xl md:text-3xl leading-snug">
                "In public sector technology modernization, success is defined by risk elimination,
                data sovereignty, and legislative compliance. We engineer resilient, auditable portal
                and cloud architectures that protect public data assets and deliver complete
                institutional confidence."
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">Alpna J. Doshi, NACD.DC</span>
                Founder, CEO &amp; Board Chairwoman
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Initiate a public sector procurement pathway or review.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Stralynn provides structured, low-friction engagement pathways tailored specifically to
              agency procurement protocols, sole-source justifications, and RFI/RFP requests.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-5">
            {pathways.map((p) => (
              <StaggerItem key={p.t}>
                <div className="h-full p-8 rounded-2xl bg-background border border-border flex flex-col">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <p.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold self-start"
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
