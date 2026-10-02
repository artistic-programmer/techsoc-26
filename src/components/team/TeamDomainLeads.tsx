"use client";

import React, { useState } from "react";
import Image from "next/image";

type TeamWingFilter = "all" | "dev" | "ai" | "design";

interface DomainLead {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText?: string;
  icon: string;
  image: string;
  name: string;
  handle: string;
  description: string;
  weapons: string;
  weaponsColor?: string;
  wing: "dev" | "ai" | "design";
}

const DOMAIN_LEADS: DomainLead[] = [
  {
    id: "lead-web",
    badge: "WEB ARCHITECTURE",
    badgeBg: "bg-primary-fixed",
    badgeText: "text-on-primary-fixed",
    icon: "code",
    image: "/images/team/member-6.jpg",
    name: "Web Architecture Lead",
    handle: "@web_guild",
    description:
      "Guides full-stack web development initiatives, campus portals, and web guild workshops.",
    weapons: "TypeScript • Next.js • PostgreSQL • Docker",
    weaponsColor: "text-primary",
    wing: "dev",
  },
  {
    id: "lead-ai",
    badge: "AI & MACHINE LEARNING",
    badgeBg: "bg-tertiary-fixed",
    badgeText: "text-on-tertiary-fixed",
    icon: "psychology",
    image: "/images/team/member-7.jpg",
    name: "AI & ML Lead",
    handle: "@ai_guild",
    description:
      "Mentors deep learning study groups, computer vision exploration, and machine learning pipelines.",
    weapons: "PyTorch • HuggingFace • CUDA • OpenCV",
    weaponsColor: "text-tertiary",
    wing: "ai",
  },
  {
    id: "lead-mobile",
    badge: "MOBILE APP DEV",
    badgeBg: "bg-surface-container-highest",
    badgeText: "text-ink-black",
    icon: "smartphone",
    image: "/images/team/member-8.jpg",
    name: "Mobile App Lead",
    handle: "@mobile_guild",
    description:
      "Guides cross-platform mobile architectures, mobile development tracks, and UI implementations.",
    weapons: "Flutter • Dart • Kotlin • Firebase",
    weaponsColor: "text-accent-mint",
    wing: "dev",
  },
  {
    id: "lead-cyber",
    badge: "CYBERSEC / CTF",
    badgeBg: "bg-secondary-fixed",
    badgeText: "text-on-secondary-fixed",
    icon: "security",
    image: "/images/team/member-9.jpg",
    name: "CyberSec & CTF Lead",
    handle: "@security_guild",
    description:
      "Coordinates reverse-engineering, security drills, and competitive CTF participation.",
    weapons: "Ghidra • Wireshark • Rust • Kali Linux",
    weaponsColor: "text-ink-black",
    wing: "ai",
  },
  {
    id: "lead-cp",
    badge: "CP & ALGORITHMS",
    badgeBg: "bg-secondary-fixed",
    badgeText: "text-on-secondary-fixed",
    icon: "calculate",
    image: "/images/team/member-10.jpg",
    name: "Algorithms & CP Lead",
    handle: "@algo_guild",
    description:
      "Coordinates algorithmic problem solving, contest discussions, and competitive programming sprints.",
    weapons: "C++23 • Fast I/O • Graphs • Dynamic Prog",
    weaponsColor: "text-ink-black",
    wing: "design",
  },
  {
    id: "lead-design",
    badge: "UI/UX & DESIGN",
    badgeBg: "bg-tertiary-fixed",
    badgeText: "text-on-tertiary-fixed",
    icon: "palette",
    image: "/images/team/member-11.jpg",
    name: "UI/UX & Design Lead",
    handle: "@design_guild",
    description:
      "Shapes society design standards, typography systems, and interactive UI prototypes.",
    weapons: "Figma • Framer • Illustrator • Spline 3D",
    weaponsColor: "text-tertiary",
    wing: "design",
  },
  {
    id: "lead-cloud",
    badge: "CLOUD & DEVOPS",
    badgeBg: "bg-primary-fixed",
    badgeText: "text-on-primary-fixed",
    icon: "cloud_sync",
    image: "/images/team/member-12.jpg",
    name: "Cloud & DevOps Lead",
    handle: "@cloud_guild",
    description:
      "Maintains development environments, automated testing workflows, and cloud architecture tracks.",
    weapons: "AWS • Terraform • GitHub Actions • Ansible",
    weaponsColor: "text-primary",
    wing: "dev",
  },
  {
    id: "lead-gdg",
    badge: "GDG CAMPUS ORGANIZER",
    badgeBg: "bg-secondary-container",
    badgeText: "text-ink-black",
    icon: "hub",
    image: "/images/team/member-13.jpg",
    name: "GDG Lead Organizer",
    handle: "@gdg_campus",
    description:
      "Facilitates developer group sessions, tech workshops, and community interactions for campus students.",
    weapons: "Android • GCP • TensorFlow • Event Sprints",
    weaponsColor: "text-ink-black",
    wing: "dev",
  },
];

export const TeamDomainLeads: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TeamWingFilter>("all");

  const filterTabs = [
    { id: "all" as TeamWingFilter, label: "ALL DOMAINS" },
    { id: "dev" as TeamWingFilter, label: "DEV & CLOUD" },
    { id: "ai" as TeamWingFilter, label: "AI & CYBER" },
    { id: "design" as TeamWingFilter, label: "DESIGN & CP" },
  ];

  const filteredLeads = DOMAIN_LEADS.filter((lead) => {
    if (activeFilter === "all") return true;
    return lead.wing === activeFilter;
  });

  return (
    <div>
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-widest block mb-2">
            THE SPECIALISTS
          </span>
          <h2 className="font-display-xl text-headline-sm sm:text-headline-md md:text-headline-lg lg:text-display-xl text-ink-black uppercase leading-tight font-bold">
            DOMAIN LEADS &amp; TECHNICAL ARCHITECTS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
            Heads of our specialized divisions driving curriculum, workshops, and open-source
            bounties.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 font-label-md text-label-sm uppercase font-bold tracking-wider rounded border-2 border-ink-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-ink-black text-surface-white shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                    : "bg-surface-white text-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container hover:-translate-x-0.5 hover:-translate-y-0.5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Leads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            className="bg-surface-white p-5 rounded-xl shadow-[5px_5px_0px_#121212] border-2 border-ink-black hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-2 py-0.5 ${lead.badgeBg} ${lead.badgeText || "text-ink-black"} font-label-sm text-[11px] uppercase font-bold rounded border border-ink-black`}
                >
                  {lead.badge}
                </span>
                <span className="material-symbols-outlined text-ink-black text-[20px]">
                  {lead.icon}
                </span>
              </div>

              <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container mb-3 shadow-[2px_2px_0px_#121212] border border-ink-black relative">
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold">
                {lead.name}
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                {lead.handle}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {lead.description}
              </p>
            </div>

            <div className="mt-4 pt-3 bg-surface-container-lowest rounded p-2.5 border border-ink-black/15">
              <span
                className={`font-label-sm text-[11px] ${lead.weaponsColor || "text-ink-black"} font-bold uppercase block mb-1`}
              >
                Weapons of Choice:
              </span>
              <p className="font-label-sm text-label-sm text-ink-black font-mono font-medium">
                {lead.weapons}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
