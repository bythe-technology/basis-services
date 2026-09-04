"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/site";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/#work", "Our work"],
  ["/#areas", "Areas"],
  ["/#quote", "Contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  function closeMenu(returnFocus = false) {
    setOpen(false);
    if (returnFocus) menuButton.current?.focus();
  }
  return (
    <header
      className="floatingHeader"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          closeMenu(true);
        }
      }}
    >
      <div className="headerInner">
        <Link
          className="brand"
          href="/"
          aria-label="Basis Services home"
          onClick={() => closeMenu()}
        >
          <Image
            src="/brand/basis-logo-header.png"
            alt="Basis Services"
            width={720}
            height={694}
            priority
            sizes="84px"
          />
        </Link>
        <nav
          id="main-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {links.map(([href, label]) => (
            <Link href={href} key={href} onClick={() => closeMenu()}>
              {label}
            </Link>
          ))}
          <a
            className="headerCta"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Free quote
          </a>
        </nav>
        <button
          ref={menuButton}
          className="menuButton"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
