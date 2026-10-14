import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, news } from "@/lib/gallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.flatMap((item) => (item.slug ? [{ slug: item.slug }] : []));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsArticle(slug);
  if (!item) return { title: "News" };
  return {
    title: item.title,
    description: item.body,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsArticle(slug);
  const blocks =
    item?.blocks ??
    item?.article?.map((text) => ({ type: "p" as const, text }));
  if (!item || !blocks) notFound();

  return (
    <article className="shell page-intro">
      <p className="kicker">News · {item.date}</p>
      <h1>{item.title}</h1>
      <div className="article-body">
        {blocks.map((block, index) => (
          <div key={`${block.type}-${index}`}>
            {block.type === "h2" ? <h2>{block.text}</h2> : null}
            {block.type === "p" ? <p>{block.text}</p> : null}
            {block.type === "ul" ? (
              <ul>
                {block.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            ) : null}
            {item.figures
              ?.filter((figure) => figure.after === index)
              .map((figure) => (
                <figure className="article-figure" key={figure.src}>
                  <img src={figure.src} alt={figure.alt} />
                  <figcaption>{figure.caption}</figcaption>
                </figure>
              ))}
          </div>
        ))}
      </div>
      <div className="actions">
        <Link className="button line" href="/news">
          Back to news
        </Link>
      </div>
      <div className="section" />
    </article>
  );
}
