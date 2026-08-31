import React from "react";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Hackathons and Achievements Section"
      className="border-t border-zinc-800/80 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">
            Competitions & Milestones
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Hackathons & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Verified competitive hackathons, project selections, and technical problem-solving milestones.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 sm:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/90"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-blue-900/60 bg-blue-950/60 px-3.5 py-0.5 text-xs font-medium capitalize text-blue-300">
                    {item.type}
                  </span>
                  {item.date && (
                    <span className="text-xs text-zinc-500">
                      {item.date}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                  {item.title}
                </h3>

                {item.organization && (
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-zinc-400">
                    {item.organization}
                  </p>
                )}

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
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
