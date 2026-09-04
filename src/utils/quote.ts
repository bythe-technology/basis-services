export const propertyTypes = [
  "House",
  "Apartment",
  "Airbnb / Rental",
  "Hotel",
  "Office",
  "Other",
] as const;
export type QuoteFields = Record<
  | "name"
  | "phone"
  | "service"
  | "property"
  | "zip"
  | "bedrooms"
  | "bathrooms"
  | "date"
  | "time"
  | "details",
  string
>;
export type QuoteErrors = Partial<Record<keyof QuoteFields, string>>;
export const hasRooms = (property: string) =>
  ["House", "Apartment", "Airbnb / Rental"].includes(property);

export function localDate(date = new Date()): string {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export function validateQuote(
  fields: QuoteFields,
  services: readonly string[],
  today = localDate(),
): QuoteErrors {
  const errors: QuoteErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (fields.name.length > 100)
    errors.name = "Please use 100 characters or fewer.";
  const digits = fields.phone.replace(/\D/g, "");
  if (
    !/^[+()\d\s.-]+$/.test(fields.phone) ||
    digits.length < 7 ||
    digits.length > 15
  )
    errors.phone = "Please enter a valid phone number.";
  if (![...services, "Other"].includes(fields.service))
    errors.service = "Please select a service.";
  if (!(propertyTypes as readonly string[]).includes(fields.property))
    errors.property = "Please select a property type.";
  if (!/^\d{5}$/.test(fields.zip)) errors.zip = "Enter a five-digit ZIP code.";
  if (hasRooms(fields.property)) {
    for (const field of ["bedrooms", "bathrooms"] as const) {
      if (fields[field] && !/^\d+$/.test(fields[field]))
        errors[field] = "Enter a whole number of zero or more.";
      else if (Number(fields[field]) > 100)
        errors[field] =
          "Please contact us for properties with more than 100 rooms.";
    }
  }
  if (fields.date) {
    const parsed = new Date(fields.date + "T12:00:00Z");
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(fields.date) ||
      Number.isNaN(parsed.getTime()) ||
      parsed.toISOString().slice(0, 10) !== fields.date
    )
      errors.date = "Please choose a valid date.";
    else if (fields.date < today)
      errors.date = "Please choose today or a future date.";
  }
  if (
    fields.time &&
    !["Flexible", "Morning", "Afternoon"].includes(fields.time)
  )
    errors.time = "Please choose a time period.";
  if (fields.details.length > 1500)
    errors.details = "Please use 1,500 characters or fewer.";
  return errors;
}

export function buildQuoteMessage(fields: QuoteFields): string {
  const message = [
    "Hi Basis Services! I'd like a free cleaning quote.",
    "",
    "Name: " + fields.name.trim(),
    "Phone: " + fields.phone.trim(),
    "Service: " + fields.service,
    "Property: " + fields.property,
    "ZIP code: " + fields.zip,
  ];
  if (hasRooms(fields.property)) {
    if (fields.bedrooms) message.push("Bedrooms: " + fields.bedrooms);
    if (fields.bathrooms) message.push("Bathrooms: " + fields.bathrooms);
  }
  message.push(
    "Preferred date: " + (fields.date || "Flexible"),
    "Preferred time: " + (fields.time || "Flexible"),
  );
  if (fields.details.trim()) message.push("Details: " + fields.details.trim());
  return message.join("\n");
}
