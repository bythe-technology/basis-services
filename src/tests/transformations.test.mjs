import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { transformationVideos } from "../data/transformations.ts";

const publicPath = (...parts) => join(process.cwd(), "public", ...parts);

test("defines eight distinct transformation stories", () => {
  assert.equal(transformationVideos.length, 8);
  assert.equal(
    new Set(transformationVideos.map(({ slug }) => slug)).size,
    transformationVideos.length,
  );
});

test("keeps every video and lightweight poster available", () => {
  for (const item of transformationVideos) {
    const video = publicPath(...item.videoSrc.split("/").filter(Boolean));
    const poster = publicPath(...item.posterSrc.split("/").filter(Boolean));

    assert.ok(existsSync(video), `${item.slug} video is missing`);
    assert.ok(existsSync(poster), `${item.slug} poster is missing`);
    assert.ok(statSync(video).size < 5_000_000, `${item.slug} video is too large`);
    assert.ok(statSync(poster).size < 100_000, `${item.slug} poster is too large`);
  }
});
