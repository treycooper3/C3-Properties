const HIGHLIGHTS = [
  {
    number: "01",
    title: "AI-Powered Pricing",
    body: "Dynamic algorithms adjust nightly rates in real-time based on demand, seasonality, local events, and competitor analysis to maximize revenue per available night.",
  },
  {
    number: "02",
    title: "Automated Operations",
    body: "From guest communication to cleaning coordination, our systems run 24/7 so your property earns while you sleep. Zero missed messages, zero missed bookings.",
  },
  {
    number: "03",
    title: "Premium Guest Experience",
    body: "Smart home technology, professional staging, and instant communication create five-star stays that generate repeat bookings and organic referrals.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">The C3 Difference</p>
          <h2 className="font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Hospitality first,
            <br />
            systems always
          </h2>
          <p className="mt-7 leading-relaxed text-stone-warm">
            C3 Properties is the real estate arm of Stay Starving Holdings.
            Backed by licensed Florida Realtors with over four years of
            experience and three years of hands-on property management, we
            operate a portfolio of rental properties optimized for maximum
            cash flow through dynamic pricing, automated guest communication,
            and smart home technology.
          </p>
          <p className="mt-5 leading-relaxed text-stone-warm">
            Whether you need short-term vacation rental management or
            long-term tenant placement, our approach combines traditional
            real estate fundamentals with modern automation. Every property
            in our portfolio is treated as a business unit with clear KPIs,
            automated operations, and continuous optimization for peak
            performance.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-ink/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand-soft font-serif text-sm font-semibold text-ink">
                {item.number}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-warm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
