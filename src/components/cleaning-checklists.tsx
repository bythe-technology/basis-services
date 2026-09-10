"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  Bath,
  BedDouble,
  Check,
  ClipboardCheck,
  CookingPot,
  Laptop,
  Shirt,
  Sofa,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  cleaningPlans,
  type CleaningAreaIcon,
  type CleaningPlanId,
} from "@/data/cleaning-checklists";

const areaIcons: Record<CleaningAreaIcon, LucideIcon> = {
  kitchen: CookingPot,
  "living-room": Sofa,
  bedroom: BedDouble,
  bathroom: Bath,
  laundry: Shirt,
  office: Laptop,
  miscellaneous: Sparkles,
  "final-check": ClipboardCheck,
};

export function CleaningChecklists() {
  const [activePlan, setActivePlan] = useState<CleaningPlanId>("regular");
  const tabListRef = useRef<HTMLDivElement>(null);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const tabs = Array.from(
      tabListRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']") ?? [],
    );
    const currentIndex = tabs.indexOf(event.currentTarget);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    nextTab.focus();
    setActivePlan(nextTab.dataset.plan as CleaningPlanId);
  }

  return (
    <section className="cleaningChecklists" aria-labelledby="cleaning-checklists-title">
      <div className="checklistIntro">
        <div>
          <p className="kicker">Room-by-room checklist</p>
          <h2 id="cleaning-checklists-title">Know what’s included.</h2>
        </div>
        <p>
          Compare our Regular and Deep Cleaning checklists. The final scope is
          confirmed before service based on your property, access and priorities.
        </p>
      </div>

      <div className="checklistTabs" role="tablist" aria-label="Cleaning level" ref={tabListRef}>
        {cleaningPlans.map((plan) => (
          <button
            type="button"
            role="tab"
            id={`${plan.id}-cleaning-tab`}
            aria-controls={`${plan.id}-cleaning-panel`}
            aria-selected={activePlan === plan.id}
            tabIndex={activePlan === plan.id ? 0 : -1}
            data-plan={plan.id}
            onClick={() => setActivePlan(plan.id)}
            onKeyDown={handleTabKeyDown}
            key={plan.id}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {cleaningPlans.map((plan) => (
        <div
          className="checklistPanel"
          role="tabpanel"
          id={`${plan.id}-cleaning-panel`}
          aria-labelledby={`${plan.id}-cleaning-tab`}
          hidden={activePlan !== plan.id}
          key={plan.id}
        >
          <div className="checklistPlanHead">
            <div>
              <span>{plan.id === "deep" ? "More detailed care" : "Everyday upkeep"}</span>
              <h3>{plan.label}</h3>
            </div>
            <p>{plan.summary}</p>
          </div>
          <div className="checklistGrid">
            {plan.areas.map((area) => {
              const Icon = areaIcons[area.icon];
              return (
                <article className={area.icon === "final-check" ? "finalCheckCard" : undefined} key={area.title}>
                  <header>
                    <span className="checklistIcon"><Icon aria-hidden="true" /></span>
                    <h4>{area.title}</h4>
                  </header>
                  <ul>
                    {area.tasks.map((task) => (
                      <li key={task}><Check aria-hidden="true" /> <span>{task}</span></li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
