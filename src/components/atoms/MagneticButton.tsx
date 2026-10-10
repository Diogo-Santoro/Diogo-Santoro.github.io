"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

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
  const bounds = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  function handleMouseEnter() {
    const el = ref.current;
    if (!el) return;

    // ⚡ Bolt: Cache getBoundingClientRect on enter to prevent layout thrashing on every mousemove
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
    if (!el || !bounds.current) return;

    // Use cached document-relative bounds with pageX/Y to avoid reflows
    const x = e.pageX - bounds.current.left - bounds.current.width / 2;
    const y = e.pageY - bounds.current.top - bounds.current.height / 2;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    bounds.current = null;
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
    const isExternal = /^(https?:)?\/\//i.test(href);
    return (
      <a {...props} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
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
