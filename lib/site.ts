// Kept separate from lib/content.ts so client components can read site settings
// without bundling every other JSON file.
import siteJson from "@/data/site.json";
import type { Site } from "@/lib/types";

export const site = siteJson as Site;
export const showPlaceholders = site.showPlaceholderBadges;
/** The tagline on one line (its "\n" line breaks are only for the hero headline). */
export const taglineText = site.tagline.replace(/\s*\n\s*/g, " ");
