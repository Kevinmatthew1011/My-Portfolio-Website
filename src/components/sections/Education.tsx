import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education Section"
      className="border-t border-zinc-800/80 bg-zinc-900/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">
            Academic Background
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Formal undergraduate computing curriculum and foundation.
          </p>
        </div>

        <div className="mt-14">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 sm:p-10 shadow-sm transition-colors hover:border-zinc-700 md:flex-row md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  R.M.D. Engineering College
                </h3>
                <span className="rounded-full border border-zinc-700 bg-zinc-800/80 px-3.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-300">
                  Tamil Nadu, India
                </span>
              </div>

              <p className="mt-2.5 text-base sm:text-lg font-medium text-blue-400">
                Bachelor of Engineering in Computer Science and Engineering
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl border border-blue-900/60 bg-blue-950/60 px-4 py-2.5 text-sm sm:text-base font-semibold text-blue-300">
                Current Undergraduate Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
