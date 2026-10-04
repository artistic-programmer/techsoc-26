"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";

interface ConnectFaqProps {
  items?: FaqItem[];
  className?: string;
}

interface DefaultFaq {
  category: string;
  badgeStyle: string;
  question: string;
  answer: string;
}

const defaultFaqs: DefaultFaq[] = [
  {
    category: "MEMBERSHIP",
    badgeStyle: "bg-primary-fixed text-primary",
    question: "Who can join TechSoc?",
    answer:
      "TechSoc is open to all registered students across all B.Tech, M.Tech, and dual-degree branches at IIIT Bhubaneswar. Whether you are CSE, IT, CE, ETC, or EEE, everyone builds here.",
  },
  {
    category: "SKILLS",
    badgeStyle: "bg-secondary-container text-ink-black",
    question: "Do I need prior coding experience?",
    answer:
      "Absolutely not. We host beginner-friendly bootcamps, zero-to-one mentorship pods, and peer study jams spanning Web Dev, Cloud, Competitive Programming, CyberSec, AI/ML, and UI/UX Design.",
  },
  {
    category: "HACKATHONS",
    badgeStyle: "bg-tertiary-fixed text-ink-black",
    question: "How do I participate in campus hackathons and D³ Technotfest?",
    answer:
      "Registrations for campus hackathons and flagship events like Craft N Code '26 at D³ Technotfest open through official event portals. Both inter-college teams and campus squads are eligible to participate.",
  },
  {
    category: "PARTNERSHIPS",
    badgeStyle: "bg-accent-mint text-ink-black",
    question: "Can companies sponsor or collaborate?",
    answer:
      "Yes! We collaborate directly with technical organizations, startups, and community networks for hackathon tracks, talent scout challenges, tech roundtables, and sponsored prize pools.",
  },
];

export const ConnectFaq: React.FC<ConnectFaqProps> = ({ items, className = "" }) => {
  // By default, start with all 4 cards expanded (matching Stitch static view),
  // but allow interactive accordion toggling on each card.
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const displayList = defaultFaqs.map((def, idx) => {
    const override = items && items[idx];
    return {
      category: override?.category || def.category,
      badgeStyle: def.badgeStyle,
      question: override?.question || def.question,
      answer: override?.answer || def.answer,
    };
  });

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`}>
      {displayList.map((faq, index) => {
        const isOpen = openItems[index] ?? true;
        const qId = `connect-faq-${index}`;
        const aId = `connect-faq-ans-${index}`;

        return (
          <div
            key={index}
            className="p-6 bg-surface-white border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] rounded-lg flex flex-col justify-between transition-all"
          >
            <div>
              <button
                type="button"
                id={qId}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => toggleItem(index)}
                className="w-full text-left flex items-start justify-between gap-3 group cursor-pointer select-none"
              >
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 font-label-sm text-label-sm uppercase font-bold border border-ink-black rounded ${faq.badgeStyle}`}
                    >
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-title-lg text-title-lg uppercase text-ink-black font-bold group-hover:text-primary transition-colors break-words">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`w-7 h-7 rounded border-2 border-ink-black flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                    isOpen ? "bg-secondary-container rotate-180" : "bg-canvas-cream"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] text-ink-black">
                    expand_more
                  </span>
                </div>
              </button>

              {isOpen && (
                <div
                  id={aId}
                  role="region"
                  aria-labelledby={qId}
                  className="mt-3 pt-3 border-t-2 border-ink-black/10 animate-in fade-in duration-150"
                >
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
