import React from "react";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  const flagshipProject = featuredProjects.find((p) => p.featured);
  const regularProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="border-t border-zinc-200/80 py-20 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Featured Projects
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Selected software engineering and AI systems built end-to-end.
        </p>

        <div className="mt-10 space-y-8">
          {/* Flagship Project Card */}
          {flagshipProject && (
            <article
              key={flagshipProject.id}
              className="relative overflow-hidden rounded-2xl border-2 border-blue-600/30 bg-gradient-to-b from-blue-50/20 to-transparent p-6 sm:p-8 shadow-xs dark:border-blue-500/30 dark:from-blue-950/20 dark:to-transparent"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white dark:bg-blue-500">
                    Flagship Project
                  </span>
                  {flagshipProject.status && (
                    <span className="rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-medium capitalize text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                      {flagshipProject.status}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                {flagshipProject.title}
              </h3>

              <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300">
                {flagshipProject.summary}
              </p>

              {flagshipProject.problem && (
                <div className="mt-4 rounded-lg bg-zinc-100/80 p-3.5 text-sm text-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Problem Addressed: </span>
                  {flagshipProject.problem}
                </div>
              )}

              {/* Technical Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Technical Highlights
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {flagshipProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-blue-200/60 bg-blue-50/60 px-2.5 py-1 text-xs font-medium text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/60 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              {(flagshipProject.githubUrl || flagshipProject.liveUrl) && (
                <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
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
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-blue-400"
                    >
                      <span>Live Demo</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          )}

          {/* Other Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {regularProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium capitalize text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.summary}
                  </p>

                  {/* Technical Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-800/80 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-5 flex items-center gap-4 text-xs font-medium">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-700 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                        >
                          Repository →
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-blue-400"
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
