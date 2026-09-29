import { heroTechStack } from "@/data/home";

/** Infinite scrolling tool strip. Decorative/duplicate of info stated elsewhere. */
export function HomeTechMarquee() {
  const items = [...heroTechStack, ...heroTechStack];

  return (
    <div className="hero-marquee" aria-hidden="true">
      <div className="hero-marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="hero-marquee-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
