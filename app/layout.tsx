import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const TITLE =
  "C3 Properties | Premium Property Management & Vacation Rentals — Melbourne, FL";
const DESCRIPTION =
  "C3 Properties manages premium short-term and vacation rentals on Florida's Space Coast. Dynamic pricing, automated operations, and five-star guest experiences in Melbourne, FL. Superhost-managed, sleeps 8, minutes from the beach.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "property management Melbourne FL",
    "vacation rental management",
    "short-term rental management",
    "Airbnb management Space Coast",
    "Airbnb property manager Brevard County",
    "Melbourne Florida vacation rental",
    "STR management Florida",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "C3 Properties",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Warm Melbourne home near the beach managed by C3 Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.jpg`],
    creator: "@treythesavage3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/markdown" href="/index.md" />
        <link rel="help" type="text/plain" href="/llms.txt" />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
