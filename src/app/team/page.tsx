import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Navbar,
  Footer,
  MarqueeTicker,
  TeamDomainLeads,
} from "@/components";

export const metadata: Metadata = {
  title: "Team & Leadership | TechSoc IIIT Bhubaneswar",
  description:
    "Meet the executive board, specialized domain leads, student coordinators, and faculty advisors powering the technical society at IIIT Bhubaneswar.",
};

export default function TeamPage() {
  const marqueeItems = [
    "THE CREW & GUILDS",
    "MEET THE PEOPLE BEHIND TECHSOC",
    "BUILD • LEARN • COMPETE",
    "STUDENT TECHNICAL COMMUNITY",
    "CAMPUS BUILDERS",
    "SPECIALIZED WINGS",
    "TECHNICAL GUILDS // IIIT BHUBANESWAR",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-cream text-ink-black overflow-x-hidden selection:bg-secondary-container selection:text-ink-black">
      {/* Top Announcement Marquee Strip */}
      <MarqueeTicker
        items={marqueeItems}
        bg="bg-secondary-container"
        borderClasses="border-b-[3px] border-ink-black"
        speed={28}
      />

      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* SECTION 0: Team Hero */}
        <section className="relative w-full overflow-hidden py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
            {/* Top Decal Sticker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border-2 border-ink-black mb-6 font-bold">
              <span className="w-2 h-2 rounded-full bg-accent-coral" />
              <span>THE CREW &amp; GUILDS</span>
            </div>

            {/* Headline */}
            <h1 className="font-display-xl text-[44px] sm:text-[60px] lg:text-[76px] tracking-tight uppercase leading-[1.05] text-ink-black font-extrabold max-w-4xl">
              MEET THE PEOPLE <br />
              <span className="inline-block bg-secondary-container px-4 py-1 border-[3.5px] border-ink-black shadow-[5px_5px_0px_#121212] rotate-[-1deg] text-ink-black mt-2">
                BEHIND TECHSOC
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6 leading-relaxed font-normal">
              The students, hackers, designers, and organizers powering the technical ecosystem at{" "}
              <strong className="text-ink-black font-bold">IIIT Bhubaneswar</strong>.
              Driven by curiosity, collaboration, and shipping craft.
            </p>

            {/* Badges Array */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212]">
                ⚡ STUDENT LED
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212]">
                ⚒ CRAFTERS &amp; ORGANIZERS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212]">
                ☕ CODE, BUILD &amp; COLLABORATE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212]">
                📍 IIIT BHUBANESWAR CAMPUS
              </span>
            </div>

            {/* Corner Decorative Badge */}
            <div className="mt-8">
              <span className="inline-block px-3 py-1 bg-accent-mint text-ink-black font-mono text-[12px] uppercase font-bold rounded border-2 border-ink-black shadow-[3px_3px_0px_#121212] rotate-[-1deg]">
                &#123; CODE • CRAFT • COMMUNITY &#125;
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 1: Stats Ribbon */}
        <section className="w-full bg-ink-black text-surface-white py-6 px-4 shadow-xl border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-[36px] sm:text-[44px] font-extrabold text-secondary-container leading-none">
                ACTIVE
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-white/80 font-bold mt-1">
                Guild Members
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-[36px] sm:text-[44px] font-extrabold text-accent-mint leading-none">
                CORE
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-white/80 font-bold mt-1">
                Technical Wings
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-[36px] sm:text-[44px] font-extrabold text-accent-coral leading-none">
                CAMPUS
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-white/80 font-bold mt-1">
                Builders &amp; Hackers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-xl text-[36px] sm:text-[44px] font-extrabold text-accent-cyan leading-none">
                ACTIVE
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-white/80 font-bold mt-1">
                Community Channels
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Executive Board 2025-26 */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="px-3 py-1 bg-primary text-surface-white font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold border border-ink-black inline-block mb-2">
                  TIER 0 // STEERING COUNCIL
                </span>
                <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                  EXECUTIVE BOARD
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  The central coordinators overseeing hackathons, industry sponsorships, institute
                  relations, and day-to-day guild operations.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212]">
                  STATUS: • ACTIVE ROLES
                </span>
              </div>
            </div>

            {/* Executive Cards Grid (4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Lead Coordinator */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      PRESIDENT
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-[11px] text-accent-mint font-bold uppercase">
                      <span className="w-2 h-2 rounded-full bg-accent-mint" />
                      ONLINE
                    </span>
                  </div>

                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary-container/20 mb-4 shadow border-2 border-ink-black">
                    <Image
                      src="/images/team/member-2.jpg"
                      alt="Overall Coordinator"
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-ink-black text-surface-white font-label-sm text-[11px] px-2 py-0.5 rounded font-mono">
                      Student Maintainer
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    OVERALL COORDINATOR
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-primary block mt-0.5">
                    CAMPUS LEAD
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Distributed systems, software architecture, and open-source evangelism across
                    campus initiatives and guilds.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Go", "Kubernetes", "Rust", "Systems"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] rounded font-mono border border-ink-black/30 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 flex flex-col gap-2">
                  <p className="font-body-sm text-[12px] italic text-on-surface-variant">
                    &quot;Focus on fundamentals, ship consistently, and empower the community.&quot;
                  </p>
                  <div className="flex items-center justify-between text-on-surface-variant pt-2 border-t border-ink-black/10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        terminal
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        share
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-ink-black font-bold">
                      @COORDINATOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Vice President */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-accent-coral text-surface-white font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      VICE PRESIDENT
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-[11px] text-accent-mint font-bold uppercase">
                      <span className="w-2 h-2 rounded-full bg-accent-mint" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-accent-coral/20 mb-4 shadow border-2 border-ink-black">
                    <Image
                      src="/images/team/member-3.jpg"
                      alt="Vice President"
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-ink-black text-surface-white font-label-sm text-[11px] px-2 py-0.5 rounded font-mono">
                      Student Maintainer
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    VICE PRESIDENT
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-accent-coral block mt-0.5">
                    AI &amp; PRODUCT LEAD
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Machine learning research tracks, community bootcamps, and student project
                    mentorship across domains.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["PyTorch", "Next.js", "AI Pipelines", "Product"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] rounded font-mono border border-ink-black/30 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 flex flex-col gap-2">
                  <p className="font-body-sm text-[12px] italic text-on-surface-variant">
                    &quot;Curiosity-driven engineering and practical campus applications.&quot;
                  </p>
                  <div className="flex items-center justify-between text-on-surface-variant pt-2 border-t border-ink-black/10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        terminal
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        share
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-ink-black font-bold">
                      @PRODUCT_LEAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Technical Secretary */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-primary text-surface-white font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      TECH SECRETARY
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-[11px] text-accent-coral font-bold uppercase">
                      <span className="w-2 h-2 rounded-full bg-accent-coral" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-primary/20 mb-4 shadow border-2 border-ink-black">
                    <Image
                      src="/images/team/member-4.jpg"
                      alt="Technical Secretary"
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-ink-black text-surface-white font-label-sm text-[11px] px-2 py-0.5 rounded font-mono">
                      Student Maintainer
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    TECHNICAL SECRETARY
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-primary block mt-0.5">
                    COUNCIL REPRESENTATIVE
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Competitive programming tracks, annual hackathons, and student technical
                    infrastructure coordination.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["C++", "Linux", "Cloud", "Infra"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] rounded font-mono border border-ink-black/30 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 flex flex-col gap-2">
                  <p className="font-body-sm text-[12px] italic text-on-surface-variant">
                    &quot;Automate repetitive tasks and focus on building solutions.&quot;
                  </p>
                  <div className="flex items-center justify-between text-on-surface-variant pt-2 border-t border-ink-black/10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        terminal
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        share
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-ink-black font-bold">
                      @TECH_SECRETARY
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Operations & Treasurer */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      TREASURER &amp; OPS
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-[11px] text-accent-mint font-bold uppercase">
                      <span className="w-2 h-2 rounded-full bg-accent-mint" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-accent-mint/20 mb-4 shadow border-2 border-ink-black">
                    <Image
                      src="/images/team/member-5.jpg"
                      alt="Treasurer and Operations Lead"
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-ink-black text-surface-white font-label-sm text-[11px] px-2 py-0.5 rounded font-mono">
                      Student Maintainer
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    TREASURER &amp; OPS
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-accent-mint block mt-0.5">
                    FINANCES &amp; LOGISTICS
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Society administration, event operations, budget coordination, and resource
                    allocation for hackathons.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Operations", "Planning", "Logistics", "Events"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] rounded font-mono border border-ink-black/30 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 flex flex-col gap-2">
                  <p className="font-body-sm text-[12px] italic text-on-surface-variant">
                    &quot;Smooth operations and transparent community management.&quot;
                  </p>
                  <div className="flex items-center justify-between text-on-surface-variant pt-2 border-t border-ink-black/10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        terminal
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-ink-black">
                        share
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-ink-black font-bold">
                      @OPS_LEAD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Domain Leads & Technical Architects */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            <TeamDomainLeads />
          </div>
        </section>

        {/* SECTION 4: Student Coordinators & Guild Crew */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-accent-coral tracking-widest block mb-2">
                  THE ENGINES
                </span>
                <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                  STUDENT COORDINATORS &amp; GUILD CREW
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  From logistics to stage management, sponsorships, social hype, and hardware
                  rigs—the sophomore &amp; junior rockstars.
                </p>
              </div>

              <div>
                <span className="px-3.5 py-1.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold rounded-full border border-ink-black shadow-[2px_2px_0px_#121212] inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  30+ ACTIVE VOLUNTEERS
                </span>
              </div>
            </div>

            {/* Coordinators 8-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  name: "PR & Media Lead",
                  role: "MEDIA DESK",
                  roleBg: "bg-primary text-surface-white",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-14.jpg",
                },
                {
                  name: "Logistics Lead",
                  role: "OPERATIONS DESK",
                  roleBg: "bg-accent-mint text-ink-black",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-15.jpg",
                },
                {
                  name: "Editorial Lead",
                  role: "PUBLICATIONS",
                  roleBg: "bg-accent-coral text-surface-white",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-16.jpg",
                },
                {
                  name: "Lab & Hardware Lead",
                  role: "SYSTEMS DESK",
                  roleBg: "bg-ink-black text-surface-white",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-17.jpg",
                },
                {
                  name: "Web Platforms Lead",
                  role: "PORTAL & INFRA",
                  roleBg: "bg-primary text-surface-white",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-18.jpg",
                },
                {
                  name: "Sponsorships Lead",
                  role: "OUTREACH DESK",
                  roleBg: "bg-accent-coral text-surface-white",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-19.jpg",
                },
                {
                  name: "Community Manager",
                  role: "GUILD RELATIONS",
                  roleBg: "bg-accent-mint text-ink-black",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-20.jpg",
                },
                {
                  name: "Security Lead",
                  role: "CTF & AUDITS",
                  roleBg: "bg-secondary-container text-ink-black",
                  yearBranch: "Student Coordinator",
                  img: "/images/team/member-21.jpg",
                },
              ].map((coord) => (
                <div
                  key={coord.name}
                  className="bg-surface-white p-4 rounded-xl shadow-[4px_4px_0px_#121212] border-2 border-ink-black flex items-center gap-3.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121212] transition-all"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-ink-black relative flex-shrink-0 bg-surface-container">
                    <Image
                      src={coord.img}
                      alt={coord.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="font-headline-sm text-[15px] leading-tight uppercase text-ink-black font-bold truncate">
                      {coord.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 ${coord.roleBg} font-label-sm text-[10px] uppercase font-bold rounded border border-ink-black/40 mt-1 self-start`}
                    >
                      {coord.role}
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant font-medium mt-0.5">
                      {coord.yearBranch}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Faculty Advisors & Alumni Mentors */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-high border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-widest block mb-2">
                  GUIDANCE &amp; LEGACY
                </span>
                <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                  FACULTY ADVISORS &amp; ALUMNI MENTORS
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  Guided by faculty mentorship from the institute, alongside TechSoc alumni working
                  across industry and open-source ecosystems.
                </p>
              </div>
            </div>

            {/* 3-Column Advisory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Advisor 1 */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-primary text-surface-white font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      FACULTY ADVISOR
                    </span>
                    <span className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black">
                      CSE DEPT
                    </span>
                  </div>

                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-ink-black shadow mb-4 relative bg-surface-container">
                    <Image
                      src="/images/team/member-22.jpg"
                      alt="Faculty Advisor"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    FACULTY ADVISOR
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-primary block mt-0.5">
                    DEPT OF COMPUTER SCIENCE &amp; ENG.
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Providing academic mentorship, institutional guidance, and advisory support for student technical initiatives.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 bg-surface-container-lowest rounded p-3">
                  <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block font-bold">
                    ADVISORY DOMAIN:
                  </span>
                  <p className="font-body-sm text-body-sm text-ink-black font-semibold mt-0.5">
                    Computing Systems &amp; Student Research
                  </p>
                </div>
              </div>

              {/* Advisor 2 */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      FACULTY CO-ADVISOR
                    </span>
                    <span className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black">
                      STUDENT AFFAIRS
                    </span>
                  </div>

                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-ink-black shadow mb-4 relative bg-surface-container">
                    <Image
                      src="/images/team/member-23.jpg"
                      alt="Faculty Co-Advisor"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    FACULTY CO-ADVISOR
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary block mt-0.5">
                    DEPT OF INFORMATION TECHNOLOGY
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Supporting student technical programs, diversity in tech initiatives, and campus hackathon mentorship.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 bg-surface-container-lowest rounded p-3">
                  <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block font-bold">
                    ADVISORY DOMAIN:
                  </span>
                  <p className="font-body-sm text-body-sm text-ink-black font-semibold mt-0.5">
                    Information Systems &amp; Campus Initiatives
                  </p>
                </div>
              </div>

              {/* Alumni Patron 3 */}
              <div className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black">
                      ALUMNI MENTOR
                    </span>
                    <span className="px-2 py-0.5 bg-canvas-cream font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black">
                      ALUMNI NETWORK
                    </span>
                  </div>

                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-ink-black shadow mb-4 relative bg-surface-container">
                    <Image
                      src="/images/team/member-24.jpg"
                      alt="Alumni Mentor"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    ALUMNI MENTOR
                  </h3>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-accent-mint block mt-0.5">
                    INDUSTRY MENTOR (EX-COORDINATOR)
                  </span>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Conducts technical mentorship, career guidance sessions, and supports student hackathon cohorts.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink-black/15 bg-surface-container-lowest rounded p-3">
                  <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block font-bold">
                    ALUMNI NETWORK:
                  </span>
                  <p className="font-body-sm text-body-sm text-ink-black font-semibold mt-0.5">
                    Active alumni working across technology ecosystems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Induction / Recruitment CTA */}
        <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto bg-secondary-container p-8 lg:p-12 rounded-2xl shadow-[8px_8px_0px_#121212] border-[3.5px] border-ink-black relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-2xl relative z-10">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-bold block">
                ▌ JOIN THE GUILD ▌
              </span>
              <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-extrabold">
                WANT TO LEAD OR JOIN THE CREW?
              </h2>
              <p className="font-body-lg text-body-lg text-ink-black font-medium leading-relaxed">
                TechSoc inductions open every academic semester for 1st, 2nd, and 3rd year
                students. Whether you write kernels, design stickers, run CTFs, or coordinate
                high-voltage campus festivals—we need your energy.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center px-6 py-4 bg-ink-black text-surface-white font-headline-sm text-[16px] uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
                >
                  [ APPLY IN NEXT COHORT → ]
                </Link>
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center px-6 py-4 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[4px_4px_0px_#121212] hover:bg-canvas-cream hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
                >
                  READ INDUCTION FAQ
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-ink-black font-label-sm text-[12px] font-bold">
                <span>✔ NO PRIOR EXPERIENCE REQUIRED</span>
                <span>✔ ALL BRANCHES WELCOME</span>
              </div>
            </div>

            {/* Terminal Schedule Card */}
            <div className="w-full lg:w-96 bg-surface-white p-6 rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between border-b-2 border-ink-black pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-accent-coral border border-ink-black" />
                  <span className="w-3 h-3 rounded-full bg-secondary-container border border-ink-black" />
                  <span className="w-3 h-3 rounded-full bg-accent-mint border border-ink-black" />
                </div>
                <span className="font-mono text-label-sm font-bold text-ink-black">
                  TECHSOC_RECRUITMENT
                </span>
              </div>

              <div className="flex flex-col gap-3 font-mono text-body-sm">
                <div className="flex items-center justify-between p-2 bg-canvas-cream rounded border border-ink-black/20">
                  <span className="font-bold text-ink-black">Autumn Cycle:</span>
                  <span className="px-2 py-0.5 bg-accent-mint text-ink-black font-bold rounded text-[11px]">
                    AUTUMN SEMESTER
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 bg-canvas-cream rounded border border-ink-black/20">
                  <span className="font-bold text-ink-black">Spring Lateral:</span>
                  <span className="px-2 py-0.5 bg-secondary-container text-ink-black font-bold rounded text-[11px]">
                    SPRING SEMESTER
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 bg-canvas-cream rounded border border-ink-black/20">
                  <span className="font-bold text-ink-black">Open Hack Sprint:</span>
                  <span className="px-2 py-0.5 bg-accent-coral text-surface-white font-bold rounded text-[11px]">
                    YEAR ROUND
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-ink-black/20 text-center">
                <span className="font-label-sm text-[11px] text-on-surface-variant font-bold uppercase block">
                  QUESTIONS ABOUT JOINING?
                </span>
                <span className="font-mono text-label-sm text-primary font-bold">
                  Reach out via /connect
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
