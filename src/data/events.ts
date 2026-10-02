import { EventItem, TechnicalSession, MentorshipProgram } from "@/types";

/**
 * Factual data source: CONTENT/events.md
 * Fields left empty where values are not specified in CONTENT/events.md.
 */

export const upcomingEvents: EventItem[] = [
  {
    id: "upcoming-1",
    name: "",
    date: "",
    time: "",
    venue: "",
    category: "",
    description: "",
    registrationLink: "",
    image: "",
    status: "",
  },
];

export const featuredEvents: EventItem[] = [
  {
    id: "featured-1",
    name: "",
    date: "",
    category: "",
    description: "",
    image: "",
    link: "",
  },
];

export const hackathons: EventItem[] = [
  {
    id: "hackathon-1",
    name: "",
    date: "",
    description: "",
    theme: "",
    registrationLink: "",
    image: "",
    status: "",
  },
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

export const technicalSessions: TechnicalSession[] = [
  {
    id: "session-1",
    title: "",
    speaker: "",
    date: "",
    topic: "",
    description: "",
    recording: "",
    image: "",
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
