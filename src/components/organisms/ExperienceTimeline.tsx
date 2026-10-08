import ScrollReveal from "@/components/atoms/ScrollReveal";
import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp, i) => (
        <ScrollReveal key={exp.company} delay={i * 100}>
          <div className={`timeline__item ${exp.current ? "timeline__item--current" : ""}`}>
            <div className="timeline__header">
              <span
                className={`timeline__period ${exp.current ? "timeline__period--current" : "timeline__period--past"}`}
              >
                {exp.period}
              </span>
              {exp.current && <span className="timeline__current-badge">CURRENT</span>}
            </div>

            <h3 className="timeline__role">{exp.role}</h3>
            <p className="timeline__company">{exp.company}</p>

            <ul className="timeline__achievements">
              {exp.achievements.map((item) => (
                <li key={item} className="timeline__achievement">
                  <span className="material-symbols-outlined timeline__achievement-icon" aria-hidden="true">
                    arrow_right
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {exp.mode && (
              <div className="timeline__tags">
                <span className="timeline__tag">{exp.location}</span>
                <span className="timeline__tag">{exp.mode}</span>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
