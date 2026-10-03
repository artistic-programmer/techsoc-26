import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Navbar,
  Footer,
  MarqueeTicker,
  TeamRoster,
  PersonAvatar,
} from "@/components";
import {
  executiveBoard,
  domainTeams,
  psocLeads,
  facultyMentors,
  totalTeamSize,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Team & Leadership | Tech Society IIIT Bhubaneswar",
  description:
    "Meet faculty mentors, the executive board, domain teams, and PSOC leads powering the technical society at IIIT Bhubaneswar.",
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
            {[
              { value: totalTeamSize, label: "Team Members", color: "text-secondary-container" },
              { value: domainTeams.length, label: "Technical & Ops Domains", color: "text-accent-mint" },
              { value: facultyMentors.length, label: "Faculty Mentors", color: "text-accent-coral" },
              { value: psocLeads.length, label: "PSOC Leads", color: "text-accent-cyan" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className={`font-display-xl text-[36px] sm:text-[44px] font-extrabold ${stat.color} leading-none`}>
                  {stat.value}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-white/80 font-bold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Executive Board */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <span className="px-3 py-1 bg-primary text-surface-white font-label-sm text-label-sm uppercase tracking-wider rounded-full shadow-[2px_2px_0px_#121212] font-bold border border-ink-black inline-block mb-2">
                STEERING COUNCIL
              </span>
              <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                EXECUTIVE BOARD
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveBoard.flatMap((exec, ei) =>
                exec.members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-[3px] border-ink-black p-5 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all"
                  >
                    <span
                      className={`inline-block px-2.5 py-0.5 mb-3 ${
                        ei === 0 ? "bg-secondary-container text-ink-black" : "bg-accent-coral text-surface-white"
                      } font-label-sm text-label-sm uppercase font-bold rounded border border-ink-black`}
                    >
                      {exec.role}
                    </span>
                    <PersonAvatar
                      member={member}
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="w-full aspect-square rounded-lg shadow mb-4"
                    />
                    <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                      {member.name}
                    </h3>
                    <span className="font-label-sm text-label-sm uppercase font-bold text-primary block mt-0.5">
                      {exec.role}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>
        </section>

        {/* SECTION 3: PSOC Leads */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-12">
              <span className="font-label-sm text-label-sm uppercase font-bold text-accent-coral tracking-widest block mb-2">
                A SOCIETY UNDER TECHSOC
              </span>
              <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                PSOC LEADS
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
                PSoC is the main programming society of IIIT Bhubaneswar, and it operates
                under TechSoc. These are the students leading it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {psocLeads.map((member) => (
                <div
                  key={member.name}
                  className="bg-surface-white rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black p-5 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all"
                >
                  <span className="inline-block px-2 py-0.5 mb-3 bg-accent-mint text-ink-black font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black">
                    PSOC LEAD
                  </span>
                  <PersonAvatar
                    member={member}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="w-full aspect-square rounded-lg shadow-[2px_2px_0px_#121212] mb-3"
                  />
                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Domain Teams */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low border-b-[3px] border-ink-black">
          <div className="max-w-[1280px] mx-auto">
            <TeamRoster />
          </div>
        </section>

        {/* SECTION 5: Faculty Mentors */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-ink-black bg-surface-container-high">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10">
              <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-widest block mb-2">
                GUIDANCE
              </span>
              <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
                FACULTY MENTORS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyMentors.map((member) => (
                <div
                  key={member.name}
                  className="bg-surface-white rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black p-5"
                >
                  <span className="inline-block px-2 py-0.5 mb-3 bg-primary text-surface-white font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black">
                    FACULTY MENTOR
                  </span>
                  <PersonAvatar
                    member={member}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="w-full aspect-square rounded-lg shadow-[2px_2px_0px_#121212] mb-3"
                  />
                  <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                    {member.name}
                  </h3>
                </div>
              ))}
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
