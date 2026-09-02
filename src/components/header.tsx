"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["Home", "#home"], ["Services", "#services"], ["About", "#about"], ["Gallery", "#gallery"], ["Contact", "#contact"]] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="shell headerInner"><a className="brand" href="#home" aria-label="Basis Services home"><Image src="/images/basis-logo-official.jpg" alt="Basis Services" width={96} height={96} priority /><span><strong>BASIS</strong><small>SERVICES</small></span></a><nav className={open ? "nav open" : "nav"} aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button buttonGold navCta" href="#quote" onClick={() => setOpen(false)}>Get a free quote</a></nav><button className="menuButton" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
