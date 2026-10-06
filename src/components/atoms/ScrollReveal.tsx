"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "scale";
  delay?: number;
  threshold?: number;
}

// ⚡ Bolt Performance Optimization:
// We use a shared IntersectionObserver instance per threshold/rootMargin combination
// to avoid creating hundreds of observer instances (O(n) overhead) when there are
// many Reveal elements on the page. We map DOM elements to their respective callbacks
// using a WeakMap, which also prevents memory leaks.
// Expected Impact: Reduces memory footprint and main thread CPU usage during scroll.
const observerMap = new Map<string, IntersectionObserver>();
const callbackMap = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

function getObserver(threshold: number, rootMargin: string) {
  const key = `${threshold}-${rootMargin}`;
  if (!observerMap.has(key)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = callbackMap.get(entry.target);
          if (callback) {
            callback(entry);
          }
        });
      },
      { threshold, rootMargin }
    );
    observerMap.set(key, observer);
  }
  return observerMap.get(key)!;
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

    const rootMargin = "0px 0px -40px 0px";
    const observer = getObserver(threshold, rootMargin);

    callbackMap.set(el, (entry) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        observer.unobserve(el);
        callbackMap.delete(el);
      }
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbackMap.delete(el);
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
