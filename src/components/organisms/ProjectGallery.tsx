"use client";

import { useState, useMemo } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import FilterBar from "@/components/molecules/FilterBar";
import ProjectCard from "@/components/molecules/ProjectCard";

type FilterOption = "All" | ProjectCategory;

// ⚡ Bolt: Extract static configuration arrays outside the React component's function scope
// to minimize client-side rendering overhead and memory allocations on re-renders.
const filters: FilterOption[] = ["All", ...projectCategories];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div id="project-gallery">
      {/* Filter bar */}
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Project grid */}
      <div className="grid grid--3 stagger-children">
        {filteredProjects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "var(--space-3xl)",
            marginBottom: "var(--space-2xl)",
            gap: "var(--space-sm)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "2.5rem", color: "var(--text-secondary)" }}
            aria-hidden="true"
          >
            folder_off
          </span>
          <p className="text-body" style={{ textAlign: "center" }}>
            No projects in this category yet.
          </p>
          <button
            className="btn btn--secondary"
            onClick={() => setActiveFilter("All")}
            style={{ marginTop: "var(--space-sm)" }}
          >
            Clear filter
          </button>
        </div>
      )}

      {/* Screen reader announcement for dynamic filtering */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in {activeFilter} category.
      </div>
    </div>
  );
}
