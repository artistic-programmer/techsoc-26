import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowIcon?: string;
  eyebrowVariant?: "yellow" | "mint" | "coral" | "cyan" | "white" | "dark";
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon,
  eyebrowVariant = "yellow",
  title,
  description,
  align = "left",
  action,
  className = "",
}) => {
  const isCentered = align === "center";

  const badgeBg = {
    yellow: "bg-secondary-container text-ink-black",
    mint: "bg-accent-mint text-ink-black",
    coral: "bg-accent-coral text-white",
    cyan: "bg-accent-cyan text-ink-black",
    white: "bg-surface-white text-ink-black",
    dark: "bg-ink-black text-white",
  }[eyebrowVariant];

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12 ${
        isCentered ? "text-center md:text-center items-center justify-center" : ""
      } ${className}`}
    >
      <div className={`flex flex-col gap-2 ${isCentered ? "items-center" : ""}`}>
        {eyebrow && (
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-0.5 border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-label-sm text-label-sm uppercase font-bold tracking-wider rounded ${badgeBg}`}
            >
              {eyebrowIcon && (
                <span className="material-symbols-outlined text-[14px]">
                  {eyebrowIcon}
                </span>
              )}
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg uppercase text-ink-black tracking-tight font-bold">
          {title}
        </h2>

        {description && (
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
            {description}
          </p>
        )}
      </div>

      {action && <div className="mt-4 md:mt-0 flex-shrink-0">{action}</div>}
    </div>
  );
};
