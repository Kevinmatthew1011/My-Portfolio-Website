import React from "react";
import Image from "next/image";
import { profileConfig } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* Subtle Background Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Software Engineering & Applied AI
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              {profileConfig.name}
            </h1>

            <p className="mt-4 text-xl font-semibold tracking-tight text-blue-400 sm:text-2xl lg:text-3xl">
              {profileConfig.headline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl">
              {profileConfig.bio}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-md transition-all hover:bg-zinc-200 hover:shadow-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/90 px-7 py-3.5 text-base font-semibold text-zinc-200 shadow-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Contact Me
              </a>
            </div>

            {/* Professional Links */}
            <div className="mt-8 flex items-center gap-3.5">
              <a
                href={profileConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
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
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.28a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              <a
                href={profileConfig.socials.email}
                aria-label="Email Kevin Matthew"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
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

          {/* Right Column: Large Portrait Card */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative">
              {/* Clean Framed Card */}
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-900 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[390px] xl:w-[390px]">
                <Image
                  src="/images/profile.jpg"
                  alt="Kevin Matthew - Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1280px) 384px, 400px"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Ambient Radial Accent */}
              <div
                className="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-3xl bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent blur-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[390px] xl:w-[390px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
