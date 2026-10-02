import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__inner">
        <div className="footer__info">
          <span className="footer__name">Diogo Santoro</span>
          <span className="footer__tagline">
            Built with clean architecture & modern web standards.
          </span>
          <p className="footer__text">© {year} Diogo Santoro. All rights reserved.</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "var(--space-sm)",
          }}
        >
          <div className="footer__links">
            <a
              href="https://github.com/Diogo-Santoro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
                code
              </span>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/diogo-santoro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
                hub
              </span>
              LinkedIn
            </a>
            <Link href="/contact" className="footer__link footer__link--primary">
              <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
                description
              </span>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
