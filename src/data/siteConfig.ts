import { SiteConfig } from "@/types";

/**
 * Factual data source: CONTENT/contact.md & CONTENT/community.md
 * Fields left empty where values are not specified in CONTENT/contact.md.
 */

export const siteConfig: SiteConfig = {
  name: "TechSoc",
  overview: "",
  contact: {
    officialEmail: "",
    generalEnquiries: "",
    partnershipEmail: "",
  },
  socials: {
    github: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    discord: "",
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
