import Reveal from "./Reveal";

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
    <section id="services" className="border-y border-ink/5 bg-shell/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5">What We Offer</p>
          <h2 className="heading-display">Full-Service Property Management</h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 100}>
              <div className="card-editorial h-full bg-cream p-10">
                <div className="hairline mb-7 w-12" aria-hidden="true" />
                <h3 className="font-serif text-[1.35rem] leading-snug font-normal text-ink">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-sm leading-[1.75] text-stone-warm">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
