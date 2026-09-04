import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServiceIcon } from "@/components/service-icon";
import { contact, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Los Angeles",
  description:
    "Explore home, Airbnb, hotel, office, deep cleaning, windows, carpet, garage, shared kitchen, laundry and organization services in Greater Los Angeles.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cleaning Services in Los Angeles | Basis Services",
    url: "/services",
    images: [
      {
        url: "/images/work-20.webp",
        alt: "Bright living space professionally cleaned by Basis Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="servicesHero shell">
          <div>
            <p className="kicker">Every space, thoughtfully cared for</p>
            <h1>
              Cleaning services <em>made for real life.</em>
            </h1>
            <p>
              From recurring home care to detailed property turnovers, choose
              the service that fits your space.
            </p>
            <a className="button primaryButton" href="#all-services">
              Explore services <ArrowRight />
            </a>
          </div>
          <figure className="servicesHeroPhoto">
            <Image
              src="/images/work-20.webp"
              alt="A bright living space cared for by Basis Services"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </figure>
        </section>
        <section className="allServices section" id="all-services">
          <div className="shell">
            <div className="sectionHead">
              <div>
                <p className="kicker">10 specialized services</p>
                <h2>One careful standard.</h2>
              </div>
              <p>
                Every service is adapted to the property’s condition, access and
                priorities. We confirm the exact scope with you before work
                begins.
              </p>
            </div>
            <nav
              className="serviceIndex"
              aria-label="Choose a cleaning service"
            >
              {services.map((service) => (
                <a href={"#" + service.slug} key={service.slug}>
                  {service.title}
                  <ArrowRight aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="detailedServices">
              {services.map((service) => (
                <article id={service.slug} key={service.slug}>
                  <div className="serviceTitle">
                    <ServiceIcon name={service.icon} />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="serviceDetails">
                    <div>
                      <span>Best for</span>
                      <p>{service.bestFor}</p>
                    </div>
                    <ul>
                      {service.tasks.map((task) => (
                        <li key={task}>
                          <Check aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="textLink"
                      href={
                        contact.whatsapp +
                        "?text=" +
                        encodeURIComponent(
                          "Hi Basis Services! I'd like a quote for " +
                            service.title +
                            ".",
                        )
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp /> Request this service <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="servicesCta section">
          <div className="shell">
            <p className="kicker">Not sure what you need?</p>
            <h2>
              Show us your space. <em>We’ll guide you.</em>
            </h2>
            <p>
              Send a few details on WhatsApp and our team will help define the
              right cleaning scope.
            </p>
            <a
              className="button primaryButton"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Talk to Basis Services
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
