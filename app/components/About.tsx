import Reveal from "./Reveal";

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
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5">The C3 Difference</p>
          <h2 className="heading-display">
            Real Estate,
            <br />
            Reimagined
          </h2>
          <div className="hairline mt-8 w-16" aria-hidden="true" />
          <p className="mt-8 leading-[1.8] text-stone-warm">
            C3 Properties is the real estate arm of Stay Starving Holdings.
            Backed by licensed Florida Realtors with over four years of
            experience and three years of hands-on property management, we
            operate a portfolio of rental properties optimized for maximum
            cash flow through dynamic pricing, automated guest communication,
            and smart home technology.
          </p>
          <p className="mt-6 leading-[1.8] text-stone-warm">
            Whether you need short-term vacation rental management or
            long-term tenant placement, our approach combines traditional
            real estate fundamentals with modern automation. Every property
            in our portfolio is treated as a business unit with clear KPIs,
            automated operations, and continuous optimization for peak
            performance.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.number} delay={index * 120}>
              <div className="card-editorial bg-white p-9">
                <p className="eyebrow mb-3 text-[0.62rem]">{item.number}</p>
                <h3 className="font-serif text-2xl font-normal text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-stone-warm">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
