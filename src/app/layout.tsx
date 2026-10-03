import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Society IIIT Bhubaneswar",
  icons: {
    icon: [{ url: "/brand/emblem.svg", type: "image/svg+xml" }],
    shortcut: "/brand/emblem.svg",
    apple: "/brand/emblem.svg",
  },
  description:
    "Where students build the future. The premier engineering collective and technical society at IIIT Bhubaneswar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-canvas-cream text-ink-black flex flex-col font-sans antialiased selection:bg-secondary-container selection:text-ink-black">
        {children}
      </body>
    </html>
  );
}
