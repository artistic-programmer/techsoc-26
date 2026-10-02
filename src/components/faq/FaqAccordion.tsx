"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";
import { Badge } from "@/components/ui/Badge";

export interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIndex,
  className = "",
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    typeof defaultOpenIndex === "number" ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const questionId = `faq-q-${item.id || index}`;
        const answerId = `faq-a-${item.id || index}`;

        return (
          <div
            key={item.id || index}
            className="bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] rounded-lg overflow-hidden transition-all"
          >
            <button
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleIndex(index)}
              className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-surface-container/50 transition-colors select-none"
            >
              <div className="flex flex-col gap-2 pr-2">
                {item.category && (
                  <div>
                    <Badge variant="yellow" size="sm">
                      {item.category}
                    </Badge>
                  </div>
                )}
                <h3 className="font-headline-sm text-title-lg sm:text-headline-sm uppercase text-ink-black font-bold tracking-tight">
                  {item.question || `Question ${index + 1}`}
                </h3>
              </div>

              <div
                className={`w-8 h-8 rounded border-2 border-ink-black flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "bg-secondary-container rotate-180" : "bg-canvas-cream"
                }`}
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  expand_more
                </span>
              </div>
            </button>

            {isOpen && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t-2 border-ink-black/10 mt-2"
              >
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-3">
                  {item.answer || "Answer details will be posted soon."}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
