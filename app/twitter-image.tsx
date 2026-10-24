export { default, alt, size, contentType } from "./opengraph-image";

// Route segment config must be a literal here; Next 16 rejects re-exporting it.
export const dynamic = "force-static";
