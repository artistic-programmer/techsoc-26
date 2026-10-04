import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Navbar,
  Footer,
  MarqueeTicker,
  DomainFilterGrid,
  PersonAvatar,
} from "@/components";
import { gdgLeads } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";

const GDG_CHAPTER_URL =
  "https://gdg.community.dev/gdg-on-campus-international-institute-of-information-technology-bhubaneswar-india/";

export const metadata: Metadata = {
  title: "Community | Tech Society IIIT Bhubaneswar",
  description:
    "A multidisciplinary engine of student developers, system architects, AI researchers, and designers across specialized technical domains at IIIT Bhubaneswar.",
};

export default function CommunityPage() {
  const marqueeItems = [
    "PREMIER TECHNICAL SOCIETY OF IIIT BHUBANESWAR",
    "BUILD • LEARN • COMPETE",
    "ACTIVE CAMPUS BUILDERS",
    "ODISHA, INDIA",
    "OFFICIAL GDG ON CAMPUS CHAPTER",
    "SPECIALIZED TECHNICAL DOMAINS",
    "STUDENT-BUILT PRODUCTION RELEASES",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-cream text-ink-black overflow-x-hidden selection:bg-secondary-container selection:text-ink-black">
      {/* Top Announcement Ticker */}
      <MarqueeTicker
        items={marqueeItems}
        bg="bg-secondary-container"
        borderClasses="border-b-[3px] border-ink-black"
        speed={28}
      />

      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* SECTION 0: Community Hero / Header */}
        <section className="w-full bg-canvas-cream border-b-[3px] border-ink-black relative overflow-hidden py-12 lg:py-16">
          {/* Decorative background neo-brutalist glyph */}
          <div className="absolute -right-10 -top-10 select-none pointer-events-none opacity-10">
            <span className="font-headline-lg text-[180px] sm:text-[220px] text-ink-black leading-none font-bold">
              #DEV
            </span>
          </div>

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top mini ticker sticker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-black text-surface-white font-label-sm text-label-sm uppercase rounded-full border border-ink-black shadow-[2px_2px_0px_#121212] mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
              <span className="font-bold tracking-wider">
                ACTIVE CAMPUS BUILDERS • IIIT BHUBANESWAR
              </span>
            </div>

            {/* Title & CTAs Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <h1 className="font-display-xl text-[40px] sm:text-[54px] lg:text-[66px] leading-[1.05] tracking-tight uppercase text-ink-black font-extrabold">
                  THE COMMUNITY{" "}
                  <span className="inline-block bg-secondary-container px-3 py-0.5 border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] rotate-[-1deg] text-[18px] sm:text-[24px] lg:text-[28px] align-middle font-headline-sm text-ink-black">
                    TECHNICAL GUILDS // IIIT BBSR
                  </span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-normal leading-relaxed">
                  A multidisciplinary engine of programmers, architects, security researchers,
                  and creative thinkers at IIIT Bhubaneswar. We build in public, teach with
                  vigor, and ship production software before graduation.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center lg:items-end pt-2">
                <a
                  href={siteConfig.socials.discord || "https://discord.gg/GgWYNmw4p"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on-primary font-headline-sm text-[16px] uppercase tracking-wider border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">group_add</span>
                  JOIN COMMUNITY CHANNELS
                </a>
                <a
                  href="#domains"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-white text-ink-black font-label-lg text-label-lg uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-surface-container transition-all text-center font-bold"
                >
                  EXPLORE DOMAINS ↓
                </a>
              </div>
            </div>

            {/* Quick Metrics Row (4 Cards) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t-[2.5px] border-ink-black">
              {/* Stat 1 */}
              <div className="p-4 bg-surface-white border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                  DOMAIN WINGS
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-ink-black font-bold">
                    GUILDS
                  </span>
                  <span className="font-label-sm text-label-sm text-accent-coral uppercase font-bold">
                    ACTIVE
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Specialized engineering divisions
                </span>
              </div>

              {/* Stat 2 */}
              <div className="p-4 bg-secondary-container border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-ink-black uppercase tracking-wider font-bold">
                  PROJECTS DEPLOYED
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-ink-black font-bold">
                    CAMPUS
                  </span>
                  <span className="font-label-sm text-label-sm text-ink-black uppercase font-bold">
                    SHIPPED
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-ink-black font-medium mt-1">
                  Software utilities &amp; open source repos
                </span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 bg-surface-white border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                  HACKATHON WINS
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-ink-black font-bold">
                    CAMPUS
                  </span>
                  <span className="font-label-sm text-label-sm text-accent-mint uppercase font-bold">
                    PODIUMS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Competitive hackathons &amp; project sprints
                </span>
              </div>

              {/* Stat 4 */}
              <div className="p-4 bg-surface-white border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                  GOVERNANCE
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-ink-black font-bold">
                    STUDENT
                  </span>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    OPERATED
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Collegiate technical society
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: GDG on Campus Feature */}
        <section className="w-full bg-surface-white border-b-[3px] border-ink-black py-12 lg:py-16 relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Multi-color NeoBrutalist Frame for GDG */}
            <div className="relative bg-canvas-cream border-[3px] border-ink-black shadow-[8px_8px_0px_#121212] p-6 lg:p-10 overflow-hidden">
              {/* Colored corner bars reminiscent of Google identity in brutalist format */}
              <div className="absolute top-0 left-0 right-0 h-3 flex">
                <div className="w-1/4 bg-[#EA4335]" />
                <div className="w-1/4 bg-[#4285F4]" />
                <div className="w-1/4 bg-[#FBBC05]" />
                <div className="w-1/4 bg-[#34A853]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 bg-surface-white border-2 border-ink-black font-label-sm text-label-sm uppercase tracking-wider shadow-[2px_2px_0px_#121212] font-bold">
                      OFFICIAL PARTNER WING
                    </span>
                    <span className="px-2.5 py-1 bg-accent-mint border-2 border-ink-black font-label-sm text-label-sm uppercase tracking-wider shadow-[2px_2px_0px_#121212] font-bold">
                      CAMPUS CHAPTER
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase leading-tight font-bold">
                    GOOGLE DEVELOPER GROUPS • ON CAMPUS
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    In strategic alliance with GDG on Campus IIIT Bhubaneswar, TechSoc facilitates
                    industry-grade training tracks, Google Cloud Study Jams, Flutter Sprints, and
                    direct entries to the global <strong className="text-ink-black">Google Solution Challenge</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 p-3 bg-surface-white border-2 border-ink-black">
                      <span className="material-symbols-outlined text-[24px] text-primary">
                        cloud_done
                      </span>
                      <div>
                        <h4 className="font-title-lg text-[15px] font-bold text-ink-black">
                          Cloud Skill Boosts
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Sponsored GCP credits &amp; official completion badges.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-surface-white border-2 border-ink-black">
                      <span className="material-symbols-outlined text-[24px] text-accent-coral">
                        terminal
                      </span>
                      <div>
                        <h4 className="font-title-lg text-[15px] font-bold text-ink-black">
                          Solution Challenge
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Prototyping UN Sustainable Development Goal solvers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={GDG_CHAPTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary-container text-ink-black font-label-md text-label-md uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-bold"
                    >
                      <span>[ VISIT GDG CHAPTER PORTAL ]</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
                      • HYBRID WORKSHOPS &amp; MEETS
                    </span>
                  </div>
                </div>

                {/* Interactive Terminal / Activity preview card */}
                <div className="lg:col-span-5">
                  <div className="bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] p-5">
                    <div className="flex items-center justify-between border-b-2 border-ink-black pb-3 mb-4">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-accent-mint">
                          code
                        </span>
                        gdg-event-log.sh
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-accent-coral border border-ink-black" />
                        <span className="w-3 h-3 rounded-full bg-secondary-container border border-ink-black" />
                        <span className="w-3 h-3 rounded-full bg-accent-mint border border-ink-black" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 font-mono text-body-sm">
                      <div className="p-2.5 bg-surface-container border border-ink-black">
                        <div className="text-accent-mint font-bold text-[12px] uppercase">
                          STATUS: UPCOMING WORKSHOP
                        </div>
                        <div className="text-ink-black font-bold">
                          Technical Workshop Track
                        </div>
                        <div className="text-on-surface-variant text-[12px]">
                          Campus Venue • Schedule To Be Announced
                        </div>
                      </div>

                      <div className="p-2.5 bg-surface-container border border-ink-black">
                        <div className="text-primary font-bold text-[12px] uppercase">
                          STATUS: COMPLETED SESSIONS
                        </div>
                        <div className="text-ink-black font-bold">
                          Developer Bootcamp Series
                        </div>
                        <div className="text-on-surface-variant text-[12px]">
                          Interactive Sessions &amp; Hands-on Labs
                        </div>
                      </div>

                      <div className="p-2.5 bg-secondary-fixed border border-ink-black">
                        <div className="text-ink-black font-bold text-[12px] uppercase">
                          MENTOR OFFICE HOURS
                        </div>
                        <div className="text-ink-black font-bold">
                          Peer Mentorship &amp; Working Sessions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GDG Leads */}
              <div className="mt-10 pt-8 border-t-[3px] border-ink-black">
                <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-widest block mb-1">
                  CHAPTER LEADERSHIP
                </span>
                <h3 className="font-headline-lg text-headline-sm sm:text-headline-md text-ink-black uppercase font-bold mb-6">
                  GDG ON CAMPUS LEADS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {gdgLeads.map((lead) => (
                    <div
                      key={lead.name}
                      className="flex items-center gap-4 p-4 bg-surface-white border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212]"
                    >
                      <PersonAvatar
                        member={lead}
                        sizes="96px"
                        className="w-24 h-24 rounded-lg flex-shrink-0 shadow-[2px_2px_0px_#121212]"
                      />
                      <div className="min-w-0">
                        <h4 className="font-headline-sm text-[17px] leading-tight uppercase text-ink-black font-bold">
                          {lead.name}
                        </h4>
                        <span className="inline-block mt-1.5 px-2 py-0.5 bg-secondary-container font-label-sm text-[10px] uppercase font-bold rounded border border-ink-black">
                          {lead.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Technical Domains & Filter */}
        <section
          className="w-full bg-canvas-cream border-b-[3px] border-ink-black py-16 lg:py-20"
          id="domains"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <DomainFilterGrid />
          </div>
        </section>

        {/* SECTION 3: Community Programs & Guilds */}
        <section className="w-full bg-surface-container-high border-b-[3px] border-ink-black py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="p-2 bg-secondary-container border-2 border-ink-black shadow-[2px_2px_0px_#121212]">
                <span className="material-symbols-outlined text-[24px] text-ink-black">bolt</span>
              </span>
              <div>
                <h2 className="font-headline-md text-headline-sm sm:text-headline-md text-ink-black uppercase font-bold">
                  COMMUNITY PROGRAMS &amp; RITUALS
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Continuous community rituals designed for learning, building, and showing up together.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Program 1: Hackathons */}
              <div className="bg-surface-white border-[2.5px] border-ink-black p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase font-bold text-accent-coral mb-2">
                    FLAGSHIP SPRINTS
                  </div>
                  <h4 className="font-title-lg text-title-lg text-ink-black font-bold mb-2">
                    Hackathons
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Collegiate hackathons and sprint competitions where students collaborate across domains to build and ship production software prototypes under tight deadlines.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-ink-black/20 font-label-sm text-label-sm text-ink-black font-bold uppercase">
                  • ANNUAL SPRINTS • IIIT BHUBANESWAR
                </div>
              </div>

              {/* Program 2: Days of Productivity (DOP) */}
              <div className="bg-surface-white border-[2.5px] border-ink-black p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase font-bold text-primary mb-2">
                    SUMMER CONSISTENCY CHALLENGE
                  </div>
                  <h4 className="font-title-lg text-title-lg text-ink-black font-bold mb-2">
                    Days of Productivity (DOP)
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Days of Productivity (DOP): A 25-day summer consistency challenge where TechSoc members commit to learning, building, and showing up every day alongside the community.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-ink-black/20 font-label-sm text-label-sm text-ink-black font-bold uppercase">
                  • 25-DAY CHALLENGE • COMMUNITY ACCOUNTABILITY
                </div>
              </div>

              {/* Program 3: Domain Sessions */}
              <div className="bg-surface-white border-[2.5px] border-ink-black p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase font-bold text-accent-mint mb-2">
                    WEEKLY LABS &amp; TEARDOWNS
                  </div>
                  <h4 className="font-title-lg text-title-lg text-ink-black font-bold mb-2">
                    Domain Sessions
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Weekly hands-on workshops, system design teardowns, algorithm discussions, and peer code reviews organized by specialized technical domain leads.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-ink-black/20 font-label-sm text-label-sm text-ink-black font-bold uppercase">
                  • PEER WORKSHOPS • ALL GUILDS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Built by the Community / Prod Releases */}
        <section className="w-full bg-canvas-cream border-b-[3px] border-ink-black py-16 lg:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container border-2 border-ink-black mb-2 shadow-[2px_2px_0px_#121212]">
                  <span className="material-symbols-outlined text-[16px] text-ink-black">
                    terminal
                  </span>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black">
                    PROD RELEASES
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase font-bold tracking-tight">
                  BUILT BY THE COMMUNITY
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  We don&apos;t do toy homework assignments. TechSoc members build, test, and ship
                  software that thousands of students and engineers use daily.
                </p>
              </div>

              <a
                href={siteConfig.socials.github || "https://github.com/p-society"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-white border-[2.5px] border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[3px_3px_0px_#121212] hover:bg-secondary-fixed transition-all self-start md:self-auto"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>TECHSOC REPOSITORIES</span>
              </a>
            </div>

            {/* Bento-style products showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* PROJECT 1: FEATURED (7 cols) */}
              <div className="lg:col-span-7 bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] flex flex-col justify-between overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent-mint text-ink-black border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]">
                      FLAGSHIP UTILITY
                    </span>
                    <div className="flex items-center gap-1.5 text-ink-black font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[16px] text-secondary fill-1">
                        star
                      </span>
                      <span>ACTIVE REPOSITORY</span>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-ink-black uppercase font-bold">
                    Campus Utility Platform
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    The modern all-in-one web platform providing campus utilities, schedule updates,
                    resource indexes, and student tooling.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2.5 py-1 bg-canvas-cream border border-ink-black font-label-sm text-label-sm font-bold">
                      Next.js
                    </span>
                    <span className="px-2.5 py-1 bg-canvas-cream border border-ink-black font-label-sm text-label-sm font-bold">
                      PostgreSQL
                    </span>
                    <span className="px-2.5 py-1 bg-canvas-cream border border-ink-black font-label-sm text-label-sm font-bold">
                      TypeScript
                    </span>
                    <span className="px-2.5 py-1 bg-canvas-cream border border-ink-black font-label-sm text-label-sm font-bold">
                      Tailwind
                    </span>
                  </div>
                </div>

                {/* Mockup image slot */}
                <div className="border-t-[3px] border-ink-black bg-surface-container p-4">
                  <div className="border-2 border-ink-black shadow-[3px_3px_0px_#121212] overflow-hidden relative h-56 bg-surface-white">
                    <Image
                      src="/images/projects/campusflow-preview.jpg"
                      alt="Campus utility interface preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Built by <strong className="text-ink-black">Student Contributors</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={siteConfig.socials.github || "https://github.com/p-society"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-ink-black text-surface-white border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold hover:bg-primary active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block"
                      >
                        REPOSITORY
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT 2 & 3: STACKED (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* PROJECT 2 */}
                <div className="bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-secondary-container text-ink-black border border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]">
                        DEV TOOLING
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-ink-black flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary fill-1">
                          star
                        </span>{" "}
                        ACTIVE
                      </span>
                    </div>

                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      Competitive Coding Utility
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      A terminal tool that fetches competitive programming test cases, auto-compiles
                      code snippets, and tests against tricky edge cases in milliseconds.
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        Rust
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        CLI
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        API Client
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-ink-black flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Domain: <strong className="text-ink-black">Algorithms &amp; Systems</strong>
                    </span>
                    <a
                      href={siteConfig.socials.github || "https://github.com/p-society"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 bg-surface-white border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold hover:bg-accent-mint active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block"
                    >
                      VIEW REPO
                    </a>
                  </div>
                </div>

                {/* PROJECT 3 */}
                <div className="bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-tertiary-fixed text-ink-black border border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]">
                        ACADEMIC KNOWLEDGE
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-ink-black flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary fill-1">
                          star
                        </span>{" "}
                        INDEXED
                      </span>
                    </div>

                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      Academic Knowledge Base
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Decentralized markdown repository with crowd-sourced notes, past year papers,
                      lab solutions, and interactive algorithm flashcards.
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        Docs
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        Markdown
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm font-medium">
                        Search
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-ink-black flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Curated by <strong className="text-ink-black">Academic Guild</strong>
                    </span>
                    <a
                      href={siteConfig.socials.github || "https://github.com/p-society"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 bg-surface-white border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold hover:bg-secondary-container active:translate-x-0.5 active:translate-y-0.5 transition-all inline-block"
                    >
                      BROWSE ARCHIVE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: In the Trenches / Lens on Campus */}
        <section className="w-full bg-surface-white border-b-[3px] border-ink-black py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-coral text-on-primary border-2 border-ink-black mb-2 shadow-[2px_2px_0px_#121212] rotate-[-1deg]">
                  <span className="material-symbols-outlined text-[16px]">camera</span>
                  <span className="font-label-sm text-label-sm uppercase font-bold">
                    LENS ON CAMPUS
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase font-bold tracking-tight">
                  IN THE TRENCHES
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                  Hackathons, whiteboarding arguments, pizza boxes at 3:00 AM, and victory
                  celebrations on stage.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary-container rounded-full border border-ink-black" />
                <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black">
                  CAMPUS ARCHIVE
                </span>
              </div>
            </div>

            {/* Playful NeoBrutalist Polaroid Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* POLAROID 1 */}
              <div className="bg-surface-white border-[3px] border-ink-black p-3 shadow-[6px_6px_0px_#121212] rotate-[-1.5deg] hover:rotate-0 transition-transform">
                <div className="h-60 border-2 border-ink-black bg-surface-container overflow-hidden relative">
                  <Image
                    src="/images/gallery/trench-1.jpg"
                    alt="Students coding late night in campus computer lab"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-ink-black text-surface-white font-label-sm text-label-sm px-2 py-0.5 border border-ink-black font-bold">
                    CAMPUS LAB
                  </div>
                </div>
                <div className="pt-3 pb-1">
                  <p className="font-headline-sm text-[16px] text-ink-black font-bold uppercase">
                    Hackathon Sprint
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Collaborative development during hackathon builds.
                  </p>
                </div>
              </div>

              {/* POLAROID 2 */}
              <div className="bg-surface-white border-[3px] border-ink-black p-3 shadow-[6px_6px_0px_#121212] rotate-[2deg] hover:rotate-0 transition-transform">
                <div className="h-60 border-2 border-ink-black bg-surface-container overflow-hidden relative">
                  <Image
                    src="/images/gallery/trench-2.jpg"
                    alt="TechSoc team winning cheque on stage"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-secondary-container text-ink-black font-label-sm text-label-sm px-2 py-0.5 border border-ink-black font-bold">
                    PODIUM
                  </div>
                </div>
                <div className="pt-3 pb-1">
                  <p className="font-headline-sm text-[16px] text-ink-black font-bold uppercase">
                    National Hackathon Podium
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Campus teams competing at national hackathons.
                  </p>
                </div>
              </div>

              {/* POLAROID 3 */}
              <div className="bg-surface-white border-[3px] border-ink-black p-3 shadow-[6px_6px_0px_#121212] rotate-[-2.5deg] hover:rotate-0 transition-transform">
                <div className="h-60 border-2 border-ink-black bg-surface-container overflow-hidden relative">
                  <Image
                    src="/images/gallery/trench-3.jpg"
                    alt="Freshers induction session in main auditorium"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-accent-mint text-ink-black font-label-sm text-label-sm px-2 py-0.5 border border-ink-black font-bold">
                    MAIN AUDITORIUM
                  </div>
                </div>
                <div className="pt-3 pb-1">
                  <p className="font-headline-sm text-[16px] text-ink-black font-bold uppercase">
                    Freshers Technical Induction
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Interactive onboarding into software development and tooling.
                  </p>
                </div>
              </div>

              {/* POLAROID 4 */}
              <div className="bg-surface-white border-[3px] border-ink-black p-3 shadow-[6px_6px_0px_#121212] rotate-[1.5deg] hover:rotate-0 transition-transform">
                <div className="h-60 border-2 border-ink-black bg-surface-container overflow-hidden relative">
                  <Image
                    src="/images/gallery/trench-4.jpg"
                    alt="Hands-on Google Developer Groups workshop session"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 border border-ink-black font-bold">
                    CLOUD WORKSHOP
                  </div>
                </div>
                <div className="pt-3 pb-1">
                  <p className="font-headline-sm text-[16px] text-ink-black font-bold uppercase">
                    Cloud Architecture Session
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Deploying hands-on cloud labs and containers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Recruitment CTA */}
        <section className="w-full bg-secondary-container border-b-[3px] border-ink-black py-16 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-white border-[3.5px] border-ink-black p-8 lg:p-12 shadow-[8px_8px_0px_#121212] relative">
              {/* Corner stamp tag */}
              <div className="absolute -top-4 right-8 bg-accent-coral text-on-primary border-2 border-ink-black px-4 py-1 font-label-sm text-label-sm uppercase font-bold shadow-[3px_3px_0px_#121212] rotate-[3deg]">
                JOIN THE REVOLUTION
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-3">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                    RECRUITMENT • ANNUAL INTAKE
                  </span>
                  <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase font-bold leading-tight">
                    WANT TO CONTRIBUTE OR START A DOMAIN?
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Whether you are writing your first line of Python or scaling distributed
                    databases, TechSoc has a home for you. No gatekeeping. Just passion and craft.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on-primary font-headline-sm text-[18px] uppercase tracking-wider border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center font-bold"
                  >
                    APPLY TO JOIN →
                  </Link>
                  <Link
                    href="/events"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-canvas-cream text-ink-black font-label-lg text-label-lg uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-surface-container active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-center font-bold"
                  >
                    CHECK UPCOMING SESSIONS
                  </Link>
                </div>
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
