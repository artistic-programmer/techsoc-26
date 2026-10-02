import React from "react";
import { DomainItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface DomainCardProps {
  domain: DomainItem;
  icon?: string;
  className?: string;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  icon = "terminal",
  className = "",
}) => {
  const { name, shortName, description, technologies = [], lead, status } =
    domain;

  return (
    <div
      className={`bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-lg p-5 sm:p-6 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Terminal Bar */}
        <div className="flex items-center justify-between border-b-2 border-ink-black pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded border-2 border-ink-black bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] text-ink-black">
                {icon}
              </span>
            </span>
            <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black">
              {shortName || name || "DOMAIN"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-coral border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-mint border border-ink-black" />
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
            {name || "Untitled Domain"}
          </h3>
          {status && (
            <Badge variant="mint" size="sm">
              {status}
            </Badge>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Core Stack */}
        {technologies && technologies.length > 0 && (
          <div className="mt-4 pt-3 border-t-2 border-ink-black/10">
            <span className="font-label-sm text-[11px] uppercase font-bold text-ink-black block mb-2">
              CORE STACK:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-[11px] text-ink-black rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer / Lead Info & Action */}
      <div className="mt-6 pt-4 border-t-2 border-ink-black/10 flex items-center justify-between gap-3">
        {lead ? (
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-bold">
              Lead / Captain
            </span>
            <span className="font-label-sm text-label-sm font-bold text-ink-black">
              {lead}
            </span>
          </div>
        ) : (
          <span className="font-label-sm text-[11px] text-on-surface-variant italic">
            Domain Lead to be announced
          </span>
        )}

        <Button variant="ghost" size="sm" icon="arrow_forward">
          Roadmap
        </Button>
      </div>
    </div>
  );
};
