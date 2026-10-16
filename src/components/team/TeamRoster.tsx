"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  domainTeams,
  DomainTeam,
  RosterMember,
  getMemberPhoto,
  getMemberUrl,
  DEFAULT_MEMBER_PLACEHOLDER,
  getOrderedDomainMembers,
} from "@/data/team";

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
}> = ({ member, sizes, className = "" }) => {
  const [imgSrc, setImgSrc] = useState(member.image);

  return (
    <div
      className={`relative overflow-hidden bg-surface-container border-2 border-ink-black ${className}`}
    >
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={member.name}
          fill
          sizes={sizes}
          className="object-cover"
          style={member.position ? { objectPosition: member.position } : undefined}
          onError={() => setImgSrc(DEFAULT_MEMBER_PLACEHOLDER)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-canvas-cream font-display-xl font-extrabold text-ink-black/50 text-[28px]">
          {initialsOf(member.name)}
        </div>
      )}
    </div>
  );
};

const MemberPhoto: React.FC<{
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}> = ({ src, alt, sizes, className = "object-cover" }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (currentSrc !== DEFAULT_MEMBER_PLACEHOLDER) {
          setCurrentSrc(DEFAULT_MEMBER_PLACEHOLDER);
        }
      }}
    />
  );
};

/**
 * Expanded Member Modal (matches UI Mockup Screenshot 3)
 * Pitch-black card with crisp white border, domain badge, coral close button,
 * 4-column responsive grid of member cards, and custom white scrollbar.
 */
interface MemberModalProps {
  team: DomainTeam;
  members: string[];
  isOpen: boolean;
  onClose: () => void;
}

