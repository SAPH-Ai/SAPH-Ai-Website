import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { MailIcon, MapPinIcon } from "@/components/ui/Icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section
      id="contact"
      tone="dark"
      eyebrow="Contact"
      title="Let’s build cleaner cities together"
      intro="Schools, partners, mentors, media or curious minds: we would love to hear from you."
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-brand-bright/20 pointer-events-none absolute bottom-0 left-0 size-[480px] -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="space-y-4">
          <Card variant="glass" className="flex items-start gap-4 p-6">
            <span className="bg-brand-bright grid size-11 shrink-0 place-items-center rounded-xl text-white">
              <MailIcon className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-mist-300">Email</h3>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold break-all text-white hover:underline"
              >
                {site.contact.email}
              </a>
              <PlaceholderBadge show={site.contact.placeholder} className="mt-2 flex w-fit" />
            </div>
          </Card>
          <Card variant="glass" className="flex items-start gap-4 p-6">
            <span className="bg-brand-bright grid size-11 shrink-0 place-items-center rounded-xl text-white">
              <MapPinIcon className="size-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-mist-300">Location</h3>
              <p className="font-semibold text-white">{site.contact.location}</p>
            </div>
          </Card>
          <Card variant="glass" className="p-6">
            <h3 className="mb-3 text-sm font-semibold text-mist-300">Follow us</h3>
            <SocialLinks
              links={site.social}
              itemClassName="bg-white/10 text-white hover:bg-brand-bright"
            />
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card variant="glass" className="p-6 sm:p-8">
            <ContactForm fallbackEmail={site.contact.email} />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
