import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGallery } from "@/components/CategoryGallery";
import { binduCategories, binduWorks } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Acrylic Paint India",
  description:
    "Acrylic paint in India from a Mumbai store. Bindu’s handmade acrylic paintings are ₹2,500, with one-day delivery in Mumbai. Golden leaf is ₹5,000.",
  alternates: { canonical: "/gallery/bindu" },
};

export default function BinduGalleryPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">Bindu</p>
      <h1>Bindu’s gallery.</h1>
      <p className="lede">
        Only Bindu’s paintings are shown here. Her acrylic paint is made on demand at ₹2,500 for collectors in Mumbai and across India. Golden leaf is ₹5,000. Ready pieces are delivered within one day in Mumbai.
      </p>
      <CategoryGallery works={binduWorks} categories={binduCategories} />
      <div className="actions">
        <Link className="button line" href="/gallery">
          Back to the gallery
        </Link>
      </div>
      <div className="section" />
    </section>
  );
}
