import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { OrderLinks } from "@/components/OrderLinks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send your contact details and requirement. We will get back to you, or WhatsApp what you need. Office hours are 10 am to 5 pm.",
};

export default function ContactPage() {
  return (
    <section className="shell page-intro">
      <p className="kicker">Contact Us</p>
      <div className="split">
        <div>
          <h1>Send your contact and your requirement.</h1>
          <p className="lede">
            Tell us how to reach you and what you need. We will get back to you. You can also WhatsApp directly with the painting or the requirement. Our office is open from {site.hours}.
          </p>
          <ContactForm />
        </div>
        <aside className="facts">
          <div className="fact">
            <span>Email</span>
            <strong style={{ fontSize: "26px" }}>{site.email}</strong>
          </div>
          <div className="fact">
            <span>Studio</span>
            <strong>{site.city}</strong>
          </div>
          <div className="fact">
            <span>Office hours</span>
            <strong>{site.hours}</strong>
          </div>
          <OrderLinks light />
        </aside>
      </div>
      <div className="section" />
    </section>
  );
}
