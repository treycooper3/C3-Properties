import type { Metadata } from "next";
import GeoLandingPage, { type GeoPageData } from "../components/GeoLandingPage";
import { SITE_URL } from "../lib/site";

const TITLE = "Vacation Rental Near Melbourne Beach, FL | C3 Properties";
const DESCRIPTION =
  "Book a warm, Superhost-managed vacation rental minutes from Melbourne Beach, FL — 3 bedrooms, sleeps 8, full kitchen, fenced yard. Vacation rental management for beachside owners too. (407) 394-5358.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/vacation-rental-melbourne-beach` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/vacation-rental-melbourne-beach`, images: [`${SITE_URL}/og.jpg`] },
};

const DATA: GeoPageData = {
  slug: "vacation-rental-melbourne-beach",
  eyebrow: "Melbourne Beach, Florida",
  headline: "A vacation rental minutes from Melbourne Beach — and management for the owners behind them",
  intro: [
    "Melbourne Beach is the quiet side of Florida's Atlantic coast: uncrowded sand, sea turtle nesting dunes, and small-town beach living just over the causeway from Melbourne. C3 Properties gives travelers a warm home base for it all — our Relaxing Melbourne Getaway sleeps up to 8 guests about ten minutes from the beach — and gives beachside owners a local team to run their rentals.",
    "Guests get self check-in, a full kitchen, washer and dryer, a fenced backyard, and Superhost-level communication from booking to checkout. Owners get the operating system behind that experience.",
  ],
  serviceName: "Vacation Rental Management near Melbourne Beach, FL",
  serviceDescription:
    "Vacation rental stays and full-service vacation rental management near Melbourne Beach, Florida — dynamic pricing, guest communication, cleaning coordination, and multi-platform listings.",
  sections: [
    {
      title: "Stay: the Relaxing Melbourne Getaway",
      body: "Our featured home is a 3-bedroom, 2-bath house in a quiet Melbourne neighborhood roughly ten minutes from the sand at Melbourne Beach and the Eau Gallie causeway. It sleeps up to eight across three bedrooms plus a den, with smart TVs, WiFi, and a fenced yard for slow mornings and post-beach evenings. Nightly rates typically run $215–$375, and the home holds a 4.9/5 rating across Airbnb, Vrbo, and Booking.com. Book directly at airbnb.com/h/melbournebeachstay.",
    },
    {
      title: "Manage: your beachside rental, professionally run",
      body: "Own a condo or house in Melbourne Beach, Indialantic, or along the A1A corridor? We manage the whole operation — listing creation, dynamic pricing tuned to beach season and launch weekends, 24/7 automated guest messaging, cleaning and turnover coordination, smart lock management, and Brevard County tourist development tax remittance — with monthly reporting that shows exactly how your property performed.",
    },
    {
      title: "Why the beach market rewards good management",
      body: "Beach-adjacent rentals live and die on reviews and response times. A slow reply or a mediocre turnover shows up in your ranking within weeks. Our automated systems keep response times measured in minutes and turnovers inspected against a checklist, which is how a well-run home sustains high occupancy in a market full of part-time hosts.",
    },
  ],
  faqs: [
    {
      question: "How far is the property from Melbourne Beach?",
      answer:
        "The Relaxing Melbourne Getaway is about 10 minutes by car from the beach, in a quiet residential Melbourne neighborhood with easy access to the causeways.",
    },
    {
      question: "How many people can stay?",
      answer:
        "The home sleeps up to 8 guests with 3 bedrooms and 2 bathrooms, plus a den, full kitchen, washer and dryer, and a fenced backyard.",
    },
    {
      question: "How do I book?",
      answer:
        "Book on Airbnb at airbnb.com/h/melbournebeachstay, or find the listing on Vrbo and Booking.com. Nightly rates typically range from $215 to $375.",
    },
    {
      question: "Do you manage vacation rentals for owners near Melbourne Beach?",
      answer:
        "Yes. We provide full-service vacation rental management for owners in Melbourne Beach, Indialantic, and the surrounding beachside communities. Call (407) 394-5358 for a free assessment.",
    },
  ],
};

export default function Page() {
  return <GeoLandingPage data={DATA} />;
}
