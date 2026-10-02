import Link from "next/link";
import type { Project } from "@/data/projects";

interface FeaturedCardProps {
  project: Project;
  index: number;
}

export default function FeaturedCard({ project, index }: FeaturedCardProps) {
  const accentClass =
    index % 3 === 0 ? "pill--primary" : index % 3 === 1 ? "pill--secondary" : "pill--tertiary";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="featured-card"
      id={`featured-${project.slug}`}
    >
      <div className="featured-card__top">
        <div className="featured-card__number">
          <span className={`pill ${accentClass}`}>{project.category}</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            Open Source
          </span>
        </div>

        <h3 className="featured-card__title">{project.title}</h3>

        <p className="featured-card__description">{project.description}</p>

        <div className="pills" style={{ marginTop: "var(--space-xs)" }}>
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured-card__bottom">
          <span className="featured-card__arrow">
            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
              code
            </span>
            View Project
          </span>
        </div>
      </div>
    </Link>
  );
}
