import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import { Badge } from "@/components/ui/Badge";

export interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  className = "",
}) => {
  const {
    name,
    role,
    year,
    branch,
    domain,
    bio,
    image,
    linkedin,
    github,
    email,
    technologies = [],
  } = member;

  const academicTag = [year, branch].filter(Boolean).join(" • ");

  return (
    <div
      className={`bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-lg p-5 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        {/* Member Photo Frame */}
        <div className="relative w-full h-52 sm:h-56 bg-surface-container-high border-2 border-ink-black rounded overflow-hidden mb-4 shadow-[2px_2px_0px_#121212]">
          {image ? (
            <Image
              src={image}
              alt={name || "Team Member"}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-200"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-canvas-cream text-on-surface-variant">
              <span className="material-symbols-outlined text-[48px] text-ink-black/40">
                person
              </span>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-ink-black/50 mt-1">
                TechSoc Core
              </span>
            </div>
          )}

          {/* Academic badge on bottom-left of photo */}
          {academicTag && (
            <div className="absolute bottom-2 left-2 bg-ink-black text-surface-white font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 rounded shadow">
              {academicTag}
            </div>
          )}

          {/* Domain badge on top-right of photo */}
          {domain && (
            <div className="absolute top-2 right-2">
              <Badge variant="yellow" size="sm">
                {domain}
              </Badge>
            </div>
          )}
        </div>

        {/* Name & Role */}
        <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold tracking-tight">
          {name || "TechSoc Member"}
        </h3>

        {role && (
          <p className="font-label-md text-label-md text-primary-container uppercase font-bold tracking-wider mt-0.5">
            {role}
          </p>
        )}

        {/* Bio */}
        {bio && (
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3 leading-relaxed">
            {bio}
          </p>
        )}

        {/* Tech Stack / Weapons */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-ink-black/10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-surface-container text-ink-black font-label-sm text-[10px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Social Links Footer */}
      {(linkedin || github || email) && (
        <div className="mt-4 pt-3 border-t-2 border-ink-black/10 flex items-center gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 bg-canvas-cream border border-ink-black rounded shadow-[1px_1px_0px_#121212] hover:bg-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-[16px] text-ink-black">
                terminal
              </span>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 bg-canvas-cream border border-ink-black rounded shadow-[1px_1px_0px_#121212] hover:bg-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-[16px] text-ink-black">
                groups
              </span>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label="Email Address"
              className="p-1.5 bg-canvas-cream border border-ink-black rounded shadow-[1px_1px_0px_#121212] hover:bg-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-[16px] text-ink-black">
                mail
              </span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};
