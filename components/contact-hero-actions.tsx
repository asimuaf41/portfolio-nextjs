"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { messagingChannels } from "@/data/site-content";

type BackSource = "about" | "projects" | "resume" | null;

export function ContactHeroActions() {
  const searchParams = useSearchParams();
  const [backSource, setBackSource] = useState<BackSource>(null);

  useEffect(() => {
    const from = searchParams.get("from");
    if (from === "about" || from === "projects" || from === "resume") {
      setBackSource(from);
      return;
    }

    const referrer = document.referrer;
    if (!referrer) {
      setBackSource(null);
      return;
    }

    try {
      const path = new URL(referrer).pathname.replace(/\/$/, "");
      if (path === "/about") setBackSource("about");
      else if (path === "/projects") setBackSource("projects");
      else if (path === "/resume") setBackSource("resume");
      else setBackSource(null);
    } catch {
      setBackSource(null);
    }
  }, [searchParams]);

  const whatsapp = messagingChannels.find((c) => c.id === "whatsapp");
  const email = messagingChannels.find((c) => c.id === "email");

  return (
    <div className="contact-hero-actions">
      {whatsapp ? (
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-btn-primary"
        >
          <MessageCircle size={16} />
          WhatsApp me
        </a>
      ) : null}
      {email ? (
        <a href={email.href} className="contact-btn contact-btn-ghost">
          <Mail size={16} />
          Email a brief
        </a>
      ) : null}
      {backSource === "about" ? (
        <Link href="/about" className="contact-btn contact-btn-ghost">
          <ArrowLeft size={15} />
          Back to about
        </Link>
      ) : null}
      {backSource === "projects" ? (
        <Link href="/projects" className="contact-btn contact-btn-ghost">
          <ArrowLeft size={15} />
          Back to projects
        </Link>
      ) : null}
      {backSource === "resume" ? (
        <Link href="/resume" className="contact-btn contact-btn-ghost">
          <ArrowLeft size={15} />
          Back to resume
        </Link>
      ) : null}
    </div>
  );
}
