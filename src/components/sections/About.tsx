import React from "react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          About Me
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Background & Engineering Focus
        </p>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          <p>
            I am a Computer Science and Engineering student at{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              R.M.D. Engineering College
            </span>{" "}
            pursuing my Bachelor of Engineering degree. My focus centers on full-stack application development, backend architecture, and practical machine learning systems.
          </p>

          <p>
            Rather than relying on isolated tutorials, I approach software engineering by building complete, functional projects end-to-end—from relational data models and API services to responsive user interfaces and applied AI pipelines.
          </p>

          <p>
            I prioritize writing readable, maintainable code, structuring well-organized system architectures, and continuously strengthening my understanding of core computer science fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
