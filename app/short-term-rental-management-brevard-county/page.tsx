import type { Metadata } from "next";
import GeoLandingPage, { type GeoPageData } from "../components/GeoLandingPage";
import { SITE_URL } from "../lib/site";

const TITLE = "Short-Term Rental Management in Brevard County | C3 Properties";
const DESCRIPTION =
  "STR management across Brevard County, FL — Melbourne, Palm Bay, Viera, Satellite Beach. Compliant, tax-remitting, Superhost-level operations with dynamic pricing. Call (407) 394-5358.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/short-term-rental-management-brevard-county` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/short-term-rental-management-brevard-county`, images: [`${SITE_URL}/og.jpg`] },
};

const DATA: GeoPageData = {
  slug: "short-term-rental-management-brevard-county",
  eyebrow: "Brevard County, Florida",
  headline: "Short-term rental management across Brevard County, done by the book",
  intro: [
    "Brevard County stretches from Titusville past Cocoa Beach down through Melbourne and Palm Bay — a 72-mile short-term rental market fed by beaches, rocket launches, cruise traffic, and one of the country's densest aerospace job corridors. C3 Properties manages short-term rentals across this county from Melbourne, with systems built for exactly this kind of demand.",
    "We are backed by licensed Florida Realtors, operate in compliance with Florida Statutes Chapter 509 and Brevard County short-term rental ordinances, and collect and remit the county's tourist development tax on every stay. Professional management here is not optional paperwork — it is the difference between a compliant, compounding asset and a liability.",
  ],
  serviceName: "Short-Term Rental Management in Brevard County, FL",
  serviceDescription:
    "Compliant, full-service short-term rental management throughout Brevard County, Florida — dynamic pricing, automated guest communication, cleaning coordination, DBPR licensing support, and tourist development tax remittance.",
  sections: [
    {
      title: "Compliance is the floor, not the ceiling",
      body: "Every property we manage maintains its required DBPR registration, and we handle Florida sales tax (6%) and Brevard County tourist development tax (5%) collection and remittance as part of standard service. Owners never have to reconstruct a tax season from platform payouts. From that compliant base, we optimize: dynamic pricing tuned to launches and beach season, multi-platform distribution on Airbnb, Vrbo, and Booking.com, and automated guest communication that keeps ratings high.",
    },
    {
      title: "One operating system, county-wide",
      body: "Whether your property is in Melbourne, Palm Bay, Viera, Satellite Beach, or near the beaches along A1A, it runs on the same playbook that earned our flagship listing Airbnb Superhost status and a 4.9/5 guest rating at roughly 80% average occupancy: honest photography, professional staging, smart home technology for self check-in, checklist-driven turnovers, and monthly owner reports with clear KPIs.",
    },
    {
      title: "Built for owners who think like investors",
      body: "C3 Properties is the real estate arm of Stay Starving Holdings, and we treat every home as a business unit — market analysis before we take it on, revenue optimization while it operates, and straight answers about what the numbers say. If a property will not perform as a short-term rental, we will tell you, and we can pivot it to a furnished long-term strategy instead.",
    },
  ],
  faqs: [
    {
      question: "Which Brevard County areas do you serve?",
      answer:
        "We serve Melbourne, Melbourne Beach, Satellite Beach, Palm Bay, and Viera, plus surrounding Space Coast communities throughout Brevard County, Florida.",
    },
    {
      question: "Do you handle Brevard County tourist development tax?",
      answer:
        "Yes. We collect and remit Florida state sales tax and the Brevard County tourist development tax on every managed stay, and maintain the records Florida law requires.",
    },
    {
      question: "What results do your managed properties see?",
      answer:
        "Our flagship Melbourne property runs at roughly 80% average occupancy with a 4.9/5 guest rating and Airbnb Superhost status, with nightly rates typically between $215 and $375.",
    },
    {
      question: "How do I start with C3 Properties?",
      answer:
        "Request a free property assessment via the contact form at c3properties.com or call (407) 394-5358. You will get market data, projected rates, and a management proposal for your specific property.",
    },
  ],
};

export default function Page() {
  return <GeoLandingPage data={DATA} />;
}
