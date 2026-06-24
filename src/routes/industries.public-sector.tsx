import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Landmark, ShieldCheck, Users, FileCheck, Cpu, Building2, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/public-sector")({
  head: () => ({
    meta: [
      { title: "Public Sector — Stralynn" },
      { name: "description", content: "Modernizing government, defense and civic platforms with secure, citizen-centric digital transformation." },
      { property: "og:title", content: "Public Sector — Stralynn" },
      { property: "og:description", content: "We help agencies deliver mission outcomes with modern platforms, AI and rigorous program execution." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Landmark, title: "Digital government", desc: "Citizen-facing services rebuilt around outcomes, accessibility and measurable trust." },
  { icon: ShieldCheck, title: "FedRAMP & compliance", desc: "Cloud authorizations, FISMA, CMMC and zero-trust architectures shipped on schedule." },
  { icon: Cpu, title: "Responsible AI", desc: "Governed AI pilots for casework, intake and analytics — with audit trails agencies can defend." },
  { icon: FileCheck, title: "Program rescue", desc: "Recovering troubled modernization programs with honest assessments and execution muscle." },
  { icon: Users, title: "Workforce enablement", desc: "Change, training and shared-service operating models that survive administration turnover." },
  { icon: Building2, title: "Defense & intel", desc: "Mission systems, secure cloud and data fabrics for warfighter and intelligence outcomes." },
];

const proof = [
  { stat: "11", label: "Federal and state agencies served across civilian, defense and health missions." },
  { stat: "$420M", label: "In modernization programs delivered or recovered on schedule." },
  { stat: "100%", label: "Cleared delivery teams for classified and CUI environments when required." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Mission outcomes for the <span className="font-editorial italic">public sector.</span></>}
        description="We partner with federal, state and local leaders to modernize the systems citizens rely on — from benefits and licensing to defense logistics — with secure cloud, responsible AI and program discipline."
        video="https://videos.pexels.com/video-files/8961550/8961550-hd_1920_1080_25fps.mp4"
        poster="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Talk to our public sector team <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Six capabilities built for <span className="font-editorial italic">mission environments.</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full p-7 rounded-2xl bg-card border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Proof, not promises</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              Delivery the <span className="font-editorial italic">inspector general would approve.</span>
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {proof.map((p) => (
              <StaggerItem key={p.stat}>
                <div className="p-8 rounded-2xl bg-background border border-border h-full">
                  <div className="font-display text-5xl text-azure mb-3">{p.stat}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Why Stralynn</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Built for the <span className="font-editorial italic">accountability bar.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {[
              "Former agency CIOs, program managers and contracting officers on every engagement.",
              "Cleared delivery talent across Secret, TS/SCI and CUI environments.",
              "FedRAMP, FISMA, CMMC and StateRAMP fluency baked into our delivery playbook.",
              "Outcome-based pricing options aligned to agency milestones, not staff augmentation.",
            ].map((p) => (
              <StaggerItem key={p}>
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-6 w-6 text-azure shrink-0 mt-0.5" />
                  <div className="text-lg">{p}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
