import { useState } from "react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { ALPNA_BOOKS, type Book } from "../../data/alpna-books";

function formatInlineFormatting(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-foreground/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function renderDescription(description: string) {
  return description.split("\n\n").map((para, idx) => {
    if (para.includes("\n- ")) {
      const [heading, ...bullets] = para.split("\n");
      return (
        <div key={idx} className="space-y-2 pt-1">
          {heading && (
            <p className="font-semibold text-foreground">{formatInlineFormatting(heading)}</p>
          )}
          <ul className="space-y-1.5 pl-1">
            {bullets.map((b, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2">
                <span className="text-azure shrink-0 mt-0.5">•</span>
                <span>{formatInlineFormatting(b.replace(/^[-\s*]+/, ""))}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <p key={idx}>{formatInlineFormatting(para)}</p>;
  });
}

export function BooksSection() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-border/70">
        <BookOpen className="h-4 w-4 text-azure shrink-0" />
        <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
          Books & Publications
        </h3>
      </div>

      {/* Book Cards */}
      <div className="space-y-3">
        {ALPNA_BOOKS.map((book) => (
          <button
            key={book.id}
            type="button"
            onClick={() => setSelectedBook(book)}
            aria-haspopup="dialog"
            aria-label={`View details for ${book.title} by ${book.author}`}
            className="group w-full text-left flex items-start gap-3.5 p-3 rounded-xl border border-border/60 bg-secondary/30 hover:bg-secondary/70 hover:border-azure/40 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Real Book Cover Image (~2:3 Portrait Aspect Ratio) */}
            <div className="w-16 h-24 shrink-0 rounded-lg overflow-hidden border border-border/80 bg-background shadow-xs relative">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Book Metadata */}
            <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground group-hover:text-azure transition-colors line-clamp-2 leading-snug">
                  {book.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">by {book.author}</p>
              </div>

              <div className="inline-flex items-center gap-1 text-[11px] font-medium text-azure mt-2">
                <span className="underline-offset-2 group-hover:underline">View Details</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Book Details Modal */}
      <Dialog
        open={selectedBook !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedBook(null);
        }}
      >
        <DialogContent className="max-w-lg sm:max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl p-6 sm:p-8 bg-background border-border">
          {selectedBook && (
            <div className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-8 items-start">
              {/* LEFT COLUMN: Cover Image + View Book Button */}
              <div className="flex flex-col items-center sm:items-start gap-4">
                <div className="w-full aspect-[2/3] max-w-[180px] rounded-xl overflow-hidden border border-border shadow-soft bg-background">
                  <img
                    src={selectedBook.coverImage}
                    alt={`${selectedBook.title} official book cover`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {selectedBook.link && (
                  <a
                    href={selectedBook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full gradient-hero text-cream px-5 py-2.5 text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity w-full max-w-[180px]"
                  >
                    <span>View Book</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>

              {/* RIGHT COLUMN: Title, Author, Description */}
              <div className="space-y-4">
                <DialogHeader className="text-left space-y-1 p-0">
                  <DialogTitle className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {selectedBook.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-medium text-muted-foreground">
                    By <span className="text-foreground font-semibold">{selectedBook.author}</span>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {renderDescription(selectedBook.description)}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
