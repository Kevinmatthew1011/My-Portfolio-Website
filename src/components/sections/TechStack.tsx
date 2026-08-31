import React from "react";
import { skillCategories } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-label="Tech Stack Section"
      className="border-t border-zinc-800/80 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">
            Skills & Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Technologies, frameworks, and developer tools I use to build full-stack and AI-powered systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/90"
            >
              <div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-blue-400">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800 bg-zinc-800/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
