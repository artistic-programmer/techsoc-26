import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-canvas-cream border-t-[3px] border-ink-black relative mt-auto">
      {/* Top Status & Marquee Ribbon */}
      <div className="border-b-2 border-ink-black bg-surface-white py-3 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4 font-label-sm text-label-sm uppercase tracking-widest text-ink-black font-bold">
          <span className="flex items-center gap-2">
            BUILD ✦ BREAK ✦ ITERATE ✦ SHIP
          </span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-coral border border-ink-black" />
            <span className="w-3 h-3 rounded-full bg-secondary-container border border-ink-black" />
            <span className="w-3 h-3 rounded-full bg-accent-mint border border-ink-black" />
            <span className="ml-2 font-mono">STATUS: PRODUCTION READY</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand/emblem.svg"
                  alt="TechSoc Emblem"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-ink-black font-bold">
                Tech<span className="text-primary-container">Soc</span>
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              The Premier Technical Society of IIIT Bhubaneswar. Fostering a
              high-voltage engineering culture built on core pillars: Build.
              Learn. Compete. Connect.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.github || "#"}
                aria-label="GitHub"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  terminal
                </span>
              </a>
              <a
                href={siteConfig.socials.discord || "#"}
                aria-label="Discord"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  forum
                </span>
              </a>
              <a
                href={siteConfig.socials.linkedin || "#"}
                aria-label="LinkedIn"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  groups
                </span>
              </a>
              <Link
                href="/connect"
                aria-label="Connect"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  link
                </span>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-headline-sm text-[16px] leading-[22px] uppercase text-ink-black pb-1 border-b-2 border-ink-black inline-block font-bold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 font-label-md text-label-md uppercase tracking-wider font-semibold">
              {[
                { name: "Home", href: "/" },
                { name: "Community", href: "/community" },
                { name: "Events", href: "/events" },
                { name: "Team", href: "/team" },
                { name: "Connect", href: "/connect" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Domains & Wings (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-headline-sm text-[16px] leading-[22px] uppercase text-ink-black pb-1 border-b-2 border-ink-black inline-block font-bold">
              Domains &amp; Wings
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Web Dev",
                "App Dev",
                "AI / ML",
                "Cloud & DevOps",
                "CyberSec",
                "CP & DSA",
                "UI/UX Design",
                "GDG Campus",
              ].map((domain) => (
                <Link
                  key={domain}
                  href="/community"
                  className="px-2.5 py-1 bg-surface-white border-2 border-ink-black font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all"
                >
                  {domain}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: HQ & Presence (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-headline-sm text-[16px] leading-[22px] uppercase text-ink-black pb-1 border-b-2 border-ink-black inline-block font-bold">
              HQ &amp; Presence
            </h3>
            <div className="p-4 bg-surface-white border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] rounded">
              <p className="font-body-sm text-body-sm text-ink-black font-bold">
                IIIT Bhubaneswar Campus
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Gothapatna, PO: Malipada
                <br />
                Bhubaneswar, Odisha 751003
              </p>
              <div className="mt-3 pt-3 border-t-2 border-ink-black flex items-center justify-between text-ink-black font-label-sm text-label-sm">
                <span className="flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-accent-mint" />
                  LABS OPEN
                </span>
                <span className="font-bold">CAMPUS CHAPTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Ribbon */}
      <div className="border-t-[3px] border-ink-black bg-secondary-container py-4 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body-sm text-body-sm text-ink-black font-semibold">
            © 2026 TechSociety, IIIT Bhubaneswar. Built with passion by
            students, for students.
          </p>
          <div className="flex items-center gap-4 font-label-sm text-label-sm uppercase font-bold text-ink-black">
            <a href="#" className="hover:underline">
              Code of Conduct
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Open Source
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Brand Kit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
