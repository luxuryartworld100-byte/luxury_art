"use client";

import { useEffect, useRef, useState } from "react";
import type { Artwork } from "@/lib/gallery";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ArtworkLightbox({ work, onClose }: { work: Artwork; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const closing = useRef(false);
  const onCloseRef = useRef(onClose);
  const [open, setOpen] = useState(false);

  onCloseRef.current = onClose;

  function close() {
    if (closing.current) return;
    closing.current = true;
    setOpen(false);
    window.setTimeout(() => onCloseRef.current(), 180);
  }

  useEffect(() => {
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = window.requestAnimationFrame(() => setOpen(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const nodes = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, []);

  return (
    <div
      className={open ? "lightbox open" : "lightbox"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        className="lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        aria-describedby="lightbox-note"
      >
        <button ref={closeRef} className="lightbox-close" type="button" aria-label="Close" onClick={close}>
          ×
        </button>
        <img src={work.image} alt={`${work.title} by ${work.artist}`} />
        <div className="lightbox-copy">
          <p className="kicker">
            {work.artist} · {work.priceLabel}
          </p>
          <h2 id="lightbox-title">{work.title}</h2>
          <p id="lightbox-note">
            {work.medium}. {work.status}. {work.note}
          </p>
        </div>
      </div>
    </div>
  );
}
