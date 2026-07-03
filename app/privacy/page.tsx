import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "../components/LegalPage";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | C3 Properties",
  description:
    "How C3 Properties LLC collects, uses, and protects your information across our website and property management services in Melbourne, Florida.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const BLOCKS: LegalBlock[] = [
  { p: 'C3 Properties LLC ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our property management services in the State of Florida.' },
  { h2: "1. Information We Collect" },
  { h3: "1.1 Personal Information" },
  { p: "We may collect personal information that you voluntarily provide when you:" },
  { list: ["Submit a contact form or property assessment request", "Request a management consultation or revenue estimate", "Enter into a property management agreement with us", "Book a stay at one of our managed properties", "Communicate with us via email, phone, or other channels"] },
  { p: "This information may include:" },
  { list: ["Name and company name", "Email address", "Phone number", "Physical address and property location", "Property details and specifications", "Payment and billing information", "Government-issued identification (for guest verification)"] },
  { h3: "1.2 Automatically Collected Information" },
  { p: "When you access our website, we may automatically collect:" },
  { list: ["IP address and browser type", "Device information and operating system", "Pages visited and time spent on site", "Referring website addresses"] },
  { h3: "1.3 Smart Home Device Data" },
  { p: "Our managed properties may include smart home devices. Data collected may include:" },
  { list: ["Noise level monitoring (decibel levels only, no audio recording)", "Occupancy detection (guest count verification)", "Energy usage and thermostat settings", "Smart lock access logs"] },
  { note: "Important: We do not install or operate any cameras, audio recording devices, or surveillance equipment inside our managed properties. All smart home monitoring is limited to environmental sensors and access logs." },
  { h2: "2. How We Use Your Information" },
  { p: "We use the information we collect to:" },
  { list: ["Respond to your inquiries and provide customer service", "Process property management consultations and agreements", "Manage short-term rental operations and guest communications", "Optimize property pricing and revenue strategies", "Send property reports, invoices, and service-related communications", "Comply with Florida vacation rental regulations", "Maintain records as required by Florida Department of Business and Professional Regulation", "Improve our website and services", "Protect against fraud and unauthorized activity"] },
  { h2: "3. Disclosure of Your Information" },
  { p: "We may share your information in the following circumstances:" },
  { h3: "3.1 Service Providers" },
  { p: "We may share information with third-party vendors who perform services on our behalf, including:" },
  { list: ["Booking platforms (Airbnb, VRBO, Booking.com)", "Payment processing services", "Property maintenance and cleaning providers", "Dynamic pricing and revenue management tools", "Website hosting and analytics services"] },
  { h3: "3.2 Legal Requirements" },
  { p: "We may disclose information when required by law, including:" },
  { list: ["Compliance with Florida Statutes and regulations", "Response to subpoenas, court orders, or legal process", "Tax reporting to Florida Department of Revenue (tourist development tax)", "Cooperation with law enforcement agencies"] },
  { h3: "3.3 Business Transfers" },
  { p: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction." },
  { h2: "4. Florida-Specific Disclosures" },
  { note: "As a property management company operating in Florida, we comply with Florida Statutes Chapter 509 (Public Lodging Establishments) and all applicable Brevard County ordinances regarding short-term vacation rentals." },
  { h3: "4.1 Vacation Rental Records" },
  { p: "Under Florida law, we maintain property and guest documentation including:" },
  { list: ["Guest registration records", "Property management agreements", "Tax collection and remittance records", "Insurance and licensing documentation"] },
  { h3: "4.2 Tax Collection" },
  { p: "We collect and remit applicable taxes on behalf of property owners, including Florida state sales tax, Brevard County tourist development tax, and any other applicable local taxes." },
  { h2: "5. Data Security" },
  { p: "We implement appropriate technical and organizational measures to protect your personal information, including:" },
  { list: ["Secure Socket Layer (SSL) encryption for data transmission", "Secure storage of electronic records", "Limited access to personal information on a need-to-know basis", "Regular security assessments and updates", "Encrypted storage of payment information through PCI-compliant processors"] },
  { p: "However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security." },
  { h2: "6. Your Rights and Choices" },
  { p: "You have the right to:" },
  { list: ["Access: Request a copy of the personal information we hold about you", "Correction: Request correction of inaccurate information", "Deletion: Request deletion of your information, subject to legal retention requirements", "Opt-out: Unsubscribe from marketing communications at any time"] },
  { p: "To exercise these rights, contact us using the information below." },
  { h2: "7. Cookies and Tracking Technologies" },
  { p: "Our website may use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality." },
  { h2: "8. Third-Party Links" },
  { p: "Our website may contain links to third-party websites, including booking platforms and partner services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information." },
  { h2: "9. Children's Privacy" },
  { p: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children." },
  { h2: "10. Changes to This Privacy Policy" },
  { p: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy." },
  { h2: "11. Contact Us" },
  { p: "If you have questions about this Privacy Policy or our privacy practices, please contact us: C3 Properties LLC, Melbourne, Florida — info@c3properties.com — (407) 394-5358. A Stay Starving Holdings Company." },
  { note: "Legal Notice: This Privacy Policy is provided for informational purposes and is designed to comply with Florida law and industry standards. For specific legal advice, please consult with a qualified attorney." },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" effectiveDate="March 5, 2026" blocks={BLOCKS} />;
}
