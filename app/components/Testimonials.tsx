import Reveal from "./Reveal";

const REVIEWS = [
  {
    text: "The property was immaculate and the check-in process was seamless. Best Airbnb experience we've had.",
    author: "Sarah M.",
    date: "February 2026",
  },
  {
    text: "Great location, beautifully furnished, and the host communication was top-notch. Will definitely book again.",
    author: "James R.",
    date: "January 2026",
  },
  {
    text: "Perfect getaway spot near the beach. Everything was exactly as described. Highly recommend!",
    author: "Lisa K.",
    date: "December 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-5">Guest Reviews</p>
        <h2 className="heading-display">What Our Guests Say</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <Reveal key={review.author} delay={index * 120}>
            <figure className="card-editorial h-full bg-white p-10">
              <div
                className="font-serif text-6xl leading-none font-normal text-sand"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="mt-3 font-serif leading-[1.7] text-ink/75 italic">
                {review.text}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-ink">{review.author}</span>
                <span className="mt-1 block text-xs tracking-[0.12em] text-stone-warm uppercase">
                  {review.date}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
