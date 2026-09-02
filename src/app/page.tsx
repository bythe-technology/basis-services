import Image from "next/image";
import { ArrowRight, BedDouble, CalendarCheck, Camera, CheckCircle2, Clock3, Hotel, House, Mail, MapPin, MessageCircle, Phone, Sparkles, Star, UsersRound } from "lucide-react";
import { Header } from "@/components/header";
import { QuoteForm } from "@/components/quote-form";

const services = [
  { title: "Home Cleaning", description: "Regular or deep cleaning that makes home feel lighter.", icon: House, tone: "residential" },
  { title: "Airbnb & Short-Term Rental", description: "Reliable turnovers designed for five-star guest experiences.", icon: BedDouble, tone: "airbnb" },
  { title: "Deep Cleaning", description: "A detailed reset for kitchens, bathrooms, living areas and bedrooms.", icon: Sparkles, tone: "commercial" },
  { title: "Hotel Cleaning", description: "Consistent standards for rooms guests remember for the right reasons.", icon: Hotel, tone: "hotel" },
] as const;

const process = [
  { number: "01", title: "Tell us what you need", text: "Choose a service and share the details of your space." },
  { number: "02", title: "Receive your quote", text: "We confirm the scope, timing and price before any work begins." },
  { number: "03", title: "Enjoy the shine", text: "Our team arrives prepared and leaves your space refreshed." },
] as const;

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="home">
        <Image className="heroImage" src="/images/basis-hero.png" alt="Basis Services professional cleaners caring for a Los Angeles home" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="shell heroContent">
          <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Cleaning solutions that shine</p>
          <h1>A cleaner space.<br /><span>A brighter life.</span></h1>
          <p className="heroLead">Professional cleaning for homes, short-term rentals, hotels and businesses across Los Angeles.</p>
          <div className="heroActions">
            <a className="button buttonGold" href="#quote">Get a free quote <ArrowRight size={19} /></a>
            <a className="button buttonGhost" href="https://wa.me/15625783263" target="_blank" rel="noreferrer"><MessageCircle size={20} /> WhatsApp us</a>
          </div>
          <div className="heroTrust" aria-label="Company highlights">
            <span><Sparkles /> Detail-focused care</span><span><UsersRound /> Trusted professionals</span><span><MapPin /> Serving Los Angeles</span>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <div className="sectionHeading splitHeading"><div><p className="eyebrow">Care for every kind of space</p><h2>Cleaning that fits<br />the way you live.</h2></div><p>From recurring home care to fast rental turnovers, our service is built around your property, your schedule and your standards.</p></div>
          <div className="serviceGrid">
            {services.map(({ title, description, icon: Icon, tone }, index) => (
              <article className={`serviceCard ${tone}`} key={title}><span className="serviceNumber">0{index + 1}</span><Icon className="serviceIcon" size={34} strokeWidth={1.6} /><h3>{title}</h3><p>{description}</p><a href="#quote" aria-label={`Request a quote for ${title}`}>Request this service <ArrowRight size={17} /></a></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell aboutGrid">
          <div className="aboutVisual"><Image src="/images/work-kitchen-2.jpg" alt="Spotless kitchen cleaned by Basis Services" fill sizes="(max-width: 800px) 100vw, 45vw" /><div className="aboutStat"><strong>Detail-first</strong><span>care, every visit</span></div></div>
          <div className="aboutCopy"><p className="eyebrow">Why Basis Services</p><h2>Professional care.<br />Personal attention.</h2><p className="aboutIntro">A clean space changes how you feel in it. That is why we bring consistency, clear communication and genuine attention to every property we serve.</p><ul className="checkList"><li><CheckCircle2 /> Customized service for your space</li><li><CheckCircle2 /> Reliable scheduling and communication</li><li><CheckCircle2 /> Careful, detail-oriented professionals</li><li><CheckCircle2 /> Residential and commercial experience</li></ul><a className="textLink" href="#quote">Let&apos;s plan your cleaning <ArrowRight size={18} /></a></div>
        </div>
      </section>

      <section className="section processSection"><div className="shell"><div className="sectionHeading centered"><p className="eyebrow">Simple from the start</p><h2>Your clean space is three steps away.</h2></div><div className="processGrid">{process.map((item, index) => <article className="processCard" key={item.number}><span>{item.number}</span>{index === 0 ? <CalendarCheck /> : index === 1 ? <MessageCircle /> : <Sparkles />}<h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

      <section className="section gallery" id="gallery">
        <div className="shell galleryGrid">
          <div className="galleryCopy"><p className="eyebrow">The Basis standard</p><h2>Clean you can see.<br />Care you can feel.</h2><p>We focus on the details that turn a tidy room into a space that feels ready, calm and welcoming.</p><div className="rating"><div><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><span>Committed to five-star service</span></div></div>
          <div className="galleryPanel"><div className="galleryImageWrap"><Image src="/images/work-kitchen-1.jpg" alt="Freshly cleaned luxury kitchen by Basis Services" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="galleryNote"><Sparkles /><span><strong>Real Basis work</strong>See more transformations on Instagram.</span></div></div>
        </div>
      </section>

      <section className="section quoteSection" id="quote">
          <div className="shell quoteGrid"><div className="quoteCopy"><p className="eyebrow">Request your cleaning</p><h2>Ready for a space<br />that truly shines?</h2><p>Tell us a little about what you need. We&apos;ll follow up to confirm availability and prepare your free, no-obligation quote.</p><div className="contactList"><a href="tel:+15625783263"><Phone /><span><small>Call or WhatsApp</small>+1 (562) 578-3263</span></a><a href="mailto:basisserv@gmail.com"><Mail /><span><small>Email us</small>basisserv@gmail.com</span></a><a href="https://www.instagram.com/basisservicess/" target="_blank" rel="noreferrer"><Camera /><span><small>Follow our work</small>@basisservicess</span></a><div><MapPin /><span><small>Service area</small>Los Angeles and surrounding areas</span></div><div><Clock3 /><span><small>Response time</small>We&apos;ll get back to you as soon as possible</span></div></div></div><QuoteForm /></div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footerTop"><div className="footerBrand"><div className="footerLogo"><Image src="/images/basis-logo-official.jpg" alt="Basis Services" width={112} height={112} /><span><strong>BASIS</strong><small>SERVICES</small></span></div><p>Cleaning solutions that shine across Los Angeles.</p></div><div><h3>Services</h3><a href="#services">Home cleaning</a><a href="#services">Airbnb cleaning</a><a href="#services">Deep cleaning</a><a href="#services">Hotels</a></div><div><h3>Contact</h3><a href="tel:+15625783263">+1 (562) 578-3263</a><a href="mailto:basisserv@gmail.com">basisserv@gmail.com</a><a href="https://www.instagram.com/basisservicess/" target="_blank" rel="noreferrer">@basisservicess</a><span>Los Angeles, California</span></div></div>
        <div className="shell footerBottom"><span>© {new Date().getFullYear()} Basis Services. All rights reserved.</span><span>Website by BYTHE</span></div>
      </footer>
    </main>
  );
}
