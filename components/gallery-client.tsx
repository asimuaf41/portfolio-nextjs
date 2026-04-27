"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryClientProps = {
  images: string[];
};

export function GalleryClient({ images }: GalleryClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <section className="gallery-page">
        <div className="gallery-page-wrapper">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className="gallery-thumb-button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image src={image} alt={`Gallery image ${index + 1}`} width={200} height={200} />
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="gallery-lightbox-overlay"
            onClick={() => setActiveIndex(null)}
            aria-label="Close preview"
          />
          <div className="gallery-lightbox-content">
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={() =>
                setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))
              }
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="gallery-lightbox-image-wrap">
              <Image
                src={images[activeIndex]}
                alt={`Gallery preview ${activeIndex + 1}`}
                width={1280}
                height={820}
                className="gallery-lightbox-image"
                priority
              />
            </div>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
