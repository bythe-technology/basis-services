import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ServiceIcon } from "@/components/service-icon";
import { SmsLink } from "@/components/sms-link";
import { getServiceSeo } from "@/data/service-seo";
import { contact, serviceAreas, services } from "@/data/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const seo = getServiceSeo(slug);
  if (!service || !seo) return {};
  const title = `${service.title} in Los Angeles`;
  const url = `/services/${service.slug}`;
  return {
    title,
    description: seo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Basis Services`,
      description: seo.metaDescription,
      url,
      type: "website",
      images: [{ url: "/images/work-14.webp", alt: `${service.title} by Basis Services in Los Angeles` }],
    },
    twitter: { card: "summary_large_image", title, description: seo.metaDescription, images: ["/images/work-14.webp"] },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const seo = getServiceSeo(slug);
  if (!service || !seo) notFound();

  const url = `https://basisserv.com/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: seo.metaDescription,
        url,
        provider: { "@id": "https://basisserv.com/#business" },
        areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://basisserv.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://basisserv.com/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: seo.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <JsonLd data={schema} />
      <main id="main-content">
        <article>
          <header className="serviceDetailHero shell">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span aria-current="page">{service.title}</span>
              </nav>
              <div className="serviceDetailTitle"><ServiceIcon name={service.icon} /><p className="kicker">Professional cleaning service</p></div>
              <h1>{service.title} <em>in Los Angeles.</em></h1>
              <p className="serviceDetailLead">{seo.metaDescription}</p>
              <div className="heroActions">
                <a className="button primaryButton" href="#request-service">Request an estimate <ArrowRight /></a>
                <Link className="button secondaryButton" href="/service-areas"><MapPin /> View service areas</Link>
              </div>
            </div>
            <figure className="serviceDetailPhoto">
              <Image src="/images/work-14.webp" alt={`A space prepared by Basis Services, provider of ${service.title.toLowerCase()} in Los Angeles`} fill priority sizes="(max-width: 1023px) 100vw, 42vw" />
            </figure>
          </header>

          <section className="serviceDetailBody section">
            <div className="shell serviceDetailGrid">
              <div className="serviceProse">
                <p className="kicker">Care built around your space</p>
                <h2>What to expect from {service.title.toLowerCase()}.</h2>
                {seo.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <aside className="serviceScope" aria-label={`${service.title} overview`}>
                <h2>Service overview</h2>
                <p><strong>Best for:</strong> {service.bestFor}</p>
                <h3>Commonly requested tasks</h3>
                <ul>{service.tasks.map((task) => <li key={task}><Check />{task}</li>)}</ul>
              </aside>
            </div>
          </section>

          <section className="serviceBenefits section">
            <div className="shell">
              <p className="kicker">Why customers request it</p>
              <h2>A clear, tailored approach.</h2>
              <div className="serviceBenefitGrid">{seo.benefits.map((benefit, index) => <article key={benefit}><span>0{index + 1}</span><h3>{benefit}</h3></article>)}</div>
            </div>
          </section>

          <section className="serviceFaq section">
            <div className="shell serviceDetailGrid">
              <div><p className="kicker">Helpful answers</p><h2>{service.title} questions.</h2></div>
              <div className="faqList">{seo.faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
            </div>
          </section>

          <section className="serviceRequest section" id="request-service">
            <div className="shell">
              <p className="kicker">Request a personalized estimate</p>
              <h2>Tell us about your space.</h2>
              <p>Share the property type, ZIP code, preferred timing and priorities. The Basis team will confirm scope, availability and price with you.</p>
              <SmsLink className="button primaryButton" phone={contact.phone} message={`Hi Basis Services! I'd like a quote for ${service.title}.`}>
                Request {service.title} <ArrowRight />
              </SmsLink>
            </div>
          </section>

          <section className="relatedServices section">
            <div className="shell"><p className="kicker">Explore more</p><h2>Related cleaning services.</h2><div className="relatedServiceGrid">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><ServiceIcon name={item.icon} /><h3>{item.title}</h3><p>{item.shortDescription}</p><span>View service <ArrowRight /></span></Link>)}</div></div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
