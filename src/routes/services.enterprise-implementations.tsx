import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cloud, Database, Briefcase } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/enterprise-implementations")({
  head: () => ({
    meta: [
      { title: "Enterprise Platform Implementation Services — Stralynn" },
      { name: "description", content: "Stralynn implements and optimizes Salesforce, ERP (including NetSuite), and Certinia platforms — from current-state assessment through data migration, cutover, and post-go-live optimization." },
      { property: "og:title", content: "Enterprise Platform Implementation Services — Stralynn" },
      { property: "og:description", content: "Salesforce, ERP and Certinia implementations for enterprises and government agencies." },
    ],
  }),
  component: Page,
});

const platforms: {
  to: string;
  label: string;
  short: string;
  icon: typeof Cloud;
  teaser: string;
}[] = [
  {
    to: "/services/salesforce-transformation",
    label: "Salesforce Transformation",
    short: "Salesforce",
    icon: Cloud,
    teaser: "Custom Salesforce design, implementation, and training, including identity and Zero Trust security for federal workforces.",
  },
  {
    to: "/services/netsuite-consulting",
    label: "NetSuite Consulting",
    short: "NetSuite",
    icon: Database,
    teaser: "NetSuite and enterprise ERP implementation, optimization, and integration across financials, inventory, CRM, and e-commerce.",
  },
  {
    to: "/services/certinia-consulting",
    label: "Certinia Consulting",
    short: "Certinia",
    icon: Briefcase,
    teaser: "Certinia (formerly FinancialForce) deployment for professional services automation on the Salesforce platform.",
  },
];

const faqs = [
  {
    q: "Does Stralynn replace or integrate with existing systems?",
    a: "Stralynn designs implementations to integrate with existing systems and processes; platform replacement happens only where the assessment shows it is the lower-risk path.",
  },
  {
    q: "How long does an enterprise implementation take?",
    a: "Timelines depend on scope, but defined-scope deployments can be structured as 90 day Digital Capsules, and documented cutovers have completed within 90 day windows.",
  },
  {
    q: "Does Stralynn provide training?",
    a: "Yes. Implementation and training are delivered together — Stralynn also operates comprehensive training programs to build client self-sufficiency after go-live.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>Enterprise Platform <span className="font-editorial italic">Implementation Services</span></>}
        description="Stralynn Consulting Services implements and optimizes Salesforce, ERP (including NetSuite), and Certinia platforms for enterprises and government agencies from current state assessment through data migration, cutover, and post go live optimization."
        video="https://videos.pexels.com/video-files/7773543/7773543-hd_1920_1080_30fps.mp4"
        poster="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Schedule a Strategic Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* DEFINITION */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <Reveal>
              <div className="eyebrow mb-3">Definition</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What are enterprise <span className="font-editorial italic">implementations?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enterprise implementations are structured deployments of business-critical platforms (CRM, ERP, and professional services automation), covering solution design, configuration, data migration, integration, training, and cutover. Stralynn designs each implementation around the client's existing systems and business goals rather than a generic template, then validates data integrity at every migration checkpoint before cutover.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 rounded-3xl overflow-hidden aspect-[16/8] bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80"
                alt="Enterprise systems team reviewing a platform implementation roadmap"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platform cards */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="eyebrow mb-3">Platform Portfolio</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Which platforms does Stralynn <span className="font-editorial italic">implement?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Each platform has its own dedicated page covering scope, delivery approach, and business outcomes. Select one to go deeper.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid md:grid-cols-3 gap-5 mb-12">
            {platforms.map((p) => (
              <StaggerItem key={p.to}>
                <Link
                  to={p.to}
                  className="group block h-full text-left p-7 rounded-2xl border border-border bg-background hover:border-azure/40 hover-lift transition-all"
                >
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <p.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{p.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.teaser}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-azure">
                    View details <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Credibility strip */}
          <div className="rounded-2xl border border-border bg-background px-6 py-5 text-sm text-muted-foreground leading-relaxed">
            Certified platform teams across the US, Canada, and India · GSA Multiple Award Schedule contract holder · Public sector implementations aligned to FISMA requirements and NIST 800-53 controls.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Common FAQ</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Questions before <span className="font-editorial italic">kickoff</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="font-semibold text-lg mb-2">{f.q}</div>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
