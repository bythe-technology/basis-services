import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contact, serviceAreas } from "@/data/site";
import { BytheCredit } from "@/components/bythe-credit";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerGrid">
        <div className="footerBrand">
          <div className="footerLogo">
            <Image
              src="/brand/basis-logo-header.png"
              alt="Basis Services"
              width={720}
              height={694}
            />
          </div>
          <p>
            Professional cleaning with genuine care across Greater Los Angeles.
          </p>
          <div className="socialLinks">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Basis Services on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Basis Services on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/services">All services</Link>
          <Link href="/#work">Our work</Link>
          <Link href="/#quote">Free quote</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>Daily, {contact.hours}</span>
        </div>
        <div>
          <h3>Service area</h3>
          <p>{serviceAreas.slice(0, 6).join(" · ")} and surrounding areas.</p>
        </div>
      </div>
      <div className="shell footerBottom">
        <BytheCredit />
        <span>
          © {new Date().getFullYear()} Basis Services. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
