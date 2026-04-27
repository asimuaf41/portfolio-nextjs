import {
  AlertTriangle,
  Bot,
  Brain,
  LayoutDashboard,
  Rocket,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { BlogIcon } from "@/types/content";

export const blogIconMap: Record<BlogIcon, LucideIcon> = {
  Bot,
  Zap,
  LayoutDashboard,
  Brain,
  Workflow,
  AlertTriangle,
  Rocket,
};

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const formatBlogDateLong = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const slugifyHeading = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
