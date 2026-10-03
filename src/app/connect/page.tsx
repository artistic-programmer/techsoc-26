import React from "react";
import type { Metadata } from "next";
import { Navbar, Footer, ContactForm, ConnectFaq, MarqueeTicker } from "@/components";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Connect & Collaborate | Tech Society IIIT Bhubaneswar",
  description:
    "Get in touch with Tech Society IIIT Bhubaneswar. Connect with our student developer community, collaborate on open-source projects, sponsor technical initiatives, or reach out to our team.",
};

const tickerItems = [
  "✦ OPEN COLLABORATION PROTOCOL",
  "👾 DISCORD: STUDENT BUILDER GUILD",
  "⚡ ANNUAL FLAGSHIP EVENTS",
  "✦ IIIT BHUBANESWAR CAMPUS",
  "🚀 TALK PROPOSALS WELCOME",
  "✦ OPEN SOURCE FIRST",
  "👾 OPEN FOR STUDENT COLLABORATION",
  "⚡ BUILD • LEARN • COMPETE",
];

const channels = [
  {
    name: "GitHub Org",
    handle: "github.com/p-society",
    badge: "REPOSITORIES",
    badgeColor: "bg-accent-mint",
    icon: "terminal",
    iconBg: "bg-surface-container-high",
    description:
      "Explore club projects, campus tools, hackathon starters, and open-source contributions. Pull requests welcome!",
    actionText: "EXPLORE CODE",
    href: siteConfig.socials.github || "#",
  },
  {
    name: "LinkedIn",
    handle: "Tech Society IIITBH",
    badge: "NETWORK",
    badgeColor: "bg-secondary-container",
    icon: "hub",
    iconBg: "bg-primary-fixed",
    description:
      "Stay updated on alumni achievements, campus placement announcements, recruiter partnerships, and official ventures.",
    actionText: "CONNECT PROFILE",
    href: siteConfig.socials.linkedin || "#",
  },
  {
    name: "Instagram",
    handle: "@techsociiitbh",
    badge: "CAMPUS VIBES",
    badgeColor: "bg-accent-coral text-on-secondary",
    icon: "photo_camera",
    iconBg: "bg-tertiary-fixed",
    description:
      "Event photo drops, behind-the-scenes hackathon frenzy, student spotlight stories, and flash quiz contests.",
    actionText: "FOLLOW FEED",
    href: siteConfig.socials.instagram || "#",
  },
  {
    name: "YouTube",
    handle: "Tech Society IIIT Bhubaneswar",
    badge: "STREAMS",
    badgeColor: "bg-surface-white",
    icon: "smart_display",
    iconBg: "bg-secondary-fixed",
    description:
      "Recorded bootcamps, speaker recordings, live code breakdowns, and workshop archives for asynchronous learning.",
    actionText: "WATCH WORKSHOPS",
    href: siteConfig.socials.youtube || "#",
  },
];

