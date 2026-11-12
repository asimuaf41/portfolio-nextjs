"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Looping, muted iOS demo inside a phone frame. The poster is what server
 * render and reduced-motion users see; the video mounts only after hydration
 * and only when motion is allowed.
 */
export function PhoneVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlay(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div className="phone-frame">
      {play ? (
        <video
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label={alt}
        />
      ) : (
        <Image src={poster} alt={alt} width={720} height={1560} sizes="240px" />
      )}
    </div>
  );
}
