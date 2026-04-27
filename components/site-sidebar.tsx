"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function SiteSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-[#191d2b] p-5">
      <div className="sidebar-profile-wrap">
        <div className="sidebar-profile-ring">
          <Image
            src="/meProfile.png"
            alt="Portrait of Asim Ali"
            fill
            sizes="210px"
            className="sidebar-profile-image"
            priority
          />
        </div>
        <span className="sidebar-profile-glow" aria-hidden="true" />
      </div>

      <nav aria-label="Main navigation">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "sidebar-nav-link block rounded px-3 py-2 text-center text-sm font-semibold text-[#9ca4ba]",
                  pathname === item.href &&
                    "bg-[#037fff] text-white hover:bg-[#037fff] hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-auto pt-4 text-center text-xs text-[#9ca4ba]">
        &copy; {new Date().getFullYear()} Software Engineer
      </p>
    </div>
  );
}
