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
    <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="eyebrow mb-4">Guest Reviews</p>
        <h2 className="font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl">
          What our guests say
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <figure key={review.author} className="rounded-2xl bg-sand-soft/70 p-8">
            <div className="font-serif text-5xl leading-none text-sand" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote className="mt-2 leading-relaxed text-ink/80 italic">
              {review.text}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-ink">{review.author}</span>
              <span className="mt-0.5 block text-stone-warm">{review.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
