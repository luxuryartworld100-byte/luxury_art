export type Artwork = {
  id: string;
  slug: string;
  artist: "Bindu" | "Harshan";
  category: string;
  title: string;
  medium: string;
  priceLabel: string;
  status: string;
  image: string;
  note: string;
};

export const harshanCategories = [
  "Religious (Hindu)",
  "Religious (Christian)",
  "Religious (Buddhist)",
  "Mural",
  "Nature",
  "Still life",
  "Portrait",
] as const;

export const binduCategories = ["Golden Leaf", "Acrylic on Demand"] as const;

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Bindu's photographs belong in public/artworks/bindu/.
 * A filename containing "gold" is Golden Leaf at ₹5,000.
 * Every other Bindu file is Acrylic on Demand at ₹2,500.
 * Harshan's photographs belong in public/artworks/harshan/.
 */
function binduPiece(file: string, title: string): Artwork {
  const gold = file.toLowerCase().includes("gold");
  return {
    id: file,
    slug: toSlug(title),
    artist: "Bindu",
    category: gold ? "Golden Leaf" : "Acrylic on Demand",
    title,
    medium: gold ? "Gold leaf" : "Acrylic",
    priceLabel: gold ? "₹5,000" : "₹2,500",
    status: gold ? "Ready piece" : "On demand",
    image: `/artworks/bindu/${file}`,
    note: gold ? "Handmade gold-leaf painting." : "Handmade acrylic, painted on demand.",
  };
}

export const binduWorks: Artwork[] = [
  binduPiece("gold_eagle.jpg.jpeg", "Gold eagle"),
  binduPiece("golden_leaf_birds.jpg", "Golden birds"),
  binduPiece("hibuscus.jpeg", "Hibiscus"),
  binduPiece("rose.jpg", "Rose"),
  binduPiece("parrot.jpg", "Parrot"),
  binduPiece("blue_bird.jpg", "Moonlit heron"),
  binduPiece("lady_model.jpeg", "Portrait in leaves"),
  binduPiece("lady_model2.jpeg", "Blue portrait"),
  binduPiece("africanlady.jpeg", "Two profiles"),
  binduPiece("fish.jpeg", "Moorish idol"),
  binduPiece("xmas_tree.jpeg", "Winter pines"),
  binduPiece("pink_boat.jpeg", "Sail at sunset"),
  binduPiece("boat.jpg", "River boat"),
  binduPiece("nature_scenery.jpeg", "Autumn water"),
  binduPiece("hillscenery.jpeg", "Hill path"),
];

const harshanNote =
  "Large-scale commissions typically range from ₹45,000 to ₹2,00,000, depending on size, complexity, and materials. Allow 15 to 30 days.";

function harshanPiece(file: string, title: string, category: (typeof harshanCategories)[number]): Artwork {
  return {
    id: file,
    slug: toSlug(title),
    artist: "Harshan",
    category,
    title,
    medium: "Advanced painting",
    priceLabel: "₹45,000–₹2,00,000",
    status: "Commission",
    image: `/artworks/harshan/${file}`,
    note: harshanNote,
  };
}

