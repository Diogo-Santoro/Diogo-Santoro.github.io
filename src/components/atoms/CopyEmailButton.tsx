"use client";

import { useState } from "react";

// ⚡ Bolt: Extracted this interactive component from HomeCTA to keep HomeCTA as a React Server Component.
// This reduces the client-side JavaScript bundle size by isolating the "use client" directive to the minimal necessary surface area.
interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="btn btn--secondary"
      title="Copy email to clipboard"
      aria-live="polite"
      onClick={() => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(email)
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            })
            .catch(() =>
              alert(`Failed to copy. Please copy manually: ${email}`)
            );
        } else {
          alert(`Clipboard API not available. Please copy manually: ${email}`);
        }
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "1.125rem" }}
        aria-hidden="true"
      >
        {copied ? "check" : "content_copy"}
      </span>
      <span className="sr-only">Copy email to clipboard: </span>
      {copied ? "Copied!" : email}
    </button>
  );
}
