import Image from "next/image";
import { BUSINESS } from "../lib/site";
import Reveal from "./Reveal";

const GALLERY = [
  { src: "/photos/living-room.jpg", alt: "Bright living room with two sofas and smart TV", w: 1920, h: 1072 },
  { src: "/photos/kitchen.jpg", alt: "Full kitchen with stainless refrigerator and butcher-block counters", w: 1920, h: 1337 },
  { src: "/photos/bedroom-1.jpg", alt: "Primary bedroom with queen bed and ceiling fan", w: 1920, h: 1440 },
  { src: "/photos/bedroom-2.jpg", alt: "Second bedroom with queen bed", w: 1920, h: 1440 },
  { src: "/photos/bedroom-3.jpg", alt: "Third bedroom with desk workspace", w: 1920, h: 1440 },
  { src: "/photos/bathroom.jpg", alt: "Full bathroom with tub and vanity", w: 1920, h: 1404 },
  { src: "/photos/den.jpg", alt: "Den with sectional sofa and daybed", w: 1920, h: 1440 },
  { src: "/photos/backyard.jpg", alt: "Fenced backyard with green lawn", w: 1440, h: 1920 },
];

const AMENITIES = [
  "Full kitchen",
  "Washer & dryer",
  "Fenced backyard",
  "Smart TV",
  "WiFi",
  "Self check-in",
  "Quiet neighborhood",
  "Sleeps 8",
];

const METRICS = [
  { value: "$215 – $375", label: "Nightly Rate" },
  { value: "4.9/5", label: "Guest Rating" },
  { value: "Superhost", label: "Airbnb Status" },
];

export default function FeaturedProperty() {
  return (
    <section id="property" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-5">Featured Property</p>
        <h2 className="heading-display">Relaxing Melbourne Getaway</h2>
        <p className="mt-5 font-serif text-lg text-stone-warm italic">
          3 Bed &middot; 2 Bath &middot; Sleeps 8 &middot; 10 minutes from the beach
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {GALLERY.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.w}
            height={photo.h}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="aspect-[4/3] w-full object-cover"
          />
        ))}
      </Reveal>

      <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h3 className="font-serif text-3xl leading-snug font-normal text-ink">
            A warm home base for beach trips, launches, and long stays
          </h3>
          <div className="hairline mt-6 w-16" aria-hidden="true" />
          <p className="mt-6 leading-[1.8] text-stone-warm">
            Tucked into a quiet Melbourne neighborhood ten minutes from the
            sand, this three-bedroom home sleeps up to eight guests and is
            listed on Airbnb, Vrbo, and Booking.com. Every stay is backed by
            Superhost-level hospitality: self check-in, fast responses, and a
            spotless, professionally managed home.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {AMENITIES.map((amenity) => (
              <li key={amenity} className="flex items-center gap-2.5 text-sm text-ink/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sand" aria-hidden="true" />
                {amenity}
              </li>
            ))}
          </ul>
          <a
            href={BUSINESS.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Book on Airbnb →
          </a>
        </Reveal>

        <Reveal delay={150} className="grid gap-5">
          {METRICS.map((metric) => (
            <div key={metric.label} className="card-editorial bg-white p-7 text-center">
              <div className="font-serif text-2xl font-normal text-teal">{metric.value}</div>
              <div className="mt-1.5 text-[0.65rem] font-medium tracking-[0.25em] text-stone-warm uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="relative mt-20 overflow-hidden">
        <Image
          src="/photos/rocket-launch.jpg"
          alt="Rocket launch lighting up the night sky over the Space Coast"
          width={1920}
          height={1280}
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-8 sm:p-10">
          <p className="max-w-lg font-serif text-2xl leading-snug font-normal text-cream italic">
            This is the Space Coast — rocket launches light up the sky just up
            the road at Cape Canaveral.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
