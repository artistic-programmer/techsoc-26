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
  linkedin?: string;
  email?: string;
}

export interface ExecutiveRole {
  role: string;
  members: RosterMember[];
}

export interface DomainTeam {
  id: string;
  domain: string;
  fullName?: string;
  description?: string;
  icon: string;
  badgeBg: string;
  leads: RosterMember[];
  members?: string[];
  memberUrls?: Record<string, string>;
  memberProfileUrls?: Record<string, string>;
  roadmapUrl?: string;
  stack?: string[];
  wing?: "dev" | "ai" | "design";
}

export interface LabeledMember extends RosterMember {
  label: string;
}

export const DEFAULT_MEMBER_PLACEHOLDER = "/images/team/PlaceHolder.jpg";

export const memberPhotoMap: Record<string, string> = {
  "Anshu Kumar": "/images/team/Anshu_Kumar.jpeg",
  "Aman Deep Pandit": "/images/team/Aman Deep Pandit.jpg",
  "Garvit Pahuja": "/images/team/Garvit G.jpg",
  "Garvit": "/images/team/Garvit G.jpg",
  "Bhavesh Bhatera": "/images/team/Bhavesh Bhatera.webp",
  "Sajid Hameed Wani": "/images/team/Sajid Hameed Wani.jpg",
  "Mohit Ranjan": "/images/team/Mohit Ranjan.jpg",
  "Pratyush Kumar Sio": "/images/team/Pratyush Kumar Sio.jpeg",
  "Babar Mohiudin Mir": "/images/team/Babar Mohuidin Mir.png",
  "Preetika Mishra": "/images/team/Preetika Mishra.jpeg",
  "Om Gupta": "/images/team/Om_Gupta.jpeg",
  "Krishna Vishnoi": "/images/team/Krishna_Vishnoi.jpeg",
  "Soumyakanta Sahu": "/images/team/Soumyakanta Sahu.jpg",
  "Ankit Singh": "/images/team/Ankit Kumar Singh.jpg",
  "Ayush Gupta": "/images/team/Ayush Gupta.jpg",
  "Amitesh Sarangi": "/images/team/Amites_Sarangi.jpeg",
  "Ojas Raj": "/images/team/Ojas_Raj.jpeg",
  "Shubranshu Kumar Mishra": "/images/team/Shubranshu Kumar Mishra.png",
  "Aryan Verma": "/images/team/Aryan Verma.jpeg",
  "Preeti Pragyan Mishra": "/images/team/Preeti Pragyan Mishra.jpg",
  "Hariom Joshi": "/images/team/Hariom Joshi.png",
  "Vaibhav Maheshwari": "/images/team/Vaibhav Maheshwari.jpg",
  "Mohd Arhaan Siddiqui": "/images/team/Mohd Arhaan Siddiqui.jpeg",
  "Devank Joshi": "/images/team/devank_joshi.jpg",
  "Pranjal Raj": "/images/team/Pranjal_Raj.jpeg",
  "R Yamuna": "/images/team/Yamuna R.png",
  "Yamuna R": "/images/team/Yamuna R.png",
  "Yamuna": "/images/team/Yamuna R.png",
  "Ashutosh Mishra": "/images/team/Ashutosh Mishra.png",
  "Ashutosh": "/images/team/Ashutosh Mishra.png",
  "Akshay Kumar": "/images/team/Akshay Kumar.jpg",
};

export const getMemberPhoto = (name: string): string => {
  const direct = memberPhotoMap[name];
  if (direct) return direct;
  const normalized = name.trim().toLowerCase();
  const match = Object.entries(memberPhotoMap).find(
    ([k]) => k.trim().toLowerCase() === normalized
  );
  return match ? match[1] : DEFAULT_MEMBER_PLACEHOLDER;
};

export const getMemberUrl = (team: DomainTeam, name: string): string | undefined => {
  const normalized = name.trim().toLowerCase();
  const map = team.memberUrls || team.memberProfileUrls;
  if (map) {
    if (map[name]) return map[name];
    const match = Object.entries(map).find(
      ([k]) => k.trim().toLowerCase() === normalized
    );
    if (match) return match[1];
  }
  if (normalized === "anshu kumar") {
    return "https://www.linkedin.com/in/artistic-programmer/";
  }
  return undefined;
};

/**
 * Display priority configuration for member preview in team roster gallery.
 * For each domain, specifies member names to prioritize in preview positions.
 */
