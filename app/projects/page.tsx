"use client";
import { useState } from "react";
import { PROJECTS } from "@/constants";
import ProjectCard from "@/components/common/ProjectCard";

const allCategories = [
  "All",
  ...Array.from(
    new Set(
      PROJECTS.flatMap((p) =>
        Array.isArray(p.category) ? p.category : [p.category]
      )
    )
  ),
];
const allTechs = Array.from(
  new Set(PROJECTS.flatMap((p) => p.technologies))
).sort();

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filtered = PROJECTS.filter((p) => {
    const cats = Array.isArray(p.category) ? p.category : [p.category];
    const categoryMatch =
      activeCategory === "All" || cats.includes(activeCategory);
    const techMatch = !activeTech || p.technologies.includes(activeTech);
    return categoryMatch && techMatch;
  });

  return (
    <div className="flex p-6 lg:p-0 min-h-screen flex-col items-center justify-center font-sans bg-background text-foreground">
      <div className="max-w-full lg:w-[45%]">
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-xl lg:text-5xl font-bold bg-background text-foreground">
            My Projects
          </h2>
          <p className="text-sm lg:text-xl leading-4 lg:leading-7 text-foreground mt-3">
            A collection of things Ive built — filter by category or tech stack.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-bold px-3.5 py-1.5 rounded-md border cursor-pointer transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-background border-primary"
                    : "bg-transparent border-foreground/20 text-foreground/50 hover:border-foreground/50 hover:text-foreground/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech filter */}
          <div className="flex flex-wrap gap-1.5">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                className={`font-sans text-[11px] font-bold px-2.5 py-1 rounded border cursor-pointer transition-all duration-200 ${
                  activeTech === tech
                    ? "bg-warning/10 border-warning text-warning"
                    : "bg-transparent border-foreground/10 text-foreground/40 hover:border-foreground/30 hover:text-foreground/70"
                }`}
              >
                {tech}
              </button>
            ))}
            {activeTech && (
              <button
                onClick={() => setActiveTech(null)}
                className="font-sans text-[11px] font-bold px-2.5 py-1 rounded border border-dashed border-foreground/25 cursor-pointer bg-transparent text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>

        {/* Count */}
        <p className="font-sans text-sm text-foreground/30 font-bold mb-6">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid — 1 col on mobile, 3 on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 font-sans text-sm font-bold text-foreground/20">
            No projects match these filters.
          </div>
        )}
      </div>
    </div>
  );
}