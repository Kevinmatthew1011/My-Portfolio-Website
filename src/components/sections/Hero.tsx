import React from "react";
import Image from "next/image";
import { profileConfig } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-16 text-center sm:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        {/* Profile Portrait */}
        <div className="mb-6">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-200 shadow-sm ring-4 ring-zinc-100 sm:h-32 sm:w-32 dark:border-zinc-800 dark:ring-zinc-900">
            <Image
              src="/images/profile.jpg"
              alt="Kevin Matthew - Portrait"
              width={128}
              height={128}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading & Role */}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
          {profileConfig.name}
        </h1>

        <p className="mt-3 text-lg font-medium text-blue-600 sm:text-xl dark:text-blue-400">
          {profileConfig.headline}
        </p>

        {/* Supporting Copy */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {profileConfig.bio}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Contact Me
          </a>
        </div>

        {/* Verified Social & Professional Links */}
        <div className="mt-8 flex items-center justify-center gap-4 text-zinc-500 dark:text-zinc-400">
          <a
            href={profileConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <a
            href={profileConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.28a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
          </a>

          <a
            href={profileConfig.socials.email}
            aria-label="Email Kevin Matthew"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <svg
              className="h-5 w-5 stroke-current"
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
          </a>
        </div>
      </div>
    </section>
  );
}
