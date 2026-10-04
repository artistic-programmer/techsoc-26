"use client";

import React, { useState } from "react";
import Image from "next/image";
import { d3FlagshipEvent, d3Arenas } from "@/data/events";
import { EventItem } from "@/types";

type ArenaFilter = "all" | "coding" | "robotics" | "hardware" | "sessions";

export const D3FeaturedSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ArenaFilter>("all");

  const filterTabs: { id: ArenaFilter; label: string; count: number }[] = [
    { id: "all", label: "All Arenas", count: 17 },
    { id: "coding", label: "Hackathons & Coding", count: 3 },
    { id: "robotics", label: "Robotics & Drones", count: 5 },
    { id: "hardware", label: "Hardware & Design", count: 4 },
    { id: "sessions", label: "Workshops & Ceremonies", count: 5 },
  ];

  const getFilteredArenas = (): EventItem[] => {
    switch (activeFilter) {
      case "coding":
        return d3Arenas.filter(
          (a) =>
            a.id === "craft-n-code-26" ||
            a.id === "code-kombat" ||
            a.id === "ctf-arena"
        );
      case "robotics":
        return d3Arenas.filter(
          (a) =>
            a.id === "bot-bowl" ||
            a.id === "flytron" ||
            a.id === "robo-rash" ||
            a.id === "ground-zero" ||
            a.id === "mechlab-io"
        );
      case "hardware":
        return d3Arenas.filter(
          (a) =>
            a.id === "techxpo" ||
            a.id === "buildathon" ||
            a.id === "experience-center" ||
            a.id === "ui-ux-showdown"
        );
      case "sessions":
        return d3Arenas.filter(
          (a) =>
            a.id === "workshop-exe" ||
            a.id === "dev-dialogue" ||
            a.id === "welcoming-ceremony" ||
            a.id === "bits-of-past" ||
            a.id === "closing-ceremony"
        );
      default:
        return d3Arenas;
    }
  };

  const visibleArenas = getFilteredArenas();

  return (
    <div id="d3-technotfest" className="w-full flex flex-col gap-10">
      {/* ─────────────────────────────────────────────────────────────
          1. FLAGSHIP BANNER: D³ TECHNOTFEST 2026
          Neo-Brutalist Hero Card with Hard Borders & Offset Shadows
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-surface-white rounded-2xl shadow-[8px_8px_0px_#121212] border-[3px] border-ink-black p-6 sm:p-8 lg:p-12 relative overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary-container rounded-full opacity-30 pointer-events-none -z-0" />

        {/* Top Badges & Status Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-ink-black/10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1 bg-accent-coral text-surface-white font-label-md text-label-sm sm:text-label-md uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-surface-white animate-pulse" />
              FEATURED EVENT
            </span>
            <span className="px-3.5 py-1 bg-secondary-container text-ink-black font-label-md text-label-sm sm:text-label-md uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-extrabold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">groups</span>
              TECHSOC × ARS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-coral animate-ping" />
            <span className="font-mono text-label-sm font-bold uppercase text-ink-black">
              STATUS: SCHEDULE TBA
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
          {/* Left Column: Event Core Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="font-label-md text-label-sm sm:text-label-md uppercase tracking-widest text-primary font-extrabold block mb-2">
                ANNUAL FLAGSHIP TECHNOTFEST // {d3FlagshipEvent.theme}
              </span>
              <h2 className="font-display-xl text-[38px] sm:text-[54px] lg:text-[64px] tracking-tight uppercase leading-[0.95] text-ink-black font-black">
                {d3FlagshipEvent.title}
              </h2>
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant mt-4 max-w-xl leading-relaxed font-medium">
                {d3FlagshipEvent.description}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  VENUE
                </span>
                <span className="font-headline-sm text-[14px] sm:text-[15px] leading-snug text-ink-black font-extrabold block mt-0.5">
                  IIIT Bhubaneswar
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight font-medium">
                  Gothapatna, Malipada
                </span>
              </div>

              <div className="p-3.5 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  DATES / TIME
                </span>
                <span className="font-headline-sm text-headline-sm text-accent-coral font-black block mt-0.5">
                  TBA
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight font-medium">
                  Four-Day Festival
                </span>
              </div>

              <div className="p-3.5 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  COMPETITIONS
                </span>
                <span className="font-headline-sm text-headline-sm text-ink-black font-black block mt-0.5">
                  17 ARENAS
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight font-medium">
                  TechSoc &amp; ARS Tracks
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={d3FlagshipEvent.externalLink || "https://d3fest.techsoc-iiitbbsr.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-extrabold border-2 border-ink-black"
              >
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                [ EXPLORE D³ FESTIVAL → ]
              </a>
              <a
                href="https://d3fest.techsoc-iiitbbsr.com/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface-white text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-extrabold border-2 border-ink-black"
              >
                <span className="material-symbols-outlined text-[20px]">event</span>
                OFFICIAL EVENTS PAGE
              </a>
              <a
                href="https://d3fest.techsoc-iiitbbsr.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-canvas-cream text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[3px_3px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
              >
                ABOUT D³ FEST
              </a>
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-[6px_6px_0px_#121212] border-2 border-ink-black aspect-[4/3] bg-surface-container">
              <Image
                src="/images/events/enigma-live.jpg"
                alt="D³ Technotfest at IIIT Bhubaneswar"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-3 right-3 bg-ink-black text-secondary-container px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider rounded shadow-[2px_2px_0px_#121212] font-bold">
                CAMPUS ARENA
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-surface-white/95 backdrop-blur-sm p-3 rounded-lg shadow-[3px_3px_0px_#121212] border border-ink-black flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block font-bold">
                    OFFICIAL PORTAL
                  </span>
                  <span className="font-headline-sm text-headline-sm text-ink-black font-bold">
                    d3fest.techsoc-iiitbbsr.com
                  </span>
                </div>
                <span className="material-symbols-outlined text-[24px] text-accent-coral">
                  military_tech
                </span>
              </div>
            </div>

            {/* Organizer Note */}
            <div className="p-4 bg-canvas-cream rounded-xl shadow-[4px_4px_0px_#121212] border-2 border-ink-black flex items-center justify-between">
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  ORGANIZED JOINTLY BY
                </span>
                <span className="font-label-lg text-label-md uppercase text-ink-black font-extrabold">
                  TechSoc × Automation &amp; Robotics Society (ARS)
                </span>
              </div>
              <span className="material-symbols-outlined text-[24px] text-ink-black">
                handshake
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. D³ ARENAS DIRECTORY (17 OFFICIAL TRACKS)
          One Reusable Event Blueprint → Many Event Instances
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex flex-col gap-6">
        {/* Arenas Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-3 h-3 rounded-full bg-accent-coral" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-extrabold">
                17 OFFICIAL ARENAS &amp; TRACKS
              </span>
            </div>
            <h3 className="font-display-xl text-[28px] sm:text-[36px] lg:text-[44px] uppercase text-ink-black font-black leading-tight">
              D³ FESTIVAL ARENAS
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Explore all 17 competitive arenas, hackathons, robotics challenges, and technical
              symposiums hosted during D³ Technotfest 2026.
            </p>
          </div>

          <div className="font-mono text-label-sm font-bold uppercase text-on-surface-variant">
            SCHEDULE: ALL DATES TBA
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-label-sm uppercase tracking-wider border-2 border-ink-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-ink-black text-surface-white font-extrabold shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                    : "bg-surface-white text-ink-black font-bold shadow-[2px_2px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </div>

        {/* Arenas Grid — Blueprint Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArenas.map((arena, index) => {
            const categoryBadgeColor =
              arena.category === "hackathon"
                ? "bg-secondary-container text-ink-black"
                : arena.category === "robotics"
                ? "bg-accent-mint text-ink-black"
                : arena.category === "competition"
                ? "bg-accent-coral text-surface-white"
                : arena.category === "hardware" || arena.category === "interactive"
                ? "bg-tertiary-fixed text-ink-black"
                : "bg-surface-container text-ink-black";

            return (
              <div
                key={arena.id}
                className="bg-surface-white p-5 sm:p-6 rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#121212] transition-all"
              >
                <div className="flex flex-col gap-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-0.5 font-label-sm text-[11px] uppercase tracking-wider rounded font-extrabold border border-ink-black ${categoryBadgeColor}`}
                    >
                      {arena.category}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase text-on-surface-variant">
                      DATE: {arena.date}
                    </span>
                  </div>

                  {/* Arena Title & Number */}
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-headline-sm text-headline-sm uppercase text-ink-black font-black tracking-tight">
                        {arena.title}
                      </h4>
                      <span className="font-mono text-[12px] font-bold text-on-surface-variant">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-label-sm text-label-sm uppercase font-bold text-primary mt-1">
                      {arena.shortDescription}
                    </p>
                  </div>

                  {/* Description */}
                  {arena.description && (
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {arena.description}
                    </p>
                  )}

                  {/* Tags */}
                  {arena.tags && arena.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {arena.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-canvas-cream text-[10px] uppercase font-bold text-ink-black rounded border border-ink-black/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Strip */}
                <div className="pt-4 mt-4 border-t border-ink-black/15 flex items-center justify-between gap-2">
                  <span className="font-label-sm text-[11px] uppercase font-bold text-on-surface-variant truncate">
                    {arena.organizer}
                  </span>
                  <a
                    href={arena.externalLink || "https://d3fest.techsoc-iiitbbsr.com/events"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-md text-label-sm uppercase text-primary font-bold hover:underline flex items-center gap-0.5 flex-shrink-0"
                  >
                    [ DETAILS ]
                    <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification / TBA Notice Pill */}
        <div className="p-4 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-ink-black">info</span>
            <span>
              Official arena timelines, registration forms, and problem statements are marked{" "}
              <strong className="text-ink-black font-bold">TBA</strong> by festival organizers.
            </span>
          </div>
          <a
            href="https://d3fest.techsoc-iiitbbsr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-sm uppercase text-primary font-bold hover:underline flex items-center gap-0.5 self-start sm:self-auto"
          >
            [ VISIT OFFICIAL PORTAL ]
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
