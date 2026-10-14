import Link from "next/link";
import { mailtoHref, nav, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand">
            <strong>Luxur</strong>
            <span>Art World</span>
          </div>
          <p>
            Luxury art Mumbai. An acrylic paint store in India, with handmade luxury paintings and original paintings for sale. Orders by email or WhatsApp. There is no shopping cart.
          </p>
        </div>
        <div className="footer-links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <a href={mailtoHref()}>{site.email}</a>
          <a href={whatsappHref()}>WhatsApp an order</a>
          <span>{site.city}</span>
          <span>Office: {site.hours}</span>
          <span>Bindu: 1 day in Mumbai</span>
          <span>Harshan: 15 to 30 days</span>
        </div>
      </div>
      <div className="shell legal">{site.domain}</div>
    </footer>
  );
}
