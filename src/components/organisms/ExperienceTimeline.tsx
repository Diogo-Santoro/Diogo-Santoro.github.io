import { experiences } from "@/data/experience";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export default function ExperienceTimeline() {
  return (
    <div className="timeline" id="experience-timeline">
      {experiences.map((exp, i) => (
        <ScrollReveal key={i} delay={i * 120}>
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__header">
              <h3 className="timeline__role">{exp.role}</h3>
              <div className="timeline__company">{exp.company}</div>
              <div className="timeline__meta">
                <span>{exp.period}</span>
                <span>{exp.location} · {exp.mode}</span>
              </div>
            </div>
            <ul className="timeline__achievements">
              {exp.achievements.map((achievement, j) => (
                <li key={j} className="timeline__achievement">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
