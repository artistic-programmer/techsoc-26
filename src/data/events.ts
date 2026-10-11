import { EventItem, TechnicalSession, MentorshipProgram } from "@/types";

/**
 * Factual data source:
 * - CONTENT/events.md
 * - Official D³ website: https://d3fest.techsoc-iiitbbsr.com/
 * Dates, times, and registration details marked TBA per official source.
 */

export const d3FlagshipEvent: EventItem = {
  id: "d3-techno-fest-2026",
  name: "D³ Techno Fest 2026",
  title: "D³ TECHNO FEST 2026",
  slug: "d3",
  theme: "Dream. Dare. Develop.",
  category: "flagship",
  image: "/images/events/d3-fest-logo.png",
  organizer: "TechSoc × The Automation and Robotics Society (TARS)",
  shortDescription: "Four-day technology festival at IIIT Bhubaneswar organized by TechSoc × TARS.",
  shortLabel: "FOUR-DAY TECHNOLOGY FESTIVAL",
  description:
    "D³ Techno Fest 2026 is a four-day technology festival at IIIT Bhubaneswar, bringing together students, builders, innovators and robotics enthusiasts. Inspired by retro arcade aesthetics and futuristic innovation, D³ celebrates technology, management, entrepreneurship, creativity and collaboration through 17 official events and activities.",
  venue: "IIIT Bhubaneswar, Gothapatna, Malipada, Bhubaneswar, Odisha – 751003",
  date: "TBA",
  time: "TBA",
  status: "upcoming",
  registrationLink: "https://d3fest.techsoc-iiitbbsr.com/",
  externalLink: "https://d3fest.techsoc-iiitbbsr.com/",
  highlights: [
    "Four-day technology festival",
    "17 official events & activities",
    "Organized by TechSoc × The Automation and Robotics Society (TARS)",
    "Venue: IIIT Bhubaneswar, Gothapatna, Malipada, Bhubaneswar, Odisha – 751003",
  ],
  tags: ["Flagship Fest", "TechSoc × TARS", "Four Days", "17 Official Events"],
};

export interface D3HistoricalStats {
  title: string;
  badge: string;
  note: string;
  stats: { label: string; value: string; description: string }[];
}

export const d32025Highlights: D3HistoricalStats = {
  title: "D³ FEST 2025 HIGHLIGHTS",
  badge: "PREVIOUS EDITION BENCHMARK",
  note: "Historical brochure-reported figures from the 2025 edition — the highest-attendance edition in IIIT Bhubaneswar's history. Confirmed 2026 dates and schedule remain TBA.",
  stats: [
    {
      value: "3,200+",
      label: "REGISTERED PARTICIPANTS",
      description: "Highest-attendance edition in campus history",
    },
    {
      value: "70+",
      label: "COLLEGES REPRESENTED",
      description: "Campuses from across the country",
    },
    {
      value: "15+ STATES",
      label: "FLAGSHIP PARTICIPATION",
      description: "500+ registrations for flagship Rewind & Recode",
    },
    {
      value: "12L+",
      label: "UNSTOP IMPRESSIONS",
      description: "Platform discovery & competition engagement",
    },
    {
      value: "5L+",
      label: "SOCIAL MEDIA REACH",
      description: "Reels & posts received between 30K and 200K+ views",
    },
    {
      value: "4L+",
      label: "WEBSITE VIEWS",
      description: "Official portal visitors during festival cycle",
    },
  ],
};

export const d3OfficialContact = {
  website: "https://d3fest.techsoc-iiitbbsr.com/",
  aboutUrl: "https://d3fest.techsoc-iiitbbsr.com/about",
  eventsUrl: "https://d3fest.techsoc-iiitbbsr.com/events",
  email: "dcube-techfest@iiit-bh.ac.in",
  instagramHandle: "@d3fest-iiitbh",
  venue: "IIIT Bhubaneswar, Gothapatna, Malipada, Bhubaneswar, Odisha – 751003",
};

