import type { Metadata } from "next";
import { OrderLinks } from "@/components/OrderLinks";
import { exhibitions } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Original Paintings for Sale Mumbai",
  description:
    "Original paintings for sale Mumbai. Luxury art and handmade luxury paintings, with one-day delivery in Mumbai for Bindu’s ready work.",
};

export default function ExhibitionsPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">Exhibitions</p>
      <h1>Seen in the studio, sent across Mumbai.</h1>
      <p className="lede">
        Original paintings for sale Mumbai are shown in the gallery. Harshan’s large-scale commissions typically take 15 to 30 days. Bindu’s acrylic and gold-leaf paintings can be delivered within one day in Mumbai.
      </p>
      <div className="stack">
        {exhibitions.map((item) => (
          <article className="exhibit" key={item.id}>
            <div>
              <p className="when">{item.when}</p>
              <p>{item.where}</p>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <OrderLinks />
      <div className="section" />
    </section>
  );
}
