import Link from "next/link";
import type { Project } from "@/data/projects";

interface FeaturedCardProps {
  project: Project;
  index: number;
}

export default function FeaturedCard({ project, index }: FeaturedCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="featured-card"
      id={`featured-${project.slug}`}
    >
      <div className="featured-card__top">
        <span className="featured-card__number">0{index + 1}</span>
        <h3 className="featured-card__title">{project.title}</h3>
        <p className="featured-card__description">{project.description}</p>
      </div>

      <div className="featured-card__bottom">
        <div className="pills">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
        <span className="featured-card__arrow">→</span>
      </div>
    </Link>
  );
}
