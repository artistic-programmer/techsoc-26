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
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  terminal
                </span>
              </a>
              <a
                href={siteConfig.socials.discord || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="p-2 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] hover:bg-secondary-container transition-all flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-[20px] text-ink-black">
                  forum
                </span>
              </a>
              <a
                href={siteConfig.socials.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
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
              <div className="mt-2.5">
                <a
                  href="https://maps.app.goo.gl/qCtiPJFhZjEMqiau9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-sm text-[12px] font-bold text-ink-black hover:text-primary transition-colors inline-flex items-center gap-1 underline underline-offset-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>
                  View on Maps
                  <span className="material-symbols-outlined text-[13px]">
                    open_in_new
                  </span>
                </a>
              </div>
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

      {/* Bottom Ribbon with DESIGNED & BUILT BY Section */}
      <div className="border-t-[3px] border-ink-black bg-secondary-container py-5 sm:py-6 px-3 sm:px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-5 sm:gap-6">
          {/* Section: DESIGNED & BUILT BY */}
          <div className="flex flex-col items-center gap-3">
            <div className="px-3 py-1 bg-surface-white border-2 border-ink-black shadow-[2px_2px_0px_#121212] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ink-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
              <span>DESIGNED &amp; BUILT BY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
            </div>

            {/* 2 Equal Contributor Cards: Kept side-by-side on both Desktop and Mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-xl">
              {/* Contributor Card: ARTISTIC PROGRAMMER */}
              <div className="w-full flex flex-col justify-between items-center text-center p-2.5 sm:p-4 bg-surface-white border-2 border-ink-black rounded-sm shadow-[2px_2px_0px_#121212] sm:shadow-[3px_3px_0px_#121212] gap-2 sm:gap-3 transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212]">
                <a
                  href="https://github.com/artistic-programmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-tight text-ink-black hover:text-primary transition-colors leading-tight text-center"
                >
                  ARTISTIC PROGRAMMER
                </a>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <a
                    href="https://github.com/artistic-programmer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Artistic Programmer GitHub"
                    title="GitHub"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-surface-white border-1.5 sm:border-2 border-ink-black rounded-sm shadow-[1.5px_1.5px_0px_#121212] flex items-center justify-center text-ink-black hover:bg-ink-black hover:text-surface-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/artistic-programmer-027b00409"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Artistic Programmer LinkedIn"
                    title="LinkedIn"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-surface-white border-1.5 sm:border-2 border-ink-black rounded-sm shadow-[1.5px_1.5px_0px_#121212] flex items-center justify-center text-ink-black hover:bg-[#0077b5] hover:text-surface-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/artistic_programmer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Artistic Programmer Instagram"
                    title="Instagram"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-surface-white border-1.5 sm:border-2 border-ink-black rounded-sm shadow-[1.5px_1.5px_0px_#121212] flex items-center justify-center text-ink-black hover:bg-[#e1306c] hover:text-surface-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contributor Card: R YAMUNA */}
              <div className="w-full flex flex-col justify-between items-center text-center p-2.5 sm:p-4 bg-surface-white border-2 border-ink-black rounded-sm shadow-[2px_2px_0px_#121212] sm:shadow-[3px_3px_0px_#121212] gap-2 sm:gap-3 transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212]">
                <a
                  href="https://github.com/yamuna898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-tight text-ink-black hover:text-primary transition-colors leading-tight text-center"
                >
                  R YAMUNA
                </a>

                {/* Social Links (GitHub & Instagram only, NO LinkedIn) */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <a
                    href="https://github.com/yamuna898"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="R Yamuna GitHub"
                    title="GitHub"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-surface-white border-1.5 sm:border-2 border-ink-black rounded-sm shadow-[1.5px_1.5px_0px_#121212] flex items-center justify-center text-ink-black hover:bg-ink-black hover:text-surface-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/yamuna.898/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="R Yamuna Instagram"
                    title="Instagram"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-surface-white border-1.5 sm:border-2 border-ink-black rounded-sm shadow-[1.5px_1.5px_0px_#121212] flex items-center justify-center text-ink-black hover:bg-[#e1306c] hover:text-surface-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="border-t-2 border-ink-black/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-body-sm text-body-sm text-ink-black font-semibold">
              © 2026 Tech Society IIIT Bhubaneswar. Built with passion by
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
      </div>
    </footer>
  );
};
