export const SITE_URL = "https://c3properties.com";

export const BUSINESS = {
  name: "C3 Properties",
  legalName: "C3 Properties LLC",
  phone: "(407) 394-5358",
  phoneE164: "+14073945358",
  email: "info@c3properties.com",
  city: "Melbourne",
  state: "FL",
  country: "US",
  geo: { lat: 28.0836, lng: -80.6081 },
  priceRange: "$215 - $375 nightly",
  airbnbUrl: "https://airbnb.com/h/melbournebeachstay",
  areaServed: [
    "Melbourne FL",
    "Melbourne Beach FL",
    "Satellite Beach FL",
    "Palm Bay FL",
    "Viera FL",
    "Space Coast",
    "Brevard County FL",
  ],
} as const;

export const CONTACT_WEBHOOK_URL =
  "https://treycooper.app.n8n.cloud/webhook/c3-properties";

/** Shared LocalBusiness node for JSON-LD (homepage + geo landing pages). */
export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Boutique short-term rental and vacation rental property management on Florida's Space Coast. C3 Properties manages Airbnb and vacation rental properties in Melbourne, FL with dynamic pricing, automated guest communication, and five-star hospitality.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: `${SITE_URL}/og.jpg`,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    parentOrganization: {
      "@type": "Organization",
      name: "Stay Starving Holdings LLC",
    },
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
