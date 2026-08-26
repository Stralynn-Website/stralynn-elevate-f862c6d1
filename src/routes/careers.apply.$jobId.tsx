import { useState, useEffect } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Clock, Upload, CheckCircle2, ArrowLeft } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { renderSimpleMarkdown } from "../lib/simple-markdown";

export const Route = createFileRoute("/careers/apply/$jobId")({
  head: () => ({
    meta: [
      { title: "Apply — Stralynn Careers" },
      { name: "description", content: "Apply for an open role at Stralynn." },
    ],
  }),
  component: ApplyPage,
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

interface JobDetail {
  _id: string;
  role: string;
  team: string;
  location: string;
  type: string;
  description?: string;
}

function ApplyPage() {
  const { jobId } = useParams({ from: "/careers/apply/$jobId" });
  const [job, setJob] = useState<JobDetail | null>(null);
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState<string | null>(null);

  const [sent, setSent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadJob() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/jobs`);
        const data = await res.json();
        const found = (data.jobs || []).find((j: JobDetail) => j._id === jobId);
        if (!cancelled) {
          if (found) setJob(found);
          else setJobError("This role could not be found — it may have been closed.");
        }
      } catch {
        if (!cancelled) setJobError("Couldn't load this role. Please check your connection.");
      } finally {
        if (!cancelled) setJobLoading(false);
      }
    }
    loadJob();
    return () => { cancelled = true; };
  }, [jobId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);
    setSubmitError(null);

    if (!resumeFile) {
      setSubmitError("Please attach your resume.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("resume", resumeFile);

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/${jobId}/apply`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (jobLoading) {
    return (
      <section className="pt-40 pb-24 md:pt-52">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground">Loading role details…</p>
        </div>
      </section>
    );
  }

  if (jobError && !job) {
    return (
      <section className="pt-40 pb-24 md:pt-52">
        <div className="container-x max-w-2xl text-center">
          <div className="p-10 rounded-2xl border border-border bg-card">
            <p className="text-muted-foreground mb-6">{jobError}</p>
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-cream px-6 py-3 text-sm font-semibold">
              View open roles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!job) return null;

  if (sent) {
    return (
      <section className="pt-40 pb-24 md:pt-52">
        <div className="container-x max-w-2xl text-center">
          <div className="p-10 rounded-2xl border border-border bg-card">
            <div className="h-14 w-14 rounded-full bg-green-100 grid place-items-center mx-auto mb-5">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="font-display text-2xl font-semibold mb-2">Application received</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for applying for {job.role}. We'll review your application and be in touch shortly.
            </p>
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-cream px-6 py-3 text-sm font-semibold">
              Back to open roles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Compact title bar (no big hero — matches a job-posting page pattern) */}
      <section className="pt-32 pb-10 md:pt-40 border-b border-border bg-secondary/40">
        <div className="container-x">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to open roles
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-4">{job.role}</h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{job.type}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14">
            {/* LEFT: job description */}
            <Reveal>
              <div>
                {job.description ? (
                  renderSimpleMarkdown(job.description)
                ) : (
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    Stralynn is an industry-leading IT and Business Process consulting organization built on the belief that extraordinary business results are driven by exceptional people.
                  </p>
                )}
              </div>
            </Reveal>

            {/* RIGHT: Application form */}
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28 p-7 rounded-2xl border border-border bg-card">
                <h2 className="font-display text-xl font-semibold mb-1">Apply for this position</h2>
                <p className="text-xs text-muted-foreground mb-6"><span className="text-red-600">*</span> Required</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">Address / Location</label>
                    <input id="location" name="location" placeholder="City, State, Country" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                  </div>

                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm font-medium mb-2">LinkedIn / Portfolio URL</label>
                    <input id="linkedinUrl" name="linkedinUrl" type="url" placeholder="https://" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all" />
                  </div>

                  <div>
                    <label htmlFor="coverNote" className="block text-sm font-medium mb-2">Note to the hiring team (optional)</label>
                    <textarea id="coverNote" name="coverNote" rows={4} maxLength={3000} placeholder="Why this role, why Stralynn" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-azure focus:ring-2 focus:ring-azure/20 outline-none text-sm transition-all resize-y" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Resume <span className="text-red-600">*</span>
                    </label>
                    <label
                      htmlFor="resume"
                      className="flex items-center gap-3 px-4 py-4 rounded-xl border-2 border-dashed border-border hover:border-azure/50 cursor-pointer transition-all"
                    >
                      <Upload className="h-5 w-5 text-muted-foreground shrink-0" />
                      <span className="text-sm text-muted-foreground truncate">
                        {resumeFile ? resumeFile.name : "PDF or Word document, up to 5MB"}
                      </span>
                    </label>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    />
                    {attempted && !resumeFile && (
                      <p className="mt-2 text-sm text-red-600">Please attach your resume</p>
                    )}
                  </div>

                  {submitError && <p className="text-sm text-red-600">{submitError}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
