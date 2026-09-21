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
            <h2 className="heading-section">Featured Work</h2>
            <Link href="/projects" className="link text-label">
              All Projects →
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
