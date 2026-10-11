export type SocialPlatform = "facebook" | "instagram" | "x" | "linkedin" | "github" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  placeholder?: boolean;
}

export interface Site {
  name: string;
  nameBn: string;
  url: string;
  tagline: string;
  /** Part of the tagline shown on its own line with the blue gradient. */
  taglineHighlight?: string;
  heroSubline: string;
  description: string;
  missionLine: string;
  about: string[];
  /** "What We Do" cards in the About section. */
  themes: { title: string; description?: string }[];
  logoStory: { intro: string; wave: string; nodes: string; together: string };
  contact: { email: string; location: string; placeholder?: boolean };
  /** Google Form (or other page) opened by the "Join Us" buttons. */
  joinUrl?: string;
  social: SocialLink[];
  showPlaceholderBadges: boolean;
}

export interface Project {
  slug: string;
  title: string;
  /** Short label shown in the orange dashed badge on the card. */
  category?: string;
  summary: string;
  /** Extra paragraphs for the project page (optional). */
  description: string[];
  image: string;
  tags: string[];
  status: string;
  year: string;
  featured: boolean;
  links: { label: string; url: string }[];
  placeholder?: boolean;
}

export interface Achievement {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  /** News, media and verification links shown as chips on the card. */
  links?: { label: string; url: string }[];
  placeholder?: boolean;
}

export interface Member {
  slug: string;
  name: string;
  role: string;
  group: "leads" | "members";
  photo: string;
  bio: string;
  intro: string[];
  links: { linkedin?: string; github?: string; facebook?: string; email?: string };
  placeholder?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  placeholder?: boolean;
}

export interface EventPhoto {
  src: string;
  alt: string;
}

export interface EventItem {
  id: string;
  date: string;
  title: string;
  location?: string;
  /** One or two sentences shown on the card. */
  summary: string;
  /** Full details shown when the card is opened. Each item is a paragraph. */
  description: string[];
  /** Main photo, shown on the card and first in the photo viewer. */
  cover: string;
  /** More photos, shown in the photo viewer inside the card. */
  photos: EventPhoto[];
  link?: string;
  placeholder?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  /** Conference or journal name. */
  venue: string;
  location?: string;
  publisher?: string;
  year?: string;
  overview: string;
  /** Key results, shown as a short list ("label: text"). */
  results?: { label: string; text: string }[];
  /** Link to the paper (e.g. IEEE Xplore). */
  link?: string;
  /** Button text for the link. Defaults to "Read the paper". */
  linkLabel?: string;
}
