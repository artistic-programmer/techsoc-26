"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DomainData {
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
  isWide?: boolean;
}

const DOMAINS: DomainData[] = [
  {
    id: "web-dev",
    badge: "DOMAIN • 01",
    badgeBg: "bg-accent-cyan",
    badgeText: "text-ink-black",
    title: "Web Development",
    description:
      "Full-stack application architecture, performant frontends, GraphQL/tRPC APIs, edge compute, and scalable microservices.",
    icon: "language",
    stack: ["React 19", "Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    metric: "ACTIVE GUILD CONTRIBUTORS",
    wing: "dev",
  },
  {
    id: "app-dev",
    badge: "DOMAIN • 02",
    badgeBg: "bg-accent-mint",
    badgeText: "text-ink-black",
    title: "App Development",
    description:
      "Cross-platform mobile apps, native device integration, offline-first architectures, state machines, and app store deployment.",
    icon: "smartphone",
    stack: ["Flutter", "Kotlin", "Jetpack Compose", "SwiftUI"],
    metric: "ACTIVE APP BUILDERS",
    wing: "dev",
  },
  {
    id: "ai-ml",
    badge: "DOMAIN • 03",
    badgeBg: "bg-[#F43F5E]",
    badgeText: "text-surface-white",
    title: "AI / Machine Learning",
    description:
      "Deep learning pipelines, LLM fine-tuning, computer vision on edge devices, RAG architectures, and model quantization.",
    icon: "psychology",
    stack: ["PyTorch", "HuggingFace", "OpenCV", "LangChain", "CUDA"],
    metric: "AI & ML RESEARCH TRACK",
    wing: "ai",
  },
  {
    id: "cybersec",
    badge: "DOMAIN • 04",
    badgeBg: "bg-secondary-container",
    badgeText: "text-ink-black",
    title: "CyberSec & CTF",
    description:
      "Offensive security, binary exploitation, reverse engineering, cryptography, web penetration testing, and competitive CTF squads.",
    icon: "security",
    stack: ["Burp Suite", "Ghidra", "Wireshark", "GDB/Pwn"],
    metric: "CTF & SECURITY SQUAD",
    wing: "ai",
  },
  {
    id: "comp-prog",
    badge: "DOMAIN • 05",
    badgeBg: "bg-accent-coral",
    badgeText: "text-surface-white",
    title: "Comp Programming",
    description:
      "Advanced algorithms, dynamic programming, graph theory, mathematical proofs, and speed coding for ICPC and Codeforces.",
    icon: "code_blocks",
    stack: ["C++20 (STL)", "Codeforces", "AtCoder", "CSES Problemset"],
    metric: "ALGORITHMIC PRACTICE SQUAD",
    wing: "design",
  },
  {
    id: "ui-ux",
    badge: "DOMAIN • 06",
    badgeBg: "bg-primary-container",
    badgeText: "text-surface-white",
    title: "UI/UX & Product Design",
    description:
      "High-impact design systems, NeoBrutalist typography, user journey mapping, design tokens, and rapid Figma-to-code pipelines.",
    icon: "palette",
    stack: ["Figma Tokens", "Spline 3D", "Design Systems", "Prototyping"],
    metric: "PRODUCT & UI/UX SQUAD",
    wing: "design",
  },
  {
    id: "cloud-devops",
    badge: "DOMAIN • 07",
    badgeBg: "bg-surface-container-highest",
    badgeText: "text-ink-black",
    title: "Cloud Computing & DevOps",
    description:
      "Server administration, container orchestration, automated release pipelines (CI/CD), and keeping society services deployed across campus environments.",
    icon: "cloud",
    stack: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Linux SysAdmin",
      "Prometheus",
    ],
    metric: "INFRA STATUS: OPERATIONAL",
    wing: "dev",
    isWide: true,
  },
];

type FilterWing = "all" | "dev" | "ai" | "design";

export const DomainFilterGrid: React.FC = () => {
  const [activeWing, setActiveWing] = useState<FilterWing>("all");

  const filterTabs = [
    { id: "all" as FilterWing, label: "ALL", count: 7 },
    { id: "dev" as FilterWing, label: "DEV & CLOUD", count: 3 },
    { id: "ai" as FilterWing, label: "AI & CYBER", count: 2 },
    { id: "design" as FilterWing, label: "DESIGN & CP", count: 2 },
  ];

  const filteredDomains = DOMAINS.filter((d) => {
    if (activeWing === "all") return true;
    return d.wing === activeWing;
  });

  return (
    <div>
      {/* Section Header with NeoBrutalist Badge and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

      {/* Domain Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredDomains.map((domain) => {
          if (domain.isWide) {
            return (
              <div
                key={domain.id}
                className="bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] p-6 flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#121212] transition-all md:col-span-2 lg:col-span-3"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 ${domain.badgeBg} ${domain.badgeText || "text-ink-black"} border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]`}
                      >
                        {domain.badge}
                      </span>
                      <span className="font-label-sm text-label-sm text-accent-mint uppercase font-bold">
                        CAMPUS CLOUD INFRASTRUCTURE
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-ink-black uppercase font-bold">
                      {domain.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {domain.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-surface-container border border-ink-black font-label-sm text-label-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-3 border-t lg:border-t-0 lg:border-l-2 border-ink-black pt-4 lg:pt-0 lg:pl-6">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">
                      {domain.metric}
                    </span>
                    <Link
                      href="/connect"
                      className="px-5 py-2.5 bg-ink-black text-surface-white font-label-md text-label-md uppercase tracking-wider border-2 border-ink-black shadow-[3px_3px_0px_#0037b0] hover:bg-primary active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-bold"
                    >
                      JOIN CLOUD SQUAD →
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={domain.id}
              className="bg-surface-white border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] p-6 flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#121212] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 ${domain.badgeBg} ${domain.badgeText || "text-ink-black"} border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212]`}
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
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                  {domain.metric}
                </span>
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-1 font-label-sm text-label-sm text-ink-black uppercase font-bold hover:text-primary group-hover:underline"
                >
                  ROADMAP →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
