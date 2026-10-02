import { CommunityProgram, GDGInfo, CommunityStats, ProjectItem } from "@/types";

/**
 * Factual data source: CONTENT/community.md
 * Fields left empty where values are not specified in CONTENT/community.md.
 */

export const communityOverview: string = "";

export const gdgInfo: GDGInfo = {
  title: "GDG on Campus",
  description: "",
  activities: [],
};

export const communityPrograms: CommunityProgram[] = [
  {
    id: "program-1",
    name: "",
    description: "",
    status: "",
  },
];

export const communityProducts: ProjectItem[] = [
  {
    id: "community-product-1",
    name: "",
    description: "",
    status: "",
    technologies: [],
    link: "",
  },
];

export const communityStats: CommunityStats = {
  activeMembers: "",
  domains: "",
  projects: "",
  events: "",
};

export const galleryInfo: string = "";
