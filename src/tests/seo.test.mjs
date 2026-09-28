import { test } from "node:test";
import assert from "node:assert/strict";
import { serviceSeoContent } from "../data/service-seo.ts";
import { services } from "../data/site.ts";

test("provides unique SEO content for every service route", () => {
  assert.deepEqual(
    serviceSeoContent.map(({ slug }) => slug).toSorted(),
    services.map(({ slug }) => slug).toSorted(),
  );
  assert.equal(
    new Set(serviceSeoContent.map(({ metaDescription }) => metaDescription)).size,
    services.length,
  );
});

test("keeps service metadata useful and search-snippet sized", () => {
  for (const item of serviceSeoContent) {
    assert.ok(item.metaDescription.length >= 110, `${item.slug} description is too short`);
    assert.ok(item.metaDescription.length <= 170, `${item.slug} description is too long`);
    assert.equal(item.intro.length, 2);
    assert.ok(item.benefits.length >= 3);
    assert.ok(item.faqs.length >= 2);
  }
});
