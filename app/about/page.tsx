import type { Metadata } from "next";
import { OrderLinks } from "@/components/OrderLinks";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Handmade Luxury Paintings Mumbai",
  description:
    "Handmade luxury paintings Mumbai. Luxury art from an acrylic paint store in India. Bindu’s acrylic paintings from ₹2,500. Harshan’s commissions from ₹45,000 to ₹2,00,000.",
};

export default function AboutPage() {
  return (
    <article className="shell page-intro">
      <p className="kicker">About</p>
      <div className="split">
        <div>
          <h1>Two artists, painted by hand.</h1>
          <p className="lede">
            Harshan is a senior artist with extensive experience across the Middle East and India. He specializes in large-scale projects, including photorealistic works, hotel installations, and statement pieces. These commissions typically range from ₹45,000 to ₹2,00,000 and take 15 to 30 days.
          </p>
          <p className="lede">
            Bindu’s work is restricted to acrylic paintings at ₹2,500 and gold-leaf paintings at ₹5,000. You observe the store and email the product with your contact number and email. Her ready paintings are delivered within one day in Mumbai.
          </p>
          <p className="lede">
            The paintings are not made by machine. They are handmade luxury paintings Mumbai collectors can select, each one a luxury painting made by the artist.
          </p>
          <OrderLinks />
        </div>
        <div className="facts">
          <div className="fact">
            <span>Bindu · acrylic</span>
            <strong>{prices.acrylic}</strong>
          </div>
          <div className="fact">
            <span>Bindu · gold-leaf</span>
            <strong>{prices.goldLeaf}</strong>
          </div>
          <div className="fact">
            <span>Harshan · advanced</span>
            <strong>{prices.harshanRange}</strong>
          </div>
          <div className="fact">
            <span>Harshan · booking</span>
            <strong>15 to 30 days</strong>
          </div>
        </div>
      </div>
      <div className="section" />
    </article>
  );
}
