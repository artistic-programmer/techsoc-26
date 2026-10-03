"use client";

import React, { useState } from "react";
import Image from "next/image";
import { domainTeams, DomainTeam, RosterMember } from "@/data/team";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const PersonAvatar: React.FC<{
  member: RosterMember;
  sizes: string;
  className?: string;
}> = ({ member, sizes, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-surface-container border-2 border-ink-black ${className}`}
  >
    {member.image ? (
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes={sizes}
        className="object-cover"
        style={member.position ? { objectPosition: member.position } : undefined}
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-canvas-cream font-display-xl font-extrabold text-ink-black/50 text-[28px]">
        {initialsOf(member.name)}
      </div>
    )}
  </div>
);

const MEMBER_PREVIEW = 9;

const MemberList: React.FC<{ names: string[] }> = ({ names }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? names : names.slice(0, MEMBER_PREVIEW);
  const hidden = names.length - shown.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
        {shown.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2.5 px-2.5 py-2 bg-canvas-cream border-2 border-ink-black/80 rounded-lg"
          >
            <span className="w-8 h-8 flex-shrink-0 rounded-full bg-ink-black text-surface-white font-mono text-[11px] font-bold flex items-center justify-center">
              {initialsOf(name)}
            </span>
            <span className="font-body-sm text-[13px] font-semibold text-ink-black leading-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
      {names.length > MEMBER_PREVIEW && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 px-3 py-1.5 bg-surface-white font-label-sm text-label-sm uppercase font-bold tracking-wider rounded border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all cursor-pointer"
        >
          {expanded ? "Show less" : `+ ${hidden} more`}
        </button>
      )}
    </div>
  );
};

const DomainPanel: React.FC<{ team: DomainTeam }> = ({ team }) => {
  const hasMembers = !!team.members && team.members.length > 0;
  const manyLeads = team.leads.length > 1;

  return (
    <article className="bg-surface-white rounded-xl border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] overflow-hidden">
      {/* Header band */}
      <header
        className={`${team.badgeBg} px-5 sm:px-6 py-3.5 border-b-[3px] border-ink-black flex items-center justify-between gap-3`}
      >
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-surface-white border-2 border-ink-black rounded-lg shadow-[2px_2px_0px_#121212] flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px] text-ink-black">
              {team.icon}
            </span>
          </span>
          <h3 className="font-display-xl text-[22px] sm:text-[26px] uppercase font-extrabold text-ink-black leading-none">
            {team.domain}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[12px] font-bold uppercase text-ink-black">
          <span className="px-2 py-1 bg-surface-white border-2 border-ink-black rounded">
            {team.leads.length} Lead{manyLeads ? "s" : ""}
          </span>
          {hasMembers && (
            <span className="px-2 py-1 bg-ink-black text-surface-white border-2 border-ink-black rounded">
              {team.members!.length} Member{team.members!.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Leads */}
        <div
          className={`p-5 sm:p-6 ${
            hasMembers ? "lg:col-span-5 lg:border-r-[3px] border-ink-black" : "lg:col-span-12"
          }`}
        >
          <span className="font-label-sm text-[11px] uppercase text-on-surface-variant font-bold tracking-widest block mb-3">
            Leads
          </span>
          <div
            className={`grid gap-4 ${
              hasMembers
                ? manyLeads
                  ? "grid-cols-2"
                  : "grid-cols-1 max-w-[220px]"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            }`}
          >
            {team.leads.map((lead) => (
              <div key={lead.name}>
                <PersonAvatar
                  member={lead}
                  sizes="(max-width: 640px) 50vw, 220px"
                  className="w-full aspect-[4/5] rounded-lg shadow-[3px_3px_0px_#121212]"
                />
                <h4 className="font-headline-sm text-[16px] leading-tight uppercase text-ink-black font-bold mt-3">
                  {lead.name}
                </h4>
                <span className="inline-block mt-1 px-2 py-0.5 bg-secondary-container font-label-sm text-[10px] uppercase font-bold rounded border border-ink-black">
                  {team.domain} Lead
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        {hasMembers && (
          <div className="p-5 sm:p-6 lg:col-span-7 bg-surface-container-lowest border-t-[3px] lg:border-t-0 border-ink-black">
            <span className="font-label-sm text-[11px] uppercase text-on-surface-variant font-bold tracking-widest block mb-3">
              Members
            </span>
            <MemberList names={team.members!} />
          </div>
        )}
      </div>
    </article>
  );
};

export const TeamRoster: React.FC = () => {
  const [active, setActive] = useState<string>("all");
  const tabs = [
    { id: "all", label: "ALL DOMAINS" },
    ...domainTeams.map((d) => ({ id: d.id, label: d.domain.toUpperCase() })),
  ];
  const visible = domainTeams.filter((d) => active === "all" || d.id === active);

  return (
    <div>
      <div className="flex flex-col gap-6 mb-10">
        <div>
          <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-widest block mb-2">
            THE SPECIALISTS
          </span>
          <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
            DOMAIN TEAMS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
            Leads and members of every technical and operational wing of TechSoc.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`px-3.5 py-1.5 font-label-md text-label-sm uppercase font-bold tracking-wider rounded border-2 border-ink-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-ink-black text-surface-white shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                    : "bg-surface-white text-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {visible.map((team) => (
          <DomainPanel key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};
