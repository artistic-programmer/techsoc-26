"use client";

import React, { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { pastTechnicalSessions, PastSession } from "@/data/events";

export type { PastSession };
export const PAST_SESSIONS: PastSession[] = pastTechnicalSessions;

export const KnowledgeVault: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSessions = pastTechnicalSessions.filter((session) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      session.title.toLowerCase().includes(q) ||
      session.category.toLowerCase().includes(q) ||
      session.description.toLowerCase().includes(q) ||
      Boolean(session.speaker && session.speaker.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
        <div>
          <span className="px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold border border-ink-black inline-block">
            KNOWLEDGE VAULT
          </span>
          <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase tracking-tight mt-2 font-bold">
            PAST TECHNICAL SESSIONS &amp; WORKSHOPS
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mt-1">
            Missed a live deep dive? Access raw slide decks, GitHub workshop companion repos,
            and recorded live streams free of charge.
          </p>
        </div>

        {/* Search in Archive Input */}
        <div className="w-full md:w-80">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH SESSIONS (GIT, ANDROID, AI, WEB...)"
              className="w-full bg-surface-white text-ink-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#121212] font-label-sm text-label-sm uppercase placeholder:text-outline border-2 border-ink-black focus:outline-none focus:shadow-[4px_4px_0px_#1d4ed8]"
            />
            <Icon name="search" className="absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Sessions Grid */}
      {filteredSessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSessions.map((session) => {
            const hasWatch = Boolean(session.watchLink && session.watchLink.trim() !== "" && session.watchLink !== "#");
            const hasResource = Boolean(session.resourceLink && session.resourceLink.trim() !== "" && session.resourceLink !== "#");
            const hasLinks = hasWatch || hasResource;
            const hasSpeaker = Boolean(session.speaker && session.speaker.trim() !== "");

            return (
              <div
                key={session.id}
                className="bg-surface-white p-5 rounded-xl shadow-[5px_5px_0px_#121212] border-[2.5px] border-ink-black flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-canvas-cream font-label-sm text-label-sm rounded uppercase font-bold text-ink-black border border-ink-black/40">
                      {session.category}
                    </span>
                    {session.date && (
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        {session.date}
                      </span>
                    )}
                  </div>

                  <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase leading-tight font-bold">
                    {session.title}
                  </h4>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {session.description}
                  </p>

                  {hasSpeaker && (
                    <div className="pt-2 border-t border-ink-black/10">
                      <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block font-bold">
                        SPEAKER:
                      </span>
                      <span className="font-body-sm text-body-sm text-ink-black font-semibold">
                        {session.speaker}
                      </span>
                    </div>
                  )}
                </div>

                {hasLinks && (
                  <div className="pt-5 mt-3 flex items-center justify-between border-t border-ink-black/15">
                    {hasWatch && (
                      <a
                        href={session.watchLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <Icon name="play_circle" className="text-[16px]" />
                        [ WATCH ]
                      </a>
                    )}
                    {hasResource && (
                      <a
                        href={session.resourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <Icon name={session.resourceIcon || "link"} className="text-[16px]" />
                        [ {session.resourceType || "RESOURCE"} ]
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 text-center bg-surface-white border-[2.5px] border-ink-black rounded-xl shadow-[4px_4px_0px_#121212]">
          <Icon name="search_off" className="text-[36px] text-accent-coral mb-2" />
          <p className="font-headline-sm uppercase text-ink-black font-bold">
            No sessions match &quot;{searchQuery}&quot;
          </p>
          <p className="font-body-sm text-on-surface-variant mt-1">
            Try searching for &quot;Git&quot;, &quot;Android&quot;, &quot;AI/ML&quot;, or
            &quot;Web&quot;.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="mt-4 px-4 py-2 bg-secondary-container text-ink-black font-label-sm uppercase font-bold border-2 border-ink-black shadow-[2px_2px_0px_#121212] cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};
