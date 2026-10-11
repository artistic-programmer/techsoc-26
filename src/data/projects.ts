import { ProjectItem } from "@/types";

/**
 * Official repositories from the P-Society GitHub organization (https://github.com/p-society).
 */
export const communityRepositories: ProjectItem[] = [
  {
    id: "typeracer-cli",
    name: "TypeRacer CLI",
    category: "TERMINAL / COMPETITION",
    shortDescription:
      "A terminal-based typing game that lets users practise typing, compete in online races, track performance, and compare high scores.",
    description:
      "A terminal-based typing game and competition tool that lets users practise typing offline, compete in real-time online races, track performance with WPM and time statistics, request rematches, and compare online top-10 high scores.",
    technologies: ["Node.js", "npm"],
    repository: "https://github.com/p-society/typeracer-cli",
  },
  {
    id: "iiitbuzz",
    name: "IIITBuzz",
    category: "STUDENT FORUM",
    shortDescription:
      "A community forum for IIIT Bhubaneswar students to discuss topics, connect with batchmates, and seek advice.",
    description:
      "A student-community and discussion platform for IIIT Bhubaneswar students to discuss topics, connect with batchmates, and seek advice.",
    technologies: [
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Fastify",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Turborepo",
    ],
    repository: "https://github.com/p-society/iiitbuzz",
  },
  {
    id: "chowkidaar",
    name: "Chowkidaar",
    category: "DISCORD AUTOMATION",
    shortDescription:
      "A Discord automation bot for student activity tracking and community challenges, including Days of Productivity.",
    description:
      "A Discord-based community automation and accountability tool for student activity tracking and community challenges including Days of Productivity, featuring activity submissions, streak tracking, user profiles, badge rewards, Discord role allocation, and upcoming contest reminders for Codeforces, LeetCode, and CodeChef.",
    technologies: ["Python", "discord.py", "PostgreSQL", "Docker"],
    repository: "https://github.com/p-society/chowkidaar",
  },
];

export const featuredProjects: ProjectItem[] = communityRepositories;

export const otherProjects: ProjectItem[] = [];

export const projectCategories: string[] = [
  "Terminal & CLI",
  "Community Platforms",
  "Discord Automation",
];
