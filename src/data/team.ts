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

/**
 * Current team roster (images live in /public/images/team).
 * `position` tunes object-position for photos with unusual framing.
 * Domain `members` come from the TechSoc 2026 recruitment list (names only).
 */
export interface RosterMember {
  name: string;
  image?: string;
  position?: string;
}

export interface ExecutiveRole {
  role: string;
  members: RosterMember[];
}

export interface DomainTeam {
  id: string;
  domain: string;
  icon: string;
  badgeBg: string;
  leads: RosterMember[];
  members?: string[];
}

export interface LabeledMember extends RosterMember {
  label: string;
}

export const facultyMentors: RosterMember[] = [
  { name: "Ajaya Kumar Dash", image: "/images/team/akdash.jpeg" },
  { name: "Bibikananda Panda", image: "/images/team/bpanda.jpeg" },
];

export const executiveBoard: ExecutiveRole[] = [
  {
    role: "Secretary",
    members: [{ name: "Spandan Hota", image: "/images/team/spandan.jpg" }],
  },
  {
    role: "Joint Secretary",
    members: [
      { name: "Aman Raj", image: "/images/team/aman.jpeg" },
      { name: "Tirtha Desai", image: "/images/team/tirtha.jpg" },
    ],
  },
];

export const gdgLeads: LabeledMember[] = [
  { name: "Hari Kishore", label: "Final Year Lead", image: "/images/team/hari.png" },
  { name: "Aman Raj", label: "Pre-Final Year Lead", image: "/images/team/aman.jpeg" },
  { name: "Pavitra Singh", label: "Pre-Final Year Lead", image: "/images/team/pavitra.jpg" },
];

export const domainTeams: DomainTeam[] = [
  {
    id: "app-dev",
    domain: "App Dev",
    icon: "smartphone",
    badgeBg: "bg-primary-fixed",
    leads: [{ name: "Kumar Sundaram", image: "/images/team/appdev.jpg" }],
    members: ["Likhith Kumar S", "Pawan Sharma", "Anshu Kumar", "Aman Deep Pandit"],
  },
  {
    id: "web-dev",
    domain: "Web Dev",
    icon: "code",
    badgeBg: "bg-secondary-fixed",
    leads: [
      { name: "Md Tanim Islam", image: "/images/team/tanim.png", position: "50% 20%" },
      { name: "Sambhu Prasad", image: "/images/team/sambhu.png" },
    ],
    members: [
      "Ajit Kumar Panigrahi",
      "Garvit Pahuja",
      "G. Deewakar Rao",
      "Laxmi Bagh",
      "Bhavesh Bhatera",
      "Sajid Hameed Wani",
      "Mohit Ranjan",
      "Satyam Subham Mohanty",
      "Pratyush Kumar Sio",
    ],
  },
  {
    id: "blockchain",
    domain: "Blockchain",
    icon: "token",
    badgeBg: "bg-tertiary-fixed",
    leads: [{ name: "Subham Saraf", image: "/images/team/blockchain.jpg" }],
    members: ["Swastika Biswal"],
  },
  {
    id: "ai-ml",
    domain: "AI/ML",
    icon: "psychology",
    badgeBg: "bg-primary-fixed",
    leads: [
      { name: "Shreyas", image: "/images/team/shreyas.jpg" },
      { name: "Alok Triphaty", image: "/images/team/ai.png", position: "75% 52%" },
    ],
    members: [
      "Babar Mohiudin Mir",
      "Aditya Narayan",
      "Preetika Mishra",
      "Om Gupta",
      "Md Rehan Fazal",
      "Krishna Vishnoi",
      "Soumyakanta Sahu",
      "Mahika Singh",
      "Ankit Singh",
      "Ayush Gupta",
      "Amitesh Sarangi",
      "Namrata Sahoo",
      "Santoshi Swain",
      "Soumya Ranjan Behera",
      "Ojas Raj",
      "Ayushman Dash",
    ],
  },
  {
    id: "cp",
    domain: "CP",
    icon: "calculate",
    badgeBg: "bg-secondary-fixed",
    leads: [
      { name: "Yug", image: "/images/team/yug.jpg" },
      { name: "Chandra Shekhar", image: "/images/team/sekhar.jpg" },
    ],
    members: [
      "Shubranshu Kumar Mishra",
      "Aryan Verma",
      "Prakash Kumar",
      "Preeti Pragyan Mishra",
      "Hariom Joshi",
      "Chandan Kumar",
      "Vaibhav Maheshwari",
      "Ashika Choudhary",
    ],
  },
  {
    id: "infosec",
    domain: "Infosec",
    icon: "security",
    badgeBg: "bg-tertiary-fixed",
    leads: [{ name: "Ankush", image: "/images/team/infosec.jpg" }],
    members: [
      "Mohd Arhaan Siddiqui",
      "Devank Joshi",
      "Suman Roy",
      "Jagadish Nayak",
      "Misbah Banday",
      "Pranjal Raj",
      "R Yamuna",
      "Ashutosh Mishra",
      "Akshay Kumar",
    ],
  },
  {
    id: "design",
    domain: "Design",
    icon: "palette",
    badgeBg: "bg-primary-fixed",
    leads: [{ name: "Jyoti Shankar", image: "/images/team/design.jpg" }],
    members: ["Aditi Samal", "Rudra Kedia", "Shree Das", "Samyabrata Jana"],
  },
  {
    id: "management",
    domain: "Management",
    icon: "event_note",
    badgeBg: "bg-secondary-fixed",
    leads: [
      { name: "Samikshya", image: "/images/team/samikshya.jpg" },
      { name: "Viraj", image: "/images/team/viraj.png" },
    ],
  },
  {
    id: "social-media",
    domain: "Social Media",
    icon: "campaign",
    badgeBg: "bg-tertiary-fixed",
    leads: [
      { name: "Binimesha", image: "/images/team/binimesha.jpg" },
      { name: "Pavitra Singh", image: "/images/team/pavitra.jpg" },
    ],
  },
];

export const psocLeads: RosterMember[] = [
  { name: "Hrushikesh Kar", image: "/images/team/psoc.jpg" },
  { name: "Md Tanim Islam", image: "/images/team/tanim.png", position: "50% 20%" },
];

/** Unique head-count across every group on the team page. */
export const totalTeamSize = new Set<string>([
  ...facultyMentors.map((m) => m.name),
  ...executiveBoard.flatMap((r) => r.members.map((m) => m.name)),
  ...gdgLeads.map((m) => m.name),
  ...psocLeads.map((m) => m.name),
  ...domainTeams.flatMap((d) => [...d.leads.map((m) => m.name), ...(d.members ?? [])]),
]).size;
