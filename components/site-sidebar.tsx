"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site-content";
import { personalInfo } from "@/data/home";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "+923026046119";
const WHATSAPP_HREF = "https://wa.me/923026046119";

function WhatsAppIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <div className="sidebar-shell">
      <div className="sidebar-profile">
        <div className="sidebar-profile-visual">
          <span className="sidebar-profile-orbit" aria-hidden="true" />
          <span className="sidebar-profile-glow" aria-hidden="true" />
          <Link
            href="/"
            onClick={onNavigate}
            className="sidebar-profile-ring"
            aria-label="Go to home"
          >
            <Image
              src="/asim-30-june-profile.jpg"
              alt="Portrait of Asim Ali"
              fill
              sizes="210px"
              className="sidebar-profile-image"
              priority
            />
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-status"
            aria-label={`Available on WhatsApp at ${WHATSAPP_NUMBER}. Opens chat.`}
          >
            <span className="sidebar-status-face sidebar-status-idle">
              <span className="sidebar-status-dot" aria-hidden="true" />
              Available
            </span>
            <span className="sidebar-status-face sidebar-status-whatsapp">
              <span className="sidebar-status-wa-icon">
                <WhatsAppIcon />
              </span>
              <span className="sidebar-status-wa-copy">
                <span className="sidebar-status-wa-label">WhatsApp</span>
                <span className="sidebar-status-wa-number">{WHATSAPP_NUMBER}</span>
              </span>
            </span>
          </a>
        </div>

        <div className="sidebar-profile-meta">
          <p className="sidebar-profile-name">{personalInfo.name}</p>
          <p className="sidebar-profile-role">
            Full-Stack &amp; AI Engineer
          </p>
        </div>
      </div>

      <nav aria-label="Main navigation" className="sidebar-nav">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "sidebar-nav-link block rounded px-3 py-2 text-center text-sm font-semibold text-[#9ca4ba]",
                  (pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))) &&
                    "bg-[#037fff] text-white hover:bg-[#037fff] hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="sidebar-footer">
        <div className="sidebar-footer-divider" aria-hidden="true" />
        <p className="sidebar-footer-brand">{personalInfo.name}</p>
        <p className="sidebar-footer-copy">
          &copy; {year} · Building products with React, Next.js &amp; AI
        </p>
      </footer>
    </div>
  );
}
