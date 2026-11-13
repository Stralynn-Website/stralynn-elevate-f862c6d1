import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ALPNA_BOOKS } from "../../data/alpna-books";

const HOME_BOOKS = [
  {
    id: "the-superintelligence-code",
    title: "The Superintelligence Code",
    author: "Alpna J. Doshi",
    coverImage: ALPNA_BOOKS[0].coverImage,
    link: ALPNA_BOOKS[0].link || "https://books2read.com/u/bOQPRJ",
    eyebrow: "By Alpna J. Doshi",
    description:
      "The executive playbook for AI transformation: crack why enterprise programs fail, cross the chasm from pilot to production, and govern AI with boardroom confidence.",
  },
  {
    id: "the-superintelligence-reckoning",
    title: "The Superintelligence Reckoning",
    author: "Alpna Jain Doshi",
    coverImage: ALPNA_BOOKS[1].coverImage,
    link:
      ALPNA_BOOKS[1].link ||
      "https://www.amazon.in/Superintelligence-Reckoning-Human-Edge/dp/B0HPCNM44Z",
    eyebrow: "By Alpna J. Doshi",
    description:
      "A guide to navigating the new world being created by artificial intelligence — new economies, new institutions, new work, and new power.",
  },
];

export function HomeBooksSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-b border-border">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-azure/20 bg-azure/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-azure font-semibold mb-4">
                <BookOpen className="h-3.5 w-3.5 text-azure" />
                Publications & Thought Leadership
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Books by <span className="font-editorial italic text-azure">Alpna Jain Doshi</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Exploring AI transformation, superintelligence, and the human future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/alpna"
              className="text-sm font-semibold inline-flex items-center gap-2 text-navy hover:text-azure transition-colors"
            >
              Speaker profile & keynote talks <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Two-Column Side-by-Side Desktop / Stacked Mobile Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {HOME_BOOKS.map((book) => (
            <StaggerItem key={book.id} className="h-full">
              <div className="group flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-6 lg:gap-8 p-6 sm:p-8 md:p-7 lg:p-8 rounded-3xl bg-card border border-border/80 shadow-soft hover-lift transition-all duration-300 h-full">
                {/* Book Cover Image (~2:3 Portrait Aspect Ratio) */}
                <div className="w-32 sm:w-36 md:w-36 lg:w-40 shrink-0 aspect-[2/3] rounded-2xl overflow-hidden shadow-elegant border border-border/80 bg-background relative">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block h-full w-full"
                  >
                    <img
                      src={book.coverImage}
                      alt={`${book.title} official book cover`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Book Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch text-center sm:text-left md:text-center lg:text-left">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-semibold text-azure mb-1.5 line-clamp-1">
                      {book.eyebrow}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-azure transition-colors"
                      >
                        {book.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* View Book CTA Button */}
                  <div className="pt-6 mt-auto flex justify-center sm:justify-start md:justify-center lg:justify-start">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3 text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-sm"
                      aria-label={`View ${book.title} (opens in a new tab)`}
                    >
                      <span>View Book</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
