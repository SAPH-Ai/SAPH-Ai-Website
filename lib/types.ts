export type SocialPlatform = "facebook" | "instagram" | "linkedin" | "github" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  placeholder?: boolean;
}

export interface Stat {
  label: string;
  /** `null` shows a dash until a real number is added. */
  value: number | null;
  suffix?: string;
  placeholder?: boolean;
}

export interface Site {
  name: string;
  nameBn: string;
  url: string;
  tagline: string;
  heroSubline: string;
  description: string;
  missionLine: string;
  about: string[];
  whatWeDoIntro: string;
  themes: string[];
  logoStory: { intro: string; wave: string; nodes: string; together: string };
  stats: Stat[];
  contact: { email: string; location: string; placeholder?: boolean };
  social: SocialLink[];
  showPlaceholderBadges: boolean;
}

export type ActivityIcon = "search" | "research" | "robot" | "trophy" | "community" | "mentor";

export interface Activity {
  id: string;
  icon: ActivityIcon;
  title: string;
  summary: string;
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
