"use client";

import { useState, useMemo } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import FilterBar from "@/components/molecules/FilterBar";
import ProjectCard from "@/components/molecules/ProjectCard";

type FilterOption = "All" | ProjectCategory;

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const filters: FilterOption[] = ["All", ...projectCategories];

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
        <p className="text-body" style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
