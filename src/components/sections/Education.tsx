import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Education
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Academic foundation and coursework.
        </p>

        <div className="mt-10">
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                R.M.D. Engineering College
              </h3>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Tamil Nadu, India
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Bachelor of Engineering in Computer Science and Engineering
            </p>

            <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Current Undergraduate Student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
