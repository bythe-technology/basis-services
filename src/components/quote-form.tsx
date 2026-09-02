"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
export function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ["Hi Basis Services! I'd like a free cleaning quote.", `Name: ${data.get("name")}`, `Service: ${data.get("service")}`, `Preferred date: ${data.get("date") || "Flexible"}`, `ZIP code: ${data.get("zip")}`, `Details: ${data.get("details") || "Not provided"}`].join("\n");
    setSent(true);
    window.open(`https://wa.me/15625783263?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="quoteForm" onSubmit={submit}><div className="formHeader"><span>Free estimate</span><h3>Tell us about your space.</h3><p>No obligation. We&apos;ll confirm every detail with you.</p></div><label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Home Cleaning</option><option>Airbnb Cleaning</option><option>Hotel Cleaning</option><option>Deep Cleaning</option><option>Laundry & Organization</option><option>Other</option></select></label><div className="formRow"><label>Preferred date<input name="date" type="date" /></label><label>ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="90000" pattern="[0-9]{5}" required /></label></div><label>Anything we should know?<textarea name="details" placeholder="Size of the space, frequency, special requests…" rows={4} /></label><button className="button buttonGold formSubmit" type="submit">Request on WhatsApp <ArrowRight size={19} /></button>{sent && <p className="formSuccess" role="status"><CheckCircle2 size={18} /> Your WhatsApp message is ready.</p>}<small>Submitting opens WhatsApp. Date and time are requests only and are not confirmed until our team follows up.</small></form>;
}
