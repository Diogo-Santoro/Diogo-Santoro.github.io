import { memo } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

// ⚡ Bolt: Wrap stateless ProjectCard in React.memo to prevent unnecessary
// re-renders when the parent ProjectGallery updates its filter state.
const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card"
      id={`project-card-${project.slug}`}
      // ⚡ Bolt: Disable eager prefetching on hover instead of viewport entry
      // to prevent a waterfall of network requests when scrolling through the gallery.
      prefetch={false}
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
        View Project <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
});

export default ProjectCard;
