import React from "react";
import { profileConfig } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-10 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© 2026 {profileConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={profileConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            GitHub
          </a>
          <a
            href={profileConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            LinkedIn
          </a>
          <a
            href={profileConfig.socials.email}
            className="transition-colors hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            Email
          </a>
          {profileConfig.socials.resumeUrl && (
            <a
              href={profileConfig.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
