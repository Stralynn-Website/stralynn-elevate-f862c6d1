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
      { name: "description", content: "Join Stralynn. We hire senior operators and engineers who want consulting reinvented." },
    ],
  }),
  component: Careers,
});

const jobsDefault = [
  { team: "AI", role: "Principal AI Engineer", location: "Remote · Americas", type: "Full-time" },
  { team: "AI", role: "Applied Scientist, Generative Systems", location: "New York", type: "Full-time" },
  { team: "Strategy", role: "Engagement Manager, Private Equity", location: "London", type: "Full-time" },
  { team: "Strategy", role: "Associate, Healthcare Practice", location: "Boston", type: "Full-time" },
  { team: "Design", role: "Principal Product Designer", location: "Remote · EU", type: "Full-time" },
  { team: "Operations", role: "Chief of Staff", location: "Bangalore", type: "Full-time" },
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

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { k: "Senior only teams", v: "Every engagement is staffed with partners and principals." },
              { k: "Equity for everyone", v: "All full-time hires share in the firm's upside." },
              { k: "Time for craft", v: "Six weeks a year for research, writing and open source." },
            ].map((c) => (
              <Reveal key={c.k}>
                <div className="p-7 rounded-2xl border border-border bg-card h-full">
                  <div className="font-display text-xl font-semibold mb-2">{c.k}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

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
