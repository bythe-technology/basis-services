import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BedDouble, Building2, Car, Check, CookingPot, HomeIcon, Hotel, Layers3, Shirt, Sparkles, SprayCan, type LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { contact, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Los Angeles",
  description: "Explore home, Airbnb, hotel, office, deep cleaning, windows, carpet, garage, shared kitchen, laundry and organization services in Greater Los Angeles.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Cleaning Services in Los Angeles | Basis Services", url: "/services", images: [{ url: "/images/work-20.webp", alt: "Bright living space professionally cleaned by Basis Services" }] },
};

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = { home:HomeIcon, airbnb:BedDouble, hotel:Hotel, office:Building2, garage:Car, window:SprayCan, carpet:Layers3, kitchen:CookingPot, deep:Sparkles, laundry:Shirt };

export default function ServicesPage() {
  return <main><Header /><section className="servicesHero"><Image src="/images/work-20.webp" alt="A bright living space cared for by Basis Services" fill priority sizes="100vw" /><div className="servicesHeroOverlay"/><div className="shell"><p className="kicker"><span/> Every space, thoughtfully cared for</p><h1>Cleaning services<br/><em>made for real life.</em></h1><p>From recurring home care to detailed property turnovers, choose the service that fits your space and request a tailored quote.</p><a className="button primaryButton" href="#all-services">Explore services <ArrowRight/></a></div></section><section className="allServices section" id="all-services"><div className="shell"><div className="servicesIntro"><p>10 specialized services</p><h2>One careful standard.</h2><span>Every service is adapted to the property’s condition, access and priorities. We confirm the exact scope with you before work begins.</span></div><div className="detailedServices">{services.map((service,index)=>{const Icon=icons[service.icon];return <article id={service.slug} key={service.slug}><div className="serviceTitle"><small>{String(index+1).padStart(2,"0")}</small><div className="serviceIcon"><Icon/></div><div><h3>{service.title}</h3><p>{service.description}</p></div></div><div className="serviceDetails"><div><span>Best for</span><p>{service.bestFor}</p></div><ul>{service.tasks.map(task=><li key={task}><Check/>{task}</li>)}</ul><a href={`${contact.whatsapp}?text=${encodeURIComponent(`Hi Basis Services! I'd like a quote for ${service.title}.`)}`} target="_blank" rel="noreferrer"><FaWhatsapp/> Request this service <ArrowRight/></a></div></article>})}</div></div></section><section className="servicesCta"><Image src="/images/sticker-squeegee.png" alt="" width={300} height={300}/><div><p className="kicker"><span/> Not sure what you need?</p><h2>Show us your space.<br/><em>We’ll guide you.</em></h2><p>Send a few details on WhatsApp and our team will help define the right cleaning scope.</p><a className="button primaryButton" href={contact.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp/> Talk to Basis Services</a></div></section><Footer/></main>;
}
