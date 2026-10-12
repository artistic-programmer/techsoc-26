"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  d3FlagshipEvent,
  d3Arenas,
  d32025Highlights,
  d3OfficialContact,
} from "@/data/events";
import { EventItem } from "@/types";

type ArenaFilter =
  | "all"
  | "competitions"
  | "robotics"
  | "hardware"
  | "workshops"
  | "ceremonies";

export const D3FeaturedSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ArenaFilter>("all");

  const filterTabs: { id: ArenaFilter; label: string; count: number }[] = [
    { id: "all", label: "All Events", count: d3Arenas.length },
    {
      id: "competitions",
      label: "Competitions & Hackathons",
      count: d3Arenas.filter((a) => a.filterGroup === "competitions").length,
    },
    {
      id: "robotics",
      label: "Robotics & Drones",
      count: d3Arenas.filter((a) => a.filterGroup === "robotics").length,
    },
    {
      id: "hardware",
      label: "Hardware & Innovation",
      count: d3Arenas.filter((a) => a.filterGroup === "hardware").length,
    },
    {
      id: "workshops",
      label: "Workshops & Talks",
      count: d3Arenas.filter((a) => a.filterGroup === "workshops").length,
    },
    {
      id: "ceremonies",
      label: "Ceremonies & Activities",
      count: d3Arenas.filter((a) => a.filterGroup === "ceremonies").length,
    },
  ];

  const getFilteredArenas = (): EventItem[] => {
    if (activeFilter === "all") return d3Arenas;
    return d3Arenas.filter((a) => a.filterGroup === activeFilter);
  };

  const visibleArenas = getFilteredArenas();

  return (
    <div id="d3-techno-fest" className="w-full flex flex-col gap-12">
      {/* ─────────────────────────────────────────────────────────────
          1. FLAGSHIP BANNER: D³ TECHNO FEST 2026
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
              TECHSOC × TARS
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
                ANNUAL FLAGSHIP FEST // {d3FlagshipEvent.theme?.toUpperCase()}
              </span>
              <div className="flex items-center gap-3.5 sm:gap-4 mb-2">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-ink-black border-2 border-ink-black rounded-lg overflow-hidden shadow-[3px_3px_0px_#121212]">
                  <Image
                    src="/images/events/d3-fest-logo.png"
                    alt="Official D³ Techno Fest 2026 Logo"
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <h2 className="font-display-xl text-[32px] sm:text-[48px] lg:text-[56px] tracking-tight uppercase leading-[0.95] text-ink-black font-black">
                  {d3FlagshipEvent.title}
                </h2>
              </div>
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
                  Gothapatna, Malipada – 751003
                </span>
              </div>

              <div className="p-3.5 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  DURATION / DATES
                </span>
                <span className="font-headline-sm text-headline-sm text-accent-coral font-black block mt-0.5">
                  TBA
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight font-medium">
                  Four-Day Technology Festival
                </span>
              </div>

              <div className="p-3.5 bg-canvas-cream rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block font-bold">
                  OFFICIAL EVENTS
                </span>
                <span className="font-headline-sm text-headline-sm text-ink-black font-black block mt-0.5">
                  17 ACTIVITIES
                </span>
                <span className="text-[11px] text-on-surface-variant block leading-tight font-medium">
                  TechSoc × TARS Arenas
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={d3OfficialContact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-extrabold border-2 border-ink-black"
              >
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                [ EXPLORE D³ FESTIVAL → ]
              </a>
              <a
                href={d3OfficialContact.eventsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface-white text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-extrabold border-2 border-ink-black"
              >
                <span className="material-symbols-outlined text-[20px]">event</span>
                OFFICIAL EVENTS DIRECTORY
              </a>
              <a
                href={d3OfficialContact.aboutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-canvas-cream text-ink-black font-label-lg text-label-sm sm:text-label-md uppercase tracking-wider rounded-lg shadow-[3px_3px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
              >
                ABOUT D³ FEST
              </a>
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Official Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-[6px_6px_0px_#121212] border-2 border-ink-black aspect-[4/3] bg-ink-black flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/events/d3-fest-logo.png"
                  alt="Official D³ Fest IIIT Bhubaneswar Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute top-3 right-3 bg-secondary-container text-ink-black px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider rounded shadow-[2px_2px_0px_#121212] border border-ink-black font-extrabold">
                OFFICIAL D³ LOGO
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
                  TechSoc × The Automation and Robotics Society (TARS)
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
          2. HISTORICAL BENCHMARK: D³ FEST 2025 HIGHLIGHTS
          Official reported figures from previous edition (historical)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-canvas-cream rounded-2xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b-2 border-ink-black/15">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="px-3 py-1 bg-surface-white text-ink-black font-label-md text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-extrabold">
              {d32025Highlights.title}
            </span>
            <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black text-[11px] font-bold uppercase rounded border border-ink-black hidden md:inline-block">
              {d32025Highlights.badge}
            </span>
          </div>
          <span className="font-mono text-label-sm text-on-surface-variant font-bold uppercase">
            HISTORICAL REPORTED FIGURES
          </span>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-3xl leading-relaxed">
          {d32025Highlights.note}
        </p>

        {/* 6 Metric Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-6">
          {d32025Highlights.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 bg-surface-white rounded-xl shadow-[3px_3px_0px_#121212] border-2 border-ink-black flex flex-col justify-between"
            >
              <div>
                <span className="font-display-xl text-[24px] sm:text-[28px] text-ink-black font-black leading-none block">
                  {stat.value}
                </span>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-extrabold block mt-1.5 leading-snug">
                  {stat.label}
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-tight font-medium mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. D³ OFFICIAL 17-EVENT DIRECTORY
          All 17 tracks rendered exactly once with balanced category filters
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex flex-col gap-6">
        {/* Arenas Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-3 h-3 rounded-full bg-accent-coral" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-extrabold">
                17 OFFICIAL EVENTS &amp; ACTIVITIES
              </span>
            </div>
            <h3 className="font-display-xl text-[28px] sm:text-[36px] lg:text-[44px] uppercase text-ink-black font-black leading-tight">
              D³ FESTIVAL DIRECTORY
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Explore all 17 official events, hackathons, robotics challenges, technical
              workshops, and ceremonies hosted during D³ Techno Fest 2026.
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

        {/* Arenas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArenas.map((arena, index) => {
            const categoryBadgeColor =
              arena.category === "Hackathon"
                ? "bg-secondary-container text-ink-black"
                : arena.category?.toLowerCase().includes("robotics") ||
                  arena.category?.toLowerCase().includes("drone")
                ? "bg-accent-mint text-ink-black"
                : arena.category?.toLowerCase().includes("competition") ||
                  arena.category?.toLowerCase().includes("programming")
                ? "bg-accent-coral text-surface-white"
                : arena.category?.toLowerCase().includes("workshop") ||
                  arena.category?.toLowerCase().includes("talk")
                ? "bg-tertiary-fixed text-ink-black"
                : arena.category?.toLowerCase().includes("exhibition") ||
                  arena.category?.toLowerCase().includes("experience")
                ? "bg-primary-container text-surface-white"
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
                      {arena.shortLabel || arena.shortDescription}
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
                    href={arena.externalLink || d3OfficialContact.eventsUrl}
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

        {/* Official Contact & Venue Strip */}
        <div className="p-5 bg-surface-white rounded-xl shadow-[4px_4px_0px_#121212] border-2 border-ink-black flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-accent-coral">
                pin_drop
              </span>
              <span className="font-headline-sm text-label-md uppercase font-extrabold text-ink-black">
                FESTIVAL VENUE &amp; CONTACT
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {d3OfficialContact.venue} • Contact:{" "}
              <a
                href={`mailto:${d3OfficialContact.email}`}
                className="font-bold text-primary underline"
              >
                {d3OfficialContact.email}
              </a>{" "}
              • Instagram:{" "}
              <span className="font-mono font-bold text-ink-black">
                {d3OfficialContact.instagramHandle}
              </span>
            </p>
          </div>
          <a
            href={d3OfficialContact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-secondary-container text-ink-black font-label-md text-label-sm uppercase tracking-wider rounded-lg shadow-[3px_3px_0px_#121212] hover:shadow-[5px_5px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 font-extrabold border-2 border-ink-black flex-shrink-0 transition-all"
          >
            [ VISIT OFFICIAL PORTAL ]
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
