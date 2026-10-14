import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { binduWorks, harshanWorks } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Luxury Paintings Mumbai",
  description:
    "Luxury paintings Mumbai and an acrylic paint store in India. Handmade luxury paintings by Bindu, and Harshan’s original paintings.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">Art Gallery</p>
      <h1>Two artists.</h1>
      <p className="lede">
        Five paintings from Harshan and five from Bindu. Luxury paintings Mumbai, original paintings for sale, from this acrylic paint store in India. Open an artist’s gallery to see only that artist’s work.
      </p>
      <div className="actions">
        <Link className="button solid" href="/gallery/harshan">
          View Harshan’s Gallery
        </Link>
        <Link className="button line" href="/gallery/bindu">
          View Bindu’s Gallery
        </Link>
      </div>

      <div className="artist-block">
        <h2>Harshan</h2>
        <div className="gallery-grid">
          {harshanWorks.slice(0, 5).map((work) => (
            <ArtworkCard key={work.id} work={work} />
          ))}
        </div>
      </div>

      <div className="artist-block">
        <h2>Bindu</h2>
        <div className="gallery-grid">
          {binduWorks.slice(0, 5).map((work) => (
            <ArtworkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
      <div className="section" />
    </section>
  );
}
