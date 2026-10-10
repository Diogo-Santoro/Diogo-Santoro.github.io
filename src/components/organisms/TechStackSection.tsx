import ScrollReveal from "@/components/atoms/ScrollReveal";
import { skills } from "@/data/skills";

const ICON_MAP: Record<string, { icon: string; colorClass: string; desc: string }> = {
  "Languages & Frameworks": {
    icon: "dns",
    colorClass: "tech-card__icon--primary",
    desc: "High-throughput microservices, decoupled orchestration, and mission-critical relational databases.",
  },
  "Infrastructure & DevOps": {
    icon: "monitoring",
    colorClass: "tech-card__icon--tertiary",
    desc: "Infrastructure as code, continuous delivery pipelines with zero downtime, and deep telemetry.",
  },
  Databases: {
    icon: "database",
    colorClass: "tech-card__icon--secondary",
    desc: "Reliable data persistence with PostgreSQL, MySQL, SQL Server, and in-memory caching with Redis.",
  },
  "Testing & Quality": {
    icon: "verified",
    colorClass: "tech-card__icon--tertiary",
    desc: "Comprehensive testing methodologies and static analysis.",
  },
  "Tools & Practices": {
    icon: "devices",
    colorClass: "tech-card__icon--primary",
    desc: "Modern tooling and agile engineering practices.",
  },
};

export default function TechStackSection() {
  const displaySkills = skills.slice(0, 3);

  return (
    <section className="tech-section" id="tech-stack">
      <div className="container">
        <ScrollReveal>
          <div className="tech-section__header">
            <div>
              <span className="text-label">
                <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }} aria-hidden="true">
                  memory
                </span>
                CORE COMPETENCIES
              </span>
              <h2 className="heading-section" style={{ marginTop: "var(--space-xs)" }}>
                Tech Stack & Ecosystem
              </h2>
            </div>
            <p className="tech-section__subtitle">
              Modern architecture balancing native backend performance, fluid frontend reactivity,
              and continuous observability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid--3">
          {displaySkills.map((group, i) => {
            const mapping = ICON_MAP[group.category] || {
              icon: "code",
              colorClass: "tech-card__icon--primary",
              desc: "Various tools and frameworks.",
            };
            return (
              <ScrollReveal key={group.category} delay={i * 100}>
                <div className="tech-card">
                  <div>
                    <div className={`tech-card__icon ${mapping.colorClass}`}>
                      <span className="material-symbols-outlined" aria-hidden="true">{mapping.icon}</span>
                    </div>
                    <h3 className="tech-card__title">{group.category}</h3>
                    <p className="tech-card__desc">{mapping.desc}</p>
                  </div>
                  <div className="pills">
                    {group.items.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
