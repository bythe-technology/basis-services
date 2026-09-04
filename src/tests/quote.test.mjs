import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildQuoteMessage,
  hasRooms,
  localDate,
  validateQuote,
} from "../utils/quote.ts";

const valid = {
  name: "Ana Silva",
  phone: "+1 (562) 555-0100",
  service: "Home Cleaning",
  property: "House",
  zip: "90210",
  bedrooms: "3",
  bathrooms: "2",
  date: "2026-09-06",
  time: "Morning",
  details: "Please focus on the kitchen.",
};
const services = ["Home Cleaning", "Office Cleaning"];
const validate = (fields) => validateQuote(fields, services, "2026-09-04");

test("accepts a valid quote", () => assert.deepEqual(validate(valid), {}));
test("requires contact and service fields", () => {
  const result = validate({
    ...valid,
    name: " ",
    phone: "abc",
    service: "unknown",
    property: "unknown",
    zip: "123",
  });
  for (const field of ["name", "phone", "service", "property", "zip"])
    assert.ok(result[field]);
});
test("rejects negative and fractional room counts", () => {
  const result = validate({ ...valid, bedrooms: "-1", bathrooms: "1.5" });
  assert.ok(result.bedrooms);
  assert.ok(result.bathrooms);
});
test("accepts zero and omitted rooms", () =>
  assert.deepEqual(validate({ ...valid, bedrooms: "0", bathrooms: "" }), {}));
test("rejects past and impossible dates, accepts today", () => {
  assert.ok(validate({ ...valid, date: "2026-09-03" }).date);
  assert.ok(validate({ ...valid, date: "2026-02-30" }).date);
  assert.deepEqual(validate({ ...valid, date: "2026-09-04" }), {});
});
test("optional details may be omitted", () =>
  assert.deepEqual(
    validate({ ...valid, date: "", time: "", details: "" }),
    {},
  ));
test("hidden room fields are neither validated nor included", () => {
  const fields = {
    ...valid,
    property: "Office",
    service: "Office Cleaning",
    bedrooms: "-1",
    bathrooms: "2",
  };
  assert.deepEqual(validate(fields), {});
  assert.doesNotMatch(buildQuoteMessage(fields), /Bedrooms:|Bathrooms:/);
});
test("builds complete residential message and preserves special text", () => {
  const message = buildQuoteMessage({
    ...valid,
    name: " Ana & João ",
    details: "Windows & glass + mirrors",
  });
  assert.match(message, /Name: Ana & João/);
  assert.match(message, /Bedrooms: 3/);
  assert.match(message, /ZIP code: 90210/);
  assert.match(message, /Windows & glass \+ mirrors/);
  assert.equal(decodeURIComponent(encodeURIComponent(message)), message);
});
test("validates boundaries and selections", () => {
  assert.ok(validate({ ...valid, details: "x".repeat(1501) }).details);
  assert.ok(validate({ ...valid, bedrooms: "101" }).bedrooms);
  assert.ok(validate({ ...valid, time: "Night" }).time);
});
test("room applicability and local date are deterministic", () => {
  assert.equal(hasRooms("Airbnb / Rental"), true);
  assert.equal(hasRooms("Hotel"), false);
  assert.equal(localDate(new Date(2026, 0, 2, 23)), "2026-01-02");
});
