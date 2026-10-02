export type EventCategory =
  | "hackathon"
  | "workshop"
  | "technical-session"
  | "competition"
  | string;

export type EventStatus = "open" | "upcoming" | "completed" | "closed" | string;

export interface EventItem {
  id: string;
  name: string;
  date?: string;
  time?: string;
  venue?: string;
  category?: EventCategory;
  description?: string;
  registrationLink?: string;
  image?: string;
  status?: EventStatus;
  theme?: string;
  link?: string;
  highlights?: string;
  photos?: string[];
  recording?: string;
}

export interface TechnicalSession {
  id: string;
  title: string;
  speaker?: string;
  date?: string;
  topic?: string;
  description?: string;
  recording?: string;
  image?: string;
}

export interface MentorshipProgram {
  id: string;
  name: string;
  description?: string;
  duration?: string;
  eligibility?: string;
  applicationLink?: string;
  status?: string;
}

export interface DomainItem {
  id: string;
  name: string;
  shortName?: string;
  description?: string;
  technologies?: string[];
  lead?: string;
  contributors?: string[];
  status?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  description?: string;
  technologies?: string[];
  category?: string;
  contributors?: string[];
  status?: string;
  repository?: string;
  liveLink?: string;
  link?: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  year?: string;
  branch?: string;
  domain?: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  technologies?: string[];
}

export interface FacultyAdvisor {
  id: string;
  name: string;
  designation?: string;
  department?: string;
  image?: string;
  profile?: string;
}

export interface AlumniMentor {
  id: string;
  name: string;
  role?: string;
  currentOrganization?: string;
  contribution?: string;
  image?: string;
  linkedin?: string;
}

export interface CommunityProgram {
  id: string;
  name: string;
  description?: string;
  status?: string;
}

export interface GDGInfo {
  title: string;
  description?: string;
  activities: string[];
}

export interface CommunityStats {
  activeMembers?: string;
  domains?: string;
  projects?: string;
  events?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface OfficialContact {
  officialEmail?: string;
  generalEnquiries?: string;
  partnershipEmail?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  discord?: string;
}

export interface JoinInfo {
  joinLink?: string;
  description?: string;
}

export interface CampusLocation {
  institution?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface SiteConfig {
  name: string;
  overview?: string;
  contact: OfficialContact;
  socials: SocialLinks;
  join: JoinInfo;
  location: CampusLocation;
  contactFormCategories: string[];
}
