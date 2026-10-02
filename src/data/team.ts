import { TeamMember, FacultyAdvisor, AlumniMentor } from "@/types";

/**
 * Factual data source: CONTENT/team.md
 * Fields left empty where values are not specified in CONTENT/team.md.
 */

export const coreTeam: TeamMember[] = [
  {
    id: "core-1",
    name: "",
    role: "",
    year: "",
    branch: "",
    domain: "",
    bio: "",
    image: "",
    linkedin: "",
    github: "",
    email: "",
  },
];

export const coordinators: TeamMember[] = [
  {
    id: "coordinator-1",
    name: "",
    role: "",
    year: "",
    branch: "",
    domain: "",
    bio: "",
    image: "",
    linkedin: "",
    github: "",
  },
];

export const domainLeads: TeamMember[] = [
  {
    id: "domain-lead-1",
    name: "",
    domain: "",
    technologies: [],
    year: "",
    branch: "",
    bio: "",
    image: "",
    linkedin: "",
    github: "",
  },
];

export const generalMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "",
    role: "",
    domain: "",
    year: "",
    branch: "",
    image: "",
    linkedin: "",
    github: "",
  },
];

export const facultyAdvisors: FacultyAdvisor[] = [
  {
    id: "advisor-1",
    name: "",
    designation: "",
    department: "",
    image: "",
    profile: "",
  },
];

export const alumniMentors: AlumniMentor[] = [
  {
    id: "alumni-1",
    name: "",
    role: "",
    currentOrganization: "",
    contribution: "",
    image: "",
    linkedin: "",
  },
];
