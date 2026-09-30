"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteSidebar } from "./site-sidebar";
import { Button } from "./ui/button";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="portfolio-shell lg:grid">
      <aside className="portfolio-aside hidden lg:block">
        <SiteSidebar />
      </aside>

      <div className="lg:hidden">
        <div className="mobile-topbar sticky top-0 z-40 flex items-center justify-between p-3 backdrop-blur">
          <span className="mobile-topbar-brand font-signature text-2xl font-normal tracking-wide select-none">
            Asim Ali
          </span>
          <Button
            variant="outline"
            size="sm"
            className="theme-aware-outline-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <div
          className={`mobile-overlay ${open ? "mobile-overlay-open" : ""}`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />
        <div className={`mobile-drawer ${open ? "mobile-drawer-open" : ""}`}>
          <div className="flex justify-end p-3">
            <Button
              variant="ghost"
              size="sm"
              className="theme-aware-ghost-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <SiteSidebar onNavigate={() => setOpen(false)} />
        </div>
      </div>

      <div className="portfolio-main">{children}</div>
    </div>
  );
}
