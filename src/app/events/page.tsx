import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Navbar,
  Footer,
  MarqueeTicker,
  EventsDirectory,
  KnowledgeVault,
} from "@/components";

export const metadata: Metadata = {
  title: "Events & Hackathons | Tech Society IIIT Bhubaneswar",
  description:
    "Official calendar of national hackathons, technical speaker masterclasses, competitive CTFs, and developer workshops hosted by TechSoc at IIIT Bhubaneswar.",
};

export default function EventsPage() {
  const marqueeItems = [
    "OFFICIAL TECHSOC CALENDAR // CAMPUS EDITION",
    "ANNUAL FLAGSHIP HACKATHON // DETAILS TBA",
    "BUILD • LEARN • COMPETE",
    "VENUE: IIIT BHUBANESWAR CAMPUS & VIRTUAL",
    "TECHNICAL WORKSHOPS & HACKATHONS",
    "ZERO GATEKEEPING FOR STUDENT BUILDERS",
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
        {/* SECTION 0: Events Hero / Header */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="flex flex-col gap-6">
            {/* Badges / Decals */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-ink-black font-label-md text-label-sm sm:text-label-md uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-bold">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                OFFICIAL TECHSOC CALENDAR // CAMPUS EDITION
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-bold">
                VENUE: IIIT BHUBANESWAR CAMPUS &amp; VIRTUAL
              </span>
            </div>

            {/* Main Title & Metric Sticker */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
              <div>
                <h1 className="font-display-xl text-[42px] sm:text-[56px] lg:text-[68px] tracking-tight text-ink-black uppercase leading-none font-extrabold">
                  WHAT&apos;S <br className="hidden sm:inline" />
                  HAPPENING?
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed font-normal">
                  Hackathons, technical deep-dives, developer bootcamps, and competitive coding
                  sprints hosted by TechSoc. Built with zero gatekeeping for student engineers.
                </p>
              </div>

              {/* Metric Sticker */}
              <div className="p-4 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex items-center gap-4 min-w-[240px] self-start md:self-auto">
                <div className="w-12 h-12 rounded-lg bg-accent-coral flex items-center justify-center text-surface-white shadow-[2px_2px_0px_#121212] border border-ink-black">
                  <span className="material-symbols-outlined text-[28px]">
                    local_fire_department
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-ink-black leading-none font-bold">
                    ANNUAL
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mt-1 font-bold">
                    CAMPUS EVENTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Featured & Upcoming (Interactive Directory with Filters) */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <EventsDirectory />
        </section>

        {/* SECTION 2: Hackathon Arena */}
        <section className="w-full bg-secondary-container border-y-[3px] border-ink-black py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
              <div>
                <span className="px-3 py-1 bg-surface-white text-ink-black font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-bold inline-block">
                  LEGACY OF CRAFT &amp; CODE
                </span>
                <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight mt-2 font-bold">
                  HACKATHON ARENA
                </h2>
                <p className="font-body-lg text-body-lg text-ink-black max-w-xl leading-relaxed mt-1 font-medium">
                  Where first-year freshmen and final-year veterans push code together. A look
                  at the projects and collaboration from TechSoc editions.
                </p>
              </div>
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-bold">
                CAMPUS HACKATHON ARENA
              </div>
            </div>

            {/* Stat Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black">
                <span className="font-display-xl text-display-xl text-ink-black block leading-none font-bold">
                  CAMPUS
                </span>
                <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2 block font-bold">
                  HACKATHON PARTICIPANTS
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Students and builders across campus cohorts.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black">
                <span className="font-display-xl text-display-xl text-accent-coral block leading-none font-bold">
                  COMMUNITY
                </span>
                <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2 block font-bold">
                  PRIZES &amp; RECOGNITION
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Certificates, project support, and winner awards.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black">
                <span className="font-display-xl text-display-xl text-primary block leading-none font-bold">
                  OPEN
                </span>
                <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2 block font-bold">
                  SOURCE REPOSITORIES
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Projects published under open-source licenses.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black">
                <span className="font-display-xl text-display-xl text-accent-mint block leading-none font-bold">
                  ACTIVE
                </span>
                <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2 block font-bold">
                  MENTORS &amp; REVIEWERS
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Experienced peers and mentors guiding builds.
                </p>
              </div>
            </div>

            {/* Winning Past Projects Showcase */}
            <div className="flex items-center gap-3 pb-6">
              <span className="material-symbols-outlined text-[24px] text-ink-black">trophy</span>
              <h3 className="font-headline-md text-headline-md text-ink-black uppercase font-bold">
                PAST ENIGMA HALL OF FAME
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-surface-white p-5 rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-secondary-container rounded font-label-sm text-label-sm uppercase font-bold border border-ink-black">
                      1ST PRIZE
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                      STUDENT TEAM
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                    Mesh Network Utility
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Off-grid peer-to-peer communication network using low-power radios and
                    packet relays for emergency response.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-ink-black/15">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                    TRACK: HARDWARE / IOT
                  </span>
                  <a
                    href="#"
                    className="font-label-md text-label-md uppercase text-primary font-bold hover:underline flex items-center gap-0.5"
                  >
                    [ DEMO REPO ]{" "}
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-surface-white p-5 rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-accent-mint text-ink-black rounded font-label-sm text-label-sm uppercase font-bold border border-ink-black">
                      RUNNER UP
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                      STUDENT TEAM
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                    Edge Vision Diagnostic Tool
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Screening mobile application utilizing lightweight edge
                    vision models for diagnostic assistance.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-ink-black/15">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                    TRACK: HEALTHTECH
                  </span>
                  <a
                    href="#"
                    className="font-label-md text-label-md uppercase text-primary font-bold hover:underline flex items-center gap-0.5"
                  >
                    [ PROJECT OVERVIEW ]{" "}
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-surface-white p-5 rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-primary text-surface-white rounded font-label-sm text-label-sm uppercase font-bold border border-ink-black">
                      CATEGORY WINNER
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                      STUDENT TEAM
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                    Credential Verification Prototype
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Cryptographic credential verification framework for academic records
                    preserving student privacy and identity metadata.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-ink-black/15">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                    TRACK: CRYPTOGRAPHY
                  </span>
                  <a
                    href="#"
                    className="font-label-md text-label-md uppercase text-primary font-bold hover:underline flex items-center gap-0.5"
                  >
                    [ REPOSITORY ]{" "}
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Knowledge Vault (Past Sessions with Search) */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <KnowledgeVault />
        </section>

        {/* SECTION 4: TechSoc Mentorship Cohorts */}
        <section className="w-full bg-surface-white border-y-[3px] border-ink-black py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Context */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="px-3 py-1 bg-accent-mint text-ink-black font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] border border-ink-black font-bold self-start">
                    1-ON-1 &amp; SMALL POD ACCELERATION
                  </span>
                  <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                    TECHSOC MENTORSHIP COHORTS
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    TechSoc connects interested juniors with senior student engineers
                    and alumni mentors across dedicated project and research tracks.
                  </p>
                </div>

                <div className="p-4 bg-canvas-cream rounded-xl shadow-[4px_4px_0px_#121212] border-2 border-ink-black flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-ink-black shadow-[2px_2px_0px_#121212] border border-ink-black flex-shrink-0">
                    <span className="material-symbols-outlined text-[28px]">verified</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-[16px] leading-[22px] uppercase text-ink-black font-bold block">
                      PEER MENTORSHIP TRACK
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mentees gain hands-on architectural experience, project guidance,
                      and practical software engineering skills.
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    href="/connect"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink-black text-surface-white font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[5px_5px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-bold border-2 border-ink-black"
                  >
                    <span className="material-symbols-outlined text-[18px]">school</span>
                    [ CONNECT WITH MENTORS ]
                  </Link>
                </div>
              </div>

              {/* Right Column: Process Steps Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Step 1 */}
                <div className="p-6 bg-canvas-cream rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4">
                    <span className="w-8 h-8 rounded-full bg-secondary-container text-ink-black font-label-lg text-label-lg font-bold flex items-center justify-center shadow-[2px_2px_0px_#121212] border border-ink-black">
                      01
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                      STAGE 1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      EXPRESS INTEREST
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Share your technical interests (Systems, AI, Cloud,
                      Web, Security) and projects you want to build.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-6 bg-canvas-cream rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4">
                    <span className="w-8 h-8 rounded-full bg-accent-mint text-ink-black font-label-lg text-label-lg font-bold flex items-center justify-center shadow-[2px_2px_0px_#121212] border border-ink-black">
                      02
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                      STAGE 2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      POD MATCHING
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Pairing with a domain lead or senior peer aligned with your
                      learning goals.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-6 bg-canvas-cream rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4">
                    <span className="w-8 h-8 rounded-full bg-accent-coral text-surface-white font-label-lg text-label-lg font-bold flex items-center justify-center shadow-[2px_2px_0px_#121212] border border-ink-black">
                      03
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                      STAGE 3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      CAPSTONE SPRINT
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Periodic architectural critiques, collaborative coding, code reviews,
                      and shipping clean software.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-6 bg-canvas-cream rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-surface-white font-label-lg text-label-lg font-bold flex items-center justify-center shadow-[2px_2px_0px_#121212] border border-ink-black">
                      04
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                      STAGE 4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      DEMO &amp; SHOWCASE
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Showcasing working software and demos to campus peers and
                      community members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Call for Speakers & Builders */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-surface-white p-8 lg:p-12 rounded-2xl shadow-[8px_8px_0px_#121212] border-[3.5px] border-ink-black relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Visual Accent Stickers */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary-container rounded-full opacity-40 -z-0 pointer-events-none" />

            <div className="flex flex-col gap-4 max-w-2xl relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-coral" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-bold">
                  CALL FOR SPEAKERS &amp; BUILDERS
                </span>
              </div>
              <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                HAVE A TOPIC YOU WANT TO TEACH OR COMPETE IN?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                We give you the stage, campus venue, community outreach across
                student developers, and event logistics. Host your workshop or share
                technical insights with the campus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 relative z-10 w-full lg:w-auto">
              <Link
                href="/connect"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center font-bold border-2 border-ink-black"
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
                [ SUBMIT AN EVENT PROPOSAL → ]
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
