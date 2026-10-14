import type { MetadataRoute } from "next";
import { events, projects, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/projects/",
    "/team/",
    "/achievements/",
    "/gallery/",
    ...projects.map((p) => `/projects/${p.slug}/`),
    ...(events.length ? ["/events/", ...events.map((e) => `/events/${e.id}/`)] : []),
  ];
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
