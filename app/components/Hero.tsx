import Image from "next/image";
import { BUSINESS } from "../lib/site";

const STATS = [
  { value: "4.9/5", label: "Guest Rating" },
  { value: "80%", label: "Avg Occupancy" },
  { value: "24/7", label: "Guest Support" },
  { value: "4+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div>
          <p className="eyebrow mb-5">Melbourne, Florida &middot; Space Coast</p>
          <h1 className="font-serif text-5xl leading-[1.08] font-semibold text-ink sm:text-6xl">
            Where the Space Coast feels like{" "}
            <span className="text-teal">home</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-warm">
            Boutique short-term rental management that maximizes returns
            through smart automation, dynamic pricing, and warm, five-star
            guest experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-teal-deep"
            >
              Schedule an Assessment
            </a>
            <a
              href="#property"
              className="rounded-full border border-teal/30 px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal/5"
            >
              See the Property
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-stone-warm">
            <span className="inline-flex h-6 items-center rounded-full bg-sand-soft px-3 text-xs font-semibold text-ink">
              ★ Airbnb Superhost
            </span>
            Listed on 3 booking platforms
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-sand-soft" aria-hidden="true" />
          <Image
            src="/photos/hero-exterior.jpg"
            alt={`Warm Melbourne home near the beach managed by ${BUSINESS.name}`}
            width={1920}
            height={1434}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>

      <div className="border-y border-ink/5 bg-shell/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-4xl font-semibold text-teal">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold tracking-[0.18em] text-stone-warm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
