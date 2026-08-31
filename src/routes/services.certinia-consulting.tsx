import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings2, RefreshCw, Plug, ArrowRightLeft, LifeBuoy, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/certinia-consulting")({
  head: () => ({
    meta: [
      { title: "Certinia Consulting & Implementation | Stralynn" },
      { name: "description", content: "Elevate financial control and PSA visibility on Salesforce with Stralynn's expert Certinia consulting, customized implementations, and seamless integrations." },
      { property: "og:title", content: "Certinia Consulting & Implementation | Stralynn" },
      { property: "og:description", content: "Stralynn Consulting Services offers comprehensive Certinia (formerly FinancialForce) services across financial management, PSA, and CRM." },
    ],
  }),
  component: Page,
});

const portfolio = [
  { icon: Settings2, title: "Customized Implementation", desc: "Tailored solution design and configuration built around unique organizational workflows and existing infrastructure." },
  { icon: RefreshCw, title: "Ongoing Optimization & Customization", desc: "Continuous platform adjustments and custom feature development to support evolving operational requirements." },
  { icon: Plug, title: "Streamlined Integrations", desc: "Centralized connection of Certinia with critical enterprise systems to eliminate data silos." },
  { icon: ArrowRightLeft, title: "Seamless Data Transition", desc: "Secure, efficient migration of legacy financial and project data with minimal operational disruption." },
  { icon: LifeBuoy, title: "Support & User Training", desc: "Dedicated support and user training programs to ensure complete team adoption and maximum platform value." },
];

const advantages = [
  { t: "Certified Certinia Expertise", d: "Deep technical experience across implementation, optimization, and system integration.", value: "Maximizes platform ROI through precision architecture on the Salesforce ecosystem." },
  { t: "Cross-Industry Results", d: "Track record of driving financial control, project visibility, and client satisfaction.", value: "Reduces project failure risk and accelerates time-to-value." },
  { t: "Global & Regulatory Alignment", d: "Global consultant footprint equipped to navigate localized reporting requirements and regulations.", value: "Guarantees compliance and seamless multi-regional financial management." },
];

const benefits = [
  { t: "Clear Financial Picture", d: "Real-time visibility into financial performance to enable data-driven profitability decisions." },
  { t: "Enhanced Project Delivery", d: "Total tracking of project progress, resource allocation, and budgets for on-time execution." },
  { t: "Stronger Client Relationships", d: "Streamlined customer interactions and improved communication through native CRM alignment." },
  { t: "Boosted Productivity & Collaboration", d: "Reduced manual handoffs and enhanced cross-departmental alignment." },
  { t: "Scalability & Adaptability", d: "Flexible platform structure capable of scaling alongside future business growth." },
];

const verticals = ["Private Equity", "Healthcare", "Financial Services", "Technology", "Public Sector"];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise Implementations"
        title={<>Enterprise Certinia <span className="font-editorial italic">Consulting Services</span></>}
        description="Elevating Financial Management and Project Visibility on Salesforce."
        video="https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="https://calendar.app.google/8MA2wV1iHwWdNoHB9" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <Reveal>
              <div className="eyebrow mb-3">Overview</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Unified financial <span className="font-editorial italic">management</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Streamlined financial management and enhanced project visibility are critical for informed decision-making and peak performance. Stralynn Consulting Services offers comprehensive Certinia (formerly FinancialForce) services to empower organizations with a unified cloud platform across financial management, Professional Services Automation (PSA), and CRM.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PORTFOLIO */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="eyebrow mb-3">Services Portfolio</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Our Certinia <span className="font-editorial italic">services portfolio</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full p-7 rounded-2xl border border-border bg-background hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <p.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PARTNER ADVANTAGES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Partner Advantages</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Why partner with Stralynn for <span className="font-editorial italic">Certinia?</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <StaggerItem key={a.t}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card">
                  <div className="font-display text-xl font-semibold mb-3">{a.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.d}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs uppercase tracking-widest text-azure mb-1.5">Executive value</div>
                    <p className="text-sm font-medium leading-relaxed">{a.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Business Benefits</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              Core business <span className="font-editorial italic">benefits</span>
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <StaggerItem key={b.t}>
                <div className="h-full p-6 rounded-2xl bg-card border border-border">
                  <div className="font-semibold mb-2">{b.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-3">Industry Verticals</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-10">
              Target industry <span className="font-editorial italic">verticals</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Stralynn delivers customized Certinia solutions across key enterprise sectors:
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {verticals.map((v) => (
              <div key={v} className="flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-azure" /> {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-cream">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-semibold">Scope your Certinia implementation</h3>
              <p className="mt-4 text-cream/80 leading-relaxed">Talk to Stralynn's Certinia practice about PSA, billing, and revenue recognition.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="https://calendar.app.google/8MA2wV1iHwWdNoHB9" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
                Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 text-cream px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-cream/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
