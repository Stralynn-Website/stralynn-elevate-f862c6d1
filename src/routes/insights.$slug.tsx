import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock, Tag, CalendarDays } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { insightsArticles, type InsightBlock } from "../data/insights-content";

export const Route = createFileRoute("/insights/$slug")({
  head: () => ({
    meta: [{ title: "Insights — Stralynn" }],
  }),
  component: ArticlePage,
});

function renderBlock(block: InsightBlock, idx: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={idx} className="font-display text-2xl md:text-3xl font-semibold mt-12 mb-4 first:mt-0">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={idx} className="font-display text-xl font-semibold mt-9 mb-3">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-lg text-muted-foreground leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "caseStudy":
      return (
        <div key={idx} className="my-6 p-6 rounded-2xl border border-border bg-secondary/50">
          <div className="text-xs uppercase tracking-widest text-azure font-semibold mb-2">{block.title}</div>
          <p className="text-base text-foreground leading-relaxed">{block.text}</p>
        </div>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-4 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-muted-foreground leading-relaxed">
              <span className="text-azure mt-1.5 shrink-0">•</span>
              <span>
                {item.lead && <strong className="text-foreground font-semibold">{item.lead} </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

function ArticleNotFound() {
  return (
    <section className="py-32">
      <div className="container-x max-w-2xl text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">Article not found</h1>
        <p className="text-muted-foreground mb-8">This report may have been moved or unpublished.</p>
        <Link to="/insights" className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-cream px-6 py-3 text-sm font-semibold">
          Back to Insights <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ArticlePage() {
  const { slug } = useParams({ from: "/insights/$slug" });
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) return <ArticleNotFound />;

  const related = insightsArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={article.cat}
        title={article.title}
        description={article.excerpt}
        image={article.img}
      />

      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-border">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"><Tag className="h-4 w-4" />{article.cat}</span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" />{article.date}</span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{article.read}</span>
          </div>

          <Reveal>
            <article>{article.blocks.map((block, idx) => renderBlock(block, idx))}</article>
          </Reveal>

          <div className="mt-16 pt-10 border-t border-border">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all">
              Talk to our team about this <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-28 md:pb-36">
          <div className="container-x">
            <h3 className="font-display text-2xl font-semibold mb-8">More from Insights</h3>
            <div className="grid sm:grid-cols-2 gap-7">
              {related.map((a) => (
                <Link key={a.slug} to="/insights/$slug" params={{ slug: a.slug }} className="group block">
                  <div className="overflow-hidden rounded-2xl aspect-[5/3] bg-secondary mb-5">
                    <img src={a.img} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 eyebrow mb-3">
                    <span>{a.cat}</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span className="text-muted-foreground">{a.date}</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold leading-snug group-hover:text-azure transition-colors">{a.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