const MemberModal: React.FC<MemberModalProps> = ({ team, members, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !members || members.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${team.domain} Members`}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121212] text-surface-white border-[3px] sm:border-[3.5px] border-surface-white rounded-2xl p-5 sm:p-7 shadow-[8px_8px_0px_rgba(255,255,255,0.2)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header matching Screenshot 3: Title "Member" with domain badge & coral '×' */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-surface-white/20 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <h3 className="font-display-xl text-[24px] sm:text-[30px] font-extrabold uppercase text-surface-white leading-none tracking-wide">
              Member
            </h3>
            <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black border border-surface-white rounded font-mono text-[11px] font-extrabold uppercase shadow-[1px_1px_0px_#ffffff]">
              {team.domain}
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-surface-white/70 uppercase tracking-wider">
              ({members.length} Specialists)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#FF5F56] hover:text-surface-white hover:bg-[#FF5F56]/20 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-[28px] sm:text-[32px] font-extrabold leading-none transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-surface-white"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Scrollable grid matching Screenshot 3: 4 columns, rounded portrait photos with white border, custom white scrollbar */}
        <div className="overflow-y-auto pr-2 sm:pr-4 custom-modal-scrollbar flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 pb-2">
            {members.map((name) => {
              const photo = getMemberPhoto(name);
              const profileUrl = getMemberUrl(team, name);

              return (
                <div key={name} className="flex flex-col items-center group">
                  <div className="relative aspect-[4/5] w-full rounded-xl border-2 border-surface-white overflow-hidden bg-neutral-900 shadow-[3px_3px_0px_rgba(255,255,255,0.3)] transition-transform duration-200 group-hover:-translate-y-1">
                    <MemberPhoto
                      src={photo}
                      alt={name}
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 200px"
                    />
                  </div>
                  {profileUrl ? (
                    <a
                      href={profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline-sm text-[13px] sm:text-[14px] font-bold text-surface-white text-center mt-2.5 leading-snug w-full line-clamp-2 hover:underline hover:text-secondary-fixed transition-colors focus:outline-none focus-visible:underline"
                      title={name}
                    >
                      {name}
                    </a>
                  ) : (
                    <span
                      className="font-headline-sm text-[13px] sm:text-[14px] font-bold text-surface-white text-center mt-2.5 leading-snug w-full line-clamp-2"
                      title={name}
                    >
                      {name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * DomainPanel (matches UI Mockups Screenshot 1 & 2)
 * Left column: Leads with prominent portrait photo, name, and yellow role badge.
 * Right column: Exactly 3 member photos in Row 1, name pills and "+ X More" button in Row 2.
 */
const DomainPanel: React.FC<{ team: DomainTeam }> = ({ team }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const orderedMembers = getOrderedDomainMembers(team.id, team.members || []);
  const hasMembers = orderedMembers.length > 0;
  const manyLeads = team.leads.length > 1;

  // Row 1: exactly 3 member photos
  const row1Members = orderedMembers.slice(0, 3);

  // Row 2: next members as pills (up to 2), followed by "+ X More" button
  const row2PillMembers = orderedMembers.slice(3, 5);
  const remainingCount = orderedMembers.length > 5 ? orderedMembers.length - 5 : 0;

  return (
    <article className="bg-surface-white rounded-xl border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] overflow-hidden">
      {/* Header band matching Screenshot 1 */}
      <header
        className={`${team.badgeBg} px-5 sm:px-6 py-3.5 border-b-[3px] border-ink-black flex items-center justify-between gap-3`}
      >
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-surface-white border-2 border-ink-black rounded-lg shadow-[2px_2px_0px_#121212] flex items-center justify-center">
            <Icon name={team.icon} className="text-[22px] text-ink-black" />
          </span>
          <h3 className="font-display-xl text-[22px] sm:text-[26px] uppercase font-extrabold text-ink-black leading-none">
            {team.domain}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[12px] font-bold uppercase text-ink-black">
          <span className="px-2 py-1 bg-surface-white border-2 border-ink-black rounded shadow-[1px_1px_0px_#121212]">
            {team.leads.length} Lead{manyLeads ? "s" : ""}
          </span>
          {hasMembers && (
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-2.5 py-1 bg-ink-black text-surface-white border-2 border-ink-black rounded shadow-[1px_1px_0px_#121212] hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-black"
              title="Click to view all members in modal"
            >
              <span>{orderedMembers.length} Members</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </button>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Leads Section matching Screenshot 1 */}
        <div
          className={`p-5 sm:p-6 ${
            hasMembers ? "lg:col-span-5 lg:border-r-[3px] border-ink-black" : "lg:col-span-12"
          }`}
        >
          <span className="font-label-sm text-[11px] uppercase text-on-surface-variant font-bold tracking-widest block mb-3">
            LEADS
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
                  className="w-full aspect-[4/5] rounded-xl border-2 border-ink-black shadow-[3px_3px_0px_#121212]"
                />
                {lead.linkedin ? (
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display-xl text-[16px] sm:text-[18px] leading-tight uppercase text-ink-black font-extrabold mt-3 block hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-ink-black focus-visible:outline-offset-2 focus-visible:underline rounded-xs"
                  >
                    {lead.name}
                  </a>
                ) : (
                  <h4 className="font-display-xl text-[16px] sm:text-[18px] leading-tight uppercase text-ink-black font-extrabold mt-3">
                    {lead.name}
                  </h4>
                )}
                <span className="inline-block mt-1.5 px-2.5 py-0.5 bg-[#FACC15] font-mono text-[10px] sm:text-[11px] font-extrabold uppercase rounded border border-ink-black shadow-[1px_1px_0px_#121212]">
                  {team.domain} Lead
                </span>
                <ProfileLinks member={lead} className="mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Members Section matching Screenshot 2 */}
        {hasMembers && (
          <div className="p-5 sm:p-6 lg:col-span-7 bg-surface-container-lowest border-t-[3px] lg:border-t-0 border-ink-black flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-[11px] uppercase text-on-surface-variant font-bold tracking-widest block">
                  MEMBERS
                </span>
                {orderedMembers.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="font-mono text-[11px] font-bold text-ink-black hover:text-primary hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View all ({orderedMembers.length})</span>
                    <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                  </button>
                )}
              </div>

              {/* Row 1: Exactly 3 member photo cards (smaller than lead photo) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-[480px]">
                {row1Members.map((name) => {
                  const photo = getMemberPhoto(name);
                  const profileUrl = getMemberUrl(team, name);

                  return (
                    <div key={name} className="flex flex-col">
                      <div
                        onClick={() => setModalOpen(true)}
                        className="relative aspect-[4/5] w-full rounded-xl border-2 border-ink-black overflow-hidden bg-surface-container shadow-[2px_2px_0px_#121212] cursor-pointer hover:-translate-y-0.5 transition-transform"
                        title="Click to view all members"
                      >
                        <MemberPhoto
                          src={photo}
                          alt={name}
                          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 150px"
                        />
                      </div>
                      {profileUrl ? (
                        <a
                          href={profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-headline-sm text-[12px] sm:text-[13px] font-bold text-ink-black leading-tight mt-2 text-center line-clamp-2 hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:underline"
                          title={name}
                        >
                          {name}
                        </a>
                      ) : (
                        <span
                          className="font-headline-sm text-[12px] sm:text-[13px] font-bold text-ink-black leading-tight mt-2 text-center line-clamp-2"
                          title={name}
                        >
                          {name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Name pills and "+ X More" button matching Screenshot 2 */}
            {orderedMembers.length > 3 && (
              <div className="mt-5 pt-4 border-t border-ink-black/10 flex flex-wrap items-center gap-2.5">
                {row2PillMembers.map((name) => {
                  const profileUrl = getMemberUrl(team, name);

                  return (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-2.5 py-1.5 bg-canvas-cream border-2 border-ink-black/80 rounded-lg shadow-[1px_1px_0px_#121212]"
                    >
                      <span className="w-6 h-6 flex-shrink-0 rounded-full bg-ink-black text-surface-white font-mono text-[10px] font-bold flex items-center justify-center">
                        {initialsOf(name)}
                      </span>
                      {profileUrl ? (
                        <a
                          href={profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body-sm text-[12px] sm:text-[13px] font-semibold text-ink-black leading-tight hover:underline hover:text-primary transition-colors focus:outline-none focus-visible:underline"
                        >
                          {name}
                        </a>
                      ) : (
                        <span className="font-body-sm text-[12px] sm:text-[13px] font-semibold text-ink-black leading-tight">
                          {name}
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* + X More button (or View all button for 4-5 member teams) */}
                {remainingCount > 0 ? (
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="px-3.5 py-1.5 bg-surface-white hover:bg-secondary-container text-ink-black font-mono text-[12px] font-extrabold uppercase tracking-wider rounded-lg border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>+ {remainingCount} more</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="px-3.5 py-1.5 bg-surface-white hover:bg-secondary-container text-ink-black font-mono text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider rounded-lg border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>View all ({orderedMembers.length})</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Expanded Member Modal */}
      <MemberModal
        team={team}
        members={orderedMembers}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
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
