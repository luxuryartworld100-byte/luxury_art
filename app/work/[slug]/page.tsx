import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderLinks } from "@/components/OrderLinks";
import { artworks, getArtwork } from "@/lib/gallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getArtwork(slug);
  if (!work) return { title: "Painting" };
  const description =
    work.medium === "Acrylic"
      ? `${work.title} by Bindu, a handmade acrylic painting from an acrylic paint store in Mumbai, India. ${work.priceLabel}. ${work.note}`
      : `${work.title} by ${work.artist}. ${work.medium}. ${work.priceLabel}. ${work.note}`;
  return {
    title: `${work.title} by ${work.artist}`,
    description,
    openGraph: {
      title: `${work.title} by ${work.artist}`,
      description,
      images: [{ url: work.image, alt: `${work.title} by ${work.artist}` }],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getArtwork(slug);
  if (!work) notFound();

  return (
    <article className="shell page-intro work-page">
      <p className="kicker">
        {work.artist} · {work.medium}
      </p>
      <h1>{work.title}</h1>
      <p className="lede">
        {work.status}. {work.note} {work.priceLabel}.
      </p>
      <img src={work.image} alt={`${work.title} by ${work.artist}`} />
      <OrderLinks email={false} piece={`${work.artist} — ${work.title} (${work.priceLabel})`} />
      <p>
        <Link className="button line" href="/gallery">
          Back to the gallery
        </Link>
      </p>
    </article>
  );
}