export const d3Arenas: EventItem[] = [
  {
    id: "craft-n-code-26",
    name: "CraftNCode ’26",
    title: "CraftNCode ’26",
    slug: "craft-n-code",
    category: "Hackathon",
    filterGroup: "competitions",
    shortLabel: "24-HOUR NATIONAL HACKATHON",
    shortDescription: "24-HOUR NATIONAL HACKATHON",
    description:
      "A national-level, 24-hour hackathon inviting students to innovate, collaborate and develop creative solutions to real-world challenges. Participants work under time pressure to build and showcase their ideas.",
    organizer: "TechSoc",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Hackathon", "24-Hour", "National"],
  },
  {
    id: "code-kombat",
    name: "Code Kombat",
    title: "Code Kombat",
    slug: "code-kombat",
    category: "Programming Competition",
    filterGroup: "competitions",
    shortLabel: "ICPC-INSPIRED TEAM PROGRAMMING",
    shortDescription: "ICPC-INSPIRED TEAM PROGRAMMING",
    description:
      "An ICPC-inspired programming competition in which teams collaborate to solve algorithmic problems within a specified time limit. The competition tests coding skills, problem-solving ability, implementation efficiency, strategy and teamwork.",
    organizer: "TechSoc",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Programming", "ICPC-Style", "Algorithms", "Team"],
  },
  {
    id: "techxpo",
    name: "TechXpo",
    title: "TechXpo",
    slug: "techxpo",
    category: "Exhibition",
    filterGroup: "hardware",
    shortLabel: "INNOVATION ON DISPLAY",
    shortDescription: "INNOVATION ON DISPLAY",
    description:
      "A curated exhibition where local startups and companies showcase their technology products and projects to a live audience. It provides an opportunity to explore innovations, learn, connect and discover the region's growing technology ecosystem.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Exhibition", "Startups", "Innovation"],
  },
  {
    id: "workshop-exe",
    name: "Workshop.exe",
    title: "Workshop.exe",
    slug: "workshop-exe",
    category: "Workshop",
    filterGroup: "workshops",
    shortLabel: "HANDS-ON TECHNOLOGY WORKSHOP",
    shortDescription: "HANDS-ON TECHNOLOGY WORKSHOP",
    description:
      "A hands-on learning initiative offering students the opportunity to engage with industry experts in technologies such as Artificial Intelligence (AI), blockchain, Web3, Augmented Reality (AR) and Virtual Reality (VR). The workshop emphasizes practical experience and applying knowledge to real-world scenarios.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Workshop", "AI & Web3", "Hands-On"],
  },
  {
    id: "dev-dialogue",
    name: "Dev Dialogue",
    title: "Dev Dialogue",
    slug: "dev-dialogue",
    category: "Technical Talk",
    filterGroup: "workshops",
    shortLabel: "TECH TALKS & INDUSTRY INSIGHTS",
    shortDescription: "TECH TALKS & INDUSTRY INSIGHTS",
    description:
      "An inspiring technical talk series featuring industry experts and innovators discussing emerging trends and breakthroughs shaping the technology world. The sessions aim to share knowledge, spark ideas and broaden participants' perspectives.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Technical Talk", "Industry Insights", "Keynotes"],
  },
  {
    id: "ctf-arena",
    name: "CTF Arena",
    title: "CTF Arena",
    slug: "ctf-arena",
    category: "Cybersecurity",
    filterGroup: "competitions",
    shortLabel: "CYBERSECURITY CHALLENGE",
    shortDescription: "CYBERSECURITY CHALLENGE",
    description:
      "A cybersecurity competition focused on protecting digital assets, identifying vulnerabilities and addressing cyber threats. The brochure highlights areas including financial fraud, security breaches, national security threats and emerging cyberattacks.",
    organizer: "TechSoc Infosec",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Cybersecurity", "CTF", "Security"],
  },
  {
    id: "ui-ux-showdown",
    name: "UI/UX Showdown",
    title: "UI/UX Showdown",
    slug: "ui-ux-showdown",
    category: "Design Competition",
    filterGroup: "competitions",
    shortLabel: "UI/UX DESIGN SPRINT",
    shortDescription: "UI/UX DESIGN SPRINT",
    description:
      "A UI/UX design competition challenging participants to transform ideas into intuitive, visually compelling digital experiences. Given a real-world problem or scenario, participants research, ideate and create user-centric interfaces that emphasize creativity, usability, accessibility and design thinking.",
    organizer: "TechSoc Design",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Design", "UI/UX", "Sprint"],
  },
  {
    id: "bot-bowl",
    name: "Bot Bowl",
    title: "Bot Bowl",
    slug: "bot-bowl",
    category: "Robotics",
    filterGroup: "robotics",
    shortLabel: "ROBOSOCCER",
    shortDescription: "ROBOSOCCER",
    description:
      "A RoboSoccer challenge in which teams design and operate robots to dribble, pass and score in a miniature soccer field. The event emphasizes agility, strategy, engineering, precision and teamwork.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Robotics", "RoboSoccer", "TARS"],
  },
  {
    id: "flytron",
    name: "Flytron",
    title: "Flytron",
    slug: "flytron",
    category: "Robotics and Drones",
    filterGroup: "robotics",
    shortLabel: "COMPETITIVE DRONE RACING",
    shortDescription: "COMPETITIVE DRONE RACING",
    description:
      "A competitive drone-racing event featuring fast-paced aerial obstacle courses. Pilots must demonstrate control, focus, precision and instinct while navigating the course.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Drones", "Racing", "TARS"],
  },
  {
    id: "robo-rash",
    name: "Robo Rash",
    title: "Robo Rash",
    slug: "robo-rash",
    category: "Robotics",
    filterGroup: "robotics",
    shortLabel: "ALL-TERRAIN ROBOTICS",
    shortDescription: "ALL-TERRAIN ROBOTICS",
    description:
      "An all-terrain robotics challenge where teams design and operate mobile robots across complex, multi-surface courses. The brochure mentions terrain including sand, gravel and slopes, with emphasis on speed, stability and control.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Robotics", "All-Terrain", "TARS"],
  },
  {
    id: "ground-zero",
    name: "Ground Zero",
    title: "Ground Zero",
    slug: "ground-zero",
    category: "Robotics",
    filterGroup: "robotics",
    shortLabel: "DISASTER-RESPONSE ROBOTICS",
    shortDescription: "DISASTER-RESPONSE ROBOTICS",
    description:
      "A disaster-response robotics challenge in which teams design and deploy robotic explorers capable of traversing rugged terrain, overcoming obstacles and navigating debris. Robots must detect and identify critical targets and possible signs of human presence.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Robotics", "Disaster Response", "TARS"],
  },
  {
    id: "buildathon",
    name: "Buildathon",
    title: "Buildathon",
    slug: "buildathon",
    category: "Hardware and Prototyping",
    filterGroup: "hardware",
    shortLabel: "BUILD. PROVE. INNOVATE.",
    shortDescription: "BUILD. PROVE. INNOVATE.",
    description:
      "A time-constrained prototyping and innovation competition where participants brainstorm, design, build and present solutions to real-world challenges. The brochure mentions electronics, hardware, software, automation and other technology breakthroughs.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Hardware", "Prototyping", "Innovation"],
  },
  {
    id: "mechlab-io",
    name: "Mechlab.io",
    title: "Mechlab.io",
    slug: "mechlab-io",
    category: "Technical Workshop",
    filterGroup: "workshops",
    shortLabel: "EMBEDDED & AUTONOMOUS SYSTEMS",
    shortDescription: "EMBEDDED & AUTONOMOUS SYSTEMS",
    description:
      "A practical technology workshop presented in the brochure as an initiative of the robotics society. Topics include Embedded Systems, Internet of Things (IoT), Robotic Process Automation (RPA), Computer Vision and Autonomous Systems. The workshop focuses on hands-on learning and real-world applications.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Embedded Systems", "IoT & Vision", "TARS"],
  },
  {
    id: "experience-center",
    name: "Experience Center",
    title: "Experience Center",
    slug: "experience-center",
    category: "Interactive Technology Experience",
    filterGroup: "hardware",
    shortLabel: "EXPERIENCE THE FUTURE",
    shortDescription: "EXPERIENCE THE FUTURE",
    description:
      "An immersive zone where technology comes alive through interactive demonstrations, live robotics showcases, automation experiences and hands-on exhibits.",
    organizer: "The Automation and Robotics Society (TARS)",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Interactive", "Automation", "TARS"],
  },
  {
    id: "welcoming-ceremony",
    name: "Welcoming Ceremony",
    title: "Welcoming Ceremony",
    slug: "welcoming-ceremony",
    category: "Ceremony",
    filterGroup: "ceremonies",
    shortLabel: "FESTIVAL INAUGURATION",
    shortDescription: "FESTIVAL INAUGURATION",
    description:
      "The inauguration ceremony of D³ Fest, including special announcements.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Ceremony", "Inauguration", "Festival"],
  },
  {
    id: "bits-of-past",
    name: "Bits of Past",
    title: "Bits of Past",
    slug: "bits-of-past",
    category: "Festival Activity",
    filterGroup: "ceremonies",
    shortLabel: "BITS OF PAST",
    shortDescription: "BITS OF PAST",
    description:
      "A named activity included in the official D³ Fest event rundown. The supplied information does not provide a sufficiently detailed description of its format or activities. Keep the description short and neutral rather than inventing its content.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Festival Activity", "Activity", "TechSoc × TARS"],
  },
  {
    id: "closing-ceremony",
    name: "Closing Ceremony",
    title: "Closing Ceremony",
    slug: "closing-ceremony",
    category: "Ceremony",
    filterGroup: "ceremonies",
    shortLabel: "FESTIVAL FINALE",
    shortDescription: "FESTIVAL FINALE",
    description:
      "The closing ceremony that concludes D³ Fest, with announcements of a grand surprise and prizes.",
    organizer: "TechSoc × TARS",
    venue: "IIIT Bhubaneswar",
    date: "TBA",
    status: "upcoming",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/events",
    tags: ["Ceremony", "Finale", "Awards"],
  },
];

