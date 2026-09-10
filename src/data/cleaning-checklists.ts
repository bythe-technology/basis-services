export type CleaningPlanId = "regular" | "deep";

export type CleaningAreaIcon =
  | "kitchen"
  | "living-room"
  | "bedroom"
  | "bathroom"
  | "laundry"
  | "office"
  | "miscellaneous"
  | "final-check";

export type CleaningArea = {
  title: string;
  icon: CleaningAreaIcon;
  tasks: readonly string[];
};

export type CleaningPlan = {
  id: CleaningPlanId;
  label: string;
  summary: string;
  areas: readonly CleaningArea[];
};

const finalCheck = [
  "Check all rooms for missed spots",
  "Ensure all trash has been removed from the premises",
  "Confirm all appliances and fixtures are in their original place",
] as const;

export const cleaningPlans: readonly CleaningPlan[] = [
  {
    id: "regular",
    label: "Regular Cleaning",
    summary:
      "Reliable upkeep for a home that feels clean, comfortable and ready for everyday life.",
    areas: [
      {
        title: "Kitchen & Dining Area",
        icon: "kitchen",
        tasks: [
          "Clean countertops",
          "Wipe down cabinets and drawers",
          "Clean sink and faucet",
          "Clean the top and front of the stove",
          "Clean the oven inside and outside",
          "Clean the microwave inside and outside",
          "Clean the outside of the refrigerator",
          "Clean the outside of the dishwasher",
          "Sweep and mop the floor",
        ],
      },
      {
        title: "Living Room",
        icon: "living-room",
        tasks: [
          "Dust surfaces, including tables and shelves",
          "Vacuum or sweep floors",
          "Dust light fixtures",
          "Clean baseboards",
          "Vacuum upholstery, including sofas and chairs",
          "Fluff and arrange cushions",
        ],
      },
      {
        title: "Master Bedroom",
        icon: "bedroom",
        tasks: [
          "Dust surfaces",
          "Vacuum or sweep floors",
          "Dust blinds or curtains",
          "Clean baseboards",
          "Make the bed",
        ],
      },
      {
        title: "Master Bathroom",
        icon: "bathroom",
        tasks: [
          "Clean the toilet, including bowl, seat and base",
          "Scrub the shower or tub, including tiles, grout and showerhead",
          "Clean sink and faucet",
          "Wipe down mirrors",
          "Clean light fixtures",
          "Clean counters and cabinets",
          "Sweep and mop the floor",
          "Empty the trash can",
        ],
      },
      {
        title: "Bathroom",
        icon: "bathroom",
        tasks: [
          "Clean the toilet, including bowl, seat and base",
          "Scrub the shower or tub, including tiles, grout and showerhead",
          "Clean sink and faucet",
          "Wipe down mirrors",
          "Sweep and mop the floor",
        ],
      },
      {
        title: "Laundry",
        icon: "laundry",
        tasks: [
          "Clean washer and dryer",
          "Vacuum or sweep floors",
          "Organize and straighten items",
        ],
      },
      {
        title: "Home Office",
        icon: "office",
        tasks: [
          "Dust surfaces, including tables and shelves",
          "Vacuum or sweep floors",
          "Dust blinds or curtains",
        ],
      },
      {
        title: "Miscellaneous",
        icon: "miscellaneous",
        tasks: [
          "Dust light fixtures",
          "Vacuum carpets and rugs",
          "Dust and clean electronics",
          "Dust decorative items",
        ],
      },
      { title: "Final Check", icon: "final-check", tasks: finalCheck },
    ],
  },
  {
    id: "deep",
    label: "Deep Cleaning",
    summary:
      "A more detailed reset that reaches inside selected appliances and tackles often-overlooked areas.",
    areas: [
      {
        title: "Kitchen & Dining Area",
        icon: "kitchen",
        tasks: [
          "Clean countertops",
          "Wipe down cabinets and drawers",
          "Clean sink and faucet",
          "Clean the top, front and inside of the stove",
          "Clean the oven inside and outside",
          "Clean the microwave inside and outside",
          "Clean the refrigerator inside and outside",
          "Clean the outside of the dishwasher",
          "Sweep and mop the floor",
        ],
      },
      {
        title: "Living Room",
        icon: "living-room",
        tasks: [
          "Dust surfaces, including tables and shelves",
          "Vacuum or sweep floors",
          "Clean windowsills",
          "Dust blinds or curtains",
          "Dust light fixtures",
          "Clean baseboards",
          "Vacuum upholstery, including sofas and chairs",
          "Clean ceiling fans",
          "Fluff and arrange cushions",
        ],
      },
      {
        title: "Master Bedroom",
        icon: "bedroom",
        tasks: [
          "Dust surfaces",
          "Vacuum or sweep floors",
          "Dust blinds or curtains",
          "Clean baseboards",
          "Make the bed",
        ],
      },
      {
        title: "Master Bathroom",
        icon: "bathroom",
        tasks: [
          "Clean the toilet, including bowl, seat and base",
          "Scrub the shower or tub, including tiles, grout and showerhead",
          "Clean sink and faucet",
          "Wipe down mirrors",
          "Clean light fixtures",
          "Clean counters and cabinets",
          "Sweep and mop the floor",
          "Check the exhaust fan",
          "Clean walls and baseboards",
          "Empty the trash can",
          "Change towels",
        ],
      },
      {
        title: "Bathroom",
        icon: "bathroom",
        tasks: [
          "Clean the toilet, including bowl, seat and base",
          "Scrub the shower or tub, including tiles, grout and showerhead",
          "Clean sink and faucet",
          "Wipe down mirrors",
          "Sweep and mop the floor",
        ],
      },
      {
        title: "Laundry",
        icon: "laundry",
        tasks: [
          "Clean washer and dryer",
          "Vacuum or sweep floors",
          "Organize and straighten items",
        ],
      },
      {
        title: "Home Office",
        icon: "office",
        tasks: [
          "Dust surfaces, including tables and shelves",
          "Vacuum or sweep floors",
          "Clean windowsills",
          "Dust blinds or curtains",
          "Clean baseboards",
        ],
      },
      {
        title: "Miscellaneous",
        icon: "miscellaneous",
        tasks: [
          "Clean windows and window tracks",
          "Dust light fixtures",
          "Clean door knobs and switch plates",
          "Vacuum carpets and rugs",
          "Dust and clean electronics",
          "Dust decorative items",
        ],
      },
      { title: "Final Check", icon: "final-check", tasks: finalCheck },
    ],
  },
] as const;
