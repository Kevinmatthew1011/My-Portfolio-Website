import React from "react";
import { profileConfig } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50 py-8 text-center text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© 2026 {profileConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={profileConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href={profileConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:text-zinc-100"
          >
            LinkedIn
          </a>
          <a
            href={profileConfig.socials.email}
            className="transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:text-zinc-100"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