export const homeShowcaseEvents: EventItem[] = [
  {
    id: "home-event-1",
    name: "D³ TECHNO FEST 2026",
    title: "D³ TECHNO FEST 2026",
    slug: "d3",
    category: "FLAGSHIP TECHNO FEST",
    theme: "Dream. Dare. Develop.",
    image: "/images/events/d3-fest-logo.png",
    organizer: "TechSoc × TARS",
    shortDescription: "Four-day technology festival at IIIT Bhubaneswar featuring 17 official events, hackathons, and robotics tracks.",
    description: "Four-day technology festival at IIIT Bhubaneswar featuring 17 official events, hackathons, and robotics tracks.",
    venue: "IIIT BHUBANESWAR CAMPUS",
    date: "TO BE ANNOUNCED",
    status: "UPCOMING",
    externalLink: "https://d3fest.techsoc-iiitbbsr.com/",
    link: "/events",
    tags: ["FLAGSHIP", "TECHSOC × TARS", "17 EVENTS"],
  },
  {
    id: "home-event-2",
    name: "TECH INTRO SESSION",
    title: "TECH INTRO SESSION",
    slug: "tech-intro-session",
    category: "TECH SESSION",
    organizer: "TechSoc",
    shortDescription:
      "An introductory session designed to help students explore the world of technology, discover different technical domains, understand the tools and skills used by developers, and find a starting point for their learning journey.\n\nThe session will introduce students to the broader TechSoc ecosystem and help them identify areas they may want to explore further.",
    description:
      "An introductory session designed to help students explore the world of technology, discover different technical domains, understand the tools and skills used by developers, and find a starting point for their learning journey.\n\nThe session will introduce students to the broader TechSoc ecosystem and help them identify areas they may want to explore further.",
    venue: "To be announced",
    date: "To be announced",
    status: "UPCOMING",
    link: "/events",
    tags: ["TECH SESSION", "ORIENTATION"],
  },
  {
    id: "home-event-3",
    name: "DOMAIN WORKSHOP",
    title: "DOMAIN WORKSHOP",
    slug: "domain-workshop",
    category: "HANDS-ON WORKSHOP",
    organizer: "TechSoc Domain Teams",
    shortDescription:
      "An interactive, hands-on workshop led by TechSoc domain teams, designed to help students explore a specific technical field through practical demonstrations, guided activities, and introductory exercises.\n\nThe workshop aims to help participants build foundational knowledge, experiment with relevant tools, and understand how to continue learning in their chosen domain.",
    description:
      "An interactive, hands-on workshop led by TechSoc domain teams, designed to help students explore a specific technical field through practical demonstrations, guided activities, and introductory exercises.\n\nThe workshop aims to help participants build foundational knowledge, experiment with relevant tools, and understand how to continue learning in their chosen domain.",
    venue: "To be announced",
    date: "To be announced",
    status: "UPCOMING",
    link: "/events",
    tags: ["HANDS-ON WORKSHOP", "DOMAIN TEAMS"],
  },
];

