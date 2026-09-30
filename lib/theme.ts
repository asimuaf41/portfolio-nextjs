export const THEMES = ["dark", "light"] as const;

export type ThemeId = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeId = "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themeMeta: Record<
  ThemeId,
  { label: string; description: string; swatch: string }
> = {
  dark: {
    label: "Dark",
    description: "Current default look",
    swatch: "#10121b",
  },
  light: {
    label: "Light",
    description: "Clean daylight surfaces",
    swatch: "#eef1f8",
  },
};

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && THEMES.includes(value as ThemeId);
}

export function resolveTheme(value: unknown): ThemeId {
  return isThemeId(value) ? value : DEFAULT_THEME;
}
