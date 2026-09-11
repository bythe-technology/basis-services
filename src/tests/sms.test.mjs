import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildSmsUrl,
  detectSmsPlatform,
  isMobileSmsDevice,
} from "../utils/sms.ts";

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

test("uses the iOS separator required by Messages", () => {
  assert.equal(
    buildSmsUrl("+1 562 578 3263", "Hello there", "ios"),
    "sms:+15625783263&body=Hello%20there",
  );
});

test("detects iPhone, touch iPad and standard platforms", () => {
  assert.equal(detectSmsPlatform("Mozilla/5.0 (iPhone)"), "ios");
  assert.equal(detectSmsPlatform("Mozilla/5.0 (Macintosh)", 5), "ios");
  assert.equal(detectSmsPlatform("Mozilla/5.0 (Linux; Android 15)"), "standard");
});

test("separates mobile SMS devices from desktop browsers", () => {
  assert.equal(isMobileSmsDevice("Mozilla/5.0 (Linux; Android 15; Mobile)"), true);
  assert.equal(isMobileSmsDevice("Mozilla/5.0 (Windows NT 10.0; Win64; x64)"), false);
});
