import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Poppins } from "next/font/google";
import { MotionConfig } from "@/components/ui/MotionConfig";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
  preload: false,
});

const title = `${site.name} — Robotics & AI for clean water and sanitation`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SAPH.Ai",
    "robotics",
    "artificial intelligence",
    "sanitation",
    "drainage",
    "water management",
    "Bangladesh",
    "youth organization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#072739",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.nameBn,
  url: site.url,
  logo: `${site.url}/icons/icon-512.png`,
  description: site.description,
  email: site.contact.placeholder ? undefined : site.contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: site.social.filter((s) => s.url && !s.placeholder).map((s) => s.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${hindSiliguri.variable}`}>
      <body className="min-h-dvh bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionConfig>
          <Navbar />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