export default function ConnectPage() {
  const discordUrl = siteConfig.socials.discord || "#";
  const generalEmail = siteConfig.contact.generalEnquiries || "";
  const sponsorEmail = siteConfig.contact.partnershipEmail || "";

  return (
    <div className="flex flex-col min-h-screen bg-canvas-cream selection:bg-secondary-container selection:text-ink-black overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      <main className="w-full bg-canvas-cream min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full overflow-x-hidden">
          {/* Top Marquee Ribbon */}
          <div className="w-full overflow-hidden">
            <MarqueeTicker items={tickerItems} speed={24} />
          </div>

          <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col gap-14 lg:gap-20 min-w-0">
            {/* SECTION 0: PAGE HERO HEADER */}
            <section className="flex flex-col gap-6 relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-accent-mint text-ink-black border-[2.5px] border-ink-black rounded-full font-label-sm text-label-sm uppercase font-bold shadow-[3px_3px_0px_#121212] rotate-[-2deg]">
                  STATUS: INBOX OPEN
                </span>
                <span className="px-3 py-1 bg-surface-white text-ink-black border-[2.5px] border-ink-black rounded-full font-label-sm text-label-sm uppercase font-bold shadow-[3px_3px_0px_#121212]">
                  ROUTE: /CONNECT
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed text-ink-black border-[2.5px] border-ink-black rounded-full font-label-sm text-label-sm uppercase font-bold shadow-[3px_3px_0px_#121212] rotate-[1.5deg]">
                  CAMPUS INBOX
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex flex-col max-w-4xl">
                  <h1 className="font-display-xl text-headline-lg sm:text-display-xl tracking-tight uppercase text-ink-black leading-none drop-shadow-[2px_2px_0px_#121212]">
                    LET&apos;S CONNECT.
                    <br />
                    <span className="bg-secondary-container px-3 py-0.5 border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] inline-block mt-2 rotate-[-1deg]">
                      BUILD WITH US.
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl mt-6 font-medium">
                    Whether you want to join our Discord server, collaborate on an open-source project, sponsor our flagship hackathon, or invite us for a tech talk — we&apos;d love to hear from you.
                  </p>
                </div>

                {/* Floating Neo Sticker Pill */}
                <div className="hidden lg:flex flex-col items-center justify-center p-4 bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] rotate-[4deg] w-48 text-center shrink-0">
                  <span className="font-label-sm text-label-sm uppercase text-ink-black font-bold tracking-wider">
                    CAMPUS DISCORD
                  </span>
                  <div className="w-4 h-4 rounded-full bg-accent-mint border-2 border-ink-black my-1 animate-pulse" />
                  <span className="font-headline-sm text-headline-sm text-ink-black font-bold">
                    ONLINE
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">
                    STUDENT BUILDERS
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 1: PRIMARY DISCORD HERO MEGA-CARD */}
            <section className="relative w-full overflow-hidden">
              <div className="bg-primary text-on-primary border-[3px] border-ink-black shadow-[8px_8px_0px_#121212] rounded-xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                {/* Background Grid Pattern Accent Watermark */}
                <div className="absolute right-0 top-0 max-w-full overflow-hidden opacity-15 pointer-events-none text-white select-none">
                  <span className="material-symbols-outlined text-[180px] sm:text-[240px]">forum</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                  <div className="flex flex-col max-w-2xl gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-secondary-container text-ink-black border-2 border-ink-black rounded font-label-md text-label-md uppercase font-bold shadow-[2px_2px_0px_#121212]">
                        HEADQUARTERS
                      </span>
                      <span className="text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                        {"// OFFICIAL COMMUNITY HUB"}
                      </span>
                    </div>

                    <h2 className="font-headline-lg text-headline-md sm:text-headline-lg uppercase text-on-primary tracking-tight font-extrabold">
                      THE DISCORD SERVER — STUDENTS &amp; ALUMNI
                    </h2>
                    <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                      The collaborative hub for tech at IIIT-BBSR. Peer debug assistance, collaborative hackathons, competitive programming sprints, open-source project squads, and alumni mentors.
                    </p>

                    {/* Server Features Pills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      <div className="flex items-center gap-2 p-2 bg-on-primary-fixed-variant border-2 border-ink-black shadow-[2px_2px_0px_#121212] rounded">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">
                          bolt
                        </span>
                        <span className="font-label-sm text-label-sm uppercase text-on-primary font-bold">
                          Peer Debug Help
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-on-primary-fixed-variant border-2 border-ink-black shadow-[2px_2px_0px_#121212] rounded">
                        <span className="material-symbols-outlined text-accent-mint text-[18px]">
                          code
                        </span>
                        <span className="font-label-sm text-label-sm uppercase text-on-primary font-bold">
                          PR &amp; Code Review Hub
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-on-primary-fixed-variant border-2 border-ink-black shadow-[2px_2px_0px_#121212] rounded">
                        <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">
                          group_work
                        </span>
                        <span className="font-label-sm text-label-sm uppercase text-on-primary font-bold">
                          Hackathon Team Match
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-on-primary-fixed-variant border-2 border-ink-black shadow-[2px_2px_0px_#121212] rounded">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">
                          record_voice_over
                        </span>
                        <span className="font-label-sm text-label-sm uppercase text-on-primary font-bold">
                          Live Dev Talks &amp; AMA
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-3 shrink-0 max-w-full">
                    <a
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4 bg-secondary-container text-ink-black font-headline-sm text-[16px] sm:text-headline-sm uppercase tracking-wider border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] hover:shadow-[8px_8px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#121212] rounded-lg transition-all text-center font-bold max-w-full"
                      href={discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[24px] sm:text-[28px] shrink-0">sports_esports</span>
                      <span className="break-words text-center">[ 👾 JOIN DISCORD COMMUNITY ]</span>
                    </a>
                    <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider font-semibold">
                      ✦ Student verification via campus community channels
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: OFFICIAL CHANNELS & HUBS (4-COL GRID) */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b-[3px] border-ink-black pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 bg-accent-coral border-2 border-ink-black" />
                  <h2 className="font-headline-md text-headline-sm sm:text-headline-md uppercase text-ink-black font-bold">
                    OFFICIAL CHANNELS &amp; HUBS
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold tracking-wider hidden sm:inline-block">
                  SYNC • CODE • BROADCAST
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {channels.map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between p-6 bg-surface-white border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-lg"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded ${channel.iconBg} border-2 border-ink-black flex items-center justify-center group-hover:bg-secondary-container transition-colors shadow-[2px_2px_0px_#121212]`}
                        >
                          <span className="material-symbols-outlined text-ink-black text-[26px]">
                            {channel.icon}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-0.5 ${channel.badgeColor} font-label-sm text-label-sm uppercase border-2 border-ink-black rounded font-bold`}
                        >
                          {channel.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-title-lg text-title-lg uppercase text-ink-black font-bold">
                          {channel.name}
                        </h3>
                        <p className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-0.5 truncate">
                          {channel.handle}
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          {channel.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-ink-black flex items-center justify-between text-ink-black font-label-md text-label-md uppercase font-bold group-hover:text-primary transition-colors">
                      <span>{channel.actionText}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* SECTION 3: SPLIT FORM & DIRECT METADATA (12-COL: 7 + 5) */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Columns: Form Protocol */}
              <div id="contact-form" className="lg:col-span-7">
                <ContactForm
                  categories={siteConfig.contactFormCategories}
                />
              </div>

              {/* Right 5 Columns: Direct Channels, Physical HQ, System Status */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Direct Channels Card */}
                <div className="bg-surface-white border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 pb-2 border-b-2 border-ink-black">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      alternate_email
                    </span>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                      Direct Channels
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-canvas-cream border-2 border-ink-black rounded flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">
                        General &amp; Community Queries
                      </span>
                      {generalEmail ? (
                        <a
                          className="font-title-lg text-title-lg text-primary font-bold hover:underline flex items-center justify-between break-all"
                          href={`mailto:${generalEmail}`}
                        >
                          <span>{generalEmail}</span>
                          <span className="material-symbols-outlined text-[18px] shrink-0 ml-1">
                            open_in_new
                          </span>
                        </a>
                      ) : (
                        <a
                          className="font-title-lg text-title-lg text-primary font-bold hover:underline flex items-center justify-between"
                          href="#contact-form"
                        >
                          <span>Reach out via form</span>
                          <span className="material-symbols-outlined text-[18px] shrink-0 ml-1">
                            arrow_downward
                          </span>
                        </a>
                      )}
                    </div>

                    <div className="p-3 bg-canvas-cream border-2 border-ink-black rounded flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">
                        Sponsorships &amp; Flagship Hackathons
                      </span>
                      {sponsorEmail ? (
                        <a
                          className="font-title-lg text-title-lg text-primary font-bold hover:underline flex items-center justify-between break-all"
                          href={`mailto:${sponsorEmail}`}
                        >
                          <span>{sponsorEmail}</span>
                          <span className="material-symbols-outlined text-[18px] shrink-0 ml-1">
                            open_in_new
                          </span>
                        </a>
                      ) : (
                        <a
                          className="font-title-lg text-title-lg text-primary font-bold hover:underline flex items-center justify-between"
                          href="#contact-form"
                        >
                          <span>Reach out via form</span>
                          <span className="material-symbols-outlined text-[18px] shrink-0 ml-1">
                            arrow_downward
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Physical Location Card with Styled Blueprint Container */}
                <div className="bg-surface-white border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b-2 border-ink-black">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-accent-coral text-[24px]">
                        pin_drop
                      </span>
                      <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                        Campus Presence
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 bg-accent-mint font-label-sm text-label-sm uppercase border border-ink-black rounded font-bold">
                      CAMPUS LAB
                    </span>
                  </div>

                  <div className="font-body-md text-body-md text-ink-black">
                    <p className="font-bold">TechSoc Campus Lab</p>
                    <p className="text-on-surface-variant text-body-sm mt-1 leading-relaxed">
                      Academic Block, IIIT Bhubaneswar Campus
                      <br />
                      Gothapatna, PO: Malipada
                      <br />
                      Bhubaneswar, Odisha — 751003
                    </p>
                  </div>

                  {/* Stylized Neo-Brutalist Map Box */}
                  <div
                    className="w-full h-44 bg-surface-container border-[2.5px] border-ink-black rounded-lg shadow-[3px_3px_0px_#121212] relative overflow-hidden flex items-end p-3"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 70% 40%, rgba(29, 78, 216, 0.12) 0%, transparent 60%),
                        linear-gradient(to right, rgba(18, 18, 18, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(18, 18, 18, 0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: "100% 100%, 20px 20px, 20px 20px",
                    }}
                  >
                    {/* Visual map pin indicator */}
                    <div className="absolute top-8 right-12 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-accent-coral border-2 border-ink-black shadow-[2px_2px_0px_#121212] flex items-center justify-center animate-bounce">
                        <span className="material-symbols-outlined text-surface-white text-[18px]">
                          location_on
                        </span>
                      </div>
                      <div className="w-4 h-1.5 rounded-full bg-ink-black/40 blur-[1px] mt-0.5" />
                    </div>

                    <div className="bg-surface-white/95 backdrop-blur-sm border-2 border-ink-black px-2.5 py-1 rounded shadow-[2px_2px_0px_#121212] flex items-center gap-2 z-10">
                      <span className="w-2 h-2 rounded-full bg-accent-mint animate-ping" />
                      <span className="font-label-sm text-[11px] uppercase font-bold text-ink-black tracking-wider">
                        IIIT BHUBANESWAR CAMPUS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Retro Terminal Quick Stats Box */}
                <div className="bg-ink-black text-canvas-cream border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] rounded-xl p-5 flex flex-col gap-3 font-mono">
                  <div className="flex items-center justify-between text-accent-mint border-b border-surface-container-highest/30 pb-2">
                    <span className="text-xs font-bold uppercase">&gt; SYSTEM_STATUS.SH</span>
                    <span className="text-xs uppercase bg-accent-mint text-ink-black px-1.5 py-0.5 font-bold rounded">
                      ONLINE
                    </span>
                  </div>
                  <div className="text-xs leading-relaxed flex flex-col gap-1 text-surface-container-high">
                    <p>
                      <span className="text-secondary-container">community_status:</span> Active Student Guilds
                    </p>
                    <p>
                      <span className="text-secondary-container">contributions:</span> Open Source Repositories
                    </p>
                    <p>
                      <span className="text-secondary-container">flagship_events:</span> Annual Hackathons &amp; Workshops
                    </p>
                    <p>
                      <span className="text-secondary-container">infrastructure:</span> Operational / Campus Network
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b-[3px] border-ink-black pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 bg-secondary-container border-2 border-ink-black" />
                  <h2 className="font-headline-md text-headline-sm sm:text-headline-md uppercase text-ink-black font-bold">
                    FREQUENTLY ASKED QUESTIONS
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold tracking-wider">
                  RESOLVE DOUBTS
                </span>
              </div>

              {/* Interactive 2x2 FAQ Accordion */}
              <ConnectFaq items={faqs} />
            </section>

            {/* SECTION 5: FINAL ACTION BANNER */}
            <section className="w-full bg-secondary-container border-[3px] border-ink-black shadow-[8px_8px_0px_#121212] rounded-xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-ink-black">
                  {"// READY TO STEP INTO THE ARENA?"}
                </span>
                <h3 className="font-headline-md text-headline-sm sm:text-headline-md uppercase text-ink-black font-extrabold">
                  HOP INTO THE VOICE ROOMS OR PING THE BOT.
                </h3>
                <p className="font-body-md text-body-md text-ink-black font-medium max-w-xl">
                  Don&apos;t build in isolation. The best projects at IIIT Bhubaneswar start with a random message in the #general channel.
                </p>
              </div>

              <a
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-ink-black text-canvas-cream font-headline-sm text-[16px] sm:text-headline-sm uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:bg-primary hover:text-on-primary hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#121212] rounded-lg transition-all shrink-0 font-bold max-w-full text-center"
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ENTER DISCORD SERVER ↗
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
