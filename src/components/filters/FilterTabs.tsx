"use client";

import React from "react";

export interface FilterTabOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterTabsProps {
  options: (string | FilterTabOption)[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  options,
  activeId,
  onChange,
  className = "",
}) => {
  const normalizedOptions: FilterTabOption[] = options.map((opt) => {
    if (typeof opt === "string") {
      return { id: opt.toLowerCase().replace(/\s+/g, "-"), label: opt };
    }
    return opt;
  });

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 select-none ${className}`}>
      {normalizedOptions.map((opt) => {
        const isActive = opt.id === activeId || opt.label.toLowerCase() === activeId.toLowerCase();

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`px-4 py-2 font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-full border-[2px] border-ink-black transition-all cursor-pointer ${
              isActive
                ? "bg-secondary-container text-ink-black border-[2.5px] shadow-[4px_4px_0px_#121212] font-bold -translate-x-0.5 -translate-y-0.5"
                : "bg-surface-white text-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            }`}
          >
            {opt.label}
            {typeof opt.count === "number" && (
              <span className="ml-1.5 opacity-80 font-mono text-[11px]">
                ({opt.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
