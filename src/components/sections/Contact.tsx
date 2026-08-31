import React from "react";
import { profileConfig } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Feel free to reach out regarding software projects, hackathons, or technical collaboration.
        </p>

        {/* Primary Email CTA Card */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Direct Email
          </p>
          <a
            href={profileConfig.socials.email}
            className="mt-2 block text-lg font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
          >
            {profileConfig.email}
          </a>

          <div className="mt-6">
            <a
              href={profileConfig.socials.email}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100"
            >
              <svg
                className="h-4 w-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Secondary Professional Channels */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <a
            href={profileConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-700 shadow-xs transition hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={profileConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-700 shadow-xs transition hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.28a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