export const harshanWorks: Artwork[] = [
  harshanPiece("hindu_krishna.jpeg", "Krishna and Radha", "Religious (Hindu)"),
  harshanPiece("hindu_gods.jpeg", "Vishnu", "Religious (Hindu)"),
  harshanPiece("jesussupper.jpeg", "The Last Supper", "Religious (Christian)"),
  harshanPiece("jesus_heals.jpeg", "Jesus heals", "Religious (Christian)"),
  harshanPiece("jesusbless.jpeg", "Sacred heart", "Religious (Christian)"),
  harshanPiece("jesuscross.jpeg", "Crucifixion", "Religious (Christian)"),
  harshanPiece("jesus.jpeg", "Crown of thorns", "Religious (Christian)"),
  harshanPiece("budha1.jpeg", "Seated Buddha", "Religious (Buddhist)"),
  harshanPiece("buddha.jpeg", "Reclining Buddha", "Religious (Buddhist)"),
  harshanPiece("mural.jpeg", "Five deities", "Mural"),
  harshanPiece("mural2.jpeg", "Krishna mural", "Mural"),
  harshanPiece("mural33.jpeg", "Krishna head", "Mural"),
  harshanPiece("muralz.jpeg", "Temple deities", "Mural"),
  harshanPiece("forest32.jpeg", "Birch forest", "Nature"),
  harshanPiece("nature.jpeg", "Old tree", "Nature"),
  harshanPiece("natural_pic.jpeg", "Forest path", "Nature"),
  harshanPiece("trees.jpeg", "Palms and a boat", "Nature"),
  harshanPiece("vessel.jpeg", "Vessel and vegetables", "Still life"),
  harshanPiece("fruits.jpeg", "Fruit in water", "Still life"),
  harshanPiece("gir_flower.jpeg", "Autumn figure", "Portrait"),
  harshanPiece("eyea.jpeg", "The eye", "Portrait"),
  harshanPiece("human.jpeg", "Contemplation", "Portrait"),
  harshanPiece("metaphorface.jpeg", "Golden face", "Portrait"),
];

export const artworks: Artwork[] = [...harshanWorks, ...binduWorks];

export function getArtwork(slug: string) {
  return artworks.find((work) => work.slug === slug);
}

export function worksInCategory(works: Artwork[], category: string) {
  return works.filter((work) => work.category === category);
}

export function getNewsArticle(slug: string) {
  return news.find((item) => item.slug === slug);
}

export const exhibitions = [
  {
    id: "harshan",
    title: "Harshan",
    when: "15 to 30 days",
    where: "His gallery",
    summary:
      "Harshan is a senior artist with experience across the Middle East and India. Large-scale commissions typically range from ₹45,000 to ₹2,00,000 and take 15 to 30 days.",
  },
  {
    id: "bindu",
    title: "Bindu",
    when: "Acrylic on demand and golden leaf",
    where: "1 day delivery in Mumbai",
    summary:
      "Bindu’s acrylic paintings are ₹2,500. Her golden-leaf paintings are ₹5,000. Observe the piece, then email or WhatsApp it with your phone number and email.",
  },
  {
    id: "studio-viewing",
    title: "Studio viewing",
    when: "By appointment",
    where: "Mumbai",
    summary:
      "Write with the painting you observed, a day that suits you, your phone number, and your email.",
  },
];

export type NewsImage = {
  src: string;
  alt: string;
  caption: string;
};

export type NewsBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  image: NewsImage;
  slug?: string;
  article?: string[];
  blocks?: NewsBlock[];
  figures?: Array<NewsImage & { after: number }>;
};

