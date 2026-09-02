export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bestFor: string;
  icon: "home" | "airbnb" | "hotel" | "office" | "garage" | "window" | "carpet" | "kitchen" | "deep" | "laundry";
  tasks: readonly string[];
};

export const contact = {
  phoneDisplay: "+1 (562) 578-3263",
  phone: "+15625783263",
  whatsapp: "https://wa.me/15625783263",
  email: "basisserv@gmail.com",
  instagram: "https://www.instagram.com/basisservicess/",
  instagramHandle: "@basisservicess",
  hours: "8:00 AM–6:00 PM",
} as const;

export const serviceAreas = [
  "Los Angeles", "Malibu", "Culver City", "Marina del Rey", "Pasadena", "Encino",
  "Van Nuys", "Downtown LA", "Santa Monica", "Venice", "Long Beach",
] as const;

export const services: readonly Service[] = [
  { slug:"home-cleaning", title:"Home Cleaning", icon:"home", shortDescription:"Consistent care shaped around your home and routine.", description:"A thoughtful room-by-room clean that keeps your home comfortable, calm and ready to enjoy.", bestFor:"Apartments, houses and recurring household care", tasks:["Dust and wipe surfaces", "Kitchen and bathroom care", "Vacuum, sweep and mop", "Beds and finishing touches"] },
  { slug:"airbnb-cleaning", title:"Airbnb Cleaning", icon:"airbnb", shortDescription:"Reliable turnovers for a guest-ready arrival.", description:"Fast, detail-focused resets built around check-in schedules and the standards short-term rentals demand.", bestFor:"Airbnb, vacation rentals and short-term stays", tasks:["Complete turnover cleaning", "Kitchen and bathroom reset", "Linen and towel presentation", "Final guest-ready inspection"] },
  { slug:"hotel-cleaning", title:"Hotel Cleaning", icon:"hotel", shortDescription:"Polished rooms with a consistent standard.", description:"Dependable housekeeping support for rooms and shared guest spaces, delivered with care and discretion.", bestFor:"Hotels, inns and boutique hospitality", tasks:["Room and bathroom cleaning", "Bed and linen service", "Shared-area care", "Detail and presentation check"] },
  { slug:"office-cleaning", title:"Office Cleaning", icon:"office", shortDescription:"Clean, welcoming spaces for teams and visitors.", description:"Flexible commercial cleaning that supports a healthier, more professional everyday workplace.", bestFor:"Offices, studios and small businesses", tasks:["Desk-area surface care", "Restroom and break-room cleaning", "Floors and high-touch points", "Trash removal and reset"] },
  { slug:"garage-cleaning", title:"Garage Cleaning", icon:"garage", shortDescription:"A cleaner, more usable garage from floor to corner.", description:"Focused cleaning for dust, debris and high-use garage surfaces, tailored to the condition of the space.", bestFor:"Residential garages and property turnovers", tasks:["Sweep and vacuum debris", "Surface dust removal", "Door and edge detailing", "Space reset and organization"] },
  { slug:"window-cleaning", title:"Window & Glass Cleaning", icon:"window", shortDescription:"Clear glass and brighter rooms, inside and out.", description:"Careful glass cleaning for a streak-free finish that lets natural light back into your space.", bestFor:"Homes, rentals, offices and hospitality", tasks:["Interior glass cleaning", "Accessible exterior panes", "Frames, tracks and sills", "Mirrors and glass doors"] },
  { slug:"carpet-cleaning", title:"Carpet Cleaning", icon:"carpet", shortDescription:"Deeper care for soft surfaces and busy rooms.", description:"Carpet attention designed to refresh high-traffic areas and improve the overall feel of the room.", bestFor:"Bedrooms, living areas, offices and rentals", tasks:["Thorough vacuuming", "Spot-focused treatment", "High-traffic area care", "Final texture reset"] },
  { slug:"shared-kitchen-cleaning", title:"Shared Kitchen Cleaning", icon:"kitchen", shortDescription:"Detailed hygiene for busy shared kitchens.", description:"A structured clean for cooking, preparation and shared dining spaces where consistency matters.", bestFor:"Shared homes, offices and hospitality properties", tasks:["Counters, sink and faucet", "Appliance exteriors", "Cabinets and touch points", "Sweep and mop floors"] },
  { slug:"deep-cleaning", title:"Deep Cleaning", icon:"deep", shortDescription:"A top-to-bottom reset for spaces that need more.", description:"Our most detailed service, reaching the fixtures, edges, appliances and overlooked areas of every room.", bestFor:"Move-ins, seasonal resets and first-time service", tasks:["Baseboards and detailed dusting", "Oven and microwave interiors", "Bathroom tile and grout", "Cabinets, fixtures and ceiling fans"] },
  { slug:"laundry-organization", title:"Laundry & Organization", icon:"laundry", shortDescription:"Fresh linens and thoughtfully ordered spaces.", description:"Practical finishing support that brings calm to closets, laundry areas and everyday household routines.", bestFor:"Homes, Airbnb turnovers and hospitality", tasks:["Laundry area reset", "Linens and towels", "Closet organization", "Fold and presentation support"] },
] as const;

export const gallery = [
  ["01", "Polished kitchen after a Basis Services visit"], ["02", "Detailed vanity and bathroom finish"],
  ["03", "Oceanfront outdoor living area prepared for guests"], ["04", "Bright marble kitchen cleaned and reset"],
  ["10", "Carefully styled powder room"], ["11", "Guest bedroom prepared for arrival"],
  ["12", "Glass and mirrors with a clear finish"], ["13", "Ocean-view living room ready to enjoy"],
  ["14", "Luxury kitchen after detailed cleaning"], ["16", "Warm open-plan kitchen fully reset"],
  ["17", "Spa bathroom cleaned and presented"], ["18", "Light-filled living room after service"],
  ["19", "Glass doors overlooking the Pacific"], ["20", "Spacious living area ready for guests"],
  ["21", "Modern room cleaned with attention to every detail"],
].map(([id, alt]) => ({ src: `/images/work-${id}.webp`, alt })) as readonly { src: string; alt: string }[];
