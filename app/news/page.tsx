import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "News",
  description: "Studio notes on Harshan’s advanced paintings and Bindu’s acrylic and gold-leaf work.",
};

export default function NewsPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">News</p>
      <h1>Studio notes.</h1>
      <p className="lede">
        Harshan’s advanced paintings, and Bindu’s acrylic and gold-leaf paintings.
      </p>
      <div className="stack">
        {news.map((item) => (
          <article className="news-item" key={item.id}>
            <figure>
              <img src={item.image.src} alt={item.image.alt} />
              <figcaption>{item.image.caption}</figcaption>
            </figure>
            <div>
              <p className="when">{item.date}</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              {item.slug ? (
                <Link className="read-more" href={`/news/${item.slug}`}>
                  Read more
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="section" />
    </section>
  );
}
