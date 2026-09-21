import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card"
      id={`project-card-${project.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
      }}
    >
      <span className="card__category">{project.category}</span>
      <h3 className="card__title">{project.title}</h3>
      <p className="card__description">{project.description}</p>
      <div className="pills" style={{ marginTop: "auto" }}>
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="pill">
            {tech}
          </span>
        ))}
      </div>
      <span className="card__arrow" style={{ marginTop: "var(--space-lg)" }}>
        View Project →
      </span>
    </Link>
  );
}
