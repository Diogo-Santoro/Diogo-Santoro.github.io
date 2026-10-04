"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "scale";
  delay?: number;
  threshold?: number;
}

// Optimization: Shared IntersectionObserver map and callbacks WeakMap to avoid O(n) instances
const observerMap = new Map<number, IntersectionObserver>();
const callbacksMap = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

function getObserver(threshold: number): IntersectionObserver {
  if (!observerMap.has(threshold)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = callbacksMap.get(entry.target);
          if (callback) {
            callback(entry);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observerMap.set(threshold, observer);
  }
  return observerMap.get(threshold)!;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use shared observer instance for this threshold
    const observer = getObserver(threshold);

    // Register the callback for this element
    callbacksMap.set(el, (entry) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        observer.unobserve(el);
        callbacksMap.delete(el);
      }
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacksMap.delete(el);
    };
  }, [threshold]);

  const directionClass =
    direction === "left"
      ? "reveal--left"
      : direction === "scale"
        ? "reveal--scale"
        : "";

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
