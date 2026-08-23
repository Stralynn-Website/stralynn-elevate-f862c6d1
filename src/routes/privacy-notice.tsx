import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/privacy-notice")({
  head: () => ({
    meta: [
      { title: "Privacy Notice — Stralynn" },
      { name: "description", content: "How Stralynn Consulting Services collects, uses, and protects information submitted through this website." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyNoticePage,
});

const sections = [
  {
    heading: "Information We Collect",
    body: "When you submit a form on this site — including the contact form, a job application, or a newsletter signup — we collect the information you provide directly, such as your name, email address, phone number, company, job title, and any message or resume content you share. We also automatically collect limited technical information, such as your IP address and browser type, for security and fraud-prevention purposes.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you submit to respond to your inquiry, evaluate a job application, provide the services you request, and improve our website and offerings. We do not sell your personal information to third parties.",
  },
  {
    heading: "How We Store Your Information",
    body: "Submissions are stored securely and are accessible only to authorized Stralynn personnel. Job application materials, including resumes, are retained for the purpose of evaluating your candidacy and may be considered for future opportunities unless you request deletion.",
  },
  {
    heading: "Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information you've submitted to us at any time by contacting us using the details below. We will respond to verified requests in accordance with applicable law.",
  },
  {
    heading: "Cookies & Analytics",
    body: "This site may use cookies or similar technologies to understand site usage and improve the visitor experience. You can control cookie preferences through your browser settings.",
  },
  {
    heading: "Contact Us",
    body: "If you have questions about this Privacy Notice or how your information is handled, please reach out via our Contact page or email us at connect@stralynn.com.",
  },
];

function PrivacyNoticePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Notice"
        description="How Stralynn Consulting Services collects, uses, and protects the information you share with us."
      />

      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Contact
          </Link>

          <Reveal>
            <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
          </Reveal>

          <Reveal>
            {sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="font-display text-2xl font-semibold mb-3">{s.heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
