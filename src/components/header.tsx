"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`floatingHeader ${scrolled ? "isScrolled" : ""}`}><div className="headerInner"><Link className="brand" href="/" aria-label="Basis Services home" onClick={() => setOpen(false)}><Image src="/brand/basis-mark-color.png" alt="" width={512} height={512} priority /><span><strong>BASIS</strong><small>SERVICES</small></span></Link><nav className={open ? "nav open" : "nav"} aria-label="Main navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/services" onClick={() => setOpen(false)}>Services</Link><Link href="/#work" onClick={() => setOpen(false)}>Our work</Link><Link href="/#areas" onClick={() => setOpen(false)}>Areas</Link><Link href="/#quote" onClick={() => setOpen(false)}>Contact</Link><a className="headerCta" href={`${contact.whatsapp}?text=${encodeURIComponent("Hi Basis Services! I'd like a free cleaning quote.")}`} target="_blank" rel="noreferrer"><FaWhatsapp /> Free quote</a></nav><button className="menuButton" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
