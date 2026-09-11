"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy, MessageSquareText } from "lucide-react";
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
import {
  buildSmsUrl,
  detectSmsPlatform,
  isMobileSmsDevice,
} from "@/utils/sms";

type CopyStatus = "idle" | "copied" | "failed";

async function copyMessage(message: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = message;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

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
  const [readyMessage, setReadyMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [mobileSms, setMobileSms] = useState(false);
  const optional = useRef<HTMLDetailsElement>(null);
  const result = useRef<HTMLDivElement>(null);
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
    const message = buildQuoteMessage(fields);
    const platform = detectSmsPlatform(
      navigator.userAgent,
      navigator.maxTouchPoints,
    );
    const url = buildSmsUrl(contact.phone, message, platform);
    setReadyMessage(message);
    setReadyUrl(url);
    setMobileSms(isMobileSmsDevice(navigator.userAgent));
    setCopyStatus("idle");
    requestAnimationFrame(() => result.current?.focus());
  }

  const resetPreparedMessage = () => {
    setReadyUrl("");
    setReadyMessage("");
    setCopyStatus("idle");
  };

  const handleCopy = async () => {
    const copied = await copyMessage(readyMessage);
    setCopyStatus(copied ? "copied" : "failed");
  };
  return (
    <form
      className="quoteForm"
      noValidate
      onSubmit={submit}
      onChange={(event) => {
        resetPreparedMessage();
        const fieldName = event.target.name as keyof QuoteFields;
        if (fieldName && errors[fieldName]) {
          setErrors((current) => {
            const next = { ...current };
            delete next[fieldName];
            return next;
          });
        }
      }}
    >
      <div className="formTop">
        <span>Free estimate</span>
        <h3>A little about your space.</h3>
        <p>Start with the essentials. We’ll work out the details together.</p>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="formErrorSummary" role="alert" tabIndex={-1}>
          <strong>Please review the highlighted fields.</strong>
          <p>Your information is still here. Correct the items below and try again.</p>
        </div>
      )}
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
        <MessageSquareText /> Prepare my text request <ArrowUpRight />
      </button>
      {readyUrl && (
        <div className="formSuccess" role="status" tabIndex={-1} ref={result}>
          <div className="formSuccessHeading">
            <span><Check aria-hidden="true" /></span>
            <div>
              <strong>Your text is ready.</strong>
              <p>Review it below, then choose how you want to continue.</p>
            </div>
          </div>
          <label htmlFor="prepared-message">Prepared message</label>
          <textarea
            id="prepared-message"
            className="messagePreview"
            value={readyMessage}
            readOnly
            rows={9}
            onFocus={(event) => event.currentTarget.select()}
          />
          <div className="formSuccessActions">
            {mobileSms && (
              <a className="button primaryButton" href={readyUrl}>
                <MessageSquareText /> Open in Messages <ArrowUpRight />
              </a>
            )}
            <button className="button copyButton" type="button" onClick={handleCopy}>
              {copyStatus === "copied" ? <Check /> : <Copy />}
              {copyStatus === "copied" ? "Message copied" : "Copy message"}
            </button>
          </div>
          {!mobileSms && (
            <p className="desktopSmsHelp">
              On this computer, copy the message and text it to{" "}
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a> from your phone.
            </p>
          )}
          {copyStatus === "failed" && (
            <p className="copyError" role="alert">
              Automatic copying was blocked. Select the message above and copy it manually.
            </p>
          )}
        </div>
      )}
      <small>
        We prepare the message here first. On mobile, you can then open it in
        Messages. Nothing is sent automatically.
      </small>
    </form>
  );
}
