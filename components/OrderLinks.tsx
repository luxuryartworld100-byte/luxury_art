import Link from "next/link";
import { mailtoHref, whatsappHref } from "@/lib/site";

export function OrderLinks({
  piece,
  light = false,
  email = true,
  contact = false,
}: {
  piece?: string;
  light?: boolean;
  email?: boolean;
  contact?: boolean;
}) {
  const whatsappClass = email
    ? light
      ? "button ghost"
      : "button line"
    : contact
      ? "button line"
      : light
        ? "button light"
        : "button solid";

  return (
    <div className="actions">
      {contact ? (
        <Link className="button solid" href="/contact">
          Contact Us
        </Link>
      ) : null}
      {email ? (
        <a className={light ? "button light" : "button solid"} href={mailtoHref(piece)}>
          Email this order
        </a>
      ) : null}
      <a
        className={whatsappClass}
        href={whatsappHref(piece)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp this order
      </a>
    </div>
  );
}
