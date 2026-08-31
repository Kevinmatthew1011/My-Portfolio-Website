import React from "react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="border-t border-zinc-800/80 bg-zinc-900/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">
              Background & Focus
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About Me
            </h2>
            <div className="mt-6 hidden lg:block">
              <span className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-medium text-zinc-400">
                B.E. Computer Science & Engineering
              </span>
            </div>
          </div>

          {/* Right Column: Verified Narrative */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-300 sm:text-lg lg:col-span-8">
            <p>
              I am a Computer Science and Engineering student at{" "}
              <span className="font-semibold text-white">
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
      </div>
    </section>
  );
}
