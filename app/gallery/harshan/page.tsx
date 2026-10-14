import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGallery } from "@/components/CategoryGallery";
import { harshanCategories, harshanWorks } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Luxury Painting",
  description:
    "Luxury painting by Harshan in Mumbai: Hindu, Christian, and Buddhist religious work, murals, nature, still life, and portraits. Large-scale commissions typically take 15 to 30 days.",
};

export default function HarshanGalleryPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">Harshan</p>
      <h1>Harshan’s gallery.</h1>
      <p className="lede">
        Only Harshan’s paintings are shown here. Each luxury painting is by a senior artist with experience across the Middle East and India. Large-scale commissions typically range from ₹45,000 to ₹2,00,000 and take 15 to 30 days.
      </p>
      <CategoryGallery works={harshanWorks} categories={harshanCategories} />
      <div className="actions">
        <Link className="button line" href="/gallery">
          Back to the gallery
        </Link>
      </div>
      <div className="section" />
    </section>
  );
}
