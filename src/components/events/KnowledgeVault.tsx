"use client";

import React, { useState } from "react";

interface PastSession {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  speaker: string;
  watchLink: string;
  resourceLink: string;
  resourceType: "REPO" | "SLIDES" | "NOTEBOOK" | "CODE PEN";
  resourceIcon: string;
}

const PAST_SESSIONS: PastSession[] = [
  {
    id: "session-1",
    category: "SYSTEMS",
    date: "ARCHIVE",
    title: "Rust For Systems: Memory Without Garbage Collection",
    description:
      "Ownership models, borrow checking patterns, and building low-latency TCP proxies from scratch.",
    speaker: "Systems Wing Contributor",
    watchLink: "#",
    resourceLink: "#",
    resourceType: "REPO",
    resourceIcon: "folder_code",
  },
  {
    id: "session-2",
    category: "DEVOPS",
    date: "ARCHIVE",
    title: "Kubernetes From Ground Zero: Cluster Architecture",
    description:
      "Demystifying Pods, Ingress Controllers, StatefulSets, and zero-downtime rolling canary deployments.",
    speaker: "Cloud Architecture Lead",
    watchLink: "#",
    resourceLink: "#",
    resourceType: "SLIDES",
    resourceIcon: "description",
  },
  {
    id: "session-3",
    category: "AI & ML",
    date: "ARCHIVE",
    title: "Demystifying Transformers & Scaled Attention",
    description:
      "Step-by-step mathematical dissection of query, key, value matrix computations and RoPE embeddings in PyTorch.",
    speaker: "Faculty Advisor / Guest Speaker",
    watchLink: "#",
    resourceLink: "#",
    resourceType: "NOTEBOOK",
    resourceIcon: "terminal",
  },
  {
    id: "session-4",
    category: "UI/UX TECH",
    date: "ARCHIVE",
    title: "Figma To Code With Neo-Brutalism & Tailwind",
    description:
      "Structuring component tokens, hard dropshadow physics, micro-interactions, and accessible high-contrast palettes.",
    speaker: "Design Guild Contributor",
    watchLink: "#",
    resourceLink: "#",
    resourceType: "CODE PEN",
    resourceIcon: "folder_code",
  },
];

export const KnowledgeVault: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSessions = PAST_SESSIONS.filter((session) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      session.title.toLowerCase().includes(q) ||
      session.category.toLowerCase().includes(q) ||
      session.speaker.toLowerCase().includes(q) ||
      session.description.toLowerCase().includes(q)
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
              placeholder="SEARCH SESSIONS (RUST, K8S, AI...)"
              className="w-full bg-surface-white text-ink-black px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#121212] font-label-sm text-label-sm uppercase placeholder:text-outline border-2 border-ink-black focus:outline-none focus:shadow-[4px_4px_0px_#1d4ed8]"
            />
            <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">
              search
            </span>
          </div>
        </div>
      </div>

      {/* Sessions Grid */}
      {filteredSessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-surface-white p-5 rounded-xl shadow-[5px_5px_0px_#121212] border-[2.5px] border-ink-black flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-canvas-cream font-label-sm text-label-sm rounded uppercase font-bold text-ink-black border border-ink-black/40">
                    {session.category}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                    {session.date}
                  </span>
                </div>

                <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase leading-tight font-bold">
                  {session.title}
                </h4>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {session.description}
                </p>

                <div className="pt-2 border-t border-ink-black/10">
                  <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block font-bold">
                    SPEAKER:
                  </span>
                  <span className="font-body-sm text-body-sm text-ink-black font-semibold">
                    {session.speaker}
                  </span>
                </div>
              </div>

              <div className="pt-5 mt-3 flex items-center justify-between border-t border-ink-black/15">
                <a
                  href={session.watchLink}
                  className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  [ WATCH ]
                </a>
                <a
                  href={session.resourceLink}
                  className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {session.resourceIcon}
                  </span>
                  [ {session.resourceType} ]
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-surface-white border-[2.5px] border-ink-black rounded-xl shadow-[4px_4px_0px_#121212]">
          <span className="material-symbols-outlined text-[36px] text-accent-coral mb-2">
            search_off
          </span>
          <p className="font-headline-sm uppercase text-ink-black font-bold">
            No sessions match &quot;{searchQuery}&quot;
          </p>
          <p className="font-body-sm text-on-surface-variant mt-1">
            Try searching for &quot;Rust&quot;, &quot;DevOps&quot;, &quot;AI&quot;, or
            &quot;Tailwind&quot;.
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
