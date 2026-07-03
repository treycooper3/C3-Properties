import type { Metadata } from "next";
import GeoLandingPage, { type GeoPageData } from "../components/GeoLandingPage";
import { SITE_URL } from "../lib/site";

const TITLE = "Airbnb Management on the Space Coast | C3 Properties";
const DESCRIPTION =
  "Superhost-level Airbnb management for Space Coast property owners. Listing optimization, dynamic pricing, and 24/7 guest communication from a local Melbourne, FL team. Call (407) 394-5358.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/airbnb-management-space-coast` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/airbnb-management-space-coast`, images: [`${SITE_URL}/og.jpg`] },
};

const DATA: GeoPageData = {
  slug: "airbnb-management-space-coast",
  eyebrow: "Space Coast, Florida",
  headline: "Airbnb management on the Space Coast, run by an actual Superhost",
  intro: [
    "The Space Coast is one of Florida's most distinctive short-term rental markets: 72 miles of beaches, rocket launches from Cape Canaveral, cruise traffic through Port Canaveral, and a steady stream of aerospace professionals on work trips. C3 Properties manages Airbnb properties across this market from our home base in Melbourne, FL.",
    "We are operators, not just marketers. Our own flagship listing carries Airbnb Superhost status with a 4.9/5 guest rating, and we apply the exact same systems — dynamic pricing, automated messaging, meticulous turnovers — to every owner property we manage.",
  ],
  serviceName: "Airbnb Management on the Space Coast",
  serviceDescription:
    "Full-service Airbnb and short-term rental management for Space Coast property owners: listing creation, dynamic pricing, automated guest communication, cleaning coordination, and tax remittance.",
  sections: [
    {
      title: "Launch-day demand, priced correctly",
      body: "Space Coast demand spikes are unlike anywhere else — a single launch window at Cape Canaveral can move nightly rates dramatically for homes within driving distance of the viewing spots. Our AI-powered pricing adjusts in real time to launches, cruise departures, beach season, and local events, so your calendar captures the spikes instead of sleeping through them at a flat rate.",
    },
    {
      title: "Everything an Airbnb owner needs",
      body: "We build and optimize the listing with professional staging and honest photography, respond to every guest inquiry 24/7 through automated messaging, coordinate cleaning and maintenance between stays, manage smart locks and self check-in, request reviews at the right moment, and remit Florida sales tax and Brevard County tourist development tax. You get a monthly report; guests get a five-star stay; the property earns while you sleep.",
    },
    {
      title: "Beyond Airbnb: three platforms, one calendar",
      body: "Airbnb is the anchor, but we also distribute listings on Vrbo and Booking.com with synchronized calendars, so occupancy is not hostage to one platform's algorithm. Our managed Melbourne property runs near 80% average occupancy on this multi-platform approach.",
    },
  ],
  faqs: [
    {
      question: "Do you manage Airbnb properties for owners on the Space Coast?",
      answer:
        "Yes — that is our core service. We manage Airbnb and multi-platform short-term rentals for owners across the Space Coast, including Melbourne, Melbourne Beach, Satellite Beach, Palm Bay, and Viera.",
    },
    {
      question: "What makes Space Coast Airbnb pricing different?",
      answer:
        "Rocket launches, cruise schedules, and beach seasonality create sharp demand spikes. Our dynamic pricing tracks these events and adjusts nightly rates automatically so owners capture peak-demand revenue.",
    },
    {
      question: "Are you a Superhost?",
      answer:
        "Yes. Our flagship Melbourne listing holds Airbnb Superhost status with a 4.9/5 guest rating, and every managed property runs on the same hospitality systems.",
    },
    {
      question: "How do I get started?",
      answer:
        "Request a free property assessment through the contact form at c3properties.com or call (407) 394-5358. We will analyze your property's earning potential and send a clear proposal.",
    },
  ],
};

export default function Page() {
  return <GeoLandingPage data={DATA} />;
}
