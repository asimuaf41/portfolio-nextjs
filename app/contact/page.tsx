import type { Metadata } from "next";
import { Suspense, type CSSProperties } from "react";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { ContactHeroActions } from "@/components/contact-hero-actions";
import { ScrollRevealEffects } from "@/components/scroll-reveal-effects";
import { SectionTitle } from "@/components/section-title";
import {
  contactInfo,
  freelancePlatforms,
  messagingChannels,
  socialLinks,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Asim Ali",
  description:
    "Contact Asim Ali for React/Next.js, AI agents, and full-stack freelance work. Reach out via WhatsApp, Upwork, LinkedIn, or email — usually replies within hours.",
  path: "/contact",
  keywords: [
    "contact Asim Ali",
    "hire React developer",
    "hire AI agent developer",
    "Upwork React freelancer",
  ],
});

function ChannelIcon({ id }: { id: string }) {
  if (id === "whatsapp") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }
  if (id === "linkedin") {
    return <Linkedin size={20} strokeWidth={1.8} />;
  }
  if (id === "upwork") {
    return <ExternalLink size={20} strokeWidth={1.8} />;
  }
  return <Mail size={20} strokeWidth={1.8} />;
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <ScrollRevealEffects selector=".contact-reveal" />
      <SectionTitle title="Contact" />

      <header className="contact-hero contact-reveal">
        <span className="contact-eyebrow contact-anim-item" style={{ "--i": 0 } as CSSProperties}>
          <Sparkles size={14} />
          {contactInfo.eyebrow}
        </span>
        <h2 className="contact-anim-item" style={{ "--i": 1 } as CSSProperties}>
          {contactInfo.headline}
        </h2>
        <p className="contact-anim-item" style={{ "--i": 2 } as CSSProperties}>
          {contactInfo.intro}
        </p>
        <div
          className="contact-response-note contact-anim-item"
          style={{ "--i": 3 } as CSSProperties}
        >
          <Clock3 size={14} />
          <span>{contactInfo.responseNote}</span>
        </div>
        <div className="contact-anim-item" style={{ "--i": 4 } as CSSProperties}>
          <Suspense fallback={<div className="contact-hero-actions" />}>
            <ContactHeroActions />
          </Suspense>
        </div>
      </header>

      <section
        className="contact-channels contact-reveal"
        aria-labelledby="contact-channels-heading"
      >
        <header className="contact-section-head">
          <span className="contact-eyebrow">Chat channels</span>
          <h3 id="contact-channels-heading">Reach me where you already work</h3>
        </header>
        <div className="contact-channels-grid">
          {messagingChannels.map((channel, index) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                channel.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={`contact-channel-card accent-${channel.accent} contact-stagger`}
              style={{ "--i": index } as CSSProperties}
            >
              <span className="contact-channel-icon" aria-hidden="true">
                <ChannelIcon id={channel.id} />
              </span>
              <span className="contact-channel-body">
                <strong>{channel.name}</strong>
                <span>{channel.description}</span>
              </span>
              <span className="contact-channel-cta">
                {channel.cta} <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-details-grid contact-reveal" aria-label="Contact details">
        <article className="contact-detail-card contact-stagger" style={{ "--i": 0 } as CSSProperties}>
          <div className="contact-detail-icon">
            <Phone size={22} strokeWidth={1.8} />
          </div>
          <h3>Phone</h3>
          <p>Call or save my numbers for follow-ups.</p>
          <div className="contact-detail-list">
            {contactInfo.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                <span>{phone.label}</span>
                <strong>{phone.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <article className="contact-detail-card contact-stagger" style={{ "--i": 1 } as CSSProperties}>
          <div className="contact-detail-icon">
            <Mail size={22} strokeWidth={1.8} />
          </div>
          <h3>Email</h3>
          <p>Best for longer briefs, docs, and attachments.</p>
          <div className="contact-detail-list">
            {contactInfo.emails.map((email) => (
              <a key={email.href} href={email.href}>
                <span>{email.label}</span>
                <strong>{email.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <article className="contact-detail-card contact-stagger" style={{ "--i": 2 } as CSSProperties}>
          <div className="contact-detail-icon">
            <MapPin size={22} strokeWidth={1.8} />
          </div>
          <h3>Location</h3>
          <p>{contactInfo.address.short}</p>
          <p className="contact-address-full">{contactInfo.address.line}</p>
          <a href="#contact-map" className="contact-map-link">
            View on map <ArrowRight size={14} />
          </a>
        </article>
      </section>

      <section
        className="contact-platforms contact-reveal"
        aria-labelledby="contact-platforms-heading"
      >
        <header className="contact-section-head">
          <span className="contact-eyebrow">Also available on</span>
          <h3 id="contact-platforms-heading">Freelance & social profiles</h3>
        </header>
        <ul className="contact-platforms-grid">
          {freelancePlatforms.map((platform, index) => (
            <li
              key={platform.name}
              className="contact-stagger"
              style={{ "--i": index } as CSSProperties}
            >
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-platform-card"
              >
                <span className="contact-platform-name">
                  {platform.name}
                  <ExternalLink size={13} />
                </span>
                <span>{platform.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="contact-social-row">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-chip"
            >
              {social.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </section>

      <section
        id="contact-map"
        className="contact-map-section contact-reveal"
        aria-labelledby="contact-map-heading"
      >
        <header className="contact-section-head">
          <span className="contact-eyebrow">Map</span>
          <h3 id="contact-map-heading">Where I&apos;m based</h3>
          <p className="contact-map-lead">
            Remote-first across time zones — locally based in Sangla Hill,
            Nankana Sahib, Pakistan.
          </p>
        </header>

        <div className="contact-map-stage">
          <span className="contact-map-glow" aria-hidden="true" />
          <span className="contact-map-orbit" aria-hidden="true" />
          <div className="contact-map-frame">
            <div
              className="contact-map-overlay contact-stagger"
              style={{ "--i": 0 } as CSSProperties}
            >
              <span className="contact-map-pin">
                <MapPin size={16} />
              </span>
              <div>
                <strong>{contactInfo.address.short}</strong>
                <p>Available for remote collaboration worldwide</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address.line)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-open"
              >
                <Navigation size={14} />
                Open in Maps
              </a>
            </div>
            <div
              className="contact-map-wrap contact-stagger"
              style={{ "--i": 1 } as CSSProperties}
            >
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map location — Sangla Hill, Pakistan"
              />
            </div>
          </div>
        </div>
      </section>

      <BackgroundTexture />
    </main>
  );
}
