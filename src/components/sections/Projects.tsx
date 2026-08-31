import React from "react";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  const flagshipProject = featuredProjects.find((p) => p.featured);
  const regularProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="border-t border-zinc-800/80 bg-zinc-900/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Engineered full-stack applications and AI systems built with modern web technologies and deep learning.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {/* Flagship Project Card */}
          {flagshipProject && (
            <article
              key={flagshipProject.id}
              className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-zinc-900/80 to-zinc-900/90 p-8 sm:p-10 lg:p-12 shadow-xl transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-600 px-4 py-1 text-xs sm:text-sm font-semibold text-white shadow-xs">
                    Flagship Project
                  </span>
                  {flagshipProject.status && (
                    <span className="rounded-full border border-zinc-700 bg-zinc-800/80 px-3.5 py-0.5 text-xs sm:text-sm font-medium capitalize text-zinc-300">
                      {flagshipProject.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {flagshipProject.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                    {flagshipProject.summary}
                  </p>

                  {flagshipProject.problem && (
                    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-sm sm:text-base leading-relaxed text-zinc-300">
                      <span className="font-semibold text-white">Problem Addressed: </span>
                      {flagshipProject.problem}
                    </div>
                  )}

                  {/* Actions */}
                  {(flagshipProject.githubUrl || flagshipProject.liveUrl) && (
                    <div className="mt-8 flex items-center gap-4 text-sm sm:text-base font-medium">
                      {flagshipProject.githubUrl && (
                        <a
                          href={flagshipProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-5 py-2.5 text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          <span>Repository</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      )}
                      {flagshipProject.liveUrl && (
                        <a
                          href={flagshipProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          <span>Live Demo</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-7 lg:col-span-5">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400">
                      Technical Highlights
                    </h4>
                    <ul className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-zinc-300">
                      {flagshipProject.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400">
                      Tech Stack
                    </h4>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {flagshipProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-blue-900/60 bg-blue-950/60 px-3 py-1 text-xs sm:text-sm font-medium text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Supporting Projects Grid (3 Columns on Desktop) */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/90"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="rounded-full border border-zinc-800 bg-zinc-800/60 px-3 py-0.5 text-xs font-medium capitalize text-zinc-400">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-300">
                    {project.summary}
                  </p>

                  {/* Technical Highlights */}
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-zinc-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-800 bg-zinc-800/50 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-5 flex items-center gap-4 text-xs sm:text-sm font-medium">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-300 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          Repository →
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
