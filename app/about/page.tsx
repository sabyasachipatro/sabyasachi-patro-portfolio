
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Sabyasachi Patro",
  description:
    "Learn about Sabyasachi Patro's approach to product management, AI-powered product development, and user-centered problem-solving.",
};

const productApproach = [
  {
    title: "Problem-first thinking",
    detail:
      "Understand the underlying user problem before deciding what to build.",
  },
  {
    title: "Research and prioritization",
    detail:
      "Explore user needs, evaluate opportunities, and focus on solutions that deliver meaningful value.",
  },
  {
    title: "Prototyping and experimentation",
    detail:
      "Turn ideas into tangible experiences, test assumptions, and refine solutions through iteration.",
  },
  {
    title: "Technical and creative perspective",
    detail:
      "Bring together creative thinking, workflow understanding, and technical awareness to explore practical solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-signal">
          About Me
        </p>

        <h1 className="mt-5 font-display text-4xl leading-tight text-paper md:text-5xl">
          Building products around real problems
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed">
          <p className="text-paper">
            I&apos;m an aspiring Associate Product Manager interested in
            building useful, intuitive products that solve real user
            problems.
          </p>

          <p className="text-muted">
            My approach starts with understanding the problem before jumping
            to solutions. I enjoy exploring user needs, breaking down complex
            workflows, identifying opportunities for improvement, and
            translating ideas into focused product experiences.
          </p>

          <p className="text-muted">
            Through the Product Management with Generative &amp; Agentic AI
            program at BITS School of Management, I&apos;ve developed a
            foundation in product strategy, user research, prioritization,
            product metrics, and AI-powered product development.
          </p>

          <p className="text-muted">
            I&apos;m putting these learnings into practice through product
            case studies and working prototypes, exploring how AI can make
            everyday experiences simpler, more relevant, and more useful.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <SectionHeading title="How I approach product building" />

        <div className="grid gap-8 md:grid-cols-2">
          {productApproach.map((item) => (
            <div key={item.title} className="border-t border-hairline pt-5">
              <h2 className="font-display text-xl text-paper">
                {item.title}
              </h2>

              <p className="mt-3 leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-hairline pt-8">
        <h2 className="font-display text-2xl text-paper">
          What I&apos;m working toward
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          I&apos;m looking for an opportunity as an Associate Product Manager
          where I can contribute to real product challenges, learn from
          experienced teams, and help build products grounded in user needs
          and measurable outcomes.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center border border-hairline px-5 py-3 text-sm text-paper transition-colors hover:border-signalink hover:text-signalink"
          >
            Explore Case Studies
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center bg-signal px-5 py-3 text-sm font-medium text-onsignal transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
