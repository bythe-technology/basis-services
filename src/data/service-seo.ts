export type ServiceSeoContent = {
  readonly slug: string;
  readonly metaDescription: string;
  readonly intro: readonly [string, string];
  readonly benefits: readonly string[];
  readonly faqs: readonly { question: string; answer: string }[];
};

export const serviceSeoContent: readonly ServiceSeoContent[] = [
  {
    slug: "home-cleaning",
    metaDescription: "Professional home cleaning in Los Angeles for houses and apartments. Explore what Basis Services can clean and request a personalized estimate.",
    intro: [
      "Home cleaning should make daily life easier, not add another complicated task to your week. Basis Services plans each visit around the property, its condition and the areas that matter most to the people who live there.",
      "Service may include kitchens, bathrooms, bedrooms, living spaces and floors. The exact scope, timing and price are confirmed before the appointment, so expectations are clear on both sides.",
    ],
    benefits: ["A room-by-room scope based on your priorities", "Options for one-time or recurring household care", "Clear confirmation of tasks before the visit"],
    faqs: [
      { question: "What is included in home cleaning?", answer: "Typical visits cover surface dusting, kitchen and bathroom care, floors and finishing touches. The final checklist is personalized to your home and confirmed before service." },
      { question: "Do you clean apartments as well as houses?", answer: "Yes. Basis Services provides home cleaning for both apartments and houses across its Greater Los Angeles service area, subject to availability." },
    ],
  },
  {
    slug: "airbnb-cleaning",
    metaDescription: "Airbnb and vacation rental cleaning in Los Angeles, including turnover care, kitchens, bathrooms, linens and a guest-ready final check.",
    intro: [
      "A short-term rental turnover has a clear deadline: the property must be ready before the next guest arrives. Basis Services focuses on a consistent reset of the spaces guests notice most.",
      "The visit can cover bathrooms, kitchens, floors, surfaces, linens and final presentation. Access, turnover timing and property-specific instructions are aligned before service.",
    ],
    benefits: ["Cleaning planned around check-in and check-out windows", "Guest-facing rooms reset with consistent attention", "Property instructions incorporated into the agreed scope"],
    faqs: [
      { question: "Can cleaning be scheduled between Airbnb guests?", answer: "Yes, depending on location and availability. Share the check-out and next check-in times when requesting an estimate so the team can confirm the schedule." },
      { question: "Can linen and towel presentation be included?", answer: "Yes. Linen, towel and bed presentation can be included when agreed as part of the turnover scope." },
    ],
  },
  {
    slug: "hotel-cleaning",
    metaDescription: "Hotel and hospitality cleaning support in Greater Los Angeles for guest rooms, bathrooms and shared areas, tailored to each property’s standards.",
    intro: [
      "Hospitality spaces depend on consistency. Basis Services offers cleaning support for hotels, inns and boutique properties that need guest rooms and shared spaces prepared to an agreed standard.",
      "Because every property operates differently, staffing needs, room scope, access and presentation requirements are discussed before work begins.",
    ],
    benefits: ["Scope aligned with the property’s operating standards", "Care for guest rooms, bathrooms and shared spaces", "Scheduling discussed around property needs"],
    faqs: [
      { question: "Does Basis Services support boutique hotels?", answer: "Yes. The service can be tailored to hotels, inns and boutique hospitality properties within the service area." },
      { question: "Can shared guest areas be included?", answer: "Yes. Shared-area care can be included alongside room cleaning when it is part of the confirmed scope." },
    ],
  },
  {
    slug: "office-cleaning",
    metaDescription: "Office cleaning in Los Angeles for workspaces, studios and small businesses, including floors, restrooms, break rooms and high-touch surfaces.",
    intro: [
      "A clean workplace supports a more welcoming experience for both employees and visitors. Basis Services adapts office cleaning to the layout, occupancy and priorities of each business.",
      "Service can include floors, restrooms, break rooms, accessible desk-area surfaces, high-touch points and trash removal. Frequency and access arrangements are confirmed in advance.",
    ],
    benefits: ["Cleaning adapted to the way the workplace is used", "Attention to shared and high-touch areas", "One-time or ongoing scopes discussed by request"],
    faqs: [
      { question: "What types of workplaces do you clean?", answer: "Basis Services can support offices, studios and small business spaces. The team confirms whether the property and requested scope fit current availability." },
      { question: "Can office cleaning include restrooms and break rooms?", answer: "Yes. Restrooms, break rooms, floors and high-touch areas can be included in the agreed office-cleaning checklist." },
    ],
  },
  {
    slug: "garage-cleaning",
    metaDescription: "Garage cleaning in Greater Los Angeles for dust, loose debris, accessible surfaces and practical organization. Request a custom quote.",
    intro: [
      "Garages collect dust and loose debris quickly, especially around edges and frequently used storage areas. Basis Services provides focused cleaning based on the garage’s current condition and accessibility.",
      "The scope can include sweeping, vacuuming, surface dust removal and light organization. Heavy hauling, hazardous materials and specialized remediation are not assumed and should be discussed first.",
    ],
    benefits: ["Condition-based scope before work begins", "Care for floors, edges and accessible surfaces", "Optional practical reset of usable areas"],
    faqs: [
      { question: "Does garage cleaning include organization?", answer: "Light organization can be discussed as part of the service. Share photos or details so the team can define what is practical for the visit." },
      { question: "Do you remove hazardous materials?", answer: "Hazardous-material removal is not included by default. Disclose any chemicals, biological waste or other safety concerns before scheduling." },
    ],
  },
  {
    slug: "window-cleaning",
    metaDescription: "Window and glass cleaning in Los Angeles for accessible panes, glass doors, mirrors, frames, tracks and sills. Get a personalized estimate.",
    intro: [
      "Clean glass changes how bright and finished a room feels. Basis Services provides detail-focused cleaning for windows, mirrors and glass doors that can be reached safely within the agreed scope.",
      "Frames, tracks and sills may also be included. Exterior access and the number, size and condition of panes should be shared when requesting an estimate.",
    ],
    benefits: ["Streak-conscious care for glass and mirrors", "Optional attention to frames, tracks and sills", "Access requirements reviewed before scheduling"],
    faqs: [
      { question: "Do you clean both interior and exterior windows?", answer: "Interior panes and safely accessible exterior panes may be included. Access conditions are reviewed before the service is confirmed." },
      { question: "Can tracks and window sills be cleaned?", answer: "Yes. Tracks, frames and sills can be added to the agreed window-cleaning scope." },
    ],
  },
  {
    slug: "carpet-cleaning",
    metaDescription: "Carpet cleaning care in Greater Los Angeles for bedrooms, living areas, rentals and offices, with attention to high-traffic areas.",
    intro: [
      "Carpets and rugs can hold visible debris in the areas people use most. Basis Services offers carpet care shaped around the material, current condition and needs of the room.",
      "The appropriate scope is confirmed after the customer shares details about the space. Stain results can vary, so no removal outcome is promised before the condition is reviewed.",
    ],
    benefits: ["Attention to high-traffic areas", "Condition and material discussed before service", "Suitable for homes, rentals and workplaces"],
    faqs: [
      { question: "Can every carpet stain be removed?", answer: "No cleaning provider can responsibly guarantee every stain. Results depend on the fiber, age and source of the mark, which should be discussed before service." },
      { question: "Is carpet care available for offices and rentals?", answer: "Yes. Carpet cleaning can be requested for residential, rental and office spaces within the service area." },
    ],
  },
  {
    slug: "shared-kitchen-cleaning",
    metaDescription: "Shared kitchen cleaning in Los Angeles for offices, shared homes and hospitality properties, covering cooking and common-use areas.",
    intro: [
      "Shared kitchens need a repeatable cleaning plan because many people use the same counters, appliances and touch points. Basis Services creates a clear scope for the cooking and dining areas of shared properties.",
      "Typical tasks can include counters, sinks, faucets, appliance exteriors, cabinets and floors. Appliance interiors are included only when specifically agreed.",
    ],
    benefits: ["Structured care for high-use common areas", "Scope tailored to the property and frequency", "Clear distinction between appliance exterior and interior care"],
    faqs: [
      { question: "What kinds of shared kitchens do you clean?", answer: "The service may fit offices, shared homes and hospitality properties. Basis Services confirms the property type and scope before scheduling." },
      { question: "Are appliance interiors included?", answer: "Not automatically. Oven, microwave or refrigerator interiors should be requested and confirmed as part of the quote." },
    ],
  },
  {
    slug: "deep-cleaning",
    metaDescription: "Deep cleaning in Los Angeles for move-ins, seasonal resets and first-time visits, with detailed care for kitchens, bathrooms and overlooked areas.",
    intro: [
      "Deep cleaning is intended for spaces that need more time and detail than a regular maintenance visit. Basis Services builds the checklist around the property’s condition and the areas that need the most attention.",
      "The scope may cover baseboards, fixtures, detailed dusting, bathroom surfaces and selected appliance interiors. Customers should identify priority areas when requesting the estimate.",
    ],
    benefits: ["More detailed scope than routine maintenance cleaning", "Useful for move-ins, seasonal resets and first visits", "Priority areas documented before the appointment"],
    faqs: [
      { question: "How is deep cleaning different from regular cleaning?", answer: "Deep cleaning allocates attention to details such as baseboards, fixtures, buildup and selected appliance interiors. The exact difference is documented in the agreed checklist." },
      { question: "Is deep cleaning suitable before moving in?", answer: "Yes. Move-ins are a common reason to request deep cleaning, provided the property, access and desired timing fit the team’s availability." },
    ],
  },
  {
    slug: "laundry-organization",
    metaDescription: "Laundry and home organization support in Los Angeles for linens, towels, closets and household resets, including rental turnovers.",
    intro: [
      "Laundry and organization are the finishing tasks that often make a cleaned space feel truly ready. Basis Services can include practical support for linens, towels, laundry areas and closets.",
      "The customer and team agree on the items to handle, available supplies and preferred presentation before the visit. This service can complement home cleaning or a rental turnover.",
    ],
    benefits: ["Useful as an add-on to home or rental cleaning", "Presentation preferences confirmed in advance", "Support for laundry areas, linens, towels and closets"],
    faqs: [
      { question: "Can laundry support be added to Airbnb cleaning?", answer: "Yes. Laundry, linen and towel presentation can be discussed as part of a vacation-rental turnover." },
      { question: "Does organization include closets?", answer: "Closet organization may be included when the desired scope, available time and handling preferences are agreed before service." },
    ],
  },
] as const;

export function getServiceSeo(slug: string) {
  return serviceSeoContent.find((item) => item.slug === slug);
}
