import type { Metadata } from "next";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Diogo Santoro — available for new opportunities in software development.",
};

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "diogo.santoro05@gmail.com",
    href: "mailto:diogo.santoro05@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Diogo Santoro",
    href: "https://linkedin.com/in/diogo-santoro",
  },
  {
    label: "GitHub",
    value: "Diogo-Santoro",
    href: "https://github.com/Diogo-Santoro",
  },
];

export default function ContactPage() {
  return (
    <div className="section section--first">
      <div className="container container--narrow">
        <ScrollReveal>
          <span className="text-label">Contact</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            className="heading-page"
            style={{
              marginTop: "var(--space-md)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Let&apos;s build<br />
            <span className="text-accent text-italic">something</span><span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p
            className="text-body"
            style={{ marginBottom: "var(--space-3xl)", maxWidth: "520px" }}
          >
            I&apos;m currently based in Vigo, Spain with an active work permit — 
            open to full-time roles, freelance projects, or just a good conversation 
            about technology.
          </p>
        </ScrollReveal>

        <div>
          {CONTACT_LINKS.map((link, i) => (
            <ScrollReveal key={link.label} delay={200 + i * 80}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="contact-row"
                id={`contact-${link.label.toLowerCase()}`}
              >
                <div className="contact-row__left">
                  <span className="contact-row__label">{link.label}</span>
                  <span className="contact-row__value">{link.value}</span>
                </div>
                <span className="contact-row__arrow">→</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div style={{ marginTop: "var(--space-4xl)" }}>
            <p className="text-label" style={{ marginBottom: "var(--space-sm)" }}>
              Location
            </p>
            <p className="text-body">
              Vigo, Galicia, Spain<br />
              <span className="text-small">Legal Status: EU Citizen (DNI) / Active Work Permit</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div style={{ marginTop: "var(--space-2xl)" }}>
            <p className="text-label" style={{ marginBottom: "var(--space-sm)" }}>
              Languages
            </p>
            <p className="text-body">
              Portuguese (Native) · English (Advanced) · Spanish (Intermediate)
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
