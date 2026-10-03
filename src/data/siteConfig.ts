import { SiteConfig } from "@/types";

/**
 * Factual data source: CONTENT/contact.md & CONTENT/community.md
 * Fields left empty where values are not specified in CONTENT/contact.md.
 */

export const siteConfig: SiteConfig = {
  name: "Tech Society IIIT Bhubaneswar",
  overview: "",
  contact: {
    officialEmail: "",
    generalEnquiries: "",
    partnershipEmail: "",
  },
  socials: {
    github: "https://github.com/p-society/",
    linkedin: "https://www.linkedin.com/company/tech-society-iiitbh/",
    instagram: "https://www.instagram.com/techsociiitbh/",
    youtube: "",
    discord: "https://discord.gg/GgWYNmw4p",
  },
  join: {
    joinLink: "",
    description: "",
  },
  location: {
    institution: "",
    address: "",
    city: "",
    state: "",
    country: "",
  },
  contactFormCategories: [
    "General Enquiry",
    "Collaboration",
    "Partnership",
    "Sponsorship",
    "Event",
    "Mentorship",
    "Other",
  ],
};
