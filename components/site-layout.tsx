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
    <div className="portfolio-shell text-slate-100 lg:grid">
      <aside className="hidden border-r border-[#2e344e] bg-[#191d2b] lg:block">
        <SiteSidebar />
      </aside>

      <div className="lg:hidden">
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[#2e344e] bg-[#191d2b] p-3 backdrop-blur">
          <span
            className="font-signature text-2xl font-normal tracking-wide select-none"
            style={{
              fontFamily:
                "'Pacifico', 'Dancing Script', 'Great Vibes', cursive, sans-serif",
              color: "#037fff",
              letterSpacing: "2px",
            }}
          >
            Asim Ali
          </span>
          <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
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
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
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
