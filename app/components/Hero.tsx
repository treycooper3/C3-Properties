import Image from "next/image";
import { BUSINESS } from "../lib/site";
import Reveal from "./Reveal";

const HEADLINE_WORDS = ["Where", "Investment", "Meets"];

const STATS = [
  { value: "4.9/5", label: "Guest Rating" },
  { value: "80%", label: "Avg Occupancy" },
  { value: "24/7", label: "Guest Support" },
  { value: "4+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <p className="eyebrow hero-fade mb-7">
            Premium Property Management &middot; Melbourne, Florida
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.08] font-normal text-ink">
            {HEADLINE_WORDS.map((word, index) => (
              <span key={word}>
                <span className="hero-word">
                  <span style={{ animationDelay: `${0.1 + index * 0.1}s` }}>{word}</span>
                </span>{" "}
              </span>
            ))}
            <span className="hero-word">
              <span className="text-teal italic" style={{ animationDelay: "0.4s" }}>
                Excellence
              </span>
            </span>
          </h1>
          <div className="hairline hero-line mt-7 w-20" aria-hidden="true" />
          <p
            className="hero-fade mt-7 max-w-md font-serif text-lg leading-relaxed text-stone-warm italic"
            style={{ animationDelay: "0.5s" }}
          >
            Maximizing returns through smart automation, dynamic pricing, and
            exceptional guest experiences on Florida&apos;s Space Coast.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.65s" }}>
            <a href="#contact" className="btn-primary">
              Schedule an Assessment
            </a>
            <a href="#property" className="btn-ghost">
              See the Property
            </a>
          </div>
          <p
            className="hero-fade mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-warm"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="inline-flex h-7 items-center border border-sand/60 bg-sand-soft/70 px-3.5 text-[0.68rem] font-semibold tracking-[0.14em] text-ink uppercase">
              ★ Airbnb Superhost
            </span>
            Listed on 3 booking platforms
          </p>
        </div>

        <div className="hero-fade relative mr-4 mb-4" style={{ animationDelay: "0.35s" }}>
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 border border-teal/25"
            aria-hidden="true"
          />
          <Image
            src="/photos/hero-exterior.jpg"
            alt={`Warm Melbourne home near the beach managed by ${BUSINESS.name}`}
            width={1920}
            height={1434}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative aspect-[4/3] w-full object-cover lg:aspect-[4/4.4]"
          />
        </div>
      </div>

      <div className="border-y border-ink/10 bg-shell/60">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-14 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[2.6rem] leading-tight font-normal text-teal">
                {stat.value}
              </div>
              <div className="mt-2 text-[0.65rem] font-medium tracking-[0.25em] text-stone-warm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
