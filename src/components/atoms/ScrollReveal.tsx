"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "scale";
  delay?: number;
  threshold?: number;
}

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

// ⚡ Bolt: Cache IntersectionObserver instances by threshold and use a WeakMap
// for callbacks to avoid O(n) memory overhead and excessive observer instantiation.
const observers = new Map<number, IntersectionObserver>();
const callbacks = new WeakMap<Element, ObserverCallback>();

function getObserver(threshold: number): IntersectionObserver {
  if (observers.has(threshold)) {
    return observers.get(threshold)!;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const callback = callbacks.get(entry.target);
        if (callback) {
          callback(entry);
        }
      });
    },
    { threshold, rootMargin: "0px 0px -40px 0px" }
  );

  observers.set(threshold, observer);
  return observer;
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

    // ⚡ Bolt: Store the callback in the module-level WeakMap
    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        const observer = getObserver(threshold);
        observer.unobserve(el);
        callbacks.delete(el);
      }
    });

    const observer = getObserver(threshold);
    observer.observe(el);

    return () => {
      const currentObserver = getObserver(threshold);
      currentObserver.unobserve(el);
      callbacks.delete(el);
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
