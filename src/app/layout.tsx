import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-display", subsets: ["latin"] });
export const metadata: Metadata = { title: "Basis Services | Professional Cleaning in Los Angeles", description: "Professional residential, Airbnb, commercial and hotel cleaning services in Los Angeles. Request your free quote today.", keywords: ["Los Angeles cleaning services", "residential cleaning", "Airbnb cleaning", "commercial cleaning", "hotel cleaning"], openGraph: { title: "A cleaner space. A brighter life.", description: "Professional cleaning services across Los Angeles.", type: "website", images: ["/images/basis-hero.png"] }, twitter: { card: "summary_large_image", title: "Basis Services", description: "Cleaning solutions that shine across Los Angeles.", images: ["/images/basis-hero.png"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}><body>{children}</body></html>; }
