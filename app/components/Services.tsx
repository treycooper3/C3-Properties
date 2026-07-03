const SERVICES = [
  {
    title: "Short-Term & Long-Term Management",
    body: "Full-service property management for both short-term vacation rentals and long-term tenants — from Airbnb listing creation to lease management.",
  },
  {
    title: "Dynamic Pricing Optimization",
    body: "AI-powered pricing algorithms that adjust nightly rates based on demand, seasonality, and local events.",
  },
  {
    title: "Automated Guest Communication",
    body: "24/7 automated messaging for inquiries, check-in instructions, and review requests.",
  },
  {
    title: "Property Setup & Staging",
    body: "Transform any property into a revenue-generating short-term rental with professional staging and photography.",
  },
  {
    title: "Smart Home Integration",
    body: "Keypad entry, smart thermostats, automated lighting, and security systems for seamless operations.",
  },
  {
    title: "Market Analysis & Acquisition",
    body: "Data-driven property analysis to identify high-ROI investment opportunities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-shell/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Full-service property management
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-ink/5 bg-cream p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 h-1.5 w-10 rounded-full bg-sand" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-warm">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
