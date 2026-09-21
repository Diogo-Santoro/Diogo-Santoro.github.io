import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import MagneticButton from "@/components/atoms/MagneticButton";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="section section--first">
      <div className="container">
        <ScrollReveal>
          <Link href="/projects" className="project-detail__back">
            ← Back to Projects
          </Link>
        </ScrollReveal>

        {/* Header */}
        <div className="project-detail__header">
          <ScrollReveal delay={100}>
            <h1 className="project-detail__title">{project.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="project-detail__meta">
              <span className="pill" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                {project.category}
              </span>
              <MagneticButton
                href={project.githubUrl}
                className=""
                strength={0.2}
              >
                View on GitHub ↗
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Body */}
        <div className="project-detail__body">
          <div>
            <ScrollReveal delay={200}>
              <p className="project-detail__description">
                {project.longDescription}
              </p>
            </ScrollReveal>

            {project.highlights.length > 0 && (
              <ScrollReveal delay={250}>
                <div>
                  <h2 className="project-detail__highlights-title">
                    Key Highlights
                  </h2>
                  <div className="project-detail__highlights-list">
                    {project.highlights.map((highlight, i) => (
                      <p key={i} className="project-detail__highlight">
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="project-detail__sidebar">
            <ScrollReveal delay={300}>
              <div className="project-detail__sidebar-section">
                <h3 className="project-detail__stack-title">Tech Stack</h3>
                <div className="pills">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="project-detail__sidebar-section">
                <h3 className="project-detail__stack-title">Source Code</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {project.githubUrl.replace("https://github.com/", "")} ↗
                </a>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        {/* Prev / Next navigation */}
        <nav className="project-nav" aria-label="Project navigation">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="project-nav__item"
            >
              <span className="project-nav__label">← Previous</span>
              <span className="project-nav__name">{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="project-nav__item project-nav__item--next"
            >
              <span className="project-nav__label">Next →</span>
              <span className="project-nav__name">{nextProject.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
