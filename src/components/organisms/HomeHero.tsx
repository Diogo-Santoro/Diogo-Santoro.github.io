"use client";




export default function HomeHero() {
  return (
    <section className="hero container" id="hero">
      <div className="hero__content">
        <div className="hero__label text-label" style={{ animation: "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards", opacity: 0 }}>
          Software Developer
        </div>

        <h1 className="heading-hero hero__title">
          <span
            className="hero__title-line"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            Diogo
          </span>
          <span
            className="hero__title-line text-accent"
            style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
          >
            Santoro
          </span>
        </h1>

        <p className="hero__subtitle">
          Building reliable software with Java, TypeScript, and a strong
          foundation in DevOps — from corporate systems at John Deere to
          self-hosted infrastructure.
        </p>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-dot" />
            Vigo, Spain
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-dot" />
            Open to opportunities
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
