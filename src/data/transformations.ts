export interface TransformationVideo {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly videoSrc: string;
  readonly posterSrc: string;
  readonly duration: string;
}

export const transformationVideos: readonly TransformationVideo[] = [
  {
    slug: "appliance-restoration",
    title: "Appliance detail care",
    category: "Deep cleaning",
    description: "Built-up residue removed for a visibly cleaner finish.",
    videoSrc: "/videos/transformations/appliance-restoration.mp4",
    posterSrc: "/videos/transformations/appliance-restoration-poster.webp",
    duration: "0:14",
  },
  {
    slug: "bedroom-reset-one",
    title: "Guest-ready bedroom",
    category: "Home care",
    description: "Bedding, surfaces and finishing touches reset with care.",
    videoSrc: "/videos/transformations/bedroom-reset-one.mp4",
    posterSrc: "/videos/transformations/bedroom-reset-one-poster.webp",
    duration: "0:15",
  },
  {
    slug: "outdoor-deck-reset",
    title: "Outdoor deck reset",
    category: "Outdoor care",
    description: "Loose debris cleared to make the space feel open again.",
    videoSrc: "/videos/transformations/outdoor-deck-reset.mp4",
    posterSrc: "/videos/transformations/outdoor-deck-reset-poster.webp",
    duration: "0:11",
  },
  {
    slug: "living-space-organization",
    title: "Living space organization",
    category: "Organization",
    description: "A busy room thoughtfully arranged into a calmer space.",
    videoSrc: "/videos/transformations/living-space-organization.mp4",
    posterSrc: "/videos/transformations/living-space-organization-poster.webp",
    duration: "0:14",
  },
  {
    slug: "stone-patio-care",
    title: "Outdoor detail care",
    category: "Exterior cleaning",
    description: "A close look at the care given to an oceanfront outdoor area.",
    videoSrc: "/videos/transformations/stone-patio-care.mp4",
    posterSrc: "/videos/transformations/stone-patio-care-poster.webp",
    duration: "0:17",
  },
  {
    slug: "kitchen-reset",
    title: "Kitchen reset",
    category: "Kitchen cleaning",
    description: "Counters cleared and finished for a bright, welcoming result.",
    videoSrc: "/videos/transformations/kitchen-reset.mp4",
    posterSrc: "/videos/transformations/kitchen-reset-poster.webp",
    duration: "0:15",
  },
  {
    slug: "sink-deep-clean",
    title: "Sink deep clean",
    category: "Detail work",
    description: "Leaves and residue removed from a hard-working utility sink.",
    videoSrc: "/videos/transformations/sink-deep-clean.mp4",
    posterSrc: "/videos/transformations/sink-deep-clean-poster.webp",
    duration: "0:16",
  },
  {
    slug: "bedroom-reset-two",
    title: "Primary bedroom reset",
    category: "Home care",
    description: "A complete bedding reset with crisp, considered finishing.",
    videoSrc: "/videos/transformations/bedroom-reset-two.mp4",
    posterSrc: "/videos/transformations/bedroom-reset-two-poster.webp",
    duration: "0:13",
  },
] as const;
