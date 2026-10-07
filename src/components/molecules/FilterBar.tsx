"use client";

import { type ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

interface FilterBarProps {
  filters: FilterOption[];
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by category">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""}`}
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          id={`filter-${filter.toLowerCase()}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
