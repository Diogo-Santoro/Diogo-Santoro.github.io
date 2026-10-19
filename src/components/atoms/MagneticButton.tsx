"use client";

import { useRef, useEffect, type ReactNode, type MouseEvent } from "react";
import { sanitizeUrl, isExternalUrl } from "@/utils/security";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  // ⚡ Bolt: Cache bounds on enter to prevent layout thrashing (synchronous reflows) during high-frequency mousemove events
  const bounds = useRef({ left: 0, top: 0, width: 0, height: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  function handleMouseEnter() {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    bounds.current = {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
    };
  }

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    // ⚡ Bolt: Debounce inline style updates using requestAnimationFrame to prevent main thread jank
    rafId.current = requestAnimationFrame(() => {
      const x = e.pageX - bounds.current.left - bounds.current.width / 2;
      const y = e.pageY - bounds.current.top - bounds.current.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      el.style.transform = "translate(0, 0)";
    });
  }

  const props = {
    ref,
    className: `btn ${className}`,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" },
  };

  if (href) {
    const safeHref = sanitizeUrl(href);
    const isExternal = isExternalUrl(safeHref);
    return (
      <a {...props} href={safeHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button {...props} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
