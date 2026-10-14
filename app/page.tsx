import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { OrderLinks } from "@/components/OrderLinks";
import { binduWorks, harshanWorks } from "@/lib/gallery";
import { HOME_MESSAGE, prices, seo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="shell hero">
        <div>
          <p className="kicker">Welcome to Luxuryartworld</p>
          <h1>Exquisite handmade acrylic and metallic paintings.</h1>
          <p className="intro">
            We present a curated collection of one-of-a-kind acrylic and metallic artworks, meticulously handcrafted by accomplished artists. Each piece is an original creation—never mass-produced—offering refined texture, luminous depth, and a quiet elegance that transforms any space.
          </p>
          <p className="intro">
            Luxur Art World is an acrylic paint store in Mumbai. Handmade acrylic paintings can be ordered across India, and ready pieces are delivered within one day in Mumbai.
          </p>
          <p className="intro">
            Luxury art Mumbai. Luxury paintings Mumbai are original paintings for sale Mumbai, and handmade luxury paintings Mumbai. Every luxury painting is painted by hand.
          </p>
          <p className="studio-note">{HOME_MESSAGE}</p>
        </div>
        <aside className="ledger">
          <p>Indicative pricing</p>
          <h2>Bindu</h2>
          <dl>
            <div>
              <dt>Acrylic, from</dt>
              <dd>{prices.acrylic}</dd>
            </div>
            <div>
              <dt>Metallic and golden leaf, from</dt>
              <dd>{prices.goldLeaf}</dd>
            </div>
          </dl>
          <h3>Harshan</h3>
          <dl>
            <div>
              <dt>Large-scale commissions</dt>
              <dd>₹45,000–₹2,00,000</dd>
            </div>
          </dl>
          <p className="ledger-note">
            Harshan’s range depends on size, complexity, and materials. Request a private quotation.
          </p>
          <OrderLinks light email={false} />
        </aside>
      </section>

      <section className="shell section">
        <h2>Bespoke commissions and gallery works.</h2>
        <p className="lede">
          Select from available works or commission a piece tailored in scale, palette, or composition to suit your aesthetic vision and interior.
        </p>
      </section>

      <section className="shell section">
        <h2>Swift delivery across Mumbai.</h2>
        <p className="lede">
          Ready works enjoy reliable one-day delivery within Mumbai. Custom commissions are prepared with care and delivered once complete.
        </p>
      </section>

      <section className="shell section">
        <h2>Our artists.</h2>
        <h3>Harshan — Senior Artist</h3>
        <p className="lede">
          With extensive experience across the Middle East and India, Harshan specializes in large-scale projects—including expansive photorealistic works, hotel installations, and statement pieces for residences and commercial spaces. These commissions typically require 15 to 30 days for completion. He brings mastery in illustration, natural landscapes, sacred themes, and highly realistic photo-style painting. Custom works are conceived and executed to your precise requirements. View his gallery and engage with him directly to discuss vision, scale, and timeline.
        </p>
        <div className="gallery-grid">
          {harshanWorks.slice(0, 3).map((work) => (
            <ArtworkCard key={work.id} work={work} />
          ))}
        </div>
        <div className="actions">
          <Link className="button line" href="/gallery/harshan">
            View Harshan’s Gallery
          </Link>
        </div>
      </section>

      <section className="shell section">
        <h3>Bindu — Artist</h3>
        <p className="lede">
          Trained under Harshan, Bindu creates refined acrylic and metallic paintings available on demand at fixed prices. Her works may be viewed and selected directly from the gallery. Acrylic paintings from {prices.acrylic}. Metallic and golden-leaf style works from {prices.goldLeaf}.
        </p>
        <div className="gallery-grid">
          {binduWorks.slice(0, 3).map((work) => (
            <ArtworkCard key={work.id} work={work} />
          ))}
        </div>
        <div className="actions">
          <Link className="button line" href="/gallery/bindu">
            View Bindu’s Gallery
          </Link>
        </div>
      </section>

      <section className="shell section">
        <h2>How to order.</h2>
        <p className="lede">
          Select the product in the gallery. On Contact Us, send your contact details and your requirement, and we will get back to you. You can also WhatsApp directly with what you need. Our office is open from {site.hours}.
        </p>
        <OrderLinks email={false} contact />
      </section>

      <section className="shell section">
        <h2>Ideal for.</h2>
        <p className="lede">
          Distinguished residences, executive offices, five-star hotels, luxury Airbnb properties, private clinics, and refined commercial spaces seeking original art of lasting presence.
        </p>
        <p className="lede">
          Elevate your surroundings with art created by hand, with intention, and for you alone.
        </p>
      </section>
    </>
  );
}
