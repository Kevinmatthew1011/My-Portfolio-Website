import React from "react";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Hackathons and Achievements Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Hackathons & Achievements
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Competitions, hackathons, and technical milestones.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-blue-200/60 bg-blue-50/60 px-2 py-0.5 text-xs font-medium capitalize text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/60 dark:text-blue-300">
                    {item.type}
                  </span>
                  {item.date && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.date}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>

                {item.organization && (
                  <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.organization}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