export const domainMemberDisplayPriority: Record<string, string[]> = {
  "app-dev": ["Anshu Kumar", "Aman Deep Pandit"],
  "web-dev": ["Mohit Ranjan", "Anshu Kumar", "Gravity"],
  "ai-ml": ["Preetika Mishra", "Krishna Vishnoi", "Ayush Gupta"],
  "cp": ["Aryan Verma", "Preeti Pragyan Mishra", "Hariom Joshi"],
  "infosec": ["Pranjal", "Mohd Arhaan Siddiqui", "R Yamuna"],
};

/**
 * Orders a domain's members putting prioritized members first in preview order,
 * while preserving the relative order of all remaining members.
 * Non-existent requested members are ignored without modifying the roster.
 */
export const getOrderedDomainMembers = (
  domainId: string,
  members: string[] = []
): string[] => {
  const priorities = domainMemberDisplayPriority[domainId];
  if (!priorities || priorities.length === 0) {
    return [...members];
  }

  const result: string[] = [];
  const usedIndices = new Set<number>();

  for (const req of priorities) {
    const trimmedReq = req.trim().toLowerCase();

    // 1. Exact match (case-insensitive, trimmed)
    let matchedIdx = members.findIndex(
      (m, idx) => !usedIndices.has(idx) && m.trim().toLowerCase() === trimmedReq
    );

    // 2. Prefix / first-name word boundary match (e.g., "Pranjal" matching "Pranjal Raj")
    if (matchedIdx === -1) {
      matchedIdx = members.findIndex((m, idx) => {
        if (usedIndices.has(idx)) return false;
        const normM = m.trim().toLowerCase();
        return normM.startsWith(trimmedReq + " ") || normM.endsWith(" " + trimmedReq);
      });
    }

    if (matchedIdx !== -1) {
      result.push(members[matchedIdx]);
      usedIndices.add(matchedIdx);
    }
  }

  // Preserve relative order of all remaining members
  members.forEach((m, idx) => {
    if (!usedIndices.has(idx)) {
      result.push(m);
    }
  });

  return result;
};

export const facultyMentors: RosterMember[] = [
  { name: "Ajaya Kumar Dash", image: "/images/team/akdash.jpeg" },
  { name: "Bibikananda Panda", image: "/images/team/bpanda.jpeg" },
];

export const executiveBoard: ExecutiveRole[] = [
  {
    role: "Secretary",
    members: [{ name: "Spandan Hota", image: "/images/team/spandan.jpg", linkedin: "https://www.linkedin.com/in/spandan-hota" }],
  },
  {
    role: "Joint Secretary",
    members: [
      { name: "Aman Raj", image: "/images/team/aman.jpeg", linkedin: "https://www.linkedin.com/in/aman-raj-xd", email: "b124011@iiit-bh.ac.in" },
      { name: "Tirtha Desai", image: "/images/team/tirtha.jpg", linkedin: "https://www.linkedin.com/in/tirtha-desai-a16347321" },
    ],
  },
];

export const gdgLeads: LabeledMember[] = [
  { name: "Hari Kishore", label: "Final Year Lead", image: "/images/team/hari.png" },
  { name: "Aman Raj", label: "Pre-Final Year Lead", image: "/images/team/aman.jpeg", linkedin: "https://www.linkedin.com/in/aman-raj-xd", email: "b124011@iiit-bh.ac.in" },
  { name: "Pavitra Singh", label: "Pre-Final Year Lead", image: "/images/team/pavitra.jpg", linkedin: "https://www.linkedin.com/in/pavitra04" },
];

