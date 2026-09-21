import type { Metadata } from "next";
import ProjectGallery from "@/components/organisms/ProjectGallery";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore all projects by Diogo Santoro — from full-stack apps and DevOps infrastructure to Java games and AI microservices.",
};

export default function ProjectsPage() {
  return (
    <div className="section section--first">
      <div className="container">
        <ScrollReveal>
          <span className="text-label">Projects</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            className="heading-page"
            style={{
              marginTop: "var(--space-md)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Things I&apos;ve built<span className="text-accent">.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p
            className="text-body"
            style={{
              maxWidth: "600px",
              marginBottom: "var(--space-3xl)",
            }}
          >
            A collection of projects spanning frontend, backend, full-stack,
            DevOps, and game development — from corporate tools to personal
            experiments.
          </p>
        </ScrollReveal>

        <ProjectGallery />
      </div>
    </div>
  );
}
