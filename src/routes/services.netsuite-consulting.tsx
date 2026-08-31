import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, ArrowRightLeft, Wrench, Plug, LifeBuoy, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/netsuite-consulting")({
  head: () => ({
    meta: [
      { title: "NetSuite Consulting & Implementation Services | Stralynn" },
      { name: "description", content: "Streamline global business operations with Stralynn's NetSuite consulting services. Expert implementation, data migration, customization, and system integrations." },
      { property: "og:title", content: "NetSuite Consulting & Implementation Services | Stralynn" },
      { property: "og:description", content: "Stralynn Consulting Services provides expert NetSuite implementation, optimization, and integration services to empower enterprise businesses." },
    ],
  }),
  component: Page,
});

const serviceSuite = [
  { icon: Settings2, title: "NetSuite Implementation", scope: "Custom solution design tailored to your specific business goals, ensuring seamless integration with existing systems.", outcome: "Accelerates time-to-value and aligns software setup with core operational workflows." },
  { icon: ArrowRightLeft, title: "NetSuite Data Migration", scope: "Secure, high-integrity migration of legacy business data into the NetSuite platform.", outcome: "Minimizes operational disruption and ensures total record accuracy upon cutover." },
  { icon: Wrench, title: "Optimization & Customization", scope: "Continuous refining of system environments and development of custom features as business needs evolve.", outcome: "Ensures long-term platform adaptability and eliminates operational bottlenecks." },
  { icon: Plug, title: "NetSuite Integrations", scope: "Unifying NetSuite with existing enterprise systems, including ERP, CRM, and marketing platforms.", outcome: "Creates a single, centralized data ecosystem across all business units." },
  { icon: LifeBuoy, title: "Support & Maintenance", scope: "Proactive system monitoring, troubleshooting, and continuous technical support.", outcome: "Guarantees system uptime and resolves operational issues promptly." },
];

const expertise = [
  { t: "Deep NetSuite Expertise", d: "Certified NetSuite professionals with comprehensive experience across core functionalities, including financials, inventory management, CRM, and e-commerce." },
  { t: "Global Reach, Local Impact", d: "A global network of consultants providing tailored support that addresses regional operational requirements." },
  { t: "Proven Track Record", d: "History of delivering successful NetSuite implementations and optimizations for organizations across diverse sectors." },
];

const benefits = [
  { t: "Enhanced Visibility & Control", d: "Real-time operational insights accessible from a centralized NetSuite platform." },
  { t: "Increased Operational Efficiency", d: "Automated workflows that streamline processes and eliminate manual data entry errors." },
  { t: "Improved Customer Relationships", d: "Integrated CRM capabilities to manage customer interactions effectively." },
  { t: "Scalability for Global Growth", d: "Cloud-based architecture designed to scale seamlessly across expanding markets." },
  { t: "Data-Driven Decision Making", d: "Advanced reporting and analytics tools to support real-time leadership decisions." },
];

const verticals = ["Private Equity", "Healthcare", "Financial Services", "Technology", "Public Sector"];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise Implementations"
        title={<>Enterprise NetSuite <span className="font-editorial italic">Consulting Services</span></>}
        description="Streamlining Operations and Driving Insights for Sustainable Growth."
        video="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
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
                Data-driven <span className="font-editorial italic">operations</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's competitive global market, streamlining business processes and leveraging data-driven insights are key to achieving sustainable growth. Stralynn Consulting Services provides expert NetSuite implementation, optimization, and integration services to empower enterprise businesses to thrive in the digital age.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE SUITE */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="eyebrow mb-3">Services Suite</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Our NetSuite <span className="font-editorial italic">services suite</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 gap-5">
            {serviceSuite.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full p-7 rounded-2xl border border-border bg-background hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-5">
                    <s.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.scope}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs uppercase tracking-widest text-azure mb-1.5">Business outcome</div>
                    <p className="text-sm font-medium leading-relaxed">{s.outcome}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Expertise</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Why choose Stralynn for <span className="font-editorial italic">NetSuite?</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {expertise.map((e) => (
              <StaggerItem key={e.t}>
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-6 w-6 text-azure shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-lg">{e.t}</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{e.d}</p>
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
              Stralynn NetSuite consulting delivers specialized solutions across core enterprise sectors:
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
              <h3 className="font-display text-3xl md:text-4xl font-semibold">Scope your NetSuite implementation</h3>
              <p className="mt-4 text-cream/80 leading-relaxed">Talk to Stralynn's ERP practice about migration, integration, and optimization.</p>
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
