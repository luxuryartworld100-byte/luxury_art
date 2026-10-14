"use client";

import { useState } from "react";
import { ArtworkCard } from "@/components/ArtworkCard";
import type { Artwork } from "@/lib/gallery";

export function CategoryGallery({
  works,
  categories,
}: {
  works: Artwork[];
  categories: readonly string[];
}) {
  const [active, setActive] = useState("All");
  const visibleCategories = categories.filter((category) => works.some((work) => work.category === category));
  const shown = active === "All" ? works : works.filter((work) => work.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Categories">
        <button type="button" aria-pressed={active === "All"} onClick={() => setActive("All")}>
          All
        </button>
        {visibleCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {active === "All" ? (
        visibleCategories.map((category) => (
          <section className="artist-block" key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <h2>{category}</h2>
            <div className="gallery-grid">
              {works
                .filter((work) => work.category === category)
                .map((work) => (
                  <ArtworkCard key={work.id} work={work} />
                ))}
            </div>
          </section>
        ))
      ) : (
        <div className="gallery-grid">
          {shown.map((work) => (
            <ArtworkCard key={work.id} work={work} />
          ))}
        </div>
      )}
    </>
  );
}
