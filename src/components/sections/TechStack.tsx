import React from "react";
import { skillCategories } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-label="Tech Stack Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Tech Stack
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Technologies, frameworks, and tools I use to build full-stack and AI-powered systems.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-700/60 dark:bg-zinc-800/80 dark:text-zinc-200"
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
