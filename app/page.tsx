import { WaveDivider } from "@/components/layout/WaveDivider";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Events";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { LogoStory } from "@/components/sections/LogoStory";
import { Team } from "@/components/sections/Team";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { events } from "@/lib/content";

export default function HomePage() {
  const hasEvents = events.length > 0;
  return (
    <>
      <Hero />
      <About />
      <WaveDivider from="white" to="mist" />
      <WhatWeDo />
      <WaveDivider from="mist" to="white" flip />
      <FeaturedProjects />
      <WaveDivider from="white" to="navy" />
      <Achievements />
      <WaveDivider from="navy" to={hasEvents ? "mist" : "white"} flip />
      <Events />
      {hasEvents && <WaveDivider from="mist" to="white" />}
      <Team />
      <LogoStory />
      <Gallery />
      <WaveDivider from="white" to="navy" />
      <Contact />
    </>
  );
}
