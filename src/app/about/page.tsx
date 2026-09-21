import type { Metadata } from "next";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";
import EducationSection from "@/components/organisms/EducationSection";
import SkillsSection from "@/components/organisms/SkillsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Diogo Santoro — a Software Developer with experience at John Deere and ISBET, specializing in Java, TypeScript, and DevOps.",
};

export default function AboutPage() {
  return (
    <div className="section section--first">
      <div className="container container--narrow">
        {/* Page heading */}
        <ScrollReveal>
          <span className="text-label">About</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="heading-page" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-3xl)" }}>
            A bit about me<span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        {/* Narrative */}
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ marginBottom: "var(--space-xl)" }}>
            I&apos;m Diogo — a Brazilian software developer currently based in Vigo, Spain. 
            I started my career in 2022 at ISBET, where I cut my teeth on legacy .NET systems, 
            Visual Basic, and SQL Server. It wasn&apos;t glamorous work, but it taught me how real 
            production software behaves — and how to keep it running when things go wrong.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-body" style={{ marginBottom: "var(--space-xl)" }}>
            From there, I moved into an internship at John Deere, where I worked across 
            the full stack — Spring Boot backends, React frontends, and a growing focus on 
            DevOps. I set up CI/CD pipelines with GitHub Actions, wrote end-to-end tests with 
            Playwright, and helped upgrade legacy codebases to resolve vulnerabilities.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="text-body" style={{ marginBottom: "var(--space-3xl)" }}>
            Outside of work, I build things that interest me. I run a homelab where I 
            self-host everything from cloud storage to AI models using GitOps and Terraform. 
            I&apos;ve built microservices, AI gateways, and landing pages for real 
            clients. I&apos;m pursuing a Computer Science degree remotely and I&apos;m always 
            looking for the next challenge — ideally with a team that values clean code, 
            honest communication, and continuous improvement.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="accent-line" style={{ marginBottom: "var(--space-3xl)" }} />
        </ScrollReveal>
      </div>

      {/* Experience */}
      <div className="container container--narrow">
        <ScrollReveal>
          <span className="text-label">Experience</span>
          <h2 className="heading-section" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-2xl)" }}>
            Where I&apos;ve worked<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>
        <ExperienceTimeline />
      </div>

      {/* Education */}
      <div className="container container--narrow" style={{ marginTop: "var(--space-4xl)" }}>
        <ScrollReveal>
          <span className="text-label">Education</span>
          <h2 className="heading-section" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-2xl)" }}>
            Academic background<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>
        <EducationSection />
      </div>

      {/* Skills */}
      <div className="container" style={{ marginTop: "var(--space-4xl)" }}>
        <ScrollReveal>
          <span className="text-label">Skills</span>
          <h2 className="heading-section" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-2xl)" }}>
            What I work with<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>
        <SkillsSection />
      </div>
    </div>
  );
}
