import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} Diogo Santoro
        </p>
        <div className="footer__links">
          <a
            href="https://github.com/Diogo-Santoro"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/diogo-santoro"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="footer__link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