export const upcomingEvents: EventItem[] = [
  d3FlagshipEvent,
  ...d3Arenas,
];

export const featuredEvents: EventItem[] = [
  d3FlagshipEvent,
];

export const hackathons: EventItem[] = [
  d3Arenas[0], // Craft N Code '26
];

export const pastEvents: EventItem[] = [
  {
    id: "past-1",
    name: "",
    date: "",
    category: "",
    description: "",
    image: "",
    highlights: "",
    photos: [],
    recording: "",
  },
];

export interface PastSession {
  id: string;
  category: string;
  date?: string;
  title: string;
  description: string;
  speaker?: string;
  watchLink?: string;
  resourceLink?: string;
  resourceType?: string;
  resourceIcon?: string;
}

export const pastTechnicalSessions: PastSession[] = [
  {
    id: "session-git",
    category: "Git & Version Control",
    title: "Git Session",
    description:
      "An introduction to Git and GitHub, covering version control, essential Git commands, branching, commits, and collaborative development.",
  },
  {
    id: "session-app-dev",
    category: "Android Development",
    title: "App Dev Session",
    description:
      "An introduction to Android application development, covering the development workflow, core concepts, and building mobile app interfaces.",
  },
  {
    id: "session-ai-ml",
    category: "Artificial Intelligence & Machine Learning",
    title: "AI/ML Intro Session",
    description:
      "An introduction to Artificial Intelligence and Machine Learning, covering fundamental concepts, common applications, and the overall learning path.",
  },
  {
    id: "session-web-dev",
    category: "Web Development",
    title: "Web Dev Session",
    description:
      "An introduction to web development, covering the fundamentals of building websites, frontend technologies, and the development workflow.",
  },
];

export const technicalSessions: TechnicalSession[] = [
  {
    id: "session-git",
    title: "Git Session",
    topic: "Git & Version Control",
    description:
      "An introduction to Git and GitHub, covering version control, essential Git commands, branching, commits, and collaborative development.",
  },
  {
    id: "session-app-dev",
    title: "App Dev Session",
    topic: "Android Development",
    description:
      "An introduction to Android application development, covering the development workflow, core concepts, and building mobile app interfaces.",
  },
  {
    id: "session-ai-ml",
    title: "AI/ML Intro Session",
    topic: "Artificial Intelligence & Machine Learning",
    description:
      "An introduction to Artificial Intelligence and Machine Learning, covering fundamental concepts, common applications, and the overall learning path.",
  },
  {
    id: "session-web-dev",
    title: "Web Dev Session",
    topic: "Web Development",
    description:
      "An introduction to web development, covering the fundamentals of building websites, frontend technologies, and the development workflow.",
  },
];

export const mentorshipPrograms: MentorshipProgram[] = [
  {
    id: "mentorship-1",
    name: "",
    description: "",
    duration: "",
    eligibility: "",
    applicationLink: "",
    status: "",
  },
];
