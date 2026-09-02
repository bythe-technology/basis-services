import { contact, serviceAreas, services } from "@/data/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://basisserv.com/#business",
    name: "Basis Services", alternateName: "Basisserv", url: "https://basisserv.com",
    logo: "https://basisserv.com/brand/basis-logo-color.png", image: "https://basisserv.com/images/work-01.webp",
    description: "Professional home, Airbnb, hotel, office and deep cleaning across Greater Los Angeles.",
    telephone: contact.phone, email: contact.email, foundingDate: "2022",
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })), sameAs: [contact.instagram],
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "18:00" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Cleaning services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.description, url: `https://basisserv.com/services#${service.slug}` } })) },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
