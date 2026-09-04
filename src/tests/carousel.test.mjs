import { test } from "node:test";
import assert from "node:assert/strict";
import { carouselPlayback } from "../utils/carousel.ts";

const state = {
  enabled: true,
  reduced: false,
  explicitPlay: false,
  hovered: false,
  focused: false,
};
test("autoplay runs only when not being explored", () => {
  assert.equal(carouselPlayback(state).playing, true);
  assert.equal(carouselPlayback({ ...state, hovered: true }).playing, false);
  assert.equal(carouselPlayback({ ...state, focused: true }).playing, false);
});
test("manual stop persists after hover and focus end", () => {
  assert.deepEqual(carouselPlayback({ ...state, enabled: false }), {
    requested: false,
    playing: false,
  });
});
test("reduced motion disables initial playback but allows explicit opt-in", () => {
  assert.equal(carouselPlayback({ ...state, reduced: true }).playing, false);
  assert.equal(
    carouselPlayback({ ...state, reduced: true, explicitPlay: true }).playing,
    true,
  );
});
