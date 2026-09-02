"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contact, services } from "@/data/site";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string, fallback = "Not provided") => String(data.get(name) || fallback);
    const message = [
      "Hi Basis Services! I'd like a free cleaning quote.", "",
      `Name: ${field("name")}`, `Phone: ${field("phone")}`, `Service: ${field("service")}`,
      `Property: ${field("property")}`, `Bedrooms: ${field("bedrooms", "N/A")}`, `Bathrooms: ${field("bathrooms", "N/A")}`,
      `ZIP code: ${field("zip")}`, `Preferred date: ${field("date", "Flexible")}`, `Preferred time: ${field("time", "Flexible")}`,
      `Details: ${field("details")}`,
    ].join("\n");
    setSent(true);
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="quoteForm" onSubmit={submit}><div className="formTop"><span>Free estimate</span><h3>Tell us about your space.</h3><p>A few details help us prepare a more accurate quote.</p></div><div className="formRow"><label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Mobile number<input name="phone" type="tel" autoComplete="tel" placeholder="(562) 000-0000" required /></label></div><div className="formRow"><label>Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(service => <option key={service.slug}>{service.title}</option>)}<option>Other</option></select></label><label>Property type<select name="property" defaultValue="" required><option value="" disabled>Select property</option><option>House</option><option>Apartment</option><option>Airbnb / Rental</option><option>Hotel</option><option>Office</option><option>Other</option></select></label></div><div className="formRow formRowThree"><label>Bedrooms<input name="bedrooms" inputMode="numeric" placeholder="3" /></label><label>Bathrooms<input name="bathrooms" inputMode="numeric" placeholder="2" /></label><label>ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="90000" pattern="[0-9]{5}" required /></label></div><div className="formRow"><label>Preferred date<input name="date" type="date" /></label><label>Preferred time<select name="time" defaultValue="Flexible"><option>Flexible</option><option>Morning</option><option>Afternoon</option></select></label></div><label>Details<textarea name="details" placeholder="Size, condition, frequency or special requests…" rows={4} /></label><button className="button primaryButton formSubmit" type="submit"><FaWhatsapp /> Request on WhatsApp <ArrowUpRight /></button>{sent && <p className="formSuccess" role="status"><CheckCircle2 /> Your quote request is ready in WhatsApp.</p>}<small>WhatsApp opens in a new tab. Your requested date and time are confirmed only after our team replies.</small></form>;
}
