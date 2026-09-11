import { test } from "node:test";
import assert from "node:assert/strict";
import { buildSmsUrl } from "../utils/sms.ts";

test("builds an SMS URL with a prefilled body", () => {
  const url = buildSmsUrl("+1 (562) 578-3263", "Hi Basis Services!\nQuote & details");
  assert.equal(
    url,
    "sms:+15625783263?body=Hi%20Basis%20Services!%0AQuote%20%26%20details",
  );
});

test("trims the message and preserves the international prefix", () => {
  assert.equal(buildSmsUrl("+1 562 578 3263", "  Hello  "), "sms:+15625783263?body=Hello");
});
