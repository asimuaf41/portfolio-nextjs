import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { BackgroundTexture } from "@/components/background-texture";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for project collaboration and freelance work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative">
      <SectionTitle title="Contact" />
      <section className="contact-grid contact-cards-legacy">
        <article className="contact-card">
          <div className="contact-card-icon">
            <Phone size={34} />
          </div>
          <h3>Phone</h3>
          <div className="contact-card-divider" />
          <div className="contact-card-lines">
            <a href="tel:+923026046119">+92 302 6046119</a>
            <a href="tel:+923496006162">+92 349 6006162</a>
            <a href="tel:0563866094">056 3866094</a>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-card-icon">
            <Mail size={34} />
          </div>
          <h3>Email</h3>
          <div className="contact-card-divider" />
          <div className="contact-card-lines">
            <a href="mailto:asimuaf41@gmail.com">asimuaf41@gmail.com</a>
            <a href="mailto:asimsoftwaredeveloper@gmail.com">
              asimsoftwaredeveloper02@gmail.com
            </a>
            <a href="mailto:asimsoftwaredeveloper01@gmail.com">
              asimsoftwaredeveloper03@gmail.com
            </a>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-card-icon">
            <MapPin size={34} />
          </div>
          <h3>Address</h3>
          <div className="contact-card-divider" />
          <p className="contact-card-address">
            Marrar chak 41/R.B Tehsil: sangla Hill District Nankana sahib
          </p>
        </article>
      </section>
      <section className="contact-map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729936.4516613283!2d73.11367429737892!3d31.803112744720796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39220b72936edc15%3A0x42e2ed6919ade7e!2sAli%20Abdullah%20General%20store!5e0!3m2!1sen!2s!4v1612544292757!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0, filter: "invert(90%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map location"
        />
      </section>
      <BackgroundTexture />
    </main>
  );
}
