"use client";
import { useState } from "react";
import Image from "next/image";
import { ProjectProps } from "@/interfaces";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const [expanded, setExpanded] = useState(false);
  const cats = Array.isArray(project.category)
    ? project.category
    : [project.category];

  return (
    <div className="bg-background text-foreground border border-foreground/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5">
      {/* Image / placeholder */}
      <div className="w-full aspect-video bg-foreground/5 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-center opacity-15">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}

        {/* Category badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {cats.map((c) => (
            <span
              key={c}
              className="font-sans text-[10px] font-bold tracking-widest px-2 py-0.5 rounded bg-background/80 border border-warning/60 text-warning backdrop-blur-sm uppercase"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-lg lg:text-xl m-0 tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="text-sm lg:text-base text-foreground/60 m-0 leading-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-sans text-[11px] font-bold tracking-wide px-2 py-0.5 rounded bg-foreground/5 border border-foreground/10 text-foreground/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features expandable */}
        {project.features.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-transparent border-none cursor-pointer text-foreground/50 hover:text-primary underline underline-offset-2 decoration-primary-subtle decoration-2 font-sans text-sm font-bold tracking-wide p-0 flex items-center gap-2 transition-colors duration-200"
            >
              {/* <span
                className="inline-block text-primary transition-transform duration-[250ms]"
                style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
              >
              </span> */}
              {expanded ? "Hide features" : "Read more"}
            </button>

            <div
              className="overflow-hidden transition-all duration-[400ms] ease-in-out"
              style={{ maxHeight: expanded ? "400px" : "0" }}
            >
              <ul className="mt-2.5 mb-0 pl-4 flex flex-col gap-1.5 list-disc">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm text-foreground/55 leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer links */}
        <div className="mt-auto pt-3 flex gap-4 border-t border-foreground/10">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-foreground/50 hover:text-primary font-sans text-sm font-bold no-underline hover:underline transition-colors duration-200"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 8l0 8" />
              <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
              <path d="M14 7l3 -1" />
            </svg>
              Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-foreground/50 hover:text-primary font-sans text-sm font-bold no-underline hover:underline decoration-warning decoration-2 transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}