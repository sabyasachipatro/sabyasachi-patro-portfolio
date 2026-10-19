
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Skills — Sabyasachi Patro",
  description:
    "Product management, AI product prototyping, LLM integration, and user-centered problem-solving.",
};

const groupDescriptions: Record<string, string> = {
  "Product Management":
    "Core product skills developed through product case studies, structured problem-solving, and hands-on portfolio work.",
  "AI & Prototyping":
    "Experience building AI-powered product prototypes, integrating LLM APIs, and evaluating AI responses for relevance, evidence, and reliability.",
  "Creative & Technical":
    "Transferable experience in workflow understanding, quality, collaboration, and technical execution.",
  "Creative Production":
    "Transferable experience in workflow understanding, quality, collaboration, and technical execution.",
};

const additionalSkills: Record<string, string[]> = {
  "AI & technology": [
    "LLM & API integration",
    "AI response evaluation",
    "AI guardrails & reliability",
  ],
  "AI & Prototyping": [
    "LLM & API integration",
    "AI response evaluation",
    "AI guardrails & reliability",
  ],
};

export default function SkillsPage() {
  const groupOrder = [
    "Product Management",
    "AI & technology",
    "AI & Prototyping",
    "Tools",
    "Creative & Technical",
    "Creative Production",
  ];

  const orderedGroups = [...skillGroups]
    .map((group) => {
      const extraSkills = additionalSkills[group.title] ?? [];

      return {
        ...group,
        skills: [
          ...group.skills,
          ...extraSkills.filter(
            (skill) =>
              !group.skills.some(
                (existing) =>
                  existing.toLowerCase() === skill.toLowerCase()
              )
          ),
        ],
      };
    })
    .sort((a, b) => {
      const aIndex = groupOrder.indexOf(a.title);
      const bIndex = groupOrder.indexOf(b.title);

      return (
        (aIndex === -1 ? groupOrder.length : aIndex) -
        (bIndex === -1 ? groupOrder.length : bIndex)
      );
    });

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Capabilities"
        subtitle="Product thinking, AI-powered prototyping, technical problem-solving, and user-centered product development."
      />

      <div className="mt-14 grid gap-px overflow-hidden bg-hairline md:grid-cols-2">
        {orderedGroups.map((group, index) => {
          const isPrimary =
            group.title === "Product Management" ||
            group.title === "AI & Prototyping" ||
            group.title === "AI & technology";

          return (
            <section
              key={group.title}
              className={`bg-ink p-6 md:p-8 ${
                isPrimary ? "md:min-h-[280px]" : "md:min-h-[240px]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {isPrimary && (
                  <span className="border border-signalink px-2.5 py-1 text-xs text-signalink">
                    Core focus
                  </span>
                )}
              </div>

              <h2
                className={`mt-8 font-display text-paper ${
                  isPrimary ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}
              >
                {group.title}
              </h2>

              {groupDescriptions[group.title] && (
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
                  {groupDescriptions[group.title]}
                </p>
              )}

              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="relative pl-4 text-sm leading-relaxed text-paper"
                  >
                    <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-signalink" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="mt-12 border-l border-signalink pl-6">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          I’m developing practical product management capabilities through
          structured problem-solving, product case studies, AI-powered
          prototypes, and a user-centered approach to building useful products.
        </p>
      </div>
    </main>
  );
}
