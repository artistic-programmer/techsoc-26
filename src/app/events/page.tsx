import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Navbar,
  Footer,
  MarqueeTicker,
  KnowledgeVault,
  D3FeaturedSection,
} from "@/components";
import { communityRepositories } from "@/data/projects";

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

        {/* SECTION 1: Flagship Featured Event: D³ TECHNO FEST 2026 */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <D3FeaturedSection />
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
              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black min-w-0 flex flex-col justify-between">
                <div>
                  <span className="font-display-xl text-[28px] sm:text-[32px] lg:text-[26px] xl:text-[30px] text-ink-black block leading-none font-black tracking-tight break-words min-w-0">
                    CAMPUS
                  </span>
                  <span className="font-label-lg text-label-sm sm:text-label-md xl:text-label-lg text-on-surface-variant uppercase mt-2.5 block font-bold leading-tight min-w-0">
                    HACKATHON PARTICIPANTS
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed min-w-0">
                  Students and builders across campus cohorts.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black min-w-0 flex flex-col justify-between">
                <div>
                  <span className="font-display-xl text-[28px] sm:text-[32px] lg:text-[26px] xl:text-[30px] text-accent-coral block leading-none font-black tracking-tight break-words min-w-0">
                    COMMUNITY
                  </span>
                  <span className="font-label-lg text-label-sm sm:text-label-md xl:text-label-lg text-on-surface-variant uppercase mt-2.5 block font-bold leading-tight min-w-0">
                    PRIZES &amp; RECOGNITION
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed min-w-0">
                  Certificates, project support, and winner awards.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black min-w-0 flex flex-col justify-between">
                <div>
                  <span className="font-display-xl text-[28px] sm:text-[32px] lg:text-[26px] xl:text-[30px] text-primary block leading-none font-black tracking-tight break-words min-w-0">
                    OPEN
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2.5 block font-bold leading-tight min-w-0">
                    SOURCE REPOSITORIES
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed min-w-0">
                  Projects published under open-source licenses.
                </p>
              </div>

              <div className="p-6 bg-surface-white rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black min-w-0 flex flex-col justify-between">
                <div>
                  <span className="font-display-xl text-[28px] sm:text-[32px] lg:text-[26px] xl:text-[30px] text-accent-mint block leading-none font-black tracking-tight break-words min-w-0">
                    ACTIVE
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface-variant uppercase mt-2.5 block font-bold leading-tight min-w-0">
                    MENTORS &amp; REVIEWERS
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed min-w-0">
                  Experienced peers and mentors guiding builds.
                </p>
              </div>
            </div>

            {/* TechSoc Open Source Repositories Showcase */}
            <div className="pb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-ink-black">terminal</span>
                <h3 className="font-headline-md text-headline-md text-ink-black uppercase font-bold">
                  TECHSOC OPEN SOURCE REPOSITORIES
                </h3>
              </div>
              <p className="font-body-md text-body-md text-ink-black max-w-2xl mt-1.5 font-medium leading-relaxed">
                Projects built by the TechSoc community — explore the code, discover ideas, and contribute to tools created for students and developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityRepositories.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-surface-white p-5 rounded-xl shadow-[6px_6px_0px_#121212] border-2 border-ink-black flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#121212] transition-all"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-secondary-container text-ink-black rounded font-label-sm text-label-sm uppercase font-bold border border-ink-black">
                        {repo.category}
                      </span>
                      <span className="font-mono text-label-sm text-on-surface-variant font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">folder</span>
                        p-society
                      </span>
                    </div>

                    <h4 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      {repo.name}
                    </h4>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {repo.description}
                    </p>

                    {/* Compact Technology Stack */}
                    {repo.technologies && repo.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {repo.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-surface-container font-mono text-[11px] text-ink-black border border-ink-black/40 rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-ink-black/15">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-ink-black">code</span>
                      OPEN SOURCE
                    </span>
                    <a
                      href={repo.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-md text-label-md uppercase text-primary font-bold hover:underline flex items-center gap-0.5"
                    >
                      [ GITHUB REPO ]{" "}
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Knowledge Vault (Past Sessions with Search) */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <KnowledgeVault />
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
