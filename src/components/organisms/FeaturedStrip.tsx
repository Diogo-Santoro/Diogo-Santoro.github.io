import Link from "next/link";
import type { Project } from "@/data/projects";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import FeaturedCard from "@/components/molecules/FeaturedCard";

interface FeaturedStripProps {
  projects: Project[];
}

export default function FeaturedStrip({ projects }: FeaturedStripProps) {
  return (
    <section className="featured-strip" id="featured-projects">
      <div className="container">
        <ScrollReveal>
          <div className="featured-strip__header">
            <div>
              <span className="text-label">
                <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }}>
                  terminal
                </span>
                FEATURED WORK
              </span>
              <h2 className="heading-section" style={{ marginTop: "var(--space-xs)" }}>
                Projects in Spotlight
              </h2>
            </div>
            <Link href="/projects" className="link">
              View all projects →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div className="container">
        <div className="featured-strip__scroll">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <FeaturedCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
