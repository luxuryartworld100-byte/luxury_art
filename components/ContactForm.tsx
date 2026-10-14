"use client";

import { FormEvent, useState } from "react";
import { binduWorks, harshanWorks } from "@/lib/gallery";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  setStatus("sending");
  setNotice("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();
  if (!accessKey) {
    setStatus("error");
    setNotice("The enquiry form is not connected yet. Please try again shortly.");
    return;
  }

  const email = String(data.get("email") || "");
  const piece = String(data.get("piece") || "");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.get("name"),
        phone: data.get("phone"),
        email,
        piece,
        message: data.get("message"),
        subject: `Order enquiry: ${piece}`,
        from_name: "Luxury Art World",
      }),
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      setStatus("sent");
      setNotice("Sent. Your enquiry is on its way to luxuryartworld100@gmail.com.");
    } else {
      setStatus("error");
      setNotice(result.message || "The enquiry could not be sent. Please try again.");
    }
  } catch {
    setStatus("error");
    setNotice("The enquiry could not be sent. Please try again.");
  }
}

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Contact number
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Product
        <select name="piece" required defaultValue="">
          <option value="" disabled>
            Choose a painting
          </option>
          <option>Bindu — acrylic painting — ₹2,500</option>
          <option>Bindu — gold-leaf painting — ₹5,000</option>
          <option>Harshan — large-scale commission — ₹45,000 to ₹2,00,000</option>
          {harshanWorks.map((work) => (
            <option key={work.id}>
              Harshan — {work.title} — {work.priceLabel}
            </option>
          ))}
          {binduWorks.map((work) => (
            <option key={work.id}>
              Bindu — {work.title} — {work.priceLabel}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Your requirement: the painting, size, or colours you need." />
      </label>
      <button className="button solid" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {notice ? (
        <p className={status === "error" ? "form-notice error" : "form-notice"} role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