export const domainTeams: DomainTeam[] = [
  {
    id: "app-dev",
    domain: "App Dev",
    fullName: "App Development",
    description: "Cross-platform mobile apps, native device integration, offline architectures, and modern Android/iOS development.",
    icon: "smartphone",
    badgeBg: "bg-primary-fixed",
    roadmapUrl: "https://roadmap.sh/android",
    stack: ["Flutter", "Kotlin", "Jetpack Compose", "Android SDK"],
    wing: "dev",
    leads: [{ name: "Kumar Sundaram", image: "/images/team/appdev.jpg" }],
    members: ["Anshu Kumar", "Likhith Kumar S", "Pawan Sharma", "Aman Deep Pandit"],
    memberUrls: {
      "Anshu Kumar": "https://www.linkedin.com/in/artistic-programmer/",
      "Aman Deep Pandit": "https://www.linkedin.com/in/amandeeppandit",
    },
  },
  {
    id: "web-dev",
    domain: "Web Dev",
    fullName: "Web Development",
    description: "Full-stack application architecture, performant frontends, serverless APIs, edge compute, and scalable web apps.",
    icon: "code",
    badgeBg: "bg-secondary-fixed",
    roadmapUrl: "https://roadmap.sh/frontend",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind", "Node.js"],
    wing: "dev",
    leads: [
      {
        name: "Md Tanim Islam",
        image: "/images/team/tanim.png",
        position: "50% 20%",
        linkedin: "https://www.linkedin.com/in/tanim10",
      },
      {
        name: "Sambhu Prasad",
        image: "/images/team/sambhu.png",
        linkedin: "https://www.linkedin.com/in/sambhu-prasad-verma",
      },
    ],
    members: [
      "Anshu Kumar",
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
    memberUrls: {
      "Anshu Kumar": "https://www.linkedin.com/in/artistic-programmer/",
      "Garvit Pahuja": "https://www.linkedin.com/in/garvitpahuja98",
      "Garvit": "https://www.linkedin.com/in/garvitpahuja98",
      "Bhavesh Bhatera": "https://www.linkedin.com/in/bhaveshbhatera",
      "Sajid Hameed Wani": "https://www.linkedin.com/in/sajid-hameed-wani-a18467378",
      "Mohit Ranjan": "https://www.linkedin.com/in/mohit-ranjan-903877370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Pratyush Kumar Sio": "https://www.linkedin.com/in/pratyush-kumar-sio-116052388/?isSelfProfile=true",
    },
  },
  {
    id: "blockchain",
    domain: "Blockchain",
    fullName: "Blockchain & Web3",
    description: "Decentralized protocols, smart contract development, EVM architecture, and cryptographic tokens.",
    icon: "token",
    badgeBg: "bg-tertiary-fixed",
    roadmapUrl: "https://roadmap.sh/blockchain",
    stack: ["Solidity", "EVM", "Ethers.js", "Hardhat"],
    wing: "dev",
    leads: [
      {
        name: "Subham Saraf",
        image: "/images/team/blockchain.jpg",
        linkedin: "https://www.linkedin.com/in/shubham-saraf-396a72332/",
      },
    ],
    members: ["Swastika Biswal"],
  },
  {
    id: "ai-ml",
    domain: "AI/ML",
    fullName: "AI / Machine Learning",
    description: "Deep learning pipelines, LLM fine-tuning, computer vision on edge devices, and intelligent agent workflows.",
    icon: "psychology",
    badgeBg: "bg-primary-fixed",
    roadmapUrl: "https://roadmap.sh/ai-engineer",
    stack: ["PyTorch", "HuggingFace", "Python", "OpenCV", "LangChain"],
    wing: "ai",
    leads: [
      { name: "Shreyas", image: "/images/team/shreyas.jpg" },
      {
        name: "Alok Triphaty",
        image: "/images/team/ai.png",
        position: "75% 52%",
        linkedin: "https://www.linkedin.com/in/alok-ranjan-tripathy-833678336?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
    members: [
      "Anshu Kumar",
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
    memberUrls: {
      "Anshu Kumar": "https://www.linkedin.com/in/artistic-programmer/",
      "Babar Mohiudin Mir": "https://www.linkedin.com/in/babar-mohiudin-mir-32bb18304",
      "Preetika Mishra": "https://linkedin.com/in/preetika-mishra-647230383",
      "Krishna Vishnoi": "https://www.linkedin.com/in/krishna-vishnoi-353289420?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Soumyakanta Sahu": "https://www.linkedin.com/in/soumyakanta-sahu-402a11428?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Ankit Singh": "https://www.linkedin.com/in/ankit-singh-73b258367?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Ayush Gupta": "https://www.linkedin.com/in/ayush-gupta-655624394/",
      "Amitesh Sarangi": "https://www.linkedin.com/in/amitesh-sarangi-933672371/",
      "Ojas Raj": "https://www.linkedin.com/in/ojasraj",
    },
  },
  {
    id: "cp",
    domain: "CP",
    fullName: "Competitive Programming & DSA",
    description: "Advanced algorithms, dynamic programming, graph theory, mathematical proofs, and speed coding.",
    icon: "calculate",
    badgeBg: "bg-secondary-fixed",
    roadmapUrl: "https://roadmap.sh/datastructures-and-algorithms",
    stack: ["C++20 (STL)", "Codeforces", "AtCoder", "Algorithms"],
    wing: "design",
    leads: [
      {
        name: "Yug",
        image: "/images/team/yug.jpg",
        linkedin: "https://www.linkedin.com/in/yugagarwal005/",
      },
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
    memberUrls: {
      "Shubranshu Kumar Mishra": "https://www.linkedin.com/in/shubranshu-mishra-0608092b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Aryan Verma": "https://www.linkedin.com/in/aryan-verma-58177a2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "Preeti Pragyan Mishra": "https://linkedin.com/in/preeti-pragyan-mishra-05382a31b",
      "Hariom Joshi": "https://linkedin.com/in/hariomjoshi45",
      "Vaibhav Maheshwari": "https://www.linkedin.com/in/vaibhav-maheshwari-836b14381",
    },
  },
  {
    id: "infosec",
    domain: "Infosec",
    fullName: "Cybersecurity & CTF",
    description: "Offensive security, binary exploitation, reverse engineering, cryptography, and competitive CTF squads.",
    icon: "security",
    badgeBg: "bg-tertiary-fixed",
    roadmapUrl: "https://roadmap.sh/cyber-security",
    stack: ["Burp Suite", "Ghidra", "Wireshark", "GDB/Pwn", "Cryptography"],
    wing: "ai",
    leads: [
      {
        name: "Ankush",
        image: "/images/team/infosec.jpg",
        linkedin: "https://www.linkedin.com/in/ankush-kumar-mohapatra-a393b428a/",
      },
    ],
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
    memberUrls: {
      "Mohd Arhaan Siddiqui": "https://www.linkedin.com/in/mohd-arhaan-siddiqui-279aba373/?isSelfProfile=true",
      "Devank Joshi": "https://www.linkedin.com/in/devank-joshi-2811933ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "R Yamuna": "https://www.linkedin.com/in/yamuna-r-a2a556416",
      "Yamuna": "https://www.linkedin.com/in/yamuna-r-a2a556416",
      "Ashutosh Mishra": "https://www.linkedin.com/in/ashutosh-mishra-algopsycho77",
      "Ashutosh": "https://www.linkedin.com/in/ashutosh-mishra-algopsycho77",
      "Akshay Kumar": "https://www.linkedin.com/in/akshay-kumar-5779b5383?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: "design",
    domain: "Design",
    fullName: "UI/UX & Product Design",
    description: "Design systems, Neo-Brutalist typography, user journey mapping, design tokens, and rapid Figma-to-code pipelines.",
    icon: "palette",
    badgeBg: "bg-primary-fixed",
    roadmapUrl: "https://roadmap.sh/ux-design",
    stack: ["Figma Tokens", "Design Systems", "Prototyping", "NeoBrutalism"],
    wing: "design",
    leads: [{ name: "Jyoti Shankar", image: "/images/team/design.jpg" }],
    members: ["Aditi Samal", "Rudra Kedia", "Shree Das", "Samyabrata Jana"],
  },
  {
    id: "management",
    domain: "Management",
    fullName: "Operations & Management",
    description: "Event orchestration, hackathon logistics, community outreach, and sponsor partnerships.",
    icon: "event_note",
    badgeBg: "bg-secondary-fixed",
    stack: ["Logistics", "Operations", "Event Coordination"],
    wing: "design",
    leads: [
      { name: "Samikshya", image: "/images/team/samikshya.jpg", linkedin: "https://www.linkedin.com/in/samikshya-purohit-911a59348" },
      { name: "Viraj", image: "/images/team/viraj.png", linkedin: "https://www.linkedin.com/in/viraj-shukla-4286ba3ba" },
    ],
  },
  {
    id: "social-media",
    domain: "Social Media",
    fullName: "Social Media & Public Relations",
    description: "Community storytelling, brand voice, visual media campaigns, and technical event announcements.",
    icon: "campaign",
    badgeBg: "bg-tertiary-fixed",
    stack: ["Branding", "Content Strategy", "Digital Outreach"],
    wing: "design",
    leads: [
      { name: "Binimesha", image: "/images/team/binimesha.jpg", linkedin: "https://www.linkedin.com/in/binimesha-naisargika-26b176291" },
      { name: "Pavitra Singh", image: "/images/team/pavitra.jpg", linkedin: "https://www.linkedin.com/in/pavitra04" },
    ],
  },
];

export const psocLeads: RosterMember[] = [
  { name: "Hrushikesh Kar", image: "/images/team/psoc.jpg" },
  {
    name: "Md Tanim Islam",
    image: "/images/team/tanim.png",
    position: "50% 20%",
    linkedin: "https://www.linkedin.com/in/tanim10",
  },
];

/** Unique head-count across every group on the team page. */
export const totalTeamSize = new Set<string>([
  ...facultyMentors.map((m) => m.name),
  ...executiveBoard.flatMap((r) => r.members.map((m) => m.name)),
  ...gdgLeads.map((m) => m.name),
  ...psocLeads.map((m) => m.name),
  ...domainTeams.flatMap((d) => [...d.leads.map((m) => m.name), ...(d.members ?? [])]),
]).size;
