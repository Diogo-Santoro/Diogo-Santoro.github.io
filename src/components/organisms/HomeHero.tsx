"use client";

import Link from "next/link";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export default function HomeHero() {
  return (
    <section className="hero container" id="hero">
      {/* Glow Orbs */}
      <div className="hero__glow-1" aria-hidden="true" />
      <div className="hero__glow-2" aria-hidden="true" />

      <div className="hero__content">
        {/* Status Tag */}
        <ScrollReveal>
          <div className="hero__status-tag">
            <span className="hero__status-dot" />
            <span className="hero__status-text">STATUS: Open for new opportunities</span>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay={100}>
          <h1 className="heading-hero hero__title">
            Software Engineer building{" "}
            <span className="hero__title-gradient">reliable systems</span> and high-impact
            solutions.
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={200}>
          <p className="hero__subtitle">
            Specialist in <strong>Java, TypeScript, React, Spring Boot</strong> and scalable cloud
            infrastructures. Transforming complexity into elegant, secure, and performant software.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={300}>
          <div className="hero__ctas">
            <Link href="/projects" className="btn btn--primary">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.125rem" }}
                aria-hidden="true"
              >
                deployed_code
              </span>
              View Projects
            </Link>
            <Link href="/contact" className="btn btn--secondary">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.125rem" }}
                aria-hidden="true"
              >
                terminal
              </span>
              Get in Touch
            </Link>
            <Link href="/about" className="btn btn--ghost">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.125rem" }}
                aria-hidden="true"
              >
                person
              </span>
              About Me
            </Link>
          </div>
        </ScrollReveal>

        {/* Meta Line */}
        <ScrollReveal delay={350}>
          <div className="hero__meta">
            <span className="hero__meta-chevron">&gt;&gt;</span>
            <span className="hero__meta-label">STACK:</span>
            <span>Spring Boot / React / DevOps / IaC</span>
            <span className="hero__meta-separator">|</span>
            <span className="hero__meta-value">Vigo, Spain</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats Grid */}
      <ScrollReveal delay={400}>
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-header">
              <span className="hero__stat-label">CAREER</span>
              <span
                className="material-symbols-outlined hero__stat-icon hero__stat-icon--primary"
                aria-hidden="true"
              >
                history_edu
              </span>
            </div>
            <div className="hero__stat-value">3+ Years</div>
            <p className="hero__stat-desc">Professional development experience</p>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-header">
              <span className="hero__stat-label">COMPANIES</span>
              <span
                className="material-symbols-outlined hero__stat-icon hero__stat-icon--tertiary"
                aria-hidden="true"
              >
                check_circle
              </span>
            </div>
            <div className="hero__stat-value hero__stat-value--tertiary">2</div>
            <p className="hero__stat-desc">John Deere & ISBET</p>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-header">
              <span className="hero__stat-label">PROJECTS</span>
              <span
                className="material-symbols-outlined hero__stat-icon hero__stat-icon--primary"
                aria-hidden="true"
              >
                speed
              </span>
            </div>
            <div className="hero__stat-value">14+</div>
            <p className="hero__stat-desc">Open source repos & contributions</p>
          </div>

          <div className="hero__stat">
            <div className="hero__stat-header">
              <span className="hero__stat-label">OPEN SOURCE</span>
              <span
                className="material-symbols-outlined hero__stat-icon hero__stat-icon--secondary"
                aria-hidden="true"
              >
                terminal
              </span>
            </div>
            <div className="hero__stat-value">Active</div>
            <p className="hero__stat-desc">Libraries, CLIs & infrastructure</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
