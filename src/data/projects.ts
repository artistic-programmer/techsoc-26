import { ProjectItem } from "@/types";

/**
 * Official repositories from the P-Society GitHub organization (https://github.com/p-society).
 */
export const communityRepositories: ProjectItem[] = [
  {
    id: "iiitbuzz",
    name: "IIITBuzz",
    category: "Campus Community",
    shortDescription:
      "A community forum built for IIIT Bhubaneswar students to discuss topics, connect with batchmates, and seek advice. A community created by students for students.",
    description:
      "A community forum built for IIIT Bhubaneswar students to discuss topics, connect with batchmates, and seek advice. A community created by students for students.",
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
    id: "typeracer-cli",
    name: "TypeRacer CLI",
    category: "Developer Tools",
    shortDescription:
      "A terminal-based typing game featuring offline practice, online typing races, WPM and time statistics, rematches, and online top-10 high scores.",
    description:
      "A terminal-based typing game featuring offline practice, online typing races, WPM and time statistics, rematches, and online top-10 high scores.",
    technologies: ["Node.js", "npm"],
    repository: "https://github.com/p-society/typeracer-cli",
  },
  {
    id: "chowkidaar",
    name: "Chowkidaar",
    category: "Community Automation",
    shortDescription:
      "A Discord bot for student activity tracking and community challenges, supporting submissions, streaks, profile commands, badge rewards, role allocation, and programming-contest reminders.",
    description:
      "A Discord bot for student activity tracking and community challenges, supporting submissions, streaks, profile commands, badge rewards, role allocation, and programming-contest reminders.",
    technologies: ["Python", "discord.py", "PostgreSQL", "Docker"],
    repository: "https://github.com/p-society/chowkidaar",
  },
];

export const featuredProjects: ProjectItem[] = communityRepositories;

export const otherProjects: ProjectItem[] = [];

export const projectCategories: string[] = [
  "Campus Community",
  "Developer Tools",
  "Community Automation",
];
