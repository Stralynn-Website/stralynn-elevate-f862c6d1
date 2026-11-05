import superintelligenceCover from "../assets/books/the-superintelligence-code.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  link: string;
}

export const ALPNA_BOOKS: Book[] = [
  {
    id: "the-superintelligence-code",
    title: "The Superintelligence Code",
    author: "Alpna J. Doshi",
    coverImage: superintelligenceCover,
    link: "https://books2read.com/u/bOQPRJ",
    description: `Every decade anoints a technology as the final revolution. Client-server, the internet, mobile, cloud. Now it is artificial intelligence, and the pattern is repeating: inflated expectations, scattered pilots, and a graveyard of programs that never reached production.

Alpna J. Doshi has lived through all five waves from three different chairs: as Group CIO of Royal Philips, running technology at global scale in regulated healthcare; as an Operating Partner at Thoma Bravo, where her own capital was at risk across SaaS portfolio companies; and as Founder, Chair and CEO of Stralynn, the AI and cybersecurity company she built. She has watched transformations die for every reason except the technology. They die on org charts, incentives, and culture.

The Superintelligence Code is the book she wishes she had been handed twenty years ago. Part I cracks why transformations fail. Part II gives you the code itself: start with the business problem, build the unsexy data foundation, cross the chasm from pilot to production, govern AI you can defend, and rewire teams and incentives so the organization pulls the change forward. Part III takes you into the boardroom, where AI has become a governance question directors can no longer delegate.`,
  },
];
