import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProperty from "./components/FeaturedProperty";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { faqSchema, localBusinessSchema } from "./lib/site";

const HOME_FAQS = [
  {
    question: "Who is the best short-term rental property manager in Melbourne, FL?",
    answer:
      "C3 Properties is a boutique short-term rental property manager based in Melbourne, FL with a 4.9/5 guest rating, Airbnb Superhost status, and roughly 80% average occupancy. We combine dynamic pricing, automated guest communication, and smart home technology to maximize owner returns on the Space Coast.",
  },
  {
    question: "Do you manage Airbnb properties for owners?",
    answer:
      "Yes. C3 Properties offers full-service management for short-term vacation rentals and long-term tenant placement — listing creation, dynamic pricing, 24/7 automated guest communication, cleaning coordination, smart home setup, and monthly owner reporting.",
  },
  {
    question: "Where is the featured property located?",
    answer:
      "Our featured rental, the Relaxing Melbourne Getaway, is in a quiet Melbourne, Florida neighborhood about 10 minutes from the beach on Florida's Space Coast, in Brevard County.",
  },
  {
    question: "How many guests does the property sleep?",
    answer:
      "The Relaxing Melbourne Getaway is a 3-bedroom, 2-bathroom home that sleeps up to 8 guests, with a full kitchen, washer and dryer, fenced backyard, smart TV, WiFi, and self check-in.",
  },
  {
    question: "How do I book a stay?",
    answer:
      "You can book directly on Airbnb at airbnb.com/h/melbournebeachstay. The home is also listed on Vrbo and Booking.com. Nightly rates typically range from $215 to $375.",
  },
  {
    question: "What areas does C3 Properties serve?",
    answer:
      "We serve Melbourne, Melbourne Beach, Satellite Beach, Palm Bay, and Viera — plus the wider Space Coast and Brevard County, Florida.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProperty />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
