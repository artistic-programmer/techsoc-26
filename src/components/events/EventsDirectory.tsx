"use client";

import React, { useState } from "react";
import Image from "next/image";

type EventCategory = "all" | "hackathons" | "workshops" | "technical" | "competitions";

export const EventsDirectory: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");

  const filterTabs = [
    { id: "all" as EventCategory, label: "All Events (12)" },
    { id: "hackathons" as EventCategory, label: "Hackathons" },
    { id: "workshops" as EventCategory, label: "Workshops" },
    { id: "technical" as EventCategory, label: "Technical Sessions" },
    { id: "competitions" as EventCategory, label: "Competitions" },
  ];

  // Logic to determine which cards show based on filter
  const showEnigma =
    activeFilter === "all" ||
    activeFilter === "hackathons" ||
    activeFilter === "competitions";

  const showAgentic =
    activeFilter === "all" ||
    activeFilter === "workshops" ||
    activeFilter === "technical";

  const showCTF =
    activeFilter === "all" ||
    activeFilter === "competitions" ||
    activeFilter === "hackathons";

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10" id="event-filters">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                isActive
                  ? "bg-ink-black text-surface-white font-bold shadow-[4px_4px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                  : "bg-surface-white text-ink-black shadow-[3px_3px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Featured Header Label */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-accent-coral rounded-sm shadow-[2px_2px_0px_#121212]" />
          <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase tracking-tight font-bold">
            FEATURED &amp; UPCOMING
          </h2>
        </div>
        <span className="hidden sm:inline-block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
          SPRING / SUMMER 2026
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {/* CARD 1: FLAGSHIP ENIGMA 2026 */}
        {showEnigma && (
          <div className="bg-surface-white rounded-2xl shadow-[8px_8px_0px_#121212] border-[3px] border-ink-black p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all">
            {/* Top Decals Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-ink-black/10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 bg-accent-coral text-surface-white font-label-md text-label-sm sm:text-label-md uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold">
                  FLAGSHIP NATIONAL HACKATHON
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-ink-black font-label-md text-label-sm sm:text-label-md uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold">
                  <span className="material-symbols-outlined text-[16px]">timer</span>
                  IN-PERSON SPRINT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-coral animate-ping" />
                <span className="font-mono text-label-sm font-bold uppercase text-ink-black">
                  STATUS: SCHEDULE TO BE ANNOUNCED
                </span>
              </div>
            </div>

            {/* Core Info & Graphic Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              {/* Left: Event Specs */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold block mb-1">
                    ANNUAL FLAGSHIP • TECHSOC × IIIT-BBSR
                  </span>
                  <h3 className="font-display-xl text-[36px] sm:text-[48px] lg:text-[56px] tracking-tight uppercase leading-none text-ink-black font-extrabold">
                    ENIGMA HACKATHON
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl leading-relaxed">
                    Eastern India&apos;s collegiate hackathon bringing together builders, hackers,
                    and system designers. Non-stop coding, high-speed mentoring,
                    and game-changing open-source prototypes.
                  </p>
                </div>

                {/* Key Numbers Array */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-canvas-cream rounded-lg shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                      DATE
                    </span>
                    <span className="font-headline-sm text-headline-sm text-ink-black font-bold">
                      DATES TBA
                    </span>
                  </div>

                  <div className="p-3 bg-canvas-cream rounded-lg shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                      TOTAL POOL
                    </span>
                    <span className="font-headline-sm text-headline-sm text-accent-coral font-bold">
                      DETAILS TBA
                    </span>
                  </div>

                  <div className="p-3 bg-canvas-cream rounded-lg shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                      LOCATION
                    </span>
                    <span className="font-headline-sm text-headline-sm text-ink-black font-bold">
                      Campus Auditorium
                    </span>
                  </div>
                </div>

                {/* Tracks Chips */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-2 font-bold">
                    HACKATHON TRACKS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Generative & Agentic AI",
                      "Web3 & Decentralized Networks",
                      "Public HealthTech",
                      "Campus Utilities",
                    ].map((track) => (
                      <span
                        key={track}
                        className="px-2.5 py-1 bg-surface-container font-label-sm text-label-sm rounded uppercase text-ink-black font-medium border border-ink-black"
                      >
                        ▌ {track}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#register"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
                  >
                    <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                    [ REGISTRATION DETAILS TBA ]
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
                  >
                    <span className="material-symbols-outlined text-[20px]">info</span>
                    EVENT OVERVIEW
                  </a>
                </div>
              </div>

              {/* Right: Photo Visual & Partner Badges */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-[6px_6px_0px_#121212] border-2 border-ink-black aspect-[4/3] bg-surface-container">
                  <Image
                    src="/images/events/enigma-live.jpg"
                    alt="Collegiate hackathon session at IIIT Bhubaneswar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-ink-black text-secondary-container px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider rounded shadow-[2px_2px_0px_#121212] font-bold">
                    CAMPUS ARENA
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface-white/95 backdrop-blur p-3 rounded-lg shadow-[3px_3px_0px_#121212] border border-ink-black flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block font-bold">
                        REGISTRATIONS
                      </span>
                      <span className="font-headline-sm text-headline-sm text-ink-black font-bold">
                        SCHEDULE TBA
                      </span>
                    </div>
                    <div className="w-24 bg-surface-container-high h-3 rounded-full overflow-hidden shadow-[1px_1px_0px_#121212] border border-ink-black">
                      <div className="bg-accent-mint h-full w-[60%]" />
                    </div>
                  </div>
                </div>

                {/* Partner Ribbon */}
                <div className="p-3 bg-canvas-cream rounded-lg shadow-[3px_3px_0px_#121212] border-2 border-ink-black flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    PARTNERS &amp; SUPPORTERS
                  </span>
                  <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase text-ink-black font-bold">
                    <span>COMMUNITY &amp; INDUSTRY PARTNERS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2-COLUMN SECONDARY UPCOMING EVENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EVENT 2: AGENTIC WORKFLOWS */}
          {showAgentic && (
            <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-container text-surface-white font-label-md text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold">
                    TECHNICAL MASTERCLASS
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    SCHEDULE TBA
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-md text-headline-md text-ink-black uppercase leading-tight font-bold">
                    AGENTIC WORKFLOWS WITH LANGGRAPH &amp; LLMS
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    Building cyclical multi-agent graph workflows that reason, execute code
                    safely, and retrieve domain embeddings with zero hallucinations.
                  </p>
                </div>

                {/* Speaker Card Sub-component */}
                <div className="p-3 bg-canvas-cream rounded-lg shadow-[3px_3px_0px_#121212] border-2 border-ink-black flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-[2px_2px_0px_#121212] border border-ink-black flex-shrink-0 relative bg-secondary-container flex items-center justify-center font-bold text-ink-black text-[14px]">
                    TS
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-lg text-title-lg text-ink-black truncate font-bold">
                      Alumni Speaker [Session TBA]
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">
                      Technical Speaker Session
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-on-surface-variant font-body-sm text-body-sm font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> TIME TBA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Campus Lab
                    &amp; Discord Stream
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="w-full py-3 bg-accent-mint text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black cursor-pointer"
                >
                  [ DETAILS TO BE ANNOUNCED ]
                </button>
              </div>
            </div>
          )}

          {/* EVENT 3: CAMPUS CTF INVITATIONAL */}
          {showCTF && (
            <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent-mint text-ink-black font-label-md text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold border border-ink-black">
                    CYBERSECURITY CONTEST
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    SCHEDULE TBA
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-md text-headline-md text-ink-black uppercase leading-tight font-bold">
                    CAMPUS CTF INVITATIONAL: PWN THE GRID
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    Jeopardy-style Capture The Flag. Reverse engineering binaries, web
                    vulnerability exploitation, zero-day crypto challenges, and network forensics.
                  </p>
                </div>

                {/* CTF Tracks Breakdown */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 bg-canvas-cream rounded shadow-[2px_2px_0px_#121212] border-2 border-ink-black">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant block font-bold">
                      FORMAT
                    </span>
                    <span className="font-label-lg text-label-lg text-ink-black font-bold">
                      Teams of 2-3
                    </span>
                  </div>
                  <div className="p-2.5 bg-canvas-cream rounded shadow-[2px_2px_0px_#121212] border-2 border-ink-black">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant block font-bold">
                      RECOGNITION
                    </span>
                    <span className="font-label-lg text-label-lg text-ink-black font-bold">
                      Certificates + Swag
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-on-surface-variant font-body-sm text-body-sm font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> TIME TBA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">terminal</span> Campus Network Arena
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="w-full py-3 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black cursor-pointer"
                >
                  [ DETAILS TO BE ANNOUNCED ]
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
