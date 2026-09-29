import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { faqSection } from "@/data/faq";
import { faqJsonLd } from "@/lib/seo";
import { SeoJsonLd } from "@/components/seo-jsonld";

export function FaqSection({ className = "" }: { className?: string }) {
  const isExternalCta = faqSection.cta.href.startsWith("http");

  return (
    <section
      id="faq"
      className={["faq-section", className].filter(Boolean).join(" ")}
      aria-labelledby="faq-heading"
    >
      <SeoJsonLd data={faqJsonLd(faqSection.items)} />
      <header className="home-recent-head">
        <div>
          <span className="blog-intro-pill">
            <CircleHelp size={14} />
            {faqSection.eyebrow}
          </span>
          <h2 id="faq-heading">{faqSection.headline}</h2>
          <p>{faqSection.lede}</p>
        </div>
        {isExternalCta ? (
          <a
            href={faqSection.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="home-recent-cta"
          >
            {faqSection.cta.label} <ArrowRight size={16} />
          </a>
        ) : (
          <Link href={faqSection.cta.href} className="home-recent-cta">
            {faqSection.cta.label} <ArrowRight size={16} />
          </Link>
        )}
      </header>

      <div className="faq-list">
        {faqSection.items.map((item, index) => (
          <details
            key={item.id}
            className="faq-item"
            style={{ animationDelay: `${index * 70}ms` }}
            {...(index === 0 ? { open: true } : {})}
          >
            <summary className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
