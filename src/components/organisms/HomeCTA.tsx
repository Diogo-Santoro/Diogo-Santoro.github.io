import ScrollReveal from "@/components/atoms/ScrollReveal";
import MagneticButton from "@/components/atoms/MagneticButton";

export default function HomeCTA() {
  return (
    <section className="cta-band section" id="home-cta">
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-section cta-band__heading">
            Want to see everything<br />
            <span className="text-accent text-italic">I&apos;ve built?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="cta-band__text">
            From enterprise applications to self-hosted infrastructure — 
            explore the full collection of projects I&apos;ve worked on.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="cta-band__actions">
            <MagneticButton href="/projects" className="btn--filled">
              View All Projects
            </MagneticButton>
            <MagneticButton href="/about">
              About Me
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
