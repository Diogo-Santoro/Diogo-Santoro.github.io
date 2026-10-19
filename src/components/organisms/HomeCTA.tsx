import Link from "next/link";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import CopyEmailButton from "@/components/atoms/CopyEmailButton";

export default function HomeCTA() {
  return (
    <section className="cta-band section" id="home-cta">
      <div className="container" style={{ position: "relative" }}>
        {/* Glow orbs */}
        <div className="cta-band__glow-1" aria-hidden="true" />
        <div className="cta-band__glow-2" aria-hidden="true" />

        <div className="cta-band__content">
          <ScrollReveal>
            <span
              className="text-label"
              style={{ marginBottom: "var(--space-xs)", display: "flex" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }} aria-hidden="true">
                handshake
              </span>
              LET&apos;S TALK?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="cta-band__heading">
              Have a challenging engineering problem or want to accelerate your product?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="cta-band__text">
              Whether building a new distributed platform, architecting resilient cloud solutions,
              or leading high-performance teams — I&apos;m available for strategic projects and
              full-time roles.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="cta-band__actions">
              <Link href="/contact" className="btn btn--primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "1.125rem" }}
                  aria-hidden="true"
                >
                  calendar_today
                </span>
                Schedule a Chat
              </Link>
              <CopyEmailButton email="diogo.santoro05@gmail.com" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="cta-band__meta">
              <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "0.875rem", color: "var(--tertiary)" }}
                  aria-hidden="true"
                >
                  schedule
                </span>
                Avg response: &lt; 4 hours
              </span>
              <span aria-hidden="true">•</span>
              <span>Full-Time / Freelance / Contract</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
