import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Briefcase, Search } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";
import { useJobs } from "../hooks/use-jobs";

const MotionLink = motion(Link);

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers — Stralynn" },
      { name: "description", content: "Join Stralynn, a Woman- and Minority-Owned Business recognized by CIO Review. We transform organizations — and careers." },
    ],
  }),
  component: Careers,
});

const jobsDefault = [
  { team: "Program Management", role: "Project Manager", location: "United States (Remote)", type: "Contracted" },
];

const whyStralynn = [
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
    title: "A Human-First Culture",
    body: "We believe that our greatest asset isn't our technology or our methodology—it's you. Our \"Human-First\" philosophy means we prioritize empathy, psychological safety, and holistic well-being.",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    title: "Unmatched Career Acceleration",
    body: "At Stralynn, you won't get lost in the crowd. We provide our team members with a platform to do meaningful, high-impact work from day one.",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
    title: "A Seat at the Table with Leaders",
    body: "Forget rigid hierarchies and red tape. Here, you work directly alongside our partners, and senior executives. We operate with an open-door policy where the people steering the company hear and value your ideas.",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80",
    title: "Cross-Functional Mastery",
    body: "We don't believe in silos. Digital transformation requires a unified approach, and so does your development. As a Stralynn consultant, you will stretch beyond your primary domain collaborating across technology, business strategy, HR, and sales operations.",
  },
];

function Careers() {
  const { jobs } = useJobs(jobsDefault);
  const [team, setTeam] = useState("All");
  const [q, setQ] = useState("");
  const teams = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j) => j.team)))], [jobs]);
  const filtered = useMemo(
    () => jobs.filter((j) => (team === "All" || j.team === team) && j.role.toLowerCase().includes(q.toLowerCase())),
    [jobs, team, q]
  );

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={<>Build the firm you'd want to <span className="font-editorial italic">hire</span></>}
        description="We hire people who could be doing this work anywhere and choose to do it here, with the team, on the problems that matter."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* WHY STRALYNN */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                Shape the Future of Digital Transformation. <span className="font-editorial italic">Starting with Yours.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                As a proud Woman- and Minority-Owned Business—and recognized as a top Digital Transformation Solutions company by CIO Review—Stralynn is built on the belief that extraordinary business results are driven by exceptional people. We don't just transform organizations; we transform careers.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-semibold mt-16 mb-8">Why Build Your Career With Stralynn?</h3>
          </Reveal>

          <Stagger className="grid md:grid-cols-2 gap-5">
            {whyStralynn.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="aspect-[16/9]">
                    <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="font-display text-xl font-semibold mb-2">{c.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-16 pt-10 border-t border-border">
              <h3 className="font-display text-2xl font-semibold mb-2">Ready to Make an Impact?</h3>
              <p className="text-muted-foreground">Explore our open roles and find out how you can contribute to an award-winning team that puts its people first.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">Open roles</h2>
            <p className="text-muted-foreground">{filtered.length} positions across {teams.length - 1} teams</p>
          </Reveal>

          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {teams.map((t) => (
                <button
                  key={t}
                  onClick={() => setTeam(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    team === t
                      ? "bg-navy-deep text-cream"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search roles…"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary border border-transparent focus:bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="mt-10 divide-y divide-border border-t border-b border-border">
            <AnimatePresence mode="popLayout">
              {filtered.map((j) => (
                <MotionLink
                  key={j._id || j.role}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  to={j._id ? "/careers/apply/$jobId" : "/contact"}
                  params={j._id ? { jobId: j._id } : undefined}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-6 hover:px-3 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-azure mb-1">{j.team}</div>
                    <div className="font-display text-xl md:text-2xl font-semibold">{j.role}</div>
                  </div>
                  <div className="flex items-center gap-5 text-sm text-muted-foreground shrink-0">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{j.location}</span>
                    <span className="hidden md:inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{j.type}</span>
                    <span className="inline-flex items-center gap-1.5 text-azure font-semibold text-xs uppercase tracking-wider">
                      Apply <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                </MotionLink>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">No roles match — try a different team.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
