"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`} id="site-header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="Home">
          <svg
            className="header__logo-icon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              width="100"
              height="100"
              rx="22"
              fill="#0B0F17"
              stroke="#1E293B"
              strokeWidth="2"
            />
            <path
              d="M30 38 L18 50 L30 62"
              stroke="url(#cyanGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 38 L82 50 L70 62"
              stroke="url(#cyanGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="56"
              y1="34"
              x2="44"
              y2="66"
              stroke="#64748B"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <span className="header__logo-text">Diogo Santoro</span>
            <span className="header__logo-subtitle">Software Engineer</span>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__link ${isActive(link.href) ? "header__link--active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__status">
          <span className="header__status-dot" />
          <span>Available for projects</span>
        </div>

        <button
          className={`header__menu-btn ${mobileOpen ? "header__menu-btn--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header__mobile-nav ${mobileOpen ? "header__mobile-nav--open" : ""}`}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__mobile-link ${isActive(link.href) ? "header__mobile-link--active" : ""}`}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
