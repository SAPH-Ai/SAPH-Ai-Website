// Single entry point for all editable content in /data.
import achievementsJson from "@/data/achievements.json";
import eventsJson from "@/data/events.json";
import galleryJson from "@/data/gallery.json";
import membersJson from "@/data/members.json";
import projectsJson from "@/data/projects.json";
import publicationsJson from "@/data/publications.json";
import type {
  Achievement,
  EventItem,
  GalleryImage,
  Member,
  Project,
  Publication,
} from "@/lib/types";

export { site, showPlaceholders, taglineText } from "@/lib/site";

export const projects = projectsJson as Project[];
export const achievements = achievementsJson as Achievement[];
export const members = membersJson as Member[];
export const gallery = galleryJson as GalleryImage[];
export const events = eventsJson as EventItem[];
export const publications = publicationsJson as Publication[];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getEvent = (id: string) => events.find((e) => e.id === id);

/** Cover first, then the extra photos (without repeating the cover). */
export const eventPhotos = (event: EventItem) => [
  { src: event.cover, alt: `${event.title}: main photo` },
  ...event.photos.filter((p) => p.src !== event.cover),
];

export const memberGroups = [
  { id: "leads", title: "Founders", members: members.filter((m) => m.group === "leads") },
  { id: "members", title: "Team", members: members.filter((m) => m.group === "members") },
].filter((g) => g.members.length > 0);
