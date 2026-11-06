import superintelligenceCodeCover from "../assets/books/the-superintelligence-code.jpg";
import superintelligenceReckoningCover from "../assets/books/the-superintelligence-reckoning.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  link?: string;
}

export const ALPNA_BOOKS: Book[] = [
  {
    id: "the-superintelligence-code",
    title: "The Superintelligence Code",
    author: "Alpna J. Doshi",
    coverImage: superintelligenceCodeCover,
    link: "https://books2read.com/u/bOQPRJ",
    description: `Every decade anoints a technology as the final revolution. Client-server, the internet, mobile, cloud. Now it is artificial intelligence, and the pattern is repeating: inflated expectations, scattered pilots, and a graveyard of programs that never reached production.

Alpna J. Doshi has lived through all five waves from three different chairs: as Group CIO of Royal Philips, running technology at global scale in regulated healthcare; as an Operating Partner at Thoma Bravo, where her own capital was at risk across SaaS portfolio companies; and as Founder, Chair and CEO of Stralynn, the AI and cybersecurity company she built. She has watched transformations die for every reason except the technology. They die on org charts, incentives, and culture.

The Superintelligence Code is the book she wishes she had been handed twenty years ago. Part I cracks why transformations fail. Part II gives you the code itself: start with the business problem, build the unsexy data foundation, cross the chasm from pilot to production, govern AI you can defend, and rewire teams and incentives so the organization pulls the change forward. Part III takes you into the boardroom, where AI has become a governance question directors can no longer delegate.`,
  },
  {
    id: "the-superintelligence-reckoning",
    title: "The Superintelligence Reckoning",
    author: "Alpna J. Doshi",
    coverImage: superintelligenceReckoningCover,
    link: "https://www.amazon.in/Superintelligence-Reckoning-Human-Edge/dp/B0HPCNM44Z",
    description: `**From the author of The Superintelligence Code**

The reckoning has begun. This is the continuation every leader was waiting for.

In *The Superintelligence Code*, Alpna Jain Doshi gave leaders the playbook for AI transformation. Now she goes further, into the world that transformation created.

A new earth is getting formed: new economies, new institutions, new work, new power. This book is your map of it: what is being built, what is being destroyed, and where you stand.

The dawn on the cover is this book's vision made visible: a visionary new earth rising out of the wave, shaped by human hands, human judgment, and human hope.

We are living through the greatest upheaval in human history. Artificial intelligence is devouring jobs, minting multibillion-dollar fortunes overnight, rebuilding medicine and education, and redrawing the map of global power. And it is only getting started.

The world's research firms and global institutions are racing to describe this wave. *The Superintelligence Reckoning* does what none of them do: it gives you the operating manual. Tested chapter by chapter against the latest industry research, its thinking runs ahead, with twenty-two chapters beyond the consensus and seven in territory no report has entered. Its frameworks, from the Sentinel Layer to the Human Apex organization, point the way. And woven through it all is *The Meridian File*, a fictional drama of a company whose agents begin signing their own work, and the humans who must answer for it. The frameworks give you the tools; the story gives you the stakes.

This is the essential guide to surviving, and thriving, in the new world: the devastating downside no one can afford to ignore, the extraordinary upside for those who act now, and the human edge, the one advantage no machine can ever take from you.

Written for the leaders who govern, for companies, boards, and governments, and for every individual whose work, family, and future the wave will touch, this book tells you what is happening, what is coming, and exactly what to do about it.

**The future is still ours to choose.**

Inside you will discover:
- Which jobs the wave takes first, and which ones endure.
- How the new economy is being built, and who holds the power in it.
- What every company, board, and government must become.
- The human edge: what no machine can replicate.
- The United Nations Superintelligence Human Edge Council: humanity governing superintelligence together.`,
  },
];
