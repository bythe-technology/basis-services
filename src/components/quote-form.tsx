"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contact, services } from "@/data/site";
import {
  buildQuoteMessage,
  hasRooms,
  localDate,
  propertyTypes,
  validateQuote,
  type QuoteErrors,
  type QuoteFields,
} from "@/utils/quote";

function Field({
  name,
  label,
  errors,
  children,
}: {
  name: keyof QuoteFields;
  label: string;
  errors: QuoteErrors;
  children: ReactNode;
}) {
  return (
    <div className="formField">
      <label htmlFor={name}>{label}</label>
      {children}
      {errors[name] && (
        <p className="fieldError" id={name + "-error"}>
          {errors[name]}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [property, setProperty] = useState("");
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [readyUrl, setReadyUrl] = useState("");
  const optional = useRef<HTMLDetailsElement>(null);
  const props = (name: keyof QuoteFields) => ({
    id: name,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? name + "-error" : undefined,
  });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const keys: (keyof QuoteFields)[] = [
      "name",
      "phone",
      "service",
      "property",
      "zip",
      "bedrooms",
      "bathrooms",
      "date",
      "time",
      "details",
    ];
    const fields = Object.fromEntries(
      keys.map((key) => [key, String(data.get(key) ?? "").trim()]),
    ) as QuoteFields;
    const nextErrors = validateQuote(
      fields,
      services.map((service) => service.title),
    );
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      if (
        (nextErrors.date || nextErrors.time || nextErrors.details) &&
        optional.current
      )
        optional.current.open = true;
      requestAnimationFrame(() => {
        const field = form.elements.namedItem(Object.keys(nextErrors)[0]);
        if (field instanceof HTMLElement) field.focus();
      });
      return;
    }
    const url =
      contact.whatsapp +
      "?text=" +
      encodeURIComponent(buildQuoteMessage(fields));
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form
      className="quoteForm"
      noValidate
      onSubmit={submit}
      onChange={() => setReadyUrl("")}
    >
      <div className="formTop">
        <span>Free estimate</span>
        <h3>A little about your space.</h3>
        <p>Start with the essentials. We’ll work out the details together.</p>
      </div>
      <fieldset>
        <legend>01 — Your contact details</legend>
        <div className="formRow">
          <Field name="name" label="Full name" errors={errors}>
            <input
              {...props("name")}
              autoComplete="name"
              maxLength={100}
              placeholder="Your name"
              required
            />
          </Field>
          <Field name="phone" label="Mobile number" errors={errors}>
            <input
              {...props("phone")}
              type="tel"
              autoComplete="tel"
              maxLength={30}
              placeholder="(562) 000-0000"
              required
            />
          </Field>
        </div>
      </fieldset>
      <fieldset>
        <legend>02 — Your cleaning needs</legend>
        <div className="formRow">
          <Field name="service" label="Service" errors={errors}>
            <select {...props("service")} defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.slug}>{service.title}</option>
              ))}
              <option>Other</option>
            </select>
          </Field>
          <Field name="property" label="Property type" errors={errors}>
            <select
              {...props("property")}
              value={property}
              onChange={(event) => setProperty(event.target.value)}
              required
            >
              <option value="" disabled>
                Select property
              </option>
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </Field>
          <Field name="zip" label="ZIP code" errors={errors}>
            <input
              {...props("zip")}
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="90000"
              required
            />
          </Field>
        </div>
        {hasRooms(property) && (
          <div className="formRow roomFields">
            <Field name="bedrooms" label="Bedrooms (optional)" errors={errors}>
              <input
                {...props("bedrooms")}
                type="number"
                min="0"
                max="100"
                step="1"
                inputMode="numeric"
                placeholder="3"
              />
            </Field>
            <Field
              name="bathrooms"
              label="Bathrooms (optional)"
              errors={errors}
            >
              <input
                {...props("bathrooms")}
                type="number"
                min="0"
                max="100"
                step="1"
                inputMode="numeric"
                placeholder="2"
              />
            </Field>
          </div>
        )}
      </fieldset>
      <details ref={optional} className="optionalFields">
        <summary>Additional details (optional)</summary>
        <div className="formRow">
          <Field name="date" label="Preferred date" errors={errors}>
            <input {...props("date")} type="date" min={localDate()} />
          </Field>
          <Field name="time" label="Preferred time" errors={errors}>
            <select {...props("time")} defaultValue="Flexible">
              <option>Flexible</option>
              <option>Morning</option>
              <option>Afternoon</option>
            </select>
          </Field>
        </div>
        <Field name="details" label="Anything we should know?" errors={errors}>
          <textarea
            {...props("details")}
            maxLength={1500}
            placeholder="Size, condition, frequency or special requests…"
            rows={4}
          />
        </Field>
      </details>
      <button className="button primaryButton formSubmit" type="submit">
        <FaWhatsapp /> Prepare my quote request <ArrowUpRight />
      </button>
      {readyUrl && (
        <div className="formSuccess" role="status">
          <p>
            Your message is prepared. Please press Send in WhatsApp to submit
            your request.
          </p>
          <a href={readyUrl} target="_blank" rel="noreferrer">
            Open prepared message in WhatsApp <ArrowUpRight />
          </a>
        </div>
      )}
      <small>
        Opens WhatsApp in a new tab. Nothing is sent automatically. Your date
        and time are confirmed after our team replies.
      </small>
    </form>
  );
}
