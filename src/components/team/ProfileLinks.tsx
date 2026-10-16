import React from "react";
import { Icon } from "@/components/ui/Icon";
import type { RosterMember } from "@/data/team";

const pill =
  "inline-flex items-center gap-1 px-2 py-0.5 bg-surface-white font-label-sm text-[10px] uppercase font-bold rounded border-2 border-ink-black shadow-[1px_1px_0px_#121212] hover:bg-secondary-container transition-all";

/** LinkedIn / email buttons for a team member. Renders nothing if neither is set. */
export const ProfileLinks: React.FC<{ member: RosterMember; className?: string }> = ({
  member,
  className = "",
}) => {
  if (!member.linkedin && !member.email) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className={pill}
        >
          LinkedIn
          <Icon name="arrow_outward" className="text-[12px]" />
        </a>
      )}
      {member.email && (
        <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className={pill}>
          <Icon name="mail" className="text-[12px]" />
          Email
        </a>
      )}
    </div>
  );
};
