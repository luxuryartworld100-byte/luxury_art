export const site = {
  name: "Luxur Art World",
  domain: "luxurartworld.com",
  url: "https://luxurartworld.com",
  email: "luxuryartworld100@gmail.com",
  city: "Mumbai",
  country: "India",
  hours: "10 am to 5 pm",
  /** Studio WhatsApp in international format, digits only. */
  whatsappNumber: "919769443202",
};

export const HOME_MESSAGE =
  "We provide you unique art acrylic paintings and metallic paints. Product can be customized and also available on demand. You observe the store and email the product with your contact number and email. We ensure you 1 day fast delivery in Mumbai. Paintings are not made by machine but handmade by professional artist.";

export const seo = {
  title: "Acrylic Paint Mumbai",
  description:
    "Luxury art Mumbai and an acrylic paint store in India. Handmade luxury paintings and original paintings for sale in Mumbai, with one-day delivery.",
  keywords: [
    "acrylic paint Mumbai",
    "acrylic paint store",
    "acrylic paint India",
    "acrylic paintings Mumbai",
    "handmade acrylic paintings",
    "Luxury art Mumbai",
    "Luxury paintings Mumbai",
    "Original paintings for sale Mumbai",
    "Handmade luxury paintings Mumbai",
    "Luxury painting",
  ],
};

export const prices = {
  acrylic: "₹2,500",
  goldLeaf: "₹5,000",
  harshanFrom: "₹45,000",
  harshanRange: "₹45,000–₹2,00,000",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Art Gallery" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function mailtoHref(piece?: string) {
  const subject = piece
    ? `Order enquiry: ${piece}`
    : "Order enquiry — Luxur Art World";
  const body = [
    piece ? `Product: ${piece}` : "Product:",
    "Contact number:",
    "Email:",
    "",
    "Message:",
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(piece?: string) {
  const text = piece
    ? `Hello Luxur Art World, I would like to order "${piece}". My contact number and email are: `
    : "Hello Luxur Art World, I would like to order a painting. My contact number and email are: ";
  const encoded = encodeURIComponent(text);
  if (site.whatsappNumber) {
    return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}
