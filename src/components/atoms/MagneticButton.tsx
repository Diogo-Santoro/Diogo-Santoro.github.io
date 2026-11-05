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
  const targetPos = useRef({ x: 0, y: 0 });
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

    targetPos.current = {
      x: (e.pageX - bounds.current.left - bounds.current.width / 2) * strength,
      y: (e.pageY - bounds.current.top - bounds.current.height / 2) * strength,
    };

    if (rafId.current === null) {
      // ⚡ Bolt: Throttle inline style updates using requestAnimationFrame and a mutable ref
      // to avoid layout thrashing and excessive closure allocations/GC pauses.
      rafId.current = requestAnimationFrame(() => {
        el.style.transform = `translate(${targetPos.current.x}px, ${targetPos.current.y}px)`;
        rafId.current = null;
      });
    }
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    rafId.current = requestAnimationFrame(() => {
      el.style.transform = "translate(0, 0)";
      rafId.current = null;
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
    // 🛡️ Sentinel: Prevent dangerous URIs (XSS protection)
    const safeHref = sanitizeUrl(href);
    const isExternal = isExternalUrl(safeHref);
    return (
      <a {...props} href={safeHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        <span>
          {children}
          {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
        </span>
      </a>
    );
  }

  return (
    <button {...props} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
