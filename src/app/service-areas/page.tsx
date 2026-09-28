import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { serviceAreas, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Service Areas in Greater Los Angeles",
  description: "Basis Services provides professional home, Airbnb and commercial cleaning across Los Angeles, Malibu, Pasadena, Santa Monica, Long Beach and nearby communities.",
  alternates: { canonical: "/service-areas" },
  openGraph: { title: "Cleaning Service Areas in Greater Los Angeles | Basis Services", description: "See where Basis Services provides residential and commercial cleaning throughout Greater Los Angeles.", url: "/service-areas", type: "website", images: [{ url: "/images/work-03.webp", alt: "Los Angeles-area property cared for by Basis Services" }] },
};

export default function ServiceAreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Basis Services cleaning service areas",
    url: "https://basisserv.com/service-areas",
    about: { "@id": "https://basisserv.com/#business" },
    mainEntity: serviceAreas.map((name) => ({ "@type": "City", name })),
  };
  return <>
    <Header /><JsonLd data={schema} />
    <main id="main-content">
      <section className="areaPageHero shell">
        <p className="kicker">Greater Los Angeles cleaning services</p>
        <h1>Local care, <em>from the city to the coast.</em></h1>
        <p>Basis Services is a service-area cleaning business supporting homes, rentals and workplaces across Greater Los Angeles. Availability depends on the property location, requested service and schedule.</p>
        <a className="button primaryButton" href="#communities">Find your area <ArrowRight /></a>
      </section>
      <section className="areaPage section" id="communities">
        <div className="shell">
          <div className="sectionHead"><div><p className="kicker">Communities we serve</p><h2>Cleaning across Greater LA.</h2></div><p>Don’t see your neighborhood listed? Send the ZIP code with your request and the team will confirm whether service is available.</p></div>
          <div className="areaPageGrid">{serviceAreas.map((area) => <article key={area}><MapPin /><div><h3>{area}</h3><p>Residential, rental and commercial cleaning by request.</p></div></article>)}</div>
        </div>
      </section>
      <section className="areaServices section"><div className="shell"><p className="kicker">Services available by location</p><h2>Care for the spaces you rely on.</h2><div className="relatedServiceGrid">{services.slice(0, 6).map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.shortDescription}</p><span>Explore service <ArrowRight /></span></Link>)}</div></div></section>
      <section className="serviceRequest section"><div className="shell"><p className="kicker">Check your ZIP code</p><h2>Ask about availability.</h2><p>Send your location and cleaning needs for a personalized response from the Basis Services team.</p><Link className="button primaryButton" href="/#quote">Request a free estimate <ArrowRight /></Link></div></section>
    </main><Footer />
  </>;
}
