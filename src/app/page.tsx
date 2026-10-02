import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, MarqueeTicker } from "@/components";

export default function HomePage() {
  const marqueeItems = [
    "FLAGSHIP ANNUAL HACKATHONS",
    "CAMPUS STUDENT BUILDERS",
    "RECRUITMENT & INDUCTIONS",
    "IIIT BHUBANESWAR TECHNICAL SOCIETY",
    "BUILD • LEARN • COMPETE • CONNECT",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-cream text-ink-black overflow-x-hidden selection:bg-secondary-container selection:text-ink-black">
      {/* SECTION 1: Top Announcement Ticker */}
      <MarqueeTicker
        items={marqueeItems}
        bg="bg-secondary-container"
        borderClasses="border-b-[3px] border-ink-black"
        speed={28}
      />

      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* SECTION 2: Hero Section */}
        <section className="w-full relative px-4 sm:px-6 lg:px-8 py-10 lg:py-16 overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
              {/* Badges Array */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-coral text-surface-white font-label-sm text-label-sm uppercase rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-bold">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  CAMPUS TECHNICAL COLLECTIVE
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-bold">
                  OFFICIAL TECHNICAL SOCIETY
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-bold">
                  STUDENT COMMUNITY
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-bold">
                  ACTIVE GUILDS
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-display-xl text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.05] tracking-tight uppercase text-ink-black font-extrabold">
                  WHERE STUDENTS <br className="hidden sm:inline" />
                  <span className="inline-block bg-secondary-container px-3 py-0.5 border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] rotate-[-1deg] text-ink-black">
                    BUILD
                  </span>{" "}
                  THE{" "}
                  <span className="inline-block bg-accent-cyan text-ink-black px-3 py-0.5 border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] rotate-[1.5deg]">
                    FUTURE.
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-normal leading-relaxed">
                TechSociety is the premier engineering heartbeat of{" "}
                <strong className="text-ink-black font-bold">IIIT Bhubaneswar</strong>
                . An open collective of software crafters, system architects, AI
                researchers, and designers committed to shipping real code and
                lifting campus tech culture.
              </p>

              {/* CTA Action Cluster */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none rounded transition-all font-bold"
                >
                  [ EXPLORE TECHSOC → ]
                </Link>
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none rounded transition-all font-bold"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  JOIN COMMUNITY
                </Link>
              </div>

              {/* Micro Stats Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg border-t-2 border-ink-black">
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-ink-black leading-none">
                    ACTIVE
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold mt-1">
                    STUDENT GUILDS
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-ink-black leading-none">
                    OPEN
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold mt-1">
                    COLLABORATION
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md font-bold text-ink-black leading-none">
                    PEER
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold mt-1">
                    MENTORSHIP
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Deck with Video (5 Cols on LG) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Floating Stickers */}
              <div className="absolute -top-6 -right-3 z-30 rotate-12 pointer-events-none">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary-container border-[3px] border-ink-black flex items-center justify-center font-headline-sm text-headline-sm font-extrabold text-ink-black shadow-[4px_4px_0px_#121212]">
                  ★
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 z-30 -rotate-6 pointer-events-none">
                <span className="px-3.5 py-1.5 bg-accent-mint text-ink-black font-label-md text-label-md uppercase font-bold rounded-md border-[2.5px] border-ink-black shadow-[3px_3px_0px_#121212]">
                  ⚡ CAMPUS HACKATHONS
                </span>
              </div>

              {/* Main Brutalist Terminal Container Card */}
              <div className="bg-surface-white border-[3px] border-ink-black rounded-lg shadow-[8px_8px_0px_#121212] overflow-hidden relative">
                {/* Terminal Titlebar */}
                <div className="bg-ink-black text-surface-white px-4 py-2.5 flex items-center justify-between border-b-2 border-ink-black">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent-coral border border-ink-black" />
                    <span className="w-3 h-3 rounded-full bg-secondary-container border border-ink-black" />
                    <span className="w-3 h-3 rounded-full bg-accent-mint border border-ink-black" />
                  </div>
                  <span className="font-label-sm text-label-sm tracking-widest uppercase text-surface-variant font-mono">
                    techsoc_core.ts
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary-container font-mono font-bold">
                    PROD
                  </span>
                </div>

                {/* Code editor preview snippet */}
                <div className="p-4 bg-canvas-cream font-mono text-[12px] sm:text-[13px] leading-relaxed text-ink-black border-b-2 border-ink-black">
                  <div className="flex items-center justify-between text-on-surface-variant mb-2 font-label-sm uppercase">
                    <span>{"// CAMPUS INITIALIZER"}</span>
                    <span className="text-accent-mint font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent-mint inline-block" />
                      COMPILED
                    </span>
                  </div>
                  <pre className="overflow-x-auto selection:bg-secondary-container">
                    <code>
                      <span className="text-primary font-bold">const</span> TechSoc = &#123;
                      {"\n"}  college: <span className="text-accent-coral font-semibold">&quot;IIIT-BBSR&quot;</span>,
                      {"\n"}  motto: <span className="text-secondary font-semibold">&quot;Build. Learn. Compete.&quot;</span>,
                      {"\n"}  activeCohort: <span className="text-primary-container font-semibold">2026</span>,
                      {"\n"}  domains: [<span className="text-accent-coral">&quot;Web&quot;</span>, <span className="text-accent-coral">&quot;AI&quot;</span>, <span className="text-accent-coral">&quot;Sys&quot;</span>, <span className="text-accent-coral">&quot;CP&quot;</span>],
                      {"\n"}  isOpenSource: <span className="text-accent-mint font-bold">true</span>,
                      {"\n"}  nextSprint: <span className="text-primary font-semibold">() =&gt; &quot;Ship or Bust!&quot;</span>
                      {"\n"}&#125;;
                    </code>
                  </pre>
                </div>

                {/* Video Media Container (using hero-video.mp4 per Requirement 5) */}
                <div className="p-4 bg-surface-white">
                  <div className="relative border-2 border-ink-black rounded overflow-hidden group bg-black">
                    <video
                      src="/videos/hero-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-52 sm:h-56 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-surface-white/95 border-2 border-ink-black font-label-sm text-label-sm uppercase rounded shadow-[2px_2px_0px_#121212] font-bold">
                      📍 IIIT BHUBANESWAR CAMPUS
                    </div>
                  </div>

                  {/* Mini badges array below video */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="p-2.5 bg-surface-container border-2 border-ink-black rounded flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        terminal
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase text-ink-black font-bold">
                          OPEN SOURCE
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-none">
                          GitHub Org Active
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-secondary-container/30 border-2 border-ink-black rounded flex items-center gap-2">
                      <span className="material-symbols-outlined text-accent-coral text-[20px]">
                        smart_toy
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase text-ink-black font-bold">
                          AI LAB
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-none">
                          Agentic Workflows
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Core Pillars ("WHAT WE DO AT TECHSOC") */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-[1280px] mx-auto">
          {/* Header Block with NeoBrutalist offset badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-coral text-surface-white font-label-sm text-label-sm uppercase font-bold rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] mb-3 rotate-[-1deg]">
                <span>⚡ OUR CORE PILLARS</span>
              </div>
              <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg uppercase text-ink-black font-extrabold tracking-tight">
                WHAT WE DO AT TECHSOC
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
                Everything designed, engineered, and executed to transform undergraduates into world-class engineers.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black bg-surface-white px-3 py-1.5 border-2 border-ink-black shadow-[2px_2px_0px_#121212] rounded">
                4 ACTIVE WINGS
              </span>
            </div>
          </div>

          {/* 4 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: BUILD */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink-black">
                  <span className="w-10 h-10 rounded bg-primary-container text-surface-white flex items-center justify-center border-2 border-ink-black font-bold">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                  </span>
                  <span className="font-headline-md text-headline-md font-extrabold text-ink-black/20 group-hover:text-primary-container transition-colors">
                    01
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-primary-container tracking-wider block mb-1">
                  PRODUCTS &amp; SHIP
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-ink-black mb-2">
                  BUILD
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Transforming ambitious ideas into shipped production apps, university infrastructure, and developer tooling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-black/10 flex flex-wrap gap-1.5">
                {["Next.js", "Docker", "Rust", "Go"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: LEARN */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink-black">
                  <span className="w-10 h-10 rounded bg-secondary-container text-ink-black flex items-center justify-center border-2 border-ink-black font-bold">
                    <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  </span>
                  <span className="font-headline-md text-headline-md font-extrabold text-ink-black/20 group-hover:text-secondary-container transition-colors">
                    02
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wider block mb-1">
                  WORKSHOPS &amp; LABS
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-ink-black mb-2">
                  LEARN
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Peer-led crash courses, reading groups, system design teardowns, and deep dive architecture labs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-black/10 flex flex-wrap gap-1.5">
                {["Distributed Sys", "Web3", "MLOps"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: COMPETE */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink-black">
                  <span className="w-10 h-10 rounded bg-accent-coral text-surface-white flex items-center justify-center border-2 border-ink-black font-bold">
                    <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                  </span>
                  <span className="font-headline-md text-headline-md font-extrabold text-ink-black/20 group-hover:text-accent-coral transition-colors">
                    03
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-accent-coral tracking-wider block mb-1">
                  HACKATHONS &amp; CP
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-ink-black mb-2">
                  COMPETE
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Participating in collegiate hackathons, ICPC regionals, and open engineering contests.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-black/10 flex flex-wrap gap-1.5">
                {["Hackathons", "Algorithms", "Competitive Dev"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 4: CONNECT */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink-black">
                  <span className="w-10 h-10 rounded bg-accent-mint text-ink-black flex items-center justify-center border-2 border-ink-black font-bold">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </span>
                  <span className="font-headline-md text-headline-md font-extrabold text-ink-black/20 group-hover:text-accent-mint transition-colors">
                    04
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-emerald-700 tracking-wider block mb-1">
                  COMMUNITY &amp; GDG
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-ink-black mb-2">
                  CONNECT
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Partnering with GDG on Campus, alumni mentors, and developer communities.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-black/10 flex flex-wrap gap-1.5">
                {["GDG on Campus", "Discord", "Alumni"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Events Spotlight ("EXPERIENCE TECHSOC EVENTS") */}
        <section className="w-full bg-surface-container/60 border-y-[3px] border-ink-black py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] mb-3">
                  <span>CALENDAR 2026 // SLOTS OPEN</span>
                </div>
                <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg uppercase text-ink-black font-extrabold tracking-tight">
                  EXPERIENCE TECHSOC EVENTS
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-1">
                  Where theory turns into shipped products overnight. High-energy hackathons, technical speaker series, and coding jams.
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase font-bold border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all self-start md:self-auto rounded"
              >
                <span>[ VIEW ALL EVENTS → ]</span>
              </Link>
            </div>

            {/* Event Cards: 3 Up Bento Style */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Event 1: ENIGMA (Flagship Highlight) */}
              <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[6px_6px_0px_#121212] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-secondary-container/30 -rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                        FLAGSHIP HACKATHON
                      </span>
                      <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                        UPCOMING
                      </span>
                    </div>
                    <span className="font-mono text-label-sm uppercase text-accent-coral font-bold">
                      DETAILS TBA
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md uppercase text-ink-black font-bold tracking-tight mb-2">
                    ANNUAL FLAGSHIP HACKATHON
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    Collegiate hackathon sprint bringing together student developers across domains to build and ship software prototypes.
                  </p>

                  <div className="space-y-2 border-t-2 border-ink-black pt-4 font-label-sm text-label-sm uppercase text-ink-black">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                      <span className="font-bold">DATE: TO BE ANNOUNCED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                      <span>VENUE: IIIT BHUBANESWAR CAMPUS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">group</span>
                      <span>TEAMS: STUDENT COHORTS</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-black/20">
                  <Link
                    href="/events"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider font-bold border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all rounded"
                  >
                    [ VIEW EVENT DETAILS → ]
                  </Link>
                </div>
              </div>

              {/* Event 2: ZERO TO PROD */}
              <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-accent-cyan text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                      BOOTCAMP SERIES
                    </span>
                    <span className="font-mono text-label-sm text-on-surface-variant font-bold">
                      UPCOMING
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold tracking-tight mb-2">
                    FULLSTACK WEB DEV BOOTCAMP
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    Hands-on training series covering modern web architecture, databases, and application deployment for campus builders.
                  </p>

                  <div className="space-y-2 border-t-2 border-ink-black pt-4 font-label-sm text-label-sm uppercase text-ink-black">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-cyan">event</span>
                      <span className="font-bold">STARTS: TO BE ANNOUNCED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-cyan">sensors</span>
                      <span>MODE: WORKSHOP LABS + DISCORD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-cyan">verified</span>
                      <span>CAPSTONE: STUDENT UTILITY</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-black/20">
                  <Link
                    href="/events"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider font-bold border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all rounded"
                  >
                    [ VIEW DETAILS ]
                  </Link>
                </div>
              </div>

              {/* Event 3: NEURAL FORGE */}
              <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                      TECH TALK &amp; LAB
                    </span>
                    <span className="font-mono text-label-sm text-on-surface-variant font-bold">
                      UPCOMING
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold tracking-tight mb-2">
                    AI &amp; MACHINE LEARNING WORKSHOP
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    Hands-on workshop exploring machine learning models, API integration, and intelligent agent workflows.
                  </p>

                  <div className="space-y-2 border-t-2 border-ink-black pt-4 font-label-sm text-label-sm uppercase text-ink-black">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-mint">event</span>
                      <span className="font-bold">DATE: TO BE ANNOUNCED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-mint">code</span>
                      <span>LAB RIG: BRING LAPTOP WITH DEV TOOLS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-accent-mint">mic</span>
                      <span>SPEAKER: COMMUNITY &amp; GUEST SESSIONS</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-black/20">
                  <Link
                    href="/events"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider font-bold border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all rounded"
                  >
                    [ RSVP NOW — FREE ENTRY ]
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Built by TechSoc ("BUILT BY TECHSOC") */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] mb-3">
                <span>REAL WORK // ZERO THEORETICAL VAPORWARE</span>
              </div>
              <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg uppercase text-ink-black font-extrabold tracking-tight">
                BUILT BY TECHSOC
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
                Open-source products and internal university utilities built, maintained, and deployed by our student community.
              </p>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase font-bold border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all self-start md:self-auto rounded"
            >
              <span>[ EXPLORE ALL PRODUCTS → ]</span>
            </Link>
          </div>

          {/* Product Grid: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Campus Utility */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                    PROJECT IN PROGRESS
                  </span>
                  <span className="font-mono text-label-sm text-ink-black font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-accent-coral">favorite</span>
                    COMMUNITY UTILITY
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold mb-2">
                  Campus Utility Platform
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Student hub project for timetable tracking, campus notifications, and academic resources developed by student maintainers.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 mb-6">
                  {["Next.js", "Tailwind", "PostgreSQL", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/40 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-ink-black">
                <a
                  href="#"
                  className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  Repository
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded flex items-center gap-1"
                >
                  <span>PROJECT INFO</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Project 2: Coding Platform */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                    DEVELOPMENT STAGE
                  </span>
                  <span className="font-mono text-label-sm text-ink-black font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">group</span>
                    INTERNAL TOOL
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold mb-2">
                  Competitive Coding Platform
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Coding practice arena with sandboxed execution for internal hackathons, algorithms practice, and leaderboard sprints.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 mb-6">
                  {["Go", "Docker API", "React", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/40 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-ink-black">
                <a
                  href="#"
                  className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  Repository
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded flex items-center gap-1"
                >
                  <span>PROJECT INFO</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Project 3: Feedback Utility */}
            <div className="bg-surface-white border-[3px] border-ink-black rounded-lg p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-accent-coral text-surface-white font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black rounded shadow-[2px_2px_0px_#121212]">
                    PROTOTYPE
                  </span>
                  <span className="font-mono text-label-sm text-ink-black font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-accent-mint">stars</span>
                    COMMUNITY UTILITY
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold mb-2">
                  Campus Feedback Service
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Feedback portal and notification service built for campus committees and student feedback collection.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 mb-6">
                  {["Flutter", "Firebase", "FastAPI"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/40 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-ink-black">
                <a
                  href="#"
                  className="font-label-sm text-label-sm uppercase font-bold text-ink-black hover:text-primary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  Repository
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded flex items-center gap-1"
                >
                  <span>PROJECT INFO</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Life at TechSoc ("PEOPLE. CODE. CHAOS.") */}
        <section className="w-full bg-canvas-cream border-t-[3px] border-ink-black py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] mb-3 rotate-[1deg]">
                <span>✦ UNFILTERED LIFE AT TECHSOC</span>
              </div>
              <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg uppercase text-ink-black font-extrabold tracking-tight">
                PEOPLE. CODE. CHAOS.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                No hierarchy. No bureaucratic hurdles. Just curious engineers, late night pizzas, hardware debugging, and shipped software.
              </p>
            </div>

            {/* Collage Deck */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Photo: Polaroid Tilt 1 */}
              <div className="md:col-span-4 rotate-[-2deg] hover:rotate-0 transition-transform">
                <div className="bg-surface-white border-[3px] border-ink-black p-3 pb-6 rounded shadow-[6px_6px_0px_#121212]">
                  <div className="h-64 border-2 border-ink-black rounded overflow-hidden mb-3 relative bg-surface-container">
                    <Image
                      src="/images/gallery/hackathon-lab.jpg"
                      alt="Students collaborating during hackathon sprint"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-accent-coral text-surface-white font-label-sm text-label-sm uppercase border border-ink-black rounded font-bold">
                      HACKATHON SPRINT
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm uppercase text-ink-black font-bold">
                    <span>HACKATHON SESSIONS</span>
                    <span>CAMPUS ARCHIVE</span>
                  </div>
                </div>
              </div>

              {/* Center Editorial Bento Box */}
              <div className="md:col-span-4 flex flex-col gap-4">
                {/* Terminal Quote Card */}
                <div className="bg-surface-white border-[3px] border-ink-black rounded p-5 shadow-[5px_5px_0px_#121212] relative">
                  <span className="material-symbols-outlined text-secondary-container text-[36px] absolute -top-4 -right-2 rotate-12">
                    format_quote
                  </span>
                  <p className="font-headline-sm text-[17px] leading-[26px] font-bold text-ink-black mb-3">
                    &quot;We don&apos;t wait for permission or formal curriculum changes. If something on campus is broken, we gather five students, order midnight coffee, and code a fix.&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t-2 border-ink-black">
                    <div className="w-8 h-8 rounded-full bg-accent-mint border-2 border-ink-black flex items-center justify-center font-bold text-ink-black text-[12px]">
                      TS
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black">
                        STUDENT CONTRIBUTOR
                      </span>
                      <span className="font-body-sm text-[12px] text-on-surface-variant leading-none">
                        Campus Community Member
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Stats Pill Card */}
                <div className="bg-secondary-container border-[3px] border-ink-black rounded p-4 shadow-[5px_5px_0px_#121212] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-surface-white border-2 border-ink-black flex items-center justify-center font-extrabold text-ink-black">
                      ⌘
                    </span>
                    <div>
                      <div className="font-headline-sm text-headline-sm font-bold text-ink-black leading-none">
                        OPEN
                      </div>
                      <div className="font-label-sm text-label-sm uppercase text-ink-black font-bold mt-0.5">
                        SOURCE CONTRIBUTIONS
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-ink-black text-[24px]">
                    terminal
                  </span>
                </div>
              </div>

              {/* Right Photo: Polaroid Tilt 2 */}
              <div className="md:col-span-4 rotate-[2.5deg] hover:rotate-0 transition-transform">
                <div className="bg-surface-white border-[3px] border-ink-black p-3 pb-6 rounded shadow-[6px_6px_0px_#121212]">
                  <div className="h-64 border-2 border-ink-black rounded overflow-hidden mb-3 relative bg-surface-container">
                    <Image
                      src="/images/gallery/hardware-lab.jpg"
                      alt="Hardware sprint in embedded systems lab"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase border border-ink-black rounded font-bold">
                      HARDWARE SPRINT
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm uppercase text-ink-black font-bold">
                    <span>EMBEDDED SYSTEMS SESSIONS</span>
                    <span>CAMPUS ARCHIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Recruitment Call to Action */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-[1280px] mx-auto bg-secondary-container border-[3px] border-ink-black rounded-xl p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_#121212] relative overflow-hidden">
            {/* Background sticker watermark */}
            <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-20">
              <span className="font-display-xl text-[160px] font-extrabold text-ink-black leading-none select-none">
                &lt;/&gt;
              </span>
            </div>

            <div className="relative z-10 max-w-2xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border-2 border-ink-black shadow-[2px_2px_0px_#121212] self-start">
                <span className="w-2 h-2 rounded-full bg-accent-mint" />
                CAMPUS RECRUITMENT // ALL BRANCHES WELCOME
              </div>

              <h2 className="font-display-xl text-[34px] sm:text-[46px] lg:text-[54px] uppercase text-ink-black font-extrabold leading-[1.05] tracking-tight">
                READY TO BUILD SOMETHING EXTRAORDINARY?
              </h2>

              <p className="font-body-lg text-body-lg text-ink-black font-medium leading-relaxed max-w-xl">
                Whether you&apos;ve never touched a code editor or you&apos;ve been deploying Linux kernels since high school — if you have a burning desire to create, TechSoc is your playground.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink-black text-surface-white font-label-lg text-label-lg uppercase tracking-wider border-[3px] border-ink-black shadow-[4px_4px_0px_#FAF8F5] hover:bg-primary hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 rounded transition-all font-bold"
                >
                  <span>[ JOIN TECHSOC TODAY ]</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-surface-container hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 rounded transition-all font-bold"
                >
                  <span>EXPLORE PROJECTS</span>
                </Link>
              </div>

              <p className="font-label-sm text-label-sm uppercase font-bold text-ink-black/80 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">info</span>
                Open to all undergraduate &amp; postgraduate students of IIIT Bhubaneswar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 8: Footer */}
      <Footer />
    </div>
  );
}
