"use client";

import { useState, useEffect } from "react";

interface CopyButtonProps {
  textToCopy: string;
  label: string;
}

export default function CopyButton({ textToCopy, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="btn btn--ghost"
      style={{ padding: "var(--space-xs)", minWidth: "auto", zIndex: 10 }}
      title={`Copy ${label} to clipboard`}
    >
      <span className="sr-only">Copy {label} to clipboard: </span>
      <span className="material-symbols-outlined" aria-hidden="true">
        {copied ? "check" : "content_copy"}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}
