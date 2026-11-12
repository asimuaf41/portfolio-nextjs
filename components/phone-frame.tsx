import Image from "next/image";

/** Phone-shaped bezel that wraps a portrait screenshot without cropping it. */
export function PhoneFrame({
  src,
  alt,
  width = 720,
  height = 1600,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className="phone-frame">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 60vw, 240px"
        priority={priority}
      />
    </div>
  );
}
