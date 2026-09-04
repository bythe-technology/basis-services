import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contact, serviceAreas, services } from "@/data/site";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { QuoteForm } from "@/components/quote-form";
import { ServiceIcon } from "@/components/service-icon";

export function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="heroContent">
        <p className="kicker">Professional cleaning across Los Angeles</p>
        <h1>
          A fresh start, <em>beautifully done.</em>
        </h1>
        <p className="heroLead">
          Thoughtful cleaning for homes, Airbnb properties, hotels and
          workplaces — delivered with care by an experienced local team.
        </p>
        <div className="heroActions">
          <a className="button primaryButton" href="#quote">
            Get a free quote <ArrowRight />
          </a>
          <a
            className="button secondaryButton"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
        <div className="heroFacts">
          <div>
            <strong>Since 2022</strong>
            <span>Care built on experience</span>
          </div>
          <div>
            <strong>Every day</strong>
            <span>8:00 AM–6:00 PM</span>
          </div>
          <div>
            <strong>Greater LA</strong>
            <span>11 local service areas</span>
          </div>
        </div>
      </div>
      <figure className="heroPhoto">
        <Image
          src="/images/work-01.webp"
          alt="A bright kitchen cleaned by Basis Services"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 48vw"
        />
        <figcaption>
          <span className="photoDot" /> Real spaces. Genuine care.
        </figcaption>
      </figure>
    </section>
  );
}

export function FeaturedServices() {
  return (
    <section className="featuredServices section" id="services">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <p className="kicker">Care that fits your life</p>
            <h2>Your space. Our thoughtful touch.</h2>
          </div>
          <p>
            From everyday home care to a guest-ready arrival, we shape each
            visit around what matters to you.
          </p>
        </div>
        <div className="serviceGrid">
          {services.slice(0, 4).map((service, index) => (
            <article className="serviceCard" key={service.slug}>
              <div className="cardTop">
                <ServiceIcon name={service.icon} />
                <span className="cardIndex">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <Link className="textLink" href={"/services#" + service.slug}>
                View details <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
        <div className="serviceRibbon">
          <div>
            <p className="kicker">A little more care</p>
            <h3>Windows, carpets, garages & more.</h3>
            <p>
              Explore all ten services, including deep cleaning, shared
              kitchens, laundry and organization.
            </p>
          </div>
          <Link className="button secondaryButton" href="/services">
            See all services <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WorkGallery() {
  return (
    <section className="work section" id="work">
      <div className="shell sectionHead">
        <div>
          <p className="kicker">Real Basis work</p>
          <h2>
            Spaces that feel <em>ready again.</em>
          </h2>
        </div>
        <div>
          <p>
            A closer look at real spaces cared for by Basis Services across the
            Los Angeles area.
          </p>
          <a
            className="textLink"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Follow {contact.instagramHandle}
          </a>
        </div>
      </div>
      <GalleryCarousel />
    </section>
  );
}

export function WhyBasis() {
  return (
    <section className="story section">
      <div className="shell storyGrid">
        <figure className="storyImage">
          <Image
            src="/images/work-03.webp"
            alt="Oceanfront outdoor living area prepared by Basis Services"
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
        </figure>
        <div className="storyCopy">
          <p className="kicker">Why Basis</p>
          <h2>
            High standards. <em>Human care.</em>
          </h2>
          <p>
            Since 2022, our team has helped homes and businesses across Greater
            Los Angeles feel calmer, brighter and ready for what comes next.
          </p>
          <ul>
            <li>
              <ShieldCheck />
              <div>
                <h3>Careful by nature</h3>
                <p>
                  We respect your space and pay attention to the finishing
                  details.
                </p>
              </div>
            </li>
            <li>
              <Clock3 />
              <div>
                <h3>Built around your schedule</h3>
                <p>
                  Available every day, depending on appointment availability.
                </p>
              </div>
            </li>
            <li>
              <MapPin />
              <div>
                <h3>Local knowledge</h3>
                <p>
                  Serving communities from Pasadena to Malibu and Long Beach.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const details = [
  {
    src: "/images/work-14.webp",
    title: "Kitchen details",
    alt: "Kitchen surfaces after cleaning by Basis Services",
    copy: "Thoughtful attention to the surfaces you use every day.",
  },
  {
    src: "/images/work-02.webp",
    title: "Bathroom finishing touches",
    alt: "Bathroom vanity cleaned by Basis Services",
    copy: "Fresh, carefully finished spaces that feel ready to enjoy.",
  },
  {
    src: "/images/work-19.webp",
    title: "A clearer view",
    alt: "Clean glass doors overlooking the Pacific",
    copy: "Care for glass and the details that let your space shine.",
  },
] as const;

export function WorkDetails() {
  return (
    <section className="workDetails section">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <p className="kicker">Small things, thoughtfully done</p>
            <h2>The details we care for.</h2>
          </div>
          <p>
            Examples from our work — each space has its own needs, and every
            visit starts with yours.
          </p>
        </div>
        <div className="detailGrid">
          {details.map((detail) => (
            <article key={detail.src}>
              <div className="detailImage">
                <Image
                  src={detail.src}
                  alt={detail.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 30vw"
                />
              </div>
              <h3>{detail.title}</h3>
              <p>{detail.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Share your space",
    copy: "Tell us what you need, where you are and when you would like service.",
    Icon: CalendarDays,
  },
  {
    title: "Confirm your quote",
    copy: "We align the scope, timing and price with you before the visit.",
    Icon: Check,
  },
  {
    title: "Enjoy the reset",
    copy: "Our team handles the details so you can return to a space that feels ready.",
    Icon: WandSparkles,
  },
];

export function Process() {
  return (
    <section className="process section">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <p className="kicker">Simple from the start</p>
            <h2>A fresh space, in three steps.</h2>
          </div>
          <p>
            No guesswork. Just a clear conversation and care tailored to your
            space.
          </p>
        </div>
        <div className="steps">
          {steps.map(({ title, copy, Icon }, index) => (
            <article key={title}>
              <div className="stepTop">
                <Icon />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="processDecoration">
          <Image
            className="decoration"
            src="/images/decor-towels.webp"
            alt=""
            width={160}
            height={160}
          />
          <p>Fresh finishing touches, thoughtfully considered.</p>
        </div>
      </div>
    </section>
  );
}

export function Areas() {
  return (
    <section className="areas section" id="areas">
      <div className="shell areasGrid">
        <div>
          <p className="kicker">Where we work</p>
          <h2>From the city to the coast.</h2>
          <p>
            Professional cleaning throughout Greater Los Angeles, with service
            scheduled according to location and availability.
          </p>
          <a className="button primaryButton" href="#quote">
            Check availability <ArrowRight />
          </a>
        </div>
        <div className="areaList">
          {serviceAreas.map((area) => (
            <span key={area}>
              <MapPin aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="quoteSection section" id="quote">
      <div className="shell quoteGrid">
        <div className="quoteCopy">
          <p className="kicker">Let’s plan your cleaning</p>
          <h2>
            A little less to do. <em>A little more to enjoy.</em>
          </h2>
          <p>
            Request a free estimate. We’ll confirm the scope, timing and
            availability with you personally.
          </p>
          <div className="directContacts">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <span>
                <small>WhatsApp</small>
                {contact.phoneDisplay}
              </span>
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
              <span>
                <small>Instagram</small>
                {contact.instagramHandle}
              </span>
            </a>
          </div>
          <Image
            className="decoration"
            src="/images/decor-products.webp"
            alt=""
            width={160}
            height={160}
          />
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
