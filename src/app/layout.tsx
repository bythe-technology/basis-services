import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const description =
  "Professional home, Airbnb, hotel, office and deep cleaning across Greater Los Angeles. Request a free, personalized quote from Basis Services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://basisserv.com"),
  title: {
    default: "Basis Services | Professional Cleaning in Los Angeles",
    template: "%s | Basis Services",
  },
  description,
  applicationName: "Basis Services",
  authors: [{ name: "Basis Services", url: "https://basisserv.com" }],
  creator: "Basis Services",
  publisher: "Basis Services",
  category: "Professional Cleaning Services",
  keywords: [
    "Los Angeles cleaning services",
    "home cleaning Los Angeles",
    "Airbnb cleaning",
    "hotel cleaning",
    "office cleaning",
    "deep cleaning",
    "Basis Services",
  ],
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Basis Services | Professional Cleaning in Los Angeles",
    description,
    url: "/",
    siteName: "Basis Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/work-01.webp",
        width: 1600,
        height: 1200,
        alt: "A polished kitchen professionally cleaned by Basis Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basis Services | Professional Cleaning in Los Angeles",
    description,
    images: ["/images/work-01.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
