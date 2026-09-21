import { skills, languages } from "@/data/skills";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export default function SkillsSection() {
  return (
    <div id="skills">
      <div className="skills-grid stagger-children">
        {skills.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 80}>
            <div className="skills-group">
              <h3 className="skills-group__title">{group.category}</h3>
              <div className="skills-group__items">
                {group.items.map((item) => (
                  <span key={item} className="skills-group__item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div style={{ marginTop: "var(--space-2xl)" }}>
          <h3 className="text-label" style={{ marginBottom: "var(--space-lg)" }}>
            Languages
          </h3>
          <div className="languages-row">
            {languages.map((lang) => (
              <div key={lang.name} className="language-item">
                <span className="language-item__name">{lang.name}</span>
                <span className="language-item__level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
