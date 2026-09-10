import { test } from "node:test";
import assert from "node:assert/strict";
import { cleaningPlans } from "../data/cleaning-checklists.ts";

const plan = (id) => cleaningPlans.find((item) => item.id === id);
const area = (cleaningPlan, title) =>
  cleaningPlan.areas.find((item) => item.title === title);

test("defines complete regular and deep room-by-room checklists", () => {
  assert.deepEqual(cleaningPlans.map(({ id }) => id), ["regular", "deep"]);
  for (const cleaningPlan of cleaningPlans) {
    assert.equal(cleaningPlan.areas.length, 9);
    assert.ok(cleaningPlan.areas.every(({ tasks }) => tasks.length > 0));
  }
});

test("keeps the same three-step final check in both plans", () => {
  const regularFinal = area(plan("regular"), "Final Check").tasks;
  const deepFinal = area(plan("deep"), "Final Check").tasks;
  assert.equal(regularFinal.length, 3);
  assert.deepEqual(deepFinal, regularFinal);
});

test("preserves the detailed deep-cleaning distinctions", () => {
  const deep = plan("deep");
  assert.ok(area(deep, "Living Room").tasks.includes("Clean ceiling fans"));
  assert.ok(area(deep, "Master Bathroom").tasks.includes("Clean walls and baseboards"));
  assert.ok(area(deep, "Home Office").tasks.includes("Clean windowsills"));
  assert.ok(area(deep, "Miscellaneous").tasks.includes("Clean windows and window tracks"));
});

test("contains no duplicate task within an area", () => {
  for (const cleaningPlan of cleaningPlans) {
    for (const checklistArea of cleaningPlan.areas) {
      assert.equal(new Set(checklistArea.tasks).size, checklistArea.tasks.length);
    }
  }
});
