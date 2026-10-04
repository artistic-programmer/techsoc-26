"use client";

import React, { useState } from "react";
import { domainTeams, gdgLeads } from "@/data/team";

interface DomainCardItem {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText?: string;
  title: string;
  description: string;
  icon: string;
  stack: string[];
  metric: string;
  wing: "dev" | "ai" | "design";
  roadmapUrl: string;
  leadsText?: string;
}

export const DomainFilterGrid: React.FC = () => {
  const [activeWing, setActiveWing] = useState<"all" | "dev" | "ai" | "design">("all");

  const webDevTeam = domainTeams.find((d) => d.id === "web-dev");
  const appDevTeam = domainTeams.find((d) => d.id === "app-dev");
  const aiTeam = domainTeams.find((d) => d.id === "ai-ml");
  const cpTeam = domainTeams.find((d) => d.id === "cp");
  const infosecTeam = domainTeams.find((d) => d.id === "infosec");
  const designTeam = domainTeams.find((d) => d.id === "design");

  const technicalDomains: DomainCardItem[] = [
    {
      id: "web-dev",
      badge: "DOMAIN • 01",
      badgeBg: "bg-accent-cyan",
      badgeText: "text-ink-black",
      title: "Web Development",
      description:
        webDevTeam?.description ||
        "Full-stack application architecture, performant frontends, GraphQL/tRPC APIs, edge compute, and scalable microservices.",
      icon: "language",
      stack: webDevTeam?.stack || ["Next.js", "React 19", "TypeScript", "Tailwind", "Node.js"],
      metric: `${webDevTeam?.members?.length || 9} MEMBERS • 2 LEADS`,
      wing: "dev",
      roadmapUrl: webDevTeam?.roadmapUrl || "https://roadmap.sh/frontend",
      leadsText: webDevTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "app-dev",
      badge: "DOMAIN • 02",
      badgeBg: "bg-accent-mint",
      badgeText: "text-ink-black",
      title: "App Development",
      description:
        appDevTeam?.description ||
        "Cross-platform mobile apps, native device integration, offline architectures, and modern Android/iOS development.",
      icon: "smartphone",
      stack: appDevTeam?.stack || ["Flutter", "Kotlin", "Jetpack Compose", "Android SDK"],
      metric: `${appDevTeam?.members?.length || 4} MEMBERS • 1 LEAD`,
      wing: "dev",
      roadmapUrl: appDevTeam?.roadmapUrl || "https://roadmap.sh/android",
      leadsText: appDevTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "ai-ml",
      badge: "DOMAIN • 03",
      badgeBg: "bg-[#F43F5E]",
      badgeText: "text-surface-white",
      title: "AI / Machine Learning",
      description:
        aiTeam?.description ||
        "Deep learning pipelines, LLM fine-tuning, computer vision on edge devices, RAG architectures, and model quantization.",
      icon: "psychology",
      stack: aiTeam?.stack || ["PyTorch", "HuggingFace", "Python", "OpenCV", "LangChain"],
      metric: `${aiTeam?.members?.length || 16} MEMBERS • 2 LEADS`,
      wing: "ai",
      roadmapUrl: aiTeam?.roadmapUrl || "https://roadmap.sh/ai-engineer",
      leadsText: aiTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "cloud-devops",
      badge: "DOMAIN • 04",
      badgeBg: "bg-secondary-fixed",
      badgeText: "text-ink-black",
      title: "Cloud & DevOps",
      description:
        "Server administration, container orchestration, CI/CD release pipelines, and keeping society infrastructure deployed across campus.",
      icon: "cloud",
      stack: ["Docker", "Kubernetes", "GitHub Actions", "Linux", "Terraform"],
      metric: "INFRA STATUS: OPERATIONAL",
      wing: "dev",
      roadmapUrl: "https://roadmap.sh/devops",
    },
    {
      id: "cybersec",
      badge: "DOMAIN • 05",
      badgeBg: "bg-secondary-container",
      badgeText: "text-ink-black",
      title: "CyberSec & CTF",
      description:
        infosecTeam?.description ||
        "Offensive security, binary exploitation, reverse engineering, cryptography, and competitive CTF squads.",
      icon: "security",
      stack: infosecTeam?.stack || ["Burp Suite", "Ghidra", "Wireshark", "GDB/Pwn"],
      metric: `${infosecTeam?.members?.length || 9} MEMBERS • 1 LEAD`,
      wing: "ai",
      roadmapUrl: infosecTeam?.roadmapUrl || "https://roadmap.sh/cyber-security",
      leadsText: infosecTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "comp-prog",
      badge: "DOMAIN • 06",
      badgeBg: "bg-accent-coral",
      badgeText: "text-surface-white",
      title: "Comp Programming",
      description:
        cpTeam?.description ||
        "Advanced algorithms, dynamic programming, graph theory, mathematical proofs, and speed coding for collegiate contests.",
      icon: "code_blocks",
      stack: cpTeam?.stack || ["C++20 (STL)", "Codeforces", "AtCoder", "Algorithms"],
      metric: `${cpTeam?.members?.length || 8} MEMBERS • 2 LEADS`,
      wing: "design",
      roadmapUrl: cpTeam?.roadmapUrl || "https://roadmap.sh/datastructures-and-algorithms",
      leadsText: cpTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "ui-ux",
      badge: "DOMAIN • 07",
      badgeBg: "bg-primary-container",
      badgeText: "text-surface-white",
      title: "UI/UX & Design",
      description:
        designTeam?.description ||
        "High-impact design systems, NeoBrutalist typography, user journey mapping, design tokens, and rapid Figma-to-code pipelines.",
      icon: "palette",
      stack: designTeam?.stack || ["Figma Tokens", "Design Systems", "Prototyping", "UI/UX"],
      metric: `${designTeam?.members?.length || 4} MEMBERS • 1 LEAD`,
      wing: "design",
      roadmapUrl: designTeam?.roadmapUrl || "https://roadmap.sh/ux-design",
      leadsText: designTeam?.leads.map((l) => l.name).join(", "),
    },
    {
      id: "gdg-campus",
      badge: "DOMAIN • 08",
      badgeBg: "bg-accent-mint",
      badgeText: "text-ink-black",
      title: "GDG on Campus",
      description:
        "Official student chapter facilitating industry training tracks, Google Cloud Study Jams, Flutter Sprints, and Solution Challenge entries.",
      icon: "hub",
      stack: ["Google Cloud", "Flutter", "Android", "Web Technologies"],
      metric: `${gdgLeads.length} CHAPTER LEADS`,
      wing: "dev",
      roadmapUrl: "https://gdg.community.dev/",
      leadsText: gdgLeads.map((l) => l.name).join(", "),
    },
  ];

  const filterTabs = [
    { id: "all" as const, label: "ALL", count: 8 },
    { id: "dev" as const, label: "DEV & CLOUD", count: 3 },
    { id: "ai" as const, label: "AI & CYBER", count: 2 },
    { id: "design" as const, label: "DESIGN & CP", count: 3 },
  ];

  const filteredDomains = technicalDomains.filter((d) => {
    if (activeWing === "all") return true;
    return d.wing === activeWing;
  });

  return (
    <div>
      {/* Section Header with NeoBrutalist Badge and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/20 border-2 border-ink-black w-max">
            <span className="material-symbols-outlined text-[16px] text-ink-black">
              hub
            </span>
            <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black">
              CORE GUILDS
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg text-ink-black uppercase font-bold tracking-tight">
            TECHNICAL DOMAINS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Each domain runs independent reading groups, code labs, project incubators,
            and competitive teams led by senior student captains.
          </p>
        </div>

        {/* Filter by Wing Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold mr-1">
            FILTER BY WING:
          </span>
          {filterTabs.map((tab) => {
            const isActive = activeWing === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveWing(tab.id)}
                className={`px-3 py-1 text-label-sm font-bold uppercase tracking-wider border-2 border-ink-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-secondary-container text-ink-black shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                    : "bg-surface-white text-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="flex sm:hidden items-center justify-between text-on-surface-variant font-label-sm text-[11px] uppercase font-bold mb-3 px-1">
        <span className="flex items-center gap-1.5 text-ink-black">
          <span className="material-symbols-outlined text-[16px] text-primary animate-pulse">
            swipe
          </span>
          SWIPE TO EXPLORE DOMAINS →
        </span>
        <span>{filteredDomains.length} DOMAINS</span>
      </div>

      {/* Domain Cards Horizontal Scroll on Mobile / Grid on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-1 px-1 -mx-4 sm:mx-0 sm:px-0 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0">
        {filteredDomains.map((domain) => (
          <div
            key={domain.id}
            className="snap-start flex-shrink-0 w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none bg-surface-white border-[3px] border-ink-black shadow-[5px_5px_0px_#121212] p-5 sm:p-6 flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#121212] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 ${domain.badgeBg} ${
                    domain.badgeText || "text-ink-black"
                  } border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]`}
                >
                  {domain.badge}
                </span>
                <div className="w-10 h-10 bg-surface-container border-2 border-ink-black flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px] text-ink-black">
                    {domain.icon}
                  </span>
                </div>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                {domain.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {domain.description}
              </p>

              {domain.leadsText && (
                <div className="mt-3 text-[12px] font-label-sm uppercase text-on-surface-variant font-bold">
                  <span className="text-ink-black">LEAD:</span> {domain.leadsText}
                </div>
              )}

              <div className="mt-4 pt-4 border-t-2 border-ink-black">
                <span className="font-label-sm text-label-sm uppercase font-bold text-ink-black block mb-2">
                  CORE STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {domain.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container border border-ink-black font-label-sm text-label-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-container-highest flex items-center justify-between">
              <span className="font-label-sm text-[11px] text-on-surface-variant font-bold">
                {domain.metric}
              </span>
              <a
                href={domain.roadmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-label-sm text-label-sm text-ink-black uppercase font-bold hover:text-primary group-hover:underline"
              >
                <span>ROADMAP</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
