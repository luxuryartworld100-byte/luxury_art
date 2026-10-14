"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";
import { ArtworkLightbox } from "@/components/ArtworkLightbox";
import { OrderLinks } from "@/components/OrderLinks";
import type { Artwork } from "@/lib/gallery";

export function ArtworkCard({ work }: { work: Artwork }) {
  const href = `/work/${work.slug}`;
  const [open, setOpen] = useState(false);

  function openLightbox(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setOpen(true);
  }

  return (
    <article className="card">
      <Link href={href} className="frame" scroll={false} onClick={openLightbox}>
        <img src={work.image} alt={`${work.title} by ${work.artist}`} />
      </Link>
      <div className="card-body">
        <div className="meta">
          <span>{work.artist}</span>
          <span>{work.priceLabel}</span>
        </div>
        <h2>
          <Link href={href} scroll={false} onClick={openLightbox}>
            {work.title}
          </Link>
        </h2>
        <p>
          {work.status}. {work.note}
        </p>
        <OrderLinks email={false} piece={`${work.artist} — ${work.title} (${work.priceLabel})`} />
      </div>
      {open ? <ArtworkLightbox work={work} onClose={() => setOpen(false)} /> : null}
    </article>
  );
}
