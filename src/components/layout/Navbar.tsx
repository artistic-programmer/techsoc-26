"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Connect", href: "/connect" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-canvas-cream border-b-[3px] border-ink-black sticky top-0 z-50">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 flex-shrink-0">
              <Image
                src="/brand/emblem.svg"
                alt="TechSoc Emblem"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-ink-black leading-none font-bold">
                Tech<span className="text-primary-container">Soc</span>
              </span>
              <span className="font-label-sm text-[10px] md:text-label-sm uppercase tracking-wider text-on-surface-variant font-bold leading-tight">
                IIIT Bhubaneswar
              </span>
            </div>
          </Link>

          {/* Active Status Badge */}
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full bg-accent-mint border-2 border-ink-black font-label-sm text-[11px] text-ink-black shadow-[2px_2px_0px_#121212] rotate-[-2deg]">
            ACTIVE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 p-1.5 bg-surface-white/70 border-2 border-ink-black rounded-lg shadow-[2px_2px_0px_#121212]">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 font-label-lg text-label-md lg:text-label-lg uppercase tracking-wider rounded transition-all select-none ${
                  active
                    ? "bg-secondary-container text-ink-black border-[2px] border-ink-black shadow-[2px_2px_0px_#121212] font-bold"
                    : "text-on-surface-variant hover:text-ink-black hover:bg-surface-container font-medium border-[2px] border-transparent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-secondary-container text-ink-black font-label-lg text-label-md md:text-label-lg uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none rounded transition-all font-bold"
          >
            [ JOIN TECHSOC ]
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="md:hidden inline-flex items-center justify-center p-2 rounded border-2 border-ink-black bg-surface-white text-ink-black shadow-[2px_2px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-t-2 border-ink-black bg-surface-white px-4 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 font-label-lg uppercase tracking-wider border-2 border-ink-black rounded text-base font-bold transition-all ${
                    active
                      ? "bg-secondary-container text-ink-black shadow-[3px_3px_0px_#121212]"
                      : "bg-canvas-cream text-ink-black hover:bg-surface-container"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/connect"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 py-3 bg-secondary-container text-ink-black font-label-lg uppercase tracking-wider border-[2.5px] border-ink-black shadow-[4px_4px_0px_#121212] font-bold rounded"
          >
            [ JOIN TECHSOC ]
          </Link>
        </div>
      )}
    </header>
  );
};
