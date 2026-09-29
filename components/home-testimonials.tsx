import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import {
  featuredTestimonial,
  supportingTestimonials,
  testimonialEndorsements,
} from "@/data/testimonials";
import { UPWORK_PROFILE_URL } from "@/data/site-content";
import type { Testimonial } from "@/types/content";

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="home-testimonial-stars"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={13}
          strokeWidth={1.75}
          fill={index < rating ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <figure
      className={`home-testimonial-card accent-${item.accent}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="home-testimonial-card-top">
        <Stars rating={item.rating} />
        <span className="home-testimonial-type">{item.projectType}</span>
      </div>
      <blockquote>
        <p>{item.quote}</p>
      </blockquote>
      <p className="home-testimonial-outcome">{item.outcome}</p>
      <figcaption>
        <span className="home-testimonial-who">{item.attribution}</span>
        <span className="home-testimonial-project">{item.project}</span>
        <span className="home-testimonial-when">{item.timeframe}</span>
      </figcaption>
      {item.skills.length > 0 ? (
        <ul
          className="home-testimonial-skill-list"
          aria-label="Endorsed skills"
        >
          {item.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}

export function TestimonialsSection({
  className = "",
}: {
  className?: string;
}) {
  const lead = featuredTestimonial;

  return (
    <section
      id="testimonials"
      className={["home-testimonials", className].filter(Boolean).join(" ")}
      aria-labelledby="home-testimonials-heading"
    >
      <header className="home-recent-head">
        <div>
          <span className="blog-intro-pill">
            <Quote size={14} />
            Client testimonials
          </span>
          <h2 id="home-testimonials-heading">
            What clients wrote after the work
          </h2>
          <p>
            Method is the lead note: a full-time React partnership that is still
            going after more than four years. The cards under it keep the other
            Upwork reviews, including a separate long-term React contract, in
            the client&apos;s own words.
          </p>
        </div>
        <Link
          href={UPWORK_PROFILE_URL}
          className="home-recent-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Upwork reviews <ArrowRight size={16} />
        </Link>
      </header>

      <figure className={`home-testimonial-featured accent-${lead.accent}`}>
        <div className="home-testimonial-featured-top">
          <span className="home-testimonial-lead-badge">{lead.project}</span>
          <Stars rating={lead.rating} />
        </div>
        {lead.verbatim === false ? (
          <p className="home-testimonial-summary">{lead.quote}</p>
        ) : (
          <>
            <Quote
              className="home-testimonial-mark"
              size={28}
              aria-hidden="true"
            />
            <blockquote>
              <p>{lead.quote}</p>
            </blockquote>
          </>
        )}
        {lead.metrics ? (
          <dl className="home-testimonial-metrics">
            {lead.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <figcaption>
          <span className="home-testimonial-type">{lead.projectType}</span>
          <span className="home-testimonial-who">{lead.attribution}</span>
          <span className="home-testimonial-project">
            {lead.jobTitle ?? lead.project}
          </span>
          <span className="home-testimonial-when">{lead.timeframe}</span>
        </figcaption>
      </figure>

      <div className="home-testimonial-grid">
        {supportingTestimonials.map((item, index) => (
          <TestimonialCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="home-testimonial-endorsements">
        <p>Skills these clients endorsed</p>
        <ul>
          {testimonialEndorsements.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
