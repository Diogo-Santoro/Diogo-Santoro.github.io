import { education } from "@/data/experience";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export default function EducationSection() {
  return (
    <div className="education-list" id="education">
      {education.map((edu, i) => (
        <ScrollReveal key={i} delay={i * 100}>
          <div className="education-item">
            <h3 className="education-item__degree">{edu.degree}</h3>
            <div className="education-item__institution">{edu.institution}</div>
            <div className="education-item__meta">
              {edu.period} <span aria-hidden="true">·</span> {edu.location}
              {edu.status && <span className="education-item__status">{edu.status}</span>}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
