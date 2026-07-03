import type { Metadata } from "next";
import GeoLandingPage, { type GeoPageData } from "../components/GeoLandingPage";
import { SITE_URL } from "../lib/site";

const TITLE = "Property Management in Melbourne, FL | C3 Properties";
const DESCRIPTION =
  "Full-service property management in Melbourne, Florida. Short-term and long-term rental management with dynamic pricing, automated guest communication, and 4.9/5-rated hospitality. Call (407) 394-5358.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/property-management-melbourne-fl` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/property-management-melbourne-fl`, images: [`${SITE_URL}/og.jpg`] },
};

const DATA: GeoPageData = {
  slug: "property-management-melbourne-fl",
  eyebrow: "Melbourne, Florida",
  headline: "Property management in Melbourne, FL — built on hospitality and automation",
  intro: [
    "C3 Properties is a boutique property management company headquartered right here in Melbourne, Florida. We manage short-term vacation rentals and long-term rentals across the city — from downtown Melbourne and Eau Gallie to the neighborhoods minutes from the beaches — combining licensed Florida real estate experience with modern automation.",
    "Owners work with us because we treat every home like a business unit: dynamic nightly pricing, 24/7 automated guest communication, professional cleaning coordination, smart home technology, and transparent monthly reporting. Guests come back because every stay feels warm, spotless, and effortless.",
  ],
  serviceName: "Property Management in Melbourne, FL",
  serviceDescription:
    "Full-service short-term and long-term rental property management in Melbourne, Florida, including dynamic pricing, guest communication, cleaning coordination, and owner reporting.",
  sections: [
    {
      title: "Why Melbourne owners choose C3 Properties",
      body: "Melbourne sits at the heart of Florida's Space Coast — minutes from the beaches, Melbourne Orlando International Airport, and the aerospace employers that keep demand for quality stays steady year-round. Our flagship Melbourne rental holds a 4.9/5 guest rating and Airbnb Superhost status while running near 80% average occupancy, and the same playbook powers every property we take on: honest photography, optimized listings across Airbnb, Vrbo, and Booking.com, and pricing that moves with demand instead of sitting still.",
    },
    {
      title: "What full-service management includes",
      body: "We handle the entire operation: listing creation and optimization, AI-powered dynamic pricing, automated guest messaging from inquiry to review, cleaning and turnover coordination, smart lock and thermostat management, maintenance dispatch, tourist development tax collection and remittance, and a monthly owner report with clear KPIs. Long-term owners get tenant placement and lease management under the same disciplined system.",
    },
    {
      title: "Local, licensed, and accountable",
      body: "C3 Properties LLC is a Melbourne-based company backed by licensed Florida Realtors and operating in compliance with Florida Statutes Chapter 509 and Brevard County short-term rental ordinances. When something needs attention at your property, we are not a national call center — we are twenty minutes away.",
    },
  ],
  faqs: [
    {
      question: "What does property management cost in Melbourne, FL?",
      answer:
        "Every property is different, so we start with a free property assessment: market data, projected nightly rates, and a management proposal specific to your home. Submit the contact form or call (407) 394-5358 to get started.",
    },
    {
      question: "Do you manage both short-term and long-term rentals?",
      answer:
        "Yes. We manage short-term vacation rentals on Airbnb, Vrbo, and Booking.com as well as long-term tenant placement and lease management throughout Melbourne and Brevard County.",
    },
    {
      question: "How do you maximize rental revenue?",
      answer:
        "Dynamic pricing algorithms adjust nightly rates based on demand, seasonality, and local events like rocket launches; automated messaging keeps response times fast and reviews strong; and professional staging and photography keep the listing converting.",
    },
    {
      question: "Are you compliant with Florida vacation rental rules?",
      answer:
        "Yes. We operate in compliance with Florida Statutes Chapter 509, maintain DBPR registrations for managed properties, and collect and remit Florida sales tax and Brevard County tourist development tax.",
    },
  ],
};

export default function Page() {
  return <GeoLandingPage data={DATA} />;
}
