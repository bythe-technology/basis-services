import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
export const metadata: Metadata = { metadataBase: new URL("https://basisserv.com"), title: "Basis Services | Professional Cleaning in Los Angeles", description: "Professional home, Airbnb, hotel, office and deep cleaning across Greater Los Angeles. Request your free quote on WhatsApp.", keywords: ["Los Angeles cleaning services", "home cleaning", "Airbnb cleaning", "hotel cleaning", "deep cleaning"], openGraph: { title: "A fresh start, beautifully done.", description: "Professional cleaning with genuine care across Greater Los Angeles.", type: "website", images: ["/images/work-01.webp"] }, twitter: { card: "summary_large_image", title: "Basis Services", description: "Professional cleaning with genuine care across Greater Los Angeles.", images: ["/images/work-01.webp"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>; }