export const news: NewsItem[] = [
  {
    id: "living-room-art",
    slug: "benefits-of-art-in-your-living-space",
    date: "13 October 2026",
    title: "10 Benefits of Adding Art to Your Living Space",
    body: "Art has the extraordinary ability to transform a house into a home. It breathes life into spaces, reflects personality, and subtly contributes to the ambience of a room in ways that are both striking and intimate.",
    image: {
      src: "/artworks/bindu/hillscenery.jpeg",
      alt: "Hill path, an original acrylic painting by Bindu",
      caption: "Original acrylic painting by Bindu",
    },
    blocks: [
      {
        type: "p",
        text: "Art has the extraordinary ability to transform a house into a home. It breathes life into spaces, reflects personality, and subtly contributes to the ambience of a room in ways that are both striking and intimate. From a painting above a mantel to a considered work on a feature wall, infusing your living space with art is a blend of aesthetics and architecture.",
      },
      {
        type: "p",
        text: "There are many benefits of adding art to your living space that go beyond decoration to enhance every aspect of how you interact with your home. Here is a list that captures just how impactful a well-placed piece can be.",
      },
      { type: "h2", text: "Enhances emotional health" },
      {
        type: "p",
        text: "Beautiful art doesn’t just decorate your walls; it nurtures your soul. Pieces with serene landscapes or fluid, harmonious forms can imbue a sense of calm, while bold colours and spirited designs can energise and lift your mood. This emotional resonance allows us to curate environments that reflect how we wish to feel in our spaces, fostering mindfulness and emotional well-being.",
      },
      { type: "h2", text: "Adds dimension with texture and layers" },
      {
        type: "p",
        text: "Rooms often lack depth when there is an overemphasis on uniform surfaces. Art solves that by introducing texture, whether through the surface of a painting or the quiet variation of metallic leaf. The interplay of these elements lets a wall look more interesting, breaking up monotony and adding tactile detail.",
      },
      {
        type: "ul",
        items: [
          "Canvas paintings: a considered surface adds layers and depth to any room.",
          "Metallic and golden-leaf works: light moves across the surface through the day.",
          "Handmade pieces: the trace of the brush keeps a room from feeling uniform.",
        ],
      },
      { type: "h2", text: "Creates a focal point in any room" },
      {
        type: "p",
        text: "Focal points often anchor great spaces, and art is one of the most potent ways to achieve this. A bold painting, a sacred subject, or a landscape can draw the eye and command attention upon entering a room.",
      },
      {
        type: "p",
        text: "There is nothing better than walking into a room and finding a painting placed with care above a fireplace, or a quieter canvas that sits easily with the seating. These pieces can shift a space from ordinary to magnetic.",
      },
      { type: "h2", text: "Complements interior styles effortlessly" },
      {
        type: "p",
        text: "Art has an uncanny ability to work as a shared language of design. Whether a home leans toward mid-century lines, a quieter modern room, or a more rustic aesthetic, a curated painting can sit with the existing palette. Colours and forms that echo the room create a seamless look while still allowing the art to stand out.",
      },
      { type: "h2", text: "Reflects personal identity" },
      {
        type: "p",
        text: "Art is deeply personal. It tells visitors who you are without a word. You may gravitate toward landscape, sacred themes, portraiture, or a bolder contemporary surface. Personalising a space with meaningful art turns it into more than a dwelling. Over time, it becomes a record of taste, milestones, and inspiration.",
      },
      { type: "h2", text: "Telling your story through art" },
      {
        type: "p",
        text: "Art offers a clear way to place a personal story in a room. A painting chosen for a journey, a belief, or a landscape you love can reflect memory and value. A small group of works can celebrate what matters in a household, and a single commission can carry a brief that is entirely your own.",
      },
      { type: "h2", text: "Sparks creativity and conversation" },
      {
        type: "p",
        text: "A distinctive piece invites curiosity and can begin a conversation. From the artist’s subject to the reason it was chosen, there is always a story that gives a visit more depth. Nature, devotion, and the human face each give guests something specific to respond to.",
      },
      { type: "h2", text: "Brings harmony to open rooms" },
      {
        type: "p",
        text: "Large, open rooms can feel disconnected without a few intentional pieces that tie them together. Art can visually ground an area. A landscape in the living room and a related work nearby can create flow, while a single strong painting can establish rhythm so the room feels considered rather than empty.",
      },
      { type: "h2", text: "Elevates everyday activities" },
      {
        type: "p",
        text: "Art is not only to look at. It is to live with. A cherished painting in the room where you take morning coffee, or a quieter work beside a reading chair, can turn an ordinary hour into something more composed. These additions enrich daily moments.",
      },
      { type: "h2", text: "Supports artists and the handmade" },
      {
        type: "p",
        text: "When you add art to your home, you are also supporting the person who made it. A handmade painting carries an origin: the artist, the medium, and the time it took. That connection keeps the work from feeling anonymous, and it ties a room to something made with intention.",
      },
      { type: "h2", text: "Makes any space feel luxurious" },
      {
        type: "p",
        text: "There is something quietly elevated about walking into a space with original art. It communicates refinement and an appreciation for thoughtful design. That feeling does not require a grand gesture. Even one well-chosen acrylic or metallic painting can give a living room an understated grandeur.",
      },
      { type: "h2", text: "Enhance your living space" },
      {
        type: "p",
        text: "The benefits of adding art to your living space go beyond practical and stylistic purposes. It is about creating a room where the details feel intentional, and an ordinary interior becomes a more artful home.",
      },
      {
        type: "p",
        text: "To find a painting for that room, explore the galleries of Luxur Art World. Harshan’s large-scale works and Bindu’s acrylic and metallic paintings are handmade, and each one is meant to be lived with.",
      },
    ],
    figures: [
      {
        after: 3,
        src: "/artworks/bindu/nature_scenery.jpeg",
        alt: "Autumn water, an original acrylic painting by Bindu",
        caption: "Original acrylic painting by Bindu",
      },
      {
        after: 9,
        src: "/artworks/harshan/forest32.jpeg",
        alt: "Birch forest, an original painting by Harshan",
        caption: "Original painting by Harshan",
      },
      {
        after: 25,
        src: "/artworks/bindu/parrot.jpg",
        alt: "Parrot, an original acrylic painting by Bindu",
        caption: "Original acrylic painting by Bindu",
      },
    ],
  },
  {
    id: "art-and-wellbeing",
    slug: "art-enhances-brain-function",
    date: "13 October 2026",
    title: "Art Enhances Brain Function and Well-Being",
    body: "Scientific research shows that viewing and creating art can raise serotonin levels, reduce stress, increase blood flow in the brain’s pleasure centers, and support emotional balance. From neuroaesthetics studies to the benefits of awe and beauty, art is increasingly recognized as a powerful tool for mental and physical health.",
    image: {
      src: "/artworks/bindu/blue_bird.jpg",
      alt: "Moonlit heron, an original acrylic painting by Bindu",
      caption: "Original acrylic painting by Bindu",
    },
    article: [
      "Scientific research shows that viewing and creating art can raise serotonin levels, reduce stress, increase blood flow in the brain’s pleasure centers, and support emotional balance. From neuroaesthetics studies to the benefits of awe and beauty, art is increasingly recognized as a powerful tool for mental and physical health.",
      "There is a quiet intelligence in beauty. A painting is not only an object placed in a room. Colour, line, and the trace of the hand can settle attention, soften the pace of a day, and leave a space feeling more composed. Neuroaesthetics, the study of how the mind responds to art, has given language to something collectors have long understood in practice.",
      "Awe has its own part in this. Standing before a work of scale or delicacy can widen attention and ease the tightness of ordinary worry. In a residence, a hotel, or a private office, that pause is part of why original art endures. It offers presence rather than noise.",
      "Creating art asks for the same care. The slow decisions of palette and composition require focus, and that focus can restore a sense of balance. Handmade work, made with intention, keeps that human rhythm visible on the surface.",
      "Lived with over time, a painting continues this quiet work. At Luxur Art World, each piece is an original, conceived to be kept close: refined in texture, luminous in depth, and placed where it can support a calmer, more considered way of being.",
    ],
    figures: [
      {
        after: 1,
        src: "/artworks/bindu/golden_leaf_birds.jpg",
        alt: "Golden birds, an original metallic painting by Bindu",
        caption: "Original metallic painting by Bindu",
      },
      {
        after: 2,
        src: "/artworks/harshan/hindu_krishna.jpeg",
        alt: "Krishna and Radha, an original painting by Harshan",
        caption: "Original painting by Harshan",
      },
      {
        after: 3,
        src: "/artworks/bindu/rose.jpg",
        alt: "Rose, an original acrylic painting by Bindu",
        caption: "Original acrylic painting by Bindu",
      },
    ],
  },
];
